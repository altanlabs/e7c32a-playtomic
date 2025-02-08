import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, MapPin, Users, Clock, Search, Euro, Trophy } from "lucide-react"
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data - en una aplicación real vendría de una API
const courts = [
  {
    id: 1,
    name: "Pista 3x3 Les Corts",
    location: "Barcelona",
    type: "3x3",
    price: "15€/h",
    features: ["Iluminación", "Parking"],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "FIBA 3x3 Court Sarrià",
    location: "Barcelona",
    type: "3x3 Pro",
    price: "20€/h",
    features: ["Pro", "Vestuarios"],
    rating: 4.9,
    reviews: 89
  },
  // ... más canchas
]

const registeredPlayers = [
  {
    id: 1,
    name: "Alex García",
    level: "Intermedio",
    avatar: "https://i.pravatar.cc/150?u=alex",
    games: 24,
    rating: 4.5,
    position: "Base",
    availability: ["Tardes", "Fines de semana"]
  },
  {
    id: 2,
    name: "María López",
    level: "Avanzado",
    avatar: "https://i.pravatar.cc/150?u=maria",
    games: 45,
    rating: 4.8,
    position: "Alero",
    availability: ["Mañanas", "Fines de semana"]
  },
  // ... más jugadores
]

interface InviteToPlayFormProps {
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export function InviteToPlayForm({ onSubmit, isLoading = false }: InviteToPlayFormProps) {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date>()
  const [selectedCourt, setSelectedCourt] = useState<any>(null)
  const [selectedPlayers, setSelectedPlayers] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [gameType, setGameType] = useState<"friendly" | "competitive">("friendly")
  const [pricePerPlayer, setPricePerPlayer] = useState("")
  const [maxPlayers, setMaxPlayers] = useState("6")
  const [levelRequired, setLevelRequired] = useState("all")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      court: selectedCourt,
      date,
      players: selectedPlayers,
      gameType,
      pricePerPlayer,
      maxPlayers,
      levelRequired,
      // ... otros datos del formulario
    })
  }

  const handleSelectPlayer = (player: any) => {
    if (!selectedPlayers.find(p => p.id === player.id) && 
        selectedPlayers.length < parseInt(maxPlayers)) {
      setSelectedPlayers([...selectedPlayers, player])
    }
  }

  const handleRemovePlayer = (playerId: number) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== playerId))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <Tabs defaultValue="friendly" onValueChange={(value) => setGameType(value as "friendly" | "competitive")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="friendly">Partido amistoso</TabsTrigger>
                  <TabsTrigger value="competitive">Partido competitivo</TabsTrigger>
                </TabsList>
                <TabsContent value="friendly">
                  <p className="text-sm text-gray-400 mb-4">
                    Organiza un partido informal para divertirte y conocer nuevos jugadores
                  </p>
                </TabsContent>
                <TabsContent value="competitive">
                  <p className="text-sm text-gray-400 mb-4">
                    Organiza un partido competitivo con jugadores de nivel similar
                  </p>
                </TabsContent>
              </Tabs>

              <div className="space-y-2">
                <Label>Seleccionar cancha</Label>
                <Select onValueChange={(value) => {
                  const court = courts.find(c => c.id.toString() === value)
                  setSelectedCourt(court)
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Elige una cancha" />
                  </SelectTrigger>
                  <SelectContent>
                    {courts.map((court) => (
                      <SelectItem key={court.id} value={court.id.toString()}>
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <span className="font-medium">{court.name}</span>
                            <div className="text-sm text-gray-400">{court.location}</div>
                          </div>
                          <Badge variant="secondary">{court.price}</Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedCourt && (
                <div className="bg-white/5 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#FFA726]" />
                      <span>{selectedCourt.location}</span>
                    </div>
                    <Badge variant="secondary" className="bg-[#FFA726]">
                      {selectedCourt.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-[#FFA726]" />
                      <span>{selectedCourt.rating} ({selectedCourt.reviews} reseñas)</span>
                    </div>
                    <div className="flex gap-2">
                      {selectedCourt.features.map((feature: string) => (
                        <Badge key={feature} variant="outline">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Número máximo de jugadores</Label>
                  <Select value={maxPlayers} onValueChange={setMaxPlayers}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 jugadores</SelectItem>
                      <SelectItem value="6">6 jugadores</SelectItem>
                      <SelectItem value="8">8 jugadores</SelectItem>
                      <SelectItem value="10">10 jugadores</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Precio por jugador</Label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="0"
                      value={pricePerPlayer}
                      onChange={(e) => setPricePerPlayer(e.target.value)}
                      className="pl-8"
                    />
                    <Euro className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Nivel requerido</Label>
                <Select value={levelRequired} onValueChange={setLevelRequired}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los niveles</SelectItem>
                    <SelectItem value="beginner">Principiante</SelectItem>
                    <SelectItem value="intermediate">Intermedio</SelectItem>
                    <SelectItem value="advanced">Avanzado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Fecha y hora</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: es }) : "Seleccionar fecha"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Hora" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 14 }, (_, i) => i + 8).map((hour) => (
                        <SelectItem key={hour} value={hour.toString()}>
                          {`${hour}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button 
              type="button" 
              className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
              onClick={() => setStep(2)}
              disabled={!selectedCourt || !date}
            >
              Siguiente
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Buscar jugadores</Label>
                <Command className="rounded-lg border">
                  <CommandInput 
                    placeholder="Buscar por nombre..."
                    value={searchTerm}
                    onValueChange={setSearchTerm}
                  />
                  <CommandEmpty>No se encontraron jugadores.</CommandEmpty>
                  <CommandGroup>
                    {registeredPlayers
                      .filter(player => 
                        player.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                        !selectedPlayers.find(p => p.id === player.id)
                      )
                      .map((player) => (
                        <CommandItem
                          key={player.id}
                          onSelect={() => handleSelectPlayer(player)}
                          className="flex items-center gap-2 p-2"
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={player.avatar} alt={player.name} />
                            <AvatarFallback>{player.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-medium">{player.name}</span>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <span>{player.level}</span>
                              <span>•</span>
                              <span>{player.position}</span>
                            </div>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <Badge variant="secondary">{player.rating} ★</Badge>
                            <Badge variant="outline">{player.games} partidos</Badge>
                          </div>
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </Command>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Jugadores seleccionados</Label>
                  <span className="text-sm text-gray-400">
                    {selectedPlayers.length}/{maxPlayers} jugadores
                  </span>
                </div>
                <div className="space-y-2">
                  {selectedPlayers.map((player) => (
                    <div
                      key={player.id}
                      className="flex items-center justify-between p-2 bg-white/5 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={player.avatar} alt={player.name} />
                          <AvatarFallback>{player.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-medium">{player.name}</span>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>{player.level}</span>
                            <span>•</span>
                            <span>{player.position}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{player.rating} ★</Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemovePlayer(player.id)}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Mensaje para los jugadores (opcional)</Label>
                <Textarea 
                  placeholder="Escribe un mensaje para los jugadores invitados..."
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline"
                className="flex-1"
                onClick={() => setStep(1)}
              >
                Atrás
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-[#FFA726] hover:bg-[#FF9800]"
                disabled={isLoading || selectedPlayers.length === 0}
              >
                {isLoading ? "Enviando invitaciones..." : "Enviar invitaciones"}
              </Button>
            </div>
          </motion.div>
        )}
      </form>

      {/* Progress indicator */}
      <div className="flex justify-center gap-2">
        {[1, 2].map((i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === step ? "bg-[#FFA726]" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}