import { Link } from "react-router-dom";
import { footerCopy, navigation, siteName } from "@/data/siteContent";

const Footer = () => (
  <footer className="border-t border-white/10 px-4 pb-10 pt-14 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl px-2 py-8 sm:px-0">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.8fr]">
        <div className="max-w-md">
          <Link to="/" className="inline-flex items-center gap-2.5 font-display text-xl font-semibold text-foreground"><img src="/logo.svg" alt="" className="h-7 w-7" aria-hidden="true" />{siteName}</Link>
          <p className="mt-3 text-sm leading-7 text-text-secondary">Cloud platform AI-first untuk developer Indonesia, dengan jalur enterprise untuk kebutuhan yang membutuhkan penanganan langsung.</p>
        </div>
        <div>
          <p className="section-eyebrow text-text-muted">{navigation.productsLabel}</p>
          <div className="mt-4 space-y-2 text-sm">
            {navigation.products.map((item) => <Link key={item.path} to={item.path} className="block text-text-secondary transition hover:text-foreground">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="section-eyebrow text-text-muted">Navigasi</p>
          <div className="mt-4 space-y-2 text-sm">
            {navigation.items.filter((item) => item.path !== "/").map((item) => <Link key={item.path} to={item.path} className="block text-text-secondary transition hover:text-foreground">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="section-eyebrow text-text-muted">Platform</p>
          <a href={navigation.login.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-primary hover:text-cyan-300">{navigation.login.label}</a>
          <p className="mt-3 text-sm leading-6 text-text-secondary">{footerCopy.billing}</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between"><span>{footerCopy.copyright}</span><span>Orvix Cloud Platform</span></div>
    </div>
  </footer>
);

export default Footer;
