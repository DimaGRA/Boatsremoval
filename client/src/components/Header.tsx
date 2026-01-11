import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logoImage from "@assets/Logo_florida_boat_removal.png";
import { getPhoneByCity } from "@/utils/getPhoneByCity";

export default function Header({ cityName }: { cityName?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phone = getPhoneByCity(cityName);

  return (
    <>
      {/* ================= HEADER ================= */}
<header className="fixed top-0 left-0 right-0 z-50 bg-secondary border-b border-secondary-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28 md:h-24">

            {/* LOGO */}
            <a href="/" className="flex items-center">
              <img
                src={logoImage}
                alt="Florida Boat Removal logo"
                className="h-16 md:h-20 w-auto"
              />
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex flex-1 justify-center gap-10">
              <a href="/about" className="font-semibold text-secondary-foreground hover:opacity-80">
                About Us
              </a>
              <a href="/services" className="font-semibold text-secondary-foreground hover:opacity-80">
                Our Services
              </a>
              <a href="/vessel" className="font-semibold text-secondary-foreground hover:opacity-80">
                Vessel Type
              </a>
              <a href="/quote" className="font-semibold text-secondary-foreground hover:opacity-80">
                Quote Request
              </a>
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-4">

              {/* FREE QUOTE BUTTON */}
              <a href="/quote">
                <Button
                  size="sm"
                  className="bg-orange-600 hover:bg-orange-600 text-white font-semibold px-4 py-2 text-sm rounded-lg shadow"
                >
                  Free Quote
                </Button>
              </a>

              {/* PHONE — DESKTOP ONLY */}
              <a
                href={`tel:+1${phone.replace(/[^0-9]/g, "")}`}
                className="hidden md:flex items-center gap-2 font-bold text-secondary-foreground"
              >
                <Phone className="h-5 w-5" />
                {phone}
              </a>

              {/* MOBILE MENU BUTTON */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-secondary-border">
              <nav className="flex flex-col gap-4 text-center font-semibold">
                <a href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
                <a href="/services" onClick={() => setMobileMenuOpen(false)}>Our Services</a>
                <a href="/vessel" onClick={() => setMobileMenuOpen(false)}>Vessel Type</a>
                <a href="/quote" onClick={() => setMobileMenuOpen(false)}>Quote Request</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ================= MOBILE BOTTOM CALL BUTTON ================= */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a
          href={`tel:+1${phone.replace(/[^0-9]/g, "")}`}
          className="flex items-center justify-center gap-2 bg-orange-600/80 hover:bg-orange-600 backdrop-blur-sm text-white font-bold text-lg py-4 rounded-2xl shadow-xl"
        >
          <Phone className="h-6 w-6" />
          Call {phone}
        </a>
      </div>

      {/* Spacer so content isn't hidden behind button */}
      <div className="h-24 md:hidden" />
    </>
  );
}
