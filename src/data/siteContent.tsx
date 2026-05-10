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
  "Orvix.id membantu bisnis membangun, migrasi, deploy, mengamankan, memonitor, dan merawat infrastruktur cloud tanpa kompleksitas operasional.";
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
  "Managed Cloud Services",
  "Cloud Migration",
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
  "Managed server dan cloud yang lebih stabil untuk workload bisnis harian.",
  "Pendekatan praktis untuk UKM, SaaS, ERP, dan sistem internal perusahaan.",
  "Bisa mendampingi setup baru, migrasi, hardening, sampai maintenance bulanan.",
];

export const serviceCategories = [
  "AWS / VPS / cloud server",
  "Cloudflare / DNS / SSL",
  "Docker / Kubernetes / CI/CD",
  "Proxmox / private cloud / hybrid",
];

export const heroMetrics: MetricItem[] = [
  {
    value: "5-step",
    label: "Deployment workflow",
    detail: "Assessment, architecture, deployment, observability, maintenance.",
  },
  {
    value: "Hybrid-ready",
    label: "Infrastructure scope",
    detail: "Cloud publik, VPS, private cloud, sampai integrasi on-premise.",
  },
  {
    value: "Observability-first",
    label: "Operational layer",
    detail: "Monitoring, logs, alerting, dan review health sebagai baseline.",
  },
  {
    value: "Monthly managed",
    label: "Support model",
    detail: "Cocok untuk tim yang butuh partner infrastruktur jangka menengah.",
  },
];

export const infrastructureMetrics: MetricItem[] = [
  {
    value: "2-3x",
    label: "Deployment lebih efisien",
    detail: "Workflow rilis dan provisioning menjadi lebih cepat setelah proses distandardisasi.",
  },
  {
    value: "< 1 panel",
    label: "Operasional lebih terpusat",
    detail: "Monitoring, backup, dan akses bisa dikonsolidasikan ke arsitektur yang lebih rapi.",
  },
  {
    value: "24/7 signals",
    label: "Visibilitas workload",
    detail: "Alerting dan observability membantu tim melihat masalah lebih awal sebelum eskalasi.",
  },
  {
    value: "Scale-ready",
    label: "Arsitektur bertumbuh",
    detail: "Fondasi dibuat production-ready untuk workload yang perlu berkembang bertahap.",
  },
];

