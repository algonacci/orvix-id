import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { packages, services, siteUrl, whatsappUrl } from "@/data/siteContent";

const primaryServices = services.filter((service) => service.slug !== "ai-saas-infrastructure");
const featuredServices = primaryServices.slice(0, 4);

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
          Layanan utama Orvix.id
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary">
          Fokus pada layanan inti yang paling sering dibutuhkan tim operasional.
        </p>
      </div>
    </section>

    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {featuredServices.map((service) => {
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

        <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-light-text">Layanan lain</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {primaryServices.slice(4).map((service) => (
              <Link
                key={service.slug}
                to={service.path}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 transition hover:border-cyan-300 hover:text-slate-900"
              >
                {service.title}
              </Link>
            ))}
          </div>
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
            Paket layanan yang bisa dimulai bertahap
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className={`rounded-3xl border p-6 ${
                index < 3 ? "xl:col-span-2" : ""
              } ${
                index === 3 ? "xl:col-start-2 xl:col-span-2" : ""
              } ${
                index === 4 ? "xl:col-start-4 xl:col-span-2" : ""
              } ${
                index === 2
                  ? "border-cyan-300/30 bg-[linear-gradient(180deg,rgba(16,30,58,0.96),rgba(22,78,99,0.24))] shadow-[0_18px_50px_rgba(34,211,238,0.14)]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <h3 className="text-xl font-bold text-foreground">{pkg.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{pkg.summary}</p>
              <div className="mt-6 space-y-3">
                {pkg.features.slice(0, 3).map((feature) => (
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
            Ceritakan kondisi server, aplikasi, atau cloud yang sedang berjalan. Orvix.id bantu
            review dan susun langkah teknis yang paling masuk akal.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Konsultasi Sekarang
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-700"
            >
              Lihat Kontak
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Layanan;
