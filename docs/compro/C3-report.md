# C3 report — pricing, developer product pages, about and contact

- Date: 2026-10-15
- Branch: `compro/c3-new-pages`
- Worktree: `/private/var/folders/rq/ctsblr0x3wd0sltryrc3r7jr0000gn/T/opencode/compro-c3`
- Commit: `7ae44fe7fe8f074f345134d6106c4ee30c0347e6`
- Source changes committed only in C3 ownership. No push, PR, or additional agents.

## Implementation and route handoff to C4

New routes in the `C3 routes` block of `src/App.tsx`:

| Route | Component |
|---|---|
| `/harga` | `src/pages/Harga.tsx` |
| `/ai-gateway` | `src/pages/products/AiGateway.tsx` |
| `/coding` | `src/pages/products/Coding.tsx` |
| `/api-store` | `src/pages/products/ApiStore.tsx` |
| `/domain` | `src/pages/products/Domain.tsx` |
| `/tentang` | updated `src/pages/Tentang.tsx` |
| `/kontak` | updated `src/pages/Kontak.tsx` |
| `/layanan` | existing, unmodified `src/pages/Layanan.tsx` |

`/about`, `/contact`, `/services`, and `/services/:slug` still render directly. No redirects added. Shared `ProductLayout.tsx` supplies responsive page layout, per-page title/description via existing SEOHead, product navigation from C1, platform CTA, and wrapping code blocks. It is under C3-owned `src/pages/products/`.

**C4 must add all eight new routes to its static route source.** Current build prerenders only the pre-existing 12 paths. New routes were browser-tested through SPA fallback with explicit capture routes. `Tentang` and `Kontak` use the current URL for metadata so aliases remain self-canonical until C4 canonicalizes them. Existing Layanan hard-codes `/services`; C4 should canonicalize that override to `/layanan` in SEOHead. New product routes currently inherit the default OG image pending C4 banners.

## Claim audit: before → after

All prices, commercial counts, validity periods, API/model/TLD/plugin/product lists are rendered from C1 files. C1 data was read-only. New-page rows below use “absent” because these pages previously did not exist.

