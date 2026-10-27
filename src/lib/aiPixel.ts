import { aiPlan } from "@/data/pricing";
type Pixel = ((...args: unknown[]) => void) & { queue: unknown[][]; callMethod?: (...args: unknown[]) => void; push?: Pixel; loaded?: boolean; version?: string };
declare global { interface Window { fbq?: Pixel; _fbq?: Pixel; __PRERENDER__?: boolean } }
const seen = new Set<string>();
let initialized = false;
export function pixelAllowed(id = import.meta.env.VITE_META_PIXEL_ID) {
  return /^\d+$/.test(id ?? "") && window.location.pathname.replace(/\/$/, "") === "/ai-plan"
    && !window.__PRERENDER__ && !navigator.webdriver && !/bot|crawl|spider|headless|prerender/i.test(navigator.userAgent);
}
export function startPixel() {
  if (!pixelAllowed() || initialized) return;
  initialized = true;
  // Keep fbclid/utm_* in the URL so fbevents.js can capture the click and create _fbc.
  // Gateway attribution is captured separately by the checkout.
  if (!window.fbq) {
    const fbq: Pixel = Object.assign((...args: unknown[]) => {
      if (fbq.callMethod) fbq.callMethod(...args); else fbq.queue.push(args);
    }, { queue: [] as unknown[][] });
    fbq.push = fbq; fbq.loaded = true; fbq.version = "2.0";
    window.fbq = window._fbq = fbq;
    const script = document.createElement("script");
    script.async = true; script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
  window.fbq("init", import.meta.env.VITE_META_PIXEL_ID);
  window.fbq("set", "autoConfig", false, import.meta.env.VITE_META_PIXEL_ID);
  window.fbq("track", "PageView");
  trackPixel("ViewContent", aiPlan.priceIdr);
}
export function trackPixel(event: "ViewContent" | "InitiateCheckout" | "Purchase", amount: number, checkoutId?: string, eventId?: string) {
  if (!pixelAllowed() || !window.fbq || (event === "Purchase" && !eventId)) return;
  const key = `orvix.pixel.${event}.${checkoutId}`;
  if (checkoutId) {
    try { if (sessionStorage.getItem(key)) return; } catch { /* Memory dedup when storage is blocked. */ }
    if (seen.has(key)) return;
    seen.add(key);
    try { sessionStorage.setItem(key, "1"); } catch { /* Payment must work without storage. */ }
  }
  window.fbq("track", event, { content_ids: [aiPlan.metaContentId], content_type: "product", value: amount, currency: "IDR" }, ...(eventId ? [{ eventID: eventId }] : []));
}
