import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Star, MapPin, Users, Clock, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center">
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

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-[90rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
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
                className="text-xl md:text-2xl text-gray-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Tu próximo partido está a un clic de distancia
              </motion.p>

              <motion.div 
                className="flex flex-col gap-4 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/reservar" className="flex-1">
                    <Button 
                      size="lg" 
                      className="w-full text-lg py-8 bg-[#FFA726] hover:bg-[#FF9800] text-white rounded-xl transform transition-all duration-300 hover:scale-105"
                    >
                      Reserva aro
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/partidos" className="flex-1">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full text-lg py-8 bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-xl transform transition-all duration-300 hover:scale-105"
                    >
                      Unirse a un partido
                    </Button>
                  </Link>
                </div>
                <Link to="/publicar-pista">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full text-lg py-8 bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-xl transform transition-all duration-300 hover:scale-105"
                  >
                    ¿Eres un club? Publica tu pista
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm text-gray-400">Explora más</span>
          <ChevronDown className="h-6 w-6 text-[#FFA726]" />
        </motion.div>
      </section>

      {/* Search Section with Enhanced UI */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-[90rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#FFA726] to-[#FF9800] bg-clip-text text-transparent">
                  Encuentra tu pista perfecta
                </h2>
                <p className="text-xl text-gray-400">
                  Más de 200 pistas disponibles en tu zona
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-6">
                <div className="relative transform transition-all duration-300 hover:scale-[1.02]">
                  <Input
                    type="text"
                    placeholder="Buscar por ubicación..."
                    className="w-full py-8 pl-12 pr-4 bg-white/5 border-white/20 rounded-xl text-lg focus:ring-2 focus:ring-[#FFA726] focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Indoor", "Outdoor", "3x3", "5x5", "Iluminación", "Parking"].map((filter) => (
                    <Button
                      key={filter}
                      variant="outline"
                      className="bg-white/5 hover:bg-[#FFA726] hover:text-white border-white/20 rounded-full transition-all duration-300"
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nearby Courts with Enhanced Cards */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-[90rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="flex justify-between items-end">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FFA726] to-[#FF9800] bg-clip-text text-transparent">
                    Pistas cercanas
                  </h2>
                  <p className="text-gray-400">Las mejores pistas cerca de ti</p>
                </div>
                <Link to="/pistas">
                  <Button variant="link" className="text-[#FFA726] hover:text-[#FF9800]">
                    Ver todas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Pista Municipal Les Corts",
                    location: "Barcelona",
                    rating: 4.8,
                    players: 12,
                    price: "15€/h",
                    time: "Abierto hasta 23:00"
                  },
                  {
                    name: "Club Baloncesto Sarrià",
                    location: "Barcelona",
                    rating: 4.9,
                    players: 8,
                    price: "20€/h",
                    time: "Abierto 24h"
                  },
                  {
                    name: "Pista Vall d'Hebron",
                    location: "Barcelona",
                    rating: 4.7,
                    players: 6,
                    price: "12€/h",
                    time: "Cierra a las 22:00"
                  }
                ].map((court, index) => (
                  <Link to={`/pista/${index + 1}`} key={court.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div className="aspect-[4/3]">
                        <img
                          src={`https://source.unsplash.com/random/800x600?basketball-court&${index}`}
                          alt={court.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-[#FFA726]" />
                            <span className="text-sm text-gray-300">{court.location}</span>
                          </div>
                          <h3 className="text-xl font-semibold group-hover:text-[#FFA726] transition-colors">
                            {court.name}
                          </h3>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-[#FFA726]" />
                              <span className="text-sm">{court.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-400">{court.players} jugadores ahora</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events and Tournaments Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-[90rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="flex justify-between items-end">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FFA726] to-[#FF9800] bg-clip-text text-transparent">
                    Eventos y torneos
                  </h2>
                  <p className="text-gray-400">Próximos eventos en tu zona</p>
                </div>
                <Link to="/eventos">
                  <Button variant="link" className="text-[#FFA726] hover:text-[#FF9800]">
                    Ver todos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Torneo 3x3 Verano",
                    date: "15 Jul 2024",
                    location: "Les Corts",
                    price: "20€/equipo",
                    spots: "8 plazas libres"
                  },
                  {
                    name: "Liga Local 5x5",
                    date: "Inicio: 1 Ago 2024",
                    location: "Varios lugares",
                    price: "100€/equipo",
                    spots: "4 equipos necesarios"
                  },
                  {
                    name: "Clinic Juvenil",
                    date: "22 Jul 2024",
                    location: "Sarrià",
                    price: "15€/persona",
                    spots: "12 plazas libres"
                  }
                ].map((event, index) => (
                  <Link to={`/evento/${index + 1}`} key={event.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div className="aspect-[4/3]">
                        <img
                          src={`https://source.unsplash.com/random/800x600?basketball-tournament&${index}`}
                          alt={event.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[#FFA726]" />
                            <span className="text-sm text-gray-300">{event.date}</span>
                          </div>
                          <h3 className="text-xl font-semibold group-hover:text-[#FFA726] transition-colors">
                            {event.name}
                          </h3>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-400">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-400">{event.spots}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center">
                <Link to="/publicar-evento">
                  <Button 
                    size="lg"
                    className="bg-[#FFA726] hover:bg-[#FF9800] text-white px-8 py-6 rounded-xl transform transition-all duration-300 hover:scale-105"
                  >
                    Organizar un evento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-[90rem] mx-auto">
            <p className="text-sm text-gray-400 text-center">
              Hecho con <span className="font-bold">altan</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}