| Location / claim before | Claim after | Evidence |
|---|---|---|
| Harga absent | All Token Plans grouped separately from AI Plan, Coding Plan, Image Credits | C1 `pricing.ts`, brief README §2 |
| Token plan comparison absent | Ember Rp15.000 / 5 juta / 7 hari; Flame Rp40.000 / 17 juta / 14 hari OR 12 juta no expiry; Blaze Rp80.000 / 35 juta / 30 hari OR 22 juta no expiry; Inferno Rp150.000 / 65 juta / 30 hari OR 40 juta no expiry | `tokenPlans` and formatters; values not hard-coded in page |
| Expiry explanation absent | Both variants shown together, one chosen at the same price; quotas are not added; Ember has no no-expiry variant | C1 variants and pricing FAQ |
| Audience comparison absent | Each pack has C1 audience sentence; category comparison distinguishes quota, routine fair-use, coding endpoint, image generation | C1 audiences |
| AI fair use absent | Rp100.000 / 30 hari; 20 requests/minute, 5 concurrent, up to 20 juta/day, cache 10%; lineup GPT-5.6, Gemini, DeepSeek, Qwen and more, subject to change | `aiPlan`, `aiPlanModelFamilies` |
| Coding commercial detail absent | Rp150.000 / 30 hari, 60 juta coding tokens, dedicated coding endpoint, plugins from data | `codingPlan`, `codingPlugins` |
| Image credit detail absent | Rp10.000 for 100 credits, valid 365 days | `imageCredits` |
| Payment FAQ absent | Token cost varies by model; AI fair use; expiry choices; QRIS organization balance; rupiah pricing avoids FX conversion | C1 `pricingFaqs`, `pricingCopy`, `billing` |
| Price freshness absent | “Harga per 2026-10-15; harga terbaru di platform.orvix.id.” on Harga and Coding | `pricingCopy.footnote` |
| Pricing destinations absent | Every token pack and AI Plan → `/token-plan`; coding → `/coding`; image → `/image-credits`; top-up → `/balance`, all on platform.orvix.id | C1 plan URL fields; browser DOM checked |
| Gateway explanation absent | One key, 33 models, OpenAI-compatible API, project usage | C1 `modelCount`/gateway data and brief |
| Gateway examples absent | Valid curl plus OpenAI JavaScript SDK, base `https://api.orvix.id/v1`, `orvix/auto`, placeholder key/env var | Public quickstart + models docs; C1 integration and SDK example |
| Gateway routing absent | Failover changes route on failure; `orvix/auto` selects a model for request; response names chosen model and rate follows it | C1 `gatewayFeatures`, public models docs |
| BYOK / ID convention absent | Managed IDs use `orvix/`; BYOK uses own configured key and native model ID; no supplier names or sourcing explanation | Public models docs |
| Model families absent | Full text and image family lists from C1; link to current model catalog | `modelFamilies`; no independent page list |
| Playground / key links absent | `/api-keys`, `/models`, `/playground`, quickstart/models docs | `gatewayLinks`, `gatewayIntegration` |
| Coding agent explanation absent | C1 one-paragraph definition, dedicated endpoint, OpenCode/Pi/omp plugin cards | `codingIntro`, `codingPlugins` |
| Coding setup absent | Open Coding → sign in → select plan/tool → follow authenticated plugin guide; no invented install commands | `/coding` redirects unauthenticated browser to `/login`; brief and `codingSetup` |
| API Store catalog absent | All six API products, currently free, described from C1 | `apiCatalog`, `apiStore`; public API Store docs corroborate |
| API Store examples absent | One verified curl shape per product; project bearer key and product scope or `api_store:all` | Public API Store docs; exact endpoints below |
| API response contract absent | Success `data` + `meta`; failures `error.code` + `error.message` | Public API Store docs |
| NIK meaning absent | Structural parser, not identity verification/KYC; placeholder NIK in POST body | Public API Store docs |
| Domain page absent | 30 TLDs; display only C1 sample list; paid from Orvix balance and managed in same account; latest prices in platform, no domain prices printed | `domainContent`, `billing`, brief |
| Tentang enterprise-only headline promising infrastructure “lebih terkelola, aman, dan siap berkembang” | Orvix Cloud Platform for Indonesian developers with rupiah billing | Brief positioning and branding vision |
| Tentang focus on cloud/server/deployment/backup/monitoring/DevOps/managed support | Developer-cloud vision explicitly framed as vision; live AI-first product catalog from data | Branding context + C1 live product contract |
| Tentang “Bukan general IT support…” and enterprise benefit cards | Current live products with product-page links and QRIS/org/project/member explanation | `liveProducts`, `billing` |
| Tentang “reliability tanpa overhead operasional berlebih” plus industry list | Scoped enterprise link, no reliability/overhead promise | `enterpriseScopeNote` |
| Community absent | Road to DevFest Jakarta 2026 token sponsorship, without token value | `community` |
| Roadmap absent from Tentang | Quiet “Segera” list explicitly not available, including OMD | `roadmapProducts`, `roadmapIntro` |
| Kontak title/meta only about enterprise infrastructure | Contact for platform/product/billing and scoped enterprise questions | `contactCopy` + current positioning |
| Kontak WhatsApp only consultation/implementation | WhatsApp retained with product/project inquiry copy; same number | Existing C1 WhatsApp data |
| Kontak plain email | Same hello@orvix.id, now clickable mailto | Existing C1 contact data |
| Kontak “Lokasi” card with generic Indonesia label | Indonesia describes intended developer/business audience, not office/residency | C1 `locationLabel`, brief target positioning |
| Kontak “Alur konsultasi” workload/deployment/support model | Ask for application goal/product/problem; separate platform/docs/enterprise links | Current platform and scoped enterprise copy |
| No location-specific contact qualification | Ask about service-specific processing location when a project requires it | C1 FAQ says location needs confirmation |

## Public verification, no login

Verified on 2026-10-15:

