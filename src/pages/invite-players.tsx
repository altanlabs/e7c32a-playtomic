import { useState } from "react"
import { motion } from "framer-motion"
import { InvitePlayersForm } from "@/components/blocks/invite-players-form"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"

export default function InvitePlayersPage() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = async (data: any) => {
    setIsLoading(true)
    try {
      // Aquí iría la llamada a la API para crear el partido
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulación de llamada API
      
      toast({
        title: "¡Partido creado con éxito!",
        description: "Los jugadores podrán unirse a tu partido.",
      })
      
      navigate("/join-game")
    } catch (error) {
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
            <h1 className="text-4xl font-bold">Invitar jugadores</h1>
            <p className="text-gray-400">
              Crea un partido y encuentra jugadores para completar tu equipo
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <InvitePlayersForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}