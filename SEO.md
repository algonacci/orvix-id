# SEO Strategy — Orvix.id

Terakhir diperbarui: **2026-10-15**

## Positioning dan batas fakta

**Orvix Cloud Platform** adalah umbrella developer cloud. Produk live memimpin dengan **AI-first**: AI Gateway, Token Plan, AI Plan, Coding Plan, Image Credits, API Store, dan Domain. Enterprise adalah pintu kedua untuk pekerjaan dengan ruang lingkup yang disepakati.

| Track | Intent | Halaman |
| --- | --- | --- |
| Developer | Istilah teknis, integrasi API, paket dan billing rupiah | Beranda, Harga, AI Gateway, Coding, API Store, Domain |
| Pemilik bisnis / IT manager | Masalah operasional, migrasi, pengelolaan server | Layanan dan delapan detail enterprise |

Jangan campur kedua intent dalam satu halaman produk. **Indonesia** adalah konteks audiens, data API lokal, dan billing rupiah melalui QRIS; bukan jaminan lokasi pemrosesan. Lokasi workload/data dan alamat kantor Jakarta belum terverifikasi. Jangan menargetkan residency atau latensi Jakarta sebagai keunggulan yang sudah terbukti.

Managed Database (OMD), Deploy, Object Storage, Managed Redis, Container Engine, Functions, Queue, Auth, dan Observability masih **Segera**, bukan produk live. Orvix One sudah live; AI Plan berlaku pada model dalam lineup. Jangan membuat landing page yang menjanjikan penggunaan produk roadmap. Landing AI Plan hanya mengklaim plugin resmi OpenCode; integrasi lain melalui API kompatibel OpenAI (Pi/omp: provider custom), tanpa jumlah model atau jaminan kuota cukup.

Sumber fakta komersial: `src/data/pricing.ts`, katalog `src/data/products.ts`, serta brief founder §2 (15 Oktober 2026). Fakta tambahan hanya dari dokumentasi/platform publik yang diverifikasi. Semua harga, kuota, masa berlaku, fair use, dan angka katalog harus diturunkan dari data bersama. Jangan menyebut sumber pasokan model. Harga domain tidak dicetak; pembaca memeriksa harga terbaru di platform.

## Keyword developer

Keyword berikut adalah pilihan editorial berdasarkan intent, **bukan klaim volume pencarian atau peringkat terukur**.

| Keyword | Prioritas dan penempatan | Alasan |
| --- | --- | --- |
| `cloud platform indonesia` | Primary beranda | Umbrella brand tetap cloud platform |
| `ai api indonesia` | Primary AI Gateway; secondary beranda | Produk live yang memimpin |
| `openai compatible api indonesia` | Primary/variasi AI Gateway | Istilah integrasi yang spesifik |
| `api gpt indonesia` | Secondary AI Gateway | Keluarga GPT ada dalam katalog; bukan seluruh positioning dan lineup dapat berubah |
| `harga api ai rupiah` | Primary Harga | Intent membandingkan paket dan pembayaran lokal |
| `coding ai indonesia` | Primary Coding | Plugin coding agent dan endpoint khusus |
| `api data wilayah indonesia` | Primary API Store | Produk wilayah dengan katalog API lokal terkait |
| `daftar domain .id` | Primary Domain | Intent pendaftaran; konteks Indonesia ada pada judul |
| `satu API key untuk banyak model AI` | Long-tail AI Gateway | Tutorial/integrasi konkret |
| `token AI dengan QRIS` | Long-tail Harga | Pembayaran rupiah per organisasi |

Tidak ada target live `managed mysql indonesia`, `managed database dengan server di indonesia`, `deploy aplikasi tanpa server`, atau `latensi database jakarta` sampai produk dan buktinya tersedia. Hindari keyword stuffing; meta keywords hanya mengikuti fokus halaman dan bukan sinyal ranking Google.

## Keyword enterprise

