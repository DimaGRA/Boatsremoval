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
            <h1 className="text-xl md:text-2xl font-extrabold text-secondary-foreground">
              ⚓ BoatsRemoval
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors" data-testid="link-services">
              Boat Removal
            </a>
            <a href="#pricing" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors" data-testid="link-pricing">
              Service Area
            </a>
            <a href="#calculator" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors" data-testid="link-calculator">
              Vessel Type
            </a>
            <a href="#whyus" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors" data-testid="link-whyus">
              Why Us?
            </a>
            <a href="#contact" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors" data-testid="link-contact">
              Contact
            </a>
          </nav>

          {/* Phone & Language */}
          <div className="flex items-center gap-3">
            <a href="tel:+18005551234" className="hidden sm:flex items-center gap-2 text-secondary-foreground" data-testid="link-phone">
              <Phone className="h-5 w-5" />
              <span className="font-bold text-lg md:text-xl">1-800-555-1234</span>
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
              <a href="#services" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-services">
                Boat Removal
              </a>
              <a href="#pricing" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-pricing">
                Service Area
              </a>
              <a href="#calculator" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-calculator">
                Vessel Type
              </a>
              <a href="#whyus" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-whyus">
                Why Us?
              </a>
              <a href="#contact" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-link-contact">
                Contact
              </a>
              <a href="tel:+18005551234" className="flex items-center gap-2 text-secondary-foreground font-bold py-2 sm:hidden" data-testid="mobile-link-phone">
                <Phone className="h-5 w-5" />
                1-800-555-1234
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}