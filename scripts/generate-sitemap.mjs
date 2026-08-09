// Regenerates public/sitemap.xml from the shared route list in routes.mjs.
// Runs as part of the build (see the "prebuild" and "build:static" scripts).

import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { getAllPages, ROOT, SITE } from "./routes.mjs";

const TODAY = new Date().toISOString().split("T")[0];

function urlEntry({ path, changefreq, priority }) {
  return [
    "  <url>",
    `    <loc>${SITE}${path}</loc>`,
    `    <lastmod>${TODAY}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

const pages = getAllPages();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(urlEntry).join("\n")}
</urlset>
`;

writeFileSync(join(ROOT, "public", "sitemap.xml"), xml, "utf-8");
console.log(`sitemap.xml — ${pages.length} URLs (lastmod=${TODAY})`);
