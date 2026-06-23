"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Composição visual direita: arcos concêntricos dourados — selo notarial */
function SealComposition() {
  return (
    <svg
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      {/* Glow suave central */}
      <ellipse cx="240" cy="240" rx="180" ry="180" fill="rgba(239,230,216,0.55)" />

      {/* Arcos concêntricos externos — selo */}
      {[210, 175, 140, 108].map((r, i) => (
        <circle
          key={r}
          cx="240" cy="240" r={r}
          fill="none"
          stroke="rgba(184,137,59,0.18)"
          strokeWidth={i === 0 ? 0.75 : 0.5}
        />
      ))}

      {/* Linha horizontal de corte — divide o selo */}
      <line x1="68" y1="240" x2="412" y2="240" stroke="rgba(184,137,59,0.12)" strokeWidth="0.5" />
      <line x1="240" y1="68"  x2="240" y2="412" stroke="rgba(184,137,59,0.12)" strokeWidth="0.5" />

      {/* Arco decorativo superior — como um frontão clássico */}
      <path
        d="M 120,290 Q 240,130 360,290"
        fill="none"
        stroke="rgba(184,137,59,0.45)"
        strokeWidth="1"
      />
      <path
        d="M 140,290 Q 240,155 340,290"
        fill="none"
        stroke="rgba(184,137,59,0.25)"
        strokeWidth="0.75"
      />

      {/* Linhas radiantes finas — efeito de gravura */}
      {Array.from({ length: 18 }).map((_, i) => {
        const angle  = (i * 20 * Math.PI) / 180;
        const r1 = 115, r2 = 205;
        const x1 = 240 + r1 * Math.cos(angle);
        const y1 = 240 + r1 * Math.sin(angle);
        const x2 = 240 + r2 * Math.cos(angle);
        const y2 = 240 + r2 * Math.sin(angle);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(184,137,59,0.08)" strokeWidth="0.5" />
        );
      })}

      {/* Cruz central dourada */}
      <line x1="228" y1="240" x2="252" y2="240" stroke="rgba(184,137,59,0.5)" strokeWidth="0.75" />
      <line x1="240" y1="228" x2="240" y2="252" stroke="rgba(184,137,59,0.5)" strokeWidth="0.75" />
      <circle cx="240" cy="240" r="4" fill="none" stroke="rgba(184,137,59,0.45)" strokeWidth="0.75" />

      {/* Textura bege de fundo — mármore sugestivo */}
      <ellipse cx="300" cy="180" rx="80" ry="60" fill="rgba(239,230,216,0.25)" />
    </svg>
  );
}

const stats = [
  { value: "20+", label: "Anos de Experiência" },
  { value: "10",  label: "Áreas Especializadas" },
  { value: "SP",  label: "Atendimento Nacional" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação do escritório"
      className="relative min-h-screen bg-[#F8F4EC] flex items-center overflow-hidden"
    >
      {/* Padrão de linhas cruzadas muito suave — papel timbrado */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#B8893B 1px,transparent 1px),linear-gradient(90deg,#B8893B 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Luz ambiente dourada suave lado direito */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 45%, rgba(239,230,216,0.8) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">

          {/* ── Left: texto ── */}
          <div className="lg:pr-16">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label mb-8 flex items-center gap-3"
            >
              <span className="w-6 h-px bg-[#B8893B]" />
              Excelência Jurídica · Visão Estratégica
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-display font-light text-[#222222] text-[2.8rem] sm:text-6xl lg:text-[4.2rem] leading-[1.06] mb-7"
            >
              Excelência jurídica
              <br />
              que impulsiona{" "}
              <em className="not-italic text-gold-gradient font-light">resultados</em>
              <br />e{" "}
              <em className="not-italic text-gold-gradient font-light">fortalece negócios.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[#6C665D] text-base sm:text-lg leading-relaxed max-w-lg mb-10 font-ui font-light"
            >
              Soluções jurídicas sofisticadas em Direito Empresarial para decisões
              seguras e sustentáveis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="flex flex-col sm:flex-row gap-3 mb-16"
            >
              <a
                href="https://wa.me/5511912252450"
                target="_blank" rel="noopener noreferrer"
                className="btn-gold-fill justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B8893B] focus-visible:outline-offset-2"
                aria-label="Falar com especialista pelo WhatsApp"
              >
                Falar com Especialista
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="#areas"
                className="btn-gold justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B8893B] focus-visible:outline-offset-2"
                aria-label="Ver áreas de atuação"
              >
                Conheça Nossas Áreas
              </a>
            </motion.div>

            {/* Stats */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap divide-x divide-[rgba(184,137,59,0.2)] pt-8 border-t border-[rgba(184,137,59,0.2)]"
            >
              {stats.map((s) => (
                <div key={s.label} className="pr-8 mr-8 last:mr-0 last:pr-0 mb-1">
                  <dt className="font-ui text-[10px] tracking-[0.15em] uppercase text-[#9A948C] mb-1.5">{s.label}</dt>
                  <dd className="font-display text-3xl text-[#B8893B] font-light">{s.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── Right: composição visual ── */}
          <div className="relative flex items-center justify-center lg:pl-8 min-h-[440px]">
            {/* Composição principal: selos/arcos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="relative w-full max-w-[420px] aspect-square mx-auto"
            >
              <SealComposition />
            </motion.div>

            {/* Card flutuante */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="absolute bottom-4 left-0 lg:left-4 right-0 sm:right-auto sm:max-w-[300px] bg-white shadow-[0_8px_40px_rgba(184,137,59,0.12)] border-l-2 border-[#B8893B] px-6 py-5"
              aria-label="Proposta de valor"
            >
              <p className="font-display text-[1.05rem] text-[#222222] leading-snug mb-4 italic font-light">
                "Mais do que interpretar a lei, antecipamos cenários, reduzimos
                riscos e criamos valor para o que realmente importa: o futuro do
                seu negócio."
              </p>
              <span className="section-label text-[#B8893B]">DRC Advogados</span>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}
