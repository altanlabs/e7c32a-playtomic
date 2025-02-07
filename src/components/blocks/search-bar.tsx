import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Calendar } from "lucide-react"
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { useState } from "react"
import { format } from "date-fns"

export function SearchBar() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex-1 relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input 
          placeholder="¿Dónde quieres jugar?" 
          className="pl-10"
        />
      </div>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full md:w-auto">
            <Calendar className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : "Seleccionar fecha"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Button className="w-full md:w-auto">
        <Search className="mr-2 h-4 w-4" />
        Buscar
      </Button>
    </div>
  )
}