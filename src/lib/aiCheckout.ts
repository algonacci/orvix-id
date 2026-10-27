import { z } from "zod";

export const checkoutKey = "orvix.ai-checkout.v1";
const date = z.string().refine((v) => Number.isFinite(Date.parse(v)));
export const checkoutSchema = z.object({
  checkoutId: z.string().min(1), checkoutSecret: z.string().min(1),
  qrisPayload: z.string().min(1).max(4096), amountIdr: z.number().int().positive(),
  expiresAt: date, emailMasked: z.string().min(1),
});
export type Checkout = z.infer<typeof checkoutSchema>;
export const statusSchema = z.object({
  status: z.enum(["pending", "paid", "fulfilled", "failed", "expired"]),
  expiresAt: date, emailMasked: z.string(), purchaseEventId: z.string().optional(), planExpiresAt: date.optional(),
});
export type CheckoutStatus = z.infer<typeof statusSchema>;
export class CheckoutError extends Error {
  constructor(public status: number) { super("Checkout request failed"); }
}
export function saveCheckout(checkout: Checkout | null) {
  try {
    if (checkout) sessionStorage.setItem(checkoutKey, JSON.stringify(checkoutSchema.parse(checkout)));
    else sessionStorage.removeItem(checkoutKey);
    return true;
  } catch { return false; }
}
export function restoreCheckout(): { checkout: Checkout | null; invalid: boolean } {
  try {
    const raw = sessionStorage.getItem(checkoutKey);
    if (!raw) return { checkout: null, invalid: false };
    const result = checkoutSchema.safeParse(JSON.parse(raw));
    if (result.success) return { checkout: result.data, invalid: false };
    saveCheckout(null);
    return { checkout: null, invalid: true };
  } catch { saveCheckout(null); return { checkout: null, invalid: true }; }
}
export function gatewayUrl() {
  const value = import.meta.env.VITE_GATEWAY_URL?.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.username || url.password || url.search || url.hash) return null;
    if (url.protocol !== "https:" && !(import.meta.env.DEV && ["localhost", "127.0.0.1"].includes(url.hostname))) return null;
    return value.replace(/\/+$/, "");
  } catch { return null; }
}
export async function checkoutRequest(path: string, method: "GET" | "POST", body?: unknown, secret?: string, signal?: AbortSignal) {
  const base = gatewayUrl();
  if (!base) throw new CheckoutError(503);
  const controller = new AbortController();
  const abort = () => controller.abort();
  if (signal?.aborted) abort();
  signal?.addEventListener("abort", abort, { once: true });
  const timeout = setTimeout(abort, 15000);
  try {
  const response = await fetch(`${base}/checkout/ai-plan${path}`, {
    method, credentials: "omit", cache: "no-store", referrerPolicy: "no-referrer",
    headers: { ...(body ? { "Content-Type": "application/json" } : {}), ...(secret ? { "X-Checkout-Secret": secret } : {}) },
    body: body ? JSON.stringify(body) : undefined,
    signal: controller.signal,
  });
  const expected = method === "GET" ? 200 : path.endsWith("/resend") ? 202 : 201;
  if (response.status !== expected) throw new CheckoutError(response.status);
  return await response.json();
  } finally { clearTimeout(timeout); signal?.removeEventListener("abort", abort); }
}
export function errorCopy(error: unknown) {
  const status = error instanceof CheckoutError ? error.status : 0;
  return status === 400 ? "Email belum dapat digunakan. Periksa alamat email Anda dan coba lagi."
    : status === 429 ? "Terlalu banyak percobaan. Tunggu sebentar sebelum mencoba lagi."
    : status === 503 ? "Pembayaran sementara belum tersedia. Silakan coba lagi nanti."
    : "Koneksi terputus atau respons belum tersedia. Kami akan memeriksa lagi; jangan bayar ulang.";
}
export function captureAttribution() {
  const url = new URL(window.location.href);
  const result: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]) {
    const value = url.searchParams.get(key);
    if (value && /^[\x20-\x7e]{1,500}$/.test(value)) result[key] = value;
  }
  for (const name of ["fbc", "fbp"]) {
    const value = document.cookie.split("; ").find((c) => c.startsWith(`_${name}=`))?.split("=").slice(1).join("=");
    if (value && /^[\x20-\x7e]{1,500}$/.test(value)) result[name] = value;
  }
  if (url.protocol === "https:") result.event_source_url = `${url.origin}${url.pathname}`;
  return result;
}
