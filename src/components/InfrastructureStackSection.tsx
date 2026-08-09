import {
  Activity,
  Check,
  Database,
  GitBranch,
  KeyRound,
  Radio,
  RotateCcw,
  Server,
} from "lucide-react";
import { stackItems } from "@/data/siteContent";

const operations = [
  {
    title: "Git-based Deployment",
    description: "Release aplikasi dari repository dengan proses build dan rollback yang lebih konsisten.",
    icon: GitBranch,
    visual: (
      <div className="ops-panel">
        <div className="ops-row">
          <span className="inline-flex min-w-0 items-center gap-2 text-text-secondary">
            <i className="ops-dot bg-emerald-300 shadow-[0_0_8px_#6ee7b7]" />
            <span className="truncate">orvix/business-app</span>
          </span>
          <b className="inline-flex items-center gap-1 font-normal text-emerald-300">
            <Check size={11} /> Connected
          </b>
        </div>
        <div className="ops-row">
          <code className="truncate text-text-secondary">main</code>
          <small className="text-text-muted">deployment ready</small>
        </div>
        <div className="ops-row">
          <code className="truncate text-text-secondary">a82c1f</code>
          <small className="text-text-muted">12s ago</small>
        </div>
      </div>
    ),
  },
  {
    title: "Monitoring & Logs",
    description: "Uptime, resource, latency, dan log penting dibuat lebih mudah dibaca oleh tim.",
    icon: Activity,
    visual: (
      <div className="ops-panel">
        {[
          { time: "12:04", method: "GET", path: "/health", status: "200" },
          { time: "12:05", method: "GET", path: "/api/orders", status: "200" },
          { time: "12:06", method: "POST", path: "/api/sync", status: "201" },
        ].map((line) => (
          <div key={line.time} className="ops-log">
            <time className="text-text-muted">{line.time}</time>
            <span className="text-primary">{line.method}</span>
            <code className="truncate text-text-secondary">{line.path}</code>
            <b className="text-right font-normal text-emerald-300">{line.status}</b>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Environment Security",
    description: "Secret, akses administratif, firewall, dan konfigurasi environment dikelola lebih disiplin.",
    icon: KeyRound,
    visual: (
      <div className="ops-panel">
        <div className="ops-row">
          <span className="inline-flex min-w-0 items-center gap-2 text-text-secondary">
            <i className="ops-dot bg-emerald-300 shadow-[0_0_8px_#6ee7b7]" />
            <span className="truncate">Production</span>
          </span>
          <small className="text-text-muted">Encrypted</small>
        </div>
        <div className="ops-row">
          <code className="truncate text-text-secondary">DATABASE_URL</code>
          <b className="font-normal tracking-wider text-slate-600">••••••••••</b>
        </div>
        <div className="ops-row">
          <code className="truncate text-text-secondary">API_SECRET</code>
          <b className="font-normal tracking-wider text-slate-600">••••••••••</b>
        </div>
      </div>
    ),
  },
  {
    title: "Backup & Recovery",
    description: "Backup tidak berhenti di jadwal, tetapi dilengkapi retensi dan verifikasi restore.",
    icon: RotateCcw,
    visual: (
      <div className="ops-panel">
        <div className="ops-row">
          <span className="inline-flex min-w-0 items-center gap-2 text-text-secondary">
            <i className="ops-dot bg-emerald-300 shadow-[0_0_8px_#6ee7b7]" />
            <span className="truncate">backup_0726</span>
          </span>
          <b className="inline-flex items-center gap-1 font-normal text-emerald-300">
            <Check size={11} /> Verified
          </b>
        </div>
        <div className="ops-row">
          <code className="truncate text-text-secondary">Retensi</code>
          <small className="text-text-muted">30 hari</small>
        </div>
        <div className="ops-row">
          <code className="truncate text-text-secondary">Restore terakhir</code>
          <small className="text-text-muted">2 jam lalu</small>
        </div>
      </div>
    ),
  },
];

const InfrastructureStackSection = () => (
  <section id="stack" className="relative overflow-hidden bg-[#080d17] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
    <div className="stack-glow" />
    <div className="relative mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-eyebrow text-primary">Operational Stack</span>
        <h2 className="section-title mt-4">Tools modern, alur tetap sederhana.</h2>
        <p className="section-copy mx-auto mt-5 max-w-2xl">
          Orvix.id menghubungkan deployment, observability, security, dan recovery agar operasional
          tidak tersebar di banyak proses manual.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {operations.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="ops-card">
              <div className="mb-7 flex gap-4">
                <span className="why-icon shrink-0"><Icon size={20} /></span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-text-secondary">{item.description}</p>
                </div>
              </div>
              {item.visual}
            </article>
          );
        })}
      </div>

      <div className="mt-12 border-y border-white/10 py-8">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-text-muted">
          Flexible technology foundation
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {stackItems.map((item, index) => {
            const Icon = index % 4 === 0 ? Server : index % 4 === 1 ? Database : index % 4 === 2 ? Radio : Activity;
            return (
              <span key={item} className="stack-pill">
                <Icon size={13} /> {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default InfrastructureStackSection;
