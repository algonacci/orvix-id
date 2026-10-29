import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Link, MemoryRouter } from "react-router-dom";
import AttributionCookie from "@/components/AttributionCookie";
import { buildAttributionCookie, captureAttributionCookie } from "@/lib/attributionCookie";

const now = 1793200000000;
const decode = (cookie: string) => JSON.parse(decodeURIComponent(cookie.split(";")[0].slice("orvix_attr=".length)));
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe("attribution cookie", () => {
  it("captures all allowed fields and excludes unrelated query/PII", () => {
    const cookie = buildAttributionCookie("?utm_source=meta&utm_medium=paid&utm_campaign=launch&utm_content=story&utm_term=ai&fbclid=click&email=private@example.com&token=secret", "/harga", "", now)!;
    expect(decode(cookie)).toEqual({ v: 1, utm_source: "meta", utm_medium: "paid", utm_campaign: "launch", utm_content: "story", utm_term: "ai", fbclid: "click", fbc_ts: now, landing_path: "/harga", ts: now });
    expect(cookie).toContain("; Domain=.orvix.id; Path=/; Max-Age=2419200; SameSite=Lax; Secure");
    expect(cookie).not.toMatch(/private|secret|email|token/);
  });
  it.each(["", "x".repeat(201), "café", "a\nb", "a\tb", "a\x7fb", "private@example.com"])("ignores invalid parameter %j", value => {
    expect(decode(buildAttributionCookie(`?utm_source=meta&utm_term=${encodeURIComponent(value)}`, "/", "", now)!)).not.toHaveProperty("utm_term");
    expect(buildAttributionCookie(`?utm_source=${encodeURIComponent(value)}`, "/")).toBeUndefined();
  });
  it("accepts the 200 character boundary and encoded printable punctuation", () => {
    expect(decode(buildAttributionCookie(`?utm_source=${"a".repeat(200)}&utm_term=a%20b%3Bc`, "/")!).utm_term).toBe("a b;c");
  });
  it("enforces the encoded total size, including cookie attributes", () => {
    const small = buildAttributionCookie(`?utm_source=${"a".repeat(200)}`, "/")!;
    expect(small.length).toBeLessThan(1024);
    const params = new URLSearchParams({ utm_source: " ".repeat(200), utm_campaign: " ".repeat(200) });
    expect(buildAttributionCookie(params.toString(), "/")).toBeUndefined();
  });
  it.each(["/" + "a".repeat(200), "/private@example.com", "/private%40example.com", "/bad%ZZ"])("rejects invalid or email-containing path %s", path => {
    expect(buildAttributionCookie("?utm_source=meta", path)).toBeUndefined();
  });
  it("preserves first observation for the same click but timestamps a new click", () => {
    const first = buildAttributionCookie("?fbclid=first", "/", "", now)!;
    expect(decode(buildAttributionCookie("?fbclid=first&utm_source=meta", "/harga", first, now + 1000)!).fbc_ts).toBe(now);
    expect(decode(buildAttributionCookie("?fbclid=second", "/", first, now + 1000)!).fbc_ts).toBe(now + 1000);
    expect(decode(buildAttributionCookie("?utm_source=new", "/", first, now + 1000)!)).not.toHaveProperty("fbclid");
  });
  it.each(["orvix_attr=%broken", "orvix_attr=null", `orvix_attr=${encodeURIComponent(JSON.stringify({ v: 1, fbclid: "click", fbc_ts: now + 1 }))}`])("recovers from malformed or future stored timestamps", stored => {
    expect(decode(buildAttributionCookie("?fbclid=click", "/", stored, now)!).fbc_ts).toBe(now);
  });
  it("does not write or refresh the cookie without valid attribution parameters", () => {
    const setter = vi.spyOn(document, "cookie", "set").mockImplementation(() => {});
    for (const search of ["", "?email=private@example.com", "?utm_source=", "?utm_source=%00"]) captureAttributionCookie(search, "/harga");
    expect(setter).not.toHaveBeenCalled();
  });
  it("ignores blocked cookie reads and writes", () => {
    const getter = vi.spyOn(document, "cookie", "get").mockImplementation(() => { throw new Error("blocked"); });
    expect(() => captureAttributionCookie("?utm_source=meta", "/")).not.toThrow();
    getter.mockReturnValue("");
    vi.spyOn(document, "cookie", "set").mockImplementation(() => { throw new Error("blocked"); });
    expect(() => captureAttributionCookie("?utm_source=meta", "/")).not.toThrow();
  });
  it("captures non-checkout routes and SPA query changes without overwriting on direct navigation", () => {
    const setter = vi.spyOn(document, "cookie", "set").mockImplementation(() => {});
    render(<MemoryRouter initialEntries={["/harga?utm_source=meta"]}><AttributionCookie /><Link to="/kontak">Direct</Link><Link to="/kontak?utm_source=search">Campaign</Link></MemoryRouter>);
    expect(decode(setter.mock.calls[0][0])).toMatchObject({ landing_path: "/harga", utm_source: "meta" });
    fireEvent.click(screen.getByText("Direct"));
    expect(setter).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText("Campaign"));
    expect(setter).toHaveBeenCalledTimes(2);
    expect(decode(setter.mock.calls[1][0])).toMatchObject({ landing_path: "/kontak", utm_source: "search" });
  });
});
