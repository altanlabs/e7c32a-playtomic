import { Link, useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/blocks/app-sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MainNavigation = [
  { label: "Jugadores", href: "/players" },
  { label: "Canchas", href: "/aros" },
  { label: "Torneos", href: "/tournaments" },
  { label: "Rankings", href: "/rankings" },
];

const DefaultHeader = {
  showNotifications: false,
  showUserMenu: false,
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
          className={`text-base font-semibold transition-colors ${
            location.pathname === item.href
              ? 'text-[#029455]'
              : isScrolled
              ? 'text-white'
              : 'text-gray-800 drop-shadow-sm'
          } hover:text-[#029455]`}
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
            isScrolled ? 'bg-[#029455] shadow-md' : 'bg-transparent'
          }`}>
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                {/* Logo and Desktop Navigation together */}
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <img 
                      src="https://api.altan.ai/platform/media/b7e8d173-6c2b-4669-ae3a-322ee9e7e2d2?account_id=00e70dcf-ba54-4e8c-9d06-dc8372251dae"
                      alt="Dribla"
                      className="h-10 w-auto hidden md:block"
                    />
                    <img 
                      src="https://api.altan.ai/platform/media/7fbaf883-19c6-4dd5-ae8b-5c9a990c3506?account_id=00e70dcf-ba54-4e8c-9d06-dc8372251dae"
                      alt="Dribla"
                      className="h-10 w-auto md:hidden"
                    />
                  </Link>
                  
                  {/* Desktop Navigation - Now directly next to logo */}
                  <nav className="hidden md:flex items-center ml-12 space-x-12">
                    <NavigationLinks />
                  </nav>
                </div>

                {/* Mobile Menu Button */}
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild className="md:hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`rounded-full ${
                        isScrolled
                          ? "bg-white/20 text-white hover:bg-white/30"
                          : "bg-black/20 text-white hover:bg-black/30"
                      }`}
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="bg-white/95 backdrop-blur-sm border-gray-200">
                    <div className="flex justify-center mb-6">
                      <img 
                        src="https://api.altan.ai/platform/media/7fbaf883-19c6-4dd5-ae8b-5c9a990c3506?account_id=00e70dcf-ba54-4e8c-9d06-dc8372251dae"
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
                    className="text-sm text-gray-600 hover:text-[#029455] transition-colors"
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