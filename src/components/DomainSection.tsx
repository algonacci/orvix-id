import { ArrowRight, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { domainContent } from "@/data/products";

const DomainSection = () => (
  <section id="domain" className="infra-shell px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div>
        <span className="section-eyebrow text-primary">Domain</span>
        <h2 className="section-title mt-4">Nama untuk ide Anda. Saldo yang sama.</h2>
        <p className="section-copy mt-4">{domainContent.description}</p>
        <Link to="/domain" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Lihat layanan domain <ArrowRight size={15} /></Link>
      </div>
      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-svc-blue"><Globe2 size={19} /></span>
          <div><p className="text-sm font-semibold text-foreground">Contoh ekstensi</p><p className="text-xs text-text-muted">Pilih nama untuk proyek Anda.</p></div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {domainContent.tlds.map((tld) => <span key={tld} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs text-text-secondary">{tld}</span>)}
        </div>
        <p className="mt-5 text-xs leading-5 text-text-muted">{domainContent.priceNote}</p>
      </div>
    </div>
  </section>
);

export default DomainSection;
