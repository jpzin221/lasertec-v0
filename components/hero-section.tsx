"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = "rgba(59, 130, 246, 0.5)"
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 50%)" }}
      />

      {/* Laser Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 animate-laser-scan" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Tecnologia de Precisão a Laser</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-orbitron)] mb-6 animate-fade-in text-balance leading-tight">
            Brindes Personalizados em Laser para Fazer Sua Marca{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Brilhar!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in text-pretty leading-relaxed">
            A Laser Tec transforma produtos comuns em experiências únicas — com gravação a laser de alta precisão e
            acabamento profissional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-2xl shadow-accent/50 hover:shadow-accent/70 transition-all group"
            >
              <a
                href="https://wa.me/5577992018245?text=Olá%20quero%20fazer%20meu%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fazer Orçamento no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-accent/50 hover:bg-accent/10 text-foreground font-semibold text-lg px-8 py-6 bg-transparent"
            >
              <a href="#produtos">Ver Catálogo Completo</a>
            </Button>
          </div>

          {/* Product Mockups */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
            {[
              { name: "Canetas", query: "premium metal pen with laser engraving" },
              { name: "Copos", query: "stainless steel tumbler with custom logo" },
              { name: "Squeezes", query: "sports water bottle with laser engraving" },
              { name: "Chaveiros", query: "metal keychain with laser engraved logo" },
            ].map((product) => (
              <div
                key={product.name}
                className="group relative aspect-square rounded-2xl bg-card border border-border overflow-hidden hover:border-accent/50 transition-all hover:scale-105"
              >
                <img
                  src={`/.jpg?height=300&width=300&query=${product.query}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-4">
                  <span className="text-sm font-semibold">{product.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
