import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { makeApiCall } from "@/lib/database"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await makeApiCall({
        method: "POST",
        url: "https://api.altan.ai/platform/database/records",
        body: {
          table_id: "550e8400-e29b-41d4-a716-446655440000",
          record: {
            email,
            created_at: new Date().toISOString()
          }
        }
      })

      toast({
        title: "¡Gracias por tu interés!",
        description: "Te avisaremos cuando estemos listos.",
      })
      
      setEmail("")
    } catch (error) {
      toast({
        title: "No pudimos registrar tu email",
        description: "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
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