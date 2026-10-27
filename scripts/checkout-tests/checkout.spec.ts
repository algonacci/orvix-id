import { test, expect, Page } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const checkout = { checkoutId: "mock-checkout", checkoutSecret: "mock-secret", amountIdr: 100000, qrisPayload: "MOCK-NON-PAYABLE-QR-FOR-UI-REVIEW", expiresAt: "2099-01-01T00:00:00Z", emailMasked: "t***@example.com" };
const storageKey = "orvix.ai-checkout.v1";
async function mock(page: Page, state: string, stored = false) {
  await page.route("**/*", async (route) => {
    const url = new URL(route.request().url());
    if (url.hostname === "127.0.0.1") return route.continue();
    if (url.hostname === "checkout.invalid") {
      const request = route.request();
      if (request.method() === "POST" && url.pathname.endsWith("/ai-plan")) return route.fulfill({ status: 201, json: { ...checkout, expiresAt: new Date(Date.now() + 900000).toISOString() } });
      expect(request.headers()["x-checkout-secret"]).toBe(checkout.checkoutSecret);
      expect(url.search).toBe("");
      if (state === "invalid") return route.fulfill({ status: 404, json: {} });
      if (url.pathname.endsWith("/resend")) return route.fulfill({ status: 202, json: { accepted: true } });
      return route.fulfill({ json: { status: state === "qr" ? "pending" : state, expiresAt: new Date(Date.now() + 900000).toISOString(), emailMasked: checkout.emailMasked, ...(state === "fulfilled" ? { purchaseEventId: "mock-ledger", planExpiresAt: "2026-11-26T17:00:00Z" } : {}) } });
    }
    return route.abort();
  });
  if (stored) await page.addInitScript(({ checkout, storageKey, state }) => sessionStorage.setItem(storageKey, JSON.stringify(state === "missing" ? { checkoutId: checkout.checkoutId } : checkout)), { checkout, storageKey, state });
}
for (const width of [390, 1440]) {
  for (const state of ["form", "qr", "paid", "fulfilled", "expired", "failed", "invalid", "missing"]) {
    test(`${width}px ${state}`, async ({ page }) => {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
      await mock(page, state, !["form", "qr"].includes(state));
      await page.goto("/ai-plan");
      if (state === "qr") {
        await page.getByLabel("Email", { exact: true }).fill("test@example.com");
        await page.getByLabel("Konfirmasi email").fill("test@example.com");
        await page.getByRole("button", { name: /Bayar/ }).click();
      }
      const titles = { form: "Mulai dengan email Anda", qr: "Scan QRIS untuk membayar", paid: "Pembayaran diterima", fulfilled: "AI Plan Anda aktif", expired: "QRIS sudah kedaluwarsa", failed: "Aktivasi perlu bantuan", invalid: "Buka kembali checkout", missing: "Buka kembali checkout" };
      await expect(page.getByRole("heading", { name: titles[state] })).toBeVisible();
      await expect(page.locator("body")).not.toContainText("Coding Plan");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.evaluate(() => document.fonts.ready);
      await mkdir("docs/screenshots/ai-plan", { recursive: true });
      await page.screenshot({ path: `docs/screenshots/ai-plan/${width}-${state}.png`, fullPage: true });
      if (width === 390 && state === "form") {
        const fairUse = page.getByRole("region", { name: "Ritme harian, dengan fair use." });
        await expect(fairUse).toContainText("Hingga 20 juta token terhitung per hari");
        await fairUse.scrollIntoViewIfNeeded();
        await page.screenshot({ path: "docs/screenshots/ai-plan/390-landing-fair-use.png" });
      }
      if (width === 390 && state === "fulfilled") {
        const fulfilled = page.getByRole("region", { name: "AI Plan Anda aktif" });
        await expect(fulfilled).toContainText("27 November 2026 pukul 00.00 WIB");
        expect(await fulfilled.locator("p").evaluateAll((elements) => elements.every((element) => getComputedStyle(element).wordBreak === "normal"))).toBe(true);
        await fulfilled.scrollIntoViewIfNeeded();
        await page.screenshot({ path: "docs/screenshots/ai-plan/390-fulfilled-detail.png" });
      }
    });
  }
}
test("QR refresh restoration, paid continues polling, fulfilled Purchase is deduped", async ({ page }) => {
  let state = "pending";
  let gets = 0;
  const scriptLoadUrls: string[] = [];
  const pixelCalls: unknown[][] = [];
  await page.exposeFunction("recordPixelCall", (...args: unknown[]) => pixelCalls.push(args));
  await page.addInitScript(() => { Object.defineProperty(navigator, "webdriver", { get: () => false }); Object.defineProperty(navigator, "userAgent", { get: () => "Mozilla/5.0 Chrome/130 Safari/537.36" }); });
  await page.route("**/*", async (route) => {
    const url = new URL(route.request().url());
    if (url.hostname === "127.0.0.1") return route.continue();
    if (url.hostname === "connect.facebook.net" && url.pathname.endsWith("/fbevents.js")) {
      const pageUrl = page.url();
      scriptLoadUrls.push(pageUrl);
      expect(new URL(pageUrl).searchParams.get("fbclid")).toBe("mock-click-id");
      expect(new URL(pageUrl).searchParams.get("utm_source")).toBe("meta");
      return route.fulfill({ contentType: "application/javascript", body: "window.fbq.queue.forEach(args => window.recordPixelCall(...args)); window.fbq.callMethod = (...args) => { window.fbq.queue.push(args); window.recordPixelCall(...args); };" });
    }
    if (url.hostname !== "checkout.invalid") return route.abort();
    if (route.request().method() === "POST") return route.fulfill({ status: 201, json: checkout });
    gets++;
    return route.fulfill({ json: { status: state, expiresAt: checkout.expiresAt, emailMasked: checkout.emailMasked, ...(state === "fulfilled" ? { purchaseEventId: "exact-ledger" } : {}) } });
  });
  await page.goto("/ai-plan?utm_source=meta&fbclid=mock-click-id");
  await expect(page).toHaveURL(/\/ai-plan\?utm_source=meta&fbclid=mock-click-id$/);
  await page.getByLabel("Email", { exact: true }).fill("test@example.com"); await page.getByLabel("Konfirmasi email").fill("test@example.com");
  await page.getByRole("button", { name: /Bayar/ }).click();
  await expect(page.getByRole("heading", { name: "Scan QRIS untuk membayar" })).toBeVisible();
  await page.reload(); await expect(page.getByRole("heading", { name: "Scan QRIS untuk membayar" })).toBeVisible();
  state = "paid"; await expect(page.getByRole("heading", { name: "Pembayaran diterima" })).toBeVisible({ timeout: 10000 });
  const count = gets;
  state = "fulfilled"; await expect(page.getByRole("heading", { name: "AI Plan Anda aktif" })).toBeVisible({ timeout: 10000 }); expect(gets).toBeGreaterThan(count);
  const queue = await page.evaluate(() => (window as unknown as { fbq: { queue: unknown[][] } }).fbq.queue);
  const purchase = queue.filter((event) => event[1] === "Purchase"); expect(purchase).toHaveLength(1); expect(purchase[0][3]).toEqual({ eventID: "exact-ledger" });
  for (const event of ["ViewContent", "InitiateCheckout", "Purchase"]) {
    await expect.poll(() => pixelCalls.filter((call) => call[1] === event).length).toBeGreaterThan(0);
    for (const call of pixelCalls.filter((call) => call[1] === event)) expect(call[2]).toMatchObject({ content_ids: ["orvix-ai-2026-10"], value: 100000, currency: "IDR" });
  }
  expect(scriptLoadUrls.length).toBeGreaterThan(0);
  const evidence = { scriptLoadUrls, pixelCalls };
  console.log("Mock Pixel evidence:", JSON.stringify(evidence));
  await mkdir("docs/screenshots/ai-plan", { recursive: true });
  await writeFile("docs/screenshots/ai-plan/pixel-evidence.json", `${JSON.stringify(evidence, null, 2)}\n`);
  expect(JSON.stringify(queue)).not.toContain("example.com");
  expect(await page.evaluate((key) => sessionStorage.getItem(key), storageKey)).toBeNull();
  await page.reload(); expect(await page.evaluate(() => (window as unknown as { fbq: { queue: unknown[][] } }).fbq.queue.filter((e) => e[1] === "Purchase"))).toHaveLength(0);
});
