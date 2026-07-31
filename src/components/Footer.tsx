import {
  contactCopy,
  emailPlaceholder,
  locationLabel,
  siteName,
  whatsappDisplay,
  whatsappUrl,
} from "@/data/siteContent";

const Footer = () => (
  <footer className="border-t border-white/10 px-4 pb-10 pt-14 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl px-2 py-8 sm:px-0">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr_0.8fr]">
        <div className="max-w-md">
          <p className="inline-flex items-center gap-2.5 font-display text-xl font-semibold text-foreground">
            <span className="orvix-mark" aria-hidden="true"><i /><i /><i /></span>{siteName}
          </p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">
            Partner untuk cloud, server, deployment, monitoring, security, dan maintenance
            workload bisnis.
          </p>
        </div>

        <div>
          <p className="section-eyebrow text-text-muted">Focus</p>
          <div className="mt-4 space-y-2 text-sm text-text-secondary">
            <p>Managed Cloud</p>
            <p>Cloud Migration</p>
            <p>DevOps & CI/CD</p>
            <p>Hybrid Cloud</p>
          </div>
        </div>

        <div>
          <p className="section-eyebrow text-text-muted">Contact</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-xl font-semibold text-primary transition hover:text-cyan-300"
          >
            {whatsappDisplay}
          </a>
          <p className="mt-2 text-sm text-text-secondary">{emailPlaceholder}</p>
          <p className="mt-2 text-sm text-text-muted">{locationLabel}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-text-secondary">{contactCopy}</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Orvix.id</span>
        <span className="inline-flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" /> Siap membantu operasional infrastruktur</span>
      </div>
    </div>
  </footer>
);

export default Footer;
