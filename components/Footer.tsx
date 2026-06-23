"use client";

import Image from "next/image";

const nav = {
  Institucional:    [{ n: "Sobre Nós", h: "#sobre" },{ n: "Equipe", h: "#equipe" },{ n: "Diferenciais", h: "#diferenciais" },{ n: "Depoimentos", h: "#depoimentos" }],
  "Áreas":          [{ n: "Direito Empresarial", h: "#areas" },{ n: "Direito Tributário", h: "#areas" },{ n: "Contratos", h: "#areas" },{ n: "Contencioso", h: "#areas" }],
  Contato:          [{ n: "+55 11 91225-2450", h: "tel:+5511912252450" },{ n: "contato@drcadvogados.com.br", h: "mailto:contato@drcadvogados.com.br" }],
};

export default function Footer() {
  return (
    <footer className="bg-[#F3EFE6] border-t border-[rgba(184,137,59,0.15)]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="" width={36} height={36} className="w-9 h-9 object-contain" />
              <div className="leading-tight">
                <span className="font-display text-sm tracking-[0.15em] text-[#222222]">DRC ADVOGADOS</span>
                <p className="font-ui text-[9px] tracking-[0.2em] uppercase text-[#9A948C] mt-0.5">Advocacia Empresarial</p>
              </div>
            </div>
            <p className="font-ui text-xs text-[#9A948C] leading-relaxed font-light mb-5">
              Excelência jurídica com foco em resultados para empresas nacionais e internacionais.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a href="https://www.instagram.com/drc.advogados/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-[rgba(184,137,59,0.25)] flex items-center justify-center text-[#9A948C] hover:border-[#B8893B] hover:text-[#B8893B] transition-all duration-300"
                aria-label="Instagram DRC Advogados">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://wa.me/5511912252450" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-[rgba(184,137,59,0.25)] flex items-center justify-center text-[#9A948C] hover:border-[#B8893B] hover:text-[#B8893B] transition-all duration-300"
                aria-label="WhatsApp DRC Advogados">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(nav).map(([col, links]) => (
            <div key={col}>
              <h4 className="font-ui text-[9.5px] tracking-[0.2em] uppercase text-[#B8893B] mb-5">{col}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.n}>
                    <a href={l.h} className="font-ui text-xs text-[#9A948C] hover:text-[#B8893B] transition-colors duration-300 font-light focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B8893B] focus-visible:outline-offset-2">
                      {l.n}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(184,137,59,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-ui text-[10px] text-[#C8C2BA]">© 2025 DRC Advogados. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            {["Política de Privacidade", "Termos de Uso"].map((t) => (
              <a key={t} href="#" className="font-ui text-[10px] text-[#C8C2BA] hover:text-[#B8893B] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B8893B]">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
