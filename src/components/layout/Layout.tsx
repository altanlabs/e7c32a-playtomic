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
      {/* Mobile header */}
      <header className="sticky top-0 z-50 flex h-10 items-center justify-between border-b bg-background px-3 lg:hidden">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] max-w-[250px] p-0">
            <AppSidebar />
          </SheetContent>
        </Sheet>
        <div className="text-xs font-medium">Altan</div>
      </header>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r">
        <AppSidebar className="px-2" />
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <main className="min-h-[calc(100vh-2.5rem)] bg-background">
          {children}
        </main>
      </div>
    </div>
  )
}