import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, MapPin, Trophy } from "lucide-react"

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

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                <Button 
                  size="lg" 
                  className="flex-1 text-lg py-8 bg-white text-black hover:bg-white/90 rounded-xl"
                >
                  Reservar cancha
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-[90rem] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Encuentra jugadores",
                  description: "Conecta con otros jugadores de tu nivel y zona"
                },
                {
                  icon: MapPin,
                  title: "Reserva pistas",
                  description: "Accede a las mejores canchas de tu ciudad"
                },
                {
                  icon: Trophy,
                  title: "Compite en torneos",
                  description: "Participa en competiciones y mejora tu ranking"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors group"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-[90rem] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold">
                  Todo en tu móvil
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Gestiona tus partidos, reservas y torneos desde cualquier lugar. Descarga la app y empieza a jugar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90 rounded-xl"
                  >
                    App Store
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10 rounded-xl"
                  >
                    Google Play
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative z-10"
                >
                  <img
                    src="https://placehold.co/400x800/1a1a1a/ffffff?text=App+Preview"
                    alt="App Preview"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
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