import { Link, useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/blocks/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Settings, LogOut, Menu } from "lucide-react";
import { Toggle } from "@radix-ui/react-toggle";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/theme/theme-provider";
import { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MainNavigation = [
  { label: "Jugadores", href: "/players" },
  { label: "Canchas", href: "/aros" },
  { label: "Torneos", href: "/tournaments" },
  { label: "Rankings", href: "/rankings" },
];

const DefaultHeader = {
  title: "Dribla",
  showNotifications: true,
  showUserMenu: true,
  showThemeToggle: true,
  userMenuItems: [
    { icon: <Settings className="mr-2 h-4 w-4" />, label: "Ajustes" },
    { icon: <LogOut className="mr-2 h-4 w-4" />, label: "Cerrar sesión" },
  ],
  avatarFallback: "JD",
};

const DefaultFooter = {
  text: "© 2024 Dribla. Todos los derechos reservados.",
  links: [
    { label: "Reglas 3x3", href: "/rules" },
    { label: "Términos", href: "/terms" },
    { label: "Contacto", href: "/contact" },
  ],
};

export default function Layout({
  showSidebar = false,
  showHeader = true,
  showFooter = true,
  sidebarConfig,
  header = DefaultHeader,
  footer = DefaultFooter,
  children
}) {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavigationLinks = () => (
    <>
      {MainNavigation.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className={`text-lg transition-colors hover:text-white ${
            location.pathname === item.href
              ? "text-white font-medium"
              : "text-gray-400"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      {/* Optional Sidebar */}
      {showSidebar && sidebarConfig && (
        <AppSidebar 
          className="h-full border-r border-border hidden lg:block" 
          {...sidebarConfig}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Configurable Header */}
        {header && showHeader && (
          <header className="sticky top-0 z-50 w-full bg-[#0A0F1C] border-b border-border">
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                {/* Logo and Desktop Navigation */}
                <div className="flex items-center space-x-12">
                  <Link to="/" className="text-white text-2xl font-bold">
                    Dribla
                  </Link>
                  
                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex items-center space-x-8">
                    <NavigationLinks />
                  </nav>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Theme Toggle */}
                  {header.showThemeToggle && (
                    <Toggle
                      pressed={theme === "dark"}
                      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="px-2 py-2 rounded-md text-gray-400 hover:text-white"
                    >
                      {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                    </Toggle>
                  )}

                  {/* Notifications */}
                  {header.showNotifications && (
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <Bell className="h-5 w-5" />
                    </Button>
                  )}

                  {/* User Menu */}
                  {header.showUserMenu && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 rounded-full">
                          <Avatar>
                            <AvatarImage src={header.avatarSrc} alt="User" />
                            <AvatarFallback>{header.avatarFallback}</AvatarFallback>
                          </Avatar>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {header.userMenuItems?.map((item, index) => (
                          <DropdownMenuItem key={index} onClick={item.onClick}>
                            {item.icon}
                            {item.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}

                  {/* Mobile Menu Button */}
                  <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                    <SheetTrigger asChild className="md:hidden">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[240px] bg-[#0A0F1C]">
                      <nav className="flex flex-col space-y-6 mt-6">
                        <NavigationLinks />
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </header>
        )}

        {/* Main Content Area */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        {footer && showFooter && (
          <footer className="border-t border-border bg-[#0A0F1C]">
            <div className="container flex h-14 items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {footer.text}
              </span>
              <nav className="flex items-center gap-4">
                {footer.links?.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}