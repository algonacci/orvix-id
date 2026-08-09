import { ArrowRight, Check } from "lucide-react";
import {
  availableProducts,
  platformIntro,
  platformName,
  platformPillars,
  platformUrl,
  platformVision,
  roadmapProducts,
} from "@/data/siteContent";

const PlatformSection = () => (
  <section id="platform" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <span className="section-eyebrow text-text-muted">{platformName}</span>
        <h2 className="section-title mt-4">{platformVision}</h2>
        <p className="section-copy mt-4">{platformIntro}</p>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-3">
        {platformPillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Icon size={16} />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{pillar.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {availableProducts.map((product) => {
          const Icon = product.icon;
          return (
            <div key={product.name} className="bento-card relative overflow-hidden p-6">
              <div className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_70%)] blur-2xl" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${product.accent}`}>
                    <Icon size={22} className="text-foreground" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
                    {product.short}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{product.name}</h3>
                <p className="mt-1.5 text-sm font-medium text-primary">{product.tagline}</p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{product.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.points.map((point) => (
                    <span
                      key={point}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-text-secondary"
                    >
                      <Check size={11} className="text-primary" />
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-medium text-foreground">Roadmap</p>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">
            Dalam pengembangan
          </span>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {roadmapProducts.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-text-muted">
                  <Icon size={13} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium text-foreground">{product.name}</p>
                  <p className="mt-0.5 text-[11px] leading-5 text-text-muted">{product.tagline}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={platformUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#eafbff,#a8ebff)] px-6 text-sm font-semibold text-[#07111c] transition hover:-translate-y-0.5"
        >
          Mulai di platform <ArrowRight size={16} />
        </a>
        <p className="text-sm text-text-muted">Buat akun, provisioning resource pertama Anda sendiri.</p>
      </div>
    </div>
  </section>
);

export default PlatformSection;
