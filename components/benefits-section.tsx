import { Target, Zap, Lightbulb, Package } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Target,
      title: "Precisão e qualidade",
      description: "Gravação a laser de alta definição, durável e elegante.",
    },
    {
      icon: Zap,
      title: "Entrega rápida",
      description: "Produção ágil e prazos cumpridos.",
    },
    {
      icon: Lightbulb,
      title: "Personalização completa",
      description: "Seu logo em qualquer material: metal, plástico, vidro e madeira.",
    },
    {
      icon: Package,
      title: "Brindes que impressionam",
      description: "Ideal para eventos, empresas e campanhas promocionais.",
    },
  ]

  return (
    <section id="beneficios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] mb-4">
            Por que escolher a <span className="text-accent">Laser Tec</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta e atendimento personalizado para sua marca
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
