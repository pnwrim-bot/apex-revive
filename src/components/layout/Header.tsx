import { useState } from "react";
import { Phone, Mail, Truck, Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Shop by Vehicle", href: "#" },
    { label: "Parts", href: "#" },
    { label: "Rebuild Kits", href: "#" },
    { label: "Maintenance", href: "#" },
    { label: "Car Care", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-secondary/50 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center gap-6">
              <a href="mailto:info@apexautoparts.co.uk" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@apexautoparts.co.uk
              </a>
              <a href="tel:+442039157535" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +44 203 915 7535
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Truck className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm">Safe & Fast Shipping</span>
            </div>
            <div className="hidden md:block">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                FLASH SALE: Code <span className="font-bold">welcome10</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="glass-effect">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <h1 className="font-heading text-3xl md:text-4xl tracking-wider">
                <span className="text-gradient">APEX</span>
                <span className="text-foreground"> AUTO PARTS</span>
              </h1>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-muted-foreground hover:text-primary"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-primary">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-primary">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="hero" size="sm" className="hidden md:flex gap-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Cart (0)</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-muted-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="mt-4 animate-slide-up">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search keyword, category, brand or part..."
                  className="w-full bg-secondary border border-border rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button variant="hero" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden glass-effect border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button variant="hero" className="flex-1">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart (0)
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
