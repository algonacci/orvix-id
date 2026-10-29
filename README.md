# Orvix.id company profile

Situs profil **Orvix Cloud Platform** untuk developer Indonesia, dengan jalur layanan enterprise yang terpisah untuk pemilik bisnis. Produk yang sudah tersedia memimpin konten: AI Gateway, Token Plan, AI Plan, Coding Plan, Image Credits, API Store, Domain, dan Orvix One. Produk roadmap diberi status **Segera**.

## Pengembangan

Stack: React, TypeScript, Vite, Tailwind CSS, dan komponen shadcn/ui. Gunakan Bun untuk memasang dependensi dan menjalankan skrip.

```sh
bun install --frozen-lockfile
bun run dev
```

| Perintah | Kegunaan |
| --- | --- |
| `bun run dev` | Server pengembangan Vite |
| `bun run build` | Generate sitemap dan build produksi ke `dist/` |
| `bun run build:static` | Build produksi lalu prerender setiap route |
| `bun run preview` | Tinjau hasil build lokal |
| `bun run lint` | ESLint |
| `bun run test` | Unit test Vitest, termasuk kontrak data |
| `bun run test:watch` | Vitest mode watch |

Prerender menggunakan Chromium. Di mesin lokal yang membutuhkan browser sendiri, jalankan `PRERENDER_CHROME_PATH="/path/to/chrome" bun run build:static`. `PRERENDER_PORT` dan `PRERENDER_CONCURRENCY` dapat disetel jika diperlukan. Vite build saja belum menghasilkan HTML prerender per route.

## Konten dan kontrak data

- **`src/data/pricing.ts`**: sumber angka komersial — harga rupiah, kuota, varian token, masa berlaku, fair use, jumlah model/TLD, nama keluarga model, tanggal verifikasi, dan helper format. Semua angka penawaran yang terlihat di UI harus dibaca dari sini atau diturunkan dari datanya.
- **`src/data/products.ts`**: katalog produk typed, status `live | segera`, tautan platform, model-feature copy, plugin coding, katalog API, contoh TLD, billing, serta roadmap. Produk live wajib memiliki URL platform.
- **`src/data/siteContent.tsx`**: metadata, navigasi, hero, FAQ, kontak, teaser Orvix One, dan konten enterprise. Mengekspor ulang pricing dan products untuk kompatibilitas impor lama.
- **`src/data/siteContent.test.ts`**: invariant produk dan harga yang harus tetap lolos saat konten diperbarui.
- **`src/components/`**, **`src/pages/`**: presentasi data. Jangan menduplikasi harga, jumlah model, atau daftar produk di komponen.
- **`src/components/SEOHead.tsx`**, **`SEO.md`**: metadata dan strategi pemisahan intent developer/enterprise.
- **`scripts/routes.mjs`**, **`scripts/generate-sitemap.mjs`**, **`scripts/prerender.mjs`**: daftar route, sitemap, dan HTML statis. Sinkronkan saat menambah route di `src/App.tsx`.

### Memperbarui harga: satu file

Edit **`src/data/pricing.ts`** setelah memverifikasi harga terbaru. Harga menggunakan integer rupiah; kuota token menggunakan jumlah token utuh. `tokenPlans[].variants` memuat pilihan berjangka dan tanpa kedaluwarsa pada harga paket yang sama. `validityDays: null` berarti **tanpa kedaluwarsa**; Ember tidak memiliki varian tersebut. Field kuota/masa berlaku tingkat paket merepresentasikan varian berjangka.

Perbarui `lastVerified` dan angka terkait; `pricingCopy`, teks produk, dan FAQ akan mengikuti data. Gunakan `formatIdr`, `formatTokens`, `formatNumber`, dan `formatValidity` saat merender angka.

