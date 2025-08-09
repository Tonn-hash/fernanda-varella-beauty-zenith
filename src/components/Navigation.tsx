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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-24">
          {/* Premium Logo */}
          <Link to="/" className="transition-all duration-300 hover:scale-105 hover-glow">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300 hover:text-gold group",
                  item.active ? "text-gold" : "text-foreground"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-gradient-gold transition-all duration-300",
                  item.active ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
            <Button 
              variant="premium"
              size="lg"
              className="shadow-gold"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Premium Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl bg-gold/10 border border-gold/20 transition-all duration-300 hover:bg-gold/20 hover:scale-105"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gold" />
            ) : (
              <Menu className="h-6 w-6 text-gold" />
            )}
          </button>
        </div>

        {/* Premium Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-base font-medium transition-all duration-300 hover:text-gold hover:translate-x-2",
                    item.active ? "text-gold" : "text-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                variant="premium"
                size="lg"
                className="w-fit shadow-gold"
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