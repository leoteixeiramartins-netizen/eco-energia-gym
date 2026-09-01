import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Zap, ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#tecnologia", label: "Tecnologia" },
  { href: "/#como-funciona", label: "Como Funciona" },
  { href: "/#dashboard", label: "Dashboard" },
  { href: "/#impacto", label: "Impacto" },
];

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isSim = pathname === "/simulador";

  const itemClass = (active: boolean) =>
    active
      ? "nav-item-active inline-flex items-center rounded-full px-4 py-2 text-sm transition-colors"
      : "text-nav-muted hover:text-foreground inline-flex items-center rounded-full px-4 py-2 text-sm transition-colors duration-300";

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto max-w-[1200px]">
        <nav className="nav-glass flex h-[60px] items-center justify-between gap-4 rounded-full py-1.5 pr-1.5 pl-3 sm:h-[64px] sm:pl-5">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span
              className="grid h-8 w-8 place-items-center rounded-full"
              style={{ background: "var(--gradient-energy)" }}
            >
              <Zap className="text-primary-foreground h-4 w-4" />
            </span>
            <span className="font-display text-base font-bold">EnergyFit</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={itemClass(!isSim && l.href === "/")}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/simulador" className={itemClass(isSim)}>
                Simulador
              </Link>
            </li>
          </ul>

          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href="/#contato"
              className="bg-nav-cta text-nav-cta-foreground inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-transform duration-300 hover:scale-[1.04] sm:px-6"
              style={{ boxShadow: "var(--glow-soft)" }}
            >
              Fazer parte <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
              aria-expanded={open}
              className="text-nav-muted hover:text-foreground grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open ? (
          <ul className="nav-glass mt-2 flex flex-col gap-1 rounded-3xl p-3 lg:hidden">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-nav-muted hover:text-foreground block rounded-full px-4 py-2.5 text-sm transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/simulador"
                onClick={() => setOpen(false)}
                className={
                  isSim
                    ? "nav-item-active block rounded-full px-4 py-2.5 text-sm"
                    : "text-nav-muted hover:text-foreground block rounded-full px-4 py-2.5 text-sm transition-colors"
                }
              >
                Simulador
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    </header>
  );
}
