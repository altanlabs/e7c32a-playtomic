import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InviteToPlayForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invitar a jugar</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Fecha del partido
            </label>
            <input
              type="date"
              className="w-full p-2 rounded-md border bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Hora
            </label>
            <input
              type="time"
              className="w-full p-2 rounded-md border bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Cancha
            </label>
            <select className="w-full p-2 rounded-md border bg-background">
              <option value="">Selecciona una cancha</option>
              <option value="1">Cancha Central</option>
              <option value="2">Cancha Norte</option>
              <option value="3">Cancha Sur</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Tipo de partido
            </label>
            <select className="w-full p-2 rounded-md border bg-background">
              <option value="3x3">3x3</option>
              <option value="5x5">5x5</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Nivel de juego
            </label>
            <select className="w-full p-2 rounded-md border bg-background">
              <option value="principiante">Principiante</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Notas adicionales
            </label>
            <textarea
              className="w-full p-2 rounded-md border bg-background"
              rows={3}
              placeholder="Información adicional sobre el partido"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
          >
            Crear partido
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}