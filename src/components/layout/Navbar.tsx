"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Enquanto está no topo a barra é transparente; ao rolar vira vidro fosco.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do fundo enquanto o menu do celular está aberto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-line bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-x flex h-18 items-center justify-between" aria-label="Principal">
        <a
          href="#top"
          className="cursor-pointer rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          aria-label="Vertion Stack, ir para o topo"
        >
          <Logo className="h-7 w-7 sm:h-8 sm:w-8" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative cursor-pointer rounded-lg px-3.5 py-2 font-body text-sm font-medium text-ink-soft outline-none transition-colors duration-200 hover:bg-violet-50 hover:text-ink focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <WhatsAppButton
            shortLabel="WhatsApp"
            className="min-h-[44px] px-4 py-2.5 text-sm sm:px-5"
          />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-line text-ink outline-none transition-colors duration-200 hover:border-brand hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="menu-mobile" className="border-t border-line bg-white lg:hidden">
          <ul className="container-x flex flex-col py-2">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} className="border-b border-line/70 last:border-0">
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${i * 45}ms` }}
                  className="flex min-h-[56px] cursor-pointer items-center justify-between gap-4 font-body text-base font-medium text-ink outline-none transition-colors duration-200 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand motion-safe:animate-fade-up"
                >
                  {link.label}
                  <span aria-hidden="true" className="font-mono text-label text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