export const deploymentWorkflow: WorkflowItem[] = [
  {
    step: "01",
    title: "Assessment",
    description: "Menilai workload, trafik, stack, bottleneck, dan risiko operasional yang sudah ada.",
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Menyusun arsitektur deployment, akses, backup, security baseline, dan observability.",
  },
  {
    step: "03",
    title: "Deployment",
    description: "Provisioning server, container, service, domain, SSL, dan konfigurasi produksi.",
  },
  {
    step: "04",
    title: "Monitoring",
    description: "Menambahkan monitoring, logs, alerting, dan review kapasitas untuk menjaga reliability.",
  },
  {
    step: "05",
    title: "Maintenance",
    description: "Menjalankan patching, backup review, perubahan minor, dan advisory optimasi berkala.",
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
      "Pengelolaan server cloud, workload aplikasi, akses, patching, dan operasional rutin agar platform tetap stabil dan mudah diawasi.",
    intro:
      "Orvix.id membantu bisnis menjalankan infrastruktur cloud yang lebih tertata, aman, dan siap dipakai untuk workload produksi tanpa beban operasional harian yang berlebihan.",
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
    tech: ["Linux", "VPS", "Nginx", "Cloud Firewall", "Access Control"],
    icon: CloudCog,
    accent: "bg-svc-cyan",
  },
  {
    slug: "cloud-migration",
    path: "/services/cloud-migration",
    title: "Cloud Migration",
    shortTitle: "Migration",
    summary:
      "Migrasi aplikasi, database, file, dan workload bisnis dari shared hosting, server lama, atau on-premise ke platform cloud yang lebih layak.",
    intro:
      "Migrasi dilakukan bertahap dengan perhatian pada downtime, integritas data, dependency aplikasi, dan kesiapan rollback bila diperlukan.",
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
    tech: ["Cloud Migration", "Data Sync", "Cutover Plan", "Rollback", "DNS Switch"],
    icon: Waypoints,
    accent: "bg-svc-indigo",
  },
  {
    slug: "managed-hosting",
    path: "/services/managed-hosting",
    title: "Managed Hosting",
    shortTitle: "Hosting",
    summary:
      "Hosting terkelola untuk website, panel, email hosting, domain, DNS, SSL, dan deployment aplikasi ringan hingga menengah.",
    intro:
      "Layanan ini cocok untuk bisnis yang ingin hosting lebih terurus tanpa harus mengelola sisi server, domain, sertifikat, dan reliability sendiri.",
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
    tech: ["Cloudflare", "DNS", "SSL", "Hosting Panel", "Email Hosting"],
    icon: ServerCog,
    accent: "bg-svc-blue",
  },
  {
    slug: "devops-cicd",
    path: "/services/devops-cicd",
    title: "DevOps & CI/CD",
    shortTitle: "DevOps",
    summary:
      "Penyusunan pipeline deployment, environment staging, container workflow, dan proses rilis yang lebih konsisten untuk tim development.",
    intro:
      "Orvix.id membantu tim mengurangi deployment manual dan merapikan alur release agar perubahan aplikasi lebih aman dan lebih mudah ditelusuri.",
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
    tech: ["Docker", "CI/CD", "GitOps", "Staging", "Release Workflow"],
    icon: Boxes,
    accent: "bg-svc-purple",
  },
  {
    slug: "backup-disaster-recovery",
    path: "/services/backup-disaster-recovery",
    title: "Backup & Disaster Recovery",
    shortTitle: "Backup",
    summary:
      "Backup server, database, file, dan object storage dengan strategi restore dan recovery yang realistis untuk bisnis.",
    intro:
      "Backup yang baik bukan sekadar ada salinan data, tetapi ada prosedur restore, retensi, dan pemulihan yang benar-benar dipahami tim.",
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
    tech: ["Backup", "Restore Test", "Object Storage", "Retention", "DR Plan"],
    icon: HardDriveDownload,
    accent: "bg-svc-amber",
  },
  {
    slug: "monitoring-security",
    path: "/services/monitoring-security",
    title: "Monitoring & Security",
    shortTitle: "Security",
    summary:
      "Monitoring uptime, resource, logs, alerting, dan hardening server untuk menjaga reliability dan mengurangi blind spot operasional.",
    intro:
      "Kami menggabungkan observability dan security baseline supaya masalah bisa terlihat lebih cepat dan eksposur publik lebih mudah dikendalikan.",
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
    tech: ["Grafana", "Prometheus", "Logs", "Firewall", "Cloudflare"],
    icon: ShieldCheck,
    accent: "bg-svc-red",
  },
  {
    slug: "private-hybrid-cloud",
    path: "/services/private-hybrid-cloud",
    title: "Private / Hybrid Cloud",
    shortTitle: "Hybrid Cloud",
    summary:
      "Setup private cloud, virtualisasi, Proxmox cluster, dan integrasi hybrid antara on-premise dengan cloud publik.",
    intro:
      "Layanan ini dirancang untuk bisnis yang membutuhkan kontrol lebih besar terhadap data, resource lokal, atau integrasi antar lokasi dan cloud.",
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
    tech: ["Proxmox", "Virtualization", "Hybrid Cloud", "VPN", "Storage"],
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
    summary: "Fondasi awal untuk bisnis yang ingin mulai deploy di cloud dengan setup yang lebih rapi.",
    features: [
      "Initial cloud server setup",
      "Domain, DNS, dan SSL baseline",
      "Basic security hardening",
      "Deployment website atau app ringan",
    ],
  },
  {
    title: "Managed VPS",
    summary: "Pengelolaan VPS dan server aplikasi untuk bisnis yang butuh support operasional rutin.",
    features: [
      "Server maintenance bulanan",
      "Monitoring dasar dan backup",
      "Patching dan access review",
      "Support untuk perubahan minor",
    ],
  },
  {
    title: "Business Managed Cloud",
    summary: "Untuk workload bisnis yang mulai bergantung pada reliability, security, dan deployment yang lebih disiplin.",
    features: [
      "Managed cloud operations",
      "Monitoring dan security baseline",
      "Backup dan recovery workflow",
      "Monthly reporting dan advisory",
    ],
  },
  {
    title: "Hybrid Infrastructure",
    summary: "Menghubungkan server internal, private cloud, dan public cloud ke dalam arsitektur yang lebih menyatu.",
    features: [
      "Hybrid architecture planning",
      "Proxmox atau virtualisasi setup",
      "Cloud-to-on-prem integration",
      "Backup dan access segmentation",
    ],
  },
  {
    title: "Custom Enterprise Setup",
    summary: "Dirancang untuk kebutuhan yang lebih kompleks seperti SaaS, ERP, multi-service deployment, atau AI workload.",
    features: [
      "Custom architecture and deployment",
      "CI/CD dan container workflow",
      "Managed database dan storage",
      "Support scope sesuai requirement bisnis",
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
  "Hosting website perusahaan dan landing page bisnis",
  "Deployment ERP, SaaS, atau aplikasi operasional internal",
  "Server aplikasi internal untuk tim dan cabang",
  "Backup server dan offsite recovery storage",
  "Infrastruktur aplikasi AI dan API backend",
  "Deployment sistem multi-branch dan hybrid connectivity",
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
    description: "Provisioning server, container, DNS, SSL, dan release workflow yang lebih disiplin.",
    icon: ServerCog,
  },
  {
    title: "Monitor",
    description: "Observability untuk uptime, resource, logs, dan alerting agar workload tetap terlihat.",
    icon: BarChart3,
  },
  {
    title: "Secure",
    description: "Hardening, access policy, Cloudflare layer, patching, dan backup posture review.",
    icon: ShieldCheck,
  },
  {
    title: "Scale",
    description: "Optimasi arsitektur, resource planning, dan pengembangan platform untuk growth berikutnya.",
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
  "Konsultasikan kebutuhan cloud, server, backup, deployment, monitoring, security, atau managed infrastructure untuk bisnis Anda.";

export const trustIntro =
  "Managed Cloud & Infrastructure Partner untuk bisnis yang membutuhkan deployment andal, server terkelola, hosting aman, dan sistem yang siap bertumbuh.";

export const finalCta =
  "Butuh bantuan mengelola infrastruktur cloud Anda?";
