import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bell } from "lucide-react"

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <div className="relative bg-[#0A0F1C] py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/headers/basketball-hoop.jpg"
            alt="Basketball Hoop"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/80 to-[#0A0F1C]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Bell className="h-12 w-12 text-[#FFA726]" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-3">
              Notificaciones
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mb-4">
              Mantente al día con tus actividades
            </p>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-background py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-[340px] mx-auto md:max-w-2xl">
            <Card className="bg-[#0A0F1C] border-border">
              <div className="p-4">
                <div className="space-y-4">
                  {/* Notifications will go here */}
                  <div className="text-center text-muted-foreground">
                    No tienes notificaciones nuevas
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}