"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const equipe = [
  { nome: "Dra. Karla Ronqui",   cargo: "Sócia Fundadora",  area: "Direito Empresarial e Tributário", img: "/karen.png"    },
  { nome: "Dr. André Coelho",    cargo: "Sócio",            area: "Contencioso Cível e Arbitragem",   img: "/andre.png"    },
  { nome: "Dra. Daniela Alves",  cargo: "Advogada",         area: "Direito Contratual e Regulatório", img: "/daniela.png"  },
  { nome: "Dr. Leonardo Landim", cargo: "Advogado",         area: "Direito do Consumidor e Trabalhista", img: "/leonardo.png" },
];

export default function EquipeSection() {
  return (
    <section id="equipe" className="relative bg-[#F8F4EC] py-24 md:py-32" aria-label="Nossa equipe">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-16 max-w-2xl"
        >
          <p className="section-label mb-6">Nossa Equipe</p>
          <h2 className="font-display text-[2.4rem] sm:text-5xl text-[#222222] font-light leading-tight">
            Conheça nossos{" "}
            <em className="not-italic text-gold-gradient">especialistas</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {equipe.map((m, i) => (
            <motion.article
              key={m.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group"
              aria-label={`Perfil de ${m.nome}`}
            >
              {/* Foto */}
              <div className="relative overflow-hidden mb-5 bg-[#EFE6D8]" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={m.img}
                  alt={`Foto de ${m.nome}, ${m.cargo}`}
                  fill
                  sizes="(max-width:768px) 100vw,(max-width:1024px) 50vw,25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {/* Overlay suave hover */}
                <div className="absolute inset-0 bg-[rgba(184,137,59,0)] group-hover:bg-[rgba(184,137,59,0.06)] transition-colors duration-700" />
                {/* Borda dourada inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(184,137,59,0)] group-hover:bg-[rgba(184,137,59,0.5)] transition-colors duration-500" />
              </div>

              {/* Info */}
              <div className="px-1">
                <h3 className="font-display text-[1.25rem] text-[#222222] font-light mb-1 group-hover:text-[#B8893B] transition-colors duration-400">
                  {m.nome}
                </h3>
                <p className="font-ui text-[10px] tracking-[0.12em] uppercase text-[#B8893B] mb-1.5">{m.cargo}</p>
                <p className="font-ui text-xs text-[#9A948C] leading-relaxed">{m.area}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://www.instagram.com/drc.advogados/"
            target="_blank" rel="noopener noreferrer"
            className="btn-gold focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B8893B] focus-visible:outline-offset-2"
            aria-label="Seguir DRC Advogados no Instagram"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Siga no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
