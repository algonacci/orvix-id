# C2 — AI-first home implementation report

Date: 2026-10-15  
Worktree: `/private/var/folders/rq/ctsblr0x3wd0sltryrc3r7jr0000gn/T/opencode/compro-c2`  
Branch: `compro/c2-home`  
Base: C1 `d387a8ad449dd2ddc7de1a0ccc3b11895e15783b`  
Commit: `518ca9aceda6982754a8aeb14466cf519cedf9b0`

## Implementation

- Home order: Hero → AI (`PlatformSection`, reused) → Coding → API Store → Domain → Enterprise → Orvix One → Segera → FAQ → final CTA.
- Kept Orvix Cloud Platform as umbrella; AI-first leads. Hero uses live-only badges, C1 model count and verified integration fields instead of invented telemetry.
- Registration CTA says **Daftar gratis**, explicitly explains that only signup is free. Pricing uses C1 `pricingCopy`: **Token Plan mulai dari Rp15.000**, AI Plan **Rp100.000 / 30 hari** and its fair-use limits, Coding Plan **Rp150.000 / 30 hari** and token allowance. No price/count literals in components.
- Model family strip, plugin names, API catalog, TLD list, roadmap, pricing, FAQs, and nav lists come from C1. Domain has no printed price. API Store clearly says **Gratis saat ini**.
- Home product links lead to `/ai-gateway`, `/coding`, `/api-store`, `/domain`, `/harga`; signup/login and coding setup links use C1 platform destinations. No coding install snippet was invented.
- Enterprise is now a short, scoped second door to `/layanan` and WhatsApp. Orvix One is a compact text-only teaser with C1 prefilled WhatsApp interest URL.
- Navbar has accessible Radix product dropdown, canonical Indonesian company routes, Masuk, and viewport-bounded mobile menu. Footer mirrors product/company navigation.
- Audited all legacy owned sections even though `WhyOrvixSection`, `WorkflowSection`, and `InfrastructureStackSection` are no longer on `/`. Removed fake visuals and reframed retained enterprise data as project-scoped discussion. Kept their exports rather than deleting them.
- No C1 data, README, CSS, App routes, SEO, scripts, lockfile, or other page source changed. No push/PR; no subagents; no Secrets access.

## Files committed

`src/pages/Index.tsx`; `src/components/{HeroSection,PlatformSection,CodingSection,ApiStoreSection,DomainSection,EnterpriseSection,OrvixOneSection,RoadmapSection,FaqSection,FinalCtaSection,Navbar,Footer,WhyOrvixSection,WorkflowSection,InfrastructureStackSection}.tsx`.

## Complete claim rewrite/removal audit

This records baseline C1-branch component claims and factual visuals, including those removed from inactive components. Ordinary class sizes, SVG geometry, style percentages, and array indices are layout—not marketing numbers. Data-derived content retained unchanged is called out separately.

### HeroSection

| Before | After |
|---|---|
| “Orvix Cloud Platform” badge | “Orvix Cloud Platform · AI-first”, still the cloud-platform umbrella |
| “Bangun dan deploy, tanpa ngurus server.” | “Akses AI, bangun aplikasi Anda.” |
| “menyatukan managed database, AI gateway, storage, dan deployment dalam satu dashboard” | C1 `heroContent.description`: “Satu API key untuk 33 model, dengan billing rupiah untuk developer Indonesia.” |
| “Provisioning otomatis, kredensial langsung jadi” | Removed; no provisioning/credentials promise |
| “infrastruktur tetap di Indonesia” | Removed as residency claim; “Dibuat di Indonesia” is product-origin positioning requested by C2, not a processing-location claim |
| “Ke Platform Orvix” | “Daftar gratis”; “Pendaftaran gratis. Pemakaian mengikuti paket dan tarif yang dipilih.” |
| “Lihat Produk” → `#platform` | “Lihat harga” → C1 `/harga` |
| “Butuh setup khusus? Tim Orvix siap turun langsung” | Removed from hero; short scope-qualified enterprise door later |
| Dashboard aria-label “Preview dashboard infrastruktur Orvix.id” | Removed dashboard preview; product/integration panel |
| `orvix / production`, `business-production` | `orvix / ai-gateway`, “Satu pintu ke AI” |
| `app.orvix.id`, `id-jkt-1` | Removed; C1 verified `baseURL: https://api.orvix.id/v1` and `model: orvix/auto`, explicitly labelled “Konfigurasi integrasi” |
| “Operational” | “Live” indicating the gateway product's availability, not operational health |
| `99.98% uptime · 30d` | Removed |
| “Rolling deploy”, animated completion `100%` | Removed |
| “Requests · 24h”, increase `12.4%`, total `1.24M` | Removed |
| Fake traffic series `[16,24,20,31,27,39,34,47,43,57,65,56,70,77,68,83,92,86]` and spark chart | Removed entirely |
| Chart times `00:00`, `12:00`, `now` | Removed |
| CPU `18%`, fill `18` | Removed |
| Memory `860 MB / 2 GB`, fill `42` | Removed |
| Disk `14 GB / 40 GB`, fill `35` | Removed |
| “Database provisioned”, `omd · business_prod`, `now`, live status | Removed |
| “AI Gateway key created”, `ai-gateway · sk-orx-••••`, `1h` | Removed fabricated activity |
| “Daily snapshot”, `omd · 1.8 GB`, `4h` | Removed |
| “Resources”, “Recent activity”, dashboard command shortcut `⌘ K` | Removed with simulated dashboard |
| C1 hero metrics and badges | Retained from data; only live badges. Added C1 billing title/payment method below badges |

