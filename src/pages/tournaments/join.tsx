import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function JoinTournamentPage() {
  const [selectedTab, setSelectedTab] = useState("team")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Apúntate al torneo</h1>
        
        <Tabs defaultValue="team" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="team">Apuntarme como equipo</TabsTrigger>
            <TabsTrigger value="player">Apuntarme como jugador</TabsTrigger>
          </TabsList>

          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle>Registro de equipo</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Información del equipo */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nombre del equipo
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 rounded-md border bg-background"
                        placeholder="Nombre de tu equipo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 rounded-md border bg-background"
                        placeholder="Ciudad del equipo"
                      />
                    </div>

                    {/* Jugadores del equipo */}
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="font-medium">Jugadores (mínimo 3, máximo 4)</h3>
                      
                      {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Jugador {num} - Nombre
                            </label>
                            <input
                              type="text"
                              className="w-full p-2 rounded-md border bg-background"
                              placeholder="Nombre completo"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              DNI
                            </label>
                            <input
                              type="text"
                              className="w-full p-2 rounded-md border bg-background"
                              placeholder="DNI/NIE"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="font-medium">Información de contacto</h3>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full p-2 rounded-md border bg-background"
                          placeholder="Email de contacto"
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
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                  >
                    Inscribir equipo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="player">
            <Card>
              <CardHeader>
                <CardTitle>Registro individual</CardTitle>
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

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        DNI/NIE
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 rounded-md border bg-background"
                        placeholder="DNI/NIE"
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
                    </div>

                    {/* Experiencia */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Experiencia
                      </label>
                      <select className="w-full p-2 rounded-md border bg-background">
                        <option value="">Selecciona tu nivel</option>
                        <option value="principiante">Principiante</option>
                        <option value="intermedio">Intermedio</option>
                        <option value="avanzado">Avanzado</option>
                        <option value="profesional">Profesional</option>
                      </select>
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="font-medium">Información de contacto</h3>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full p-2 rounded-md border bg-background"
                          placeholder="Email de contacto"
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
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                  >
                    Inscribirme como jugador
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}