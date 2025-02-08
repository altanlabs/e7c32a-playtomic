import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Mail, Share2, Plus, X } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Mock data - en una aplicación real vendría de una API
const registeredPlayers = [
  {
    id: 1,
    name: "Alex García",
    email: "alex@example.com",
    level: "Intermedio",
    avatar: "https://i.pravatar.cc/150?u=alex",
    games: 24
  },
  {
    id: 2,
    name: "María López",
    email: "maria@example.com",
    level: "Avanzado",
    avatar: "https://i.pravatar.cc/150?u=maria",
    games: 45
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    email: "carlos@example.com",
    level: "Principiante",
    avatar: "https://i.pravatar.cc/150?u=carlos",
    games: 12
  },
  // ... más jugadores
]

interface InvitePlayersFormProps {
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export function InvitePlayersForm({ onSubmit, isLoading = false }: InvitePlayersFormProps) {
  const [selectedPlayers, setSelectedPlayers] = useState<any[]>([])
  const [emailInvites, setEmailInvites] = useState<string[]>([])
  const [currentEmail, setCurrentEmail] = useState("")
  const [open, setOpen] = useState(false)

  const handleAddEmail = () => {
    if (currentEmail && !emailInvites.includes(currentEmail)) {
      setEmailInvites([...emailInvites, currentEmail])
      setCurrentEmail("")
    }
  }

  const handleRemoveEmail = (email: string) => {
    setEmailInvites(emailInvites.filter(e => e !== email))
  }

  const handleSelectPlayer = (player: any) => {
    if (!selectedPlayers.find(p => p.id === player.id)) {
      setSelectedPlayers([...selectedPlayers, player])
    }
    setOpen(false)
  }

  const handleRemovePlayer = (playerId: number) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== playerId))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      selectedPlayers,
      emailInvites
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="registered" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="registered">Jugadores registrados</TabsTrigger>
          <TabsTrigger value="invite">Invitar por email</TabsTrigger>
        </TabsList>

        <TabsContent value="registered" className="space-y-4">
          <div className="space-y-4">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Buscar jugadores...
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Buscar jugador..." />
                  <CommandEmpty>No se encontraron jugadores.</CommandEmpty>
                  <CommandGroup>
                    {registeredPlayers.map((player) => (
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
                          <span className="text-sm text-gray-500">{player.level}</span>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            {/* Selected Players */}
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
                      <span className="text-sm text-gray-400">{player.level}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemovePlayer(player.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="invite" className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Introduce un email..."
              value={currentEmail}
              onChange={(e) => setCurrentEmail(e.target.value)}
            />
            <Button
              type="button"
              variant="outline"
              onClick={handleAddEmail}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Email List */}
          <div className="space-y-2">
            {emailInvites.map((email) => (
              <div
                key={email}
                className="flex items-center justify-between p-2 bg-white/5 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#FFA726]" />
                  <span>{email}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveEmail(email)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Social Share */}
          <div className="pt-4">
            <Label className="mb-2 block">O comparte por redes sociales</Label>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Twitter
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Instagram
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Button
        type="submit"
        className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
        disabled={isLoading || (selectedPlayers.length === 0 && emailInvites.length === 0)}
      >
        {isLoading ? "Enviando invitaciones..." : "Enviar invitaciones"}
      </Button>
    </form>
  )
}