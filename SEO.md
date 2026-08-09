# SEO Strategy — Orvix.id

Terakhir diperbarui: 2026-08-10

## Positioning

Orvix menjual dua hal yang dicari lewat cara yang sangat berbeda:

| Track | Apa | Model | Audiens |
|---|---|---|---|
| **Orvix Cloud Platform** | PaaS self-serve — managed database, AI gateway, storage, deployment | Daftar sendiri, provisioning otomatis | Developer, tim produk, software house |
| **Enterprise Solutions** | Managed infrastructure yang dikerjakan tim Orvix | Contact us, scope per-klien | Pemilik bisnis, IT manager, ops |

Platform adalah headline. Enterprise adalah pintu kedua, bukan pesan utama.

Pembeda utama yang bisa dipertahankan: **infrastruktur berjalan di Indonesia (region Jakarta)**, billing lokal, dukungan berbahasa Indonesia.

## Insight inti: dua intent yang tidak boleh dicampur

Ini keputusan paling penting di dokumen ini.

Developer mencari dalam **istilah teknis, sering berbahasa Inggris**, dan sudah tahu bentuk solusinya — `managed mysql indonesia`, `PaaS indonesia`. Mereka membandingkan produk.

Pemilik bisnis mencari dalam **bahasa Indonesia berbasis masalah** — `jasa migrasi server`, `jasa kelola cloud perusahaan`. Mereka mencari orang, bukan produk.

Satu halaman yang berusaha memenangkan keduanya akan kalah di dua-duanya. Halaman platform harus terbaca seperti dokumentasi produk; halaman enterprise seperti halaman jasa. Struktur situs saat ini sudah memisahkan ini — jangan digabung lagi.

## Keyword Strategy — Platform

Semua keyword primary di sini menyebut Indonesia. Itu disengaja: lokalitas adalah
USP, bukan pelengkap. Keyword kategori tanpa penanda lokal (`managed database`,
`PaaS`) langsung berhadapan dengan penyedia global — jangan dijadikan target
utama.

### Primary
| Keyword | Intent |
|---|---|
| `cloud platform indonesia` | Commercial — cari platform lokal |
| `managed database indonesia` | Commercial — produk spesifik |
| `managed mysql indonesia` | Commercial — produk spesifik, high intent |
| `managed database dengan server di indonesia` | Data residency — USP paling langsung |
| `PaaS indonesia` | Commercial — sadar kategori |

### Secondary
| Keyword | Intent |
|---|---|
| `hosting database mysql cloud` | Product-specific |
| `AI gateway API` | Product-specific |
| `deploy aplikasi tanpa server` | Problem-driven |
| `alternatif VPS untuk aplikasi` | Comparison |
| `database as a service indonesia` | Kategori |

### Long-tail
| Keyword | Intent |
|---|---|
| `cara deploy aplikasi tanpa mengelola server` | Edukatif, top-of-funnel |
| `platform cloud lokal untuk startup` | Segment-specific |
| `satu API key untuk banyak model AI` | AI Gateway, problem-driven |
| `latensi database jakarta` | Technical, lokal |

## Keyword Strategy — Enterprise

### Primary
| Keyword | Intent |
|---|---|
| `managed cloud indonesia` | Commercial — cari partner |
| `jasa kelola server perusahaan` | Commercial |
| `jasa migrasi server ke cloud` | Commercial, high intent |
| `private cloud proxmox indonesia` | Technical, vendor-aware |

### Secondary
| Keyword | Intent |
|---|---|
| `jasa maintenance server bulanan` | Retainer-driven |
| `backup dan disaster recovery bisnis` | Risk / compliance |
| `jasa monitoring dan security server` | Ops-driven |
| `setup CI/CD dan docker perusahaan` | DevOps-specific |
| `hybrid cloud on-premise` | Arsitektur |

### Long-tail
| Keyword | Intent |
|---|---|
| `migrasi hosting lama ke cloud tanpa downtime` | Problem-driven |
| `private cloud untuk perusahaan yang tidak mau data keluar` | Compliance |
| `infrastruktur untuk aplikasi AI dan SaaS` | Segment-specific |
| `konsolidasi beberapa server lama jadi satu` | Cost-driven |

## Peta halaman → keyword

| Route | Target utama | Banner OG |
|---|---|---|
| `/` | `cloud platform indonesia`, `orvix cloud platform` | `og.jpg` |
| `/services` | `managed cloud indonesia`, `jasa kelola server perusahaan` | `banner_services` |
| `/services/managed-cloud` | `jasa kelola server`, `managed cloud` | `banner_service-managed-cloud` |
| `/services/cloud-migration` | `jasa migrasi server ke cloud` | `banner_service-cloud-migration` |
| `/services/managed-hosting` | `managed hosting bisnis` | `banner_service-managed-hosting` |
| `/services/devops-cicd` | `setup CI/CD perusahaan` | `banner_service-devops-cicd` |
| `/services/backup-disaster-recovery` | `backup dan disaster recovery bisnis` | `banner_service-backup-disaster-recovery` |
| `/services/monitoring-security` | `jasa monitoring dan security server` | `banner_service-monitoring-security` |
| `/services/private-hybrid-cloud` | `private cloud proxmox indonesia` | `banner_service-private-hybrid-cloud` |
| `/services/ai-saas-infrastructure` | `infrastruktur aplikasi AI dan SaaS` | `banner_service-ai-saas-infrastructure` |
| `/about` | Brand | `banner_about` |
| `/contact` | Brand + `konsultasi infrastruktur` | `banner_contact` |

