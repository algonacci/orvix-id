// Single source of truth for the route list, shared by generate-sitemap.mjs and
// prerender.mjs. Keeping one list means a new service can never end up in the
// sitemap but missing from the prerender, or the other way round.
//
// Service slugs are read straight out of siteContent.tsx instead of being
// duplicated here, so adding a service to that array is the only edit needed.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const SITE = "https://orvix.id";

const STATIC_PAGES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
];

export function getServiceSlugs() {
  const source = readFileSync(join(ROOT, "src", "data", "siteContent.tsx"), "utf-8");
  const slugs = [...source.matchAll(/^\s{4}slug:\s*"([a-z0-9-]+)",$/gm)].map((m) => m[1]);

  if (slugs.length === 0) {
    throw new Error(
      "No service slugs found in siteContent.tsx — the services array shape probably changed."
    );
  }
  return slugs;
}

export function getAllPages() {
  return [
    ...STATIC_PAGES,
    ...getServiceSlugs().map((slug) => ({
      path: `/services/${slug}`,
      changefreq: "monthly",
      priority: "0.8",
    })),
  ];
}

export function getPrerenderPaths() {
  return getAllPages().map((page) => page.path);
}
