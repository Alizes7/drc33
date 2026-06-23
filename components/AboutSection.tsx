"use client";

import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v8l4 4" strokeLinecap="round" />
      </svg>
    ),
    title:       "Atuação Nacional",
    description: "Presença estratégica e capilaridade para atender clientes em todo o território brasileiro com o mesmo padrão de excelência.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <rect x="4" y="10" width="24" height="18" rx="1" />
        <path d="M10 10V7a6 6 0 0 1 12 0v3" strokeLinecap="round" />
      </svg>
    ),
    title:       "Visão de Negócio",
    description: "Compreendemos o contexto empresarial de cada cliente para oferecer soluções juridicamente sólidas e estrategicamente eficazes.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <path d="M16 4l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" strokeLinejoin="round" />
      </svg>
    ),
    title:       "Ética e Transparência",
    description: "Relação construída sobre confiança, clareza e compromisso irrestrito com a ética profissional em cada etapa do relacionamento.",
  },
];

export default function AboutSection() {
  return (
    <>
      <WaveDivider fromColor="#F8F4EC" toColor="#EFE6D8" />

      <section
        id="sobre"
        className="relative bg-[#EFE6D8] py-24 md:py-32"
        aria-label="Sobre o escritório"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label mb-6">Sobre o Escritório</p>
              <h2 className="font-display text-[2.4rem] sm:text-5xl text-[#222222] font-light leading-tight mb-6">
                Estratégia, técnica e<br />
                <em className="not-italic text-gold-gradient">compromisso</em>{" "}
                com o resultado.
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="flex flex-col justify-center"
            >
              <p className="text-[#6C665D] text-base leading-relaxed font-ui font-light mb-5">
                O DRC Advogados atua com rigor técnico, visão de negócio e atendimento
                personalizado para empresas e pessoas que buscam segurança jurídica em
                decisões relevantes.
              </p>
              <p className="text-[#6C665D] text-base leading-relaxed font-ui font-light mb-8">
                Nossa equipe multidisciplinar combina experiência contenciosa e
                consultiva para antecipar riscos, proteger patrimônio e criar valor
                jurídico sustentável.
              </p>
              <a
                href="#contato"
                className="btn-gold self-start focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B8893B] focus-visible:outline-offset-2"
              >
                Fale com nossa equipe
                <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Três pilares */}
          <div className="grid sm:grid-cols-3 gap-px bg-[rgba(184,137,59,0.15)]">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group bg-[#EFE6D8] hover:bg-white transition-colors duration-500 p-8 sm:p-10"
              >
                <div className="text-[#B8893B] mb-6 group-hover:scale-105 transition-transform duration-500">
                  {p.icon}
                </div>
                <h3 className="font-display text-xl text-[#222222] font-light mb-3 group-hover:text-[#B8893B] transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="font-ui text-sm text-[#6C665D] leading-relaxed font-light">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#EFE6D8" toColor="#F8F4EC" flip />
    </>
  );
}
