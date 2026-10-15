/** Verified product facts: refresh brief §2, 15 October 2026.
 * Keep commercial numbers here, including counts used outside pricing UI.
 * null validityDays means no expiry, not an unknown validity.
 */
export const lastVerified = "2026-10-15";
export const platformUrl = "https://platform.orvix.id";
export const docsUrl = "https://docs.orvix.id";
export const formatNumber = (value: number) => new Intl.NumberFormat("id-ID").format(value);
export const formatIdr = (value: number) => `Rp${formatNumber(value)}`;
export const formatTokens = (value: number) => `${formatNumber(value / 1_000_000)} juta token`;
export const formatValidity = (days: number | null) => days === null ? "Tanpa kedaluwarsa" : `${formatNumber(days)} hari`;

export type PlanCategory = "token" | "ai" | "coding" | "image";
export type PlanVariant = {
  id: "expiring" | "no-expiry";
  tokens: number;
  validityDays: number | null;
};
export type PricingPlan = {
  id: string;
  name: string;
  category: PlanCategory;
  priceIdr: number;
  tokens: number | null;
  credits: number | null;
  validityDays: number | null;
  audience: string;
  platformUrl: string;
  lastVerified: typeof lastVerified;
};
export type TokenPlan = PricingPlan & { category: "token"; variants: PlanVariant[] };

export const tokenPlans: TokenPlan[] = [
  { id: "ember", name: "Ember", category: "token", priceIdr: 15_000, tokens: 5_000_000, credits: null, validityDays: 7,
    audience: "Untuk Anda yang ingin mencoba integrasi AI dengan paket token kecil.",
    platformUrl: `${platformUrl}/token-plan`, lastVerified,
    variants: [{ id: "expiring", tokens: 5_000_000, validityDays: 7 }] },
  { id: "flame", name: "Flame", category: "token", priceIdr: 40_000, tokens: 17_000_000, credits: null, validityDays: 14,
    audience: "Untuk eksperimen proyek dengan pilihan masa berlaku atau tanpa kedaluwarsa.",
    platformUrl: `${platformUrl}/token-plan`, lastVerified,
    variants: [{ id: "expiring", tokens: 17_000_000, validityDays: 14 }, { id: "no-expiry", tokens: 12_000_000, validityDays: null }] },
  { id: "blaze", name: "Blaze", category: "token", priceIdr: 80_000, tokens: 35_000_000, credits: null, validityDays: 30,
    audience: "Untuk proyek yang membutuhkan paket token lebih besar.",
    platformUrl: `${platformUrl}/token-plan`, lastVerified,
    variants: [{ id: "expiring", tokens: 35_000_000, validityDays: 30 }, { id: "no-expiry", tokens: 22_000_000, validityDays: null }] },
  { id: "inferno", name: "Inferno", category: "token", priceIdr: 150_000, tokens: 65_000_000, credits: null, validityDays: 30,
    audience: "Untuk penggunaan AI dengan kebutuhan kuota token lebih banyak.",
    platformUrl: `${platformUrl}/token-plan`, lastVerified,
    variants: [{ id: "expiring", tokens: 65_000_000, validityDays: 30 }, { id: "no-expiry", tokens: 40_000_000, validityDays: null }] },
];

export const aiPlan = {
  id: "ai-plan", name: "Orvix AI Plan", category: "ai", priceIdr: 100_000,
  tokens: null, credits: null, validityDays: 30,
  audience: "Untuk penggunaan AI rutin dengan batas pemakaian wajar yang jelas.",
  platformUrl: `${platformUrl}/token-plan`, lastVerified,
  fairUse: { requestsPerMinute: 20, concurrentRequests: 5, dailyTokens: 20_000_000, cachedTokenPercent: 10 },
  tagline: "AI sepuasnya, dengan fair use.",
  lineupNote: "Lineup model dapat berubah. Lihat pilihan terbaru di platform.",
} satisfies PricingPlan & { fairUse: { requestsPerMinute: number; concurrentRequests: number; dailyTokens: number; cachedTokenPercent: number }; tagline: string; lineupNote: string };

export const codingPlan = {
  id: "coding-plan", name: "Coding Plan", category: "coding", priceIdr: 150_000,
  tokens: 60_000_000, credits: null, validityDays: 30,
  audience: "Untuk Anda yang memakai coding agent melalui plugin dan endpoint coding khusus.",
  platformUrl: `${platformUrl}/coding`, lastVerified,
} satisfies PricingPlan;

export const imageCredits = {
  id: "image-credits", name: "Image Credits", category: "image", priceIdr: 10_000,
  tokens: null, credits: 100, validityDays: 365,
  audience: "Untuk Anda yang membutuhkan kredit pembuatan gambar.",
  platformUrl: `${platformUrl}/image-credits`, lastVerified,
} satisfies PricingPlan;

export const allPlans: PricingPlan[] = [...tokenPlans, aiPlan, codingPlan, imageCredits];
// Home teaser means cheapest Token Plan, NOT cheapest purchase across all products.
export const startingPriceIdr = Math.min(...tokenPlans.map((plan) => plan.priceIdr));
export const startingPriceScope = "Token Plan";
export const lowestPaidProductPriceIdr = Math.min(...allPlans.map((plan) => plan.priceIdr));
export const pricingGroups = [
  { id: "token", title: "Token Plan", plans: tokenPlans },
  { id: "ai", title: "AI Plan", plans: [aiPlan] },
  { id: "coding", title: "Coding Plan", plans: [codingPlan] },
  { id: "image", title: "Image Credits", plans: [imageCredits] },
];
export const pricingCopy = {
  startingPrice: `${startingPriceScope} mulai dari ${formatIdr(startingPriceIdr)}`,
  aiPlanPrice: `${formatIdr(aiPlan.priceIdr)} / ${formatValidity(aiPlan.validityDays)}`,
  codingPlanPrice: `${formatIdr(codingPlan.priceIdr)} / ${formatValidity(codingPlan.validityDays)}`,
  imageCreditsPrice: `${formatIdr(imageCredits.priceIdr)} = ${formatNumber(imageCredits.credits)} kredit`,
  tokenRate: "Token terpakai mengikuti tarif masing-masing model; jumlah token paket bukan jaminan jumlah request.",
  fairUse: `${formatNumber(aiPlan.fairUse.requestsPerMinute)} request/menit, ${formatNumber(aiPlan.fairUse.concurrentRequests)} request bersamaan, hingga ${formatTokens(aiPlan.fairUse.dailyTokens)} per hari. Token cache dihitung ${formatNumber(aiPlan.fairUse.cachedTokenPercent)}%.`,
  footnote: `Harga per ${lastVerified}; harga terbaru di platform.orvix.id.`,
  currency: "Harga dalam rupiah. Isi saldo organisasi melalui QRIS.",
};

export const modelCount = 33;
export const modelFamilies = {
  text: ["GPT-5.6", "Gemini", "DeepSeek", "Qwen", "GLM", "Kimi", "Grok", "MiniMax", "Hunyuan (Hy3/Hy4)", "MiMo", "Nemotron", "Muse", "Atria"],
  image: ["FLUX", "Midjourney", "Seedream"],
};
export const aiPlanModelFamilies = modelFamilies.text.slice(0, 4);
export const domainTldCount = 30;
export const communityCampaignName = "Road to DevFest Jakarta 2026";
