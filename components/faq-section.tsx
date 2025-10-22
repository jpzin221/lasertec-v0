"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Qual o pedido mínimo?",
      answer:
        "Trabalhamos com pedidos a partir de 25 unidades. Para quantidades menores, consulte-nos via WhatsApp para verificar disponibilidade.",
    },
    {
      question: "Quanto tempo leva a produção?",
      answer:
        "O prazo médio de produção é de 7 a 15 dias úteis após aprovação da arte. Para pedidos urgentes, temos opções de produção expressa.",
    },
    {
      question: "Entregam em todo o Brasil?",
      answer:
        "Sim! Realizamos entregas para todo o território nacional através de transportadoras parceiras. O frete é calculado de acordo com o destino e volume do pedido.",
    },
    {
      question: "Que tipos de personalização vocês fazem?",
      answer:
        "Realizamos gravação a laser em diversos materiais: metal, plástico, vidro, madeira e couro. A gravação é permanente, elegante e de alta precisão.",
    },
    {
      question: "Como funciona a aprovação da arte?",
      answer:
        "Após o pedido, nossa equipe cria uma arte digital com sua logo no produto escolhido. Enviamos para sua aprovação antes de iniciar a produção.",
    },
    {
      question: "Posso solicitar uma amostra antes do pedido grande?",
      answer:
        "Sim! Oferecemos a possibilidade de produzir amostras mediante pagamento. Entre em contato para mais detalhes sobre valores e prazos.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] mb-4">
            Dúvidas <span className="text-accent">frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card hover:border-accent/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
