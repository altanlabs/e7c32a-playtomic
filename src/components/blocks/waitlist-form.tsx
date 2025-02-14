import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDatabase } from "@altanlabs/database"

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

      // Show success toast using sonner
      toast.success("¡Gracias por tu interés!", {
        description: "Te avisaremos cuando estemos listos."
      })
      
      setEmail("")
    } catch (error) {
      // Show error toast using sonner
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
        className="bg-white"
        required
      />
      <Button type="submit" className="bg-[#029455] hover:bg-[#029455]/90" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Unirse"}
      </Button>
    </form>
  )
}