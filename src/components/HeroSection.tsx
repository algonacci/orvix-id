import { ArrowRight, CircleDot, ShieldCheck, Activity, Server, HardDriveDownload } from "lucide-react";
import { heroBadges, heroMetrics, serviceCategories, whatsappUrl } from "@/data/siteContent";

const HeroSection = () => (
  <section className="infra-shell relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8">
    <div className="pointer-events-none absolute left-[-6rem] top-24 h-72 w-72 rounded-full radial-glow blur-3xl" />
    <div className="pointer-events-none absolute right-[-4rem] top-40 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.22),transparent_70%)] blur-3xl" />

    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
            <CircleDot size={12} className="text-primary" />
            <span className="section-eyebrow text-text-muted">
              Managed Infrastructure / Cloud / Hybrid Platform
            </span>
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[4.6rem]">
            Managed infrastructure
            <span className="mt-2 block text-white/78">untuk bisnis modern.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary sm:text-lg">
            Setup, deploy, monitor, dan maintain cloud atau server tanpa operasional yang berantakan.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
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

          <div className="mt-7 flex flex-wrap gap-2">
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

        <div className="gradient-stroke aurora-panel rounded-[2rem] p-5 sm:p-6">
          <div className="rounded-[1.6rem] border border-cyan-400/10 bg-[linear-gradient(180deg,rgba(8,15,28,0.98),rgba(14,23,44,0.9))] p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Operational View</p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">Infrastructure fit</h2>
              </div>
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <ShieldCheck size={20} />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Deployment", state: "ready", icon: Server },
                { label: "Monitoring", state: "active", icon: Activity },
                { label: "Backup", state: "covered", icon: HardDriveDownload },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="rounded-xl bg-white/[0.05] p-2 text-primary">
                        <Icon size={16} />
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
                        {item.state}
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-medium text-foreground">{item.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {serviceCategories.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text-secondary"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {heroMetrics.slice(0, 2).map((item) => (
              <div key={item.label} className="metric-card p-5">
                <p className="text-2xl font-semibold tracking-tight text-foreground">{item.value}</p>
                <p className="mt-2 text-sm font-medium text-primary">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="gradient-stroke aurora-panel rounded-[1.75rem] p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Operating model</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              "Deploy dan setup lebih rapi.",
              "Monitor dan secure lebih jelas.",
              "Maintain tanpa membebani tim.",
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-text-secondary">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gradient-stroke rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(16,24,48,0.96),rgba(30,41,85,0.92))] p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-violet-200/70">Orvix.id fit</p>
          <p className="mt-3 text-lg font-semibold leading-8 text-foreground">
            Hands-on partner untuk UKM, SaaS, ERP, dan aplikasi internal.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
