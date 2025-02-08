import { Outlet, Link, useLocation } from "react-router-dom";
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
import { useTheme } from "@/theme/use-theme";
import { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const DefaultNavigation = [
  { label: "Inicio", href: "/" },
  { label: "Invitar a jugar", href: "/invite-to-play" },
  { label: "Unirse a partido", href: "/join-game" },
  { label: "Rankings", href: "/rankings" },
  { label: "Torneos", href: "/tournaments" },
];

const DefaultHeader = {
  title: "Dribla",
  navigation: DefaultNavigation,
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
}) {
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
      {header.navigation?.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            location.pathname === item.href
              ? "text-primary"
              : "text-muted-foreground"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
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
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
              {/* Mobile Menu Button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                  <nav className="flex flex-col gap-4 mt-6">
                    <NavigationLinks />
                  </nav>
                </SheetContent>
              </Sheet>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6 flex-1">
                <NavigationLinks />
              </nav>

              <div className="flex items-center gap-2">
                {/* Theme Toggle */}
                {header.showThemeToggle && (
                  <Toggle
                    pressed={theme === "dark"}
                    onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className={`px-2 py-2 rounded-md flex items-center gap-2 transition-colors
                      ${
                        theme === "dark"
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                  </Toggle>
                )}

                {/* Notifications */}
                {header.showNotifications && (
                  <Button variant="ghost" size="icon" className="relative">
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
              </div>
            </div>
          </header>
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto bg-background">
          <Outlet />
        </main>

        {/* Footer */}
        {footer && showFooter && (
          <footer className="border-t border-border">
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