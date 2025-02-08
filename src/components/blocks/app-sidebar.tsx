import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
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
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight">
              Menú
            </h2>
            <nav className="space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  to={route.href}
                >
                  <Button
                    variant={location.pathname === route.href ? "secondary" : "ghost"}
                    size="sm"
                    className="w-full justify-start h-7 text-xs"
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
    </div>
  )
}