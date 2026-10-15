# C4 — SEO, structured data, OG and static-route report

Date: 2026-10-15. Branch: `compro/c4-seo`. Worktree: `.../opencode/compro-c4`.
Commit: `cf6167afb109e053c4c7047e3117ad484c866f98`.

## Delivered

- Central route metadata in `scripts/seo-metadata.mjs`, consumed by SEOHead, raw-HTML validator and enterprise OG artwork generation. Titles 31–47 characters; descriptions 132–155 characters.
- 17 canonical sitemap URLs; 21 prerender paths: canonical routes, three English aliases, and `/404`. Both `dist/404/index.html` and `dist/404.html` are produced with noindex.
- `/services` canonicalizes to `/layanan`; `/about` to `/tentang`; `/contact` to `/kontak`. Each retains its own static HTML. Alias OG URLs and breadcrumbs use canonical counterparts. Enterprise detail URLs remain canonical.
- Removed stale shell JSON-LD and replaced it with one Helmet-owned graph per route. Organization and WebSite defined once per indexable page, WebPage per route, breadcrumbs for non-home indexable pages, Product/Offer on Harga, FAQPage on home/Harga.
- Seven Products and ten IDR Offers derive from pricing data: seven Token Plan variants, AI Plan, Coding Plan, Image Credits. Quotas, validity/no-expiry, current price date, and all AI fair-use terms are included. No domain or roadmap pricing.
- Rebuilt all 17 route OG WebPs and default JPEG in existing dark/grid/cyan-purple/brand-bars/Plus Jakarta Sans style. No invented metrics in artwork. New product banners plus home/company/enterprise artwork are reproducible with `node scripts/generate-og.mjs`.
- Native macOS browser detection and platform-specific flags in `scripts/browser.mjs`. Builds passed with native Brave auto-detection and `PRERENDER_PORT=45684`, without the external Linux-flag-stripping wrapper.
- Build validates serialized HTML before writing a source fingerprint manifest. Normal `bun run test` includes SEO tests through `src/test/seo.test.ts`; no package.json or Vitest wiring change is required. Missing/stale dist explicitly fails with a build prerequisite message.
- Home Radix FAQ answers were absent from raw HTML while closed. Prerender now opens each actual FAQ, collects its rendered markup, closes it, and preserves the answer in the hidden panel. Validator checks all answers against JSON-LD; no FAQ UI source was edited.
- Replaced SEO.md with current positioning, keywords, page map, limitations, schema/build workflow, and last-updated date.

## Route → title → description → OG

OG paths below are relative to `https://orvix.id`. All full canonical URLs use that origin. Alias rows deliberately repeat counterpart metadata.

