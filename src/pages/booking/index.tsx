export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Reserva tu pista</h1>
        
        {/* Contenedor principal */}
        <div className="grid gap-6">
          {/* Selector de fecha */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Selecciona la fecha</h2>
            <input
              type="date"
              className="w-full p-3 border rounded-md bg-transparent"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Selector de hora */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Selecciona la hora</h2>
            <div className="grid grid-cols-4 gap-3">
              {[
                "09:00", "10:00", "11:00", "12:00",
                "13:00", "14:00", "15:00", "16:00",
                "17:00", "18:00", "19:00", "20:00"
              ].map((time) => (
                <button
                  key={time}
                  className="p-3 border rounded-md hover:bg-orange-100 dark:hover:bg-orange-900 transition-colors"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Resumen */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Resumen de la reserva</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Fecha:</span>
                <span>-</span>
              </div>
              <div className="flex justify-between">
                <span>Hora:</span>
                <span>-</span>
              </div>
              <div className="flex justify-between">
                <span>Precio:</span>
                <span>30€</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>30€</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de continuar */}
          <button
            className="w-full bg-[#FFA726] hover:bg-[#FF9800] text-white py-3 rounded-md font-medium transition-colors"
          >
            Continuar al pago
          </button>
        </div>
      </div>
    </div>
  )
}