### PlatformSection (reused as AI section)

| Before | After |
|---|---|
| General platform vision/intro/pillar grid | Focused AI Gateway heading “Hubungkan aplikasi Anda ke model AI.” and C1 first three gateway features |
| Broad live-product card grid (C1 catalog) | Product-specific sections in required order; live list still appears as C1 hero badges |
| “Roadmap”, “Dalam pengembangan” interleaved below live cards | One separate quiet “Segera” section near bottom, C1 “belum tersedia untuk digunakan” |
| “Mulai di platform”; “Buat akun, provisioning resource pertama Anda sendiri.” | Removed provisioning promise; scoped Token Plan teaser and AI Plan CTA → `/harga` |
| No AI price teaser | C1 `pricingCopy.startingPrice` identifies Token Plan scope; `aiPlanPrice`, `aiPlan.tagline`, `pricingCopy.fairUse` shown together |
| No family strip | All C1 text/image families rendered as text chips (no third-party logos) |
| No concrete gateway points | OpenAI-compatible, automatic failover, `orvix/auto`, descriptions directly from `gatewayFeatures`; no additional guarantee |

### New home sections (before = absent)

| Before | After / source |
|---|---|
| No coding section | “AI untuk alur kerja coding Anda”; C1 `codingIntro`, `codingPlugins`, `codingPlan`, `formatTokens`, `pricingCopy.codingPlanPrice`, `codingSetup`; link `/coding` and official setup URL |
| No API Store section | “Data lokal. Ide aplikasi Anda.”; C1 description derives six APIs, current free label, complete catalog names/descriptions; `/api-store` |
| No domain section | “Nama untuk ide Anda. Saldo yang sama.”; C1 domain description/TLD list/registrar-price note; `/domain`; no price |
| No Orvix One teaser | C1 label/name/description only: “Segera hadir: Orvix One. Asisten AI untuk semua orang, di HP dan desktop.”; “Kabari saya” uses C1 WhatsApp message; no date/features/price |
| No standalone roadmap section | All nine C1 `segera` products, each labelled Segera hadir; explanatory unavailability copy from C1 |

### EnterpriseSection

| Before | After |
|---|---|
| “Untuk workload yang butuh penanganan langsung.” | “Butuh penanganan langsung?” |
| Large service-card list with service summaries, icons and “Detail” CTAs | Removed from home; short scope note and one `/layanan` door. Enterprise list remains in C1 for enterprise pages |
| “Hubungi tim kami” → `/contact` | “Lihat layanan enterprise” → `/layanan` |
| C1 enterprise intro and WhatsApp discussion CTA | Retained; C1 `enterpriseScopeNote` explicitly distinguishes agreed projects from self-serve platform features |

### WhyOrvixSection (inactive on home, fully audited)

| Before | After |
|---|---|
| “Why Orvix”; “Infrastruktur yang bekerja untuk bisnis, bukan sebaliknya.” | “Pendekatan enterprise”; “Ruang lingkup yang jelas, keputusan yang bisa ditelusuri.” |
| “Pendekatan hands-on ... deployment yang rapi, operasional yang terlihat, dan fondasi yang siap berkembang” | C1 enterprise scope note |
| Fake decorative utilization bars (CSS shapes) | Removed from component |
| Network/topology illustration implying deployed estate | Removed |
| “SME”, “SaaS”, “ERP” green operational-status illustrations | Removed; industry names retained only from C1 industries as audience chips |
| “AWS”, “VPS”, “Docker”, “Proxmox” hard-coded platform/provider visual | Removed |
| “Monitoring aktif” | Removed; generic “Dibahas sesuai proyek” |
| “Backup terverifikasi” | Removed; generic “Dibahas sesuai proyek” |
| Decorative `01`–`05` feature numbering | Removed |
| “Dibangun untuk workload yang benar-benar dipakai.” | “Butuh diskusi lebih lanjut?” and C1 scope note |
| “Kenali pendekatan Orvix.id” → `/about` | “Kenali pendekatan Orvix” → `/tentang` |
| C1 whyOrvix, infrastructureMetrics, industries content | Retained within scoped enterprise context; no numeric metrics added |

