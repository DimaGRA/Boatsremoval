import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logoImage from "@assets/Logo_FL_boat_removal_1761197384646.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-secondary border-b border-secondary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 relative">
          {/* Logo */}
          <div className="flex-shrink-0 w-full flex justify-center md:justify-start">
            <a
              href="/"
              className="cursor-pointer group"
              data-testid="link-logo"
            >
              <img
                src={logoImage}
                alt="Florida Boat Removal logo"
                className="h-16 md:h-20 w-auto transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* Phone & Mobile Menu */}
          <div className="absolute right-4 flex items-center gap-3 md:static">
            <a
              href="tel:+17792200187"
              className="hidden sm:flex items-center gap-2 text-secondary-foreground"
              data-testid="link-phone"
            >
              <Phone className="h-5 w-5" />
              <span className="font-bold text-lg md:text-xl">
                779-220-0187
              </span>
            </a>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-secondary-foreground hover:bg-secondary-foreground/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 mt-2">
          <a
            href="#services"
            className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors"
            data-testid="link-service-area"
          >
            Service Area
          </a>
          <a
            href="#services"
            className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors"
            data-testid="link-vessel-type"
          >
            Vessel Type
          </a>
          <a
            href="#pricing"
            className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors"
            data-testid="link-faq"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium transition-colors"
            data-testid="link-contact"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-border">
            <nav className="flex flex-col gap-3">
              <a
                href="#services"
                className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Service Area
              </a>
              <a
                href="#services"
                className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vessel Type
              </a>
              <a
                href="#pricing"
                className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-secondary-foreground hover:text-secondary-foreground/80 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="tel:+17792200187"
                className="flex items-center gap-2 text-secondary-foreground font-bold py-2 sm:hidden"
              >
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
