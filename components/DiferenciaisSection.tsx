"use client";

import { motion } from "framer-motion";
import { Clock, Target, MessageCircle, Award } from "lucide-react";

const diferenciais = [
  { icon: Clock, number: "01", title: "Agilidade", description: "Respostas rápidas e decisões assertivas para acompanhar a velocidade dos negócios." },
  { icon: Target, number: "02", title: "Foco em Resultados", description: "Estratégias jurídicas alinhadas aos objetivos de negócio de cada cliente." },
  { icon: MessageCircle, number: "03", title: "Comunicação Clara", description: "Relatórios e pareceres em linguagem acessível, sem perder a rigorosidade técnica." },
  { icon: Award, number: "04", title: "Excelência Técnica", description: "Equipe altamente qualificada com formação contínua e acompanhamento do cenário jurídico." },
];

export default function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32 bg-[#0B0A08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#B6883A] mb-5 block">
            Por Que Nos Escolher
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F1ECDD]">
            Nossos <em className="not-italic text-brass-gradient">diferenciais</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#2B2620]">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 border-r border-b border-[#2B2620] hover:bg-[#110F0A] transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-10">
                <item.icon className="w-6 h-6 text-[#6E6757] group-hover:text-[#B6883A] transition-colors duration-500" aria-hidden="true" />
                <span className="font-mono text-xs text-[#4A453A] group-hover:text-[#B6883A]/60 transition-colors duration-500">
                  {item.number}
                </span>
              </div>
              <h3 className="font-display text-xl text-[#F1ECDD] font-light mb-4 group-hover:text-[#D9AA5C] transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-sm text-[#6E6757] group-hover:text-[#9C9484] transition-colors duration-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
