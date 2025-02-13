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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavigationLinks = () => (
    <>
      {MainNavigation.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className={`text-base font-medium transition-colors hover:text-blue-500 ${
            location.pathname === item.href
              ? "text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#fff6e7]">
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
          <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
            isScrolled ? 'bg-white/80 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'
          }`}>
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                {/* Logo and Desktop Navigation together */}
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <img 
                      src="https://api.altan.ai/platform/media/b7e8d173-6c2b-4669-ae3a-322ee9e7e2d2?account_id=00e70dcf-ba54-4e8c-9d06-dc8372251dae" 
                      alt="Dribla" 
                      className="h-10 w-auto"
                    />
                  </Link>
                  
                  {/* Desktop Navigation - Now directly next to logo */}
                  <nav className="hidden md:flex items-center ml-8 space-x-8">
                    <NavigationLinks />
                  </nav>
                </div>

                {/* Right side elements */}
                <div className="flex items-center space-x-4">
                  {/* Theme Toggle */}
                  {header.showThemeToggle && (
                    <Toggle
                      pressed={theme === "dark"}
                      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="p-2 rounded-full bg-white/50 text-gray-600 hover:text-blue-500 hover:bg-white"
                    >
                      {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                    </Toggle>
                  )}

                  {/* Notifications */}
                  {header.showNotifications && (
                    <Button variant="ghost" size="icon" 
                      className="bg-white/50 rounded-full text-gray-600 hover:text-blue-500 hover:bg-white">
                      <Bell className="h-5 w-5" />
                    </Button>
                  )}

                  {/* User Menu */}
                  {header.showUserMenu && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" 
                          className="h-8 w-8 rounded-full overflow-hidden bg-white/50 p-0 hover:bg-white">
                          <Avatar>
                            <AvatarImage src={header.avatarSrc} alt="User" />
                            <AvatarFallback>{header.avatarFallback}</AvatarFallback>
                          </Avatar>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm border-gray-200">
                        {header.userMenuItems?.map((item, index) => (
                          <DropdownMenuItem key={index} onClick={item.onClick}
                            className="hover:text-blue-500">
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
                      <Button variant="ghost" size="icon" 
                        className="bg-white/50 rounded-full text-gray-600 hover:text-blue-500 hover:bg-white">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-white/95 backdrop-blur-sm border-gray-200">
                      <div className="flex justify-center mb-6">
                        <img 
                          src="https://api.altan.ai/platform/media/b7e8d173-6c2b-4669-ae3a-322ee9e7e2d2?account_id=00e70dcf-ba54-4e8c-9d06-dc8372251dae" 
                          alt="Dribla" 
                          className="h-10 w-auto"
                        />
                      </div>
                      <nav className="flex flex-col space-y-6">
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
          <footer className="border-t border-gray-200 bg-white/50">
            <div className="container flex h-14 items-center justify-between">
              <span className="text-sm text-gray-600">
                {footer.text}
              </span>
              <nav className="flex items-center gap-4">
                {footer.links?.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
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