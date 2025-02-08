import { 
  Calendar, 
  Users, 
  Trophy,
  Search,
  Clock,
  Star
} from "lucide-react"

export function LandingSections() {
  const features = [
    {
      icon: <Calendar className="h-12 w-12 text-[#FFA726]" />,
      title: "Reserva fácil",
      description: "Encuentra y reserva canchas en segundos"
    },
    {
      icon: <Users className="h-12 w-12 text-[#66BB6A]" />,
      title: "Encuentra jugadores",
      description: "Únete a partidos o invita a otros jugadores"
    },
    {
      icon: <Trophy className="h-12 w-12 text-[#42A5F5]" />,
      title: "Compite en torneos",
      description: "Participa en torneos y mejora tu ranking"
    },
    {
      icon: <Search className="h-12 w-12 text-[#EC407A]" />,
      title: "Busca canchas",
      description: "Encuentra las mejores canchas cerca de ti"
    },
    {
      icon: <Clock className="h-12 w-12 text-[#AB47BC]" />,
      title: "Disponibilidad real",
      description: "Consulta horarios y disponibilidad en tiempo real"
    },
    {
      icon: <Star className="h-12 w-12 text-[#26A69A]" />,
      title: "Mejora tu nivel",
      description: "Sistema de rankings y estadísticas personales"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
        >
          <div className="mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {feature.title}
          </h3>
          <p className="text-muted-foreground">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}