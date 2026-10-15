import { Layers } from "lucide-react";
import { roadmapIntro, roadmapProducts } from "@/data/siteContent";

const RoadmapSection = () => <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div><span className="section-eyebrow inline-flex items-center gap-2 text-text-muted"><Layers size={14} aria-hidden="true" />Segera</span><h2 className="mt-3 text-2xl font-semibold text-foreground">Dalam roadmap Orvix Cloud Platform.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">{roadmapIntro}</p></div><div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{roadmapProducts.map((product) => <div key={product.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><p className="text-sm font-medium text-foreground">{product.name}</p><p className="mt-1 text-xs text-text-muted">{product.tagline}</p></div>)}</div></div></section>;

export default RoadmapSection;
