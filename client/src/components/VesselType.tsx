import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sailboatImg from "@assets/sailboat.jpg";
import motorboatImg from "@assets/junkmotorboat.jpg";
import jetskiImg from "@assets/jetski.jpg";
import pontoonImg from "@assets/pantoon.png";
import commercialImg from "@assets/commercialboat.webp";
import trailerImg from "@assets/boat trailers.webp";

interface VesselType {
  id: string;
  name: string;
  image: string;
  basePrice: number;
  description: string;
}

const services: VesselType[] = [
  { id: "sailboat", name: "Sailboat", image: sailboatImg, basePrice: 450, description: "Small to large sailboats" },
  { id: "motorboat", name: "Motorboat", image: motorboatImg, basePrice: 550, description: "Powerboats & yachts" },
  { id: "jetski", name: "Jet Ski", image: jetskiImg, basePrice: 250, description: "Any other personal watercrafts" },
  { id: "pontoon", name: "Pontoon", image: pontoonImg, basePrice: 500, description: "Pontoon boats and boat homes" },
  { id: "commercial", name: "Commercial boat", image: commercialImg, basePrice: 500, description: "Professional boats up to 60 FT" },
  { id: "trailer", name: "Boat Trailer", image: trailerImg, basePrice: 200, description: "Marine equipment & trailers" },
];

export default function VesselType() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            VESSEL TYPES WE REMOVE
          </h2>
          <p className="text-orange-600">
            We can take care of any vessel up to 60 FT
          </p>
        </div>

        {/* Vessel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="text-center h-full cursor-pointer border-4 border-primary hover:shadow-xl hover:-translate-y-1 transition bg-white"
            >
              <CardContent className="p-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 sm:h-48 md:h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                  <p className="text-gray-700 text-sm mb-3">{service.description}</p>
                  <Button
                    className="w-full bg-primary text-white hover:bg-orange-600"
                    size="sm"
                    onClick={() => setLocation(`/quote?type=${service.id}`)}
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
