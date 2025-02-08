import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marc García",
    role: "Jugador 3x3",
    avatar: "https://i.pravatar.cc/150?u=marc",
    content: "Increíble plataforma para encontrar partidos y conocer nuevos jugadores. He mejorado mucho mi juego desde que empecé a usar Dribla.",
    rating: 5
  },
  {
    id: 2,
    name: "Laura Martínez",
    role: "Organizadora de torneos",
    avatar: "https://i.pravatar.cc/150?u=laura",
    content: "Como organizadora, Dribla me ha facilitado enormemente la gestión de torneos y eventos. La comunidad es fantástica.",
    rating: 5
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    role: "Club deportivo",
    avatar: "https://i.pravatar.cc/150?u=carlos",
    content: "Desde que publicamos nuestras pistas en Dribla, hemos visto un aumento significativo en las reservas. La plataforma es muy intuitiva.",
    rating: 5
  }
]

export function TestimonialSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-3">
        <div className="max-w-[90rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Lo que dice la comunidad</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Descubre por qué miles de jugadores y clubes confían en Dribla para sus partidos y torneos de baloncesto 3x3
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#FFA726] text-[#FFA726]" />
                        ))}
                      </div>

                      <blockquote className="text-gray-300">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}