"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, X, ArrowRight, Bookmark, Share2, User, Tag } from "lucide-react";

interface Artigo {
  id: number;
  categoria: string;
  titulo: string;
  data: string;
  resumo: string;
  conteudo: string;
  autor: string;
  tempoLeitura: string;
  tags: string[];
  destaque?: boolean;
}

const artigos: Artigo[] = [
  {
    id: 1, categoria: "Direito Empresarial", titulo: "Reforma Tributária: Impactos para Empresas em 2026",
    data: "15 Jan 2026", resumo: "Análise das principais mudanças trazidas pela reforma tributária e seus efeitos no planejamento estratégico das empresas.",
    conteudo: `A Reforma Tributária representa a maior mudança no sistema tributário brasileiro das últimas décadas. Com a unificação de impostos como ICMS, ISS, IPI, PIS e COFINS em um único Imposto sobre Bens e Serviços (IBS), as empresas precisam se preparar para uma nova realidade fiscal.\n\nPrincipais impactos:\n\n• Transição gradual: O novo sistema será implementado ao longo de 7 anos, com alíquotas convergindo progressivamente.\n\n• Crédito tributário: O modelo de non-cumulatividade será ampliado, permitindo maior compensação de créditos ao longo da cadeia produtiva.\n\n• Setores impactados: Indústria, serviços e comércio terão regras diferenciadas de transição que exigem análise caso a caso.\n\n• Compliance: A complexidade inicial exige investimento em sistemas de gestão tributária e capacitação das equipes.\n\nRecomendações para empresas:\n\n1. Realize um diagnóstico tributário completo antes da vigência\n2. Avalie o impacto na cadeia de fornecedores e clientes\n3. Atualize sistemas ERP para compatibilidade com a nova legislação\n4. Capacite a equipe fiscal interna\n5. Considere a contratação de assessoria especializada para o período de transição\n\nA DRC Advogados oferece consultoria completa para adequação à Reforma Tributária, com equipe especializada em Direito Tributário e Empresarial.`,
    autor: "Dra. Karla Ronqui", tempoLeitura: "8 min", tags: ["Reforma Tributária","IBS","Planejamento Tributário","Compliance"], destaque: true,
  },
  {
    id: 2, categoria: "Compliance", titulo: "LGPD: Novas Diretrizes para Adequação Empresarial",
    data: "08 Jan 2026", resumo: "Entenda as atualizações na legislação de proteção de dados e como implementar compliance efetivo.",
    conteudo: `A Lei Geral de Proteção de Dados (LGPD) completou mais um ano de vigência e as exigências regulatórias se tornaram cada vez mais rigorosas. Em 2026, a Autoridade Nacional de Proteção de Dados (ANPD) intensificou as fiscalizações e já aplicou multas milionárias a empresas que descumpriram as normas.\n\nNovidades em 2026:\n\n• Relatórios de Impacto à Proteção de Dados (RIPD): Obrigatórios para operações de alto risco.\n• DPO obrigatório: Empresas com mais de 5 milhões de reais de faturamento devem ter Encarregado de Dados.\n• Transferência internacional: Novas regras para envio de dados para fora do Brasil.\n• Direitos do titular: Prazo de resposta às solicitações reduzido para 10 dias úteis.\n\nChecklist de adequação:\n✓ Mapeamento completo de dados pessoais processados\n✓ Política de Privacidade atualizada e acessível\n✓ Termos de Consentimento claros e específicos\n✓ Procedimentos para atendimento de direitos dos titulares\n✓ Medidas de segurança da informação implementadas\n\nA não adequação pode resultar em multas de até 2% do faturamento da empresa, limitadas a R$ 50 milhões por infração.`,
    autor: "Dra. Daniela Alves", tempoLeitura: "6 min", tags: ["LGPD","Proteção de Dados","Compliance","ANPD"],
  },
  {
    id: 3, categoria: "Contratos", titulo: "Contratos Digitais: Validade e Segurança Jurídica",
    data: "02 Jan 2026", resumo: "Aspectos legais dos contratos eletrônicos e as melhores práticas para garantir validade e enforceability.",
    conteudo: `A digitalização dos contratos acelerou-se exponencialmente nos últimos anos. A validade jurídica dos contratos digitais exige atenção a requisitos específicos para garantir segurança e enforceability.\n\nBase legal:\nA Medida Provisória nº 2.200-2/2001 regulamenta a ICP-Brasil. O Marco Civil da Internet (Lei 12.965/2014) e a Lei 14.063/2020 ampliaram as possibilidades de uso de assinaturas eletrônicas.\n\nTipos de assinatura eletrônica:\n1. Simples: Aceitação por meio de clique, senha ou email. Válida para contratos de baixo risco.\n2. Avançada: Utiliza credenciais de autenticação vinculadas ao signatário.\n3. Qualificada: Certificado digital ICP-Brasil. Exigida para documentos públicos e operações de alto valor.\n\nBoas práticas:\n• Utilize plataformas certificadas e auditadas\n• Garanta o consentimento livre, específico e informado\n• Armazene logs de auditoria com carimbo de tempo\n• Mantenha versionamento do documento`,
    autor: "Dr. André Coelho", tempoLeitura: "7 min", tags: ["Contratos Digitais","Assinatura Eletrônica","ICP-Brasil"],
  },
  {
    id: 4, categoria: "Direito Tributário", titulo: "Créditos de PIS/COFINS: Como Recuperar Valores Pagos a Maior",
    data: "20 Dez 2025", resumo: "Guia prático para identificação e recuperação de créditos tributários acumulados no sistema não cumulativo.",
    conteudo: `A sistemática não cumulativa do PIS e da COFINS permite que empresas com lucro real apurem créditos sobre diversas operações, reduzindo a carga tributária efetiva.\n\nOperações que geram créditos:\n• Aquisição de bens para revenda\n• Aquisição de bens e serviços utilizados como insumo\n• Energia elétrica consumida\n• Aluguel de prédios, máquinas e equipamentos\n• Depreciação de ativos\n\nPrazos e limitações:\nOs créditos podem ser compensados com débitos do mesmo regime ou, quando houver excesso, requerer o ressarcimento. O prazo de prescrição é de 5 anos.\n\nOportunidades de planejamento:\nA revisão retrospectiva das apurações dos últimos 5 anos pode identificar valores significativos a recuperar. Em alguns setores, os créditos acumulados podem alcançar milhões de reais.`,
    autor: "Dra. Karla Ronqui", tempoLeitura: "10 min", tags: ["PIS/COFINS","Créditos Tributários","Recuperação Tributária"],
  },
  {
    id: 5, categoria: "Direito Trabalhista", titulo: "Teletrabalho: Direitos e Deveres na Era do Home Office",
    data: "15 Dez 2025", resumo: "Entenda as regras do trabalho remoto, reembolso de despesas e a nova jurisprudência do TST sobre o tema.",
    conteudo: `A Lei 14.442/2022 trouxe regulamentação específica para o teletrabalho, mas questões práticas continuam gerando dúvidas e litígios.\n\nObrigações do empregador:\n• Fornecer equipamentos necessários OU pagar auxílio-equipamento\n• Arcar com despesas de internet, energia e outros custos operacionais\n• Respeitar o limite de jornada e intervalos\n• Garantir a segurança e saúde do trabalhador (NR 17)\n\nReembolso de despesas:\nA jurisprudência do TST vem se consolidando no sentido de que o empregador deve reembolsar as despesas efetivamente comprovadas pelo empregado, incluindo internet, energia elétrica e manutenção de equipamentos.\n\nRiscos trabalhistas:\n- Acidente de trabalho em domicílio\n- Horas extras por dificuldade de desconexão\n- Doenças ocupacionais (LER/DORT, transtornos mentais)`,
    autor: "Dr. Leonardo Landim", tempoLeitura: "9 min", tags: ["Teletrabalho","Home Office","Direito Trabalhista","TST"],
  },
  {
    id: 6, categoria: "Contencioso Cível", titulo: "Arbitragem vs. Judiciário: Quando Escolher Cada Via?",
    data: "10 Dez 2025", resumo: "Análise comparativa entre arbitragem e processo judicial para resolução de conflitos empresariais de alta complexidade.",
    conteudo: `A escolha entre arbitragem e processo judicial é uma decisão estratégica que pode determinar o sucesso na resolução de conflitos empresariais.\n\nArbitragem — Vantagens:\n• Confidencialidade: O processo é privado.\n• Especialização: Os árbitros são escolhidos pelas partes.\n• Celeridade: Em média 12 a 18 meses para decisão final, contra 5 a 10 anos no Judiciário.\n• Flexibilidade: As partes definem o procedimento.\n• Execução: A sentença arbitral é título executivo judicial.\n\nJudiciário — Quando preferir:\n• Litígios envolvendo direitos indisponíveis\n• Necessidade de medidas cautelares urgentes e complexas\n• Situações onde a publicidade é desejável\n\nTendências em 2026:\nA arbitragem online (ODR) ganhou tração, com câmaras como ICC, CIESP/FIESP e CAM-CCBC oferecendo procedimentos híbridos ou totalmente virtuais.`,
    autor: "Dr. André Coelho", tempoLeitura: "8 min", tags: ["Arbitragem","Contencioso","Resolução de Conflitos","ODR"],
  },
];

