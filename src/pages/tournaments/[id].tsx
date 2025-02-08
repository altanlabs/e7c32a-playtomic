import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link, useParams } from "react-router-dom"
import { Calendar, MapPin, Users, Trophy, Euro, Info } from "lucide-react"

export default function TournamentDetailsPage() {
  const { id } = useParams()
  
  // Ejemplo de datos del torneo (en producción vendría de una API)
  const tournament = {
    id: 1,
    name: "Liga 3x3 Barcelona",
    date: "15-20 Marzo 2024",
    location: "Barcelona",
    teams: "16/32",
    price: "150€",
    description: "Liga oficial 3x3 de Barcelona. Formato de grupos + eliminatorias. Premios para los 3 primeros clasificados.",
    image: "/sports/basketball-3x3.svg",
    prizes: [
      "1º Clasificado: 1000€ + Trofeo",
      "2º Clasificado: 500€ + Trofeo",
      "3º Clasificado: 250€ + Trofeo"
    ],
    rules: [
      "Equipos de 3-4 jugadores",
      "Partidos a 21 puntos o 10 minutos",
      "Sistema FIBA 3x3",
      "Arbitraje oficial"
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header con imagen */}
        <div className="relative rounded-lg overflow-hidden mb-8 aspect-video">
          <img
            src={tournament.image}
            alt={tournament.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h1 className="text-4xl font-bold text-white mb-2">{tournament.name}</h1>
            <div className="flex items-center text-white/90">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{tournament.date}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Información principal */}
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Información del torneo</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>{tournament.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>Equipos: {tournament.teams}</span>
                </div>
                <div className="flex items-center">
                  <Euro className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>Inscripción: {tournament.price}</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-muted-foreground">{tournament.description}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Premios</h2>
              <div className="space-y-2">
                {tournament.prizes.map((prize, index) => (
                  <div key={index} className="flex items-center">
                    <Trophy className="h-5 w-5 mr-3 text-[#FFA726]" />
                    <span>{prize}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Reglas</h2>
              <div className="space-y-2">
                {tournament.rules.map((rule, index) => (
                  <div key={index} className="flex items-center">
                    <Info className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar con acciones */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{tournament.price}</div>
                  <div className="text-sm text-muted-foreground">por equipo</div>
                </div>
                
                <div className="space-y-2">
                  <Link to={`/tournaments/join?id=${id}`}>
                    <Button className="w-full bg-[#66BB6A] hover:bg-[#4CAF50]">
                      Me apunto
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full">
                    Compartir torneo
                  </Button>
                </div>

                <div className="pt-4 border-t text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Plazas disponibles: 16</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Organizador</h3>
              <div className="text-sm space-y-2">
                <div>DRIBLA Tournaments</div>
                <div className="text-muted-foreground">
                  Organizador oficial de torneos 3x3
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Contactar
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}