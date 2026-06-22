"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BrandMark from "./BrandMark";

export default function CTASection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0B0A08] overflow-hidden" aria-label="Chamada para ação">
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 text-[#B6883A] opacity-[0.06] pointer-events-none hidden md:block">
        <BrandMark size={420} strokeWidth={0.75} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#B6883A] mb-6 block">
            Agende uma conversa
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#F1ECDD] mb-6 leading-tight">
            Pronto para <em className="not-italic text-brass-gradient">proteger</em> seu negócio?
          </h2>
          <p className="text-[#9C9484] mb-10 leading-relaxed">
            Agende sua consulta jurídica hoje mesmo e descubra como nossa advocacia
            pode fazer a diferença em sua empresa.
          </p>
          <a
            href="https://wa.me/5511912252450"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-9 py-4 bg-[#B6883A] text-[#0B0A08] font-mono text-xs tracking-[0.12em] uppercase hover:bg-[#D9AA5C] transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2"
            aria-label="Fale conosco pelo WhatsApp"
          >
            Fale conosco no WhatsApp
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
