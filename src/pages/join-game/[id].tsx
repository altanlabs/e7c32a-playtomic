import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"
import { MapPin, Calendar, Clock, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data - En una implementación real, esto vendría de una API
const MOCK_GAME = {
  id: "abc123",
  type: "3x3",
  location: "Pista Central - Madrid",
  date: "2024-07-15",
  time: "18:00",
  playerCount: 3,
  level: "Intermedio",
  description: "Partido amistoso de 3x3. Buscamos jugadores para completar equipos.",
  organizer: "Juan Pérez",
  currentPlayers: 5,
  maxPlayers: 6
}

export default function JoinGamePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // En una implementación real, aquí se haría una llamada a la API
  const game = MOCK_GAME

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    try {
      // Aquí iría la llamada a la API para unirse al partido
      console.log({
        gameId: id,
        playerName: formData.get("playerName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        position: formData.get("position"),
        level: formData.get("level")
      })

      toast.success("¡Te has unido al partido con éxito!")
      navigate("/dashboard")
    } catch (error) {
      toast.error("Error al unirse al partido")
    }
  }

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center px-3">
        <Card className="w-full max-w-md p-4 text-center">
          <h1 className="text-lg font-bold mb-2">Partido no encontrado</h1>
          <p className="text-sm text-muted-foreground mb-4">
            El partido que buscas no existe o ha sido cancelado
          </p>
          <Button 
            onClick={() => navigate("/")}
            className="h-7 text-xs bg-[#FFA726] hover:bg-[#FF9800]"
          >
            Volver al inicio
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background px-3 py-4">
      <div className="max-w-md mx-auto space-y-4">
        {/* Detalles del partido */}
        <Card className="p-3">
          <div className="text-center mb-3">
            <h1 className="text-lg font-bold mb-1">Unirse al partido</h1>
            <Badge className="text-xs">{game.type}</Badge>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs">{game.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs">{new Date(game.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs">{game.time}h</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs">{game.currentPlayers}/{game.maxPlayers} jugadores</span>
            </div>
          </div>

          <div className="mt-3 p-2 bg-secondary rounded-lg">
            <p className="text-xs">{game.description}</p>
          </div>
        </Card>

        {/* Formulario de registro */}
        <Card className="p-3">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <Label htmlFor="playerName" className="text-xs">Nombre completo</Label>
              <Input
                id="playerName"
                name="playerName"
                placeholder="Tu nombre"
                required
                className="h-7 text-xs"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-xs">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="h-7 text-xs"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-xs">Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Tu número de teléfono"
                required
                className="h-7 text-xs"
              />
            </div>

            <div>
              <Label htmlFor="position" className="text-xs">Posición preferida</Label>
              <Select name="position" required>
                <SelectTrigger className="h-7 text-xs">
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
              <Label htmlFor="level" className="text-xs">Nivel de juego</Label>
              <Select name="level" required>
                <SelectTrigger className="h-7 text-xs">
                  <SelectValue placeholder="Selecciona tu nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="principiante">Principiante</SelectItem>
                  <SelectItem value="intermedio">Intermedio</SelectItem>
                  <SelectItem value="avanzado">Avanzado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-center gap-2 pt-2">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate("/")}
                className="h-7 text-xs px-3"
              >
                Cancelar
              </Button>
              <Button 
                type="submit"
                className="h-7 text-xs px-3 bg-[#FFA726] hover:bg-[#FF9800]"
              >
                Unirme al partido
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}