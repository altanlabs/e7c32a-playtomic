import { NotificationsPanel } from "@/components/blocks/notifications-panel"
import { useState } from "react"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_NOTIFICATIONS = [
  {
    id: "1",
    type: "newTournament",
    title: "Nuevo torneo en tu zona",
    description: "El Club Deportivo Central ha organizado un nuevo torneo 3x3 para el próximo mes.",
    date: "Hace 5 minutos",
    read: false,
    actionUrl: "/tournaments/1",
    tournament: {
      name: "Torneo Verano 3x3",
      date: "15 de Julio, 2024"
    }
  },
  {
    id: "2",
    type: "teamJoin",
    title: "Nuevo miembro en tu equipo",
    description: "Carlos López se ha unido a tu equipo 'Street Warriors' para el torneo.",
    date: "Hace 1 hora",
    read: false,
    actionUrl: "/tournaments/1"
  },
  {
    id: "3",
    type: "reminder",
    title: "Recordatorio de torneo",
    description: "Tu torneo 'Liga Amateur 3x3' comienza mañana a las 10:00.",
    date: "Hace 2 horas",
    read: true,
    actionUrl: "/tournaments/2",
    tournament: {
      name: "Liga Amateur 3x3",
      date: "Mañana, 10:00"
    }
  },
  {
    id: "4",
    type: "update",
    title: "Cambio en el horario del torneo",
    description: "El horario del torneo 'Torneo Nocturno' ha sido actualizado.",
    date: "Ayer",
    read: true,
    actionUrl: "/tournaments/3"
  },
  {
    id: "5",
    type: "result",
    title: "Resultados disponibles",
    description: "Los resultados de tu último partido están disponibles.",
    date: "Hace 2 días",
    read: true,
    actionUrl: "/tournaments/1"
  }
] as const

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS)

  const handleReadAll = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const handleRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <NotificationsPanel
          notifications={notifications}
          onReadAll={handleReadAll}
          onRead={handleRead}
        />
      </div>
    </div>
  )
}