1. `https://docs.orvix.id/quickstart`: base URL, POST `/v1/chat/completions`, JSON `model`/`messages`, bearer auth, OpenAI package and SDK initialization/response access. Examples use placeholders. No live authenticated request or spend was performed.
2. `https://docs.orvix.id/models`: managed `orvix/` prefix vs unprefixed BYOK IDs, `orvix/auto` accepted request example and actual model returned, per-model billing; also corroborates distinct coding catalog. Only allowed concepts copied; no supplier names or sourcing details published.
3. `https://docs.orvix.id/api-store`: all six request shapes and scopes, currently free, `data`/`meta`, error contract, NIK structural-only limitation. Used requests:
   - Regional: `GET /v1/regions/provinces`, `regions:read`.
   - Schools: `GET /v1/schools?search=Jakarta`, `schools:read`.
   - Holidays: `GET /v1/holidays?year=2026`, `holidays:read` (example year derived from C1 lastVerified).
   - BMKG: `GET /v1/bmkg/earthquakes/latest`, `bmkg:read`.
   - KBLI: `GET /v1/kbli/codes?q=software`, `kbli:read`.
   - NIK: `POST /v1/nik/parse`, `nik:read`, JSON `{"nik":"YOUR_NIK"}` placeholder, curl `-d` implies POST. Numeric format details not duplicated in copy.
4. `https://platform.orvix.id/coding`: webfetch provided no readable UI; native Brave/Puppeteer confirmed final URL `https://platform.orvix.id/login`, title `Sign in · Orvix`, body magic-link email form. No authentication attempted. Detailed setup cannot be independently verified, so commands are not published.

## Checks and screenshots

- Dependencies: symlink to orchestrator integration node_modules, ignored/uncommitted.
- `bun run lint`: PASS, zero errors, seven pre-existing shadcn Fast Refresh warnings.
- `bun run test`: PASS, 2 files / 7 tests.
- `bunx tsc --noEmit -p tsconfig.app.json`: PASS.
- `PRERENDER_CHROME_PATH=.../compro-chrome PRERENDER_PORT=45683 bun run build:static`: PASS, 12 existing routes prerendered, 0 failures. Existing Browserslist database age notice only. **Does not yet include new paths until C4 changes route source.**
- `git diff --check`: PASS.
- Additional browser verification: all eight Harga platform CTA hrefs matched expected destinations; native FAQ opened on click.
- Explicit capture command: `COMPRO_ROOT=.../compro-c3 COMPRO_SCREENSHOTS=.../compro-c3-screenshots COMPRO_ROUTES=/harga,/ai-gateway,/coding,/api-store,/domain,/tentang,/kontak node .../compro-capture.mjs`.
- Seven owned pages × 1440px and 375px = 14 captures, all zero page errors, zero document overflow, one page h1. All 14 images visually reviewed: readable stacked cards, fair-use details visible, code wraps within cards, no page-level clipping.
- Supplemental capture for `/layanan,/services,/about,/contact` at both widths: 8 captures, zero errors/overflow. Confirms aliases render, not redirect.

Artifacts outside repo:

- `/private/var/folders/rq/ctsblr0x3wd0sltryrc3r7jr0000gn/T/opencode/compro-c3-screenshots/README.md`
- Same directory `audit.json` and `{harga,ai-gateway,coding,api-store,domain,tentang,kontak}-{1440,375}.jpg`.
- `/private/var/folders/rq/ctsblr0x3wd0sltryrc3r7jr0000gn/T/opencode/compro-c3-alias-screenshots/README.md`, `audit.json`, and alias images.

Visual integration issues outside ownership: old shared Footer still asserts Jakarta residency; the fixed WhatsApp button can overlap mobile body text/headings (notably API Store and Kontak). C2/integrator should resolve. Nav/Footer in these isolated screenshots are pre-C2. Their final merged appearance needs integrated recapture.

## Unverified facts and founder copy questions

- Can founder confirm a public business location, and the exact approved wording (e.g. “berbasis di Jakarta”)? That is separate from data/workload residency. No office, founding history, team size, customers, uptime, certifications, or infrastructure-location claim added.
- Can founder confirm service-specific processing regions before any “region Jakarta” assertion? The historical architecture note does not prove current products' residency. Contact currently invites service-specific confirmation.
- Authenticated coding plugin install/config flow remains unverified; founder can confirm exact current guide or make it public if company-site commands are desired. Existing high-level steps do not claim any unseen tab/button labels.
- Prices/model count/TLD count/live lists are accepted from the founder's verified §2 via C1, not re-verified through an authenticated account.
- Public API docs use display names “Indonesia Schools” and “KBLI 2025”; page intentionally keeps C1 “Schools Indonesia” / “KBLI Indonesia” names until data owner/founder decides naming.
- Domain prices intentionally absent. No new supplier/reseller/cost/margin statements; domain copy avoids C1 registrar wording to keep page product-focused.

## Exact diffs needed outside C3 ownership