**Makna “mulai dari”:** `startingPriceIdr` adalah minimum dari **Token Plan**, bukan dari semua pembelian. Pasangkan dengan `startingPriceScope` atau gunakan `pricingCopy.startingPrice`. `lowestPaidProductPriceIdr` adalah minimum dari semua paket berbayar, termasuk Image Credits. API Store “gratis saat ini” berada di katalog produk, bukan paket berbayar. Harga domain tidak dicetak karena mengikuti registrar.

Jalankan test, lint, dan build statis setelah memperbarui data. Verifikasi juga tampilan desktop/mobile jika perubahan memengaruhi layout.

### Aturan kebenaran konten

Gunakan fakta produksi yang diverifikasi, bukan visi roadmap sebagai klaim fitur aktif. Jangan menambahkan jaminan uptime, lokasi pemrosesan data, pelanggan, sertifikasi, atau jadwal peluncuran tanpa bukti. Sebut keluarga model; jangan sebut sumber pasokan model. Orvix One sudah live; AI Plan dapat digunakan pada model dalam lineup. Untuk AI Plan, plugin resmi hanya OpenCode; OpenClaw/Hermes memakai API kompatibel OpenAI, Pi/omp memakai provider custom melalui API yang sama. Jangan menyebut jumlah model, unlimited, atau jaminan kecukupan kuota pada landing AI Plan.

## AI Plan checkout

Halaman publik `/ai-plan`: [kontrak, env, mock browser, dan checklist rilis](docs/ai-plan-checkout.md). Jalankan build statis sebelum test karena test SEO memeriksa fingerprint source. Registry lockfile memakai npm publik; `scripts/normalize-lock-registry.mjs` mempertahankan versi/integritas saat mengganti mirror lama yang tidak dapat diakses.

Layanan enterprise adalah penawaran dengan ruang lingkup proyek yang disepakati, bukan fitur self-serve platform. Pertahankan pemisahan intent tersebut saat memperbarui halaman dan SEO.

## Cookie atribusi lintas subdomain

`src/components/AttributionCookie.tsx` menangkap atribusi pada semua route, termasuk navigasi SPA.
Helper `src/lib/attributionCookie.ts` menulis JSON URL-encoded `orvix_attr` dengan
`Domain=.orvix.id; Path=/; Max-Age=2419200` (28 hari), `SameSite=Lax`, dan `Secure`.
Cookie ini hanya dapat ditulis browser pada domain yang sesuai melalui HTTPS.

- Hanya `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, dan `fbclid` yang diterima dari query; field lain, query lengkap, dan fragment tidak disimpan.
- Payload memuat `v:1`, parameter valid, `landing_path`, dan `ts` (milidetik). `fbc_ts` merekam waktu pertama `fbclid` terlihat; klik yang sama mempertahankan timestamp cookie sebelumnya, klik baru memakai waktu baru.
- Nilai harus printable ASCII sepanjang 1–200 karakter; nilai dengan alamat email diabaikan. Path tidak valid membatalkan penulisan. Jangan memasukkan PII ke label kampanye atau path.
- Seluruh cookie setelah encoding, termasuk nama dan atribut, harus kurang dari 1.024 byte; payload terlalu besar diabaikan.
- Last non-direct touch: hanya URL dengan parameter atribusi valid yang menulis ulang cookie. Kunjungan langsung atau parameter seluruhnya tidak valid mempertahankan cookie sebelumnya. Kegagalan akses cookie tidak mengganggu halaman.
- Pixel dan atribusi body checkout tetap memakai implementasi yang sudah ada. Test cookie mencakup parsing, validasi, ukuran, timestamp klik, navigasi SPA, dan storage yang diblokir (`bun run test`).

## Deployment

Vercel men-deploy branch **`main`** ke produksi sesuai konfigurasi proyek. `vercel.json` menjalankan build statis: sitemap → Vite build → prerender, dengan rewrite SPA untuk route aplikasi. Gunakan branch kerja dan review sebelum merge ke `main`; deployment preview mengikuti konfigurasi integrasi Vercel.
