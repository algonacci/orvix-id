import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BarChart3,
  BadgeCheck,
  Bot,
  Boxes,
  Cloud,
  CloudCog,
  Database,
  HardDriveDownload,
  LaptopMinimalCheck,
  Layers,
  Lock,
  ServerCog,
  ShieldCheck,
  Waypoints,
  Zap,
} from "lucide-react";
import { aiPlan, codingPlan, formatNumber, formatTokens, formatValidity, lastVerified, modelCount, platformUrl, pricingCopy } from "./pricing";
import { billing, liveProducts } from "./products";
export {
  aiPlan, aiPlanModelFamilies, allPlans, codingPlan, communityCampaignName, docsUrl,
  domainTldCount, formatIdr, formatNumber, formatTokens, formatValidity, imageCredits,
  lastVerified, lowestPaidProductPriceIdr, modelCount, modelFamilies, platformUrl,
  pricingCopy, pricingGroups, startingPriceIdr, startingPriceScope, tokenPlans,
} from "./pricing";
export type { PlanCategory, PlanVariant, PricingPlan, TokenPlan } from "./pricing";
export {
  apiCatalog, apiStore, availableProducts, billing, codingEndpoint, codingIntro, codingKeyEnv, codingPluginCommands, codingPlugins, codingSetup,
  community, domainContent, domainTlds, gatewayExamples, gatewayFeatures, gatewayIntegration, gatewayLinks, heroBadges,
  heroProducts, liveProductIds, liveProducts, platformProducts, roadmapIntro, roadmapProducts,
} from "./products";
export type { PlatformProduct } from "./products";

export const siteName = "Orvix.id";
export const siteTitle = "Orvix.id - Cloud Platform untuk Developer";
export const siteDescription =
  "Orvix Cloud Platform untuk developer Indonesia: AI Gateway, paket AI dan coding, API data Indonesia, serta domain dengan billing rupiah.";
export const siteUrl = "https://orvix.id";
export const siteLocale = "id_ID";
export const siteKeywords =
  "orvix cloud platform, cloud platform indonesia, AI gateway indonesia, API kompatibel OpenAI, token AI rupiah, coding plan, API data indonesia, domain indonesia";

// Social scrapers need absolute URLs — a relative og:image is silently dropped
// by Twitter and unreliable on Facebook.
export const defaultOgImage = `${siteUrl}/og.jpg`;
export const ogImageBase = `${siteUrl}/og`;

export const whatsappNumber = "6282125609413";
export const whatsappDisplay = "0821-2560-9413";
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;
export const emailPlaceholder = "hello@orvix.id";
export const locationLabel = "Indonesia";
export const officeLocation = "Jakarta, Indonesia";

export type ServiceItem = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  deliverables: string[];
  useCases: string[];
  tech: string[];
  icon: LucideIcon;
  accent: string;
};

export type MetricItem = {
  value: string;
  label: string;
  detail: string;
};

export type WorkflowItem = {
  step: string;
  title: string;
  description: string;
};

export const platformName = "Orvix Cloud Platform";

export const platformVision =
  "Build, deploy, dan scale aplikasi lewat satu cloud platform.";

export const platformIntro =
  `Mulai dengan AI Gateway untuk ${formatNumber(modelCount)} model, paket AI dan coding, API data Indonesia, serta domain. Isi saldo organisasi dalam rupiah melalui QRIS.`;

export const platformPillars = [
  {
    title: "Organisasi dan proyek",
    description:
      "Kelola organisasi, proyek, anggota, serta penggunaan AI per proyek di platform Orvix.",
    icon: Layers,
  },
  {
    title: "AI lewat API",
    description:
      "Akses model dengan API kompatibel OpenAI, failover otomatis, dan pilihan orvix/auto.",
    icon: Zap,
  },
  {
    title: "Billing rupiah",
    description:
      billing.description,
    icon: Cloud,
  },
];

