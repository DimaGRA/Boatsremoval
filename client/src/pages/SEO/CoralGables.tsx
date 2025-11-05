import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
      answer: "We offer same-day and next-day boat removal services in Coral Gables, FL. Contact us before noon for potential same-day service. Emergency removals available 24/7."
    },
    {
      question: "What areas of Coral Gables do you serve?",
      answer: "We serve all of Coral Gables including the Miracle Mile area, Coral Way corridor, neighborhoods near the University of Miami, Old Cutler Road, South Dixie Highway, and surrounding communities in Miami-Dade County."
    },
    {
      question: "Do you remove boats from residential properties?",
      answer: "Yes! We remove boats from residential driveways, backyards, marinas, storage facilities, and waterfront properties throughout Coral Gables. We handle all permits and logistics."
    },
    {
      question: "Is boat removal in Coral Gables expensive?",
      answer: "Our Coral Gables boat removal services are budget-friendly and transparent. Costs vary by boat size, condition, and access. We offer free quotes and specialize only in removal and disposal — not boat purchases."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Boat Removal Coral Gables FL | Professional Disposal & Dismantling Services</title>
        <meta
          name="description"
          content="Expert boat removal services in Coral Gables, Florida. Free quotes, same-day service, eco-friendly disposal. Serving nearby areas for boats, yachts & catamarans of all sizes."
        />
        <meta property="og:title" content="Boat Removal Coral Gables FL | Professional Services" />
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
                <span className="text-sm font-semibold text-muted-foreground">Coral Gables, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Professional Boat Removal Services in Coral Gables, FL
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert boat disposal and dismantling services for Coral Gables residents and businesses.
                We handle boats of all sizes - from small sailboats to large yachts and catamarans.
                Fast, eco-friendly, and affordable solutions for Miami-Dade County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setLocation('/quote')}>
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => (window.location.href = `tel:+1${phone.replace(/[^0-9]/g, '')}`)}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: {phone}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* <RandomBoatGallery cityName="Coral Gables" count={2} /> */}

        {/* Other sections (Why Choose Us, Services, Process, FAQ, Local Call, About, etc.) remain unchanged */}

        {/* <ServiceAreaList cities={nearbyCities} /> */}
      </main>

      <Footer />
    </div>
  );
}
