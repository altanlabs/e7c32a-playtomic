import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDatabase } from "@altanlabs/database"
import { toast } from "sonner"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { addRecord } = useDatabase("waitlist")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await addRecord({
        email,
        created_at: new Date().toISOString()
      })

      toast.success("¡Gracias por tu interés!", {
        description: "Te avisaremos cuando estemos listos."
      })
      
      setEmail("")
    } catch (error) {
      toast.error("No pudimos registrar tu email", {
        description: "Por favor, inténtalo de nuevo más tarde."
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white text-gray-900 placeholder:text-gray-500"
        required
      />
      <Button type="submit" className="bg-[#029455] hover:bg-[#029455]/90" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Unirse"}
      </Button>
    </form>
  )
}