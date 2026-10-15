import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { codingIntro, codingPlugins, codingSetup } from "@/data/products";
import { codingPlan, formatTokens, pricingCopy } from "@/data/pricing";

const CodingSection = () => (
  <section id="coding" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
      <div>
        <span className="section-eyebrow text-text-muted">{codingPlan.name}</span>
        <h2 className="section-title mt-4">AI untuk alur kerja coding Anda.</h2>
        <p className="section-copy mt-4">{codingIntro}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {codingPlugins.map((plugin) => <span key={plugin} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-text-secondary">{plugin}</span>)}
        </div>
        <Link to="/coding" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">Kenali Coding Plan <ArrowRight size={15} /></Link>
      </div>
      <div className="rounded-2xl border border-primary/20 bg-[#080e1a] p-5 sm:p-7">
        <div className="flex items-center gap-2 text-primary"><Terminal size={17} /><span className="text-xs font-semibold uppercase tracking-[0.18em]">{codingPlan.name}</span></div>
        <p className="mt-5 text-2xl font-semibold text-foreground">{pricingCopy.codingPlanPrice}</p>
        <p className="mt-2 text-sm text-text-secondary">{formatTokens(codingPlan.tokens)} untuk coding agent.</p>
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-sm leading-6 text-text-muted">{codingSetup.description}</p>
          <a href={codingSetup.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Panduan plugin di platform <ArrowRight size={15} /></a>
        </div>
      </div>
    </div>
  </section>
);

export default CodingSection;
