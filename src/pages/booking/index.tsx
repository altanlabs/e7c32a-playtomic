import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function BookingPage() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00", "19:00", "20:00"
  ];

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      navigate('/booking/payment');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Reserva tu pista</h1>

        <div className="bg-card rounded-lg border p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Selecciona fecha y hora</h2>
          
          {/* Selector de fecha simple */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Fecha</label>
            <input
              type="date"
              className="w-full p-2 rounded-md border bg-background"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Selector de hora */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Hora</label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className={selectedTime === time ? "bg-[#FFA726] hover:bg-[#FF9800]" : ""}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Resumen */}
        <div className="bg-card rounded-lg border p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Resumen de la reserva</h2>
          <div className="space-y-2 mb-4">
            <p>Fecha: {selectedDate || "-"}</p>
            <p>Hora: {selectedTime || "-"}</p>
            <p>Precio: 30€</p>
          </div>
        </div>

        <Button
          className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
          disabled={!selectedDate || !selectedTime}
          onClick={handleContinue}
        >
          Continuar al pago
        </Button>
      </div>
    </div>
  )
}