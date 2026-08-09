import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, platformUrl, whatsappUrl } from "@/data/siteContent";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-background/75 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="px-1 py-3.5 sm:px-0">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-[-0.02em] text-foreground">
              <img src="/logo.svg" alt="" className="h-7 w-7" aria-hidden="true" />
              Orvix<span className="-ml-2.5 text-primary">.id</span>
            </Link>

            <div className="hidden items-center gap-6 md:flex lg:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[13px] font-medium transition ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-text-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2.5 md:flex">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden min-h-10 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.035] px-4 text-[13px] font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06] lg:inline-flex"
              >
                Konsultasi <ArrowUpRight size={15} />
              </a>
              <a
                href={platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[linear-gradient(135deg,#eafbff,#a8ebff)] px-4 text-[13px] font-semibold text-[#07111c] shadow-[0_8px_28px_rgba(64,220,255,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(64,220,255,0.28)]"
              >
                Masuk Platform <ArrowRight size={15} />
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="mt-3 rounded-xl border border-white/10 bg-[#0a1224]/95 p-3 shadow-2xl md:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      location.pathname === item.path
                        ? "bg-white/10 text-foreground"
                        : "text-text-secondary hover:bg-white/[0.04] hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#eafbff,#a8ebff)] px-4 py-3 text-sm font-semibold text-[#07111c]"
                >
                  Masuk Platform <ArrowRight size={16} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-foreground"
                >
                  Konsultasi Infrastruktur <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
