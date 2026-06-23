"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

const areas = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <rect x="4" y="6" width="24" height="20" rx="1" />
        <path d="M10 12h12M10 17h8M10 22h6" strokeLinecap="round" />
      </svg>
    ),
    title:    "Direito Empresarial",
    subtitle: "Assessoria estratégica",
    desc:     "Soluções jurídicas integradas para empresas, cobrindo toda a cadeia de relações societárias, contratuais e de governança.",
    detalhes: ["Planejamento societário", "Fusões e aquisições", "Governança corporativa", "Due diligence", "Contratos empresariais"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <circle cx="16" cy="12" r="7" />
        <path d="M8 28c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
      </svg>
    ),
    title:    "Direito Societário",
    subtitle: "Estruturação e proteção",
    desc:     "Estruturação de sociedades, reorganizações societárias, acordos de acionistas e dissolução de vínculos com segurança jurídica.",
    detalhes: ["Constituição de sociedades", "Acordos de acionistas", "Reorganizações", "Dissolução societária", "Holding familiar"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <path d="M6 8h20v16H6z" />
        <path d="M6 8l10 8 10-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title:    "Contratos",
    subtitle: "Elaboração e revisão",
    desc:     "Elaboração, revisão e negociação de contratos complexos para proteger interesses empresariais e minimizar riscos.",
    detalhes: ["Contratos comerciais", "Contratos internacionais", "Revisão contratual", "Negociação de cláusulas", "Resolução de disputas"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <path d="M16 4L4 12v4h4v8h16v-8h4v-4L16 4z" strokeLinejoin="round" />
      </svg>
    ),
    title:    "Contencioso Estratégico",
    subtitle: "Defesa e representação",
    desc:     "Atuação processual de alto padrão em demandas cíveis, comerciais e arbitrais de alta complexidade.",
    detalhes: ["Ações cíveis e comerciais", "Arbitragem nacional e int'l", "Tutelas de urgência", "Execuções", "Mediação e conciliação"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <rect x="4" y="4" width="24" height="24" rx="1" />
        <path d="M10 16h12M16 10v12" strokeLinecap="round" />
      </svg>
    ),
    title:    "Direito Tributário",
    subtitle: "Planejamento e defesa",
    desc:     "Consultoria preventiva, planejamento fiscal e defesa administrativa e judicial em matéria tributária.",
    detalhes: ["Planejamento tributário", "Recuperação de créditos", "Defesa em autuações", "Compliance tributário", "Reforma Tributária"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <rect x="8" y="4" width="16" height="24" rx="1" />
        <path d="M12 10h8M12 15h8M12 20h5" strokeLinecap="round" />
        <circle cx="23" cy="23" r="4" />
        <path d="M21 23h4M23 21v4" strokeLinecap="round" />
      </svg>
    ),
    title:    "Proteção de Dados & LGPD",
    subtitle: "Adequação e compliance",
    desc:     "Adequação à LGPD, governança de dados pessoais, resposta a incidentes e relacionamento com a ANPD.",
    detalhes: ["Programa de compliance", "Políticas de privacidade", "DPO as a Service", "Gestão de incidentes", "Treinamentos"],
  },
];

export default function AreasSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="areas" className="relative bg-[#F8F4EC] py-24 md:py-32" aria-label="Áreas de atuação">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-16 max-w-2xl"
        >
          <p className="section-label mb-6">Áreas de Atuação</p>
          <h2 className="font-display text-[2.4rem] sm:text-5xl text-[#222222] font-light leading-tight">
            Nossas <em className="not-italic text-gold-gradient">especialidades</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(184,137,59,0.15)]">
          {areas.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(i, 5) * 0.07 }}
              className="group bg-[#F8F4EC] hover:bg-white transition-colors duration-500 p-8 sm:p-9 cursor-pointer"
              onClick={() => setOpen(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setOpen(i)}
              aria-haspopup="dialog"
            >
              <div className="text-[#B8893B] mb-6 transition-transform duration-500 group-hover:scale-105">
                {a.icon}
              </div>
              <p className="font-ui text-[10px] tracking-[0.15em] uppercase text-[#9A948C] mb-2">{a.subtitle}</p>
              <h3 className="font-display text-xl sm:text-2xl text-[#222222] font-light mb-3 group-hover:text-[#B8893B] transition-colors duration-500">
                {a.title}
              </h3>
              <p className="font-ui text-sm text-[#6C665D] leading-relaxed font-light mb-6 line-clamp-2">{a.desc}</p>
              <span className="inline-flex items-center gap-1.5 font-ui text-[11px] font-500 tracking-[0.08em] uppercase text-[#B8893B] group-hover:gap-3 transition-all duration-300">
                Saiba mais <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal de área */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#222222]/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={areas[open].title}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-lg w-full p-8 sm:p-10 relative shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 text-[#9A948C] hover:text-[#B8893B] transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-[#B8893B] mb-6">{areas[open].icon}</div>
              <p className="section-label mb-2">{areas[open].subtitle}</p>
              <h3 className="font-display text-3xl text-[#222222] font-light mb-4">{areas[open].title}</h3>
              <p className="font-ui text-sm text-[#6C665D] leading-relaxed mb-7 font-light">{areas[open].desc}</p>
              <ul className="space-y-2.5 mb-8">
                {areas[open].detalhes.map((d) => (
                  <li key={d} className="flex items-start gap-3 font-ui text-sm text-[#3A3732]">
                    <span className="w-1 h-1 bg-[#B8893B] mt-2 shrink-0" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5511912252450"
                target="_blank" rel="noopener noreferrer"
                className="btn-gold-fill w-full justify-center"
              >
                Falar com especialista
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