| Primary | Secondary / long-tail |
| --- | --- |
| `managed cloud indonesia`, `jasa kelola server perusahaan` | `jasa maintenance server`, dukungan operasional sesuai scope |
| `jasa migrasi server ke cloud` | checklist migrasi server produksi; tanpa menjanjikan zero downtime |
| `managed hosting bisnis` | pengelolaan website bisnis, DNS dan SSL |
| `setup CI/CD perusahaan` | pipeline deployment, container |
| `backup dan disaster recovery bisnis` | retensi, prosedur restore, target pemulihan yang disepakati |
| `jasa monitoring dan security server` | baseline keamanan dan alert sesuai scope |
| `private cloud indonesia` | private/hybrid cloud, Proxmox sebagai istilah teknis sesuai kebutuhan proyek |
| `infrastruktur aplikasi AI dan SaaS` | perencanaan deployment dan operasional |

Istilah teknis enterprise tidak menyatakan seluruh fitur tersebut tersedia sebagai self-serve platform. Tidak ada jaminan uptime, penghematan, sertifikasi, zero downtime, atau hasil keamanan dalam metadata.

## Peta halaman

Sumber title/description/OG: **`scripts/seo-metadata.mjs`**. Semua title ≤60 karakter dan description ≤155 karakter, termasuk suffix brand. SEOHead menggunakan metadata terpusat agar deskripsi panjang di halaman enterprise lama tidak bocor ke hasil statis.

| Canonical route | Target utama | OG di public/ |
| --- | --- | --- |
| `/` | cloud platform indonesia; AI API Indonesia | `og.jpg` |
| `/harga` | harga api ai rupiah | `og/banner_harga.webp` |
| `/ai-gateway` | ai api indonesia; openai compatible api indonesia | `og/banner_ai-gateway.webp` |
| `/ai-plan` | ai plan qris kuota harian | `og/banner_ai-gateway.webp` |
| `/coding` | coding ai indonesia | `og/banner_coding.webp` |
| `/api-store` | api data wilayah indonesia | `og/banner_api-store.webp` |
| `/domain` | daftar domain .id | `og/banner_domain.webp` |
| `/layanan` | managed cloud indonesia | `og/banner_services.webp` |
| `/tentang` | orvix cloud platform indonesia | `og/banner_about.webp` |
| `/kontak` | kontak orvix; konsultasi enterprise | `og/banner_contact.webp` |
| `/services/managed-cloud` | jasa kelola server perusahaan | `og/banner_service-managed-cloud.webp` |
| `/services/cloud-migration` | jasa migrasi server ke cloud | `og/banner_service-cloud-migration.webp` |
| `/services/managed-hosting` | managed hosting bisnis | `og/banner_service-managed-hosting.webp` |
| `/services/devops-cicd` | setup CI/CD perusahaan | `og/banner_service-devops-cicd.webp` |
| `/services/backup-disaster-recovery` | backup dan disaster recovery bisnis | `og/banner_service-backup-disaster-recovery.webp` |
| `/services/monitoring-security` | jasa monitoring dan security server | `og/banner_service-monitoring-security.webp` |
| `/services/private-hybrid-cloud` | private cloud indonesia | `og/banner_service-private-hybrid-cloud.webp` |
| `/services/ai-saas-infrastructure` | infrastruktur aplikasi AI dan SaaS | `og/banner_service-ai-saas-infrastructure.webp` |
| `/404` | noindex; bukan target pencarian | `og.jpg` |

Aliases `/services` → `/layanan`, `/about` → `/tentang`, `/contact` → `/kontak` tetap memiliki HTML statis sendiri, dengan canonical dan OG URL menuju pasangan Indonesianya. Alias bukan redirect dan tidak masuk sitemap. Delapan detail `/services/*` tetap canonical. `dist/404/index.html` dan `dist/404.html` berisi noindex; status HTTP untuk URL tak dikenal mengikuti routing hosting dan perlu diperiksa pada deployment.

## Structured data

