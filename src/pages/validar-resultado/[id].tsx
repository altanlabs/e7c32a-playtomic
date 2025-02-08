import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"
import { Trophy, Star, Check } from "lucide-react"

export default function ValidarResultadoPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    try {
      // Aquí iría la llamada a la API para validar el resultado
      console.log({
        matchId: id,
        score: {
          team1: formData.get("team1Score"),
          team2: formData.get("team2Score")
        },
        mvp: formData.get("mvp")
      })

      toast.success("¡Resultado validado con éxito!")
      navigate("/dashboard")
    } catch (error) {
      toast.error("Error al validar el resultado")
    }
  }

  return (
    <div className="min-h-screen bg-background px-3 py-4">
      <Card className="max-w-md mx-auto">
        <div className="p-3 sm:p-4">
          <div className="text-center mb-4">
            <h1 className="text-lg sm:text-xl font-bold mb-1">Validar resultado</h1>
            <p className="text-xs text-muted-foreground">
              Confirma el resultado del partido
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="team1Score" className="text-xs">Equipo Local</Label>
                <Input
                  id="team1Score"
                  name="team1Score"
                  type="number"
                  min="0"
                  placeholder="Puntos"
                  required
                  className="h-7 text-xs"
                />
              </div>
              <div>
                <Label htmlFor="team2Score" className="text-xs">Equipo Visitante</Label>
                <Input
                  id="team2Score"
                  name="team2Score"
                  type="number"
                  min="0"
                  placeholder="Puntos"
                  required
                  className="h-7 text-xs"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="mvp" className="text-xs">Jugador MVP</Label>
              <Input
                id="mvp"
                name="mvp"
                placeholder="Nombre del MVP"
                className="h-7 text-xs"
              />
            </div>

            <div className="flex justify-center gap-2 pt-2">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate("/dashboard")}
                className="h-7 text-xs px-3"
              >
                Cancelar
              </Button>
              <Button 
                type="submit"
                className="h-7 text-xs px-3 bg-[#FFA726] hover:bg-[#FF9800]"
              >
                <Check className="mr-2 h-3 w-3" />
                Validar resultado
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}