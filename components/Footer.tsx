"use client";

import Image from "next/image";

const links = {
  institucional: [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Equipe", href: "#equipe" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Depoimentos", href: "#depoimentos" },
  ],
  areas: [
    { name: "Direito Empresarial", href: "#areas" },
    { name: "Direito Tributário", href: "#areas" },
    { name: "Contencioso Cível", href: "#areas" },
    { name: "Direito Contratual", href: "#areas" },
  ],
  contato: [
    { name: "+55 11 91225-2450", href: "tel:+5511912252450" },
    { name: "contato@drcadvogados.com.br", href: "mailto:contato@drcadvogados.com.br" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#080705] border-t border-[#2B2620]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="" width={36} height={36} className="w-9 h-9" />
              <div>
                <span className="font-display text-base tracking-[0.15em] text-[#F1ECDD]">DRC ADVOGADOS</span>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#4A453A] uppercase mt-0.5">
                  Advocacia Empresarial
                </p>
              </div>
            </div>
            <p className="text-sm text-[#4A453A] leading-relaxed">
              Excelência jurídica com foco em resultados para empresas nacionais e internacionais.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] text-[#B6883A] tracking-[0.2em] uppercase mb-6">Institucional</h4>
            <ul className="space-y-3">
              {links.institucional.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-[#6E6757] hover:text-[#B6883A] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] text-[#B6883A] tracking-[0.2em] uppercase mb-6">Áreas de Atuação</h4>
            <ul className="space-y-3">
              {links.areas.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-[#6E6757] hover:text-[#B6883A] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] text-[#B6883A] tracking-[0.2em] uppercase mb-6">Contato</h4>
            <ul className="space-y-3">
              {links.contato.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-[#6E6757] hover:text-[#B6883A] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#4A453A]">
              R. Dr. Geraldo Campos Moreira, 164, Cj 134
              <br />
              Cidade Monções, São Paulo/SP
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1E1B15] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-[#38342B]">© 2025 DRC Advogados. Todos os direitos reservados.</p>
          <div className="flex gap-6 font-mono text-[10px]">
            <a href="#" className="text-[#38342B] hover:text-[#B6883A] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2">
              Política de Privacidade
            </a>
            <a href="#" className="text-[#38342B] hover:text-[#B6883A] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
