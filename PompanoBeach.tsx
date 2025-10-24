import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Oldsmar Boat Removal
 * Exact structure mirrored from the Pompano Beach file:
 * - Helmet (SEO)
 * - Header
 * - Hero
 * - Why Choose Us (Cards)
 * - Services Grid + Service Areas (ZIP codes: 34677, 34685)
 * - Process (4-step)
 * - FAQs
 * - CTA
 * - Local Content (long-form, ZIPs, waterways, neighborhoods)
 * - Footer
 * Requirements:
 * - 400+ lines
 * - 1450–1900 words of unique text
 * - Only Oldsmar, FL (ZIPs 34677 and 34685). No other territories.
 * - Closing structure included at the end.
 */

export default function OldsmarBoatRemoval() {
  const [, setLocation] = useLocation();

  const services = [
    "Submerged boat recovery with lift bags and dewatering pumps",
    "Oversized yacht transport with permits, escorts, and route plans",
    "Storm-damaged vessel stabilization and controlled removal",
    "Derelict boat disposal with HOA and city-ready documentation",
    "Canal and lake cleanouts with compact rigs and careful staging",
    "Eco-friendly dismantling with materials sorting and recycling",
    "Trailered boat hauling from residential driveways and yards",
    "Tight-access canal extractions under low bridges and narrow turns",
    "Commercial craft and workboat removal for local businesses",
    "Insurance-coordinated removals after severe weather events"
  ];

  const serviceAreas = [
    "Oldsmar ZIP Codes Served: 34677, 34685"
  ];

  const faqs = [
    {
      question: "Do you handle storm-damaged boats in Oldsmar canals and lakes?",
      answer:
        "Yes. After storms, we secure the site, stabilize compromised hulls, and safely remove vessels from canals, lakes, and bayfront properties in Oldsmar. We coordinate with property owners and HOAs to reduce secondary impacts and move boats to approved facilities for recycling and disposal."
    },
    {
      question: "Which ZIP codes in Oldsmar do you serve?",
      answer:
        "We serve Oldsmar entirely—ZIP codes 34677 and 34685. If your address falls within these ZIPs, we can assess access points, staging areas, and route conditions to provide a clear, accurate quote and timeline."
    },
    {
      question: "Can you remove oversized yachts or commercial craft in Oldsmar?",
      answer:
        "Absolutely. We plan permits, escorts, and road routes for oversized loads. We use specialized trailers and modular gear to navigate tight residential corridors and canal-adjacent streets, ensuring safe, compliant transport."
    },
    {
      question: "Is your boat removal process eco-friendly in Oldsmar?",
      answer:
        "Yes. We prioritize containment and recycling, handling fuels, oils, batteries, and composites responsibly. Operations are designed to protect local canals, lakes, and waterfronts while meeting regulatory expectations."
    },
    {
      question: "How quickly can you schedule removal in ZIP codes 34677 and 34685?",
      answer:
        "We typically return estimates quickly and can schedule within 24–48 hours once access constraints are confirmed. For urgent hazards such as drifting hulls or obstructed canals, same-day assessments may be possible."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Boat Removal in Oldsmar, FL (34677 & 34685) | BoatsRemoval.com</title>
        <meta
          name="description"
          content="Professional boat removal in Oldsmar, FL. Serving ZIP codes 34677 and 34685 with licensed crews for submerged, storm-damaged, oversized, and derelict boats. Eco-friendly disposal, clear quotes, and reliable scheduling."
        />
        <meta property="og:title" content="Boat Removal Oldsmar FL | Professional Services" />
        <meta
          property="og:description"
          content="Expert boat removal in Oldsmar, Florida. Free quotes, eco-friendly disposal, and careful operations for homeowners, HOAs, and waterfront properties in ZIPs 34677 and 34685."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://boatsremoval.com/oldsmar-boat-removal" />
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground">Oldsmar, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Boat Removal Services in Oldsmar, FL (34677 & 34685)
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Oldsmar sits along the northern reaches of Tampa Bay, where canals, lakes, and bayfront
                neighborhoods make boating part of daily life. When a vessel becomes abandoned, storm-damaged,
                or simply unwanted, it can quickly shift from a cherished asset to a source of risk. Our crews
                deliver safe, efficient, and environmentally responsible boat removal tailored to Oldsmar’s
                waterfronts, delivering clarity, care, and a clean finish.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether your property is in ZIP code 34677 or 34685, we design operations that respect docks,
                seawalls, landscaping, and neighborhood access. From submerged hull recovery to oversized yacht
                transport, we plan each step, communicate throughout, and leave your site orderly. We serve
                homeowners, HOAs, and local businesses with documented, compliant disposal and practical timelines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setLocation("/quote")}>
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => (window.location.href = "tel:+17792200187")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 779-220-0187
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why choose BoatsRemoval in Oldsmar?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We specialize in boat removal for Oldsmar’s canals, lakes, and bayfront properties. With
                licensed crews, scaled equipment, and documented disposal, we deliver controlled operations
                that protect water quality and property while meeting practical timelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Local waterfront expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Oldsmar’s canals, lakes, and bay-adjacent streets require careful planning. We tailor
                    operations to depth, current, bottom conditions, and limited clearances, protecting docks,
                    seawalls, and landscaping as we extract and haul vessels.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Reliable, fast scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quotes are clear and prompt. Many removals can be scheduled within 24–48 hours, with
                    phased plans for multi-boat scenarios in neighborhoods where access must be coordinated.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Eco-friendly disposal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We prioritize recycling and manage fuels, oils, batteries, and composites with containment
                    and compliant processing. The goal is to protect local canals and lakes during removal and
                    transport, avoiding contamination and preserving waterfront health.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Transparent pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your quote outlines access assumptions, equipment sizing, haul routes, and disposal steps.
                    We explain options when site constraints increase complexity, helping you choose the
                    most practical, cost-effective plan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Licensed and insured crews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Removal teams are trained and insured. From compact canal extractions to heavy-lift
                    operations, we work with documented procedures that keep people and property safe while
                    the vessel is recovered and transported.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>All vessel types</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Powerboats, sailboats, catamarans, live-aboards, workboats, and small yachts—afloat,
                    beached, submerged, or derelict. We scale equipment to the task and maintain a controlled
                    footprint throughout the operation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Comprehensive boat removal services
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Oldsmar’s geography demands careful staging. We size equipment and crews to fit your site:
                  compact rigs for narrow canals, lift bags for submerged boats, heavy-duty trailers for
                  oversized vessels, and planned routes for complex transport. Every plan is designed to
                  protect property and water quality while delivering a predictable timeline and clean finish.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="mt-8"
                  onClick={() => setLocation("/quote")}
                >
                  Request Free Quote
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Areas we serve in Oldsmar</CardTitle>
                  <CardDescription>ZIP codes 34677 and 34685</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    If your address is within ZIP 34677 or 34685, we can assess site access, recommend
                    equipment, and provide a clear schedule and price. Share boat dimensions, condition,
                    and canal or driveway constraints for the most accurate estimate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our simple 4-step boat removal process
              </h2>
              <p className="text-lg text-muted-foreground">
                Clear communication, controlled operations, and documented disposal—built for Oldsmar’s canals,
                lakes, and bayfront properties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <CardTitle>Information & estimate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Share ZIP, boat type and dimensions, condition (afloat, submerged, storm-damaged), and
                    access constraints. We return a clear quote and proposed timeline, noting assumptions
                    about equipment and disposal steps to complete the job safely.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <CardTitle>On-site assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We confirm entry points, staging areas, bottom conditions, currents, clearances, and
                    neighborhood logistics. This ensures right-sizing for canal and lake operations with
                    minimal disturbance to property and surroundings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <CardTitle>Removal operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Crews secure the vessel, protect nearby structures, and execute the plan using lift
                    systems, compact rigs, barges, or heavy-duty trailers as required. We maintain a
                    controlled footprint and steady communication throughout the operation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    4
                  </div>
                  <CardTitle>Transport & disposal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Boats are hauled to approved facilities. Usable components are recycled; fuels, oils,
                    batteries, and composites are processed responsibly. Final site cleanup returns your
                    property to a safe, orderly state with disposal documentation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Clear answers about boat removal across Oldsmar’s ZIP codes 34677 and 34685.
              </p>
            </div>

            <div className="space-y-4">
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Do you provide derelict vessel documentation for HOAs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes. We document derelict boat removal for property owners and HOAs, including site photos,
                    access notes, equipment details, and disposal confirmation. This supports clear communication
                    and compliance while keeping records organized for future reference.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can you work under low bridges and tight canal turns?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We plan around low-clearance bridges, narrow turns, and compact staging with modular gear and
                    careful route design. In extremely tight conditions, we use smaller rigs or water-side extraction
                    to minimize impact on property and shorelines.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Do you handle multi-boat projects in Oldsmar?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes. We coordinate canal cleanouts and multi-boat removals with phased schedules, documented
                    operations, and neighbor communications. The aim is to keep timelines predictable and disruption
                    minimal across the waterfront community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to remove your boat in Oldsmar?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get your free quote now. We’ll ask for ZIP (34677 or 34685), boat type and dimensions, condition,
              and access notes—then provide a clear plan, fair pricing, and a reliable schedule to reclaim your
              space safely. For multi-boat or HOA-coordinated projects, we’ll phase operations to keep impact low.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setLocation("/quote")}
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => (window.location.href = "tel:+17792200187")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>779-220-0187</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>quote@boatsremoval.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Local Content Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About boat removal in Oldsmar, FL (34677 & 34685)
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Oldsmar’s waterfront footprint includes canal-lined neighborhoods, lake-adjacent homes, and
                bayfront streets that sit near the upper reaches of Tampa Bay. These areas combine shallow
                waters, narrow corridors, and varying bottom conditions, each influencing how a vessel can be
                extracted and staged for transport. Our plans consider bridge clearances, turn radii, driveway
                grades, and shoreline stability to protect property and maintain control during operations.
              </p>
              <p>
                In ZIP 34677 and ZIP 34685, boats are often moored in canals or stored on properties with limited
                access for large trailers. We size rigs for tight conditions and use modular equipment where
                appropriate. For submerged craft, we stabilize, dewater, and lift with measured steps, avoiding
                secondary damage to docks, seawalls, and adjacent structures. For oversized vessels, we coordinate
                permits, escorts, and pre-routed paths to move boats safely and compliantly.
              </p>
              <p>
                Severe weather can turn a manageable situation into a priority. After storms, compromised hulls
                may drift, list, or obstruct canals and lake inlets. We respond with site control, containment
                when necessary, and a staged plan to remove the vessel with minimal disruption. In every case,
                we document operations, maintain clear communication, and deliver a clean outcome with proper
                disposal records.
              </p>
              <p>
                Responsible disposal is central to our approach. Boats contain materials—fuels, oils, batteries,
                fiberglass, metals—that must be handled thoughtfully. We sort and recycle where possible, and we
                process hazardous items with compliant methods. The goal is simple: safeguard Oldsmar’s waterways
                and neighborhoods while making sure your obligations as a property owner or HOA are met without
                unexpected complications.
              </p>
              <p>
                The best way to start is with detail. Share your ZIP (34677 or 34685), boat dimensions, condition,
                and photos of the site. Include notes about canal width, bridge clearance, driveway access, and
                staging space. With that, we can give you a precise estimate and a practical timeline. If the task
                involves multiple vessels along a canal, we can phase operations and coordinate neighbor notices to
                keep traffic flowing and noise minimal.
              </p>
              <p>
                Throughout the job, our crews maintain a controlled footprint. We protect nearby property, keep
                shorelines stable, and use the right gear for each step: compact rigs for tight corridors, lift
                systems for submerged hulls, heavy-duty trailers for larger vessels. When the boat is clear, we
                remove debris, confirm disposal, and leave the area clean. It’s a complete service built to solve
                the problem without creating new ones.
              </p>
              <p>
                Oldsmar’s character is defined by proximity to water and the daily rhythms that come with it.
                When a vessel becomes an obstacle—taking up space, posing risk, or blocking a canal—it pulls focus
                and energy from everything else you want to do. Boat removal should be straightforward: clear
                communication, practical planning, and careful execution that respects your property and your
                neighbors. That’s the standard we hold to in 34677 and 34685.
              </p>
              <p>
                If you’re ready to move forward, we’re prepared to help. Tell us where the boat sits, how it’s
                accessed, and what you’ve already tried. We’ll respond with a plan that matches your site and
                delivers a predictable result. When it’s gone, you’ll have documentation in hand and the peace
                of mind that comes from a clean, orderly waterfront—and the freedom to focus on what’s next.
              </p>
              <p>
                In the end, boat removal isn’t only about equipment; it’s about trust, control, and getting your
                space back without drama. That’s why our process is transparent, our communication steady, and
                our finish thorough. For Oldsmar—ZIPs 34677 and 34685—that’s the level of service we bring to
                every job, no matter the size, no matter the complexity.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
