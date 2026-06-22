"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const depoimentos = [
  { texto: "A DRC Advogados se tornou um parceiro estratégico fundamental para nossa empresa. A qualidade técnica e o comprometimento com resultados superaram todas as expectativas.", autor: "Marcelo Andrade", cargo: "CEO, Grupo Andrade" },
  { texto: "Excelência jurídica combinada com atendimento personalizado. A equipe entende perfeitamente as necessidades do negócio e entrega soluções práticas e eficientes.", autor: "Patrícia Lima", cargo: "Diretora Jurídica, TechCorp Brasil" },
  { texto: "Profissionalismo impecável e resultados consistentes. Recomendo a DRC para qualquer empresa que busque excelência em assessoria jurídica empresarial.", autor: "Roberto Santos", cargo: "Presidente, Santos Holding" },
];

export default function DepoimentosSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % depoimentos.length), []);
  const prevFn = useCallback(() => setCurrent((prev) => (prev - 1 + depoimentos.length) % depoimentos.length), []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="depoimentos" className="relative py-24 md:py-32 bg-[#0B0A08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#B6883A] mb-5 block">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F1ECDD]">
            O que dizem <em className="not-italic text-brass-gradient">nossos clientes</em>
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-[auto_1fr] gap-6 md:gap-10">
          <span className="font-display text-[5rem] sm:text-[7rem] leading-none text-[#B6883A]/25 select-none" aria-hidden="true">
            &ldquo;
          </span>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-display text-2xl md:text-3xl text-[#E4DCC8] leading-snug font-light mb-8">
                  {depoimentos[current].texto}
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-[#B6883A]" />
                  <div>
                    <p className="text-[#D9AA5C] font-mono text-xs tracking-[0.1em] uppercase">
                      {depoimentos[current].autor}
                    </p>
                    <p className="text-[#6E6757] text-sm mt-0.5">{depoimentos[current].cargo}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-6 mt-12">
              <div className="flex gap-2">
                {depoimentos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-px transition-all duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] ${
                      index === current ? "bg-[#B6883A] w-10" : "bg-[#2B2620] w-5"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                    aria-current={index === current ? "true" : undefined}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={prevFn}
                  className="p-2 text-[#6E6757] hover:text-[#B6883A] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="p-2 text-[#6E6757] hover:text-[#B6883A] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2"
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
  );
}
