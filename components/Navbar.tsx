"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Início",        href: "#inicio" },
  { name: "Sobre Nós",     href: "#sobre" },
  { name: "Áreas",         href: "#areas" },
  { name: "Diferenciais",  href: "#diferenciais" },
  { name: "Equipe",        href: "#equipe" },
  { name: "Artigos",       href: "#artigos" },
  { name: "Contato",       href: "#contato" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active,     setActive]     = useState("inicio");

  const onScroll = useCallback(() => setScrolled(window.scrollY > 32), []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.2, rootMargin: "-80px 0px -50% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a href="#conteudo-principal" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:px-4 focus:py-2 focus:bg-[#B8893B] focus:text-white focus:text-sm">
        Pular para o conteúdo
      </a>

      <nav
        role="navigation"
        aria-label="Navegação principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md shadow-[0_1px_0_rgba(184,137,59,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[68px] sm:h-20">
          {/* Logo */}
          <a href="#inicio" aria-label="DRC Advogados — início" className="flex items-center gap-3 shrink-0">
            <Image src="/logo.png" alt="DRC Advogados" width={40} height={40} className="w-9 h-9 sm:w-10 sm:h-10 object-contain" priority />
            <span className="hidden sm:block font-display text-[13px] tracking-[0.18em] text-[#222222] leading-tight">
              DRC <span className="text-[#B8893B]">ADVOGADOS</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 font-ui">
            {navLinks.map(({ name, href }) => {
              const id  = href.replace("#", "");
              const on  = active === id;
              return (
                <a
                  key={name}
                  href={href}
                  aria-current={on ? "page" : undefined}
                  className={`relative px-4 py-2 text-[11px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 ${
                    on ? "text-[#B8893B]" : "text-[#6C665D] hover:text-[#222222]"
                  }`}
                >
                  {name}
                  <span className={`absolute bottom-0 left-4 right-4 h-px bg-[#B8893B] transition-transform duration-300 origin-left ${on ? "scale-x-100" : "scale-x-0"}`} />
                </a>
              );
            })}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5511912252450"
              target="_blank" rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border border-[#B8893B] text-[#8E682B] font-ui text-[10.5px] font-600 tracking-[0.1em] uppercase hover:bg-[#B8893B] hover:text-white transition-all duration-300"
              aria-label="Agendar consulta pelo WhatsApp"
            >
              Agendar Consulta
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#B8893B]"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
          className="fixed inset-0 z-40 bg-white/[0.99] backdrop-blur-sm flex flex-col"
        >
          <div className="h-[68px] sm:h-20 flex items-center px-5 border-b border-[rgba(184,137,59,0.15)]">
            <Image src="/logo.png" alt="DRC Advogados" width={36} height={36} className="object-contain" />
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-0">
            {navLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl text-[#222222] py-3.5 border-b border-[#EFE6D8] hover:text-[#B8893B] transition-colors"
              >
                {name}
              </a>
            ))}
            <a
              href="https://wa.me/5511912252450"
              target="_blank" rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-8 text-center py-4 bg-[#B8893B] text-white font-ui text-[11px] tracking-[0.1em] uppercase"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
