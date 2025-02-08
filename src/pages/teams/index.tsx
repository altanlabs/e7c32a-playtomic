import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useSearchParams } from "react-router-dom"

export default function TeamsPage() {
  const [searchParams] = useSearchParams()
  const tournamentId = searchParams.get("tournament")

  // Mock data - En una implementación real, esto vendría de una API
  const teams = [
    {
      id: 1,
      name: "Los Invencibles",
      players: [
        { name: "Juan Pérez", position: "Base" },
        { name: "Ana García", position: "Alero" },
        { name: "Carlos López", position: "Pívot" },
      ],
    },
    {
      id: 2,
      name: "Street Warriors",
      players: [
        { name: "María Rodríguez", position: "Base" },
        { name: "Pedro Sánchez", position: "Alero" },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Equipos del torneo</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Card key={team.id} className="p-6">
            <h2 className="text-xl font-semibold mb-4">{team.name}</h2>
            <div className="space-y-2">
              {team.players.map((player, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{player.name}</span>
                  <span className="text-muted-foreground">{player.position}</span>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              Ver detalles
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}