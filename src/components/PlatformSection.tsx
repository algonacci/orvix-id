import { ArrowRight, Check, Route, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { gatewayFeatures, gatewayIntegration } from "@/data/products";
import { aiPlan, modelFamilies, pricingCopy } from "@/data/pricing";

const icons = [ShieldCheck, Route, Sparkles];

const PlatformSection = () => (
  <section id="platform" className="infra-shell overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <span className="section-eyebrow text-primary">AI Gateway</span>
          <h2 className="section-title mt-4">Hubungkan aplikasi Anda ke model AI.</h2>
          <p className="section-copy mt-4">Gunakan pola integrasi yang familiar, berpindah rute saat diperlukan, dan biarkan <code className="rounded bg-white/10 px-1.5 py-0.5 text-primary">{gatewayIntegration.model}</code> memilih model.</p>
          <Link to="/ai-gateway" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Kenali AI Gateway <ArrowRight size={15} /></Link>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.05] p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{aiPlan.name}</p>
          <p className="mt-3 text-2xl font-semibold text-foreground">{pricingCopy.aiPlanPrice}</p>
          <p className="mt-1 text-sm text-text-secondary">{aiPlan.tagline}</p>
          <p className="mt-3 text-xs leading-6 text-text-muted">{pricingCopy.fairUse}</p>
          <Link to="/harga" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Lihat harga <ArrowRight size={15} /></Link>
        </div>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {gatewayFeatures.slice(0, icons.length).map((feature, index) => {
          const Icon = icons[index];
          return <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><Icon size={19} className="text-primary" /><h3 className="mt-4 text-sm font-semibold text-foreground">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-text-secondary">{feature.description}</p></article>;
        })}
      </div>
      <div className="mt-10 rounded-2xl border border-white/10 bg-[#080e1a]/90 p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><p className="text-sm font-semibold text-foreground">Keluarga model</p><p className="mt-1 text-xs text-text-muted">Model teks dan gambar melalui AI Gateway.</p></div>
          <Link to="/harga" className="rounded-full border border-primary/20 bg-primary/[0.05] px-3 py-2 text-xs font-medium text-primary hover:border-primary/50">{pricingCopy.startingPrice} <ArrowRight size={13} className="ml-1 inline" /></Link>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {Object.values(modelFamilies).flat().map((family) => <span key={family} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-text-secondary"><Check size={12} className="text-primary" />{family}</span>)}
        </div>
      </div>
    </div>
  </section>
);

export default PlatformSection;
