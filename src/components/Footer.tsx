import { Link } from "react-router-dom";
import {
  availableProducts,
  contactCopy,
  emailPlaceholder,
  enterpriseServices,
  locationLabel,
  platformUrl,
  siteName,
  whatsappDisplay,
  whatsappUrl,
} from "@/data/siteContent";

const Footer = () => (
  <footer className="border-t border-white/10 px-4 pb-10 pt-14 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl px-2 py-8 sm:px-0">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.8fr]">
        <div className="max-w-md">
          <p className="inline-flex items-center gap-2.5 font-display text-xl font-semibold text-foreground">
            <img src="/logo.svg" alt="" className="h-7 w-7" aria-hidden="true" />{siteName}
          </p>
          <p className="mt-3 text-sm leading-7 text-text-secondary">
            Cloud platform untuk developer, dengan opsi enterprise untuk workload yang butuh
            penanganan langsung.
          </p>
        </div>

        <div>
          <p className="section-eyebrow text-text-muted">Platform</p>
          <div className="mt-4 space-y-2 text-sm">
            {availableProducts.map((product) => (
              <p key={product.name} className="text-text-secondary">
                {product.name}
              </p>
            ))}
            <a
              href={platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary transition hover:text-cyan-300"
            >
              Masuk platform
            </a>
          </div>
        </div>

        <div>
          <p className="section-eyebrow text-text-muted">Enterprise</p>
          <div className="mt-4 space-y-2 text-sm">
            {enterpriseServices.slice(0, 4).map((service) => (
              <Link
                key={service.slug}
                to={service.path}
                className="block text-text-secondary transition hover:text-foreground"
              >
                {service.title}
              </Link>
            ))}
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
        <span className="inline-flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" /> Infrastruktur berjalan di region Jakarta</span>
      </div>
    </div>
  </footer>
);

export default Footer;
