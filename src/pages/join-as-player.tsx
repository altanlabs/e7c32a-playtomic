import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSearchParams } from "react-router-dom"
import { toast } from "sonner"

export default function JoinAsPlayerPage() {
  const [searchParams] = useSearchParams()
  const teamName = searchParams.get("team")
  const tournamentId = searchParams.get("tournament")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Aquí iría la lógica para unirse como jugador
      toast.success("¡Te has unido al equipo correctamente!")
    } catch (error) {
      toast.error("Error al unirse al equipo")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Unirse como jugador</h1>
        <p className="text-muted-foreground mb-6">
          Únete al equipo {teamName} en el torneo
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="playerName">Nombre completo</Label>
              <Input
                id="playerName"
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Tu número de teléfono"
                required
              />
            </div>

            <div>
              <Label htmlFor="position">Posición preferida</Label>
              <Input
                id="position"
                placeholder="Ej: Base, Escolta, Alero..."
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="w-full bg-[#FFA726] hover:bg-[#FF9800]">
              Unirse al equipo
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}