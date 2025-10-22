import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Laser Tec - Brindes Personalizados em Laser",
  description:
    "Brindes personalizados com gravação a laser de alta precisão. Transforme produtos comuns em experiências únicas para sua marca.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
