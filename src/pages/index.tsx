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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link to="/join-as-player" className="flex-1">
                    <Button 
                      size="lg" 
                      className="w-full text-lg py-8 bg-[#FFA726] hover:bg-[#FF9800] text-white rounded-xl transform transition-all duration-300 hover:scale-105"
                    >
                      Unirse como jugador
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/teams" className="flex-1">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full text-lg py-8 bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-xl transform transition-all duration-300 hover:scale-105"
                    >
                      Ver equipos
                    </Button>
                  </Link>
                </div>
                <Link to="/teams/create">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full text-lg py-8 bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-xl transform transition-all duration-300 hover:scale-105"
                  >
                    Inscribir un equipo
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