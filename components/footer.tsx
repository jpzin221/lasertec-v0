import { Instagram, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Catálogo", href: "#produtos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Contato", href: "#contato" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="#inicio" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-2xl font-bold font-[family-name:var(--font-orbitron)]">
                Laser<span className="text-accent">Tec</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transformando produtos comuns em experiências únicas através da tecnologia de gravação a laser de alta
              precisão.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5577992018245"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>(77) 99201-8245</span>
              </a>
              <a
                href="mailto:contato@lasertec.com.br"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@lasertec.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Laser Tec – Brindes Personalizados em Laser. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5577992018245"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@lasertec.com.br"
              className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
