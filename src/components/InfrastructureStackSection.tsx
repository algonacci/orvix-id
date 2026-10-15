import { enterpriseScopeNote, infrastructureMetrics } from "@/data/siteContent";

const InfrastructureStackSection = () => (
  <section id="stack" className="relative overflow-hidden bg-[#080d17] px-4 py-24 sm:px-6 lg:px-8">
    <div className="stack-glow" />
    <div className="relative mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-eyebrow text-primary">Ruang lingkup operasional</span>
        <h2 className="section-title mt-4">Fondasi operasional dibahas secara praktis.</h2>
        <p className="section-copy mx-auto mt-5 max-w-2xl">{enterpriseScopeNote}</p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {infrastructureMetrics.map((metric) => <article key={metric.label} className="ops-card"><h3 className="text-lg font-semibold text-foreground">{metric.label}</h3><p className="mt-3 text-sm leading-7 text-text-secondary">{metric.detail}</p></article>)}
      </div>
    </div>
  </section>
);

export default InfrastructureStackSection;
