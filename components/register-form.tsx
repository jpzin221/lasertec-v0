"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { registerUser } from "@/app/actions/register"

export function RegisterForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Validação básica
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError("Por favor, preencha todos os campos")
      setIsLoading(false)
      return
    }

    if (formData.phone.length < 10) {
      setError("Por favor, insira um número de telefone válido")
      setIsLoading(false)
      return
    }

    try {
      // Chama a função de registro (preparada para integração com banco de dados)
      const result = await registerUser(formData)

      if (result.success) {
        localStorage.setItem(
          "laserTecUser",
          JSON.stringify({
            fullName: formData.fullName,
            phone: formData.phone,
            registeredAt: new Date().toISOString(),
          }),
        )
        router.push("/home")
      } else {
        setError(result.error || "Erro ao cadastrar. Tente novamente.")
      }
    } catch (err) {
      setError("Erro ao processar cadastro. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Zap className="h-6 w-6 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Cadastro Laser Tec</CardTitle>
        <CardDescription>Preencha seus dados para começar</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nome Completo</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="João Silva"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              disabled={isLoading}
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Número de Telefone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(77) 99201-8245"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isLoading}
              required
              className="bg-background/50"
            />
          </div>

          {error && <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</div>}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Cadastrando...
              </>
            ) : (
              "Confirmar Cadastro"
            )}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          Ao cadastrar, você concorda com nossos termos de serviço
        </div>
      </CardContent>
    </Card>
  )
}
