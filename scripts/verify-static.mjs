import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";
import { getPrerenderPaths, getAllPages, getServiceSlugs, ROOT, SITE } from "./routes.mjs";
import { canonicalPath, getMetadata, metadata } from "./seo-metadata.mjs";

export const htmlFile = (path, dist = join(ROOT, "dist")) => join(dist, path === "/" ? "index.html" : `${path}/index.html`);
export function sourceFingerprint() {
  const hash = createHash("sha256");
  function add(path) {
    for (const entry of readdirSync(join(ROOT, path), { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const file = `${path}/${entry.name}`;
      if (entry.isDirectory()) add(file);
      else hash.update(file).update(readFileSync(join(ROOT, file)));
    }
  }
  for (const path of ["src", "scripts", "public"]) add(path);
  for (const path of ["index.html", "package.json", "vite.config.ts", "vitest.config.ts", "tailwind.config.ts", "bun.lock"]) hash.update(path).update(readFileSync(join(ROOT, path)));
  return hash.digest("hex");
}

export function verifyRouteContract() {
  const app = readFileSync(join(ROOT, "src/App.tsx"), "utf8");
  const routes = [...app.matchAll(/<Route path="([^"]+)"/g)].map((m) => m[1]);
  const concrete = routes.flatMap((path) => path === "*" ? ["/404"] : path === "/services/:slug" ? getServiceSlugs().map((slug) => `/services/${slug}`) : [path]);
  assert.deepEqual(getPrerenderPaths().sort(), concrete.sort(), "App routes and prerender inventory must agree");
  for (const [path, meta] of Object.entries(metadata)) {
    assert(meta.title.length > 0 && meta.title.length <= 60, `${path}: title exceeds 60 characters`);
    assert(meta.description.length > 0 && meta.description.length <= 155, `${path}: description exceeds 155 characters`);
    assert(existsSync(join(ROOT, "public", meta.image)), `${path}: OG artwork missing`);
  }
}

export function verifyHtml(html, path) {
  // Parse serialized files, never a post-hydration browser DOM. Count tags before
  // reading values, so duplicate shell fallbacks cannot silently pass.
  const dom = new JSDOM(html);
  try {
    const doc = dom.window.document;
    const meta = getMetadata(path);
    const canonical = `${SITE}${canonicalPath(path)}`;
    const one = (selector, attribute, expected) => {
      const nodes = doc.querySelectorAll(selector);
      assert.equal(nodes.length, 1, `${path}: expected one ${selector}`);
      assert.equal(attribute ? nodes[0].getAttribute(attribute) : nodes[0].textContent, expected, `${path}: ${selector}`);
    };
    one("title", null, meta.title);
    one('meta[name="description"]', "content", meta.description);
    one('link[rel="canonical"]', "href", canonical);
    for (const [key, value] of Object.entries({ title: meta.title, description: meta.description, url: canonical, image: `${SITE}${meta.image}`, "image:secure_url": `${SITE}${meta.image}`, "image:width": "1200", "image:height": "630", "image:alt": meta.title, "image:type": meta.image.endsWith(".webp") ? "image/webp" : "image/jpeg", type: "website", locale: "id_ID", site_name: "Orvix.id" })) one(`meta[property="og:${key}"]`, "content", value);
    for (const [key, value] of Object.entries({ title: meta.title, description: meta.description, image: `${SITE}${meta.image}`, "image:alt": meta.title, card: "summary_large_image" })) one(`meta[name="twitter:${key}"]`, "content", value);
    one('meta[name="robots"]', "content", path === "/404" ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1");
    assert(doc.querySelector("#root h1"), `${path}: empty app shell`);
    const scripts = doc.querySelectorAll('script[type="application/ld+json"]');
    assert.equal(scripts.length, 1, `${path}: one owned JSON-LD graph`);
    const json = JSON.parse(scripts[0].textContent);
    assert.equal(json["@context"], "https://schema.org");
    assert(Array.isArray(json["@graph"]));
    const graph = json["@graph"];
    const ids = graph.map((node) => node["@id"]).filter(Boolean);
    assert.equal(new Set(ids).size, ids.length, `${path}: duplicate schema IDs`);
    const page = graph.filter((node) => node["@type"] === "WebPage");
    assert.equal(page.length, 1);
    assert.equal(page[0].url, canonical);
    assert.equal(page[0].name, meta.title);
    assert.equal(page[0].description, meta.description);
    if (path !== "/404") {
      assert.equal(graph.filter((node) => node["@type"] === "Organization").length, 1);
      assert.equal(graph.filter((node) => node["@type"] === "WebSite").length, 1);
      assert(!graph.find((node) => node["@type"] === "Organization").address, "No unverified office address");
    }
    const faq = graph.filter((node) => node["@type"] === "FAQPage");
    assert.equal(faq.length, path === "/" || path === "/harga" ? 1 : 0, `${path}: FAQ only where rendered`);
    const bodyText = doc.querySelector("#root").textContent.replace(/\s+/g, " ");
    for (const question of faq[0]?.mainEntity ?? []) {
      assert.equal(question["@type"], "Question");
      assert.equal(question.acceptedAnswer["@type"], "Answer");
      assert(bodyText.includes(question.name), `${path}: FAQ question missing from content`);
      assert(bodyText.includes(question.acceptedAnswer.text), `${path}: FAQ answer missing from content`);
    }
    const products = graph.filter((node) => node["@type"] === "Product");
    assert.equal(products.length > 0, path === "/harga");
    for (const product of products) {
      assert(product.name && product.description && product.image);
      assert(Array.isArray(product.offers) && product.offers.length);
      for (const offer of product.offers) {
        assert.equal(offer["@type"], "Offer");
        assert.equal(offer.priceCurrency, "IDR");
        assert(Number.isInteger(offer.price) && offer.price > 0);
        assert(offer.url.startsWith("https://platform.orvix.id/"));
        assert(offer.name && offer.description);
      }
    }
    return graph;
  } finally { dom.window.close(); }
}

export function verifyStatic({ dist = join(ROOT, "dist"), freshness = true } = {}) {
  verifyRouteContract();
  if (freshness) {
    const manifestPath = join(dist, "prerender-manifest.json");
    assert(existsSync(manifestPath), "Run bun run build:static before tests: prerender manifest missing");
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
    assert.equal(manifest.fingerprint, sourceFingerprint(), "Prerender output is stale: run bun run build:static before tests");
    assert.deepEqual(manifest.routes, getPrerenderPaths());
  }
  for (const path of getPrerenderPaths()) {
    const file = htmlFile(path, dist);
    assert(existsSync(file), `Missing ${file}; run bun run build:static`);
    verifyHtml(readFileSync(file, "utf8"), path);
  }
  const sitemap = new JSDOM(readFileSync(join(dist, "sitemap.xml"), "utf8"), { contentType: "text/xml" });
  const urls = [...sitemap.window.document.querySelectorAll("loc")].map((node) => node.textContent);
  assert.deepEqual(urls, getAllPages().map(({ path }) => `${SITE}${path}`), "Sitemap must contain canonical routes only");
  sitemap.window.close();
  assert.equal(readFileSync(join(dist, "404.html"), "utf8"), readFileSync(htmlFile("/404", dist), "utf8"));
  return getPrerenderPaths().length;
}
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) console.log(`Verified ${verifyStatic()} static routes.`);
