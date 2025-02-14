import { Link, useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/blocks/app-sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MainNavigation = [
  { label: "Jugadores", href: "/players" },
  { label: "Canchas", href: "/courts" },
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
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col">
      {showSidebar && sidebarConfig && (
        <AppSidebar 
          className="h-full border-r border-border hidden lg:block"
          {...sidebarConfig}
        />
      )}

      <div className="flex flex-1 flex-col">
        {header && showHeader && (
          <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
              isScrolled ? 'bg-[#029455] shadow-md' : ''
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
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
                  
                  <nav className="hidden md:flex items-center ml-12 space-x-12">
                    {MainNavigation.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className={`text-base font-semibold transition-colors ${
                          location.pathname === item.href
                            ? 'text-[#029455]'
                            : isScrolled
                            ? 'text-white hover:text-white/80'
                            : 'text-gray-800 hover:text-[#029455]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild className="md:hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`rounded-full ${
                        isScrolled
                          ? "text-white hover:bg-white/10"
                          : "text-gray-800 hover:bg-black/10"
                      }`}
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex justify-center mb-6">
                      <img 
                        src="https://api.altan.ai/platform/media/7fbaf883-19c6-4dd5-ae8b-5c9a990c3506?account_id=00e70dcf-ba54-4e8c-9d06-dc8372251dae"
                        alt="Dribla"
                        className="h-10 w-auto"
                      />
                    </div>
                    <nav className="flex flex-col space-y-4">
                      {MainNavigation.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-base font-semibold transition-colors ${
                            location.pathname === item.href
                              ? 'text-[#029455]'
                              : 'text-gray-800 hover:text-[#029455]'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </header>
        )}

        <main className="flex-1 pt-16">
          {children}
        </main>

        {footer && showFooter && (
          <footer className="border-t border-gray-200 bg-white/50">
            <div className="container mx-auto px-4">
              <div className="flex h-14 items-center justify-between">
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
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}