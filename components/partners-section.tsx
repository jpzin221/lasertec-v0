"use client"

export function PartnersSection() {
  const partners = ["TechCorp", "InnovaSoft", "GlobalBrand", "StartupHub", "CreativeAgency", "BusinessPro"]

  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          Empresas que já confiam na Laser Tec
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 items-center justify-around">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors font-[family-name:var(--font-orbitron)]"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
