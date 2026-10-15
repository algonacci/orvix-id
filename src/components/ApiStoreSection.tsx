import { ArrowRight, Boxes } from "lucide-react";
import { Link } from "react-router-dom";
import { apiCatalog, apiStore } from "@/data/products";

const ApiStoreSection = () => (
  <section id="api-store" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <span className="section-eyebrow text-text-muted">API Store</span>
          <h2 className="section-title mt-4">Data lokal. Ide aplikasi Anda.</h2>
          <p className="section-copy mt-4 max-w-2xl">{apiStore.description}</p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-2 text-xs font-semibold text-emerald-200">{apiStore.priceLabel}</span>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {apiCatalog.map((api) => (
          <article key={api.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <Boxes size={18} className="text-primary" />
            <h3 className="mt-4 text-sm font-semibold text-foreground">{api.name}</h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">{api.description}</p>
          </article>
        ))}
      </div>
      <Link to="/api-store" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">Jelajahi API Store <ArrowRight size={15} /></Link>
    </div>
  </section>
);

export default ApiStoreSection;