### WorkflowSection (inactive on home, fully audited)

| Before | After |
|---|---|
| “Operational Lifecycle”; “Dari assessment sampai terkelola.” | “Alur kerja enterprise”; “Dari assessment sampai serah terima.” |
| “Alur implementasi dibuat jelas agar setiap keputusan arsitektur, deployment, dan maintenance dapat ditelusuri.” | “Setiap tahap disepakati sesuai kebutuhan proyek, dengan catatan keputusan yang mudah ditinjau.” |
| `$ orvix assess business-production` | Removed fake command |
| “Architecture and access validated”, `ready` | Removed fake verification |
| “Deploying monitoring and backup”, `100%` | Removed fake completion |
| “Workload healthy at app.orvix.id” | Removed fake health/domain |
| Terminal title “deployment - zsh”, cursor and lines | Removed simulated terminal |
| “Managed operations”; “Satu pandangan untuk workload penting.” | Removed |
| “Deployment, monitoring, backup, security, dan kapasitas dikelola sebagai satu alur, bukan pekerjaan terpisah yang sulit dilacak.” | Removed blanket operational promise; C1 lifecycle topic cards with “Scope disepakati” |
| Numbered workflow bubbles | Removed numbering; retained C1 workflow titles/descriptions under explicit project-scoped intro |

### InfrastructureStackSection (inactive on home, fully audited)

| Before | After |
|---|---|
| “Operational Stack”; “Tools modern, alur tetap sederhana.” | “Ruang lingkup operasional”; “Fondasi operasional dibahas secara praktis.” |
| “Orvix.id menghubungkan deployment, observability, security, dan recovery agar operasional tidak tersebar di banyak proses manual.” | C1 enterprise scope note |
| “Git-based Deployment”; “Release aplikasi dari repository dengan proses build dan rollback yang lebih konsisten.” | Removed blanket feature/outcome claim; scope-discussion cards from C1 infrastructureMetrics |
| `orvix/business-app`, `Connected`, `main`, `deployment ready`, `a82c1f`, `12s ago` | All removed |
| “Monitoring & Logs”; “Uptime, resource, latency, dan log penting dibuat lebih mudah dibaca oleh tim.” | Removed blanket feature/outcome claim; C1 monitoring discussion text |
| `12:04 GET /health 200` | Removed |
| `12:05 GET /api/orders 200` | Removed |
| `12:06 POST /api/sync 201` | Removed |
| “Environment Security”; “Secret, akses administratif, firewall, dan konfigurasi environment dikelola lebih disiplin.” | Removed blanket feature/outcome claim; C1 security-baseline discussion text |
| `Production`, `Encrypted`, masked `DATABASE_URL`, masked `API_SECRET` | All removed simulated credential/encryption assurances |
| “Backup & Recovery”; “Backup tidak berhenti di jadwal, tetapi dilengkapi retensi dan verifikasi restore.” | Removed guarantee; C1 backup-review/project discussion |
| `backup_0726`, `Verified` | Removed |
| `Retensi 30 hari`, `Restore terakhir 2 jam lalu` | Removed fake retention/history (unrelated to actual plan validity) |
| Green operational dots/checkmarks across panels | Removed along with panels |
| “Flexible technology foundation”, entire stackItems visual list | Removed; no supplier/stack list in this component |

### FAQ / CTA / navigation / footer

