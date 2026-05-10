import { ArrowRight, CircleDot, ShieldCheck } from "lucide-react";
import { heroBadges, heroMetrics, serviceCategories, whatsappUrl } from "@/data/siteContent";

const HeroSection = () => (
  <section className="infra-shell relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
    <div className="pointer-events-none absolute left-[-6rem] top-24 h-72 w-72 rounded-full radial-glow blur-3xl" />
    <div className="pointer-events-none absolute right-[-4rem] top-40 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.22),transparent_70%)] blur-3xl" />

    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
          <CircleDot size={12} className="text-primary" />
          <span className="section-eyebrow text-text-muted">
            Cloud Infrastructure • DevOps • Hybrid Platform
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[5.5rem]">
          Cloud Infrastructure
          <span className="block text-white/78">Built for Modern Teams</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
          Orvix.id merancang, mendeploy, mengamankan, dan merawat workload cloud untuk bisnis yang
          membutuhkan platform production-ready tanpa operasional yang terasa berat.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_rgba(34,211,238,0.22)] transition hover:-translate-y-0.5"
          >
            Konsultasi Infrastruktur
          </a>
          <a
            href="#services"
            className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/35 hover:text-primary"
          >
            Lihat Layanan
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {heroBadges.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-text-secondary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="gradient-stroke aurora-panel rounded-[2rem] p-6 sm:p-7">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#07111f]/90 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-text-muted">
                    Deployment Surface
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-foreground">
                    Platform overview
                  </h2>
                </div>
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <ShieldCheck size={20} />
                </div>
              </div>

              <div className="mt-6 rounded-[1.4rem] border border-cyan-400/10 bg-[linear-gradient(180deg,rgba(8,15,28,0.95),rgba(12,20,36,0.75))] p-4">
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>control-plane</span>
                  <span>healthy</span>
                </div>
                <div className="mt-5 grid gap-3">
                  <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <span className="text-sm text-foreground">Cloud workloads</span>
                    <span className="text-xs text-primary">online</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <span className="text-sm text-foreground">Backup & storage</span>
                    <span className="text-xs text-violet-300">synced</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <span className="text-sm text-foreground">Observability stack</span>
                    <span className="text-xs text-sky-300">active</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {serviceCategories.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-text-secondary"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {heroMetrics.map((item) => (
                <div key={item.label} className="metric-card p-5">
                  <p className="text-2xl font-semibold tracking-tight text-foreground">{item.value}</p>
                  <p className="mt-2 text-sm font-medium text-primary">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="gradient-stroke aurora-panel rounded-[2rem] p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Operating model</p>
            <div className="mt-5 space-y-4">
              {[
                "Deploy workload dengan arsitektur yang lebih bersih dan terdokumentasi.",
                "Monitor performa, logs, dan incident signals dengan observability yang jelas.",
                "Secure dan maintain platform secara rutin tanpa membebani tim internal.",
              ].map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="gradient-stroke rounded-[2rem] bg-[linear-gradient(135deg,rgba(16,24,48,0.96),rgba(30,41,85,0.92))] p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-violet-200/70">Orvix.id fit</p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">
              Untuk bisnis yang butuh partner cloud, bukan sekadar vendor support.
            </h2>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              Relevan untuk SaaS, ERP, aplikasi internal, platform AI, dan workload yang perlu
              deployment stabil, access control, backup, serta maintenance berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
