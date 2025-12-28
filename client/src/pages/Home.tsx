import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSelector from "@/components/ServiceSelector";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <ServiceSelector />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
