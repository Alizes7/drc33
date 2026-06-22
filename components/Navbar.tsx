"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Áreas", href: "#areas" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Equipe", href: "#equipe" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-80px 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#B6883A] focus:text-[#0B0A08] focus:font-medium"
      >
        Pular para o conteúdo principal
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0A08]/95 backdrop-blur-xl border-b border-[#2B2620]"
            : "bg-transparent border-b border-transparent"
        }`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a
              href="#inicio"
              className="flex items-center gap-3 group"
              aria-label="DRC Advogados - Voltar ao início"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10">
                <Image
                  src="/logo.png"
                  alt="DRC Advogados"
                  fill
                  className="object-contain"
                  priority
                  sizes="40px"
                />
              </div>
              <span className="hidden sm:block font-display text-sm tracking-[0.25em] text-[#F1ECDD]">
                DRC <span className="text-[#B6883A]">ADVOGADOS</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1 font-mono">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-[11px] tracking-[0.1em] uppercase whitespace-nowrap transition-colors duration-300 ${
                      isActive ? "text-[#D9AA5C]" : "text-[#6E6757] hover:text-[#E4DCC8]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="text-[#4A453A] mr-1">{String(i + 1).padStart(2, "0")}</span>
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-px bg-[#B6883A] transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <a
                href="https://wa.me/5511912252450"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 border border-[#B6883A]/50 hover:bg-[#B6883A] transition-colors duration-300"
                aria-label="Fale conosco pelo WhatsApp"
              >
                <span className="font-mono text-[#D9AA5C] group-hover:text-[#0B0A08] text-[11px] tracking-[0.1em] uppercase transition-colors duration-300">
                  Fale Conosco
                </span>
                <svg
                  className="w-3.5 h-3.5 text-[#D9AA5C] group-hover:text-[#0B0A08] transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-[#B6883A]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-[#0B0A08]/[0.98] backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          <div className="absolute top-20 left-6 right-6 h-px bg-[#2B2620]" />

          <div className="flex flex-col justify-center h-full px-8 gap-1 font-mono">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-baseline gap-4 py-3 border-b border-[#1E1B15] text-lg tracking-wide transition-colors duration-300 font-display ${
                    isActive ? "text-[#D9AA5C]" : "text-[#F1ECDD]"
                  }`}
                >
                  <span className="font-mono text-xs text-[#4A453A]">{String(i + 1).padStart(2, "0")}</span>
                  {link.name}
                </a>
              );
            })}

            <a
              href="https://wa.me/5511912252450"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-[#B6883A] text-[#0B0A08] font-mono text-xs tracking-[0.1em] uppercase"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </>
  );
}