export const enterpriseIntro =
  "Butuh bantuan untuk server internal, migrasi, atau arsitektur hybrid? Diskusikan kebutuhan enterprise dengan tim Orvix. Ruang lingkup, dukungan, dan target operasional disepakati sesuai proyek.";

export const enterpriseSlugs = [
  "managed-cloud",
  "cloud-migration",
  "private-hybrid-cloud",
  "backup-disaster-recovery",
  "monitoring-security",
  "devops-cicd",
];

export const trustPoints = [
  "Deploy server, aplikasi, dan workload bisnis dengan fondasi yang lebih rapi.",
  "Kelola VPS, hosting, backup, monitoring, dan security secara terukur.",
  "Bangun arsitektur private cloud, hybrid cloud, sampai AI infrastructure sesuai kebutuhan.",
];

export const aboutHighlights = [
  "Setup cloud, VPS, dan server aplikasi.",
  "Cocok untuk UKM, SaaS, ERP, dan sistem internal.",
  "Bisa mulai dari setup baru, migrasi, sampai maintenance bulanan.",
];

export const serviceCategories = [
  "Managed Cloud",
  "Cloud Migration",
  "Managed Hosting",
  "DevOps & CI/CD",
  "Monitoring & Security",
  "Hybrid Cloud",
];

// Rounded down from the production user count (1,426 on 15 Oct 2026).
// Update the floor and date together; never round up.
export const registeredDevelopers = { floor: 1400, asOf: "2026-10-15" };

export const heroMetrics: MetricItem[] = [
  {
    value: `${formatNumber(modelCount)} model`,
    label: "AI Gateway",
    detail: "Model teks dan gambar melalui API key Orvix.",
  },
  {
    value: "OpenAI-compatible",
    label: "Integrasi API",
    detail: "Gunakan pola API kompatibel OpenAI.",
  },
  {
    value: "Rupiah",
    label: "Saldo organisasi",
    detail: "Isi saldo melalui QRIS.",
  },
  {
    value: `${formatNumber(registeredDevelopers.floor)}+ developer`,
    label: "Terdaftar",
    detail: `Akun terdaftar di Orvix per ${registeredDevelopers.asOf}.`,
  },
];

export const infrastructureMetrics: MetricItem[] = [
  {
    value: "Rapi",
    label: "Operasional lebih jelas",
    detail: "Diskusikan pencatatan akses, backup, monitoring, dan perubahan operasional.",
  },
  {
    value: "Terpantau",
    label: "Visibilitas workload",
    detail: "Tentukan kebutuhan monitoring resource, logs, dan alert untuk proyek Anda.",
  },
  {
    value: "Security review",
    label: "Security baseline",
    detail: "Bahas hardening, patching, access review, dan backup review sesuai lingkup proyek.",
  },
  {
    value: "Perencanaan kapasitas",
    label: "Fondasi bertumbuh",
    detail: "Rencanakan kebutuhan arsitektur dan kapasitas seiring perubahan beban kerja.",
  },
];

export const deploymentWorkflow: WorkflowItem[] = [
  {
    step: "01",
    title: "Assessment",
    description: "Review workload, stack, akses, dan titik risiko utama.",
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Susun arsitektur deployment, backup, security, dan observability.",
  },
  {
    step: "03",
    title: "Deployment",
    description: "Provisioning server, container, domain, SSL, dan release setup.",
  },
  {
    step: "04",
    title: "Monitoring",
    description: "Tambahkan monitoring, logs, alerting, dan review kapasitas.",
  },
  {
    step: "05",
    title: "Maintenance",
    description: "Lanjutkan patching, backup review, dan perubahan minor berkala.",
  },
];

export const stackItems = [
  "Docker",
  "Kubernetes",
  "Proxmox",
  "Cloudflare",
  "Linux",
  "VPS",
  "Object Storage",
  "CI/CD",
  "Monitoring Stack",
  "Managed Database",
  "Reverse Proxy",
  "Hybrid Networking",
];

