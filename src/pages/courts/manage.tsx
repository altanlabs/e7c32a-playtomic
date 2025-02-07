import { motion } from "framer-motion"
import { BookingCalendar } from "@/components/blocks/booking-calendar"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Users, Clock, Image as ImageIcon } from "lucide-react"

export default function ManageCourtPage() {
  const handleSlotUpdate = (date: Date, slot: any) => {
    console.log("Slot updated:", { date, slot })
    // Aquí iría la lógica para actualizar la disponibilidad en la base de datos
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Gestionar Pista</h1>
          <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
            Guardar cambios
          </Button>
        </div>

        <Tabs defaultValue="availability" className="space-y-8">
          <TabsList className="bg-white/5">
            <TabsTrigger value="availability">Disponibilidad</TabsTrigger>
            <TabsTrigger value="details">Detalles de la pista</TabsTrigger>
            <TabsTrigger value="rules">Reglas y requisitos</TabsTrigger>
          </TabsList>

          <TabsContent value="availability" className="space-y-8">
            <Card className="p-6 bg-white/5 border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Configurar disponibilidad</h2>
              <BookingCalendar mode="club" onSlotUpdate={handleSlotUpdate} />
            </Card>
          </TabsContent>

          <TabsContent value="details" className="space-y-6">
            <Card className="p-6 bg-white/5 border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Nombre de la pista</Label>
                    <Input
                      placeholder="Ej: Pista Central Les Corts"
                      className="bg-white/5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Ubicación</Label>
                    <Input
                      placeholder="Dirección completa"
                      className="bg-white/5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Tipo de pista</Label>
                    <Select>
                      <SelectTrigger className="bg-white/5">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indoor">Indoor</SelectItem>
                        <SelectItem value="outdoor">Outdoor</SelectItem>
                        <SelectItem value="3x3">3x3</SelectItem>
                        <SelectItem value="5x5">5x5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Capacidad máxima</Label>
                    <Input
                      type="number"
                      placeholder="Número de jugadores"
                      className="bg-white/5"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Imágenes de la pista</Label>
                    <Card className="p-8 border-dashed border-2 border-white/20 bg-white/5 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-white/10 transition-colors">
                      <ImageIcon className="h-8 w-8 text-gray-400" />
                      <p className="text-sm text-gray-400">
                        Arrastra imágenes aquí o haz clic para seleccionar
                      </p>
                    </Card>
                  </div>

                  <div className="space-y-2">
                    <Label>Servicios disponibles</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Iluminación",
                        "Vestuarios",
                        "Duchas",
                        "Parking",
                        "Cafetería",
                        "Material deportivo"
                      ].map((service) => (
                        <Button
                          key={service}
                          variant="outline"
                          className="justify-start bg-white/5 hover:bg-white/10 border-white/20"
                        >
                          {service}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="space-y-6">
            <Card className="p-6 bg-white/5 border-white/10">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Tiempo mínimo de reserva</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5">
                      <SelectValue placeholder="Seleccionar duración" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutos</SelectItem>
                      <SelectItem value="60">1 hora</SelectItem>
                      <SelectItem value="90">1 hora y media</SelectItem>
                      <SelectItem value="120">2 horas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Política de cancelación</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5">
                      <SelectValue placeholder="Seleccionar política" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flexible">Flexible (24h)</SelectItem>
                      <SelectItem value="moderate">Moderada (48h)</SelectItem>
                      <SelectItem value="strict">Estricta (72h)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Requisitos especiales</Label>
                  <Input
                    placeholder="Ej: Calzado deportivo obligatorio"
                    className="bg-white/5"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Normas adicionales</Label>
                  <Input
                    placeholder="Ej: No se permite comida en la pista"
                    className="bg-white/5"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}