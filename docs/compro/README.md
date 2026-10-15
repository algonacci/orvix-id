# Company profile refresh — 15 October 2026

## Scope and review

Orvix Cloud Platform remains the umbrella, with live AI products leading the homepage. Developer product pages and enterprise business-owner pages keep separate intent.

| Agent | Changes | Detailed audit |
|---|---|---|
| C1 | Typed live/Segera catalog, centralized prices and counts, verified gateway examples, revised shared copy, README and data tests | [C1 report](C1-report.md) |
| C2 | AI-first home, product navigation/footer, live pricing teasers, compact enterprise door, Orvix One, roadmap, removal of simulated operational metrics | [C2 report](C2-report.md) |
| C3 | Harga, AI Gateway, Coding, API Store, Domain, Tentang/Kontak, Indonesian routes and compatible aliases | [C3 report](C3-report.md) |
| C4 | Route metadata, OG images, sitemap/prerender, structured data and SEO strategy | [C4 report and metadata table](C4-report.md) |

The agent reports contain the complete before → after claim ledger, including deleted numerical dashboard visuals and revised enterprise guarantees. They describe each isolated branch at completion; integration resolutions below supersede their open handoff items.

## Integrated resolutions

- Fixed shared curl continuation markers and consumed the corrected shared example on the gateway page.
- Canonical company navigation uses `/layanan`, `/tentang`, `/kontak`; old English paths remain available.
- Applied shared hero origin/registration wording requested in C2; signup is explicitly free, usage follows the selected plan.
- Home “mulai dari Rp15.000” is scoped to **Token Plan**. Image Credits remain Rp10.000; both minimum prices are derived from the data.
- Used exact **30 hari** validity instead of implying calendar-month billing.
- Removed mobile floating WhatsApp overlap; contact remains reachable from `/kontak` and homepage calls to action.
- Repaired the pre-existing Bun lockfile/package mismatch and curl-test lint syntax.

## Facts not verified and intentionally omitted

- Current processing/data-residency regions for individual services; no universal Jakarta/Indonesia residency promise.
- Public company office/address in Jakarta, independent of the product's Indonesian positioning.
- Authenticated coding-plugin installation/configuration commands. The public route leads to login; the page links to the platform guide.
- Domain prices, which must be checked in the platform.
- No invented customers, testimonials, certifications, uptime, operational telemetry, team size, launch dates, or Orvix One features/prices.

## Founder copy questions

1. What public business-location wording may we publish, and can service-specific processing regions be documented separately?
2. Should coding plugin setup become public documentation so the company site can quote verified install commands?
3. Should the API catalog retain the brief's “Schools Indonesia” / “KBLI Indonesia”, or adopt the docs' “Indonesia Schools” / “KBLI 2025” names?
4. Confirm the preferred origin phrase, “dibuat di Indonesia”, and retain the precise 30-day plan wording for future edits.

## Verification

- `bun run build:static`: PASS, 21 prerendered routes and serialized metadata/schema/sitemap validation.
- `bun run lint`: PASS, zero errors; seven pre-existing shadcn Fast Refresh warnings.
- `bun run test`: PASS, 14 tests in three files, including stale-build detection, route inventory, unique metadata, pricing offers and FAQ schema.
- `bunx tsc --noEmit -p tsconfig.app.json`: PASS.
- Internal link/fragment audit: 21 routes, no broken internal links.
- Browser interactions: mobile navigation to Harga, menu close, all home FAQs, pricing FAQ, desktop product dropdown and Escape: PASS.
- Screenshots of all 21 routes (1440px and 375px) were reviewed during the PR but are not committed, to keep the repository small. Regenerate them from `dist/` after `bun run build:static`.
- Sitemap: 17 canonical URLs; aliases retain their own static HTML, with canonical tags pointing to Indonesian paths. Static 404 is noindex.

The C4 report's inherited lint blocker was already fixed on integration before the final checks above. Source/build artifacts are validated locally; deployment status is recorded in the pull request.

## Review fixes (15 Oct 2026)

Founder decisions applied after review: inner pages (Harga, products, Tentang, Kontak) use the same dark
theme as the home page; the "Di mana data dan workload dijalankan?" FAQ is removed; office location is
"Jakarta, Indonesia" (city-level JSON-LD address, no street); "dibuat di Indonesia" stays in the hero.
Also: Coding page shows the public plugin install commands and key setup; Harga FAQ uses the shared
accordion (`FaqList`) and is prerendered like the home FAQ; "AI-first" removed from user-facing copy;
duplicate hero metrics removed from the gateway card; "Segera" heading aligned.
