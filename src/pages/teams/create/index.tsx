import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLocation, useSearchParams, useNavigate } from "react-router-dom"
import { toast } from "sonner"

export default function CreateTeamPage() {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const tournamentId = searchParams.get("tournament")
  const teamData = location.state?.teamData || {
    teamName: "",
    captainName: "",
    email: "",
    phone: ""
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    try {
      // Aquí iría la llamada a la API para crear el equipo
      console.log({
        teamName: formData.get("teamName"),
        captainName: formData.get("captainName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        level: formData.get("level"),
        description: formData.get("description"),
        tournament: tournamentId
      })

      toast.success("¡Equipo creado con éxito!")
      // Redirigir al detalle del torneo
      navigate(`/tournaments/${tournamentId}`)
    } catch (error) {
      toast.error("Error al crear el equipo")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Crear nuevo equipo</h1>
          <p className="text-muted-foreground">
            Completa la información para registrar tu equipo en el torneo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="teamName">Nombre del equipo</Label>
              <Input
                id="teamName"
                name="teamName"
                defaultValue={teamData.teamName}
                placeholder="Nombre del equipo"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="captainName">Nombre del capitán</Label>
              <Input
                id="captainName"
                name="captainName"
                defaultValue={teamData.captainName}
                placeholder="Nombre del capitán"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email de contacto</Label>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={teamData.email}
                placeholder="Email"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Teléfono de contacto</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                defaultValue={teamData.phone}
                placeholder="Teléfono"
                required
              />
            </div>

            <div>
              <Label htmlFor="level">Nivel del equipo</Label>
              <Select name="level" required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="principiante">Principiante</SelectItem>
                  <SelectItem value="intermedio">Intermedio</SelectItem>
                  <SelectItem value="avanzado">Avanzado</SelectItem>
                  <SelectItem value="profesional">Profesional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Descripción del equipo</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Cuéntanos sobre tu equipo..."
                className="h-24"
              />
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
              Crear equipo
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}