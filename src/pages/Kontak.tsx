import { Helmet } from "react-helmet-async";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import {
  contactCopy,
  emailPlaceholder,
  locationLabel,
  siteUrl,
  whatsappDisplay,
  whatsappUrl,
} from "@/data/siteContent";

const Kontak = () => (
  <div className="pt-24">
    <Helmet>
      <title>Kontak Orvix.id</title>
      <meta
        name="description"
        content="Hubungi Orvix.id untuk konsultasi cloud infrastructure, deployment, backup, monitoring, security, dan managed support bisnis."
      />
      <link rel="canonical" href={`${siteUrl}/contact`} />
    </Helmet>

    <section className="infra-shell bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
          Kontak
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
          Diskusikan kebutuhan cloud infrastructure bisnis Anda
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
          {contactCopy}
        </p>
      </div>
    </section>

    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-4xl space-y-8 px-6">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] transition-transform group-hover:scale-110">
            <MessageCircle size={28} className="text-foreground" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-light-text">{whatsappDisplay}</p>
            <p className="text-sm text-slate-600">
              WhatsApp untuk konsultasi awal, kebutuhan scope layanan, dan diskusi implementasi
            </p>
          </div>
        </a>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <MapPin size={24} className="mb-3 text-cyan-700" />
            <h3 className="font-display font-bold text-light-text">Lokasi</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{locationLabel}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <Clock size={24} className="mb-3 text-cyan-700" />
            <h3 className="font-display font-bold text-light-text">Alur konsultasi</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Diskusi awal mencakup kebutuhan workload, scope deployment, dan model support yang
              paling relevan untuk bisnis Anda.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <Mail size={24} className="mb-3 text-cyan-700" />
            <h3 className="font-display font-bold text-light-text">Email</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{emailPlaceholder}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Kontak;