**Celah terbesar:** sisi enterprise punya 8 halaman detail, sisi platform **nol**. Produk platform hanya muncul sebagai section di homepage. Satu section tidak bisa memenangkan `managed mysql indonesia` — halaman yang menang untuk keyword produk adalah halaman yang seluruhnya membahas produk itu. Selama ini belum ada, keyword platform hanya bisa ditarget lewat homepage, dan homepage cuma bisa fokus ke satu keyword.

## Messaging Priorities

1. Platform dulu — build dan deploy tanpa mengurus server.
2. Data dan workload di Indonesia. Ini pembeda yang tidak bisa disamai penyedia global.
3. Satu dashboard, satu billing, satu akun untuk semua layanan.
4. Enterprise sebagai jalur terpisah untuk yang butuh penanganan langsung — bukan diskon, bukan tier.
5. PaaS sekarang, IaaS menyusul. Jangan menjanjikan tanggal.

## Technical SEO

### Sudah dikerjakan
- `lang="id"`, canonical per route, `robots` per route (`noindex` pada 404)
- `SEOHead.tsx` berbasis react-helmet-async — title, description, keywords, OG lengkap, Twitter Card, JSON-LD per route
- OG image per route otomatis dari path → `public/og/banner_*.webp` (12 banner, 1200×630)
- Tag statis di `index.html` diberi `data-rh="true"` agar Helmet mengganti, bukan menduplikasi
- JSON-LD `@graph`: Organization + WebSite + SoftwareApplication (platform) + Service (enterprise), saling terhubung lewat `@id`
- `BreadcrumbList` pada halaman berjenjang
- `robots.txt` dan `sitemap.xml` — di-generate dari route asli lewat `scripts/generate-sitemap.mjs`
- `vercel.json` — SPA rewrite, build command eksplisit, cache header untuk aset OG

### Next steps
- **Putuskan prerender.** Facebook, WhatsApp, dan LinkedIn tidak menjalankan JS, jadi mereka hanya melihat `index.html` mentah — artinya 11 dari 12 banner tidak akan pernah muncul saat link di-share. Google tidak terpengaruh karena me-render JS.
- **Buat halaman produk platform** (`/platform`, lalu `/platform/{produk}`). Ini prasyarat untuk semua keyword platform di atas.
- Daftarkan ke Google Search Console, submit sitemap.
- Google Business Profile dengan kategori cloud/hosting provider, bukan IT services.
- `llms.txt` — makin banyak jawaban AI yang jadi jalur penemuan; Orvix cocok karena produknya bisa dijelaskan ringkas.
- Blog / insight pages untuk keyword edukatif.
- Bersihkan `public/chris.jpg`, `public/eric.jpg`, `public/placeholder.svg` — sisa template, tidak direferensi, ~580 KB terbawa ke build.

## Content Ideas

| Topik | Target keyword | Track |
|---|---|---|
| "Kapan berhenti pakai VPS dan pindah ke managed database" | `alternatif VPS untuk aplikasi` | Platform |
| "Kenapa latensi database ke Singapura bikin aplikasi terasa lambat" | `latensi database jakarta` | Platform |
| "Menghubungkan banyak model AI lewat satu API key" | `AI gateway API` | Platform |
| "Checklist sebelum migrasi server produksi" | `jasa migrasi server ke cloud` | Enterprise |
| "Backup yang cuma dijadwal bukan backup" | `backup dan disaster recovery bisnis` | Enterprise |
| "Private cloud vs public cloud untuk data yang tidak boleh keluar" | `private cloud proxmox indonesia` | Enterprise |

## Batasan yang perlu diingat

**Jangan buat halaman keyword untuk produk yang belum ada.** Deploy, Object Storage, Redis, Functions, Queue, Auth, dan Observability masih roadmap. Halaman yang menjanjikan produk yang belum bisa dipakai akan menghasilkan bounce tinggi dan, lebih buruk, kehilangan kepercayaan pengunjung yang benar-benar mendaftar.

**Keyword platform itu berat.** Kompetitornya penyedia global dengan domain authority jauh di atas. Sudut yang realistis bukan menang di `PaaS` secara umum, tapi di irisan lokalnya: data di Indonesia, latensi Jakarta, billing rupiah, dukungan bahasa Indonesia. Keyword long-tail yang menyebut Indonesia jauh lebih mungkin dimenangkan daripada keyword kategori murni.

**Enterprise membiayai platform.** Sisi enterprise punya intent komersial yang lebih tinggi dan kompetisi yang lebih rendah — kemungkinan besar itu sumber lead berbayar pertama dari SEO. Perlakukan sebagai jalur revenue nyata, bukan sekadar pelengkap, meskipun platform yang jadi headline.
