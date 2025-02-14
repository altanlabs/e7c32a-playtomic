import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Trophy, Users, MapPin, Home } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AppSidebar({ className }: SidebarProps) {
  const location = useLocation()

  const routes = [
    {
      label: "Jugadores",
      icon: Users,
      href: "/players",
    },
    {
      label: "Canchas",
      icon: MapPin,
      href: "/courts",
    },
    {
      label: "Torneos",
      icon: Trophy,
      href: "/tournaments",
    },
    {
      label: "Rankings",
      icon: Trophy,
      href: "/rankings",
    },
  ]

  return (
    <div className={cn("pb-6 min-h-screen bg-white border-r", className)}>
      {/* Logo section */}
      <div className="px-6 py-5 border-b">
        <Link to="/">
          <img
            src="/dribla-logo.png"
            alt="Dribla"
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="px-4 py-6">
        <nav className="space-y-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              to={route.href}
            >
              <Button
                variant={location.pathname === route.href ? "secondary" : "ghost"}
                size="lg"
                className={cn(
                  "w-full justify-start font-medium",
                  "text-sm h-11",
                  location.pathname === route.href
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <route.icon className="mr-3 h-5 w-5" />
                {route.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}