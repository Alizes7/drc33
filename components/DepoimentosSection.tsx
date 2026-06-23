"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WaveDivider from "./WaveDivider";

const depoimentos = [
  {
    texto: "A DRC combina excelência técnica, visão estratégica e atendimento próximo. Uma parceria de confiança para decisões relevantes.",
    autor: "Marcelo Andrade",
    cargo: "CEO, Grupo Andrade",
  },
  {
    texto: "Profissionalismo impecável e resultados consistentes. Recomendo a DRC para qualquer empresa que busque excelência em assessoria jurídica.",
    autor: "Patrícia Lima",
    cargo: "Diretora Jurídica, TechCorp Brasil",
  },
  {
    texto: "A equipe entende perfeitamente as necessidades do negócio e entrega soluções práticas, eficientes e de alto padrão.",
    autor: "Roberto Santos",
    cargo: "Presidente, Santos Holding",
  },
];

export default function DepoimentosSection() {
  const [cur, setCur] = useState(0);

  const next  = useCallback(() => setCur((p) => (p + 1) % depoimentos.length), []);
  const prev  = useCallback(() => setCur((p) => (p - 1 + depoimentos.length) % depoimentos.length), []);

  useEffect(() => {
    const t = setInterval(next, 7500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <>
      <WaveDivider fromColor="#F8F4EC" toColor="#EFE6D8" />

      <section
        id="depoimentos"
        className="relative bg-[#EFE6D8] py-24 md:py-32"
        aria-label="Depoimentos de clientes"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="section-label mb-6">Depoimentos</p>
          <h2 className="font-display text-[2.4rem] sm:text-5xl text-[#222222] font-light leading-tight mb-16 max-w-xl">
            O que dizem nossos{" "}
            <em className="not-italic text-gold-gradient">clientes</em>
          </h2>

          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-start">
            {/* Aspas decorativas */}
            <span
              aria-hidden="true"
              className="font-display text-[7rem] sm:text-[9rem] lg:text-[11rem] leading-none text-[rgba(184,137,59,0.18)] select-none"
            >
              &ldquo;
            </span>

            <div>
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={cur}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-2xl sm:text-[2rem] text-[#222222] leading-snug font-light mb-8 max-w-2xl"
                >
                  {depoimentos[cur].texto}
                </motion.blockquote>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`author-${cur}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 mb-10"
                >
                  <span className="w-10 h-px bg-[#B8893B]" aria-hidden="true" />
                  <div>
                    <p className="font-ui text-[11px] font-600 tracking-[0.12em] uppercase text-[#B8893B]">
                      {depoimentos[cur].autor}
                    </p>
                    <p className="font-ui text-sm text-[#9A948C] mt-0.5">{depoimentos[cur].cargo}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controles */}
              <div className="flex items-center gap-5">
                {/* Dots */}
                <div className="flex gap-2">
                  {depoimentos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCur(i)}
                      aria-label={`Depoimento ${i + 1}`}
                      aria-current={i === cur ? "true" : undefined}
                      className={`h-px transition-all duration-300 ${
                        i === cur
                          ? "w-10 bg-[#B8893B]"
                          : "w-5 bg-[rgba(184,137,59,0.3)]"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-1.5 ml-auto">
                  <button
                    onClick={prev}
                    className="w-9 h-9 border border-[rgba(184,137,59,0.3)] flex items-center justify-center text-[#B8893B] hover:bg-[#B8893B] hover:text-white transition-all duration-300"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 border border-[rgba(184,137,59,0.3)] flex items-center justify-center text-[#B8893B] hover:bg-[#B8893B] hover:text-white transition-all duration-300"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#EFE6D8" toColor="#F8F4EC" flip />
    </>
  );
}
