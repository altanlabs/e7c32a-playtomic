import { Search, MapPin } from "lucide-react"
import { Input } from "./input"
import { Button } from "./button"

export function SearchBar() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="relative backdrop-blur-lg rounded-xl shadow-lg">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Buscar pistas cerca de ti..."
              className="w-full py-6 pl-12 pr-4 bg-black/70 border-white/20 rounded-xl text-white"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <Button 
            className="bg-[#FFA726] hover:bg-[#FF9800] text-white px-6"
          >
            <MapPin className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}