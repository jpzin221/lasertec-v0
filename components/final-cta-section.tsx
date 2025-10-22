"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useEffect, useRef } from "react"

export function FinalCTASection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationFrame: number
    let offset = 0

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw animated laser beam
      const gradient = ctx.createLinearGradient(offset, 0, offset + 200, 0)
      gradient.addColorStop(0, "transparent")
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.5)")
      gradient.addColorStop(1, "transparent")

      ctx.fillStyle = gradient
      ctx.fillRect(0, canvas.height / 2 - 1, canvas.width, 2)

      offset += 2
      if (offset > canvas.width) offset = -200

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-6 text-balance">
            Pronto para ver sua marca <span className="text-accent">brilhar</span>?
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Entre em contato agora e receba um orçamento personalizado em minutos
          </p>

          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-8 shadow-2xl shadow-accent/50 hover:shadow-accent/70 transition-all group animate-glow"
          >
            <a
              href="https://wa.me/5577992018245?text=Olá%20quero%20fazer%20meu%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Peça seu orçamento no WhatsApp
            </a>
          </Button>

          <p className="mt-8 text-sm text-muted-foreground">
            Resposta em até 2 horas • Atendimento de segunda a sexta, 8h às 18h
          </p>
        </div>
      </div>
    </section>
  )
}
