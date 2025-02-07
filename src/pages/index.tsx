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
    color: "text-white"
  },
  {
    title: "Reserva",
    description: "Asegura tu cancha al instante",
    icon: Calendar,
    color: "text-white"
  },
  {
    title: "Juega",
    description: "Disfruta del baloncesto como nunca",
    icon: Trophy,
    color: "text-white"
  }
]

const stats = [
  {
    title: "Usuarios activos",
    value: "10,000+",
    description: "Jugadores en la plataforma",
    icon: Users,
    trend: "+12% este mes"
  },
  {
    title: "Partidos jugados",
    value: "50,000+",
    description: "Encuentros organizados",
    icon: Activity,
    trend: "+8% este mes"
  },
  {
    title: "Canchas disponibles",
    value: "200+",
    description: "En toda la ciudad",
    icon: MapPin,
    trend: "+5% este mes"
  },
  {
    title: "Torneos realizados",
    value: "100+",
    description: "Competiciones exitosas",
    icon: Trophy,
    trend: "+15% este mes"
  }
]

const courts = [
  {
    name: "Polideportivo Central",
    address: "Av. Principal 123, Barcelona",
    rating: 4.8,
    distance: "1.2 km",
    availability: "Disponible ahora",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
  },
  {
    name: "Club Deportivo Elite",
    address: "Calle Deportiva 456, Barcelona",
    rating: 4.9,
    distance: "2.5 km",
    availability: "Disponible en 1h",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
  },
  {
    name: "Centro Deportivo Municipal",
    address: "Plaza del Deporte 789, Barcelona",
    rating: 4.7,
    distance: "3.1 km",
    availability: "Disponible mañana",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
  }
]

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Jugador amateur",
    content: "Dribla ha revolucionado la forma en que organizo mis partidos. ¡Es increíble!",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "Laura Martínez",
    role: "Capitana de equipo",
    content: "La mejor plataforma para encontrar canchas y organizar torneos. Muy recomendable.",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "Miguel Ángel",
    role: "Entrenador",
    content: "Una herramienta esencial para cualquier amante del baloncesto.",
    avatar: "https://i.pravatar.cc/150?u=3"
  }
]

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a82ec]">
        <div className="absolute inset-0 z-0 bg-[#0a82ec]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
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
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Tu próximo partido está a un click de distancia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button size="lg" className="text-lg px-8 bg-white text-[#0a82ec] hover:bg-white/90">
                  Reservar cancha
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent hover:bg-white/10 text-white border-white">
                  Unirse a partido
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#0a82ec] relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
                  "bg-white/10 backdrop-blur-sm"
                )}>
                  <feature.icon className={cn("h-8 w-8", feature.color)} />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-24 container mx-auto px-4">
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
      <section className="py-24 bg-muted/50">
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
                className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-[#0a82ec]/50 transition-colors"
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
                    <span className="text-sm text-[#0a82ec]">{court.availability}</span>
                    <Button variant="outline" size="sm">
                      Reservar
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 bg-[#0a82ec] hover:bg-[#0a82ec]/90">
              Ver todas las canchas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre por qué miles de jugadores confían en Dribla
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a82ec] relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-8 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            ¿Listo para empezar a jugar?
          </h2>
          <p className="text-xl text-white/80">
            Únete a nuestra comunidad y disfruta del baloncesto como nunca antes
          </p>
          <Button size="lg" className="text-lg px-8 bg-white text-[#0a82ec] hover:bg-white/90">
            Crear cuenta gratis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  )
}