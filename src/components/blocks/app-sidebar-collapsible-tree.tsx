import { Link } from "react-router-dom"
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
import { Basketball } from "lucide-react"

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
    icon: <Basketball className="h-4 w-4" />,
  },
  {
    label: "Canchas",
    href: "/courts",
    icon: <Basketball className="h-4 w-4" />,
  },
  {
    label: "Rankings",
    href: "/rankings",
    icon: <Basketball className="h-4 w-4" />,
  },
  {
    label: "Torneos",
    href: "/tournaments",
    icon: <Basketball className="h-4 w-4" />,
  },
  {
    label: "Perfil",
    href: "/profile",
    icon: <Basketball className="h-4 w-4" />,
  }
]

export function AppSidebar({
  items = defaultItems,
  defaultOpen = true,
  companyName = "Dribla",
  logo = <Basketball className="h-6 w-6" />,
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
                  <Link to={item.href}>
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