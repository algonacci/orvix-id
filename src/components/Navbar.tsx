import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems, whatsappUrl } from "@/data/siteContent";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="gradient-stroke aurora-panel rounded-full px-4 py-3 shadow-[0_18px_44px_rgba(2,6,23,0.28)] sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="font-display text-base font-semibold tracking-[0.02em] text-foreground">
              Orvix<span className="text-primary">.id</span>
            </Link>

            <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] p-1 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    location.pathname === item.path
                      ? "bg-white/10 text-foreground"
                      : "text-text-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
              >
                Konsultasi
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-full border border-white/10 bg-white/[0.03] p-2 text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-[#0a1224]/95 p-4 md:hidden">
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
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Konsultasi Infrastruktur
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
