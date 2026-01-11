import { useRef, useState, useEffect } from "react";

export default function WhoWeAre() {
  const recentBoats = [
    "/attached_assets/Boat_images/Boat_removal_12.webp",
    "/attached_assets/Boat_images/Boat_removal_7.webp",
    "/attached_assets/Boat_images/Boat_disposal_6.webp",
    "/attached_assets/Boat_images/Boat_removal_19.webp",
    "/attached_assets/Boat_images/Boat_removal_20.webp",
    "/attached_assets/Boat_images/Boat_disposal_10.webp",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle scroll to update active dot
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const slide = container.firstElementChild as HTMLElement;
    if (!slide) return;

    const slideWidth = slide.offsetWidth;
    const index = Math.round(container.scrollLeft / slideWidth);

    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Jump to a specific image when dot is clicked
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const slideWidth = container.offsetWidth;

    container.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section id="what-we-do" className="py-16 md:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            data-testid="text-services-title"
          >
            Fast & Affordable Boat Removal and Disposal Across Florida
          </h2>

          {/* ================= DESCRIPTION FRAME ================= */}
          <div className="bg-white border-4 border-primary rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-5">
            <p>
              <span className="text-primary font-bold">Florida Boat Removal</span> is a <strong>local, family-run company </strong> 
              providing professional boat removal services <strong>since 1997</strong>.
              We make removing unwanted boats simple, safe, and stress-free.
            </p>

            <p>
              <strong>Boats on land, in the water, or even submerged</strong> — we handle the entire process
              from start to finish with experienced crews and specialized equipment.
            </p>

            <p>
              We take care of <strong>eco-friendly, professional utilization and disposal</strong> 
              of boats, following all environmental regulations and local Florida state requirements.
              Our service helps protect Florida’s waterways and coastal areas.
            </p>

            <p>
              As a <strong>small, local company</strong>, we avoid the high overhead of large
              nationwide operators. This allows us to <strong>offer better pricing</strong> 
              while delivering reliable, hands-on service.
            </p>

            <p>
              Our services help you avoid <strong>code violations, storage fees, and fines</strong>,
              while ensuring your boat is removed responsibly and legally.
            </p>
            <div className="mt-6 flex justify-center">
    <a href="/about">
      <button className="bg-primary text-white font-semibold px-6 py-3 rounded-lg border-2 border-orange-600 hover:bg-orange-600 transition-colors">
        Learn More
      </button>
    </a>
          </div>
        </div>
       </div>

        {/* ================= RECENT JOBS ================= */}
        <div className="text-center bg-white py-12 rounded-2xl border-4 border-primary shadow-lg">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-gray-900">
            OUR RECENT JOBS
          </h3>

          <div className="mt-4 mx-auto h-1 w-24 bg-primary rounded-full"></div>

          {/* Swipeable images with scroll snapping */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth mt-8"
          >
            {recentBoats.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-start rounded-lg overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Recent removal ${index + 1}`}
                  className="w-full h-80 sm:h-96 object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {recentBoats.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none ${
                  activeIndex === index ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
