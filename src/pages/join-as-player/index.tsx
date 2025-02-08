import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSearchParams, useNavigate } from "react-router-dom"
import { toast } from "sonner"

export default function JoinAsPlayerPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const teamName = searchParams.get("team")
  const tournamentId = searchParams.get("tournament")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    try {
      // Aquí iría la llamada a la API para registrar al jugador
      console.log({
        playerName: formData.get("playerName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        position: formData.get("position"),
        team: teamName,
        tournament: tournamentId
      })

      toast.success("¡Registro completado con éxito!")
      // Redirigir al detalle del torneo
      navigate(`/tournaments/${tournamentId}`)
    } catch (error) {
      toast.error("Error al procesar el registro")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Unirse como jugador</h1>
          {teamName && (
            <p className="text-muted-foreground">
              Únete al equipo {teamName}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="playerName">Nombre completo</Label>
              <Input
                id="playerName"
                name="playerName"
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Tu número de teléfono"
                required
              />
            </div>

            <div>
              <Label htmlFor="position">Posición preferida</Label>
              <Select name="position" required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu posición" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="base">Base</SelectItem>
                  <SelectItem value="escolta">Escolta</SelectItem>
                  <SelectItem value="alero">Alero</SelectItem>
                  <SelectItem value="ala-pivot">Ala-Pívot</SelectItem>
                  <SelectItem value="pivot">Pívot</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="experience">Experiencia</Label>
              <Select name="experience" required>
                <SelectTrigger>
                  <SelectValue placeholder="Nivel de experiencia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="principiante">Principiante</SelectItem>
                  <SelectItem value="intermedio">Intermedio</SelectItem>
                  <SelectItem value="avanzado">Avanzado</SelectItem>
                  <SelectItem value="profesional">Profesional</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => navigate(`/tournaments/${tournamentId}`)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-[#FFA726] hover:bg-[#FF9800]"
            >
              Completar registro
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}