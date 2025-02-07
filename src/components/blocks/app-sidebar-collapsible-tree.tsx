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

export function AppSidebar({
  items = [],
  defaultOpen = true,
  companyName = "Dribla",
  logo,
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