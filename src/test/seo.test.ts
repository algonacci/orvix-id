// build:static is an explicit prerequisite: never silently skip missing/stale dist.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { JSDOM } from "jsdom";
import { getPrerenderPaths, ROOT } from "../../scripts/routes.mjs";
import { getMetadata } from "../../scripts/seo-metadata.mjs";
import { htmlFile, verifyHtml, verifyStatic } from "../../scripts/verify-static.mjs";
import { aiPlan, allPlans, formatNumber, formatTokens, formatValidity, pricingCopy, tokenPlans } from "@/data/pricing";
import { faqs, pricingFaqs } from "@/data/siteContent";

describe("serialized production HTML (run build:static first)", () => {
  it("has fresh complete route output, unique tags, canonical aliases, sitemap and valid schema", () => {
    expect(verifyStatic()).toBe(getPrerenderPaths().length);
  });
  it("keeps the source fallback aligned with home and free of global schema", () => {
    const dom = new JSDOM(readFileSync(join(ROOT, "index.html"), "utf8"));
    const doc = dom.window.document;
    expect(doc.title).toBe(getMetadata("/").title);
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) expect(doc.querySelector(selector)?.getAttribute("content")).toBe(getMetadata("/").description);
    expect(doc.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(0);
    dom.window.close();
  });
  it("rejects duplicate fallback metadata and broken offer currency", () => {
    const html = readFileSync(htmlFile("/harga"), "utf8");
    expect(() => verifyHtml(html.replace("</head>", '<meta property="og:image" content="stale.jpg"></head>'), "/harga")).toThrow();
    expect(() => verifyHtml(html.replace('"priceCurrency":"IDR"', '"priceCurrency":"USD"'), "/harga")).toThrow();
  });
  it("matches every paid plan, variant, validity and fair-use limit to source data", () => {
    const graph = verifyHtml(readFileSync(htmlFile("/harga"), "utf8"), "/harga");
    const products = graph.filter((node) => node["@type"] === "Product");
    expect(products.map((product) => product.name)).toEqual(allPlans.map((plan) => plan.name));
    for (const plan of allPlans) {
      const product = products.find((product) => product.name === plan.name);
      const variants = tokenPlans.find((token) => token.id === plan.id)?.variants ?? [plan];
      expect(product.offers).toHaveLength(variants.length);
      variants.forEach((variant, index) => {
        const offer = product.offers[index];
        expect(offer.price).toBe(plan.priceIdr);
        expect(offer.priceCurrency).toBe("IDR");
        expect(offer.url).toBe(plan.platformUrl);
        expect(offer.description).toContain(formatValidity(variant.validityDays));
        if (variant.tokens !== null) expect(offer.description).toContain(formatTokens(variant.tokens));
        if (plan.credits !== null) expect(offer.description).toContain(`${formatNumber(plan.credits)} kredit`);
        if (plan.id === aiPlan.id) {
          expect(offer.description).toContain(pricingCopy.fairUse);
          expect(offer.description).toContain(aiPlan.lineupNote);
        }
      });
    }
  });
  it.each([["/", faqs], ["/harga", pricingFaqs]] as const)("matches %s FAQ schema to the visible data contract", (path, data) => {
    const graph = verifyHtml(readFileSync(htmlFile(path), "utf8"), path);
    expect(graph.find((node) => node["@type"] === "FAQPage").mainEntity).toEqual(data.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })));
  });
});
