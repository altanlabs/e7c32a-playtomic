import { Link } from "react-router-dom"
import { CircleDot, Trophy, Users, CalendarDays, UserCircle, Home, Search } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface SidebarItem {
  label: string
  href: string
  icon?: React.ReactNode
  items?: SidebarItem[]
}

interface AppSidebarProps {
  items?: SidebarItem[]
  defaultOpen?: boolean
  companyName?: string
  logo?: React.ReactNode
  footerComponent?: React.ReactNode
  className?: string
}

const defaultItems = [
  {
    label: "Inicio",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    label: "Explorar",
    href: "/explore",
    icon: <Search className="h-4 w-4" />,
  },
  {
    label: "Canchas",
    href: "/courts",
    icon: <CalendarDays className="h-4 w-4" />,
  },
  {
    label: "Rankings",
    href: "/rankings",
    icon: <Trophy className="h-4 w-4" />,
  },
  {
    label: "Equipos",
    href: "/teams",
    icon: <Users className="h-4 w-4" />,
  },
  {
    label: "Perfil",
    href: "/profile",
    icon: <UserCircle className="h-4 w-4" />,
  }
]

export function AppSidebar({
  items = defaultItems,
  defaultOpen = true,
  companyName = "Dribla",
  logo = <CircleDot className="h-6 w-6" />,
  footerComponent,
  className,
}: AppSidebarProps) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar className={className}>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            {logo}
            <span className="font-semibold">{companyName}</span>
          </div>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {items.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild>
                  <Link to={item.href} className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        {footerComponent && <SidebarFooter>{footerComponent}</SidebarFooter>}
      </Sidebar>
    </SidebarProvider>
  )
}