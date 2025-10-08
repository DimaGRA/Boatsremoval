import { Button } from "@/components/ui/button";
import { Phone, Calculator } from "lucide-react";
import heroImage from "@assets/stock_images/derelict_boat_on_boa_16145848.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight" data-testid="text-hero-title">
          Fast Junk Boat Removal
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          Professional disposal of unwanted boats, jet skis, and marine equipment. Same-day service available!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary text-primary-foreground font-bold text-lg px-8 h-12 min-h-12"
            data-testid="button-get-quote"
            onClick={() => {
              console.log('Get Free Quote clicked');
              document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Calculator className="mr-2 h-5 w-5" />
            Get Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 font-bold text-lg px-8 h-12 min-h-12"
            data-testid="button-call-now"
            onClick={() => console.log('Call Now clicked')}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </div>

        <p className="text-2xl md:text-3xl font-bold text-primary" data-testid="text-phone-number">
          📞 1-800-555-1234
        </p>
      </div>
    </section>
  );
}