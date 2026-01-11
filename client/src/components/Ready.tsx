import { Button } from "@/components/ui/button";
import { Phone, Upload } from "lucide-react";
import { useState } from "react";
import { getPhoneByCity } from "@/utils/getPhoneByCity";

interface ReadyProps {
  cityName?: string;
}
export default function Ready({ cityName }: ReadyProps) {
  // Get city-specific phone
  const phone = getPhoneByCity(cityName);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Orange Square / Card */}
        <div className="bg-primary border-4 border-orange-600 rounded-2xl p-10 flex flex-col items-center justify-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Get That Boat Removed Today!
          </h2>
          <p className="text-lg text-white">
            Free quote. Lowest prices. 24/7 local Florida service
          </p>  
          

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-white/90 border-none flex items-center justify-center gap-2"
              asChild
            >
              <a href={`tel:+1${phone.replace(/[^0-9]/g, "")}`}>
                <Phone className="h-5 w-5" /> Call Us
              </a>
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-white/90 border-none flex items-center justify-center gap-2"
              asChild
            >
              <a href="/quote">
                <Upload className="h-5 w-5" /> Free Estimate
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