| Before | After |
|---|---|
| FAQ “Pertanyaan sebelum mulai.” | “Jawaban sebelum mulai.” |
| FAQ lead “Scope akhir mengikuti kondisi workload. Jika kebutuhan Anda belum tercakup, diskusikan langsung dengan tim Orvix.id.” | “Tentang token, paket AI, pembayaran, dan produk yang tersedia hari ini.” |
| FAQ answers | C1 current faqs retained verbatim: tokens, plan differences, fair use, expiry, QRIS, compatibility, location uncertainty, platform/enterprise, roadmap availability |
| CTA “Infrastruktur lebih rapi. Tim lebih fokus membangun bisnis.” | “Mulai membangun dengan Orvix. Mulai dari satu API key.” |
| CTA “Ke Platform Orvix” | “Daftar gratis” → C1 platform URL |
| CTA “Lihat Kontak” → `/contact` | “Hubungi tim” → `/kontak` |
| C1 final CTA paragraph | Retained; live AI/coding/API/domain and scoped enterprise |
| Navbar flat Beranda/Harga/Layanan/Tentang/Kontak; consultation buttons; “Masuk Platform” | Data-driven Produk dropdown, Harga/Layanan/Tentang/Kontak; “Masuk”; home remains logo link |
| Navbar legacy `/services`, `/about`, `/contact` | Canonical `/layanan`, `/tentang`, `/kontak` presentation adapter (C1 follow-up below) |
| Footer “Cloud platform untuk developer, dengan opsi enterprise untuk workload yang butuh penanganan langsung.” | “Cloud platform AI-first untuk developer Indonesia, dengan jalur enterprise untuk kebutuhan yang membutuhkan penanganan langsung.” |
| Footer plain live-product list + first four enterprise service links | Product and company links mirror navbar from C1 navigation |
| Footer phone/email/location/contact paragraph | Removed for compact navigation footer; contact page still linked |
| Footer hard-coded `© 2026 Orvix.id` | C1 footerCopy.copyright |
| Footer green status light + “Infrastruktur berjalan di region Jakarta” | Removed residency/operational implication; C1 “Saldo rupiah, top-up melalui QRIS” and neutral “Orvix Cloud Platform” |

## Verification

- Shared `node_modules` symlink to integration dependencies; not committed.
- `bun run lint`: PASS; zero errors, seven pre-existing `react-refresh/only-export-components` warnings in shadcn UI files.
- `bunx tsc --noEmit -p tsconfig.app.json`: PASS. Initial import error (`modelFamilies` imported from products) was corrected to pricing before final checks.
- `bun run test`: PASS, two files/seven tests. No implementation-mirroring test files added.
- `PRERENDER_CHROME_PATH=/private/var/folders/rq/ctsblr0x3wd0sltryrc3r7jr0000gn/T/opencode/compro-chrome PRERENDER_PORT=45682 bun run build:static`: PASS; 12 existing routes prerendered, zero failures. Build emits existing stale Browserslist notice. Final JS 452.57 kB / gzip 138.85 kB; CSS 79.48 kB / gzip 14.25 kB.
- `git diff --check`: PASS.
- Owned section source grep for old fake metrics, health/verification strings, `AWS`, hard-coded rupiah amounts, `30 hari`, `33 model`, `/bulan`: no matches. Numeric commercial content comes from data; layout dimensions remain ordinary numeric code.
- Browser capture: shared script, `COMPRO_ROUTES=/`, 1440px/375px: PASS, no document overflow, zero runtime errors. Audit reports decorative orb boxes beyond viewport but they are clipped by the hero, with no page overflow.
- Browser interactions: desktop Produk opens with correct menu items and Escape closes; mobile menu at 375px fits viewport; every FAQ trigger expands. PASS.
- New product and canonical company pages are not in C2 branch App routes; C3 owns these additions. Do not treat C2-only route 404s as final integrated behavior.

## Screenshots (outside repository)

Directory: `/private/var/folders/rq/ctsblr0x3wd0sltryrc3r7jr0000gn/T/opencode/compro-c2-screenshots/`

- `home-1440.jpg`: final full desktop page.
- `home-375.jpg`: final full mobile page.
- `mobile-menu.png`: expanded mobile navigation at 375px.
- `mobile-faq.png`: expanded FAQ interaction capture at 375px.
- `audit.json`: final shared capture overflow/runtime/link audit.
- `README.md`: generated screenshot index.

Reviewed full-page desktop/mobile images: readable stacking, live-vs-roadmap distinction, domain chips wrap, AI fair-use copy fits, no clipped textual columns. Navbar/footer are shared; orchestrator should capture all integrated routes after C3/C4 merge as handoff requests.

Capture command:

```sh
COMPRO_ROOT=/private/var/folders/rq/ctsblr0x3wd0sltryrc3r7jr0000gn/T/opencode/compro-c2 COMPRO_ROUTES=/ COMPRO_SCREENSHOTS=/private/var/folders/rq/ctsblr0x3wd0sltryrc3r7jr0000gn/T/opencode/compro-c2-screenshots node /private/var/folders/rq/ctsblr0x3wd0sltryrc3r7jr0000gn/T/opencode/compro-capture.mjs
```

## Exact outside-owned changes requested (not applied)

