import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import RandomBoatGallery from "@/components/RandomBoatGallery";
// import ServiceAreaList from "@/components/ServiceAreaList";
import { getNearbyCities } from "@/utils/getNearbyCities";
import { getPhoneByCity } from "@/utils/getPhoneByCity";

export default function CoralGables() {
  const [, setLocation] = useLocation();
  const nearbyCities = getNearbyCities("Coral Gables", 60);
  const phone = getPhoneByCity("Coral Gables");

  const services = [
    "Boat Hauling & Transport",
    "Yacht Dismantling",
    "Catamaran Removal",
    "Sailboat Disposal",
    "Derelict Boat Removal",
    "Marina Cleanouts"
  ];

  const serviceAreas = [
    "Coral Gables Pier",
    "Miracle Mile",
    "Granada Boulevard",
    "Ponce de Leon Boulevard",
    "Douglas Road Area",
    "Old Cutler Road Corridor"
  ];

  const faqs = [
    {
      question: "How quickly can you remove a boat in Coral Gables?",
      answer:
        "We offer same-day and next-day boat removal services in Coral Gables, FL. Contact us before noon for potential same-day service. Emergency removals available 24/7."
    },
    {
      question: "What areas of Coral Gables do you serve?",
      answer:
        "We serve all of Coral Gables including the Miracle Mile area, Coral Way corridor, neighborhoods near the University of Miami, Old Cutler Road, South Dixie Highway, and surrounding communities in Miami-Dade County."
    },
    {
      question: "Do you remove boats from residential properties?",
      answer:
        "Yes! We remove boats from residential driveways, backyards, marinas, storage facilities, and waterfront properties throughout Coral Gables. We handle all permits and logistics."
    },
    {
      question: "Is boat removal in Coral Gables expensive?",
      answer:
        "Our Coral Gables boat removal services are budget-friendly and transparent. Costs vary by boat size, condition, and access. We offer free quotes and specialize only in removal and disposal — not boat purchases."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>
          Boat Removal Coral Gables FL | Professional Disposal & Dismantling
          Services
        </title>
        <meta
          name="description"
          content="Expert boat removal services in Coral Gables, Florida. Free quotes, same-day service, eco-friendly disposal. Serving nearby areas for boats, yachts & catamarans of all sizes."
        />
        <meta
          property="og:title"
          content="Boat Removal Coral Gables FL | Professional Services"
        />
        <meta
          property="og:description"
          content="Expert boat removal services in Coral Gables, Florida. Free quotes, same-day service, eco-friendly disposal."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/boat-removal-fl-coral-gables" />
      </Helmet>

      <Header cityName="Coral Gables" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground">
                  Coral Gables, Florida
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Professional Boat Removal Services in Coral Gables, FL
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert boat disposal and dismantling services for Coral Gables
                residents and businesses. We handle boats of all sizes—from
                small sailboats to large yachts and catamarans. Fast,
                eco-friendly, and affordable solutions for Miami-Dade County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setLocation("/quote")}>
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    (window.location.href = `tel:+1${phone.replace(
                      /[^0-9]/g,
                      ""
                    )}`)
                  }
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: {phone}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* <RandomBoatGallery cityName="Coral Gables" count={2} /> */}

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-primary">Florida Boat Removal</span> in Coral Gables?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're the trusted boat removal experts serving Coral Gables and
                all of Miami-Dade County.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Local Experts", text: "Based in Florida, we understand Coral Gables’s coastal environment and regulations." },
                { title: "Same-Day Service", text: "Fast response times with same-day removal available for urgent situations." },
                { title: "Eco-Friendly Disposal", text: "Environmentally responsible recycling and disposal following Florida guidelines." },
                { title: "Free Quotes", text: "Transparent pricing with no hidden fees. Get your free quote within one hour." },
                { title: "Full Insurance", text: "Fully licensed and insured for your peace of mind during the removal process." },
                { title: "All Boat Types", text: "We handle sailboats, powerboats, yachts, catamarans, and derelict vessels." }
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CheckCircle className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Comprehensive Boat Removal Services
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you have an old boat taking up space in your driveway,
                  a damaged vessel at the marina, or a derelict boat that needs
                  immediate removal, we provide complete solutions for Coral Gables residents.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="mt-8" onClick={() => setLocation("/quote")}>
                  Request Free Quote
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Areas We Serve in Coral Gables</CardTitle>
                  <CardDescription>Complete coverage throughout the city</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded hover-elevate">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Plus all surrounding neighborhoods in Miami-Dade
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Simple 3-Step Process
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Fast and hassle-free boat removal in Coral Gables
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "Contact Us", text: "Call us or fill out our online form with details about your boat and location. Send photos for faster quotes." },
                { num: "2", title: "Get Your Quote", text: "Receive a free, no-obligation quote within 1 hour!" },
                { num: "3", title: "We Remove It", text: "Our team handles all hauling, disposal, and paperwork — your property is clean in no time!" }
              ].map((step, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                      {step.num}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Common questions about boat removal in Coral Gables
            </p>

            <div className="space-y-4 text-left">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Call Section */}
        <section className="py-16 md:py-20 bg-muted text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src="/attached_assets/Logo_florida_boat_removal_black.png"
              alt="Florida Boat Removal logo"
              className="mx-auto mb-6 w-32 h-auto"
              loading="lazy"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Call <span className="text-primary">Florida Boat Removal</span> Today!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dial{" "}
              <a
                href={`tel:+1${phone.replace(/[^0-9]/g, "")}`}
                className="text-primary font-semibold hover:underline"
              >
                {phone}
              </a>{" "}
              to speak with our boat-removal specialist serving Coral Gables and
              all of Miami-Dade County. Pricing is based on vessel size,
              condition, and accessibility.
            </p>
            <Button size="lg" onClick={() => setLocation("/quote")}>
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">Florida Boat Removal</span> in Coral Gables, Florida
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Coral Gables is a historic and picturesque city in Miami-Dade County,
                known for its Mediterranean Revival architecture, tree-lined
                streets, and proximity to Biscayne Bay. With its many waterfront
                properties and marinas, professional boat removal services are essential.
              </p>
              <p>
                Whether you’re near the Coral Gables Pier, along Old Cutler Road, or
                in residential neighborhoods off Ponce de Leon Boulevard,{" "}
                <span className="text-primary">Florida Boat Removal</span> provides
                fast, reliable, and eco-friendly disposal services.
              </p>
              <p>
                We handle old boats, yachts, sailboats, and catamarans from
                residential properties, marinas, and storage facilities — including
                all transportation and environmentally responsible disposal.
              </p>
              <p>
                We serve all of Coral Gables, including areas around Miracle Mile,
                Granada Boulevard, Douglas Road, and Old Cutler Road, as well as
                surrounding Miami-Dade neighborhoods. Contact us today for a free quote!
              </p>
            </div>
          </div>
        </section>

        {/* <ServiceAreaList cities={nearbyCities} /> */}
      </main>

      <Footer />
    </div>
  );
}
