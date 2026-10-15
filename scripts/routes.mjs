import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { aliases, metadata } from "./seo-metadata.mjs";
export { SITE } from "./seo-metadata.mjs";
export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export function getServiceSlugs() {
  const source = readFileSync(join(ROOT, "src/data/siteContent.tsx"), "utf8");
  const slugs = [...source.matchAll(/^\s{4}slug:\s*"([a-z0-9-]+)",$/gm)].map((m) => m[1]);
  if (!slugs.length) throw new Error("No enterprise service slugs found");
  return slugs;
}
export function getAllPages() {
  return Object.keys(metadata).filter((path) => path !== "/404").map((path) => ({
    path,
    changefreq: ["/", "/harga", "/ai-gateway", "/coding", "/api-store"].includes(path) ? "weekly" : "monthly",
    priority: path === "/" ? "1.0" : path.startsWith("/services/") ? "0.8" : "0.9",
  }));
}
export function getPrerenderPaths() {
  return [...getAllPages().map(({ path }) => path), ...Object.keys(aliases), "/404"];
}