### C1: align shared hero CTA/description with C2 prompt

`src/data/siteContent.tsx`:

```diff
-  description: `Satu API key untuk ${formatNumber(modelCount)} model, dengan billing rupiah untuk developer Indonesia.`,
-  primaryCta: { label: "Buka platform", url: platformUrl },
+  description: `Satu API key untuk ${formatNumber(modelCount)} model dengan billing rupiah, dibuat di Indonesia.`,
+  primaryCta: { label: "Daftar gratis", url: platformUrl },
```

Until applied C2 uses existing C1 numerical description plus separate “Dibuat di Indonesia.” and requested signup label. After integrating data diff, optional C2 follow-up is remove the separate origin sentence and consume `heroContent.primaryCta.label` instead of the display override. The model count already updates automatically.

### C1: canonical company navigation

`src/data/siteContent.tsx`:

```diff
-  { label: "Layanan", path: "/services" },
-  { label: "Tentang", path: "/about" },
-  { label: "Kontak", path: "/contact" },
+  { label: "Layanan", path: "/layanan" },
+  { label: "Tentang", path: "/tentang" },
+  { label: "Kontak", path: "/kontak" },
```

C2 currently adapts these three paths in Navbar/Footer; adapter passes through already-canonical data, so it remains compatible with the correction. Labels/product lists are still from C1.

### C1: discovered curl example defect (not consumed by home)

`src/data/products.ts`, `gatewayExamples.curl`: literal plus signs are present at the start of continuation lines. Remove the three `+` characters from the template literal:

```diff
-  curl: `curl ${gatewayIntegration.baseUrl}/chat/completions \\\n+  -H "Authorization: Bearer ${gatewayIntegration.apiKeyPlaceholder}" \\\n+  -H "Content-Type: application/json" \\\n+  -d '{"model":"${gatewayIntegration.model}","messages":[{"role":"user","content":"Halo Orvix!"}]}'`,
+  curl: `curl ${gatewayIntegration.baseUrl}/chat/completions \\\n  -H "Authorization: Bearer ${gatewayIntegration.apiKeyPlaceholder}" \\\n  -H "Content-Type: application/json" \\\n  -d '{"model":"${gatewayIntegration.model}","messages":[{"role":"user","content":"Halo Orvix!"}]}'`,
```

Here `\n` is the literal escaped newline in the TypeScript source. The desired runtime command lines begin with two spaces then `-H`/`-d`, not `+`.

### C3: required route integration

No C2 App diff. Apply C3's planned routes `/harga`, `/ai-gateway`, `/coding`, `/api-store`, `/domain`, `/layanan`, `/tentang`, `/kontak`, retaining English aliases and `/services/:slug`. Home/nav/footer already link to canonical paths.

### C4: generated sitemap and pending metadata

Build generated only this uncommitted diff in `public/sitemap.xml`: replace all 12 `<lastmod>2026-08-09</lastmod>` entries with `<lastmod>2026-10-15</lastmod>`. URLs/priorities/frequencies unchanged. File left uncommitted per handoff.

C4 should apply its planned SEO/index/JSON-LD strategy corrections from C1 report. C2 screenshots still show baseline document title “Orvix.id - Cloud Platform untuk Developer”; no C2-owned metadata patch is required. Old static JSON-LD and SEO.md residency/live-infrastructure claims were read but not repeated in visible home.

## Unverified facts and founder copy questions

- No new operational facts were inferred from historical architecture notes. No current processing country/region, uptime, customer count, certifications, backup retention, or launch date asserted. FAQ defers processing-location requirements to the team.
- “Dibuat di Indonesia” is explicitly required by C2 prompt as origin/brand copy; it is not a verified data-residency guarantee. Confirm the preferred shared sentence with the C1 exact diff above.
- “Daftar gratis” is prompt-authorized signup-only copy; usage terms remain explicit. C1 currently calls the primary CTA “Buka platform”; correction above prevents future inconsistency.
- No coding install command is shown. C1 codingSetup links to production guidance, so exact installer syntax does not need to be inferred from a login/SPA response.
- All commercial values/catalog claims rely on allowed README §2 and C1 data; no extra supplier, pricing, or endpoint behavior inferred.
- Founder question: approve shared hero origin/CTA corrections above? No other new factual question blocks integration. Retain 30-day wording rather than the stale “/bulan” prompt example.

## Final state

Owned source is committed at `518ca9aceda6982754a8aeb14466cf519cedf9b0`. The only tracked uncommitted file is generated `public/sitemap.xml` owned by C4. Screenshots/report are outside repo. No push or PR created.
