import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Trophy, Users, Calendar, MapPin, Clock, Activity, Target, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { StatsCard } from "@/components/blocks/stats-card"
import { TestimonialCard } from "@/components/blocks/testimonial-card"

const features = [
  {
    title: "Dribla",
    description: "Encuentra partidos y compañeros de juego",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Reserva",
    description: "Asegura tu cancha al instante",
    icon: Calendar,
    color: "text-primary"
  },
  {
    title: "Juega",
    description: "Disfruta del baloncesto como nunca",
    icon: Trophy,
    color: "text-primary"
  }
]

// ... (rest of the constants remain the same)

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" 
            alt="Basketball court" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        <div className="container relative z-10 px-4 py-32 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                Dribla.<br/>
                Reserva.<br/>
                Juega.
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Tu próximo partido está a un click de distancia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                  Reservar cancha
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Unirse a partido
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-24 container mx-auto px-4 bg-muted/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre todas las herramientas para disfrutar al máximo del baloncesto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center space-y-4"
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl mx-auto flex items-center justify-center",
                "bg-gradient-to-br from-background to-muted"
              )}>
                <feature.icon className={cn("h-8 w-8", feature.color)} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatsCard {...stat} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courts Preview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Las mejores canchas cerca de ti
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encuentra y reserva las canchas más populares en tu zona
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courts.map((court, index) => (
              <motion.div
                key={court.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={court.image}
                    alt={court.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{court.name}</h3>
                  <p className="text-muted-foreground mb-4">{court.address}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{court.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{court.distance}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary">{court.availability}</span>
                    <Button variant="outline" size="sm">
                      Reservar
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8">
              Ver todas las canchas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-8 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            ¿Listo para empezar a jugar?
          </h2>
          <p className="text-xl text-muted-foreground">
            Únete a nuestra comunidad y disfruta del baloncesto como nunca antes
          </p>
          <Button size="lg" className="text-lg px-8">
            Crear cuenta gratis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  )
}