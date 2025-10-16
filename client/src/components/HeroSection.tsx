import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Calculator } from "lucide-react";
import heroImage from "@assets/Main photo_1760537559542.jpeg";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex flex-col justify-between overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Abandoned boat on trailer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between">
        {/* Top Section - Title */}
        <div className="pt-4 md:pt-6 text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
            data-testid="text-hero-title"
          >
            Fast Boat Removal Services
          </h1>
        </div>

        {/* Middle Section - Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary text-primary-foreground font-bold text-lg px-8 h-12 min-h-12 w-full sm:w-56"
            data-testid="button-get-quote"
            onClick={() => setLocation("/quote")}
          >
            <Calculator className="mr-2 h-5 w-5" />
            Get Free Quote
          </Button>
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary font-bold text-lg px-8 h-12 min-h-12 w-full sm:w-56"
            data-testid="button-call-now"
            asChild
          >
            <a href="tel:+17792200187" className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Bottom Section - Phone & Subtitle */}
        <div className="mt-auto pb-4 md:pb-6 text-center space-y-2">
          <p
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
            data-testid="text-phone-number"
          >
            779-220-0187
          </p>

          <p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            data-testid="text-hero-subtitle"
          >
            Professional disposal and dismantle of unwanted boats, yachts, catamarans. Same-day
            service available!
          </p>
        </div>
      </div>
    </section>
  );
}
