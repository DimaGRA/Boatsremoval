import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <br /><span className="text-primary">Florida Boat Removal</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're the trusted boat removal experts serving all Florida since 1997
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Local Experts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Based in Florida, we understand unique coastal environment and local regulations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Same-Day Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Fast response times with same-day removal available for urgent situations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Eco-Friendly Disposal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Environmentally responsible recycling and disposal following all Florida environmental guidelines
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Free Quotes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Transparent pricing with no hidden fees. Get your free quote within 1 hour
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Full Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Fully licensed and insured for your peace of mind during the removal process
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>All Boat Types</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We handle sailboats, powerboats, yachts, catamarans, pantoons and derelict vessels up to 60 FT
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