export const services: ServiceItem[] = [
  {
    slug: "managed-cloud",
    path: "/services/managed-cloud",
    title: "Managed Cloud",
    shortTitle: "Managed Cloud",
    summary:
      "Kelola server, akses, patching, monitoring, dan operasional rutin untuk workload bisnis.",
    intro:
      "Diskusikan pengelolaan server, akses, patching, dan monitoring sesuai kebutuhan operasional tim Anda.",
    deliverables: [
      "Provisioning VPS, cloud server, Linux instance, storage, dan akses administratif yang rapi",
      "Baseline hardening, patch management, user access review, dan housekeeping sistem",
      "Setup reverse proxy, SSL, firewall dasar, dan dokumentasi operasional",
      "Pendampingan monthly maintenance untuk kesehatan server, kapasitas, dan perubahan minor",
    ],
    useCases: [
      "Website perusahaan dan landing page bisnis",
      "Aplikasi internal yang butuh server stabil",
      "SaaS skala awal hingga menengah",
      "Workload bisnis yang butuh managed support bulanan",
    ],
    tech: ["Linux", "VPS", "Nginx", "Firewall"],
    icon: CloudCog,
    accent: "bg-svc-cyan",
  },
  {
    slug: "cloud-migration",
    path: "/services/cloud-migration",
    title: "Cloud Migration",
    shortTitle: "Migration",
    summary:
      "Rencanakan migrasi website, aplikasi, database, dan file sesuai kebutuhan kapasitas bisnis.",
    intro:
      "Migrasi dilakukan bertahap dengan perhatian pada downtime, integritas data, dan kesiapan cutover.",
    deliverables: [
      "Assessment workload, dependency, storage, database, dan trafik aplikasi",
      "Perencanaan migrasi dari hosting lama, VPS lama, atau server on-premise",
      "Cutover plan, testing, validasi akses, dan dokumentasi pasca migrasi",
      "Optimasi awal setelah migrasi untuk performa, backup, dan monitoring",
    ],
    useCases: [
      "Migrasi website perusahaan ke VPS atau cloud baru",
      "Pemindahan ERP atau aplikasi internal ke environment yang lebih modern",
      "Perencanaan konsolidasi beberapa server lama",
      "Replatforming sesuai kebutuhan kapasitas dan operasional",
    ],
    tech: ["Migration", "Data Sync", "Cutover"],
    icon: Waypoints,
    accent: "bg-svc-indigo",
  },
  {
    slug: "managed-hosting",
    path: "/services/managed-hosting",
    title: "Managed Hosting",
    shortTitle: "Hosting",
    summary:
      "Hosting terkelola untuk website bisnis, panel, email, DNS, SSL, dan deployment ringan.",
    intro:
      "Cocok untuk bisnis yang ingin hosting lebih terurus tanpa repot mengelola domain, sertifikat, dan operasional dasar sendiri.",
    deliverables: [
      "Setup domain, DNS, SSL, mail routing, dan panel hosting sesuai kebutuhan",
      "Managed deployment untuk website perusahaan, CMS, atau aplikasi web bisnis",
      "Routine backup, update dasar, dan pengecekan kapasitas hosting",
      "Integrasi Cloudflare untuk proteksi, caching, dan pengelolaan DNS",
    ],
    useCases: [
      "Website company profile dan microsite campaign",
      "Portal internal atau aplikasi admin ringan",
      "Email hosting dan domain management bisnis",
      "Hosting yang butuh keamanan dan maintenance lebih konsisten",
    ],
    tech: ["Cloudflare", "DNS", "SSL"],
    icon: ServerCog,
    accent: "bg-svc-blue",
  },
  {
    slug: "devops-cicd",
    path: "/services/devops-cicd",
    title: "DevOps & CI/CD",
    shortTitle: "DevOps",
    summary:
      "Setup pipeline deployment, staging, container workflow, dan release process yang lebih konsisten.",
    intro:
      "Orvix.id membantu tim mengurangi deployment manual dan membuat proses release lebih konsisten.",
    deliverables: [
      "Setup Git-based deployment, CI/CD pipeline, dan environment staging",
      "Containerization dengan Docker serta workflow build dan release image",
      "Secret handling, env management, dan standardisasi deployment",
      "Dokumentasi runbook release, rollback, dan basic incident procedure",
    ],
    useCases: [
      "Tim developer yang masih deploy manual ke server",
      "Aplikasi SaaS yang mulai butuh proses rilis lebih tertata",
      "ERP atau aplikasi internal yang sering berubah",
      "Project multi-environment dengan kebutuhan approval dan rollback",
    ],
    tech: ["Docker", "CI/CD", "GitOps"],
    icon: Boxes,
    accent: "bg-svc-purple",
  },
  {
    slug: "backup-disaster-recovery",
    path: "/services/backup-disaster-recovery",
    title: "Backup & Disaster Recovery",
    shortTitle: "Backup",
    summary:
      "Strategi backup server, database, file, dan object storage untuk mengurangi risiko kehilangan data.",
    intro:
      "Backup yang baik bukan sekadar ada salinan data, tapi juga prosedur restore dan recovery yang bisa dijalankan.",
    deliverables: [
      "Desain backup untuk file, database, VM, dan aplikasi penting",
      "Retensi lokal, offsite, dan object storage untuk salinan cadangan",
      "Verifikasi restore dan recovery checklist berkala",
      "Dasar disaster recovery plan untuk gangguan server, human error, atau ransomware incident",
    ],
    useCases: [
      "Backup server aplikasi dan database bisnis",
      "Perusahaan dengan file operasional yang kritikal",
      "Environment cloud yang membutuhkan salinan offsite",
      "Bisnis yang ingin mengurangi risiko downtime berkepanjangan",
    ],
    tech: ["Backup", "Recovery", "Offsite"],
    icon: HardDriveDownload,
    accent: "bg-svc-amber",
  },
  {
    slug: "monitoring-security",
    path: "/services/monitoring-security",
    title: "Monitoring & Security",
    shortTitle: "Security",
    summary:
      "Monitoring uptime, resource, logs, alerting, hardening, firewall, dan access review.",
    intro:
      "Diskusikan kebutuhan monitoring dan security baseline, termasuk logs, alert, akses, serta port publik.",
    deliverables: [
      "Uptime dan resource monitoring untuk server, aplikasi, dan service penting",
      "Alerting, log collection, dan dashboard observability dasar",
      "Hardening Linux server, review port publik, firewall, dan access policy",
      "Setup Cloudflare layer, SSL hygiene, dan praktik dasar pengamanan workload",
    ],
    useCases: [
      "Aplikasi bisnis yang butuh visibilitas operasional lebih baik",
      "Server publik yang perlu baseline security lebih rapi",
      "Tim internal yang ingin monthly reporting teknis",
      "Workload yang perlu monitoring performa sekaligus keamanan dasar",
    ],
    tech: ["Observability", "Security", "Alerting"],
    icon: ShieldCheck,
    accent: "bg-svc-red",
  },
  {
    slug: "private-hybrid-cloud",
    path: "/services/private-hybrid-cloud",
    title: "Private / Hybrid Cloud",
    shortTitle: "Hybrid Cloud",
    summary:
      "Setup virtualisasi, private cloud, dan integrasi cloud-to-on-prem untuk kebutuhan internal.",
    intro:
      "Layanan ini cocok untuk bisnis yang butuh kontrol lebih besar atas data, resource lokal, atau konektivitas antar lingkungan.",
    deliverables: [
      "Perencanaan virtualisasi dan private cloud berbasis Proxmox atau stack sejenis",
      "Integrasi workload on-premise dengan VPS, object storage, atau cloud publik",
      "Segmentasi akses, backup, dan desain konektivitas hybrid",
      "Konsolidasi server internal agar lebih mudah dipelihara dan dikembangkan",
    ],
    useCases: [
      "Server internal kantor atau pabrik",
      "ERP yang butuh kombinasi local resource dan public cloud",
      "Bisnis multi-branch dengan sinkronisasi service tertentu",
      "Perusahaan yang ingin private cloud bertahap tanpa migrasi total",
    ],
    tech: ["Proxmox", "Hybrid", "VPN"],
    icon: Cloud,
    accent: "bg-svc-cyan",
  },
  {
    slug: "ai-saas-infrastructure",
    path: "/services/ai-saas-infrastructure",
    title: "AI & SaaS Infrastructure",
    shortTitle: "AI Infrastructure",
    summary:
      "Deploy dan pengelolaan infrastruktur untuk aplikasi AI, SaaS, ERP, dan sistem bisnis yang memerlukan compute, database, storage, dan observability yang tepat.",
    intro:
      "Kami membantu bisnis menyiapkan fondasi teknis untuk aplikasi modern, mulai dari API service, worker, database, queue, storage, sampai environment deployment-nya.",
    deliverables: [
      "Perencanaan compute, database, storage, dan jaringan untuk AI atau SaaS workload",
      "Deployment aplikasi berbasis container, API backend, dashboard, dan service pendukung",
      "Setup database, storage, dan perencanaan kapasitas pada infrastruktur proyek enterprise",
      "Maintenance environment untuk ERP, SaaS internal, atau aplikasi AI yang terus berkembang",
    ],
    useCases: [
      "AI application infrastructure",
      "ERP dan SaaS internal perusahaan",
      "Platform dengan worker, queue, dan database terpisah",
      "Bisnis yang butuh partner infrastruktur untuk growth phase",
    ],
    tech: ["Managed DB", "Object Storage", "Containers", "API Infra", "Scaling"],
    icon: Bot,
    accent: "bg-svc-indigo",
  },
];

