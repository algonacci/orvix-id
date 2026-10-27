import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import AiPlanCheckout from "@/components/AiPlanCheckout";
import { captureAttribution, checkoutKey, checkoutRequest, restoreCheckout, saveCheckout } from "@/lib/aiCheckout";
import { pixelAllowed, trackPixel } from "@/lib/aiPixel";
const fixture = { checkoutId: "test-id", checkoutSecret: "test-secret", amountIdr: 100000, qrisPayload: "MOCK-NOT-PAYABLE", expiresAt: "2099-01-01T00:00:00Z", emailMasked: "t***@example.com" };
const response = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status });
beforeEach(() => { sessionStorage.clear(); vi.stubEnv("VITE_GATEWAY_URL", "https://gateway.invalid"); vi.stubEnv("VITE_META_PIXEL_ID", ""); });
afterEach(() => { cleanup(); vi.unstubAllGlobals(); vi.unstubAllEnvs(); vi.restoreAllMocks(); });

describe("checkout security contract", () => {
  it("persists the latest secret, strips unknown fields, rejects missing secrets", () => {
    saveCheckout(fixture);
    saveCheckout({ ...fixture, checkoutSecret: "new-secret", ...{ email: "private@example.com", session: "not-allowed" } });
    expect(restoreCheckout().checkout?.checkoutSecret).toBe("new-secret");
    expect(sessionStorage.getItem(checkoutKey)).not.toContain("private");
    sessionStorage.setItem(checkoutKey, JSON.stringify({ checkoutId: "id" }));
    expect(restoreCheckout()).toEqual({ checkout: null, invalid: true });
    expect(sessionStorage.getItem(checkoutKey)).toBeNull();
  });
  it("uses header-only secret and omits cookies/referrer with exact response status", async () => {
    const fetch = vi.fn().mockResolvedValue(response({ accepted: true }, 202)); vi.stubGlobal("fetch", fetch);
    await checkoutRequest("/test-id/resend", "POST", undefined, fixture.checkoutSecret);
    expect(fetch).toHaveBeenCalledWith("https://gateway.invalid/checkout/ai-plan/test-id/resend", expect.objectContaining({ credentials: "omit", cache: "no-store", referrerPolicy: "no-referrer", headers: { "X-Checkout-Secret": fixture.checkoutSecret } }));
    fetch.mockResolvedValue(response({}, 200));
    await expect(checkoutRequest("", "POST", { email: "test@example.com" })).rejects.toThrow();
  });
  it("has no gateway fallback", async () => {
    vi.stubEnv("VITE_GATEWAY_URL", ""); const fetch = vi.fn(); vi.stubGlobal("fetch", fetch);
    await expect(checkoutRequest("", "POST", {})).rejects.toThrow(); expect(fetch).not.toHaveBeenCalled();
  });
  it("attribution allowlists fields and excludes raw email and source query", () => {
    history.replaceState({}, "", "/ai-plan?utm_source=meta&fbclid=click&email=private@example.com");
    const attribution = captureAttribution();
    expect(attribution).toMatchObject({ utm_source: "meta", fbclid: "click" });
    expect(JSON.stringify(attribution)).not.toContain("private");
    expect(attribution.event_source_url).toBeUndefined(); // jsdom HTTP: never send insecure source.
  });
  it("blocks Pixel for blank configuration, other routes, automation and bots", () => {
    history.replaceState({}, "", "/ai-plan"); expect(pixelAllowed("")).toBe(false);
    history.replaceState({}, "", "/harga"); expect(pixelAllowed("123")).toBe(false);
    history.replaceState({}, "", "/ai-plan"); vi.spyOn(navigator, "userAgent", "get").mockReturnValue("Googlebot"); expect(pixelAllowed("123")).toBe(false);
  });
  it("requires Purchase identity and deduplicates checkout across module reloads", async () => {
    history.replaceState({}, "", "/ai-plan"); vi.stubEnv("VITE_META_PIXEL_ID", "123");
    const fbq = vi.fn(); window.fbq = Object.assign(fbq, { queue: [] });
    trackPixel("Purchase", 100000, "purchase-test"); expect(fbq).not.toHaveBeenCalled();
    trackPixel("Purchase", 100000, "purchase-test", "ledger-id");
    trackPixel("Purchase", 100000, "purchase-test", "ledger-id");
    expect(fbq).toHaveBeenCalledTimes(1);
    expect(fbq).toHaveBeenCalledWith("track", "Purchase", { content_ids: ["orvix-ai-2026-10"], content_type: "product", value: 100000, currency: "IDR" }, { eventID: "ledger-id" });
    vi.resetModules();
    const reloaded = await import("@/lib/aiPixel"); reloaded.trackPixel("Purchase", 100000, "purchase-test", "ledger-id");
    expect(fbq).toHaveBeenCalledTimes(1); delete window.fbq;
  });
});

