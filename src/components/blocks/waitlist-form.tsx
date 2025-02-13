import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://api.altan.ai/galaxia/hook/mo6VsG", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          table: "Waitlist",
          data: {
            email: email,
            region: "Spain" // Default region
          }
        }),
      })

      if (response.ok) {
        toast.success("¡Gracias por unirte a la lista de espera!")
        setEmail("")
      } else {
        throw new Error("Error al registrar el email")
      }
    } catch (error) {
      toast.error("No se pudo registrar el email. Por favor, inténtalo de nuevo.")
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
        className="bg-[#FFA726] hover:bg-[#FF9800] text-black font-bold"
      >
        {isLoading ? "Registrando..." : "Unirme a la lista"}
      </Button>
    </form>
  )
}