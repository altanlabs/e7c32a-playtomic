import { useState } from "react"
import { motion } from "framer-motion"
import { CourtCard } from "@/components/blocks/court-card"
import { AuthDialog } from "@/components/blocks/auth-dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Filter } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Example courts data - in a real app, this would come from an API
const courts = [
  {
    id: 1,
    name: "Pista 3x3 Les Corts",
    location: "Barcelona",
    rating: 4.8,
    reviews: 124,
    price: "15€/h",
    type: "3x3",
    currentPlayers: 4,
    maxPlayers: 6,
    openUntil: "23:00",
    features: ["Iluminación", "Parking"]
  },
  {
    id: 2,
    name: "FIBA 3x3 Court Sarrià",
    location: "Barcelona",
    rating: 4.9,
    reviews: 89,
    price: "20€/h",
    type: "3x3 Pro",
    currentPlayers: 2,
    maxPlayers: 6,
    openUntil: "24h",
    features: ["Pro", "Vestuarios"]
  },
  {
    id: 3,
    name: "Street Basketball Vall d'Hebron",
    location: "Barcelona",
    rating: 4.7,
    reviews: 156,
    price: "12€/h",
    type: "3x3",
    currentPlayers: 3,
    maxPlayers: 6,
    openUntil: "22:00",
    features: ["Street", "Libre"]
  },
  {
    id: 4,
    name: "FIBA 3x3 Circuit Barcelona",
    location: "Barcelona",
    rating: 4.9,
    reviews: 201,
    price: "25€/h",
    type: "3x3 Pro",
    currentPlayers: 0,
    maxPlayers: 6,
    openUntil: "23:00",
    features: ["Pro", "Torneos"]
  },
  {
    id: 5,
    name: "Urban 3x3 Poblenou",
    location: "Barcelona",
    rating: 4.6,
    reviews: 78,
    price: "10€/h",
    type: "3x3",
    currentPlayers: 6,
    maxPlayers: 6,
    openUntil: "21:00",
    features: ["Street", "Libre"]
  },
  {
    id: 6,
    name: "Pro Court Sant Martí",
    location: "Barcelona",
    rating: 4.8,
    reviews: 167,
    price: "18€/h",
    type: "3x3 Pro",
    currentPlayers: 4,
    maxPlayers: 6,
    openUntil: "22:30",
    features: ["Pro", "Iluminación"]
  }
]

export default function CourtsPage() {
  const [showAuthDialog, setShowAuthDialog] = useState(false)
  const [authType, setAuthType] = useState<"player" | "club">("player")

  const handleCourtClick = (isClubAction: boolean = false) => {
    setAuthType(isClubAction ? "club" : "player")
    setShowAuthDialog(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Hero Section */}
        <div className="relative h-[300px] rounded-2xl overflow-hidden">
          <img src="https://api.altan.ai/platform/media/69cc2738-5a95-46c7-9c5e-46f11d6fc5af?account_id=00e70dcf-ba54-4e8c-9d06-dc8372251dae"
            alt="3x3 Basketball Courts"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Encuentra tu pista 3x3
              </h1>
              <p className="text-xl text-gray-300">
                Las mejores pistas de baloncesto 3x3 cerca de ti
              </p>
              <Button 
                className="bg-[#FFA726] hover:bg-[#FF9800] text-white px-8 py-6 rounded-xl mt-4"
                onClick={() => handleCourtClick(true)}
              >
                ¿Eres un club? Publica tu pista
              </Button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative col-span-2">
            <Input
              placeholder="Buscar por ubicación..."
              className="pl-10 py-6 bg-white/5 border-white/20"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="bg-white/5 border-white/20">
                <SelectValue placeholder="Tipo de pista" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="3x3">3x3</SelectItem>
                <SelectItem value="3x3-pro">3x3 Pro</SelectItem>
                <SelectItem value="street">Street</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-white/5 border-white/20">
              <Filter className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Courts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courts.map((court, index) => (
            <div key={court.id} onClick={() => handleCourtClick()}>
              <CourtCard {...court} index={index} />
            </div>
          ))}
        </div>

        {/* Auth Dialog */}
        <AuthDialog
          isOpen={showAuthDialog}
          onClose={() => setShowAuthDialog(false)}
          defaultTab={authType}
          defaultView="login"
        />
      </motion.div>
    </div>
  )
}