import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sailboatImg from "@assets/sailboat_1759945606068.jpg";
import motorboatImg from "@assets/junk-boat-yard_1759945852166.jpeg";
import jetskiImg from "@assets/jetski_1759945958376.jpg";
import pontoonImg from "@assets/pantoon_1759946218785.png";
import trailerImg from "@assets/boat trailers_1759946075289.webp";

interface ServiceItem {
  id: string;
  name: string;
  image: string;
  basePrice: number;
  description: string;
}

const services: ServiceItem[] = [
  { id: "sailboat", name: "Sailboat", image: sailboatImg, basePrice: 450, description: "Small to medium sailboats" },
  { id: "motorboat", name: "Motorboat", image: motorboatImg, basePrice: 550, description: "Powerboats & yachts" },
  { id: "jetski", name: "Jet Ski", image: jetskiImg, basePrice: 250, description: "Personal watercraft" },
  { id: "pontoon", name: "Pontoon", image: pontoonImg, basePrice: 500, description: "Pontoon boats" },
  { id: "trailer", name: "Boat Trailer", image: trailerImg, basePrice: 200, description: "Equipment & trailers" },
];

export default function ServiceSelector() {
  const [, setLocation] = useLocation();

  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-services-title">
            Fast, Reliable Boat Removal Across Florida
          </h2>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4" data-testid="text-services-subtitle">
            <p>
              At BoatsRemoval, we make getting rid of unwanted boats simple, safe, and stress-free. As a local Florida company, we proudly serve both the East and West Coasts — including Broward, Miami-Dade, Palm Beach, Hernando, Pasco, Pinellas, Hillsborough, Manatee, and Sarasota counties.
            </p>
            <p>
              Our experienced team handles all types of marine vessels — sailboats, motorboats, yachts, pontoons, and jet skis — no matter the size, age, or condition.
            </p>
            <p>
              Whether your boat is on land, in the water, or even submerged, we'll remove it quickly and responsibly. We take care of salvage, disposal, and environmental compliance, so you can avoid code violations, storage fees, and fines.
            </p>
            <p>
              With years of experience and hundreds of successful removals across Florida, BoatsRemoval is your trusted local partner for professional and affordable boat removal services on both coasts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
          {services.map((service) => {
            return (
              <Card
                key={service.id}
                className="transition-all hover-elevate active-elevate-2 overflow-hidden"
                data-testid={`card-service-${service.id}`}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-32 md:h-40 object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-foreground mb-1" data-testid={`text-service-name-${service.id}`}>
                      {service.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">{service.description}</p>
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary" 
                      size="sm"
                      onClick={() => setLocation(`/quote?type=${service.id}`)}
                      data-testid={`button-quote-${service.id}`}
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}