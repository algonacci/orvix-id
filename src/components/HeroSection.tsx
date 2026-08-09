import {
  Activity,
  ArrowRight,
  Bot,
  Boxes,
  ChevronRight,
  CircleDot,
  Cpu,
  Database,
  Globe2,
  HardDrive,
  HardDriveDownload,
  MemoryStick,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { heroBadges, heroMetrics, platformUrl } from "@/data/siteContent";

const trafficSeries = [16, 24, 20, 31, 27, 39, 34, 47, 43, 57, 65, 56, 70, 77, 68, 83, 92, 86];

const SPARK_W = 100;
const SPARK_H = 34;

const sparkPath = (() => {
  const max = Math.max(...trafficSeries);
  const min = Math.min(...trafficSeries);
  const range = max - min || 1;
  const step = SPARK_W / (trafficSeries.length - 1);
  const points = trafficSeries.map((value, index) => [
    index * step,
    SPARK_H - ((value - min) / range) * (SPARK_H - 3) - 1.5,
  ]);

  return points.reduce((path, [x, y], index) => {
    if (index === 0) return `M${x.toFixed(2)},${y.toFixed(2)}`;
    const [prevX, prevY] = points[index - 1];
    const midX = (prevX + x) / 2;
    return `${path} C${midX.toFixed(2)},${prevY.toFixed(2)} ${midX.toFixed(2)},${y.toFixed(2)} ${x.toFixed(2)},${y.toFixed(2)}`;
  }, "");
})();

const resourceMeters = [
  { label: "CPU", value: "18%", fill: 18, icon: Cpu },
  { label: "Memory", value: "860 MB / 2 GB", fill: 42, icon: MemoryStick },
  { label: "Disk", value: "14 GB / 40 GB", fill: 35, icon: HardDrive },
];

const activityFeed = [
  { icon: Database, title: "Database provisioned", meta: "omd · business_prod", time: "now", live: true },
  { icon: Bot, title: "AI Gateway key created", meta: "ai-gateway · sk-orx-••••", time: "1h", live: false },
  { icon: HardDriveDownload, title: "Daily snapshot", meta: "omd · 1.8 GB", time: "4h", live: false },
];

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
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-display text-base font-semibold tracking-[-0.02em] text-foreground sm:text-lg">
            business-production
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-text-muted">
            <Globe2 size={12} className="shrink-0" />
            <span className="truncate">app.orvix.id</span>
            <span className="text-slate-700">/</span>
            <span className="font-mono">id-jkt-1</span>
            <ChevronRight size={11} className="shrink-0" />
          </p>
        </div>
        <div className="shrink-0 text-right">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
            <span className="status-pulse h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Operational
          </span>
          <p className="mt-1.5 font-mono text-[9px] text-text-muted">99.98% uptime · 30d</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2.5">
        <span className="shrink-0 text-[10px] font-medium text-text-muted">Rolling deploy</span>
        <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
          <span className="deployment-progress block h-full rounded-full bg-[linear-gradient(90deg,#4de4ff,#5b8cff,#9b72ff)]" />
        </span>
        <span className="shrink-0 font-mono text-[10px] text-primary">100%</span>
      </div>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-[11px] text-text-muted">
              <Activity size={12} /> Requests · 24h
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-300">
              <TrendingUp size={11} /> 12.4%
            </span>
          </div>
          <p className="mt-2.5 font-display text-xl font-semibold tracking-[-0.03em] text-foreground">1.24M</p>
          <svg
            viewBox={`0 0 ${SPARK_W} ${SPARK_H}`}
            preserveAspectRatio="none"
            className="mt-3 h-14 w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroSparkFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4de4ff" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#4de4ff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="heroSparkStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4de4ff" />
                <stop offset="100%" stopColor="#9b72ff" />
              </linearGradient>
            </defs>
            <path d={`${sparkPath} L${SPARK_W},${SPARK_H} L0,${SPARK_H} Z`} fill="url(#heroSparkFill)" />
            <path
              className="hero-spark-line"
              d={sparkPath}
              fill="none"
              stroke="url(#heroSparkStroke)"
              strokeWidth="1.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="mt-2 flex justify-between font-mono text-[9px] text-slate-600">
            <span>00:00</span>
            <span>12:00</span>
            <span>now</span>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
          <span className="text-[11px] text-text-muted">Resources</span>
          <div className="mt-3.5 space-y-3.5">
            {resourceMeters.map((meter) => {
              const Icon = meter.icon;
              return (
                <div key={meter.label}>
                  <div className="flex items-center justify-between gap-2 text-[10px]">
                    <span className="flex items-center gap-1.5 text-text-secondary">
                      <Icon size={11} className="text-primary" />
                      {meter.label}
                    </span>
                    <span className="font-mono text-text-muted">{meter.value}</span>
                  </div>
                  <span className="mt-1.5 block h-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <span
                      className="meter-fill block h-full rounded-full bg-[linear-gradient(90deg,#4de4ff,#5b8cff)]"
                      style={{ width: `${meter.fill}%` }}
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-2.5 rounded-xl border border-white/10 bg-white/[0.025] p-4">
        <span className="text-[11px] text-text-muted">Recent activity</span>
        <div className="mt-3 space-y-2.5">
          {activityFeed.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-2.5">
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-md border ${
                    item.live
                      ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-300"
                      : "border-white/10 bg-white/[0.04] text-text-muted"
                  }`}
                >
                  <Icon size={11} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-medium text-foreground">{item.title}</p>
                  <p className="truncate font-mono text-[9px] text-text-muted">{item.meta}</p>
                </div>
                <span className="shrink-0 font-mono text-[9px] text-slate-600">{item.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

const HeroSection = () => (
  <section className="infra-shell relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-28">
    <div className="hero-orb hero-orb-blue" />
    <div className="hero-orb hero-orb-purple" />

    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-2 text-xs text-text-secondary">
            <CircleDot size={11} className="text-emerald-300" />
            Orvix Cloud Platform
            <ChevronRight size={13} />
          </div>

          <h1 className="mt-6 text-[3rem] font-bold leading-[0.98] tracking-[-0.065em] text-foreground sm:text-[3.6rem] lg:text-[4.15rem]">
            Bangun dan deploy,
            <span className="hero-gradient-text mt-2 block">tanpa ngurus server.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-text-secondary sm:leading-8">
            Orvix Cloud Platform menyatukan managed database, AI gateway, storage, dan deployment
            dalam satu dashboard. Provisioning otomatis, kredensial langsung jadi, infrastruktur
            tetap di Indonesia.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#eafbff,#a8ebff)] px-6 text-sm font-semibold text-[#07111c] shadow-[0_10px_38px_rgba(64,220,255,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_42px_rgba(64,220,255,0.3)]"
            >
              Ke Platform Orvix <ArrowRight size={16} />
            </a>
            <a
              href="#platform"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.035] px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
            >
              Lihat Produk <Boxes size={16} />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-text-muted">
            <span className="flex -space-x-2">
              {[Database, Bot, ShieldCheck].map((Icon, index) => (
                <i key={index} className="grid h-7 w-7 place-items-center rounded-full border-2 border-background bg-[#17243a] text-primary">
                  <Icon size={12} />
                </i>
              ))}
            </span>
            Butuh setup khusus? Tim Orvix siap turun langsung
          </div>
        </div>

        <div className="lg:pl-2">
          <DeploymentDashboard />
        </div>
      </div>

      <div className="mt-14 border-y border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((item, index) => (
            <div key={item.label} className={`px-4 py-6 text-center sm:px-7 ${index % 2 ? "border-l border-white/10" : ""} ${index > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${index === 2 ? "lg:border-l" : ""}`}>
              <strong className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{item.value}</strong>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
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
