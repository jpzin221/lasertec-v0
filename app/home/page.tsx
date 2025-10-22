"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PartnersSection } from "@/components/partners-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { PricingSection } from "@/components/pricing-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verifica se o usuário está cadastrado
    const userData = localStorage.getItem("laserTecUser")

    if (!userData) {
      // Se não estiver cadastrado, redireciona para a página de cadastro
      router.push("/")
    } else {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ProductsSection />
      <TestimonialsSection />
      <FAQSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
