import { Outlet, Link, useLocation } from "react-router-dom";
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
import { useTheme } from "@/theme/use-theme";
import { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MainNavigation = [
  { label: "Jugadores", href: "/players" },
  { label: "Canchas", href: "/courts" },
  { label: "Torneos", href: "/tournaments" },
  { label: "Rankings", href: "/rankings" },
];

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const initialThemeSet = useRef(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (initialThemeSet.current) return;
    
    const queryParams = new URLSearchParams(location.search);
    const themeParam = queryParams.get('theme');
    if (themeParam === 'light' || themeParam === 'dark') {
      setTheme(themeParam);
      queryParams.delete('theme');
      const newSearch = queryParams.toString();
      const newUrl = `${location.pathname}${newSearch ? `?${newSearch}` : ''}${location.hash}`;
      window.history.replaceState({}, '', newUrl);
      initialThemeSet.current = true;
    }
  }, [location.hash, location.pathname, location.search, setTheme]);

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
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#0A0F1C]">
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
              <Toggle
                pressed={theme === "dark"}
                onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="px-2 py-2 rounded-md text-gray-400 hover:text-white"
              >
                {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </Toggle>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Bell className="h-5 w-5" />
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 rounded-full">
                    <Avatar>
                      <AvatarImage src="" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Ajustes
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container flex h-14 items-center justify-between">
          <span className="text-sm text-muted-foreground">
            © 2024 Dribla. Todos los derechos reservados.
          </span>
          <nav className="flex items-center gap-4">
            <Link to="/rules" className="text-sm text-muted-foreground hover:text-foreground">
              Reglas 3x3
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Términos
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contacto
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}