import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import sailboatImg from "@assets/sailboat_1759945606068.jpg";
import motorboatImg from "@assets/junk-boat-yard_1759945852166.jpeg";
import jetskiImg from "@assets/stock_images/jet_ski_personal_wat_2f23beee.jpg";
import dockImg from "@assets/stock_images/wooden_dock_pier_on__262e5fd9.jpg";
import trailerImg from "@assets/stock_images/boat_trailer_equipme_3329e488.jpg";

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
  { id: "dock", name: "Dock Section", image: dockImg, basePrice: 350, description: "Wooden dock removal" },
  { id: "trailer", name: "Boat Trailer", image: trailerImg, basePrice: 200, description: "Equipment & trailers" },
];

export default function ServiceSelector() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
    console.log('Selected items:', Array.from(newSelected));
  };

  const totalPrice = Array.from(selectedItems).reduce((sum, id) => {
    const item = services.find(s => s.id === id);
    return sum + (item?.basePrice || 0);
  }, 0);

  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-services-title">
            Fast, Reliable Boat Removal Anywhere in the U.S.
          </h2>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4" data-testid="text-services-subtitle">
            <p>
              At Remove My Boat, we make getting rid of unwanted boats simple and stress-free. Our experienced team handles all types of marine craft — including sailboats, motorboats, yachts, pontoons, and personal watercraft — no matter the size or condition.
            </p>
            <p>
              Whether your boat is on land, in the water, or even submerged, we'll remove it safely and efficiently. We take care of salvage, disposal, and environmental compliance, so you don't have to worry about code violations, storage fees, or fines.
            </p>
            <p>
              With years of experience and hundreds of successful removals nationwide, Remove My Boat is your trusted partner for professional, affordable boat removal service — anywhere in the country.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
          {services.map((service) => {
            const isSelected = selectedItems.has(service.id);
            return (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all hover-elevate active-elevate-2 overflow-hidden ${
                  isSelected ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => toggleItem(service.id)}
                data-testid={`card-service-${service.id}`}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-32 md:h-40 object-cover"
                    />
                    {isSelected && (
                      <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-foreground mb-1" data-testid={`text-service-name-${service.id}`}>
                      {service.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">{service.description}</p>
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-price-${service.id}`}>
                      from ${service.basePrice}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedItems.size > 0 && (
          <div className="bg-primary p-6 rounded-md text-center" data-testid="div-total-estimate">
            <p className="text-primary-foreground text-lg mb-2">Total Estimate</p>
            <p className="text-4xl font-extrabold text-primary-foreground" data-testid="text-total-price">
              ${totalPrice}
            </p>
            <p className="text-primary-foreground/80 text-sm mt-2">
              {selectedItems.size} item{selectedItems.size > 1 ? 's' : ''} selected
            </p>
          </div>
        )}
      </div>
    </section>
  );
}