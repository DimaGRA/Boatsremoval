import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "small",
    name: "Small Vessels",
    size: "Up to 15 feet",
    price: 299,
    features: [
      "Jet skis & small boats",
      "Free towing included",
      "Same-day service",
      "Eco-friendly disposal",
    ],
  },
  {
    id: "medium",
    name: "Medium Vessels",
    size: "15-25 feet",
    price: 599,
    popular: true,
    features: [
      "Sailboats & motorboats",
      "Professional crew",
      "All permits handled",
      "Insurance coverage",
    ],
  },
  {
    id: "large",
    name: "Large Vessels",
    size: "25-40 feet",
    price: 1299,
    features: [
      "Yachts & large boats",
      "Heavy equipment",
      "Crane service available",
      "Full documentation",
    ],
  },
  {
    id: "commercial",
    name: "Commercial",
    size: "40+ feet",
    price: 2499,
    features: [
      "Commercial vessels",
      "Marina clearance",
      "Custom solutions",
      "Volume discounts",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
            Choose the right plan based on your vessel size. No hidden fees!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative hover-elevate ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
              data-testid={`card-pricing-${plan.id}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="gap-2">
                <CardTitle className="text-xl" data-testid={`text-plan-name-${plan.id}`}>
                  {plan.name}
                </CardTitle>
                <CardDescription data-testid={`text-plan-size-${plan.id}`}>
                  {plan.size}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-foreground" data-testid={`text-plan-price-${plan.id}`}>
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">starting</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2" data-testid={`feature-${plan.id}-${idx}`}>
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => console.log(`Book ${plan.name} clicked`)}
                  data-testid={`button-book-${plan.id}`}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}