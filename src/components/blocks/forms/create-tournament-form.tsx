import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CreateTournamentForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crear torneo</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Nombre del torneo
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-md border bg-background"
              placeholder="Nombre del torneo"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Fecha de inicio
              </label>
              <input
                type="date"
                className="w-full p-2 rounded-md border bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Fecha de fin
              </label>
              <input
                type="date"
                className="w-full p-2 rounded-md border bg-background"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Ubicación
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-md border bg-background"
              placeholder="Dirección del torneo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Número de equipos
            </label>
            <input
              type="number"
              className="w-full p-2 rounded-md border bg-background"
              min="4"
              placeholder="Número máximo de equipos"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Precio de inscripción
            </label>
            <input
              type="number"
              className="w-full p-2 rounded-md border bg-background"
              placeholder="Precio en euros"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Descripción
            </label>
            <textarea
              className="w-full p-2 rounded-md border bg-background"
              rows={4}
              placeholder="Describe el torneo, reglas, premios, etc."
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
          >
            Crear torneo
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}