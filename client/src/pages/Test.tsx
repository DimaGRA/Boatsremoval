import Header from "@/components/HeaderN";
import HeroSection from "@/components/HeroSectionN";
import WhoWeAre from "@/components/WhoWeAre";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import WhatWeDo from "@/components/WhatWeDo";
import VesselType from "@/components/VesselType";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSectionN";
import Footer from "@/components/FooterN";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <HeroSection />
        <WhoWeAre />
        <ThreeStepProcess />
        <WhatWeDo />
        <VesselType />
        <WhyChooseUs />
        <FAQ />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

