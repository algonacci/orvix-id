import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { finalCta, platformUrl } from "@/data/siteContent";

const FinalCtaSection = () => (
  <section id="cta" className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
    <div className="final-cta mx-auto max-w-6xl overflow-hidden rounded-2xl px-6 py-12 text-center sm:px-10 sm:py-16">
      <span className="section-eyebrow text-primary">Next Step</span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Infrastruktur lebih rapi.
        <span className="hero-gradient-text mt-1 block">Tim lebih fokus membangun bisnis.</span>
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">{finalCta}</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={platformUrl}
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#eafbff,#a8ebff)] px-6 text-sm font-semibold text-[#07111c] transition hover:-translate-y-0.5"
        >
          Ke Platform Orvix <ArrowRight size={16} />
        </a>
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.035] px-6 text-sm font-semibold text-foreground transition hover:border-primary/35 hover:text-primary"
        >
          Lihat Kontak
        </Link>
      </div>
    </div>
  </section>
);

export default FinalCtaSection;
