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
  Lock,
  ServerCog,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

export const siteName = "Orvix.id";
export const siteTitle = "Orvix.id - Cloud & Managed Infrastructure Services";
export const siteDescription =
  "Orvix.id membantu setup, deploy, monitor, secure, dan maintain infrastruktur cloud agar workload bisnis lebih stabil dan mudah diawasi.";
export const siteUrl = "https://orvix.id";
export const whatsappNumber = "6282125609413";
export const whatsappDisplay = "0821-2560-9413";
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;
export const emailPlaceholder = "hello@orvix.id";
export const locationLabel = "Jakarta, Indonesia";

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

export const heroBadges = [
  "Managed Cloud",
  "Cloud Migration",
  "Managed Hosting",
  "DevOps & CI/CD",
  "Monitoring & Security",
  "Hybrid Cloud",
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

export const heroMetrics: MetricItem[] = [
  {
    value: "Deploy-ready",
    label: "Cloud foundation",
    detail: "Server, DNS, SSL, dan akses disiapkan lebih rapi sejak awal.",
  },
  {
    value: "Hybrid-ready",
    label: "Infrastructure scope",
    detail: "Dari VPS dan cloud publik sampai private platform dan on-prem.",
  },
  {
    value: "Observability-first",
    label: "Operational layer",
    detail: "Monitoring, logs, dan alert penting dibuat lebih mudah dibaca.",
  },
  {
    value: "Monthly managed",
    label: "Support model",
    detail: "Cocok untuk tim yang butuh partner teknis, bukan reseller semata.",
  },
];

export const infrastructureMetrics: MetricItem[] = [
  {
    value: "Rapi",
    label: "Operasional lebih jelas",
    detail: "Akses, backup, monitoring, dan perubahan minor lebih mudah ditelusuri.",
  },
  {
    value: "Terpantau",
    label: "Visibilitas workload",
    detail: "Tim bisa melihat uptime, resource, logs, dan alert penting lebih cepat.",
  },
  {
    value: "Aman",
    label: "Security baseline",
    detail: "Hardening, patching, access review, dan backup review berjalan lebih disiplin.",
  },
  {
    value: "Scale-ready",
    label: "Fondasi bertumbuh",
    detail: "Arsitektur lebih siap dikembangkan saat aplikasi dan beban kerja naik.",
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
      "Orvix.id membantu tim menjalankan cloud yang lebih rapi, aman, dan stabil tanpa menambah beban operasional harian.",
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
      "Migrasi website, aplikasi, database, dan file ke platform yang lebih siap scale.",
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
      "Consolidation beberapa server lama ke platform yang lebih efisien",
      "Replatforming untuk kebutuhan skala dan reliability yang lebih baik",
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
      "Kami menggabungkan observability dan security baseline supaya masalah lebih cepat terlihat dan eksposur publik lebih terkontrol.",
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
      "Setup managed database, object storage, dan scaling dasar",
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
      "Managed database/storage",
      "Support scope sesuai kebutuhan",
    ],
  },
];

export const whyOrvix = [
  {
    title: "Pengalaman infrastruktur yang praktis",
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
      "Layanan dibangun untuk bisnis berkembang yang memerlukan reliability tanpa harus langsung membentuk tim infra internal lengkap.",
    icon: LaptopMinimalCheck,
  },
  {
    title: "Fleksibel di AWS, VPS, Cloudflare, Docker, dan Proxmox",
    description:
      "Kami bisa menyesuaikan platform dengan kebutuhan teknis dan anggaran, termasuk setup hybrid bila diperlukan.",
    icon: ArrowUpRight,
  },
  {
    title: "Monthly managed support tersedia",
    description:
      "Setelah deployment, Orvix.id dapat lanjut membantu maintenance, review perubahan, backup, monitoring, dan advisory berkala.",
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

export const navItems = [
  { label: "Beranda", path: "/" },
  { label: "Layanan", path: "/services" },
  { label: "Tentang", path: "/about" },
  { label: "Kontak", path: "/contact" },
];

export const contactCopy =
  "Ceritakan kondisi server, aplikasi, atau cloud yang sedang berjalan. Orvix.id bantu review dan susun langkah teknis yang paling masuk akal.";

export const trustIntro =
  "Managed infrastructure partner untuk bisnis yang butuh deployment rapi, server terkelola, dan operasional yang mudah diawasi.";

export const finalCta =
  "Ceritakan kondisi server, aplikasi, atau cloud yang sedang berjalan. Orvix.id bantu review dan susun langkah teknis yang paling masuk akal.";

export const faqs = [
  {
    question: "Apa saja yang bisa dikelola Orvix.id?",
    answer:
      "Orvix.id menangani cloud server, VPS, deployment aplikasi, container, database, DNS, SSL, backup, monitoring, dan security baseline sesuai kebutuhan workload.",
  },
  {
    question: "Apakah bisa membantu migrasi dari server atau hosting lama?",
    answer:
      "Bisa. Proses dimulai dari assessment dependency dan data, dilanjutkan testing, cutover terencana, validasi, serta monitoring setelah migrasi.",
  },
  {
    question: "Apakah tersedia maintenance bulanan?",
    answer:
      "Tersedia untuk kebutuhan patching, backup review, monitoring, access review, kapasitas, troubleshooting, dan perubahan operasional minor.",
  },
  {
    question: "Apakah Orvix.id hanya bekerja dengan satu cloud provider?",
    answer:
      "Tidak. Arsitektur dapat menggunakan VPS, public cloud, Cloudflare, Proxmox, atau kombinasi hybrid berdasarkan kebutuhan teknis dan anggaran.",
  },
  {
    question: "Bagaimana memulai konsultasi?",
    answer:
      "Ceritakan aplikasi, server, kendala, dan target Anda melalui WhatsApp. Kami akan membantu memetakan kondisi awal dan langkah implementasi yang paling masuk akal.",
  },
];
