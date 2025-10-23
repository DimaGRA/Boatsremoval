import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onLanguageChange?: (lang: string) => void;
  currentLanguage?: string;
}

export default function Header({ onLanguageChange, currentLanguage = "en" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ];

  const currentLang = languages.find(l => l.code === currentLanguage) || languages[0];

  return (
    <header className="fixed top-0 left-0 right-0 bg-secondary z-50 border-b border-secondary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex flex-col items-center gap-1 cursor-pointer group"
              data-testid="button-logo"
            >
              {/* Boat Icon */}
              <svg 
                viewBox="0 0 100 50" 
                className="w-12 h-6 md:w-16 md:h-8 fill-primary transition-transform group-hover:scale-105"
                aria-label="Boat icon"
              >
                <path d="M10,30 L25,20 L45,15 L70,15 L90,25 L85,30 L75,28 L65,30 L55,28 L45,30 L35,28 L25,30 L15,28 Z" />
              </svg>
              
              {/* Main Text */}
              <div className="flex flex-col items-center -mt-1">
                <span className="text-sm md:text-lg font-bold text-secondary-foreground tracking-widest uppercase">
                  Florida Boat Removal
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-primary tracking-[0.2em] uppercase -mt-0.5">
                  Boat Removal
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors" data-testid="link-service-area">
              Service Area
            </a>
            <a href="#services" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors" data-testid="link-vessel-type">
              Vessel Type
            </a>
            <a href="#pricing" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors" data-testid="link-faq">
              FAQ
            </a>
            <a href="#contact" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors" data-testid="link-contact">
              Contact
            </a>
          </nav>

          {/* Phone & Language */}
          <div className="flex items-center gap-3">
            <a href="tel:+17792200187" className="hidden sm:flex items-center gap-2 text-secondary-foreground" data-testid="link-phone">
              <Phone className="h-5 w-5" />
              <span className="font-bold text-lg md:text-xl">779-220-0187</span>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-secondary-foreground hover:bg-secondary-foreground/10"
                  data-testid="button-language"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => onLanguageChange?.(lang.code)}
                    className={currentLanguage === lang.code ? "bg-accent" : ""}
                    data-testid={`language-${lang.code}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-secondary-foreground hover:bg-secondary-foreground/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-border">
            <nav className="flex flex-col gap-3">
              <a href="#services" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-service-area">
                Service Area
              </a>
              <a href="#services" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-vessel-type">
                Vessel Type
              </a>
              <a href="#pricing" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-faq">
                FAQ
              </a>
              <a href="#contact" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-contact">
                Contact
              </a>
              <a href="tel:+17792200187" className="flex items-center gap-2 text-secondary-foreground font-bold py-2 sm:hidden" data-testid="mobile-link-phone">
                <Phone className="h-5 w-5" />
                779-220-0187
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}