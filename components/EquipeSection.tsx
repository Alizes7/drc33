"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const equipe = [
  { nome: "Dra. Karla Ronqui", cargo: "Sócia Fundadora", especialidade: "Direito Empresarial e Tributário", imagem: "/karen.png" },
  { nome: "Dr. André Coelho", cargo: "Sócio", especialidade: "Contencioso Cível e Arbitragem", imagem: "/andre.png" },
  { nome: "Dra. Daniela Alves", cargo: "Advogada", especialidade: "Direito Contratual e Regulatório", imagem: "/daniela.png" },
  { nome: "Dr. Leonardo Landim", cargo: "Advogado", especialidade: "Direito do Consumidor e Trabalhista", imagem: "/leonardo.png" },
];

export default function EquipeSection() {
  return (
    <section id="equipe" className="relative py-24 md:py-32 bg-[#110F0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#B6883A] mb-5 block">
            Nossa Equipe
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F1ECDD]">
            Conheça nossos <em className="not-italic text-brass-gradient">especialistas</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2B2620]">
          {equipe.map((membro, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#110F0A]"
              aria-label={`Perfil de ${membro.nome}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={membro.imagem}
                  alt={`Foto profissional de ${membro.nome}, ${membro.cargo}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-60 group-hover:opacity-0 transition-opacity duration-700"
                  style={{ background: "linear-gradient(180deg, transparent 40%, #0B0A08 100%)" }}
                />
                <div className="absolute inset-0 bg-[#B6883A]/0 group-hover:bg-[#B6883A]/10 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2B2620] group-hover:bg-[#B6883A] transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg text-[#F1ECDD] font-light mb-1 group-hover:text-[#D9AA5C] transition-colors duration-500">
                  {membro.nome}
                </h3>
                <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#B6883A] mb-2">
                  {membro.cargo}
                </p>
                <p className="text-[#6E6757] text-sm leading-relaxed">{membro.especialidade}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.instagram.com/drc.advogados/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-[#B6883A]/40 text-[#D9AA5C] font-mono text-xs tracking-[0.1em] uppercase hover:bg-[#B6883A] hover:text-[#0B0A08] transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2"
            aria-label="Siga DRC Advogados no Instagram"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Siga-nos no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