export const packages = [
  {
    title: "Starter Cloud Setup",
    summary: "Untuk bisnis yang ingin mulai deploy cloud dengan fondasi rapi.",
    features: [
      "Initial cloud/server setup",
      "Domain, DNS, SSL baseline",
      "Basic security hardening",
      "Website/app deployment",
    ],
  },
  {
    title: "Managed VPS",
    summary: "Untuk server aplikasi yang butuh maintenance rutin.",
    features: [
      "Monthly server maintenance",
      "Monitoring dasar dan backup",
      "Patching & access review",
      "Minor operational support",
    ],
  },
  {
    title: "Business Managed Cloud",
    summary: "Untuk workload bisnis yang mulai butuh reliability dan security lebih disiplin.",
    features: [
      "Managed cloud operation",
      "Monitoring & security baseline",
      "Backup & recovery workflow",
      "Monthly reporting",
    ],
  },
  {
    title: "Hybrid Infrastructure",
    summary: "Untuk bisnis yang menghubungkan cloud, server internal, dan private platform.",
    features: [
      "Hybrid architecture planning",
      "Proxmox/virtualization setup",
      "Cloud-to-on-prem integration",
      "Backup & access segmentation",
    ],
  },
  {
    title: "Custom Enterprise Setup",
    summary: "Untuk SaaS, ERP, multi-service deployment, atau AI workload.",
    features: [
      "Custom architecture",
      "CI/CD & container workflow",
      "Pengelolaan database/storage sesuai lingkup proyek enterprise",
      "Support scope sesuai kebutuhan",
    ],
  },
];