export default function ArtigosSection() {
  const [selected,   setSelected]   = useState<Artigo | null>(null);
  const [categoria,  setCategoria]  = useState("Todas");

  const categorias = ["Todas", ...Array.from(new Set(artigos.map((a) => a.categoria)))];
  const filtrados  = categoria === "Todas" ? artigos : artigos.filter((a) => a.categoria === categoria);

  const abrir  = useCallback((a: Artigo) => { setSelected(a); document.body.style.overflow = "hidden"; }, []);
  const fechar = useCallback(() => { setSelected(null); document.body.style.overflow = ""; }, []);

  return (
    <section id="artigos" className="relative bg-[#F8F4EC] py-24 md:py-32" aria-label="Artigos e publicações">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <p className="section-label mb-6">Publicações</p>
            <h2 className="font-display text-[2.4rem] sm:text-5xl text-[#222222] font-light leading-tight">
              Artigos e <em className="not-italic text-gold-gradient">insights</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setCategoria(c)}
                className={`px-4 py-2 font-ui text-[10.5px] tracking-[0.08em] uppercase border transition-all duration-300 ${
                  categoria === c
                    ? "border-[#B8893B] bg-[#B8893B] text-white"
                    : "border-[rgba(184,137,59,0.3)] text-[#6C665D] hover:border-[#B8893B] hover:text-[#B8893B]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(184,137,59,0.15)]">
          <AnimatePresence mode="popLayout">
            {filtrados.map((a, i) => (
              <motion.article
                key={a.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer bg-[#F8F4EC] hover:bg-white transition-colors duration-500 p-7 sm:p-8"
                onClick={() => abrir(a)}
              >
                {a.destaque && (
                  <p className="font-ui text-[9px] tracking-[0.18em] uppercase text-[#B8893B] mb-3">Destaque</p>
                )}
                <p className="font-ui text-[10px] tracking-[0.12em] uppercase text-[#9A948C] mb-3">{a.categoria}</p>
                <h3 className="font-display text-xl text-[#222222] font-light mb-3 group-hover:text-[#B8893B] transition-colors duration-400 leading-snug">
                  {a.titulo}
                </h3>
                <p className="font-ui text-sm text-[#9A948C] leading-relaxed mb-6 line-clamp-3 font-light">{a.resumo}</p>
                <div className="flex items-center justify-between font-ui text-[10.5px] text-[#C8C2BA]">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{a.data}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{a.tempoLeitura}</span>
                  </div>
                  <span className="flex items-center gap-1 text-[#B8893B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] tracking-[0.08em] uppercase">
                    LER <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <p className="font-ui text-[10.5px] text-center text-[#C8C2BA] mt-6 tracking-[0.08em]">
          {filtrados.length} de {artigos.length} artigos
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#222222]/40 backdrop-blur-sm overflow-y-auto"
            onClick={fechar}
          >
            <button onClick={fechar} className="fixed top-4 right-4 z-[60] p-2.5 bg-white border border-[rgba(184,137,59,0.2)] text-[#9A948C] hover:text-[#B8893B] transition-colors" aria-label="Fechar">
              <X className="w-5 h-5" />
            </button>
            <motion.article
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative min-h-screen bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-2xl mx-auto px-5 sm:px-8 pt-20 pb-10">
                <div className="flex flex-wrap items-center gap-3 mb-6 font-ui text-[10.5px]">
                  <span className="px-3 py-1 border border-[rgba(184,137,59,0.3)] text-[#B8893B] tracking-[0.08em] uppercase">{selected.categoria}</span>
                  <span className="flex items-center gap-1.5 text-[#C8C2BA]"><Calendar className="w-3 h-3" />{selected.data}</span>
                  <span className="flex items-center gap-1.5 text-[#C8C2BA]"><Clock className="w-3 h-3" />{selected.tempoLeitura}</span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl text-[#222222] font-light leading-tight mb-8">{selected.titulo}</h1>
                <div className="flex items-center gap-3 pb-8 mb-8 border-b border-[rgba(184,137,59,0.15)]">
                  <div className="w-9 h-9 border border-[rgba(184,137,59,0.3)] flex items-center justify-center"><User className="w-4 h-4 text-[#B8893B]" /></div>
                  <div>
                    <p className="font-ui text-sm text-[#222222]">{selected.autor}</p>
                    <p className="font-ui text-[10.5px] text-[#C8C2BA]">Advogado(a) — DRC Advogados</p>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-5 sm:px-8 pb-20">
                <div className="border-l-2 border-[#B8893B] pl-5 mb-10">
                  <p className="font-display text-xl text-[#222222] font-light leading-relaxed italic">{selected.resumo}</p>
                </div>
                <div className="font-ui text-[#6C665D] text-base leading-relaxed whitespace-pre-line font-light">{selected.conteudo}</div>
                <div className="mt-10 pt-8 border-t border-[rgba(184,137,59,0.15)]">
                  <div className="flex items-center gap-2 mb-4 font-ui text-[10.5px] text-[#C8C2BA] uppercase tracking-[0.1em]">
                    <Tag className="w-3.5 h-3.5 text-[#B8893B]" /> Tags
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((t) => (
                      <span key={t} className="px-3 py-1.5 border border-[rgba(184,137,59,0.2)] text-[#9A948C] font-ui text-[10.5px] hover:border-[#B8893B] hover:text-[#B8893B] transition-all duration-300 cursor-pointer">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 font-ui text-[10.5px] uppercase tracking-[0.08em]">
                  <button className="flex items-center gap-2 px-4 py-2.5 border border-[rgba(184,137,59,0.25)] text-[#9A948C] hover:text-[#B8893B] hover:border-[#B8893B] transition-all duration-300"><Share2 className="w-3.5 h-3.5" /> Compartilhar</button>
                  <button className="flex items-center gap-2 px-4 py-2.5 border border-[rgba(184,137,59,0.25)] text-[#9A948C] hover:text-[#B8893B] hover:border-[#B8893B] transition-all duration-300"><Bookmark className="w-3.5 h-3.5" /> Salvar</button>
                </div>
                <div className="mt-12 p-8 bg-[#F8F4EC] border border-[rgba(184,137,59,0.2)]">
                  <h3 className="font-display text-2xl text-[#222222] font-light mb-2">Precisa de orientação?</h3>
                  <p className="font-ui text-sm text-[#9A948C] mb-6 font-light">Nossa equipe está pronta para ajudar sua empresa com soluções jurídicas personalizadas.</p>
                  <a href="https://wa.me/5511912252450" target="_blank" rel="noopener noreferrer" className="btn-gold-fill">
                    Falar com especialista <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
