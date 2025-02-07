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
import { Bell, Settings, LogOut } from "lucide-react";
import { Toggle } from "@radix-ui/react-toggle";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/theme/use-theme";
import { useEffect, useRef } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderAction {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

interface HeaderProps {
  title?: string;
  navigation?: NavItem[];
  actions?: HeaderAction[];
  showNotifications?: boolean;
  showUserMenu?: boolean;
  showThemeToggle?: boolean;
  userMenuItems?: HeaderAction[];
  avatarSrc?: string;
  avatarFallback?: string;
}

interface FooterProps {
  text?: string;
  links?: Array<{ label: string; href: string }>;
}

interface SidebarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  items?: SidebarItem[];
}

interface SidebarProps {
  items: SidebarItem[];
  defaultOpen?: boolean;
  companyName?: string;
  logo?: React.ReactNode;
  footerComponent?: React.ReactNode;
}

interface LayoutProps {
  showSidebar?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  sidebarConfig?: SidebarProps;
  header?: HeaderProps | false;
  footer?: FooterProps | false;
}

const DefaultNavigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Canchas", href: "/courts" },
  { label: "Rankings", href: "/rankings" },
  { label: "Torneos", href: "/tournaments" },
];

const DefaultHeader: HeaderProps = {
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

const DefaultFooter: FooterProps = {
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
}: LayoutProps) {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const initialThemeSet = useRef(false);

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

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Optional Sidebar */}
      {showSidebar && sidebarConfig && (
        <AppSidebar 
          className="h-full border-r border-border" 
          {...sidebarConfig}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Configurable Header */}
        {header && showHeader && (
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              <div className="flex items-center gap-8 flex-1">
                {header.title && (
                  <Link to="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold">{header.title}</span>
                  </Link>
                )}

                {/* Navigation Links */}
                {header.navigation && (
                  <nav className="flex items-center gap-6">
                    {header.navigation.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className={`text-sm transition-colors hover:text-primary ${
                          location.pathname === item.href
                            ? "text-primary font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                )}
              </div>

              <div className="flex items-center gap-4">
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

                {/* Custom Actions */}
                {header.actions?.map((action, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    onClick={action.onClick}
                  >
                    {action.icon}
                  </Button>
                ))}

                {/* Notifications */}
                {header.showNotifications && (
                  <Button variant="ghost" size="icon">
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