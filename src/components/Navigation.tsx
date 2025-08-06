import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Início", active: location.pathname === "/" },
    { href: "/curso", label: "Curso", active: location.pathname === "/curso" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="transition-transform duration-300 hover:scale-105">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-gold",
                  item.active ? "text-gold" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gradient-gold hover:text-primary"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    item.active ? "text-gold" : "text-foreground hover:text-gold"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gradient-gold hover:text-primary w-fit"
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};