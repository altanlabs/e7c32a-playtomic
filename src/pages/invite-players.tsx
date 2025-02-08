import { useState } from "react"
import { motion } from "framer-motion"
import { InvitePlayersForm } from "@/components/blocks/invite-players-form"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { Users, Mail } from "lucide-react"

export default function InvitePlayersPage() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = async (data: any) => {
    setIsLoading(true)
    try {
      // Aquí iría la llamada a la API para enviar las invitaciones
      console.log("Invitaciones enviadas:", data)
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulación de llamada API
      
      const totalInvites = data.selectedPlayers.length + data.emailInvites.length
      
      toast({
        title: "¡Invitaciones enviadas!",
        description: `Se han enviado ${totalInvites} invitaciones correctamente.`,
      })
      
      navigate("/join-game")
    } catch (error) {
      console.error("Error al enviar invitaciones:", error)
      toast({
        title: "Error al enviar las invitaciones",
        description: "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Invitar jugadores</h1>
            <p className="text-gray-400">
              Invita a jugadores registrados o comparte con nuevos jugadores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-5 w-5 text-[#FFA726]" />
                <h3 className="font-semibold">Jugadores registrados</h3>
              </div>
              <p className="text-sm text-gray-400">
                Selecciona jugadores que ya están en la plataforma
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-5 w-5 text-[#FFA726]" />
                <h3 className="font-semibold">Invitar por email</h3>
              </div>
              <p className="text-sm text-gray-400">
                Invita a nuevos jugadores por email o redes sociales
              </p>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <InvitePlayersForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}