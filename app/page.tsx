import { RegisterForm } from "@/components/register-form"
import { Footer } from "@/components/footer"

export default function CadastroPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
