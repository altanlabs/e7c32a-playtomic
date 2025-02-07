import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Star, MapPin, Users } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071&auto=format&fit=crop"
            alt="Basketball net"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
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
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                  Dribla.<br/>
                  Reserva.<br/>
                  Juega.
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                Tu próximo partido está a un clic de distancia
              </p>

              <div className="flex flex-col gap-4 max-w-xl">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 text-lg py-8 bg-white text-black hover:bg-white/90 rounded-xl"
                  >
                    Reserva aro
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 text-lg py-8 bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-xl"
                  >
                    Unirse a un partido
                  </Button>
                </div>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg py-8 bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-xl"
                >
                  ¿Eres un club? Publica tu pista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll para explorar</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-8 bg-white/20 rounded-full relative"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
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
                <h2 className="text-4xl md:text-6xl font-bold">
                  Encuentra tu pista perfecta
                </h2>
                <p className="text-xl text-gray-400">
                  Busca entre cientos de pistas disponibles en tu zona
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Buscar por ubicación..."
                    className="w-full py-8 pl-12 pr-4 bg-white/5 border-white/20 rounded-xl text-lg"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nearby Courts */}
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
                  <h2 className="text-4xl font-bold">Pistas cercanas</h2>
                  <p className="text-gray-400">Las mejores pistas cerca de ti</p>
                </div>
                <Button variant="link" className="text-[#FFA726]">
                  Ver todas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((court) => (
                  <motion.div
                    key={court}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: court * 0.1 }}
                    className="group relative rounded-2xl overflow-hidden"
                  >
                    <div className="aspect-[4/3]">
                      <img
                        src={`https://source.unsplash.com/random/800x600?basketball-court&${court}`}
                        alt="Basketball court"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#FFA726]" />
                          <span className="text-sm text-gray-300">Barcelona</span>
                        </div>
                        <h3 className="text-xl font-semibold">Pista {court}</h3>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-[#FFA726]" />
                            <span className="text-sm">4.8</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-400">12 jugadores ahora</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                <h2 className="text-4xl md:text-6xl font-bold">
                  Lo que dicen nuestros jugadores
                </h2>
                <p className="text-xl text-gray-400">
                  Miles de jugadores ya confían en nosotros
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Carlos R.",
                    role: "Jugador amateur",
                    text: "La mejor app para encontrar partidos. He conocido a gente increíble."
                  },
                  {
                    name: "Laura M.",
                    role: "Jugadora semi-pro",
                    text: "Reservar pista nunca había sido tan fácil. La recomiendo totalmente."
                  },
                  {
                    name: "Miguel A.",
                    role: "Entrenador",
                    text: "Perfecta para organizar entrenamientos y encontrar rivales para amistosos."
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-2xl border border-white/10 space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10" />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">{testimonial.text}</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-[#FFA726] text-[#FFA726]" />
                      ))}
                    </div>
                  </motion.div>
                ))}
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