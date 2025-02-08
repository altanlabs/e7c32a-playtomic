import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Calendar, Home } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AppSidebar({ className }: SidebarProps) {
  const location = useLocation()

  const routes = [
    {
      label: "Inicio",
      icon: Home,
      href: "/",
    },
    {
      label: "Torneos",
      icon: Calendar,
      href: "/tournaments",
    },
    {
      label: "Equipos",
      icon: Users,
      href: "/teams",
    },
    {
      label: "Rankings",
      icon: Trophy,
      href: "/rankings",
    },
  ]

  return (
    <div className={cn("pb-6", className)}>
      <div className="space-y-2 py-2">
        <div className="px-2">
          <nav className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                to={route.href}
              >
                <Button
                  variant={location.pathname === route.href ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start h-8 text-xs"
                >
                  <route.icon className="mr-2 h-3 w-3" />
                  {route.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}