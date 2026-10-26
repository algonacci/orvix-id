import { test, expect, Page } from "@playwright/test";
import { mkdir } from "node:fs/promises";
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
    });
  }
}
test("QR refresh restoration, paid continues polling, fulfilled Purchase is deduped", async ({ page }) => {
  let state = "pending";
  let gets = 0;
  await page.addInitScript(() => { Object.defineProperty(navigator, "webdriver", { get: () => false }); Object.defineProperty(navigator, "userAgent", { get: () => "Mozilla/5.0 Chrome/130 Safari/537.36" }); });
  await page.route("**/*", async (route) => {
    const url = new URL(route.request().url());
    if (url.hostname === "127.0.0.1") return route.continue();
    if (url.hostname !== "checkout.invalid") return route.abort();
    if (route.request().method() === "POST") return route.fulfill({ status: 201, json: checkout });
    gets++;
    return route.fulfill({ json: { status: state, expiresAt: checkout.expiresAt, emailMasked: checkout.emailMasked, ...(state === "fulfilled" ? { purchaseEventId: "exact-ledger" } : {}) } });
  });
  await page.goto("/ai-plan?utm_source=meta&email=never-send@example.com");
  await expect(page).toHaveURL(/\/ai-plan$/);
  await page.getByLabel("Email", { exact: true }).fill("test@example.com"); await page.getByLabel("Konfirmasi email").fill("test@example.com");
  await page.getByRole("button", { name: /Bayar/ }).click();
  await expect(page.getByRole("heading", { name: "Scan QRIS untuk membayar" })).toBeVisible();
  await page.reload(); await expect(page.getByRole("heading", { name: "Scan QRIS untuk membayar" })).toBeVisible();
  state = "paid"; await expect(page.getByRole("heading", { name: "Pembayaran diterima" })).toBeVisible({ timeout: 10000 });
  const count = gets;
  state = "fulfilled"; await expect(page.getByRole("heading", { name: "AI Plan Anda aktif" })).toBeVisible({ timeout: 10000 }); expect(gets).toBeGreaterThan(count);
  const queue = await page.evaluate(() => (window as unknown as { fbq: { queue: unknown[][] } }).fbq.queue);
  const purchase = queue.filter((event) => event[1] === "Purchase"); expect(purchase).toHaveLength(1); expect(purchase[0][3]).toEqual({ eventID: "exact-ledger" });
  expect(JSON.stringify(queue)).not.toContain("example.com");
  expect(await page.evaluate((key) => sessionStorage.getItem(key), storageKey)).toBeNull();
  await page.reload(); expect(await page.evaluate(() => (window as unknown as { fbq: { queue: unknown[][] } }).fbq.queue.filter((e) => e[1] === "Purchase"))).toHaveLength(0);
});
