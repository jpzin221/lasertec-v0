import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Pacote Start",
      description: "Ideal para pequenos eventos",
      range: "até 50 unidades",
      features: [
        "Gravação a laser de alta qualidade",
        "Aprovação de arte digital",
        "Entrega em todo Brasil",
        "Suporte por WhatsApp",
      ],
      highlight: false,
    },
    {
      name: "Pacote Business",
      description: "Perfeito para empresas",
      range: "até 200 unidades",
      features: [
        "Tudo do Pacote Start",
        "Desconto progressivo",
        "Prazo de produção reduzido",
        "Consultoria de produtos",
        "Embalagem personalizada",
      ],
      highlight: true,
    },
    {
      name: "Pacote Premium",
      description: "Para grandes volumes",
      range: "acima de 500 unidades",
      features: [
        "Tudo do Pacote Business",
        "Melhor preço por unidade",
        "Gerente de conta dedicado",
        "Prioridade na produção",
        "Armazenamento gratuito",
        "Entregas programadas",
      ],
      highlight: false,
    },
  ]

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] mb-4">
            Planos para <span className="text-accent">todo tipo de negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o pacote ideal para o volume do seu pedido
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all hover:scale-105 animate-fade-in ${
                plan.highlight ? "bg-accent/5 border-accent shadow-2xl shadow-accent/20" : "bg-card border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-accent">{plan.range}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.highlight
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-secondary hover:bg-secondary/90"
                }`}
              >
                <a
                  href="https://wa.me/5577992018245?text=Olá%20quero%20fazer%20meu%20orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Cotação
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
