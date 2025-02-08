import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Calendar, Clock } from "lucide-react"
import { Link } from "react-router-dom"

// Example upcoming games data
const upcomingGames = [
  {
    id: 1,
    title: "3x3 Street Game",
    date: "Hoy",
    time: "18:00",
    location: "Les Corts, Barcelona",
    currentPlayers: 4,
    maxPlayers: 6,
    level: "Intermedio",
    courtType: "3x3",
    price: "5€/persona"
  },
  {
    id: 2,
    title: "Pro Night Game",
    date: "Mañana",
    time: "20:00",
    location: "Sarrià, Barcelona",
    currentPlayers: 3,
    maxPlayers: 6,
    level: "Avanzado",
    courtType: "3x3 Pro",
    price: "8€/persona"
  },
  {
    id: 3,
    title: "Casual Evening Match",
    date: "En 2 días",
    time: "19:30",
    location: "Sant Martí, Barcelona",
    currentPlayers: 2,
    maxPlayers: 6,
    level: "Principiante",
    courtType: "3x3",
    price: "4€/persona"
  }
]

export function UpcomingGamesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-3">
        <div className="max-w-[90rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">Próximos partidos</h2>
                <p className="text-gray-400">Únete a un partido o crea el tuyo propio</p>
              </div>
              <Link to="/join-game">
                <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
                  Ver todos los partidos
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingGames.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-white/5 hover:bg-white/10 transition-colors group">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-[#FFA726] text-white border-none">
                          {game.courtType}
                        </Badge>
                        <Badge variant="outline" className="border-green-500 text-green-500">
                          {game.level}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold group-hover:text-[#FFA726] transition-colors">
                          {game.title}
                        </h3>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-[#FFA726]" />
                            <span className="text-sm">{game.date}</span>
                            <Clock className="h-4 w-4 ml-2 text-[#FFA726]" />
                            <span className="text-sm">{game.time}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-[#FFA726]" />
                            <span className="text-sm text-gray-300">{game.location}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-[#FFA726]" />
                            <span className="text-sm text-gray-300">
                              {game.currentPlayers}/{game.maxPlayers} jugadores
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-semibold text-[#FFA726]">{game.price}</span>
                        <Link to={`/join-game/${game.id}`}>
                          <Button variant="outline" className="border-[#FFA726] text-[#FFA726] hover:bg-[#FFA726] hover:text-white">
                            Unirse al partido
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}