- Satu graph JSON-LD yang dikelola Helmet per halaman; tidak ada graph permanen dalam shell `index.html`.
- `Organization` pada home, juga didefinisikan sekali pada halaman indexable lain agar referensi lokal lengkap. Kontak berasal dari data situs; tidak ada alamat kantor atau klaim residency. `WebSite` dan `WebPage` terhubung lewat `@id`.
- `BreadcrumbList` pada halaman selain home, dengan parent enterprise `/layanan` untuk detail layanan.
- `/harga`: satu `Product` per plan dari `pricing.ts`; setiap varian Token Plan menjadi `Offer` terpisah dengan kuota dan masa berlaku sendiri, harga integer IDR, dan URL platform dari data. AI Plan mencantumkan seluruh fair use dan lineup note; coding/image mencantumkan kuota serta masa berlaku. Tidak ada offer domain atau harga roadmap. Masa berlaku paket bukan `priceValidUntil` dan bukan langganan bulanan kalender.
- `FAQPage` hanya home dan Harga, dari array FAQ yang sama dengan UI. Pertanyaan/jawaban harus cocok persis. Prerender membuka FAQ home untuk memperoleh markup jawaban yang lazy-mounted, lalu menyimpannya dalam panel tertutup/hidden yang dapat dibuka pengguna. Harga memakai native details. Schema tidak menjanjikan eligibility rich result Google.
- Tidak ada rating, review, customer count, sertifikasi, atau free-AI offer yang dibuat-buat. Daftar gratis berarti pendaftaran akun, bukan pemakaian AI gratis.

## Build, gambar, dan verifikasi

```sh
# Native Chrome/Brave dideteksi pada macOS; bisa override path browser.
PRERENDER_PORT=45684 bun run build:static
bun run lint
bun run test
bunx tsc --noEmit -p tsconfig.app.json
```

`build:static` menghasilkan sitemap → Vite bundle → seluruh route statis → validasi HTML terserialisasi → manifest fingerprint. `scripts/routes.mjs` berbagi inventory dengan metadata; validator membandingkannya dengan App dan slug data enterprise sehingga route baru tidak bisa hilang diam-diam. Sitemap berisi 18 canonical URL; prerender berisi 22 path termasuk tiga alias dan 404. `/ai-plan` indexable, dengan canonical dan metadata terpusat. Pixel tidak dimuat oleh prerender/bot.

`src/test/seo.test.ts` masuk ke `bun run test` tanpa perubahan config. **Build statis adalah prerequisite test SEO.** Dist hilang, route hilang, perubahan source setelah build, atau manifest stale menyebabkan kegagalan eksplisit, bukan skip/false green. Fingerprint meliputi source, scripts, public, shell dan konfigurasi build utama. Validator memeriksa tag tunggal, title/description, canonical, OG/Twitter lengkap, noindex, rendered body, FAQ parity, schema shape, ID unik, serta sitemap canonical. Test tambahan membandingkan seluruh Product/Offer dan FAQ dengan data saat ini.

`scripts/browser.mjs` memakai argumen native untuk path browser lokal, dan `@sparticuz/chromium` hanya sebagai fallback Linux. Tidak ada `--single-process`/`--no-zygote` Linux yang dipaksakan pada Brave macOS. Server prerender ditutup bila launch gagal.

Gambar 1200×630 mengikuti gaya existing: latar gelap/grid, brand bars cyan-ungu, headline gradient, font Plus Jakarta Sans lokal. Regenerasi banner home/default, lima produk, dan tiga index perusahaan:

```sh
node scripts/generate-og.mjs
```

Delapan banner detail enterprise juga diregenerasi dengan deskripsi sesuai scope; headline lama yang menyiratkan jaminan restore, hasil keamanan, dan kontrol data penuh dihapus. Setelah mengganti artwork, review visual lalu build ulang agar fingerprint dan dist terbaru. Default `og.jpg` dan `og/banner_home.webp` tidak lagi menjanjikan database/storage/deployment live.

## Follow-up berbasis bukti

- Verifikasi preview deployment: raw HTML setiap route, respons status 404, robots.txt, cache gambar, dan sitemap sebelum submit ke Search Console.
- Daftarkan properti Search Console dan submit sitemap bila akses tersedia; belum diverifikasi di tugas ini.
- Konfirmasi lokasi bisnis serta lokasi pemrosesan per layanan sebelum menambah alamat atau klaim residency.
- Ide konten: integrasi API kompatibel OpenAI; cara memilih paket token/fair use/coding; contoh API wilayah; checklist migrasi; rencana restore. Artikel belum dibuat.
- Evaluasi Search Console untuk query dan konversi nyata sebelum mengklaim keyword menang atau jalur revenue dominan. Tidak ada bukti bahwa enterprise membiayai platform dari audit ini.