| Route | Title | Description | OG |
| --- | --- | --- | --- |
| `/` | Orvix Cloud Platform — AI API Indonesia | Orvix Cloud Platform untuk developer Indonesia: AI Gateway, paket AI dan coding, API data Indonesia, serta domain dengan billing rupiah. | `/og.jpg` |
| `/harga` | Harga API AI Rupiah & Paket Coding \| Orvix | Bandingkan Token Plan, AI Plan dengan fair use, Coding Plan, dan Image Credits. Harga rupiah, pilihan kuota dan masa berlaku, pembayaran QRIS. | `/og/banner_harga.webp` |
| `/ai-gateway` | AI API Indonesia — OpenAI-compatible \| Orvix | Integrasikan AI Gateway dengan API kompatibel OpenAI. Satu API key, pilihan model, failover otomatis, BYOK, dan billing rupiah untuk developer. | `/og/banner_ai-gateway.webp` |
| `/coding` | Coding Plan untuk Developer Indonesia \| Orvix | Paket token coding untuk OpenCode, Pi, dan omp melalui plugin serta endpoint khusus. Lihat kuota, masa berlaku, dan panduan setup di platform. | `/og/banner_coding.webp` |
| `/api-store` | API Data Wilayah Indonesia & API Store \| Orvix | Akses API data Indonesia: wilayah, sekolah, hari libur, BMKG, KBLI, dan NIK Parser. Gratis saat ini, dengan contoh integrasi dan dokumentasi. | `/og/banner_api-store.webp` |
| `/domain` | Daftar Domain .id & Domain Indonesia \| Orvix | Daftarkan domain .id dan ekstensi lainnya dengan saldo Orvix. Kelola dalam akun yang sama; cek ketersediaan serta harga terbaru di platform. | `/og/banner_domain.webp` |
| `/layanan` | Jasa Kelola Cloud & Server Indonesia \| Orvix | Diskusikan managed cloud, migrasi server, DevOps, backup, dan private cloud untuk bisnis. Ruang lingkup layanan enterprise disepakati per proyek. | `/og/banner_services.webp` |
| `/tentang` | Tentang Orvix Cloud Platform Indonesia | Kenali Orvix Cloud Platform: AI-first untuk developer Indonesia, billing rupiah, produk yang tersedia, visi cloud, dan jalur layanan enterprise. | `/og/banner_about.webp` |
| `/kontak` | Kontak Orvix — Platform & Konsultasi Enterprise | Hubungi Orvix untuk pertanyaan produk, billing rupiah, atau kebutuhan enterprise. Diskusikan aplikasi dan ruang lingkup proyek melalui WhatsApp atau email. | `/og/banner_contact.webp` |
| `/services/managed-cloud` | Jasa Kelola Server & Managed Cloud \| Orvix | Diskusikan pengelolaan server dan cloud perusahaan, dari konfigurasi hingga operasional. Ruang lingkup dan dukungan disepakati sesuai kebutuhan proyek. | `/og/banner_service-managed-cloud.webp` |
| `/services/cloud-migration` | Jasa Migrasi Server ke Cloud \| Orvix | Rencanakan migrasi server ke cloud dengan assessment, pemindahan workload, dan validasi. Tahapan serta target migrasi dibahas sesuai kebutuhan bisnis. | `/og/banner_service-cloud-migration.webp` |
| `/services/managed-hosting` | Managed Hosting untuk Website Bisnis \| Orvix | Diskusikan hosting terkelola untuk website bisnis, panel, email, DNS, dan SSL. Konfigurasi serta dukungan mengikuti ruang lingkup proyek yang disepakati. | `/og/banner_service-managed-hosting.webp` |
| `/services/devops-cicd` | Jasa Setup DevOps & CI/CD Perusahaan \| Orvix | Diskusikan pipeline CI/CD, container, dan alur deployment aplikasi perusahaan. Implementasi serta dokumentasi mengikuti kebutuhan dan lingkup proyek. | `/og/banner_service-devops-cicd.webp` |
| `/services/backup-disaster-recovery` | Backup & Disaster Recovery Bisnis \| Orvix | Rencanakan backup dan disaster recovery untuk data bisnis. Diskusikan retensi, prosedur restore, dan target pemulihan sesuai kebutuhan proyek. | `/og/banner_service-backup-disaster-recovery.webp` |
| `/services/monitoring-security` | Jasa Monitoring & Security Server \| Orvix | Diskusikan monitoring, alert, akses administratif, dan baseline keamanan server. Cakupan pemantauan serta dukungan disepakati sesuai kebutuhan bisnis. | `/og/banner_service-monitoring-security.webp` |
| `/services/private-hybrid-cloud` | Private & Hybrid Cloud Indonesia \| Orvix | Diskusikan arsitektur private dan hybrid cloud untuk server internal serta workload bisnis. Desain dan implementasi mengikuti ruang lingkup proyek. | `/og/banner_service-private-hybrid-cloud.webp` |
| `/services/ai-saas-infrastructure` | Infrastruktur Aplikasi AI & SaaS \| Orvix | Diskusikan fondasi infrastruktur untuk aplikasi AI dan SaaS, dari deployment hingga operasional. Arsitektur dan dukungan mengikuti kebutuhan proyek. | `/og/banner_service-ai-saas-infrastructure.webp` |
| `/services` → `/layanan` | Jasa Kelola Cloud & Server Indonesia \| Orvix | Diskusikan managed cloud, migrasi server, DevOps, backup, dan private cloud untuk bisnis. Ruang lingkup layanan enterprise disepakati per proyek. | `/og/banner_services.webp` |
| `/about` → `/tentang` | Tentang Orvix Cloud Platform Indonesia | Kenali Orvix Cloud Platform: AI-first untuk developer Indonesia, billing rupiah, produk yang tersedia, visi cloud, dan jalur layanan enterprise. | `/og/banner_about.webp` |
| `/contact` → `/kontak` | Kontak Orvix — Platform & Konsultasi Enterprise | Hubungi Orvix untuk pertanyaan produk, billing rupiah, atau kebutuhan enterprise. Diskusikan aplikasi dan ruang lingkup proyek melalui WhatsApp atau email. | `/og/banner_contact.webp` |
| `/404` | Halaman Tidak Ditemukan \| Orvix | Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Orvix Cloud Platform untuk melihat produk, harga, dan layanan enterprise. | `/og.jpg` |

