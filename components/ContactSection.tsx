"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import WaveDivider from "./WaveDivider";

const contatos = [
  { icon: Phone,  label: "Telefone",  valor: "+55 11 91225-2450",                             href: "tel:+5511912252450" },
  { icon: Mail,   label: "E-mail",    valor: "contato@drcadvogados.com.br",                    href: "mailto:contato@drcadvogados.com.br" },
  { icon: MapPin, label: "Endereço",  valor: "R. Dr. Geraldo Campos Moreira, 164 — São Paulo/SP", href: "https://maps.app.goo.gl/r4WT8YNWsZGKSBeL8" },
  { icon: Clock,  label: "Horário",   valor: "Segunda a Sexta: 9h às 18h",                    href: "#" },
];

export default function ContactSection() {
  return (
    <>
      <WaveDivider fromColor="#F8F4EC" toColor="#EFE6D8" />

      <section id="contato" className="relative bg-[#EFE6D8] py-24 md:py-32" aria-label="Contato">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="mb-16 max-w-2xl"
          >
            <p className="section-label mb-6">Contato</p>
            <h2 className="font-display text-[2.4rem] sm:text-5xl text-[#222222] font-light leading-tight">
              Entre em <em className="not-italic text-gold-gradient">contato</em>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Contatos + mapa */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
            >
              <div className="border-t border-[rgba(184,137,59,0.2)]">
                {contatos.map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="group flex items-start gap-4 py-5 border-b border-[rgba(184,137,59,0.15)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B8893B] focus-visible:outline-offset-2"
                    aria-label={`${c.label}: ${c.valor}`}
                  >
                    <c.icon className="w-4 h-4 mt-0.5 text-[#B8893B] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="font-ui text-[9.5px] uppercase tracking-[0.18em] text-[#C8C2BA] mb-1">{c.label}</p>
                      <p className="font-ui text-sm text-[#3A3732] group-hover:text-[#B8893B] transition-colors duration-300 leading-relaxed">{c.valor}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Mapa */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 relative border border-[rgba(184,137,59,0.2)] overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.447706913285!2d-46.69576648447594!3d-23.601448084658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5763a80e948d%3A0xad297ab3eccff75f!2sDRC%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%" height="280"
                  style={{ border: 0, filter: "sepia(20%) contrast(95%) brightness(105%)" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Localização DRC Advogados"
                  className="block"
                />
                <a
                  href="https://maps.app.goo.gl/r4WT8YNWsZGKSBeL8"
                  target="_blank" rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3.5 py-2 bg-white/95 border border-[rgba(184,137,59,0.3)] text-[#B8893B] font-ui text-[10px] tracking-[0.06em] uppercase hover:bg-[#B8893B] hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-3 h-3" /> Ver no mapa
                </a>
              </motion.div>
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
            >
              <form
                className="bg-white p-8 sm:p-10 shadow-[0_4px_32px_rgba(184,137,59,0.07)] border border-[rgba(184,137,59,0.15)]"
                aria-label="Formulário de contato"
                onSubmit={(e) => e.preventDefault()}
              >
                <h3 className="font-display text-2xl text-[#222222] font-light mb-8">Envie uma mensagem</h3>
                <div className="space-y-7">
                  {[
                    { id: "nome",     label: "Nome",      type: "text",  ph: "Seu nome completo",  required: true,  auto: "name" },
                    { id: "email",    label: "E-mail",    type: "email", ph: "seu@email.com",       required: true,  auto: "email" },
                    { id: "telefone", label: "Telefone",  type: "tel",   ph: "(11) 99999-9999",     required: false, auto: "tel" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block font-ui text-[9.5px] uppercase tracking-[0.18em] text-[#C8C2BA] mb-2.5">
                        {f.label} {f.required && <span className="text-[#B8893B]">*</span>}
                      </label>
                      <input
                        id={f.id} name={f.id} type={f.type} required={f.required} autoComplete={f.auto}
                        placeholder={f.ph}
                        className="w-full bg-transparent border-b border-[rgba(184,137,59,0.25)] pb-2.5 text-[#222222] text-sm placeholder:text-[#C8C2BA] focus:border-[#B8893B] focus:outline-none transition-colors font-ui font-light"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="mensagem" className="block font-ui text-[9.5px] uppercase tracking-[0.18em] text-[#C8C2BA] mb-2.5">
                      Mensagem <span className="text-[#B8893B]">*</span>
                    </label>
                    <textarea
                      id="mensagem" name="mensagem" rows={4} required
                      placeholder="Descreva sua necessidade jurídica..."
                      className="w-full bg-transparent border-b border-[rgba(184,137,59,0.25)] pb-2.5 text-[#222222] text-sm placeholder:text-[#C8C2BA] focus:border-[#B8893B] focus:outline-none transition-colors resize-none font-ui font-light"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#B8893B] text-white font-ui text-[11px] tracking-[0.1em] uppercase hover:bg-[#8E682B] transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B8893B] focus-visible:outline-offset-2 mt-2"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#EFE6D8" toColor="#F8F4EC" flip />
    </>
  );
}
