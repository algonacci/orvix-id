import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "@/data/siteContent";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const items = navigation.items.filter((item) => item.path !== "/");

  return (
    <nav aria-label="Navigasi utama" className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-background/75 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-3.5">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" onClick={() => setOpen(false)} className="inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-[-0.02em] text-foreground">
            <img src="/logo.svg" alt="" className="h-7 w-7" aria-hidden="true" />Orvix<span className="-ml-2.5 text-primary">.id</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex lg:gap-7">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="group flex items-center gap-1 text-[13px] font-medium text-text-secondary outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary">
                {navigation.productsLabel}<ChevronDown size={13} className="transition group-data-[state=open]:rotate-180" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={20} className="z-[60] w-52 rounded-xl border border-white/10 bg-[#0a1224] p-2 shadow-2xl">
                  {navigation.products.map((item) => (
                    <DropdownMenu.Item key={item.path} asChild>
                      <Link to={item.path} className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary outline-none data-[highlighted]:bg-white/[0.06] data-[highlighted]:text-foreground">{item.label}</Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
            {items.map((item) => (
              <Link key={item.path} to={item.path} aria-current={location.pathname === item.path ? "page" : undefined} className={`text-[13px] font-medium transition ${location.pathname === item.path ? "text-foreground" : "text-text-secondary hover:text-foreground"}`}>{item.label}</Link>
            ))}
          </div>
          <a href={navigation.login.url} target="_blank" rel="noopener noreferrer" className="hidden min-h-10 items-center gap-2 rounded-lg bg-[linear-gradient(135deg,#eafbff,#a8ebff)] px-4 text-[13px] font-semibold text-[#07111c] shadow-[0_8px_28px_rgba(64,220,255,0.18)] transition hover:-translate-y-0.5 md:inline-flex">
            {navigation.login.label}<ArrowRight size={15} />
          </a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Tutup menu" : "Buka menu"} className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-foreground md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div id="mobile-navigation" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }} className="mt-3 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-xl border border-white/10 bg-[#0a1224] p-3 shadow-2xl md:hidden">
            <p className="px-4 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">{navigation.productsLabel}</p>
            <div className="grid grid-cols-2 gap-1 border-b border-white/10 pb-2">
              {navigation.products.map((item) => <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-text-secondary hover:bg-white/[0.04] hover:text-foreground">{item.label}</Link>)}
            </div>
            <div className="mt-2 flex flex-col gap-1">
              {items.map((item) => <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-text-secondary hover:bg-white/[0.04] hover:text-foreground">{item.label}</Link>)}
              <a href={navigation.login.url} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#eafbff,#a8ebff)] px-4 py-3 text-sm font-semibold text-[#07111c]">{navigation.login.label}<ArrowRight size={16} /></a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
