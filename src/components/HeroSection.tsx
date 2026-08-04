import {
  Activity,
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Cpu,
  Globe2,
  HardDriveDownload,
  Lock,
  MemoryStick,
  Server,
  ShieldCheck,
} from "lucide-react";
import { heroBadges, heroMetrics, platformUrl } from "@/data/siteContent";

const graphBars = [22, 34, 29, 48, 42, 66, 51, 76, 61, 85, 72, 91, 78, 88];

const DeploymentDashboard = () => (
  <div className="deployment-window" aria-label="Preview dashboard infrastruktur Orvix.id">
    <div className="deployment-window-bar">
      <div className="window-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <span>orvix / production</span>
      <span className="rounded border border-white/10 px-2 py-1">⌘ K</span>
    </div>

    <div className="p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/15 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
            <Check size={12} /> Infrastructure healthy
          </span>
          <h2 className="mt-4 text-lg font-semibold text-foreground sm:text-xl">business-production</h2>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-text-muted">
            <Globe2 size={13} /> app.orvix.id <ChevronRight size={12} />
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" />
          Live
        </div>
      </div>

      <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
        <span className="deployment-progress block h-full rounded-full bg-[linear-gradient(90deg,#4de4ff,#5b8cff,#9b72ff)]" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { label: "SSL", value: "Enabled", icon: Lock },
          { label: "Region", value: "Jakarta", icon: Server },
          { label: "CPU", value: "18%", icon: Cpu },
          { label: "Memory", value: "246 MB", icon: MemoryStick },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
              <Icon size={14} className="text-primary" />
              <span className="mt-3 block text-[10px] text-text-muted">{item.label}</span>
              <strong className="mt-1 block text-xs font-medium text-foreground">{item.value}</strong>
            </div>
          );
        })}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
          <div className="flex items-center gap-2 text-[11px] text-text-muted">
            <Activity size={13} /> Traffic · 24h
          </div>
          <div className="deployment-graph mt-5 flex h-20 items-end gap-1.5" aria-hidden="true">
            {graphBars.map((height, index) => (
              <i key={index} style={{ height: `${height}%`, animationDelay: `${index * 45}ms` }} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
          <p className="text-[11px] text-text-muted">Deployment history</p>
          <div className="mt-4 space-y-3">
            {["a82c1f · production", "f093de · staging", "7a26bc · backup"].map((item, index) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-emerald-300" : "bg-slate-600"}`} />
                <div className="min-w-0">
                  <code className="block truncate text-[10px] text-text-secondary">{item}</code>
                  <small className="text-[9px] text-text-muted">{index === 0 ? "Just now" : `${index + 2}h ago`}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-white/10 bg-[#070c15] p-3 font-mono text-[10px] text-text-muted">
        <span className="text-slate-600">12:04:18</span> GET /api/health <b className="text-emerald-300">200</b> 18ms
      </div>
    </div>
  </div>
);

const HeroSection = () => (
  <section className="infra-shell relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 sm:pt-40 lg:px-8 lg:pb-28 lg:pt-44">
    <div className="hero-orb hero-orb-blue" />
    <div className="hero-orb hero-orb-purple" />

    <div className="mx-auto max-w-7xl">
      <div className="grid gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-2 text-xs text-text-secondary">
            <CircleDot size={11} className="text-emerald-300" />
            Build. Deploy. Monitor. Scale.
            <ChevronRight size={13} />
          </div>

          <h1 className="mt-7 text-[3.25rem] font-bold leading-[0.98] tracking-[-0.065em] text-foreground sm:text-6xl lg:text-[4.7rem]">
            Infrastruktur bisnis,
            <span className="hero-gradient-text mt-2 block">siap dalam hitungan hari.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
            Orvix.id membantu setup, deploy, monitor, secure, dan maintain cloud, server, serta
            workload bisnis tanpa operasional infrastruktur yang rumit.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={platformUrl}
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#eafbff,#a8ebff)] px-6 text-sm font-semibold text-[#07111c] shadow-[0_10px_38px_rgba(64,220,255,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_42px_rgba(64,220,255,0.3)]"
            >
              Ke Platform Orvix <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.035] px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
            >
              Lihat Layanan <Server size={16} />
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3 text-xs text-text-muted">
            <span className="flex -space-x-2">
              {[ShieldCheck, HardDriveDownload, Activity].map((Icon, index) => (
                <i key={index} className="grid h-7 w-7 place-items-center rounded-full border-2 border-background bg-[#17243a] text-primary">
                  <Icon size={12} />
                </i>
              ))}
            </span>
            Dari assessment pertama sampai maintenance bulanan
          </div>
        </div>

        <div className="relative lg:pl-2">
          <DeploymentDashboard />
          <div className="hero-float-card -left-6 bottom-16 hidden sm:flex">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-300/10 text-emerald-300"><Check size={15} /></span>
            <div><small>Backup verified</small><b>Recovery point ready</b></div>
          </div>
          <div className="hero-float-card -right-5 top-20 hidden sm:flex">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary"><Check size={15} /></span>
            <div><small>Monitoring</small><b>All systems healthy</b></div>
          </div>
        </div>
      </div>

      <div className="mt-20 border-y border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((item, index) => (
            <div key={item.label} className={`px-4 py-7 text-center sm:px-7 ${index % 2 ? "border-l border-white/10" : ""} ${index > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${index === 2 ? "lg:border-l" : ""}`}>
              <strong className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{item.value}</strong>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {heroBadges.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-text-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
