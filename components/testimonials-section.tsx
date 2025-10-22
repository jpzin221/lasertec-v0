"use client"

import { Star } from "lucide-react"
import { useEffect, useState } from "react"

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Carla M.",
      company: "Agência CMK",
      text: "Fizemos 300 canetas personalizadas e ficaram impecáveis. Atendimento rápido e entrega no prazo!",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      company: "TechStart Brasil",
      text: "A qualidade da gravação a laser superou nossas expectativas. Nossos clientes adoraram os brindes!",
      rating: 5,
    },
    {
      name: "Ana Paula Costa",
      company: "Eventos Premium",
      text: "Parceria de confiança! Já fizemos mais de 5 eventos com os produtos da Laser Tec. Sempre perfeito!",
      rating: 5,
    },
    {
      name: "Marcos Oliveira",
      company: "Construtora Horizonte",
      text: "Excelente custo-benefício e acabamento profissional. Recomendo para qualquer empresa!",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="depoimentos" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] mb-4">
            Quem já confiou na <span className="text-accent">Laser Tec</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
                  <div className="flex gap-1 mb-6 justify-center">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-center mb-8 leading-relaxed text-pretty">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="text-center">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-accent w-8" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
