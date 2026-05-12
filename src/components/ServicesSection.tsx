import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  aboutHighlights,
  finalCta,
  lifecycleFlow,
  packages,
  services,
  useCases,
  whatsappUrl,
} from "@/data/siteContent";

const primaryServices = services.filter((service) => service.slug !== "ai-saas-infrastructure");
const featuredServices = primaryServices.slice(0, 4);

const ServicesSection = () => (
  <>
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <span className="section-eyebrow text-text-muted">About Orvix.id</span>
            <h2 className="section-title mt-4">Infrastruktur yang rapi sejak awal.</h2>
          </div>

          <div className="grid gap-3">
            {aboutHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                <p className="text-sm leading-7 text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="section-eyebrow text-text-muted">Layanan Utama</span>
            <h2 className="section-title mt-4">Layanan utama Orvix.id</h2>
            <p className="section-copy mt-4">
              Fokus pada layanan inti yang paling sering dibutuhkan tim operasional.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-cyan-300"
          >
            Explore semua layanan
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                to={service.path}
                className="bento-card group relative overflow-hidden p-5"
              >
                <div className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_70%)] blur-2xl" />
                <div className="relative">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.accent}`}
                  >
                    <Icon size={22} className="text-foreground" />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <h3 className="max-w-[16rem] text-xl font-semibold text-foreground">{service.title}</h3>
                    <span className="text-xs uppercase tracking-[0.22em] text-text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-3 max-w-[30rem] text-sm leading-6 text-text-secondary">
                    {service.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tech.slice(0, 2).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                    Pelajari layanan
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-medium text-foreground">Layanan lain</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {primaryServices.slice(4).map((service) => (
              <Link
                key={service.slug}
                to={service.path}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-text-secondary transition hover:border-primary/35 hover:text-foreground"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="why-orvix" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <span className="section-eyebrow text-text-muted">Operational Lifecycle</span>
            <h2 className="section-title mt-4">Deploy. Monitor. Secure. Scale.</h2>
            <p className="section-copy mt-4">
              Orvix.id membangun alur operasional yang jelas agar infrastruktur tidak hanya jalan,
              tapi juga mudah dipantau, diamankan, dan dikembangkan.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[18px] top-8 hidden h-[calc(100%-4rem)] w-px bg-[linear-gradient(180deg,rgba(56,189,248,0.55),rgba(99,102,241,0.2),transparent)] md:block" />
            <div className="grid gap-4">
              {lifecycleFlow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="gradient-stroke rounded-[1.75rem] bg-white/[0.04] p-5">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-sm font-semibold text-foreground">{item.title}</span>
                          <span className="text-xs uppercase tracking-[0.24em] text-text-muted">
                            stage {index + 1}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-text-secondary">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="use-cases" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="section-eyebrow text-text-muted">Use Cases</span>
          <h2 className="section-title mt-4">Cocok untuk kebutuhan seperti:</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {useCases.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="packages" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="section-eyebrow text-text-muted">Flexible Packages</span>
          <h2 className="section-title mt-4">Paket layanan yang bisa dimulai bertahap.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className={`rounded-[1.75rem] border p-6 transition duration-300 ${
                index < 3 ? "xl:col-span-2" : ""
              } ${
                index === 3 ? "xl:col-start-2 xl:col-span-2" : ""
              } ${
                index === 4 ? "xl:col-start-4 xl:col-span-2" : ""
              } ${
                index === 2
                  ? "border-cyan-300/35 bg-[linear-gradient(180deg,rgba(16,30,58,0.96),rgba(22,78,99,0.28))] shadow-[0_18px_50px_rgba(34,211,238,0.18)]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <h3 className="text-xl font-semibold text-foreground">{pkg.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{pkg.summary}</p>
              <div className="mt-6 space-y-3">
                {pkg.features.slice(0, 3).map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary" />
                    <p className="text-sm text-text-secondary">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="cta" className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl gradient-stroke rounded-[2rem] bg-[linear-gradient(135deg,rgba(10,16,34,0.98),rgba(24,34,73,0.96),rgba(12,20,40,1))] px-6 py-10 text-center sm:px-10 sm:py-12">
        <span className="section-eyebrow text-text-muted">Next Step</span>
        <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
          Butuh partner untuk merapikan infrastruktur?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          {finalCta}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
          >
            Konsultasi Sekarang
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/35 hover:text-primary"
          >
            Lihat Kontak
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default ServicesSection;