describe("checkout UI", () => {
  it("formats fulfilled expiry in Jakarta without seconds and wraps only the email", async () => {
    saveCheckout(fixture);
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(response({ status: "fulfilled", expiresAt: fixture.expiresAt, emailMasked: fixture.emailMasked, planExpiresAt: "2026-11-26T17:00:00Z" })));
    render(<AiPlanCheckout />);
    await screen.findByRole("heading", { name: "AI Plan Anda aktif" });
    const expiry = screen.getByText(/AI Plan aktif sampai/);
    expect(expiry).toHaveTextContent("27 November 2026 pukul 00.00 WIB");
    expect(expiry.textContent).not.toMatch(/[:.]\d{2}\.\d{2}/);
    const email = screen.getByText(fixture.emailMasked);
    expect(email.tagName).toBe("STRONG");
    expect(email).toHaveClass("break-all");
    expect(email.parentElement).not.toHaveClass("break-all", "break-words");
  });
  it("pauses polling while hidden and resumes visible", async () => {
    saveCheckout(fixture);
    const visibility = vi.spyOn(document, "visibilityState", "get").mockReturnValue("hidden");
    const fetch = vi.fn().mockImplementation(() => Promise.resolve(response({ status: "pending", expiresAt: fixture.expiresAt, emailMasked: fixture.emailMasked })));
    vi.stubGlobal("fetch", fetch);
    const view = render(<AiPlanCheckout />);
    expect(fetch).not.toHaveBeenCalled();
    visibility.mockReturnValue("visible");
    await act(async () => { document.dispatchEvent(new Event("visibilitychange")); });
    expect(fetch).toHaveBeenCalled();
    const calls = fetch.mock.calls.length;
    visibility.mockReturnValue("hidden"); document.dispatchEvent(new Event("visibilitychange"));
    vi.useFakeTimers();
    await act(async () => { await vi.advanceTimersByTimeAsync(6000); });
    expect(fetch).toHaveBeenCalledTimes(calls);
    vi.useRealTimers();
    view.unmount();
  });
  it("requires matching confirmation and never opens a mismatched checkout", async () => {
    const fetch = vi.fn(); vi.stubGlobal("fetch", fetch); render(<AiPlanCheckout />);
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "one@example.com" } });
    fireEvent.change(screen.getByLabelText("Konfirmasi email"), { target: { value: "two@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: /Bayar/ }));
    expect(await screen.findByRole("alert")).toHaveTextContent("harus sama"); expect(fetch).not.toHaveBeenCalled();
  });
  it.each([400, 429, 503])("shows safe POST %s errors without exposing server content", async (code) => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(response({ message: "account exists private@example.com" }, code)));
    render(<AiPlanCheckout />);
    for (const label of ["Email", "Konfirmasi email"]) fireEvent.change(screen.getByLabelText(label), { target: { value: "test@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: /Bayar/ }));
    expect(await screen.findByRole("alert")).not.toHaveTextContent("account exists");
    expect(sessionStorage.getItem(checkoutKey)).toBeNull();
  });
  it.each(["fulfilled", "expired", "failed", "paid"] as const)("restores and displays %s with correct storage lifecycle", async (status) => {
    saveCheckout(fixture);
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(response({ status, expiresAt: fixture.expiresAt, emailMasked: fixture.emailMasked })));
    render(<AiPlanCheckout />);
    const title = { fulfilled: "AI Plan Anda aktif", expired: "QRIS sudah kedaluwarsa", failed: "Aktivasi perlu bantuan", paid: "Pembayaran diterima" }[status];
    expect(await screen.findByRole("heading", { name: title })).toBeVisible();
    expect(!!sessionStorage.getItem(checkoutKey)).toBe(!["fulfilled", "expired"].includes(status));
    expect(screen.queryByRole("button", { name: /Kirim ulang/ }) !== null).toBe(status === "fulfilled");
  });
  it("offers safe reopen on invalid/evicted secret", async () => {
    saveCheckout(fixture); vi.stubGlobal("fetch", vi.fn().mockResolvedValue(response({}, 404))); render(<AiPlanCheckout />);
    fireEvent.click(await screen.findByRole("button", { name: "Buka kembali dengan email" }));
    expect(screen.getByLabelText("Email")).toBeVisible(); expect(sessionStorage.getItem(checkoutKey)).toBeNull();
  });
  it("resend expects 202 and stays on fulfilled", async () => {
    saveCheckout(fixture); const fetch = vi.fn().mockResolvedValueOnce(response({ status: "fulfilled", expiresAt: fixture.expiresAt, emailMasked: fixture.emailMasked })).mockResolvedValueOnce(response({ accepted: true }, 202)); vi.stubGlobal("fetch", fetch);
    render(<AiPlanCheckout />); fireEvent.click(await screen.findByRole("button", { name: /Kirim ulang/ }));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("dikirim ulang"));
    expect(fetch).toHaveBeenLastCalledWith(expect.stringContaining("/resend"), expect.objectContaining({ headers: { "X-Checkout-Secret": fixture.checkoutSecret } }));
  });
});
