import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Trophy, Shield } from "lucide-react"

export function LandingSections() {
  const sections = [
    {
      icon: <Calendar className="h-8 w-8 text-[#FFA726]" />,
      title: "Reserva instantanea",
      description: "Encuentra y reserva canchas en tiempo real",
      href: "/courts",
      color: "bg-[#FFA726]",
    },
    {
      icon: <Users className="h-8 w-8 text-[#66BB6A]" />,
      title: "Encuentra equipo",
      description: "Únete a equipos o encuentra jugadores para tu partido",
      href: "/teams",
      color: "bg-[#66BB6A]",
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#42A5F5]" />,
      title: "Torneos",
      description: "Participa en torneos y compite con los mejores",
      href: "/tournaments",
      color: "bg-[#42A5F5]",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#EC407A]" />,
      title: "Comunidad segura",
      description: "Jugadores verificados y sistema de valoraciones",
      href: "/verification",
      color: "bg-[#EC407A]",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
      {sections.map((section, index) => (
        <Link
          key={index}
          to={section.href}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-background/50 to-background/80 p-6 shadow-lg transition-all hover:shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
          <div className="relative z-10">
            <div className={`inline-flex rounded-xl ${section.color} bg-opacity-10 p-3`}>
              {section.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              {section.title}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {section.description}
            </p>
            <Button
              variant="ghost"
              className="mt-4 group-hover:translate-x-2 transition-transform"
            >
              Empezar ahora
              <span className="ml-2">→</span>
            </Button>
          </div>
        </Link>
      ))}
    </div>
  )
}