### C1/integrator: malformed shared curl data

`src/data/products.ts` line 74 has literal `+  ` diff markers at the start of each continuation line. C3 avoids publishing this invalid example by building curl from `gatewayIntegration`; SDK example is consumed directly. Recommended replace just the curl property with:

```diff
-  curl: `curl ${gatewayIntegration.baseUrl}/chat/completions \\\n+  -H "Authorization: Bearer ${gatewayIntegration.apiKeyPlaceholder}" \\\n+  -H "Content-Type: application/json" \\\n+  -d '{"model":"${gatewayIntegration.model}","messages":[{"role":"user","content":"Halo Orvix!"}]}'`,
+  curl: [
+    `curl ${gatewayIntegration.baseUrl}/chat/completions \\`,
+    `  -H "Authorization: Bearer ${gatewayIntegration.apiKeyPlaceholder}" \\`,
+    '  -H "Content-Type: application/json" \\',
+    `  -d '${JSON.stringify({ model: gatewayIntegration.model, messages: [{ role: "user", content: "Halo Orvix!" }] })}'`,
+  ].join("\n"),
```

### C1/C2/integrator: shared nav paths

```diff
--- src/data/siteContent.tsx
-  { label: "Layanan", path: "/services" },
-  { label: "Tentang", path: "/about" },
-  { label: "Kontak", path: "/contact" },
+  { label: "Layanan", path: "/layanan" },
+  { label: "Tentang", path: "/tentang" },
+  { label: "Kontak", path: "/kontak" },
```

### C2: existing Footer assertion

```diff
--- src/components/Footer.tsx
@@
   enterpriseServices,
+  footerCopy,
@@
-        <span className="inline-flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" /> Infrastruktur berjalan di region Jakarta</span>
+        <span className="inline-flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" /> {footerCopy.billing}</span>
```

### Integrator: mobile floating WhatsApp overlap

Proposed minimal shared fix retains the floating button on desktop; mobile still has WhatsApp in Navbar/Footer/Kontak. Integrator should confirm mobile Navbar/Footer CTA availability after C2 merge.

```diff
--- src/components/WhatsAppButton.tsx
-    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
+    className="fixed bottom-6 right-6 z-50 hidden items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform sm:flex"
```

### C4: minimum route-source additions (before your alias-aware refactor)

```diff
--- scripts/routes.mjs
@@
   { path: "/", changefreq: "weekly", priority: "1.0" },
+  { path: "/harga", changefreq: "weekly", priority: "0.9" },
+  { path: "/ai-gateway", changefreq: "weekly", priority: "0.9" },
+  { path: "/coding", changefreq: "weekly", priority: "0.9" },
+  { path: "/api-store", changefreq: "weekly", priority: "0.9" },
+  { path: "/domain", changefreq: "monthly", priority: "0.8" },
+  { path: "/layanan", changefreq: "monthly", priority: "0.9" },
+  { path: "/tentang", changefreq: "monthly", priority: "0.7" },
+  { path: "/kontak", changefreq: "monthly", priority: "0.7" },
```

For final canonical-only sitemap, exclude English aliases there but keep them in prerender paths. Suggested central canonical override preserves service-detail URLs:

```diff
--- src/components/SEOHead.tsx
@@
-  const pathname = path ?? location.pathname;
+  const requestedPath = path ?? location.pathname;
+  const canonicalAliases: Record<string, string> = {
+    "/services": "/layanan",
+    "/about": "/tentang",
+    "/contact": "/kontak",
+  };
+  const pathname = canonicalAliases[requestedPath] ?? requestedPath;
```

C4 must simultaneously adapt `scripts/prerender.mjs`'s self-canonical assertion to expect alias target paths, and resolve OG names/breadcrumbs for the new routes. Existing Layanan's `path="/services"` is then normalized without needing C3 to edit unowned Layanan.

### Generated sitemap (uncommitted, owned by C4)

Build regenerated `public/sitemap.xml`. Exact generated change is the following replacement in each of its existing 12 URL entries (no URL/priority/frequency changes):

```diff
-    <lastmod>2026-08-09</lastmod>
+    <lastmod>2026-10-15</lastmod>
```

Entries: `/`, `/services`, `/about`, `/contact`, and the eight existing `/services/*` detail paths. This is the only remaining tracked worktree change after C3 commit; intentionally not committed or reverted.
