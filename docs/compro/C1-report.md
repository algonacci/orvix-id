# C1 report — Orvix company-profile refresh

Date: 2026-10-15  
Branch: `compro/c1-content-model`  
Commit: `d387a8ad449dd2ddc7de1a0ccc3b11895e15783b`

## Work completed

- Replaced the Lovable README with project, data-contract, price-update, truth, and deployment documentation.
- Added `src/data/pricing.ts` as the single commercial-number source. It contains every Token Plan, AI Plan fair-use limits, Coding Plan, Image Credits, platform destinations, validity/no-expiry variants, formatting helpers, `lastVerified`, model families/count, and TLD count.
- Added `src/data/products.ts` with typed `live | segera` product status, all seven live products, all nine roadmap products, Orvix One-adjacent supporting data, gateway features and verified integration examples, coding plugins, API catalog, domain data, billing, community, and roadmap copy.
- Restructured `src/data/siteContent.tsx` to consume and re-export the new contract while retaining legacy exports used by existing pages/components.
- Rewrote site metadata, platform intro, pillars, hero metrics, enterprise qualifications, FAQs, navigation model, Orvix One teaser, and final CTA to reflect live facts and remove unsupported guarantees.
- Added `src/data/siteContent.test.ts` with product-link, hero/roadmap separation, model-count, price, variant, fair-use, validity, and integer-rupiah assertions.
- Public docs verification: `https://docs.orvix.id/quickstart` confirms `https://api.orvix.id/v1`, OpenAI SDK usage, and placeholder-key flow; `https://docs.orvix.id/models` confirms `orvix/auto`, model listing, and BYOK concepts. `https://platform.orvix.id` and `/coding` were reachable without login.

## Export map for C2/C3

Import directly from `@/data/pricing` for new work. Legacy compatibility exports are also available from `@/data/siteContent`.

### `src/data/pricing.ts`

- `lastVerified`, `platformUrl`, `docsUrl`
- `formatNumber`, `formatIdr`, `formatTokens`, `formatValidity`
- Types: `PlanCategory`, `PlanVariant`, `PricingPlan`, `TokenPlan`
- Plans: `tokenPlans`, `aiPlan`, `codingPlan`, `imageCredits`, `allPlans`, `pricingGroups`
- Derived pricing: `startingPriceIdr`, `startingPriceScope`, `lowestPaidProductPriceIdr`
- Copy: `pricingCopy` (`startingPrice`, `aiPlanPrice`, `codingPlanPrice`, `imageCreditsPrice`, `tokenRate`, `fairUse`, `footnote`, `currency`)
- AI catalog: `modelCount`, `modelFamilies`, `aiPlanModelFamilies`
- `domainTldCount`, `communityCampaignName`

Important pricing interpretation: `startingPriceIdr` is the cheapest **Token Plan** and is Rp15.000. `startingPriceScope` is `Token Plan`. `lowestPaidProductPriceIdr` is the cheapest purchase across all paid plans and is Rp10.000 (Image Credits). Do not use the latter for the home Token Plan teaser.

### `src/data/products.ts`

- Types/data: `PlatformProduct`, `platformProducts`, `liveProducts`, `liveProductIds`, `availableProducts` (legacy alias), `roadmapProducts`, `heroProducts`, `heroBadges`
- Gateway: `gatewayFeatures`, `gatewayLinks`, `gatewayIntegration`, `gatewayExamples`
- Coding: `codingPlugins`, `codingIntro`, `codingSetup`
- API Store: `apiCatalog`, `apiStore`
- Domain: `domainTlds`, `domainContent`
- Billing/community/roadmap: `billing`, `community`, `roadmapIntro`

### `src/data/siteContent.tsx`

Existing imports remain supported and these new shared values are exported: `heroContent`, `navigation`, `productNavItems`, `orvixOne`, `enterpriseScopeNote`, `footerCopy`, `pricingFootnote`, `pricingFaqs`, `faqs`, plus the pricing/products exports listed above.

