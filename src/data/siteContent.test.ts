import { describe, expect, it } from "vitest";
import { aiPlan, allPlans, codingPlan, imageCredits, lastVerified, lowestPaidProductPriceIdr, modelCount, startingPriceIdr, startingPriceScope, tokenPlans } from "./pricing";
import { billing, gatewayExamples, heroBadges, heroProducts, liveProducts, platformProducts, roadmapProducts } from "./products";
import { heroContent, heroMetrics, orvixOne } from "./siteContent";

describe("public product contract", () => {
  it("links every live product and billing to its matching platform page", () => {
    const expectedPaths = {
      "ai-gateway": "/models", "token-plan": "/token-plan", "ai-plan": "/token-plan",
      "coding-plan": "/coding", "image-credits": "/image-credits", "api-store": "/api-store", domain: "/domains",
    };
    expect(liveProducts.map((product) => product.id).sort()).toEqual(Object.keys(expectedPaths).sort());
    for (const product of liveProducts) {
      const url = new URL(product.platformUrl);
      expect(url.origin).toBe("https://platform.orvix.id");
      expect(url.pathname).toBe(expectedPaths[product.id as keyof typeof expectedPaths]);
    }
    expect(billing.platformUrl).toBe("https://platform.orvix.id/balance");
  });

  it("keeps every roadmap product and Orvix One out of hero data", () => {
    expect(roadmapProducts.map((product) => product.id).sort()).toEqual([
      "omd", "deploy", "object-storage", "redis", "container-engine", "functions", "queue", "auth", "observability",
    ].sort());
    expect(heroProducts.length).toBeGreaterThan(0);
    expect(heroProducts.every((product) => product.status === "live")).toBe(true);
    expect(heroBadges).toEqual(heroProducts.map((product) => product.short));
    const heroText = JSON.stringify([heroBadges, heroMetrics, heroContent]).toLowerCase();
    for (const product of roadmapProducts) {
      expect(heroProducts.some((item) => item.id === product.id)).toBe(false);
      expect(heroText).not.toContain(product.name.toLowerCase());
      expect(heroText).not.toContain(product.short.toLowerCase());
    }
    expect(orvixOne.status).toBe("segera");
    expect(heroText).not.toContain(orvixOne.name);
    expect(platformProducts.every((product) => ["live", "segera"].includes(product.status))).toBe(true);
  });

  it("uses the verified model count in hero copy", () => {
    expect(modelCount).toBe(33);
    expect(heroContent.description).toContain(`${modelCount} model`);
  });
});

describe("rupiah pricing contract", () => {
  it("scopes the teaser to the cheapest Token Plan, rather than image credits", () => {
    expect(startingPriceScope).toBe("Token Plan");
    expect(startingPriceIdr).toBe(Math.min(...tokenPlans.map((plan) => plan.priceIdr)));
    expect(startingPriceIdr).toBe(15_000);
    expect(lowestPaidProductPriceIdr).toBe(Math.min(...allPlans.map((plan) => plan.priceIdr)));
    expect(lowestPaidProductPriceIdr).toBe(imageCredits.priceIdr);
    expect(lowestPaidProductPriceIdr).toBeLessThan(startingPriceIdr);
  });

  it("stores all paid prices as positive integer rupiah with a platform destination and verification date", () => {
    expect(allPlans).toHaveLength(7);
    for (const plan of allPlans) {
      expect(Number.isInteger(plan.priceIdr)).toBe(true);
      expect(plan.priceIdr).toBeGreaterThan(0);
      expect(new URL(plan.platformUrl).origin).toBe("https://platform.orvix.id");
      expect(plan.lastVerified).toBe(lastVerified);
    }
  });

  it("preserves every verified price, token allowance, and expiry choice", () => {
    expect(tokenPlans.map(({ name, priceIdr, variants }) => [name, priceIdr, variants.map(({ tokens, validityDays }) => [tokens, validityDays])])).toEqual([
      ["Ember", 15_000, [[5_000_000, 7]]],
      ["Flame", 40_000, [[17_000_000, 14], [12_000_000, null]]],
      ["Blaze", 80_000, [[35_000_000, 30], [22_000_000, null]]],
      ["Inferno", 150_000, [[65_000_000, 30], [40_000_000, null]]],
    ]);
    for (const plan of tokenPlans) {
      expect(plan.tokens).toBe(plan.variants[0].tokens);
      expect(plan.validityDays).toBe(plan.variants[0].validityDays);
      for (const variant of plan.variants) expect(variant.id === "no-expiry").toBe(variant.validityDays === null);
    }
    expect([aiPlan.priceIdr, aiPlan.validityDays]).toEqual([100_000, 30]);
    expect(aiPlan.fairUse).toEqual({ requestsPerMinute: 20, concurrentRequests: 5, dailyTokens: 20_000_000, cachedTokenPercent: 10 });
    expect([codingPlan.priceIdr, codingPlan.tokens, codingPlan.validityDays]).toEqual([150_000, 60_000_000, 30]);
    expect([imageCredits.priceIdr, imageCredits.credits, imageCredits.validityDays]).toEqual([10_000, 100, 365]);
  });
});
describe("gateway integration examples", () => {
  it("exports a copyable curl command without diff markers", () => {
    const lines = gatewayExamples.curl.split("\n");
    expect(lines[0]).toContain("curl https://api.orvix.id/v1/chat/completions");
    expect(lines[1]).toMatch(/^  -H "Authorization: Bearer /);
    expect(lines[2]).toContain('  -H "Content-Type: application/json"');
    expect(lines[2].endsWith("\\")).toBe(true);
    expect(lines[3]).toMatch(/^  -d '\{"model":"orvix\/auto"/);
    expect(gatewayExamples.curl).not.toMatch(/\n\+/);
    expect(gatewayExamples.curl).not.toContain("diff --git");
  });
});