## Complete changed-claim audit

### Runtime metadata before → after

For each row, **after** is the exact title/description in the route table above; that table also supplies new OG and Twitter text. Descriptions apply to description, OG description, Twitter description, and WebPage schema. Before titles had ` - Orvix.id` appended except home. These changes do not change visible page copy.

| Route | Before title | Before description | After / change in claim |
| --- | --- | --- | --- |
| `/` | Orvix.id - Cloud Platform untuk Developer | Orvix Cloud Platform untuk developer Indonesia: AI Gateway, paket AI dan coding, API data Indonesia, serta domain dengan billing rupiah. | New AI API Indonesia title; existing corrected runtime description retained. |
| `/harga` | Harga dalam rupiah - Orvix.id | Pilih paket sesuai cara Anda memakai AI: kuota token, pemakaian rutin dengan fair use, coding agent, atau pembuatan gambar. | Route-table metadata explicitly names paid categories, QRIS, quota and validity. |
| `/ai-gateway` | Orvix AI Gateway - Orvix.id | Akses 33 model melalui satu API key dengan API kompatibel OpenAI. Coba model, integrasikan ke aplikasi, dan lihat pemakaian berdasarkan proyek. | Route-table metadata emphasizes compatibility, failover, BYOK and rupiah; drops mutable count from SEO. |
| `/coding` | Coding Plan untuk coding agent - Orvix.id | Coding agent adalah asisten AI yang membantu Anda mengerjakan kode melalui alat pengembangan. Coding Plan digunakan lewat plugin pada endpoint coding khusus. | Route-table metadata names allowed plugins and points to quota/validity/setup; no install commands invented. |
| `/api-store` | API Store: data Indonesia untuk aplikasi - Orvix.id | 6 API data Indonesia, gratis saat ini. | Route-table metadata names allowed catalog topics; current free qualification preserved; count omitted. |
| `/domain` | Domain dalam akun Orvix Anda - Orvix.id | Daftarkan domain menggunakan saldo Orvix dan kelola melalui akun yang sama. | Route-table metadata adds .id intent and current-platform availability/pricing direction; no prices printed. |
| `/layanan`, `/services` | Enterprise Solutions - Orvix.id | Layanan enterprise Orvix.id: managed cloud, cloud migration, managed hosting, DevOps, backup, monitoring, security, private cloud, dan AI infrastructure untuk workload yang butuh penanganan langsung. | Route-table scoped enterprise discussion, within length limit; canonical `/layanan`. |
| `/tentang`, `/about` | Tentang Orvix Cloud Platform - Orvix.id | Cloud platform untuk developer Indonesia. Kami membangun tempat untuk menggunakan layanan pengembangan aplikasi dalam satu akun, dengan billing rupiah. | Route-table live AI-first versus vision distinction; canonical `/tentang`. |
| `/kontak`, `/contact` | Hubungi Orvix - Orvix.id | Mau mulai dari platform atau butuh setup enterprise? Ceritakan aplikasi, workload, dan kendala yang sedang Anda hadapi. | Route-table product/billing/project inquiry and actual contact channels; canonical `/kontak`. |
| `/services/managed-cloud` | Managed Cloud - Orvix.id | Kelola server, akses, patching, monitoring, dan operasional rutin untuk workload bisnis. | Route-table scope-qualified discussion. |
| `/services/cloud-migration` | Cloud Migration - Orvix.id | Rencanakan migrasi website, aplikasi, database, dan file sesuai kebutuhan kapasitas bisnis. | Route-table assessment, validation and project-specific targets; no downtime guarantee. |
| `/services/managed-hosting` | Managed Hosting - Orvix.id | Hosting terkelola untuk website bisnis, panel, email, DNS, SSL, dan deployment ringan. | Route-table hosting scope and support agreed per project. |
| `/services/devops-cicd` | DevOps & CI/CD - Orvix.id | Setup pipeline deployment, staging, container workflow, dan release process yang lebih konsisten. | Route-table discussion/implementation/documentation; drops outcome guarantee. |
| `/services/backup-disaster-recovery` | Backup & Disaster Recovery - Orvix.id | Strategi backup server, database, file, dan object storage untuk mengurangi risiko kehilangan data. | Route-table retention/restore/recovery planning; no promised reduction or restore guarantee. |
| `/services/monitoring-security` | Monitoring & Security - Orvix.id | Monitoring uptime, resource, logs, alerting, hardening, firewall, dan access review. | Route-table agreed monitoring and baseline security scope. |
| `/services/private-hybrid-cloud` | Private / Hybrid Cloud - Orvix.id | Setup virtualisasi, private cloud, dan integrasi cloud-to-on-prem untuk kebutuhan internal. | Route-table project-scoped architecture; Indonesia is audience, not residency. |
| `/services/ai-saas-infrastructure` | AI & SaaS Infrastructure - Orvix.id | Deploy dan pengelolaan infrastruktur untuk aplikasi AI, SaaS, ERP, dan sistem bisnis yang memerlukan compute, database, storage, dan observability yang tepat. | Route-table scoped foundation/deployment/operations; avoids implying roadmap self-serve products. |
| `/404` | Halaman tidak ditemukan - Orvix.id | Home description inherited | Explicit missing-page description, noindex, stable `/404` canonical. |

