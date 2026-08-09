import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { enterpriseIntro, enterpriseServices, whatsappUrl } from "@/data/siteContent";

const EnterpriseSection = () => (
  <section id="enterprise" className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl lg:sticky lg:top-28">
          <span className="section-eyebrow text-text-muted">Enterprise Solutions</span>
          <h2 className="section-title mt-4">Untuk workload yang butuh penanganan langsung.</h2>
          <p className="section-copy mt-4">{enterpriseIntro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.035] px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary"
            >
              Hubungi tim kami <ArrowRight size={16} />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-text-secondary transition hover:text-foreground"
            >
              Diskusi via WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {enterpriseServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={service.path}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/[0.05]"
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${service.accent}`}>
                  <Icon size={18} className="text-foreground" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-text-secondary">{service.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition group-hover:gap-2.5">
                  Detail <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default EnterpriseSection;
