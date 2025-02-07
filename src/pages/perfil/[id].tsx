import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  User, 
  MapPin, 
  Star, 
  Trophy, 
  Activity, 
  Calendar,
  Basketball,
  Users,
  Clock,
  ChevronLeft
} from "lucide-react"
import { Link } from "react-router-dom"

export default function PerfilJugador() {
  // Mock data - esto vendrá de la base de datos
  const jugador = {
    id: "1",
    nombre: "Carlos Rodriguez",
    nivel: "Avanzado",
    posicion: "Base",
    partidosJugados: 156,
    victorias: 98,
    rating: 4.8,
    bio: "Jugador apasionado con más de 10 años de experiencia. Me encanta organizar partidos y conocer nuevos jugadores.",
    estadisticas: {
      puntos: 15.4,
      asistencias: 6.2,
      rebotes: 3.8
    },
    ultimosPartidos: [
      {
        fecha: "2024-01-15",
        pista: "Municipal Les Corts",
        resultado: "Victoria",
        puntos: 18
      },
      {
        fecha: "2024-01-12",
        pista: "Club Sarrià",
        resultado: "Derrota",
        puntos: 22
      },
      {
        fecha: "2024-01-08",
        pista: "Vall d'Hebron",
        resultado: "Victoria",
        puntos: 15
      }
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white">
            <ChevronLeft className="h-5 w-5" />
            <span>Volver</span>
          </Link>
          <Button variant="outline" className="bg-white/5 hover:bg-white/10 border-white/20">
            Editar perfil
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Perfil Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#FFA726] to-[#FF7043] flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">{jugador.nombre}</h1>
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="flex items-center gap-1">
                    <Basketball className="h-4 w-4" />
                    {jugador.posicion}
                  </span>
                  <span className="flex items-center gap-1">
                    <Activity className="h-4 w-4" />
                    {jugador.nivel}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-[#FFA726]" />
                    {jugador.rating}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {jugador.bio}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2">
                  <Trophy className="h-5 w-5 text-[#FFA726]" />
                  <div>
                    <div className="text-sm text-gray-400">Victorias</div>
                    <div className="font-semibold">{jugador.victorias}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2">
                  <Users className="h-5 w-5 text-[#FFA726]" />
                  <div>
                    <div className="text-sm text-gray-400">Partidos</div>
                    <div className="font-semibold">{jugador.partidosJugados}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { label: "Puntos por partido", value: jugador.estadisticas.puntos },
              { label: "Asistencias", value: jugador.estadisticas.asistencias },
              { label: "Rebotes", value: jugador.estadisticas.rebotes }
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 rounded-xl p-6 space-y-2"
              >
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Últimos Partidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Últimos partidos</h2>
            <div className="space-y-4">
              {jugador.ultimosPartidos.map((partido, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <Basketball className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{partido.pista}</div>
                      <div className="text-sm text-gray-400 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {partido.fecha}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold ${
                      partido.resultado === "Victoria" ? "text-green-400" : "text-red-400"
                    }`}>
                      {partido.resultado}
                    </div>
                    <div className="text-sm text-gray-400">{partido.puntos} pts</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Acciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="flex-1 bg-[#FFA726] hover:bg-[#FF9800] text-white">
              Invitar a partido
              <Users className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="flex-1 bg-white/5 hover:bg-white/10 border-white/20">
              Ver historial completo
              <Clock className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}