import { ArrowRight, Check, Gauge, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { enterpriseScopeNote, industries, infrastructureMetrics, whyOrvix } from "@/data/siteContent";

const WhyOrvixSection = () => (
  <section id="why-orvix" className="infra-shell overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center"><span className="section-eyebrow text-primary">Pendekatan enterprise</span><h2 className="section-title mt-4">Ruang lingkup yang jelas, keputusan yang bisa ditelusuri.</h2><p className="section-copy mx-auto mt-5 max-w-2xl">{enterpriseScopeNote}</p></div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{whyOrvix.map((item) => { const Icon = item.icon; return <article key={item.title} className="why-card"><span className="why-icon"><Icon size={20} /></span><h3 className="mt-6 text-lg font-semibold text-foreground">{item.title}</h3><p className="mt-3 text-sm leading-7 text-text-secondary">{item.description}</p><div className="mt-6 flex items-center gap-2 text-xs text-text-muted"><Check size={13} className="text-primary" /> Dibahas sesuai proyek</div></article>; })}</div>
      <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4">{infrastructureMetrics.map((metric) => <div key={metric.label} className="border-white/10 p-6 text-center sm:border-l first:border-l-0"><strong className="text-lg font-semibold text-foreground">{metric.value}</strong><span className="mt-2 block text-xs font-medium text-foreground">{metric.label}</span><p className="mt-2 text-[11px] leading-5 text-text-muted">{metric.detail}</p></div>)}</div>
      <div className="mt-10 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(13,22,39,0.96),rgba(17,28,55,0.75))] p-6 lg:p-8"><div className="flex items-center gap-3 text-primary"><Gauge size={19} /><ShieldCheck size={19} /></div><h3 className="mt-4 text-xl font-semibold text-foreground">Butuh diskusi lebih lanjut?</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">{enterpriseScopeNote}</p><div className="mt-5 flex flex-wrap gap-2">{industries.map((industry) => <span key={industry} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-text-secondary">{industry}</span>)}</div><Link to="/tentang" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Kenali pendekatan Orvix <ArrowRight size={15} /></Link></div>
    </div>
  </section>
);

export default WhyOrvixSection;