export const whyOrvix = [
  {
    title: "Pendekatan infrastruktur yang praktis",
    description:
      "Fokus kami bukan teori cloud yang rumit, tetapi implementasi yang benar-benar berguna untuk operasional bisnis sehari-hari.",
    icon: BadgeCheck,
  },
  {
    title: "Cloud, server, network, dan DevOps oriented",
    description:
      "Pendekatan kami melihat infrastruktur sebagai satu kesatuan: compute, akses, deployment, observability, dan keamanan.",
    icon: CloudCog,
  },
  {
    title: "Cocok untuk SME, SaaS, ERP, dan sistem internal",
    description:
      "Diskusikan kebutuhan operasional bisnis Anda dan lingkup pendampingan infrastruktur yang sesuai.",
    icon: LaptopMinimalCheck,
  },
  {
    title: "Pilihan arsitektur sesuai kebutuhan",
    description:
      "Kami bisa menyesuaikan platform dengan kebutuhan teknis dan anggaran, termasuk setup hybrid bila diperlukan.",
    icon: ArrowUpRight,
  },
  {
    title: "Diskusikan dukungan berkala",
    description:
      "Ruang lingkup maintenance, review perubahan, backup, monitoring, dan pendampingan berkala dibahas sesuai kebutuhan proyek.",
    icon: Lock,
  },
];

