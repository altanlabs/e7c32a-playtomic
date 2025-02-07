import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Trophy,
  Share2,
  Instagram,
  Star,
  Users,
  MapPin,
  Calendar,
  Clock,
  Confetti
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ValidarResultado() {
  const [showShare, setShowShare] = useState(false)
  const [validated, setValidated] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  // Mock data - esto vendría de la base de datos
  const partido = {
    id: "1",
    fecha: "15 Enero 2024",
    hora: "18:00",
    pista: "Municipal Les Corts",
    equipoLocal: "Dream Team",
    equipoVisitante: "Street Ballers",
    jugadores: [
      "Carlos R.",
      "Laura M.",
      "Miguel A.",
      "Ana P."
    ]
  }

  const handleValidate = () => {
    setValidated(true)
    setShowConfetti(true)
    setTimeout(() => {
      setShowShare(true)
    }, 1500)
  }

  const handleShare = () => {
    // Generar canvas con el resultado
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 1080
    canvas.height = 1080

    // Aquí iría la lógica para generar la imagen
    // Por ahora es un mock, pero se puede personalizar con:
    // - Logo de la app
    // - Resultado del partido
    // - Nombre de los equipos
    // - Ubicación
    // - Fecha
    // - Efectos visuales

    // Compartir en Instagram Stories
    // Esto es un mock, en producción usaríamos la API de Instagram
    if (navigator.share) {
      navigator.share({
        title: '¡Partido finalizado!',
        text: `${partido.equipoLocal} vs ${partido.equipoVisitante} en ${partido.pista}`,
        url: 'https://tuapp.com/partido/1'
      })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence>
            {showConfetti && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 pointer-events-none z-50"
              >
                {/* Aquí iría la animación de confetti usando react-confetti o similar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <Trophy className="w-32 h-32 text-[#FFA726]" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Información del partido */}
            <div className="rounded-2xl bg-white/5 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Validar resultado</h1>
                <div className="flex items-center gap-2 text-[#FFA726]">
                  <Calendar className="h-5 w-5" />
                  <span>{partido.fecha}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span>{partido.pista}</span>
              </div>

              <div className="grid grid-cols-3 gap-4 items-center text-center">
                <div className="space-y-2">
                  <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold">{partido.equipoLocal[0]}</span>
                  </div>
                  <div className="font-semibold">{partido.equipoLocal}</div>
                  {!validated && (
                    <Input
                      type="number"
                      placeholder="Puntos"
                      className="bg-white/5 border-white/20 text-center"
                    />
                  )}
                </div>

                <div className="text-4xl font-bold text-gray-400">
                  VS
                </div>

                <div className="space-y-2">
                  <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold">{partido.equipoVisitante[0]}</span>
                  </div>
                  <div className="font-semibold">{partido.equipoVisitante}</div>
                  {!validated && (
                    <Input
                      type="number"
                      placeholder="Puntos"
                      className="bg-white/5 border-white/20 text-center"
                    />
                  )}
                </div>
              </div>

              {!validated && (
                <Button
                  onClick={handleValidate}
                  className="w-full bg-[#FFA726] hover:bg-[#FF9800] text-white py-6"
                >
                  Validar resultado
                  <Trophy className="ml-2 h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Compartir resultado */}
            <AnimatePresence>
              {showShare && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="rounded-2xl bg-white/5 p-6 space-y-6"
                >
                  <h2 className="text-xl font-bold">¡Comparte tu victoria!</h2>
                  
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-[#FFA726] to-[#FF7043] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          <Trophy className="w-24 h-24 text-white" />
                        </motion.div>
                        <div className="space-y-2">
                          <div className="text-4xl font-bold">85 - 82</div>
                          <div className="text-lg opacity-80">¡Victoria épica!</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Marca de agua */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm opacity-80">
                      <span>dribla.com</span>
                      <span>#DriblaLife</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleShare}
                    className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white py-6"
                  >
                    Compartir en Instagram
                    <Instagram className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Jugadores */}
            <div className="rounded-2xl bg-white/5 p-6 space-y-4">
              <h2 className="text-xl font-bold">Jugadores</h2>
              <div className="grid grid-cols-2 gap-4">
                {partido.jugadores.map((jugador) => (
                  <div
                    key={jugador}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="font-bold">{jugador[0]}</span>
                    </div>
                    <span>{jugador}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}