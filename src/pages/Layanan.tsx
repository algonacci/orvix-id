import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { packages, services, siteUrl, whatsappUrl } from "@/data/siteContent";

const Layanan = () => (
  <div className="pt-24">
    <Helmet>
      <title>Layanan Cloud & Infrastruktur - Orvix.id</title>
      <meta
        name="description"
        content="Layanan Orvix.id mencakup managed cloud, cloud migration, managed hosting, DevOps, backup, monitoring, security, private cloud, dan AI infrastructure."
      />
      <link rel="canonical" href={`${siteUrl}/services`} />
    </Helmet>

    <section className="infra-shell bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
          Layanan
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
          Layanan cloud dan managed infrastructure untuk deployment yang lebih siap pakai
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary">
          Orvix.id membantu bisnis membangun, migrasi, deploy, mengamankan, memonitor, dan
          memelihara infrastruktur cloud tanpa operasional yang terasa rumit.
        </p>
      </div>
    </section>

    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                to={service.path}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.accent}`}
                >
                  <Icon size={22} className="text-foreground" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-light-text">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tech.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors group-hover:text-cyan-700">
                  Lihat detail layanan
                  <ArrowRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
            Paket
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Opsi layanan yang fleksibel untuk kebutuhan setup, managed support, atau hybrid infra
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-5">
          {packages.map((pkg) => (
            <div key={pkg.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-foreground">{pkg.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{pkg.summary}</p>
              <div className="mt-6 space-y-3">
                {pkg.features.map((feature) => (
                  <p key={feature} className="text-sm text-text-secondary">
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Diskusi Kebutuhan
          </span>
          <h2 className="mt-4 text-2xl font-bold text-light-text">
            Butuh kombinasi layanan yang lebih spesifik?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Scope layanan Orvix.id bisa disesuaikan untuk deployment aplikasi, VPS reseller,
            managed database, monthly maintenance, ataupun hybrid infrastructure yang lebih custom.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Konsultasi Infrastruktur
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-700"
            >
              Hubungi Tim Orvix.id
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Layanan;
