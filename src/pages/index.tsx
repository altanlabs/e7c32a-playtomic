import { motion } from "framer-motion"
import { SearchBar } from "@/components/blocks/search-bar"
import { SportCard } from "@/components/blocks/sport-card"
import { ClubCard } from "@/components/blocks/club-card"

const sports = [
  { name: "Pádel", icon: "/sports/padel.svg", available: true },
  { name: "Tenis", icon: "/sports/tennis.svg", available: true },
  { name: "Fútbol", icon: "/sports/football.svg", available: false },
  { name: "Baloncesto", icon: "/sports/basketball.svg", available: false },
]

const clubs = [
  {
    name: "Club Deportivo Central",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    address: "Calle Principal 123",
    rating: 4.8,
    distance: "2.3 km",
    sports: ["Pádel", "Tenis"]
  },
  {
    name: "Polideportivo Municipal",
    image: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=1471&auto=format&fit=crop",
    address: "Avenida del Deporte 45",
    rating: 4.5,
    distance: "3.1 km",
    sports: ["Pádel", "Tenis", "Fútbol"]
  },
  {
    name: "Club Social Deportivo",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1469&auto=format&fit=crop",
    address: "Plaza del Deporte 78",
    rating: 4.7,
    distance: "1.8 km",
    sports: ["Pádel"]
  }
]

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1470&auto=format&fit=crop" 
            alt="Hero background" 
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
              Reserva tu pista deportiva
            </h1>
            <p className="text-xl text-gray-200">
              Encuentra y reserva pistas cerca de ti de forma fácil y rápida
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Deportes disponibles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sports.map((sport) => (
            <SportCard key={sport.name} {...sport} />
          ))}
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Clubs destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club) => (
              <ClubCard key={club.name} {...club} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Reserva fácil</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Encuentra y reserva tu pista en segundos
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Pago seguro</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Realiza tus pagos de forma segura y rápida
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Cancela gratis</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Cancela tu reserva hasta 24h antes sin coste
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}