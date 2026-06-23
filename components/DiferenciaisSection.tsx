"use client";

import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";

const diferenciais = [
  {
    num:   "01",
    title: "Excelência Técnica",
    desc:  "Equipe com formação de alto nível e atualização contínua, capaz de lidar com as mais complexas questões do direito empresarial.",
  },
  {
    num:   "02",
    title: "Atendimento Personalizado",
    desc:  "Cada cliente recebe atenção dedicada, com soluções moldadas às especificidades do seu negócio, setor e momento estratégico.",
  },
  {
    num:   "03",
    title: "Foco em Resultados",
    desc:  "Nossa atuação é orientada ao objetivo do cliente, com estratégias claras, comunicação transparente e métricas definidas.",
  },
  {
    num:   "04",
    title: "Relacionamento de Longo Prazo",
    desc:  "Construímos parcerias duradouras baseadas em confiança, previsibilidade e crescimento conjunto ao longo do tempo.",
  },
];

export default function DiferenciaisSection() {
  return (
    <>
      <WaveDivider fromColor="#F8F4EC" toColor="#EFE6D8" />

      <section
        id="diferenciais"
        className="relative bg-[#EFE6D8] py-24 md:py-32"
        aria-label="Nossos diferenciais"
      >
        {/* Decoração: arco sutil no fundo */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.07] w-[500px] h-[500px]" viewBox="0 0 500 500">
            {[240, 190, 140, 90].map((r) => (
              <circle key={r} cx="250" cy="250" r={r} fill="none" stroke="#B8893B" strokeWidth="1" />
            ))}
          </svg>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="mb-16 max-w-xl"
          >
            <p className="section-label mb-6">Por Que Escolher a DRC</p>
            <h2 className="font-display text-[2.4rem] sm:text-5xl text-[#222222] font-light leading-tight">
              O que torna a DRC{" "}
              <em className="not-italic text-gold-gradient">referência.</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-px bg-[rgba(184,137,59,0.15)]">
            {diferenciais.map((d, i) => (
              <motion.div
                key={d.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group bg-[#EFE6D8] hover:bg-white transition-colors duration-500 p-9 sm:p-12"
              >
                <span className="font-display text-[3.5rem] font-light text-[rgba(184,137,59,0.2)] group-hover:text-[rgba(184,137,59,0.35)] transition-colors duration-500 leading-none block mb-6">
                  {d.num}
                </span>
                <h3 className="font-display text-2xl text-[#222222] font-light mb-4 group-hover:text-[#B8893B] transition-colors duration-500">
                  {d.title}
                </h3>
                <p className="font-ui text-sm text-[#6C665D] leading-relaxed font-light">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#EFE6D8" toColor="#F8F4EC" flip />
    </>
  );
}
