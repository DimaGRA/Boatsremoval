import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator as CalcIcon } from "lucide-react";

export default function Calculator() {
  const [boatType, setBoatType] = useState("");
  const [boatLength, setBoatLength] = useState("");
  const [location, setLocation] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculatePrice = () => {
    if (!boatType || !boatLength) return;

    const length = parseInt(boatLength);
    let basePrice = 0;

    // Base price by boat type
    const typePrices: Record<string, number> = {
      sailboat: 450,
      motorboat: 550,
      jetski: 250,
      yacht: 800,
      pontoon: 500,
    };

    basePrice = typePrices[boatType] || 400;

    // Adjust by length
    if (length > 20) basePrice *= 1.5;
    if (length > 30) basePrice *= 2;

    setEstimate(Math.round(basePrice));
    console.log('Calculated estimate:', Math.round(basePrice));
  };

  return (
    <section id="calculator" className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-calculator-title">
            Price Calculator
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-calculator-subtitle">
            Get an instant estimate for your boat removal
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalcIcon className="h-6 w-6 text-primary" />
              Calculate Your Price
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="boat-type">Boat Type</Label>
                <Select value={boatType} onValueChange={setBoatType}>
                  <SelectTrigger id="boat-type" data-testid="select-boat-type">
                    <SelectValue placeholder="Select boat type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sailboat">Sailboat</SelectItem>
                    <SelectItem value="motorboat">Motorboat</SelectItem>
                    <SelectItem value="jetski">Jet Ski</SelectItem>
                    <SelectItem value="yacht">Yacht</SelectItem>
                    <SelectItem value="pontoon">Pontoon</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="boat-length">Boat Length (feet)</Label>
                <Input
                  id="boat-length"
                  type="number"
                  placeholder="e.g., 25"
                  value={boatLength}
                  onChange={(e) => setBoatLength(e.target.value)}
                  data-testid="input-boat-length"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="location">Location</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger id="location" data-testid="select-location">
                    <SelectValue placeholder="Select your location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="miami">Miami, FL</SelectItem>
                    <SelectItem value="seattle">Seattle, WA</SelectItem>
                    <SelectItem value="sandiego">San Diego, CA</SelectItem>
                    <SelectItem value="boston">Boston, MA</SelectItem>
                    <SelectItem value="houston">Houston, TX</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={calculatePrice}
              disabled={!boatType || !boatLength}
              data-testid="button-calculate"
            >
              Calculate Price
            </Button>

            {estimate !== null && (
              <div className="bg-primary p-6 rounded-md text-center animate-in fade-in slide-in-from-bottom-4" data-testid="div-estimate-result">
                <p className="text-primary-foreground text-lg mb-2">Estimated Price</p>
                <p className="text-5xl font-extrabold text-primary-foreground" data-testid="text-estimate-amount">
                  ${estimate}
                </p>
                <p className="text-primary-foreground/80 text-sm mt-2">
                  Final price may vary based on condition and accessibility
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}