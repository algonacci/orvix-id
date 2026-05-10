import {
  contactCopy,
  emailPlaceholder,
  locationLabel,
  siteName,
  whatsappDisplay,
  whatsappUrl,
} from "@/data/siteContent";

const Footer = () => (
  <footer className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,32,0.92),rgba(12,18,36,0.86))] px-6 py-8 sm:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr_0.8fr]">
        <div className="max-w-md">
          <p className="font-display text-xl font-semibold text-foreground">{siteName}</p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">
            Cloud & Managed Infrastructure Services untuk deployment, observability, security, dan
            maintenance workload modern.
          </p>
        </div>

        <div>
          <p className="section-eyebrow text-text-muted">Focus</p>
          <div className="mt-4 space-y-2 text-sm text-text-secondary">
            <p>Managed Cloud Services</p>
            <p>DevOps & CI/CD Setup</p>
            <p>Hybrid Cloud & Private Infrastructure</p>
            <p>Monitoring, Backup, and Security</p>
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
    </div>
  </footer>
);

export default Footer;
