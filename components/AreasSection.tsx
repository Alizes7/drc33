"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase, Building2, FileText, Gavel, Landmark, Shield,
  TrendingUp, Users, Scale, Globe, ChevronDown, ArrowRight,
} from "lucide-react";

interface Area {
  icon: React.ElementType;
  title: string;
  description: string;
  detalhes: string[];
}

const areas: Area[] = [
  { icon: Briefcase, title: "Direito Empresarial", description: "Assessoria completa para empresas de todos os portes, com foco em prevenção e solução de conflitos societários.", detalhes: ["Planejamento societário e holding", "Fusões e aquisições", "Contratos comerciais e corporativos", "Governança corporativa", "Due diligence"] },
  { icon: Building2, title: "Direito Tributário", description: "Planejamento tributário estratégico e defesa em processos administrativos e judiciais.", detalhes: ["Planejamento tributário", "Recuperação de créditos", "Defesa em autuações fiscais", "Consultoria em operações especiais", "Compliance tributário"] },
  { icon: FileText, title: "Direito Contratual", description: "Elaboração, revisão e negociação de contratos comerciais e corporativos complexos.", detalhes: ["Elaboração de contratos", "Revisão de cláusulas", "Negociação comerciais", "Contratos internacionais", "Resolução de conflitos contratuais"] },
  { icon: Gavel, title: "Contencioso Cível", description: "Representação judicial em demandas cíveis e comerciais com estratégia e excelência.", detalhes: ["Ações cíveis e comerciais", "Execuções", "Tutela de urgência", "Recursos", "Mediação e conciliação"] },
  { icon: Landmark, title: "Direito Regulatório", description: "Compliance e assessoria em normas setoriais para diversos segmentos de mercado.", detalhes: ["Licenciamento", "Regulação setorial", "Compliance regulatório", "Relações com órgãos reguladores", "Auditorias"] },
  { icon: Shield, title: "Direito do Consumidor", description: "Defesa empresarial em ações consumeristas e consultoria preventiva.", detalhes: ["Defesa em ações consumeristas", "Consultoria preventiva", "Revisão de políticas", "Negociação de acordos", "Compliance consumerista"] },
  { icon: TrendingUp, title: "Recuperação Judicial", description: "Assessoria especializada em processos de recuperação judicial e extrajudicial de empresas.", detalhes: ["Planejamento de recuperação", "Negociação com credores", "Elaboração de plano", "Assessoria em assembleias", "Recuperação extrajudicial"] },
  { icon: Users, title: "Direito Trabalhista", description: "Consultoria preventiva e contencioso trabalhista para empresas de todos os portes.", detalhes: ["Consultoria preventiva", "Defesa em reclamações", "Auditoria trabalhista", "Elaboração de documentos", "Negociação coletiva"] },
  { icon: Scale, title: "Arbitragem e Mediação", description: "Representação em procedimentos arbitrais e mediações de alta complexidade.", detalhes: ["Representação em arbitragens", "Mediação comercial", "Elaboração de cláusulas", "Execução de laudos", "Consultoria prévia"] },
  { icon: Globe, title: "Direito Internacional", description: "Assessoria em operações transnacionais e resolução de conflitos de jurisdição.", detalhes: ["Contratos internacionais", "Due diligence cross-border", "Resolução de conflitos", "Planejamento estrutural", "Compliance internacional"] },
];

export default function AreasSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="areas" className="relative py-24 md:py-32 bg-[#110F0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#B6883A] mb-5 block">
            Áreas de Atuação · Índice
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F1ECDD] mb-6">
            Nossas <em className="not-italic text-brass-gradient">especialidades</em>
          </h2>
          <p className="text-[#9C9484] leading-relaxed">
            Atuação multidisciplinar com foco nas áreas preventiva, consultiva e
            contenciosa, priorizando o atendimento personalizado de acordo com o
            porte da empresa.
          </p>
        </motion.div>

        <div className="border-t border-[#2B2620]">
          {areas.map((area, index) => {
            const isOpen = open === index;
            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
                className="border-b border-[#2B2620]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center gap-4 sm:gap-8 py-6 sm:py-7 text-left group focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-4"
                  aria-expanded={isOpen}
                  aria-controls={`area-detail-${index}`}
                >
                  <span className="font-mono text-sm text-[#4A453A] group-hover:text-[#B6883A] transition-colors duration-300 w-8 flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <area.icon
                    className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${
                      isOpen ? "text-[#D9AA5C]" : "text-[#6E6757] group-hover:text-[#B6883A]"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="flex-1 min-w-0">
                    <span
                      className={`block font-display text-lg sm:text-2xl font-light transition-colors duration-300 ${
                        isOpen ? "text-[#D9AA5C]" : "text-[#F1ECDD] group-hover:text-[#E4DCC8]"
                      }`}
                    >
                      {area.title}
                    </span>
                    <span className="hidden sm:block text-sm text-[#6E6757] mt-1 leading-relaxed truncate group-hover:text-[#9C9484] transition-colors duration-300">
                      {area.description}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6E6757] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#B6883A]" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`area-detail-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-12 sm:pl-20 grid sm:grid-cols-2 gap-8">
                        <p className="sm:hidden text-sm text-[#9C9484] leading-relaxed -mt-2">
                          {area.description}
                        </p>
                        <ul className="space-y-3">
                          {area.detalhes.map((detalhe) => (
                            <li key={detalhe} className="flex items-start gap-3 text-sm text-[#E4DCC8]">
                              <span className="w-1 h-1 bg-[#B6883A] mt-2 flex-shrink-0" aria-hidden="true" />
                              {detalhe}
                            </li>
                          ))}
                        </ul>
                        <div className="flex sm:items-end sm:justify-end">
                          <a
                            href="https://wa.me/5511912252450"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 border border-[#B6883A]/40 text-[#D9AA5C] font-mono text-xs tracking-[0.1em] uppercase hover:bg-[#B6883A] hover:text-[#0B0A08] transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2"
                          >
                            Fale com um especialista
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