Old global keyword appending mixed cloud/AI/database intent into every enterprise page. After: only focused route keyword from metadata. Old enterprise `service.tech` lists are no longer copied into meta keywords. Exact final keyword inventory is in `scripts/seo-metadata.mjs` and SEO.md.

### Shell and schema before → after

| Before | After |
| --- | --- |
| Shell title/OG/Twitter title and image-alt: “Orvix.id - Cloud Platform untuk Developer” | “Orvix Cloud Platform — AI API Indonesia” everywhere. |
| Shell description: “Orvix Cloud Platform menyediakan managed database, AI gateway, storage, dan deployment lewat satu dashboard. Infrastruktur di Indonesia, tanpa perlu mengurus server.” | Exact corrected home description in route table; no live database/storage/deploy or residency promise. |
| Shell OG description: “Managed database, AI gateway, storage, dan deployment dalam satu dashboard. Plus layanan enterprise untuk workload yang butuh penanganan langsung.” | Corrected home description. |
| Shell Twitter description: “Managed database, AI gateway, storage, dan deployment dalam satu dashboard. Infrastruktur di Indonesia.” | Corrected home description. |
| Shell keywords included managed database Indonesia, managed MySQL, PaaS, deploy, object storage, and mixed enterprise terms | `cloud platform indonesia`; route-specific keywords replace it after render. |
| Organization description: “Cloud platform untuk developer, dengan layanan enterprise untuk workload yang butuh penanganan langsung.” | Corrected home description with actual live product categories and rupiah billing. |
| Organization PostalAddress Jakarta/ID | Removed: no verified public office address or processing-region evidence. |
| Organization contactPoint asserted sales and Indonesian/English availability | Removed unsupported contact-language/role assertions; existing shared telephone and email remain. |
| SoftwareApplication description: “Managed database, AI gateway, storage, dan deployment dalam satu dashboard.”, DeveloperApplication/Web node | Removed stale SoftwareApplication node; current graph describes the page/organization and actual pricing Products. |
| Permanent enterprise Service and eight OfferCatalog offers on every page; URL `/services`; areaServed Indonesia | Removed global catalog graph; enterprise intent stays in page metadata/breadcrumbs with canonical `/layanan`, not a universal offer claim. |
| No Product/Offer structured data | Seven Products/ten Offers from pricing data; see precise values below. |
| No FAQ schema | Exact home and Harga visible/shared FAQ answers, including fair use, billing, location uncertainty, and roadmap unavailability. No paraphrased schema-only claims. |
| WebPage referenced permanent shell WebSite | One graph defines references once on each indexable page; no duplicate Organization/WebSite IDs. |
| Unknown/new routes inherited default OG; `/layanan` inherited `/services` canonical | Specific product artwork and canonical aliases; noindex static 404. |

New offer facts (before = no pricing schema; values derived, never duplicated as production literals): Ember 15,000 IDR / 5m / 7 days; Flame 40,000 / 17m / 14 days or 12m / no expiry; Blaze 80,000 / 35m / 30 days or 22m / no expiry; Inferno 150,000 / 65m / 30 days or 40m / no expiry; AI Plan 100,000 / 30 days with 20 requests/minute, 5 concurrent, up to 20m tokens/day and cache 10%, lineup can change; Coding Plan 150,000 / 60m / 30 days; Image Credits 10,000 / 100 credits / 365 days. InStock denotes founder-confirmed live plans; each offer links to its data-specified platform destination. No calendar-month subscription, perpetual unlimited AI, future discount, date deadline, or domain price asserted.