C2 should use `heroContent`, `heroMetrics`, `heroBadges`, `heroProducts`, `modelCount`, `modelFamilies`, `pricingCopy`, `codingPlugins`, `apiCatalog`, `domainContent`, `billing`, `orvixOne`, `roadmapProducts`, `roadmapIntro`, `faqs`, and `finalCta`. C3 should use `pricingGroups`/`allPlans`, the plan records and formatters, `gatewayIntegration`/`gatewayExamples`, `gatewayFeatures`, `gatewayLinks`, `codingSetup`, `apiCatalog`, `apiStore`, `domainContent`, and `billing`.

## Claim audit — every changed data claim

| Before | After | Reason/source |
|---|---|---|
| “managed database, AI gateway, storage, dan deployment lewat satu dashboard”; “Infrastruktur di Indonesia, tanpa perlu mengurus server” | “AI Gateway, paket AI dan coding, API data Indonesia, serta domain dengan billing rupiah” | Storage/deployment/managed DB are roadmap; README §2 live products only. |
| SEO keywords included managed database, managed MySQL, deploy, object storage, private cloud, hybrid cloud, and broad monitoring claims | SEO keywords now focus on cloud platform Indonesia, AI Gateway, OpenAI-compatible API, rupiah AI tokens, coding plan, API data Indonesia, and domains | Removed stale platform-product targets from data metadata; enterprise remains represented by pages. |
| Product status values `available | roadmap` | `live | segera` | Required contract; live products now AI Gateway, Token Plan, AI Plan, Coding Plan, Image Credits, API Store, Domain. |
| OMD was listed as available with MySQL 8, backup, and credentials | OMD is `segera`, with no live feature promises | README §2 explicitly says OMD is not live. |
| Deploy, Object Storage, Redis, Container, Functions, Queue, Auth, Observability were roadmap but mixed with live model | All nine are explicit `segera` products with “belum tersedia untuk digunakan” | Required one quiet roadmap list. |
| “Satu dashboard” promised database, AI gateway, storage, deployment | “Organisasi dan proyek” describes organization/project/member and per-project AI usage | Keeps verified billing/platform organization facts without promising unavailable services. |
| “Provisioning otomatis… kredensial langsung jadi” | “AI lewat API” with OpenAI-compatible API, automatic failover, and `orvix/auto` | Removed unsupported current-platform provisioning guarantee. |
| “Workload dan data berjalan di region Jakarta” | “Billing rupiah”; FAQ says location must be confirmed per service | README allowed facts did not verify this claim for the current public product set. |
| Hero metrics “Satu dashboard”, “Hitungan detik”, “Region Jakarta”, “Tanpa urus server” | `33 model`, `OpenAI-compatible`, `Rupiah`, `Per proyek` | Replaced stale/unsupported hero claims with verified AI/billing facts. |
| Hero badges included Managed Database, Object Storage, Deploy, Container Engine, Observability | Badges derive only from live products | Roadmap products must not appear in hero. |
| Enterprise intro promised Orvix would design, operate, and maintain infrastructure | Enterprise copy now says scope, support, and targets are agreed per project | Preserves enterprise door without guarantee. |
| Enterprise migration use case promised more efficient platform and improved reliability | “Perencanaan konsolidasi…” and “sesuai kebutuhan kapasitas dan operasional” | Removes unverified outcome guarantee. |
| Security/monitoring text said issues become visible faster and public exposure is controlled | Copy now invites discussion of monitoring/security baseline and access/ports | Removes performance/security outcome guarantee. |
| Managed DB/storage package feature implied platform products | “Pengelolaan database/storage sesuai lingkup proyek enterprise” | Prevents roadmap platform services being implied live. |
| “Pengalaman infrastruktur yang praktis” and reliability/no-overhead positioning | “Pendekatan infrastruktur yang praktis” and a scoped operational-discussion description | Keeps enterprise intent while removing implied experience/reliability guarantee. |
| “Fleksibel di AWS, VPS, Cloudflare, Docker, dan Proxmox” | “Pilihan arsitektur sesuai kebutuhan” | Avoids presenting unverified supplier/technology scope as a platform promise. |
| “Monthly managed support tersedia” | “Diskusikan dukungan berkala” | Support is scope-dependent; no blanket availability guarantee. |
| Final CTA promised self-serve provisioning | CTA now points to live AI/plan/API/domain products and scoped enterprise discussion | Removes unsupported provisioning promise. |
| FAQ said platform provides ready database, patching, backup, no root management | FAQ now explains tokens, Token/AI/Coding differences, AI fair use, expiry, QRIS billing, and current product split | Database is roadmap; old answer falsely described live platform capability. |
| FAQ claimed all infrastructure was in Jakarta and data stayed inside Orvix | FAQ now says location must be confirmed per service | Removed unverified residency claim from allowed site data. |
| FAQ said platform/enterprise self-serve distinction around resource provisioning | FAQ now defines live product platform versus scoped enterprise services | Matches current live catalog. |
| FAQ omitted product availability | Added answer that Managed Database and Deploy are roadmap/Segera | Makes current state explicit. |
| No Orvix One shared contract | Added teaser only: “asisten AI untuk semua orang, di HP dan desktop”, “Segera hadir”, WhatsApp interest URL | Exactly the founder decision; no date/features/price added. |
| No model/pricing/catalog contract | Added 33 model count, family arrays, all plans, six API catalog items, TLD list/count, coding plugins, billing, roadmap | Supports C2/C3 without hard-coded numeric/product copy. |
| No verified gateway setup data | Added `https://api.orvix.id/v1`, `orvix/auto`, placeholder API key, curl and OpenAI SDK examples | Verified on public docs without login. |

