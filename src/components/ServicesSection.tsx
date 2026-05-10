import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  aboutHighlights,
  deploymentWorkflow,
  finalCta,
  infrastructureMetrics,
  lifecycleFlow,
  packages,
  services,
  stackItems,
  useCases,
  whatsappUrl,
} from "@/data/siteContent";

const cardSpan = [
  "md:col-span-2 xl:col-span-2 xl:row-span-2",
  "md:col-span-1 xl:col-span-1",
  "md:col-span-1 xl:col-span-1",
  "md:col-span-2 xl:col-span-2",
  "md:col-span-1 xl:col-span-1",
  "md:col-span-1 xl:col-span-1",
  "md:col-span-2 xl:col-span-1",
  "md:col-span-2 xl:col-span-2",
];

const ServicesSection = () => (
  <>
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <span className="section-eyebrow text-text-muted">About Orvix.id</span>
            <h2 className="section-title mt-4">
              Managed infrastructure partner untuk workload yang perlu reliability, observability,
              dan skalabilitas sejak awal.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutHighlights.map((item) => (
              <div key={item} className="metric-card p-5">
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
            <span className="section-eyebrow text-text-muted">Service Surface</span>
            <h2 className="section-title mt-4">
              Bento grid layanan untuk deployment, security, automation, dan hybrid infrastructure.
            </h2>
            <p className="section-copy mt-4">
              Setiap domain layanan dirancang untuk kebutuhan workload yang berbeda, dari managed
              cloud harian sampai arsitektur AI dan private platform yang lebih kompleks.
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                to={service.path}
                className={`bento-card group relative overflow-hidden p-6 ${cardSpan[index] ?? ""}`}
              >
                <div className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_70%)] blur-2xl" />
                <div className="relative">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.accent}`}
                  >
                    <Icon size={22} className="text-foreground" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <h3 className="max-w-[16rem] text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.22em] text-text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-text-secondary">{service.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tech.slice(0, index === 0 ? 5 : 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                    Pelajari layanan
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    <section id="why-orvix" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <span className="section-eyebrow text-text-muted">Operational Lifecycle</span>
            <h2 className="section-title mt-4">
              Deploy, monitor, secure, and scale dengan workflow yang terasa seperti platform
              engineering, bukan support generik.
            </h2>
            <p className="section-copy mt-4">
              Pola kerja Orvix.id dibangun sebagai alur operasional infrastruktur yang terhubung,
              sehingga deployment, observability, hardening, dan optimasi berjalan dalam ritme yang
              sama.
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

    <section id="stack" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,32,0.95),rgba(11,19,39,0.88))] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="max-w-xl">
            <span className="section-eyebrow text-text-muted">Infrastructure Stack</span>
            <h2 className="section-title mt-4">
              Stack yang umum dipakai untuk platform modern, hybrid workloads, dan managed
              deployment.
            </h2>
            <p className="section-copy mt-4">
              Dari Linux instance, Docker, dan CI/CD sampai Proxmox, object storage, dan monitoring
              stack, Orvix.id bekerja di lapisan infrastruktur yang benar-benar menopang produksi.
            </p>
          </div>

          <div className="soft-grid rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {stackItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#0b1325]/90 px-4 py-4 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-primary/30"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="workflow" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="section-eyebrow text-text-muted">Deployment Workflow</span>
          <h2 className="section-title mt-4">
            Workflow delivery yang jelas dari assessment sampai maintenance bulanan.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {deploymentWorkflow.map((item) => (
            <div key={item.step} className="gradient-stroke rounded-[1.75rem] bg-white/[0.04] p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                {item.step}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="use-cases" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="section-eyebrow text-text-muted">Use Cases</span>
          <h2 className="section-title mt-4">
            Infrastruktur yang disiapkan untuk berbagai model aplikasi dan sistem bisnis.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item) => (
            <div key={item} className="bento-card p-5">
              <p className="text-base font-medium text-foreground">{item}</p>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Dirancang agar workload lebih siap dipakai, lebih mudah dimonitor, dan lebih aman
                untuk operasional jangka menengah.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="metrics" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="section-eyebrow text-text-muted">Infrastructure Metrics</span>
          <h2 className="section-title mt-4">
            Hasil yang biasanya dicari tim saat operasional infrastruktur mulai dirapikan.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {infrastructureMetrics.map((item) => (
            <div key={item.label} className="metric-card p-6">
              <p className="text-3xl font-semibold tracking-tight text-foreground">{item.value}</p>
              <p className="mt-3 text-sm font-medium text-primary">{item.label}</p>
              <p className="mt-4 text-sm leading-7 text-text-secondary">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="packages" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="section-eyebrow text-text-muted">Flexible Packages</span>
          <h2 className="section-title mt-4">
            Paket layanan yang bisa dimulai dari setup awal sampai enterprise deployment yang lebih
            kompleks.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-5">
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className={`rounded-[1.75rem] border p-6 transition duration-300 ${
                index === 2
                  ? "border-cyan-300/35 bg-[linear-gradient(180deg,rgba(16,30,58,0.96),rgba(22,78,99,0.28))] shadow-[0_18px_50px_rgba(34,211,238,0.18)]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <h3 className="text-xl font-semibold text-foreground">{pkg.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{pkg.summary}</p>
              <div className="mt-6 space-y-3">
                {pkg.features.map((feature) => (
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
          Need help managing your cloud infrastructure?
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
            Diskusi via WhatsApp
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