### Every changed OG claim before → after

All revised banners preserve logo/brand. Full new enterprise subtitles are exactly the route-table descriptions. Every old enterprise badge becomes “LAYANAN ENTERPRISE · SESUAI SCOPE”; URL is unchanged for detail pages.

| Artwork | Before | After |
| --- | --- | --- |
| Default JPEG + home WebP | Badge ORVIX CLOUD PLATFORM; “Bangun dan deploy, tanpa ngurus server”; “Managed database, AI gateway, storage, dan deployment dalam satu dashboard.” | Badge “ORVIX CLOUD PLATFORM · AI-FIRST”; “Akses AI, bangun aplikasi Anda.”; “AI Gateway, paket AI dan coding, API data Indonesia, serta domain dengan billing rupiah.” |
| Harga (new) | Absent | “HARGA DALAM RUPIAH”; “Pilih paket AI sesuai kebutuhan Anda.”; “Token Plan, AI Plan dengan fair use, Coding Plan, dan Image Credits.”; `/harga`. |
| AI Gateway (new) | Absent | “AI GATEWAY · INDONESIA”; “Satu API key. Pilihan model AI Anda.”; “API kompatibel OpenAI, failover otomatis, BYOK, dan billing rupiah.”; `/ai-gateway`. |
| Coding (new) | Absent | “CODING PLAN · INDONESIA”; “AI untuk alur kerja coding Anda.”; “Plugin untuk OpenCode, Pi, dan omp. Paket token dengan endpoint coding khusus.”; `/coding`. |
| API Store (new) | Absent | “API STORE · INDONESIA”; “Data lokal. Ide aplikasi Anda.”; “Wilayah, sekolah, hari libur, BMKG, KBLI, dan NIK Parser. Gratis saat ini.”; `/api-store`. |
| Domain (new) | Absent | “DOMAIN · INDONESIA”; “Nama untuk ide Anda. Saldo yang sama.”; “Daftar domain .id dan ekstensi lainnya. Cek ketersediaan dan harga terbaru di platform.”; `/domain`. |
| About | “Infrastruktur yang sederhana dipakai, solid dijalankan”; “Tim di balik Orvix Cloud Platform dan layanan enterprise-nya.”; `/about` | “Cloud platform untuk developer Indonesia.”; “AI-first, billing rupiah, dan visi developer cloud. Kenali produk serta jalur enterprise Orvix.”; `/tentang`. |
| Contact | “Diskusikan kebutuhan infrastruktur Anda”; “Ceritakan aplikasi, workload, dan kendala yang sedang berjalan.”; badge KONTAK; `/contact` | “Mari bicarakan kebutuhan Anda.”; “Pertanyaan produk, billing, atau proyek enterprise. Hubungi tim melalui WhatsApp atau email.”; badge KONTAK ORVIX; `/kontak`. |
| Services | “Untuk workload yang butuh penanganan langsung”; “Server internal, arsitektur hybrid, migrasi bertahap, dan setup di luar platform standar.”; `/services` | “Untuk workload dengan penanganan langsung.”; “Kelola cloud, migrasi, dan infrastruktur bisnis. Ruang lingkup disepakati per proyek.”; `/layanan`. |
| Managed cloud | “Server dan cloud yang dikelola rapi”; “Provisioning, hardening, patching, monitoring, dan operasional rutin workload bisnis.” | “Kelola server sesuai kebutuhan bisnis.”; scoped route description. |
| Migration | “Migrasi tanpa drama downtime”; “Website, aplikasi, database, dan file dipindahkan bertahap dengan cutover terencana.” | “Rencanakan migrasi server bisnis Anda.”; scoped route description, no downtime implication. |
| Managed hosting | “Hosting bisnis yang benar-benar terurus”; “Domain, DNS, SSL, mail routing, backup, dan deployment website perusahaan.” | “Hosting terkelola untuk website bisnis.”; scoped route description. |
| DevOps | “Release yang konsisten, bukan manual”; “Pipeline deployment, staging, container workflow, dan proses rilis yang tertata.” | “Diskusikan alur deployment aplikasi.”; scoped route description. |
| Backup | “Backup yang benar-benar bisa direstore”; “Retensi lokal dan offsite, verifikasi restore berkala, serta dasar disaster recovery plan.” | “Rencanakan backup dan pemulihan data.”; scoped route description; no guaranteed restore. |
| Monitoring/security | “Masalah terlihat lebih cepat, eksposur terkontrol”; “Uptime dan resource monitoring, alerting, log collection, hardening, dan access review.” | “Diskusikan monitoring dan keamanan server.”; scoped route description; no comparative detection/security outcome. |
| Private/hybrid | “Kontrol penuh atas data dan resource lokal”; “Virtualisasi, private cloud berbasis Proxmox, dan integrasi ke server on-premise.” | “Arsitektur cloud untuk kebutuhan bisnis.”; scoped route description; no full-control/residency promise. |
| AI/SaaS | “Fondasi teknis untuk aplikasi AI dan SaaS”; “Compute, database, storage, queue, dan observability yang disiapkan sesuai beban kerja.” | “Fondasi infrastruktur aplikasi AI dan SaaS.”; scoped route description distinguishing custom enterprise project from roadmap platform products. |

