"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BrandMark from "./BrandMark";

const stats = [
  { number: "20+", label: "Anos de Experiência" },
  { number: "11", label: "Áreas Especializadas" },
  { number: "Brasil", label: "Atendimento Nacional" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0A08]"
      aria-label="Seção principal do site"
    >
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#B6883A 1px, transparent 1px), linear-gradient(90deg, #B6883A 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(182,136,58,0.10) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-8 font-mono text-[11px] tracking-[0.2em] uppercase text-[#9C9484]"
            >
              <span className="w-1.5 h-1.5 bg-[#B6883A]" />
              DRC Advogados — São Paulo, SP
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-light text-[#F1ECDD] text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.04] mb-8"
            >
              Especializados em{" "}
              <em className="not-italic text-brass-gradient font-normal">Direito Empresarial</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-[#9C9484] text-base sm:text-lg max-w-xl leading-relaxed mb-10"
            >
              Parceria estratégica com excelência jurídica e resultados assertivos.
              Soluções preventivas, consultivas e contenciosas de alto padrão para
              empresas nacionais e internacionais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <a
                href="https://wa.me/5511912252450"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#B6883A] text-[#0B0A08] font-mono text-xs tracking-[0.12em] uppercase hover:bg-[#D9AA5C] transition-colors duration-300 justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2"
                aria-label="Agende sua consulta pelo WhatsApp"
              >
                Agende sua consulta
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#areas"
                className="inline-flex items-center gap-3 px-7 py-4 border border-[#2B2620] text-[#E4DCC8] font-mono text-xs tracking-[0.12em] uppercase hover:border-[#B6883A]/60 hover:text-[#D9AA5C] transition-colors duration-300 justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2"
                aria-label="Conheça nossas áreas de atuação"
              >
                Conheça nossas áreas
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap divide-x divide-[#2B2620] border-t border-[#2B2620] pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="pr-8 mr-8 first:pl-0 last:mr-0 last:pr-0 mb-2">
                  <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#6E6757] mb-2">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-3xl text-[#D9AA5C] font-light">{stat.number}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative text-[#B6883A]"
            >
              <BrandMark size={380} animated strokeWidth={0.75} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[#B6883A]/[0.06] blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
