import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Filter, MapPin, Users, Calendar, Clock } from "lucide-react"

// Mock data - en una aplicación real, esto vendría de una API
const games = [
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
    price: "5€/persona",
    image: "https://www.fiba3x3.com/img/grounds/grounds-01.jpg"
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
    price: "8€/persona",
    image: "https://www.fiba3x3.com/img/grounds/grounds-02.jpg"
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
    price: "4€/persona",
    image: "https://www.fiba3x3.com/img/grounds/grounds-03.jpg"
  },
  {
    id: 4,
    title: "Weekend Tournament Game",
    date: "Sábado",
    time: "10:00",
    location: "Poblenou, Barcelona",
    currentPlayers: 5,
    maxPlayers: 6,
    level: "Intermedio",
    courtType: "3x3 Pro",
    price: "10€/persona",
    image: "https://www.fiba3x3.com/img/grounds/grounds-04.jpg"
  },
  {
    id: 5,
    title: "Morning Practice Game",
    date: "Domingo",
    time: "09:00",
    location: "Gràcia, Barcelona",
    currentPlayers: 3,
    maxPlayers: 6,
    level: "Avanzado",
    courtType: "3x3",
    price: "6€/persona",
    image: "https://www.fiba3x3.com/img/grounds/grounds-05.jpg"
  },
  {
    id: 6,
    title: "Afternoon Friendly",
    date: "En 3 días",
    time: "16:30",
    location: "Sants, Barcelona",
    currentPlayers: 4,
    maxPlayers: 6,
    level: "Principiante",
    courtType: "3x3",
    price: "5€/persona",
    image: "https://www.fiba3x3.com/img/grounds/grounds-06.jpg"
  }
]

export default function JoinGameListPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [levelFilter, setLevelFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Partidos disponibles</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Encuentra y únete a partidos de baloncesto 3x3 en tu zona
            </p>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Input
                placeholder="Buscar por ubicación..."
                className="pl-10 py-6 bg-white/5 border-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="bg-white/5 border-white/20">
                <SelectValue placeholder="Nivel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los niveles</SelectItem>
                <SelectItem value="beginner">Principiante</SelectItem>
                <SelectItem value="intermediate">Intermedio</SelectItem>
                <SelectItem value="advanced">Avanzado</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="bg-white/5 border-white/20">
                <SelectValue placeholder="Tipo de pista" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="3x3">3x3</SelectItem>
                <SelectItem value="3x3-pro">3x3 Pro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/join-game/${game.id}`}>
                  <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-black/50 rounded-full text-sm">
                          {game.courtType}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold group-hover:text-[#FFA726] transition-colors">
                          {game.title}
                        </h3>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-[#FFA726]" />
                            <span>{game.date}</span>
                            <Clock className="h-4 w-4 ml-2 text-[#FFA726]" />
                            <span>{game.time}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-[#FFA726]" />
                            <span className="text-gray-300">{game.location}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-[#FFA726]" />
                            <span className="text-gray-300">
                              {game.currentPlayers}/{game.maxPlayers} jugadores
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-[#FFA726]">{game.price}</span>
                        <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
                          Unirse
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Create Game CTA */}
          <div className="text-center pt-8">
            <p className="text-gray-400 mb-4">¿No encuentras el partido que buscas?</p>
            <Link to="/invite-players">
              <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
                Crear nuevo partido
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}