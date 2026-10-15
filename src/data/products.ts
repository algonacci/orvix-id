import type { LucideIcon } from "lucide-react";
import { BarChart3, Bot, Boxes, Container, Database, Globe, HardDrive, Image, KeyRound, Layers, Rocket, Terminal, Zap } from "lucide-react";
import { aiPlan, codingPlan, communityCampaignName, docsUrl, domainTldCount, formatNumber, formatTokens, imageCredits, modelCount, modelFamilies, platformUrl, pricingCopy } from "./pricing";

type ProductBase = {
  id: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  accent: string;
  path?: string;
};
export type PlatformProduct = ProductBase & (
  | { status: "live"; platformUrl: string }
  | { status: "segera"; platformUrl?: never }
);
export const platformProducts: PlatformProduct[] = [
  { id: "ai-gateway", name: "Orvix AI Gateway", short: "AI Gateway", tagline: "Satu API key untuk banyak model.",
    description: `Akses ${formatNumber(modelCount)} model melalui API kompatibel OpenAI, dengan failover otomatis dan penggunaan per proyek.`,
    points: ["OpenAI-compatible", "Failover otomatis", "orvix/auto"], icon: Bot, accent: "bg-svc-indigo", status: "live", path: "/ai-gateway", platformUrl: `${platformUrl}/models` },
  { id: "token-plan", name: "Token Plan", short: "Token Plan", tagline: pricingCopy.startingPrice,
    description: "Paket token dalam rupiah. Pemakaian mengikuti tarif model yang Anda pilih.",
    points: ["Paket dengan masa berlaku", "Pilihan tanpa kedaluwarsa", "Tarif per model"], icon: Zap, accent: "bg-svc-amber", status: "live", path: "/harga", platformUrl: `${platformUrl}/token-plan` },
  { id: "ai-plan", name: aiPlan.name, short: "AI Plan", tagline: aiPlan.tagline,
    description: `${pricingCopy.aiPlanPrice}. ${pricingCopy.fairUse}`, points: ["Fair use", aiPlan.lineupNote], icon: Bot, accent: "bg-svc-blue", status: "live", path: "/harga", platformUrl: aiPlan.platformUrl },
  { id: "coding-plan", name: codingPlan.name, short: "Coding Plan", tagline: "Paket khusus coding agent.",
    description: `${formatTokens(codingPlan.tokens)} melalui endpoint coding khusus.`, points: ["OpenCode", "Pi", "omp"], icon: Terminal, accent: "bg-svc-purple", status: "live", path: "/coding", platformUrl: codingPlan.platformUrl },
  { id: "image-credits", name: imageCredits.name, short: "Image Credits", tagline: "Kredit untuk pembuatan gambar.",
    description: pricingCopy.imageCreditsPrice, points: modelFamilies.image, icon: Image, accent: "bg-svc-indigo", status: "live", path: "/harga", platformUrl: imageCredits.platformUrl },
  { id: "api-store", name: "API Store", short: "API Store", tagline: "API data Indonesia, gratis saat ini.",
    description: "Data wilayah, sekolah, hari libur, BMKG, KBLI, dan parser NIK untuk aplikasi Anda.", points: ["Data Indonesia", "Gratis saat ini"], icon: Boxes, accent: "bg-svc-cyan", status: "live", path: "/api-store", platformUrl: `${platformUrl}/api-store` },
  { id: "domain", name: "Domain", short: "Domain", tagline: "Daftarkan domain dari saldo Orvix.",
    description: `Pilihan ${formatNumber(domainTldCount)} TLD. Periksa harga terbaru di platform.`, points: ["Dibayar dari saldo Orvix", "Dikelola melalui akun Orvix"], icon: Globe, accent: "bg-svc-blue", status: "live", path: "/domain", platformUrl: `${platformUrl}/domains` },
  ...([
    { id: "omd", name: "Orvix Managed Database", short: "OMD", icon: Database, accent: "bg-svc-cyan" },
    { id: "deploy", name: "Orvix Deploy", short: "Deploy", icon: Rocket, accent: "bg-svc-blue" },
    { id: "object-storage", name: "Orvix Object Storage", short: "OOS", icon: HardDrive, accent: "bg-svc-purple" },
    { id: "redis", name: "Orvix Managed Redis", short: "OMR", icon: Zap, accent: "bg-svc-amber" },
    { id: "container-engine", name: "Orvix Container Engine", short: "Container", icon: Container, accent: "bg-svc-cyan" },
    { id: "functions", name: "Orvix Functions", short: "Functions", icon: Boxes, accent: "bg-svc-indigo" },
    { id: "queue", name: "Orvix Queue", short: "Queue", icon: Layers, accent: "bg-svc-blue" },
    { id: "auth", name: "Orvix Auth", short: "Auth", icon: KeyRound, accent: "bg-svc-red" },
    { id: "observability", name: "Orvix Observability", short: "Observability", icon: BarChart3, accent: "bg-svc-purple" },
  ].map((product) => ({ ...product, status: "segera" as const, tagline: "Segera hadir", description: "Masuk roadmap Orvix Cloud Platform. Belum tersedia untuk digunakan.", points: [] }))),
];
export const liveProducts = platformProducts.filter((product) => product.status === "live");
export const liveProductIds = liveProducts.map((product) => product.id);
/** Compatibility name for existing components; status values are now live | segera. */
export const availableProducts = liveProducts;
export const roadmapProducts = platformProducts.filter((product) => product.status === "segera");
export const heroProducts = liveProducts;
export const heroBadges = heroProducts.map((product) => product.short);
export const gatewayFeatures = [
  { title: "OpenAI-compatible", description: "Gunakan pola API kompatibel OpenAI untuk mengakses model melalui API key Orvix." },
  { title: "Failover otomatis", description: "Gateway dapat berpindah rute ketika suatu rute gagal." },
  { title: "orvix/auto", description: "Biarkan gateway memilih model melalui orvix/auto." },
  { title: "Bring your own key", description: "Gunakan opsi BYOK untuk membawa API key Anda sendiri." },
  { title: "Playground", description: "Coba model melalui playground sebelum mengintegrasikannya ke aplikasi." },
  { title: "Penggunaan per proyek", description: "Lihat pemakaian AI berdasarkan proyek." },
];
export const gatewayLinks = { models: `${platformUrl}/models`, playground: `${platformUrl}/playground`, apiKeys: `${platformUrl}/api-keys`, docs: docsUrl };
/** Publicly verified at docs.orvix.id/quickstart and /models, 2026-10-15. */
export const gatewayIntegration = {
  baseUrl: "https://api.orvix.id/v1",
  model: "orvix/auto",
  apiKeyPlaceholder: "YOUR_ORVIX_API_KEY",
  quickstartUrl: `${docsUrl}/quickstart`,
  modelsDocsUrl: `${docsUrl}/models`,
};
export const gatewayExamples = {
  curl: `curl ${gatewayIntegration.baseUrl}/chat/completions \\\n  -H "Authorization: Bearer ${gatewayIntegration.apiKeyPlaceholder}" \\\n  -H "Content-Type: application/json" \\\n  -d '{"model":"${gatewayIntegration.model}","messages":[{"role":"user","content":"Halo Orvix!"}]}'`,
  javascript: `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.ORVIX_API_KEY,
  baseURL: "${gatewayIntegration.baseUrl}",
});

const response = await client.chat.completions.create({
  model: "${gatewayIntegration.model}",
  messages: [{ role: "user", content: "Halo Orvix!" }],
});
console.log(response.choices[0].message.content);`,
};
export const codingPlugins = ["OpenCode", "Pi", "omp"];
// Public npm packages; the same commands platform.orvix.id/coding shows
// (platform src/lib/coding-harnesses.ts), verified 15 Oct 2026.
export const codingPluginCommands = [
  { name: "OpenCode", command: "opencode plugin add @orvix-id/opencode" },
  { name: "Pi", command: "pi install npm:@orvix-id/pi" },
  { name: "omp", command: "omp plugin install @orvix-id/omp" },
];
export const codingEndpoint = "https://api.orvix.id/coding/v1";
export const codingKeyEnv = 'export ORVIX_CODING_API_KEY="orv-sk_live_..."';
export const codingIntro = "Coding agent adalah asisten AI yang membantu Anda mengerjakan kode melalui alat pengembangan. Coding Plan digunakan lewat plugin pada endpoint coding khusus.";
export const codingSetup = { description: "Buka halaman Coding di platform dan ikuti panduan plugin untuk alat yang Anda gunakan.", url: codingPlan.platformUrl };
export const apiCatalog = [
  { id: "regional-indonesia", name: "Regional Indonesia", description: "Data wilayah Indonesia." },
  { id: "schools-indonesia", name: "Schools Indonesia", description: "Data sekolah Indonesia." },
  { id: "national-holidays", name: "National Holidays", description: "Data hari libur nasional." },
  { id: "bmkg-indonesia", name: "BMKG Indonesia", description: "API data BMKG Indonesia." },
  { id: "kbli-indonesia", name: "KBLI Indonesia", description: "Data klasifikasi lapangan usaha Indonesia." },
  { id: "nik-parser-indonesia", name: "NIK Parser Indonesia", description: "Parser NIK Indonesia." },
].map((api) => ({ ...api, platformUrl: `${platformUrl}/api-store` }));
export const apiStore = { count: apiCatalog.length, priceLabel: "Gratis saat ini", description: `${formatNumber(apiCatalog.length)} API data Indonesia, gratis saat ini.`, platformUrl: `${platformUrl}/api-store`, docsUrl };
export const domainTlds = [".id", ".my.id", ".biz.id", ".web.id", ".com", ".net", ".org", ".co", ".xyz", ".site", ".click", ".biz"];
export const domainContent = { tlds: domainTlds, totalTlds: domainTldCount, platformUrl: `${platformUrl}/domains`, description: "Daftarkan domain menggunakan saldo Orvix dan kelola melalui akun yang sama.", priceNote: "Harga domain mengikuti registrar. Periksa harga terbaru di platform." };
export const billing = { status: "live" as const, currency: "IDR", paymentMethod: "QRIS", platformUrl: `${platformUrl}/balance`, title: "Saldo rupiah per organisasi", description: "Isi saldo melalui QRIS. Kelola organisasi, proyek, dan anggota di platform Orvix.", features: ["Saldo per organisasi", "Top-up QRIS", "Organisasi, proyek, dan anggota"] };
export const community = { name: communityCampaignName, description: "Orvix mensponsori token untuk para builder dalam kampanye komunitas ini." };
export const roadmapIntro = "Segera hadir. Produk berikut masih dalam roadmap dan belum tersedia untuk digunakan.";
