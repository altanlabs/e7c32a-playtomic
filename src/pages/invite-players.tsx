import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { Users, Mail, Share2 } from "lucide-react"

export default function InvitePlayersPage() {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    try {
      // Aquí iría la llamada a la API para enviar invitaciones
      console.log({
        gameType: formData.get("gameType"),
        location: formData.get("location"),
        date: formData.get("date"),
        time: formData.get("time"),
        playerCount: formData.get("playerCount"),
        level: formData.get("level"),
        description: formData.get("description"),
        emails: formData.get("emails")
      })

      toast.success("¡Invitaciones enviadas con éxito!")
      navigate("/dashboard")
    } catch (error) {
      toast.error("Error al enviar las invitaciones")
    }
  }

  const handleShareLink = () => {
    // Generar y compartir enlace único
    const shareUrl = `${window.location.origin}/join-game/abc123`
    if (navigator.share) {
      navigator.share({
        title: 'Únete a mi partido',
        text: '¡Únete a nuestro partido de baloncesto!',
        url: shareUrl,
      })
    } else {
      navigator.clipboard.writeText(shareUrl)
      toast.success("Enlace copiado al portapapeles")
    }
  }

  return (
    <div className="min-h-screen bg-background px-3 py-4">
      <Card className="max-w-md mx-auto">
        <div className="p-3 sm:p-4">
          <div className="text-center mb-4">
            <h1 className="text-lg sm:text-xl font-bold mb-1">Invitar jugadores</h1>
            <p className="text-xs text-muted-foreground">
              Organiza un partido y encuentra jugadores
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="gameType" className="text-xs">Tipo de partido</Label>
                <Select name="gameType" required>
                  <SelectTrigger className="h-7 text-xs">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3x3">3x3</SelectItem>
                    <SelectItem value="5x5">5x5</SelectItem>
                    <SelectItem value="pickup">Pickup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="playerCount" className="text-xs">Jugadores necesarios</Label>
                <Select name="playerCount" required>
                  <SelectTrigger className="h-7 text-xs">
                    <SelectValue placeholder="Número" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 jugador</SelectItem>
                    <SelectItem value="2">2 jugadores</SelectItem>
                    <SelectItem value="3">3 jugadores</SelectItem>
                    <SelectItem value="4">4 jugadores</SelectItem>
                    <SelectItem value="5">5 jugadores</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="location" className="text-xs">Ubicación</Label>
              <Input
                id="location"
                name="location"
                placeholder="Dirección de la cancha"
                required
                className="h-7 text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="date" className="text-xs">Fecha</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="h-7 text-xs"
                />
              </div>
              <div>
                <Label htmlFor="time" className="text-xs">Hora</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  required
                  className="h-7 text-xs"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="level" className="text-xs">Nivel de juego</Label>
              <Select name="level" required>
                <SelectTrigger className="h-7 text-xs">
                  <SelectValue placeholder="Seleccionar nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="principiante">Principiante</SelectItem>
                  <SelectItem value="intermedio">Intermedio</SelectItem>
                  <SelectItem value="avanzado">Avanzado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description" className="text-xs">Descripción</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Detalles adicionales del partido..."
                className="h-16 text-xs resize-none"
              />
            </div>

            <div>
              <Label htmlFor="emails" className="text-xs">Invitar por email</Label>
              <Textarea
                id="emails"
                name="emails"
                placeholder="Introduce emails separados por comas..."
                className="h-16 text-xs resize-none"
              />
            </div>

            <div className="space-y-2 pt-2">
              <Button 
                type="submit"
                className="w-full h-7 text-xs bg-[#FFA726] hover:bg-[#FF9800]"
              >
                <Mail className="mr-2 h-3 w-3" />
                Enviar invitaciones
              </Button>
              
              <Button 
                type="button"
                variant="outline"
                className="w-full h-7 text-xs"
                onClick={handleShareLink}
              >
                <Share2 className="mr-2 h-3 w-3" />
                Compartir enlace
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}