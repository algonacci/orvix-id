import { ArrowRight, Check, Gauge, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import {
  industries,
  infrastructureMetrics,
  whyOrvix,
} from "@/data/siteContent";

const FeatureArt = ({ index }: { index: number }) => {
  if (index === 0) {
    return (
      <div className="why-art-bars" aria-hidden="true">
        <i /><i /><i /><i /><i />
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="why-art-topology" aria-hidden="true">
        <i /><i /><i /><span /><span /><span />
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="why-art-status" aria-hidden="true">
        <span><i /> SME</span><span><i /> SaaS</span><span><i /> ERP</span>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="why-art-platforms" aria-hidden="true">
        <span>AWS</span><span>VPS</span><span>Docker</span><span>Proxmox</span>
      </div>
    );
  }

  return (
    <div className="why-art-support" aria-hidden="true">
      <span><Check size={12} /> Monitoring aktif</span>
      <span><Check size={12} /> Backup terverifikasi</span>
    </div>
  );
};

const WhyOrvixSection = () => (
  <section id="why-orvix" className="infra-shell overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-eyebrow text-primary">Why Orvix</span>
        <h2 className="section-title mt-4">Infrastruktur yang bekerja untuk bisnis, bukan sebaliknya.</h2>
        <p className="section-copy mx-auto mt-5 max-w-2xl">
          Pendekatan hands-on untuk membantu tim memiliki deployment yang rapi, operasional yang
          terlihat, dan fondasi yang siap berkembang.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {whyOrvix.map((item, index) => {
          const Icon = item.icon;
          const placement = index < 3
            ? "lg:col-span-2"
            : index === 3
              ? "lg:col-span-3"
              : "lg:col-span-3";

          return (
            <article key={item.title} className={`why-card group ${placement}`}>
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="why-icon"><Icon size={20} /></span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-text-muted">0{index + 1}</span>
                </div>
                <h3 className="mt-6 max-w-sm text-lg font-semibold leading-7 text-foreground">{item.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-text-secondary">{item.description}</p>
              </div>
              <FeatureArt index={index} />
            </article>
          );
        })}
      </div>

      <div className="mt-16 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4">
        {infrastructureMetrics.map((metric, index) => (
          <div key={metric.label} className={`p-6 text-center ${index ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""} ${index === 2 ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0" : ""}`}>
            <strong className="hero-gradient-text text-2xl font-semibold tracking-tight">{metric.value}</strong>
            <span className="mt-2 block text-xs font-medium text-foreground">{metric.label}</span>
            <p className="mt-2 text-[11px] leading-5 text-text-muted">{metric.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(13,22,39,0.96),rgba(17,28,55,0.75))] p-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-8">
        <div>
          <div className="flex items-center gap-3 text-primary">
            <Gauge size={19} />
            <ShieldCheck size={19} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-foreground">Dibangun untuk workload yang benar-benar dipakai.</h3>
          <Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3">
            Kenali pendekatan Orvix.id <ArrowRight size={15} />
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {industries.map((industry) => (
            <span key={industry} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-text-secondary">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyOrvixSection;
