import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { toast } from "sonner"

const API_URL = "https://api.altan.ai/galaxia/hook/mo6VsG"
const BASE_ID = "4ff1558e-4247-40d3-b4d5-3ce2d4cc5616"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          base_id: BASE_ID,
          table: "Waitlist",
          fields: {
            email: {
              value: email
            },
            region: {
              value: "España"
            }
          }
        }),
      })

      if (!response.ok) {
        throw new Error("Error al registrar el email")
      }

      toast.success("¡Gracias por unirte a la lista de espera!")
      setEmail("")
    } catch (error) {
      toast.error("No se pudo registrar el email. Por favor, inténtalo de nuevo.")
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
      />
      <Button 
        type="submit" 
        disabled={isLoading}
        className="bg-[#FFA726] hover:bg-[#FF9800] text-black font-bold whitespace-nowrap"
      >
        {isLoading ? "Registrando..." : "Unirme a la lista"}
      </Button>
    </form>
  )
}