export const useCases = [
  "Website perusahaan dan landing page bisnis",
  "Deployment ERP, SaaS, dan aplikasi internal",
  "Server aplikasi internal untuk tim dan cabang",
  "Backup server dan offsite recovery",
  "Infrastruktur AI/API backend",
  "Sistem multi-branch dan hybrid connectivity",
  "Monitoring, observability, dan security hardening",
];

export const infrastructureFocus = [
  {
    title: "Build & Deploy",
    description: "Dari server awal, container, domain, SSL, hingga go-live environment yang siap dipakai.",
    icon: ServerCog,
  },
  {
    title: "Secure & Monitor",
    description: "Hardening, alerting, logging, dan visibilitas performa agar risiko operasional lebih terkendali.",
    icon: ShieldCheck,
  },
  {
    title: "Maintain & Optimize",
    description: "Backup, maintenance rutin, efisiensi biaya cloud, dan pendampingan saat workload berkembang.",
    icon: Database,
  },
];

export const lifecycleFlow = [
  {
    title: "Deploy",
    description: "Provisioning server, DNS, SSL, container, dan release workflow.",
    icon: ServerCog,
  },
  {
    title: "Monitor",
    description: "Pantau uptime, resource, logs, dan alert penting.",
    icon: BarChart3,
  },
  {
    title: "Secure",
    description: "Hardening server, firewall, access policy, patching, dan backup review.",
    icon: ShieldCheck,
  },
  {
    title: "Scale",
    description: "Optimasi arsitektur, resource planning, dan kesiapan growth.",
    icon: ArrowUpRight,
  },
];

export const industries = [
  "SME dan perusahaan operasional",
  "SaaS dan software house",
  "ERP dan sistem bisnis internal",
  "E-commerce dan portal digital",
  "Tim teknologi yang butuh partner infra",
  "Perusahaan multi-site dan hybrid setup",
];

export const findServiceBySlug = (slug?: string) =>
  services.find((service) => service.slug === slug);

export const enterpriseServices = enterpriseSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is ServiceItem => Boolean(service));

export const navItems = [
  { label: "Beranda", path: "/" },
  { label: "Harga", path: "/harga" },
  { label: "Layanan", path: "/layanan" },
  { label: "Tentang", path: "/tentang" },
  { label: "Kontak", path: "/kontak" },
];
export const productNavItems = liveProducts
  .filter((product) => ["ai-gateway", "coding-plan", "api-store", "domain"].includes(product.id))
  .map((product) => ({ label: product.id === "coding-plan" ? "Coding" : product.short, path: product.path! }));
