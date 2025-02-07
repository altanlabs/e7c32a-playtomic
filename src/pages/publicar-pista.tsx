import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  ChevronLeft,
  Upload,
  MapPin,
  Clock,
  Euro,
  Check,
  Users,
  Sun,
  Moon,
  Car,
  Shirt,
  Cloud,
  TreePine,
  Beer,
  Shower,
  Building
} from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PublicarPista() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white">
            <ChevronLeft className="h-5 w-5" />
            <span>Volver</span>
          </Link>
          <Button className="bg-[#FFA726] hover:bg-[#FF9800] text-white">
            Publicar pista
            <Check className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold">Publica tu pista</h1>
            <p className="text-gray-400">
              Completa la información de tu pista para que los jugadores puedan encontrarla
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Información básica */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Información básica</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Nombre de la pista</Label>
                  <Input
                    placeholder="Ej: Pista Municipal Les Corts"
                    className="bg-white/5 border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Dirección</Label>
                  <Input
                    placeholder="Dirección completa"
                    className="bg-white/5 border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Descripción</Label>
                  <Textarea
                    placeholder="Describe tu pista, sus características y cualquier información relevante..."
                    className="bg-white/5 border-white/20 min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Tipo de pista */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Tipo de pista</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label>Ubicación</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/20">
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cubierta">Cubierta</SelectItem>
                      <SelectItem value="aire-libre">Al aire libre</SelectItem>
                      <SelectItem value="semi-cubierta">Semi-cubierta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tipo de suelo</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/20">
                      <SelectValue placeholder="Seleccionar suelo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="parquet">Parquet</SelectItem>
                      <SelectItem value="sintetico">Sintético</SelectItem>
                      <SelectItem value="cemento">Cemento</SelectItem>
                      <SelectItem value="asfalto">Asfalto</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Fotos */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Fotos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                  >
                    <div className="text-center space-y-2">
                      <Upload className="h-8 w-8 mx-auto text-gray-400" />
                      <div className="text-sm text-gray-400">
                        Subir foto {index}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instalaciones */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Instalaciones</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building, label: "Club social" },
                  { icon: Beer, label: "Bar/Cafetería" },
                  { icon: Shower, label: "Duchas" },
                  { icon: Shirt, label: "Vestuarios" },
                  { icon: Car, label: "Parking" },
                  { icon: Cloud, label: "Protección lluvia" }
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <feature.icon className="h-5 w-5 text-gray-400" />
                      <span>{feature.label}</span>
                    </div>
                    <Switch />
                  </div>
                ))}
              </div>
            </div>

            {/* Características de la pista */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Características de la pista</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Moon, label: "Iluminación nocturna" },
                  { icon: Users, label: "Pista 3x3" },
                  { icon: Users, label: "Pista 5x5" },
                  { icon: Sun, label: "Protección solar" }
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <feature.icon className="h-5 w-5 text-gray-400" />
                      <span>{feature.label}</span>
                    </div>
                    <Switch />
                  </div>
                ))}
              </div>
            </div>

            {/* Horarios y precios */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Horarios y precios</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Hora de apertura</Label>
                    <Input
                      type="time"
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Hora de cierre</Label>
                    <Input
                      type="time"
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Precio por hora (€)</Label>
                  <Input
                    type="number"
                    placeholder="Ej: 15"
                    className="bg-white/5 border-white/20"
                  />
                </div>
              </div>
            </div>

            {/* Normas */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Normas y requisitos</h2>
              <div className="space-y-2">
                <Label>Normas de la pista</Label>
                <Textarea
                  placeholder="Describe las normas de uso, requisitos especiales, etc..."
                  className="bg-white/5 border-white/20 min-h-[100px]"
                />
              </div>
            </div>
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <Button
              className="flex-1 bg-[#FFA726] hover:bg-[#FF9800] text-white"
            >
              Publicar pista
              <Check className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-white/5 hover:bg-white/10 border-white/20"
            >
              Guardar borrador
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}