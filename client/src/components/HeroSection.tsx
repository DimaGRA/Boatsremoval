import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Calculator } from "lucide-react";
import heroImage from "@assets/Main photo_1760537559542.jpeg";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Abandoned boat on trailer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
      </div>

      {/* Title at top */}
      <div className="relative z-10 pt-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Fast Boat Removal Services
        </h1>
      </div>

      {/* Buttons in middle */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center mt-16 mb-[120px] text-center">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary text-primary-foreground font-bold text-lg px-8 h-12 w-full sm:w-56"
          onClick={() => setLocation("/quote")}
        >
          <Calculator className="mr-2 h-5 w-5" />
          Get Free Quote
        </Button>
        <Button
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary font-bold text-lg px-8 h-12 w-full sm:w-56"
          asChild
        >
          <a href="tel:+17792200187" className="flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </a>
        </Button>
      </div>

      {/* Bottom phone + subtitle */}
      <div className="absolute bottom-6 left-0 w-full text-center px-4 z-10">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          779-220-0187
        </p>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mt-2">
          Professional disposal and dismantle of unwanted boats, yachts, catamarans. Same-day
          service available!
        </p>
      </div>
    </section>
  );
}
