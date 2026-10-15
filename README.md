# Orvix.id company profile

Situs profil **Orvix Cloud Platform** untuk developer Indonesia, dengan jalur layanan enterprise yang terpisah untuk pemilik bisnis. Produk yang sudah tersedia memimpin konten: AI Gateway, Token Plan, AI Plan, Coding Plan, Image Credits, API Store, dan Domain. Produk roadmap diberi status **Segera**; Orvix One memiliki teaser terpisah.

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

Gunakan fakta produksi yang diverifikasi, bukan visi roadmap sebagai klaim fitur aktif. Jangan menambahkan jaminan uptime, lokasi pemrosesan data, pelanggan, sertifikasi, atau jadwal peluncuran tanpa bukti. Sebut keluarga model; jangan sebut sumber pasokan model. Teaser Orvix One hanya menjelaskan asisten AI untuk semua orang di HP dan desktop, dengan minat melalui WhatsApp.

Layanan enterprise adalah penawaran dengan ruang lingkup proyek yang disepakati, bukan fitur self-serve platform. Pertahankan pemisahan intent tersebut saat memperbarui halaman dan SEO.

## Deployment

Vercel men-deploy branch **`main`** ke produksi sesuai konfigurasi proyek. `vercel.json` menjalankan build statis: sitemap → Vite build → prerender, dengan rewrite SPA untuk route aplikasi. Gunakan branch kerja dan review sebelum merge ke `main`; deployment preview mengikuti konfigurasi integrasi Vercel.
