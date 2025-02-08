import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function JoinAsPlayerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Unirse como jugador</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Información del jugador</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Información personal */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Fecha de nacimiento
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full p-2 rounded-md border bg-background"
                      placeholder="Teléfono de contacto"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Información de juego */}
              <div className="space-y-4 pt-6 border-t">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Altura (cm)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 rounded-md border bg-background"
                      placeholder="Altura en centímetros"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Peso (kg)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 rounded-md border bg-background"
                      placeholder="Peso en kilogramos"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Posición preferida
                  </label>
                  <select className="w-full p-2 rounded-md border bg-background">
                    <option value="">Selecciona una posición</option>
                    <option value="base">Base</option>
                    <option value="escolta">Escolta</option>
                    <option value="alero">Alero</option>
                    <option value="ala-pivot">Ala-Pívot</option>
                    <option value="pivot">Pívot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nivel de juego
                  </label>
                  <select className="w-full p-2 rounded-md border bg-background">
                    <option value="">Selecciona tu nivel</option>
                    <option value="principiante">Principiante</option>
                    <option value="intermedio">Intermedio</option>
                    <option value="avanzado">Avanzado</option>
                    <option value="profesional">Profesional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Experiencia
                  </label>
                  <textarea
                    className="w-full p-2 rounded-md border bg-background"
                    rows={4}
                    placeholder="Cuéntanos tu experiencia en baloncesto"
                  />
                </div>
              </div>

              {/* Disponibilidad */}
              <div className="space-y-4 pt-6 border-t">
                <h3 className="font-medium">Disponibilidad</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Días preferidos
                    </label>
                    <select className="w-full p-2 rounded-md border bg-background" multiple>
                      <option value="lunes">Lunes</option>
                      <option value="martes">Martes</option>
                      <option value="miercoles">Miércoles</option>
                      <option value="jueves">Jueves</option>
                      <option value="viernes">Viernes</option>
                      <option value="sabado">Sábado</option>
                      <option value="domingo">Domingo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Horario preferido
                    </label>
                    <select className="w-full p-2 rounded-md border bg-background" multiple>
                      <option value="manana">Mañana (8:00 - 12:00)</option>
                      <option value="mediodia">Mediodía (12:00 - 16:00)</option>
                      <option value="tarde">Tarde (16:00 - 20:00)</option>
                      <option value="noche">Noche (20:00 - 23:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <Button 
                  type="submit"
                  className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                >
                  Registrarse como jugador
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}