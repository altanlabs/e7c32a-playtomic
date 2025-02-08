import { useState } from "react"
import { motion } from "framer-motion"
import { useParams, useNavigate } from "react-router-dom"
import { JoinGameForm } from "@/components/blocks/join-game-form"
import { useToast } from "@/hooks/use-toast"

// Mock data - en una aplicación real, esto vendría de una API
const mockGameDetails = {
  id: "1",
  title: "Partido 3x3 Nivel Intermedio",
  date: "24 de Marzo, 2024",
  time: "18:00",
  location: "Les Corts, Barcelona",
  price: "5€/persona",
  level: "Intermedio",
  currentPlayers: 4,
  maxPlayers: 6,
  description: "Buscamos jugadores para completar equipo. Ambiente competitivo pero amistoso.",
  court: {
    name: "Pista 3x3 Les Corts",
    image: "https://www.fiba3x3.com/img/grounds/grounds-01.jpg"
  }
}

export default function JoinGamePage() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = async (data: any) => {
    setIsLoading(true)
    try {
      // Aquí iría la llamada a la API para unirse al partido
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulación de llamada API
      
      toast({
        title: "¡Te has unido al partido!",
        description: "El organizador recibirá tu solicitud.",
      })
      
      navigate("/join-game")
    } catch (error) {
      toast({
        title: "Error al unirse al partido",
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
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden mb-8">
            <img
              src={mockGameDetails.court.image}
              alt={mockGameDetails.court.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-3xl font-bold mb-2">{mockGameDetails.title}</h1>
              <p className="text-gray-300">{mockGameDetails.court.name}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Game Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white/5 p-6 rounded-xl space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Detalles del partido</h2>
                  <p className="text-gray-400">{mockGameDetails.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Jugadores</p>
                    <p className="font-medium">
                      {mockGameDetails.currentPlayers}/{mockGameDetails.maxPlayers}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Nivel</p>
                    <p className="font-medium">{mockGameDetails.level}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Fecha</p>
                    <p className="font-medium">{mockGameDetails.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Hora</p>
                    <p className="font-medium">{mockGameDetails.time}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Ubicación</h2>
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                  {/* Aquí iría el mapa */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Mapa de ubicación
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Join Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white/5 p-6 rounded-xl">
                <JoinGameForm 
                  onSubmit={handleSubmit} 
                  isLoading={isLoading}
                  gameDetails={mockGameDetails}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}