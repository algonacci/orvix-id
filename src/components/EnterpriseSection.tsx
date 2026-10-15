import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Building2 } from "lucide-react";
import { enterpriseIntro, enterpriseScopeNote, whatsappUrl } from "@/data/siteContent";

const EnterpriseSection = () => (
  <section id="enterprise" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 border-y border-white/10 py-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
      <div className="max-w-2xl">
        <span className="section-eyebrow text-text-muted">Enterprise Solutions</span>
        <h2 className="section-title mt-4">Butuh penanganan langsung?</h2>
        <p className="section-copy mt-4">{enterpriseIntro}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link to="/layanan" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.035] px-5 text-sm font-semibold text-foreground transition hover:border-primary/35 hover:text-primary">Lihat layanan enterprise <ArrowRight size={16} /></Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-3 text-sm font-semibold text-text-secondary transition hover:text-foreground">Diskusi via WhatsApp <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
        <Building2 size={24} className="text-text-muted" />
        <p className="mt-4 text-sm leading-7 text-text-secondary">{enterpriseScopeNote}</p>
      </div>
    </div>
  </section>
);

export default EnterpriseSection;
