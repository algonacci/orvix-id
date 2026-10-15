import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { productNavItems } from "@/data/siteContent";

export function PlatformLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600">
      {children}<ArrowUpRight size={16} aria-hidden="true" className="shrink-0" />
    </a>
  );
}

export function CodeExample({ label, code }: { label: string; code: string }) {
  return (
    <figure className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-background text-foreground">
      <figcaption className="border-b border-white/10 px-5 py-3 text-xs font-semibold tracking-wide text-text-secondary">{label}</figcaption>
      <pre className="whitespace-pre-wrap break-words p-5 text-xs leading-7 [overflow-wrap:anywhere] sm:text-sm"><code>{code}</code></pre>
    </figure>
  );
}

export default function ProductLayout({ title, description, eyebrow = "Orvix Cloud Platform", actions, children }: {
  title: string;
  description: string;
  eyebrow?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="pt-24">
      <SEOHead title={title} description={description} />
      <header className="infra-shell bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">{description}</p>
          {actions && <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>}
          <nav aria-label="Halaman produk" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-text-secondary">
            {productNavItems.map((item) => <Link key={item.path} to={item.path} className="hover:text-primary">{item.label}</Link>)}
            <Link to="/harga" className="hover:text-primary">Harga</Link>
          </nav>
        </div>
      </header>
      <div className="bg-light-bg text-light-text">
        <div className="mx-auto max-w-6xl space-y-14 px-6 py-16 sm:space-y-20 sm:py-20">{children}</div>
      </div>
    </div>
  );
}
