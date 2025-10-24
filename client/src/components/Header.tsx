import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logoImage from "@assets/Logo_FL_boat_removal_1761197384646.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-secondary border-b border-secondary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 w-full relative">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
            <a href="/" className="cursor-pointer group" data-testid="link-logo">
              <img
                src={logoImage}
                alt="Florida Boat Removal logo"
                className="h-16 md:h-20 w-auto transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop nav links (centered) */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            <a href="#services" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors">
              Service Area
            </a>
            <a href="#services" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors">
              Vessel Type
            </a>
            <a href="#pricing" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Right: phone + mobile menu */}
          <div className="flex items-center gap-3">
            {/* Phone */}
            <a href="tel:+17792200187" className="hidden md:flex items-center gap-2 text-secondary-foreground">
              <Phone className="h-5 w-5" />
              <span className="font-bold text-lg md:text-xl">779-220-0187</span>
            </a>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-secondary-foreground hover:bg-secondary-foreground/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-border">
            <nav className="flex flex-col gap-3">
              <a href="#services" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Service Area
              </a>
              <a href="#services" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Vessel Type
              </a>
              <a href="#pricing" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <a href="#contact" className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a href="tel:+17792200187" className="flex items-center gap-2 text-secondary-foreground font-bold py-2 sm:hidden">
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
