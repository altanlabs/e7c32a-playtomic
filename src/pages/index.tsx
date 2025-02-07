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
            </motion.div>

            {/* Footer */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <p className="text-sm text-gray-400 text-center">
                Hecho con <span className="font-bold">altan</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}