### SEO.md and implementation assertions before → after

| Before | After |
| --- | --- |
| Last updated 2026-08-10 | 2026-10-15. |
| Platform modeled as live self-serve managed DB/AI/storage/deployment, automatic provisioning | AI-first live products under developer-cloud umbrella; roadmap explicitly unavailable, including OMD. |
| Primary differentiator “infrastruktur berjalan di Indonesia (region Jakarta)” and “data dan workload di Indonesia” | Indonesia audience/local APIs/rupiah billing; residency and office location unverified. |
| Primary managed database/MySQL/residency/PaaS targets and long-tail Jakarta latency | Live AI API/compatibility/rupiah pricing/coding/API wilayah/domain targets; no search-volume or ranking claim. |
| Database hosting, serverless deploy, VPS alternatives and DBaaS secondary targets | Removed until relevant products and evidence exist. |
| Enterprise long-tail “migrasi ... tanpa downtime”, “data tidak keluar” | Planning/checklist/project-scoped terms without zero-downtime or residency promises. |
| Page map only home, English indexes, eight enterprise detail pages | Exact full current canonical map, aliases, 404 and OG filenames. |
| “Platform nol halaman”, products only home sections | Five dedicated pricing/product pages now present and prerendered. |
| Messaging “build dan deploy tanpa mengurus server”, “PaaS sekarang, IaaS menyusul” | Live AI first, cloud vision distinct from availability; no roadmap timing promise. |
| One dashboard/billing/account for all future services | Current live-account/rupiah facts only; roadmap not presented as available. |
| 12 OG banners and default home; Organization+WebSite+SoftwareApplication+Service graph | 17 WebPs + default JPEG; current Organization/WebSite/WebPage/Breadcrumb/Product/Offer/FAQ graph as described. |
| Static shell JSON-LD was exempt from Helmet replacement | No shell graph; all route graphs owned by Helmet. |
| “Putuskan prerender”; scrapers only get shell; “Google tidak terpengaruh” | All routes are prerendered; raw HTML validated; indexing no longer depends on JS rendering schedule. |
| Suggested `/platform` and future product pages | Current product paths documented; roadmap pages prohibited until available. |
| Search Console/Business Profile/llms.txt/blog and deleting template assets suggested | Evidence-based Search Console/deployment follow-up and relevant content ideas; no asset deletion or business-category claim performed. |
| Content ideas managed DB/VPS switching and Singapore-vs-Jakarta latency | Live integration/package/API examples and enterprise migration/restore planning. |
| “Enterprise membiayai platform”, likely first paid SEO revenue, easier competition | Removed as unverified financial/search-performance claim; recommend measurement first. |
| “Data di Indonesia, latensi Jakarta, dukungan bahasa Indonesia” as defendable edge | No processing/latency/language-support guarantee inferred from historical vision. |
| Prerender only checks canonical URL suffix in browser DOM | Exact canonical plus raw serialized uniqueness, OG/Twitter, schema, FAQ content, App route inventory, sitemap and freshness checks. |
| Linux chromium.args used for every browser, including native Brave | Native executable uses native defaults; bundled Sparticuz only Linux fallback; launch-failure server cleanup. |
| Sitemap had 12 entries dated 2026-08-09, English aliases included | 17 canonical entries dated 2026-10-15; new product/company routes included, aliases and 404 excluded. Company priorities now 0.9; home 1.0, details 0.8; weekly for home/Harga/Gateway/Coding/API Store, monthly others. |

