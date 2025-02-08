import { AppSidebar } from "@/components/blocks/app-sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="relative min-h-screen">
      {/* Mobile sidebar */}
      <div className="sticky top-0 z-50 flex h-12 items-center justify-between border-b bg-background px-4 lg:hidden">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <AppSidebar />
          </SheetContent>
        </Sheet>
        <div className="text-sm font-medium">Altan</div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r">
        <AppSidebar className="px-2" />
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </div>
    </div>
  )
}