## Unverified or deliberately not asserted

- No claim is made that data/workloads run in Jakarta; the prior SEO strategy still contains this claim, but C1 data no longer repeats it. C4 should decide whether to revise SEO/index JSON-LD under its ownership.
- No uptime, customer, logo, testimonial, certification, launch date, or model-supplier claim was added.
- No domain prices were added; README §2 says registrar pricing controls them.
- API Store endpoint shapes were not invented. The catalog links to platform/docs; C3 should only add request examples from docs.
- The public platform homepage uses a generic English title and the public `/coding` page is reachable, but no unauthenticated product UI facts beyond the supplied brief were inferred.
- Existing enterprise service descriptions still discuss generic infrastructure tools and outcomes because C1 owns data but must preserve the enterprise door. C2/C3/C4 should review presentation context.

## Exact diffs needed outside C1 ownership

These were intentionally not edited because ownership is C2/C3/C4.

### C2 — `src/components/HeroSection.tsx`

Replace the hard-coded hero paragraph at lines 219–221:

```diff
- Orvix Cloud Platform menyatukan managed database, AI gateway, storage, dan deployment
- dalam satu dashboard. Provisioning otomatis, kredensial langsung jadi, infrastruktur
- tetap di Indonesia.
+ {heroContent.description}
```

Import `heroContent` from `@/data/siteContent`. Remove or redesign the dashboard mock values that imply verified production facts: `99.98% uptime · 30d`, `12.4%`, `1.24M`, `CPU 18%`, `860 MB / 2 GB`, `14 GB / 40 GB`, “Database provisioned”, “Daily snapshot”, and `id-jkt-1`. They are not allowed facts. Render live hero badges/metrics from data and use `heroContent.primaryCta`/`secondaryCta`.

### C2 — `src/components/Footer.tsx`

Replace the hard-coded final status claim:

```diff
- <span>... Infrastruktur berjalan di region Jakarta</span>
+ <span>{footerCopy.billing}</span>
```

Import `footerCopy`. The current `availableProducts` import is still compatible, but product names should link from the live product records where the footer redesign permits.

### C2 — `src/components/PlatformSection.tsx`

