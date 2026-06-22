"use client";

import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Excelência Jurídica",
    description: "Atuação técnica refinada com foco em resultados assertivos e soluções inovadoras.",
  },
  {
    num: "02",
    title: "Proteção Estratégica",
    description: "Antecipação de riscos e defesa proativa dos interesses de nossos clientes.",
  },
  {
    num: "03",
    title: "Atendimento Personalizado",
    description: "Relação próxima e transparente, adaptada às necessidades específicas de cada caso.",
  },
  {
    num: "04",
    title: "Histórico de Sucesso",
    description: "Mais de 500 casos resolvidos com excelência ao longo de mais de 20 anos.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-[#0B0A08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#B6883A] mb-5 block">
              Sobre Nós
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#F1ECDD] mb-8 leading-tight">
              Tradição e <em className="not-italic text-brass-gradient">excelência</em> em advocacia
            </h2>
            <p className="text-[#9C9484] leading-relaxed mb-6">
              O escritório DRC Advogados foi fundado com o propósito de oferecer serviços
              jurídicos de alto padrão, combinando expertise técnica com uma abordagem
              estratégica e personalizada.
            </p>
            <p className="text-[#9C9484] leading-relaxed mb-10">
              Nossa equipe multidisciplinar atua de forma integrada, garantindo soluções
              completas e eficientes para os mais complexos desafios jurídicos enfrentados
              por empresas e empresários.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.15em] uppercase text-[#D9AA5C] group focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-4"
            >
              Entrar em contato
              <span className="w-8 h-px bg-[#B6883A] transition-all group-hover:w-12" />
            </a>
          </motion.div>

          <div className="lg:col-span-7 lg:pl-8 border-t border-[#2B2620]">
            {features.map((feature, index) => (
              <motion.div
                key={feature.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group grid sm:grid-cols-12 gap-3 sm:gap-6 py-8 border-b border-[#2B2620]"
              >
                <span className="sm:col-span-2 font-mono text-sm text-[#4A453A] group-hover:text-[#B6883A] transition-colors duration-300">
                  {feature.num}
                </span>
                <h3 className="sm:col-span-4 font-display text-xl text-[#F1ECDD] font-light">
                  {feature.title}
                </h3>
                <p className="sm:col-span-6 text-sm text-[#6E6757] group-hover:text-[#9C9484] transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
