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
      <div className="ops-repository">
        <div><span><i /> orvix/business-app</span><b><Check size={11} /> Connected</b></div>
        <div className="mt-3"><code>main</code><span>deployment ready</span><small>12s ago</small></div>
      </div>
    ),
  },
  {
    title: "Monitoring & Logs",
    description: "Uptime, resource, latency, dan log penting dibuat lebih mudah dibaca oleh tim.",
    icon: Activity,
    visual: (
      <div className="ops-logs">
        <div><time>12:04</time><span>GET</span><code>/health</code><b>200</b></div>
        <div><time>12:05</time><span>GET</span><code>/api/orders</code><b>200</b></div>
        <div><time>12:06</time><span>POST</span><code>/api/sync</code><b>201</b></div>
      </div>
    ),
  },
  {
    title: "Environment Security",
    description: "Secret, akses administratif, firewall, dan konfigurasi environment dikelola lebih disiplin.",
    icon: KeyRound,
    visual: (
      <div className="ops-environment">
        <div><span><i /> Production</span><small>Encrypted</small></div>
        <p><code>DATABASE_URL</code><b>••••••••••</b></p>
        <p><code>API_SECRET</code><b>••••••••••</b></p>
      </div>
    ),
  },
  {
    title: "Backup & Recovery",
    description: "Backup tidak berhenti di jadwal, tetapi dilengkapi retensi dan verifikasi restore.",
    icon: RotateCcw,
    visual: (
      <div className="ops-backup">
        <div><span className="bg-emerald-300" /><code>backup_0726</code><small>Verified</small></div>
        <i />
        <div><span className="bg-primary" /><code>production</code><small>Protected</small></div>
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
              <div className="flex gap-4">
                <span className="why-icon shrink-0"><Icon size={20} /></span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-text-secondary">{item.description}</p>
                </div>
              </div>
              <div className="mt-auto pt-7">{item.visual}</div>
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
