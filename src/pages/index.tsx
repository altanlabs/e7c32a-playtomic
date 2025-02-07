import { motion } from "framer-motion"
import { SearchBar } from "@/components/blocks/search-bar"
import { SportCard } from "@/components/blocks/sport-card"
import { ClubCard } from "@/components/blocks/club-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar, Trophy } from "lucide-react"

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
      <section className="relative h-[600px] flex items-center justify-center">
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
              Encuentra canchas, organiza partidos y compite en torneos de baloncesto 3x3
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
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Baloncesto 3x3</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            El formato urbano más dinámico y emocionante del baloncesto
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {basketballModes[0].features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="font-semibold mb-2">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courts Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Canchas disponibles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Encuentra las mejores canchas cerca de ti
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courts.map((court, index) => (
              <motion.div
                key={court.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ClubCard {...court} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg">
              Ver todas las canchas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Cómo funciona?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empieza a jugar en tres sencillos pasos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Encuentra tu cancha</h3>
            <p className="text-muted-foreground">
              Busca entre las mejores canchas de tu zona
            </p>
          </motion.div>
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Reserva tu partido</h3>
            <p className="text-muted-foreground">
              Elige el horario que mejor te convenga
            </p>
          </motion.div>
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Compite y gana</h3>
            <p className="text-muted-foreground">
              Participa en torneos y sube en el ranking
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para jugar?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Únete a la comunidad de baloncesto 3x3 más grande
          </p>
          <Button size="lg" variant="secondary">
            Empezar ahora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}