import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { contactCopy, findServiceBySlug, siteDescription, siteUrl, whatsappUrl } from "@/data/siteContent";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = findServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="pt-24">
      <Helmet>
        <title>{`${service.title} - Orvix.id`}</title>
        <meta name="description" content={`${service.summary} ${siteDescription}`} />
        <link rel="canonical" href={`${siteUrl}${service.path}`} />
        <meta property="og:title" content={`${service.title} - Orvix.id`} />
        <meta property="og:description" content={service.summary} />
      </Helmet>

      <section className="infra-shell bg-background py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
              Cloud Infrastructure Service
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
              {service.intro}
            </p>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-card/80 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] lg:max-w-sm">
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.accent}`}
            >
              <Icon size={22} className="text-foreground" />
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">{service.summary}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-85"
            >
              Konsultasi Infrastruktur
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-light-bg py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-light-text">Ruang lingkup yang ditangani</h2>
            <div className="mt-6 space-y-4">
              {service.deliverables.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-700" />
                  <p className="text-sm leading-relaxed text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-light-text">Cocok untuk</h2>
              <div className="mt-5 space-y-3">
                {service.useCases.map((item) => (
                  <p key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-light-text">Stack & pendekatan</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(9,14,30,1),rgba(26,35,80,0.92),rgba(12,18,40,1))] px-6 py-10 text-center shadow-[0_0_50px_rgba(34,211,238,0.08)]">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Diskusikan kebutuhan {service.shortTitle.toLowerCase()} Anda bersama Orvix.id
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
            {contactCopy}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Konsultasi Infrastruktur
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
