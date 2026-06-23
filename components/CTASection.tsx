"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #8E682B 0%, #B8893B 50%, #8E682B 100%)" }}
      aria-label="Chamada para ação"
    >
      {/* Decoração: arcos em negativo */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-10" viewBox="0 0 700 700">
          {[300, 240, 180, 120].map((r) => (
            <circle key={r} cx="350" cy="350" r={r} fill="none" stroke="white" strokeWidth="1" />
          ))}
        </svg>
        {/* Grade suave */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-ui text-[10.5px] tracking-[0.25em] uppercase text-white/60 mb-6">Vamos conversar</p>
          <h2 className="font-display text-[2.6rem] sm:text-5xl lg:text-6xl text-white font-light leading-tight mb-6 max-w-3xl mx-auto">
            Vamos conversar sobre o futuro do seu negócio?
          </h2>
          <p className="font-ui font-light text-white/75 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Agende uma conversa com a nossa equipe e descubra como podemos apoiar suas
            decisões com segurança jurídica e estratégia.
          </p>
          <a
            href="https://wa.me/5511912252450"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 bg-white text-[#8E682B] font-ui font-600 text-[11px] tracking-[0.1em] uppercase hover:bg-[#F8F4EC] transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white focus-visible:outline-offset-2"
            aria-label="Agendar consulta pelo WhatsApp"
          >
            Agendar Consulta
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
