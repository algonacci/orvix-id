import { ArrowRight, Check, CircleDot, Code2, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import { heroBadges, heroContent, heroMetrics, platformUrl } from "@/data/siteContent";
import { billing, gatewayIntegration } from "@/data/products";

const HeroSection = () => (
  <section className="infra-shell relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24">
    <div className="hero-orb hero-orb-blue" />
    <div className="hero-orb hero-orb-purple" />
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-2 text-xs text-text-secondary">
            <CircleDot size={11} className="text-emerald-300" />
            {heroContent.title} · AI-first
          </div>
          <h1 className="mt-6 text-[3rem] font-bold leading-[0.98] tracking-[-0.065em] text-foreground sm:text-[3.8rem] lg:text-[4.3rem]">
            Akses AI,{" "}
            <span className="hero-gradient-text mt-2 block">bangun aplikasi Anda.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-text-secondary sm:leading-8">{heroContent.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={heroContent.primaryCta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#eafbff,#a8ebff)] px-6 text-sm font-semibold text-[#07111c] shadow-[0_10px_38px_rgba(64,220,255,0.2)] transition hover:-translate-y-0.5"
            >
              {heroContent.primaryCta.label} <ArrowRight size={16} />
            </a>
            <Link
              to={heroContent.secondaryCta.path}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.035] px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-white/25"
            >
              {heroContent.secondaryCta.label} <ArrowRight size={16} />
            </Link>
          </div>
          <p className="mt-5 text-xs text-text-muted">Pendaftaran gratis. Pemakaian mengikuti paket dan tarif yang dipilih.</p>
        </div>

        <div className="gradient-stroke rounded-[1.4rem] p-px">
          <div className="deployment-window rounded-[1.35rem]">
            <div className="deployment-window-bar">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span>orvix / ai-gateway</span>
              <Code2 size={14} />
            </div>
            <div className="p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Satu pintu ke AI</p>
                  <p className="mt-1 text-xs text-text-muted">API kompatibel OpenAI untuk aplikasi Anda</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                  <Check size={11} /> Live
                </span>
              </div>
              <div className="mt-6 rounded-xl border border-white/10 bg-[#070d18] p-4 font-mono text-[11px] leading-6 text-text-secondary">
                <p className="mb-3 text-text-muted">Konfigurasi integrasi</p>
                <p className="break-all"><span className="text-primary">baseURL</span>: <span className="text-foreground">{gatewayIntegration.baseUrl}</span></p>
                <p><span className="text-primary">model</span>: <span className="text-emerald-200">{gatewayIntegration.model}</span></p>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {heroMetrics.slice(1).map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
                    <p className="text-xs font-medium text-foreground">{metric.value}</p>
                    <p className="mt-1 text-[10px] text-text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
              <a href={platformUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-cyan-200">
                Buka platform <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">
        {heroMetrics.map((metric, index) => (
          <div key={metric.label} className={`px-4 py-6 sm:px-7 ${index % 2 ? "border-l border-white/10" : ""} ${index > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${index === 2 ? "lg:border-l" : ""}`}>
            <strong className="block text-lg font-semibold tracking-tight text-foreground sm:text-xl">{metric.value}</strong>
            <span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-text-muted">{metric.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {heroBadges.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-text-muted">{item}</span>)}
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-text-muted"><WalletCards size={14} className="text-primary" />{billing.title} · {billing.paymentMethod}</div>
    </div>
  </section>
);

export default HeroSection;
