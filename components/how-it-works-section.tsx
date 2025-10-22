import { ShoppingBag, FileImage, Cpu, Truck } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: ShoppingBag,
      number: "01",
      title: "Escolha o produto",
      description: "Selecione entre canetas, squeezes, copos, mochilas, chaveiros e muito mais.",
    },
    {
      icon: FileImage,
      number: "02",
      title: "Envie sua logo",
      description: "Mandamos a arte digital para aprovação.",
    },
    {
      icon: Cpu,
      number: "03",
      title: "Produção a laser",
      description: "Tecnologia de precisão e acabamento profissional.",
    },
    {
      icon: Truck,
      number: "04",
      title: "Receba em qualquer lugar",
      description: "Entregamos em todo o Brasil!",
    },
  ]

  return (
    <section id="como-funciona" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] mb-4">
            Como criar seus <span className="text-accent">brindes personalizados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Processo simples e transparente em 4 etapas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          {steps.map((step, index) => (
            <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all hover:scale-105 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg flex items-center justify-center font-[family-name:var(--font-orbitron)] shadow-lg shadow-accent/50">
                  {step.number}
                </div>

                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