export const navigation = { productsLabel: "Produk", products: productNavItems, items: navItems, login: { label: "Masuk", url: platformUrl } };
export const footerCopy = { copyright: `© ${lastVerified.slice(0, 4)} ${siteName}`, billing: "Saldo rupiah, top-up melalui QRIS" };
export const heroContent = {
  title: platformName,
  headline: "Akses AI, bangun aplikasi Anda.",
  description: `Satu API key untuk ${formatNumber(modelCount)} model dengan billing rupiah, dibuat di Indonesia.`,
  primaryCta: { label: "Daftar gratis", url: platformUrl },
  secondaryCta: { label: "Lihat harga", path: "/harga" },
};
export const orvixOne = {
  name: "Orvix One",
  status: "segera" as const,
  label: "Segera hadir",
  description: "Asisten AI untuk semua orang, di HP dan desktop.",
  ctaLabel: "Kabari saya",
  interestUrl: `${whatsappUrl}?text=${encodeURIComponent("Halo Orvix, kabari saya saat Orvix One hadir.")}`,
};
export const enterpriseScopeNote = "Layanan enterprise dikerjakan sesuai ruang lingkup proyek yang disepakati. Daftar layanan ini bukan daftar fitur self-serve Orvix Cloud Platform.";

export const contactCopy =
  "Mau mulai dari platform atau butuh setup enterprise? Ceritakan aplikasi, workload, dan kendala yang sedang Anda hadapi.";

export const trustIntro =
  "Cloud platform untuk developer, dengan opsi enterprise untuk workload yang butuh penanganan langsung.";

export const finalCta =
  "Mulai dengan AI Gateway, paket AI dan coding, API Store, atau domain di platform. Hubungi tim Orvix untuk mendiskusikan kebutuhan enterprise.";
export const pricingFootnote = pricingCopy.footnote;

export type FaqItem = { question: string; answer: string };
export const pricingFaqs: FaqItem[] = [
  {
    question: "Apa itu token, dan bagaimana pemakaiannya dihitung?",
    answer: `Token adalah unit pemrosesan teks oleh model AI. ${pricingCopy.tokenRate}`,
  },
  {
    question: "Apa bedanya Token Plan, AI Plan, dan Coding Plan?",
    answer: `Token Plan adalah paket token dengan tarif pemakaian per model. AI Plan berlaku ${formatValidity(aiPlan.validityDays)} dengan fair use. Coding Plan menyediakan ${formatTokens(codingPlan.tokens)} selama ${formatValidity(codingPlan.validityDays)} untuk coding agent melalui plugin dan endpoint khusus.`,
  },
  {
    question: "Apakah AI Plan benar-benar tanpa batas?",
    answer: `AI sepuasnya tetap mengikuti fair use: ${pricingCopy.fairUse} ${aiPlan.lineupNote}`,
  },
  {
    question: "Apakah token memiliki masa berlaku?",
    answer: "Paket Token Plan memiliki masa berlaku. Flame, Blaze, dan Inferno juga menyediakan pilihan tanpa kedaluwarsa dengan kuota berbeda pada harga paket yang sama. Pilih varian yang sesuai di platform.",
  },
  {
    question: "Bagaimana cara membayar?",
    answer: "Isi saldo rupiah per organisasi melalui QRIS di platform. Harga paket ditampilkan dalam rupiah, sehingga Anda tidak perlu mengonversi harga paket dari mata uang asing.",
  },
];
export const faqs: FaqItem[] = [
  ...pricingFaqs,
  {
    question: "Apakah API-nya kompatibel dengan OpenAI?",
    answer: "Ya, AI Gateway menyediakan API kompatibel OpenAI. Lihat dokumentasi Orvix untuk konfigurasi integrasi dan pilihan model.",
  },
  {
    question: "Apa bedanya platform dan layanan enterprise?",
    answer: "Platform menyediakan AI Gateway, paket AI dan coding, Image Credits, API Store, serta domain. Layanan enterprise adalah jalur diskusi untuk kebutuhan migrasi, server internal, dan arsitektur khusus sesuai lingkup proyek.",
  },
  {
    question: "Apakah Managed Database dan Deploy sudah tersedia?",
    answer: "Belum. Keduanya masih dalam roadmap dan ditandai Segera. Lihat bagian roadmap untuk produk yang belum tersedia.",
  },
];