## Verification

| Check | Result |
| --- | --- |
| `node scripts/generate-og.mjs` | PASS: 17 WebPs + home JPEG, 1200×630, local font and native Brave. All 17 designs and default visually reviewed; text readable, no clipping, current scoped claims. |
| `PRERENDER_PORT=45684 bun run build:static` | PASS: 21 routes, zero failures, all raw HTML/schema/sitemap validation passed. Native Brave automatically detected. |
| `bun run test` | PASS: 3 files, 14 tests (6 SEO tests, 7 C1 data tests, 1 scaffold test). |
| `bunx tsc --noEmit -p tsconfig.app.json` | PASS. |
| `bunx eslint src/components/SEOHead.tsx src/test/seo.test.ts` | PASS, no warnings/errors in owned TS files. |
| `bun run lint` | FAIL solely due to two inherited C1 `no-regex-spaces` errors at siteContent.test.ts:87 and :90; seven existing shadcn Fast Refresh warnings. Exact fix below. |
| `git diff --check` | PASS. |
| 404 capture at 1440px and 375px | PASS: zero document overflow, zero page runtime errors; both reviewed. Mobile missing-page sentence sits close to viewport edges but fits; no source change required. |

Intermediate test attempt used a node environment override and failed because shared setup assumes window; removed override, final normal test run passes under existing jsdom config. Build emits pre-existing outdated Browserslist notice. Final JS 477.76 kB / gzip 144.98 kB; CSS 81.32 kB / gzip 14.53 kB.

Tests assert raw tags are unique before checking values, parse JSON graphs, compare every offer to current pricing data, compare FAQ entities to the shared arrays and raw body answers, and deliberately reject duplicate OG fallback tags / corrupted currency. Fingerprint catches source/data/assets/config changes after build; no silent skip on missing dist. App routes and service data slugs are checked against prerender inventory. Rebuild after applying any integrator patch before running tests.

Screenshots: `.../opencode/compro-c4-screenshots/404-1440.jpg`, `404-375.jpg`, `audit.json`, `README.md`. Integrator performs full-page integrated screenshots and final mobile interactions as agreed. OG assets themselves are committed visual artifacts. Dist is ignored build output, regenerated from committed sources; public sitemap and OG assets are committed.

## Outside-owned diffs (not applied)

No package.json or vitest.config.ts diff is needed. Allowed required SEO test lives in existing `src/test/` include. No page, App, data, README, dependency or lockfile edits were made.

Apply this exact C1 test lint fix on integration (same regex meaning):

```diff
--- a/src/data/siteContent.test.ts
+++ b/src/data/siteContent.test.ts
@@
-    expect(lines[1]).toMatch(/^  -H "Authorization: Bearer /);
+    expect(lines[1]).toMatch(/^ {2}-H "Authorization: Bearer /);
@@
-    expect(lines[3]).toMatch(/^  -d '\{"model":"orvix\/auto"/);
+    expect(lines[3]).toMatch(/^ {2}-d '\{"model":"orvix\/auto"/);
```

No other outside-owned source change is required for C4. Keep deployment validation of unknown URL status separate from availability of the new static 404 artifact: existing Vercel SPA rewrite still controls HTTP status.

## Unverified facts and founder questions

- No new production fact was inferred from the historical branding/architecture note. No Secrets directory was accessed. Supplied README §2 and integrated data remain the pricing/model/catalog source; public verification already documented by C1/C3 supports integration descriptions.
- No uptime, customer count, testimonial, certification, ROI, data-processing region, public office address, model supplier, cost, or margin added. Keyword strategy is editorial, not search-volume/ranking evidence.
- Does the founder have a verified public business address to publish? Until confirmed, Organization has no address.
- Can service-specific processing regions be documented publicly before any residency claim is restored? Current metadata does not make one.
- Confirm deployment unknown-path HTTP 404 behavior and Search Console ownership at integration/deployment time; local static artifact existence does not prove hosting status.
- Authenticated coding installation flow and current registrar prices remain unverified; company metadata points to platform guidance/pricing. No invented commands or domain prices.
- Actual rich-result eligibility, social platform cache refresh, indexing and rankings require deployed/public review and are not claimed here.

No push, PR, or additional agent was created. Shared node_modules symlink is ignored and not committed.
