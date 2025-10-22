"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Sparkles } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [userName, setUserName] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    const userData = localStorage.getItem("laserTecUser")
    if (userData) {
      const user = JSON.parse(userData)
      setUserName(user.fullName)
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Produtos", href: "#produtos" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : "bg-background/80 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="#inicio" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse" />
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 relative z-10"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-orbitron)]">
                Laser<span className="text-accent">Tec</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              {userName && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{userName}</span>
                </div>
              )}
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/50 hover:shadow-accent/70 transition-all"
              >
                <a
                  href="https://wa.me/5577992018245?text=Olá%20quero%20fazer%20meu%20orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Peça seu Orçamento
                </a>
              </Button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/98 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="relative h-full flex flex-col pt-20 px-6 pb-6">
            {/* User Badge */}
            {userName && (
              <div className="mb-6 flex items-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Tecnologia de Precisão a Laser
                  </p>
                  <p className="text-base font-bold text-foreground">{userName}</p>
                </div>
              </div>
            )}

            {/* Menu Items */}
            <nav className="flex-1 flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-semibold text-foreground hover:text-accent transition-colors py-4 px-5 rounded-xl hover:bg-primary/5 active:bg-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base py-6 rounded-2xl shadow-lg shadow-accent/30"
            >
              <a
                href="https://wa.me/5577992018245?text=Olá%20quero%20fazer%20meu%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Peça seu Orçamento
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