Use `roadmapIntro` and status-aware live products. The existing component now receives the corrected catalog through the compatibility export, but its “Roadmap / Dalam pengembangan” heading should be replaced with explicit “Segera” wording and `roadmapIntro` so availability is unambiguous.

### C2 — `src/components/WhyOrvixSection.tsx`, `WorkflowSection.tsx`, `InfrastructureStackSection.tsx`

Audit remaining illustrative copy and terminal/dashboard values before shipping. These files contain hard-coded operational guarantees/telemetry such as “Monitoring aktif”, “Backup terverifikasi”, “100%”, `app.orvix.id`, request statuses, and “Verified”. Replace them with scoped enterprise-process language or clearly labelled visual placeholders; no unverified metrics should be presented as Orvix production facts.

### C3 — new pages and `src/App.tsx`

Add `/harga`, `/ai-gateway`, `/coding`, `/api-store`, and `/domain` routes in C3’s route block. Use only the exports in the map above. Include `pricingCopy.footnote` on `/harga`; send plan CTAs to each record’s `platformUrl`; do not print domain prices; do not add API request examples unless verified in docs. C3 owns these files and should also update its page-specific navigation links.

### C4 — SEO/index/prerender

`index.html` still has old static fallback descriptions and JSON-LD description (“managed database, AI gateway, storage, dan deployment”) because C4 owns SEO files. Exact replacement for the old static description is:

```diff
- Orvix Cloud Platform menyediakan managed database, AI gateway, storage, dan deployment lewat satu dashboard. Infrastruktur di Indonesia, tanpa perlu mengurus server.
+ Orvix Cloud Platform untuk developer Indonesia: AI Gateway, paket AI dan coding, API data Indonesia, serta domain dengan billing rupiah.
```

Replace the old OG/Twitter descriptions using the same current description. Replace SoftwareApplication description with the same live-focused wording. Reconsider the static JSON-LD Jakarta address/region wording against the allowed-facts rule. Add the new C3 routes to `scripts/routes.mjs`, sitemap, and prerender route source as C4 owns those files.

## Checks

- `bun install --frozen-lockfile`: **failed before install** because the repository lockfile has changes relative to `package.json` (`lockfile had changes, but lockfile is frozen`).
- `bun install --no-save`: **passed**, 530 packages installed; no lockfile was committed.
- `bun run test`: **passed**, 2 test files / 7 tests.
- `bunx tsc --noEmit -p tsconfig.app.json`: **passed**.
- `bun run lint`: **passed with 7 pre-existing warnings** in shadcn UI component files (`react-refresh/only-export-components`); no errors and no C1 data-file warning after named exports replaced `export *`.
- `bun run build`: **passed**; Vite production build completed.
- `bun run build:static`: **Vite build passed; prerender failed** at Chromium launch with `spawn ENOEXEC` from `@sparticuz/chromium`/`puppeteer-core` on this macOS environment. Browser prerequisite/orchestration is outside C1. No static browser screenshots were produced.
- `git diff --check`: **passed**.
- Worktree is clean after commit; no push or PR created.

## Follow-up: gateway curl regression fix

Follow-up commit: pending at report-writing time.

Fixed `src/data/products.ts` `gatewayExamples.curl`: removed the accidental literal `+` characters that had been copied into each continuation line. The exported command now contains plain `-H`, `-H`, and `-d` flags, so it can be copied and run as a shell command.

Added a regression assertion in `src/data/siteContent.test.ts` that checks the exported command has the expected endpoint, authorization/content-type header flags, JSON body flag, shell continuation, and no newline diff markers (`\n+`) or `diff --git` text.

Follow-up checks:

- `bun run test`: passed, 2 test files / 8 tests.
- `bunx tsc --noEmit -p tsconfig.app.json`: passed.
- `git diff --check`: passed.
- No other data contracts were changed.

Correction: the follow-up commit is `b49a6b436fab1b4a0a378b6e67b893a418b48501`.
