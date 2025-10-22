import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      name: "Canetas Premium",
      description: "Canetas metálicas com gravação a laser de alta precisão",
      image: "premium metal pen with laser engraving",
    },
    {
      name: "Copos Térmicos",
      description: "Copos de aço inox com isolamento térmico e personalização",
      image: "stainless steel thermal cup with logo",
    },
    {
      name: "Squeezes Esportivos",
      description: "Garrafas de água personalizadas para academias e eventos",
      image: "sports water bottle with custom branding",
    },
    {
      name: "Ecobags",
      description: "Sacolas sustentáveis com sua marca em destaque",
      image: "eco-friendly tote bag with logo",
    },
    {
      name: "Chaveiros Personalizados",
      description: "Chaveiros metálicos com gravação permanente",
      image: "metal keychain with laser engraving",
    },
    {
      name: "Pen Drives",
      description: "Pen drives customizados com capacidade de até 128GB",
      image: "custom USB flash drive with logo",
    },
    {
      name: "Mochilas Corporativas",
      description: "Mochilas de alta qualidade para o dia a dia profissional",
      image: "corporate backpack with branding",
    },
    {
      name: "Kits Personalizados",
      description: "Kits completos com múltiplos produtos da sua marca",
      image: "corporate gift kit with branded items",
    },
  ]

  const getWhatsAppLink = (productName: string) => {
    const message = `Olá! Quero o orçamento de ${productName}`
    return `https://wa.me/5577992018245?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] mb-4">
            Modelos <span className="text-accent">disponíveis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore nossa linha completa de produtos personalizáveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-accent/50 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src={`/.jpg?height=400&width=400&query=${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent/50 hover:bg-accent/10 group/btn bg-transparent"
                >
                  <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
                    Personalizar Agora
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
