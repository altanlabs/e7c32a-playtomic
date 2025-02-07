import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Trophy, Users, Calendar, MapPin, Clock, Activity, Target, TrendingUp } from "lucide-react"

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop"
            alt="Basketball Court"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-[90rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-medium text-[#FFA726]">
                  BIENVENIDO A DRIBLA
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-4xl">
                  La app para amantes del basket
                </h1>
              </div>
              
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                Encuentra partidos, reserva pistas y conecta con otros jugadores. Todo en un solo lugar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button 
                  size="lg" 
                  className="text-lg px-8 bg-white text-black hover:bg-white/90 rounded-full"
                >
                  Empezar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 bg-transparent hover:bg-white/10 text-white border-white rounded-full"
                >
                  Ver cómo funciona
                </Button>
              </div>
            </motion.div>

            {/* Stats Section */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <h3 className="text-5xl font-bold">10K+</h3>
                <p className="text-gray-400">Usuarios activos</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2"
              >
                <h3 className="text-5xl font-bold">50K+</h3>
                <p className="text-gray-400">Partidos jugados</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-2"
              >
                <h3 className="text-5xl font-bold">200+</h3>
                <p className="text-gray-400">Canchas disponibles</p>
              </motion.div>
            </div>
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

      {/* Features Preview */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-[90rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-24"
            >
              {/* Left Column */}
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold">
                  Encuentra tu próximo partido
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Únete a partidos organizados, crea los tuyos propios o encuentra jugadores para completar tu equipo.
                </p>
                <Button 
                  className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90 rounded-full"
                >
                  Explorar partidos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Right Column - Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071&auto=format&fit=crop"
                  alt="Basketball game"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-[90rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8 mb-24"
            >
              <h2 className="text-4xl md:text-6xl font-bold">
                Todo lo que necesitas
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Una plataforma completa para gestionar tu experiencia de baloncesto
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                  className="relative p-8 rounded-2xl border border-white/10 hover:border-[#FFA726] transition-colors group"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FFA726]/10 flex items-center justify-center group-hover:bg-[#FFA726]/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-[#FFA726]" />
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center"
            >
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold">
                  Descarga la app
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Lleva el baloncesto contigo. Gestiona tus partidos, reservas y estadísticas desde cualquier lugar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="text-lg px-8 py-6 bg-white text-black hover:bg-white/90 rounded-full"
                  >
                    App Store
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 rounded-full"
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
                    src="https://placehold.co/600x800/1a1a1a/ffffff?text=App+Preview"
                    alt="App Preview"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              ¿Listo para jugar?
            </h2>
            <p className="text-xl text-gray-400">
              Únete a la comunidad de baloncesto más grande de España
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 bg-white text-black hover:bg-white/90 rounded-full"
            >
              Crear cuenta gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}