import { motion } from "framer-motion"
import { SearchBar } from "@/components/blocks/search-bar"
import { SportCard } from "@/components/blocks/sport-card"
import { ClubCard } from "@/components/blocks/club-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const basketballModes = [
  { 
    name: "3x3", 
    description: "Baloncesto urbano 3 contra 3",
    players: "3 vs 3", 
    icon: "/sports/basketball-3x3.svg",
    features: [
      "Partidos rápidos",
      "Media cancha",
      "Formato urbano",
      "Rankings por zona"
    ]
  }
]

const courts = [
  {
    name: "Cancha Street Basketball",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop",
    address: "Parque Deportivo Central",
    rating: 4.8,
    distance: "2.3 km",
    features: ["Iluminación", "Suelo Profesional"]
  },
  {
    name: "Urban Court Downtown",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop",
    address: "Plaza del Deporte",
    rating: 4.5,
    distance: "3.1 km",
    features: ["Nocturno", "Gradas"]
  },
  {
    name: "The Cage",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop",
    address: "Complejo Deportivo Sur",
    rating: 4.7,
    distance: "1.8 km",
    features: ["Cubierto", "Vestuarios"]
  }
]

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop" 
            alt="Basketball court" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center space-y-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Baloncesto 3x3
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Encuentra canchas, organiza partidos y compite en torneos
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Game Mode Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Modalidad de juego</h2>
        <div className="grid grid-cols-1 gap-6">
          {basketballModes.map((mode) => (
            <SportCard key={mode.name} {...mode} />
          ))}
        </div>
      </section>

      {/* Courts Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Canchas disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courts.map((court) => (
              <ClubCard key={court.name} {...court} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg">
              Ver todas las canchas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Encuentra equipo</h3>
            <p className="text-muted-foreground">
              Únete a partidos abiertos o crea el tuyo propio
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Reserva tu cancha</h3>
            <p className="text-muted-foreground">
              Elige el horario que mejor te convenga
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Rankings y torneos</h3>
            <p className="text-muted-foreground">
              Compite y sube en el ranking de tu zona
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}