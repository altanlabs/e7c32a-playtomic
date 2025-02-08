import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Star, MapPin, Users, Clock, ChevronDown, Trophy, Calendar, Shield } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { UpcomingGamesSection } from "@/components/blocks/upcoming-games-section"
import { TestimonialSection } from "@/components/blocks/testimonial-section"

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-[#FFA726]" />,
    title: "Reserva instantánea",
    description: "Encuentra y reserva canchas en tiempo real"
  },
  {
    icon: <Users className="h-6 w-6 text-[#FFA726]" />,
    title: "Encuentra equipo",
    description: "Únete a equipos o encuentra jugadores para tu partido"
  },
  {
    icon: <Trophy className="h-6 w-6 text-[#FFA726]" />,
    title: "Torneos",
    description: "Participa en torneos y compite con los mejores"
  },
  {
    icon: <Shield className="h-6 w-6 text-[#FFA726]" />,
    title: "Comunidad segura",
    description: "Jugadores verificados y sistema de valoraciones"
  }
]

const stats = [
  { number: "500+", label: "Partidos organizados" },
  { number: "1000+", label: "Jugadores activos" },
  { number: "50+", label: "Torneos realizados" },
  { number: "100+", label: "Canchas disponibles" }
]

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-[calc(100vh-2.5rem)] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full">
            <img
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071&auto=format&fit=crop"
              alt="Basketball court"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          </div>
        </div>

        <div className="container relative z-10 px-3 mx-auto">
          <div className="max-w-[90rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 sm:space-y-12"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Dribla.<br/>
                  Reserva.<br/>
                  Juega.
                </motion.h1>
              </div>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Tu próximo partido está a un clic de distancia
              </motion.p>

              <motion.div 
                className="flex flex-col gap-3 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link to="/join-game" className="flex-1">
                    <Button 
                      className="w-full h-8 sm:h-10 text-xs sm:text-sm bg-[#FFA726] hover:bg-[#FF9800] text-white rounded-lg transform transition-all duration-300 hover:scale-105"
                    >
                      Unirse a un partido
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </Link>
                  <Link to="/invite-players" className="flex-1">
                    <Button 
                      variant="outline" 
                      className="w-full h-8 sm:h-10 text-xs sm:text-sm bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-lg transform transition-all duration-300 hover:scale-105"
                    >
                      Invitar jugadores
                    </Button>
                  </Link>
                </div>
                <Link to="/teams/create">
                  <Button 
                    variant="outline" 
                    className="w-full h-8 sm:h-10 text-xs sm:text-sm bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-lg transform transition-all duration-300 hover:scale-105"
                  >
                    Inscribir un equipo
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs sm:text-sm text-gray-400">Explora más</span>
          <ChevronDown className="h-4 w-4 sm:h-6 sm:w-6 text-[#FFA726]" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-3">
          <div className="max-w-[90rem] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Games Section */}
      <UpcomingGamesSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-3">
          <div className="max-w-[90rem] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-[#FFA726] mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-[#FFA726]">
        <div className="container mx-auto px-3">
          <div className="max-w-[90rem] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                ¿Listo para jugar?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Únete a la comunidad de baloncesto 3x3 más grande de España
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/join-game">
                  <Button className="w-full sm:w-auto bg-white text-[#FFA726] hover:bg-white/90">
                    Buscar partido
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/invite-players">
                  <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/20">
                    Invitar jugadores
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 sm:py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-3">
          <div className="max-w-[90rem] mx-auto">
            <p className="text-xs sm:text-sm text-gray-400 text-center">
              Hecho con <span className="font-bold">altan</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}