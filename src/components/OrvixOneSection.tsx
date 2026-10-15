import { ArrowUpRight } from "lucide-react";
import { orvixOne } from "@/data/siteContent";

const OrvixOneSection = () => (
  <section aria-label={orvixOne.name} className="px-4 py-8 sm:px-6 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <p className="text-sm leading-7 text-text-secondary"><span className="font-semibold text-foreground">{orvixOne.label}: {orvixOne.name}.</span> {orvixOne.description}</p>
      <a href={orvixOne.interestUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/30 hover:text-primary">{orvixOne.ctaLabel} <ArrowUpRight size={15} /></a>
    </div>
  </section>
);

export default OrvixOneSection;
