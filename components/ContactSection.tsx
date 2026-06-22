"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const contatos = [
  { icon: Phone, label: "Telefone", valor: "+55 11 91225-2450", href: "tel:+5511912252450" },
  { icon: Mail, label: "E-mail", valor: "contato@drcadvogados.com.br", href: "mailto:contato@drcadvogados.com.br" },
  { icon: MapPin, label: "Endereço", valor: "R. Dr. Geraldo Campos Moreira, 164, Cj 134 — Cidade Monções, São Paulo/SP", href: "https://maps.app.goo.gl/r4WT8YNWsZGKSBeL8" },
  { icon: Clock, label: "Horário", valor: "Segunda a Sexta: 9h às 18h", href: "#" },
];

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-24 md:py-32 bg-[#110F0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#B6883A] mb-5 block">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F1ECDD] mb-6">
            Entre em <em className="not-italic text-brass-gradient">contato</em>
          </h2>
          <p className="text-[#9C9484] leading-relaxed">
            Estamos prontos para atender suas necessidades jurídicas. Entre em
            contato conosco e agende uma consulta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <div className="border-t border-[#2B2620]">
              {contatos.map((contato, index) => (
                <motion.a
                  key={index}
                  href={contato.href}
                  target={contato.href.startsWith("http") ? "_blank" : undefined}
                  rel={contato.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex items-start gap-4 py-5 border-b border-[#2B2620] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2"
                  aria-label={`${contato.label}: ${contato.valor}`}
                >
                  <contato.icon className="w-4 h-4 text-[#6E6757] group-hover:text-[#B6883A] transition-colors duration-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] text-[#4A453A] uppercase tracking-[0.15em] mb-1">
                      {contato.label}
                    </p>
                    <p className="text-sm text-[#E4DCC8] group-hover:text-[#D9AA5C] transition-colors duration-300 leading-relaxed">
                      {contato.valor}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative border border-[#2B2620] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.447706913285!2d-46.69576648447594!3d-23.601448084658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5763a80e948d%3A0xad297ab3eccff75f!2sDRC%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="320"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização DRC Advogados"
                  className="block"
                />
                <a
                  href="https://maps.app.goo.gl/r4WT8YNWsZGKSBeL8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-[#0B0A08]/90 backdrop-blur-sm border border-[#B6883A]/30 text-[#D9AA5C] font-mono text-[11px] tracking-[0.1em] uppercase hover:bg-[#B6883A] hover:text-[#0B0A08] transition-all duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2"
                >
                  <ExternalLink className="w-3 h-3" />
                  Ver no mapa
                </a>
              </div>
              <p className="mt-3 font-mono text-[11px] text-[#4A453A]">
                R. Dr. Geraldo Campos Moreira, 164, Cj 134 — Cidade Monções, São Paulo/SP — CEP 04571-020
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <form
              className="relative p-7 sm:p-9 border border-[#2B2620]"
              aria-label="Formulário de contato"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-display text-xl text-[#F1ECDD] font-light mb-8">Envie uma mensagem</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block font-mono text-[10px] text-[#4A453A] uppercase tracking-[0.15em] mb-2">
                    Nome <span className="text-[#B6883A]">*</span>
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full bg-transparent border-b border-[#2B2620] px-0 py-2.5 text-[#F1ECDD] focus:border-[#B6883A] focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] text-[#4A453A] uppercase tracking-[0.15em] mb-2">
                    E-mail <span className="text-[#B6883A]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full bg-transparent border-b border-[#2B2620] px-0 py-2.5 text-[#F1ECDD] focus:border-[#B6883A] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block font-mono text-[10px] text-[#4A453A] uppercase tracking-[0.15em] mb-2">
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full bg-transparent border-b border-[#2B2620] px-0 py-2.5 text-[#F1ECDD] focus:border-[#B6883A] focus:outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block font-mono text-[10px] text-[#4A453A] uppercase tracking-[0.15em] mb-2">
                    Mensagem <span className="text-[#B6883A]">*</span>
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-[#2B2620] px-0 py-2.5 text-[#F1ECDD] focus:border-[#B6883A] focus:outline-none transition-colors resize-none"
                    placeholder="Descreva sua necessidade..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#B6883A] text-[#0B0A08] font-mono text-xs tracking-[0.12em] uppercase hover:bg-[#D9AA5C] transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B6883A] focus-visible:outline-offset-2 mt-2"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
