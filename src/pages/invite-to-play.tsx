import { useState } from "react"
import { motion } from "framer-motion"
import { InviteToPlayForm } from "@/components/blocks/forms/invite-to-play-form"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Users, Calendar } from "lucide-react"

export default function InviteToPlayPage() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = async (data: any) => {
    setIsLoading(true)
    try {
      // Aquí iría la llamada a la API para crear el partido e invitar jugadores
      console.log("Invitación a jugar:", data)
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulación de llamada API
      
      toast({
        title: "¡Partido creado!",
        description: `Se han enviado invitaciones a ${data.players.length} jugadores.`,
      })
      
      navigate("/join-game")
    } catch (error) {
      console.error("Error al crear el partido:", error)
      toast({
        title: "Error al crear el partido",
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
            <h1 className="text-4xl font-bold">Invitar a jugar</h1>
            <p className="text-gray-400">
              Organiza un partido e invita a otros jugadores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-[#FFA726]" />
                <h3 className="font-semibold">Cancha</h3>
              </div>
              <p className="text-sm text-gray-400">
                Elige dónde quieres jugar
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-5 w-5 text-[#FFA726]" />
                <h3 className="font-semibold">Fecha y hora</h3>
              </div>
              <p className="text-sm text-gray-400">
                Selecciona cuándo jugar
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-5 w-5 text-[#FFA726]" />
                <h3 className="font-semibold">Jugadores</h3>
              </div>
              <p className="text-sm text-gray-400">
                Invita a otros jugadores
              </p>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <InviteToPlayForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}