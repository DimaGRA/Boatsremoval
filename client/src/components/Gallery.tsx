import { useRef, useState, useEffect } from "react";

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
  "/attached_assets/Boat_images/Boat_disposal_2.webp",
  "/attached_assets/Boat_images/Boat_disposal_3.webp",
  "/attached_assets/Boat_images/Boat_disposal_4.webp",
  "/attached_assets/Boat_images/Boat_disposal_5.webp",
  "/attached_assets/Boat_images/Boat_disposal_6.webp",
  "/attached_assets/Boat_images/Boat_disposal_7.webp",
  "/attached_assets/Boat_images/Boat_disposal_8.webp",
  "/attached_assets/Boat_images/Boat_disposal_9.webp",

  "/attached_assets/Boat_images/Boat_removal_3.webp",
  "/attached_assets/Boat_images/Boat_removal_4.webp",
  "/attached_assets/Boat_images/Boat_removal_5.webp",
  "/attached_assets/Boat_images/Boat_removal_6.webp",
  "/attached_assets/Boat_images/Boat_removal_7.webp",
  "/attached_assets/Boat_images/Boat_removal_9.webp",
  "/attached_assets/Boat_images/Boat_removal_10.webp",
  "/attached_assets/Boat_images/Boat_removal_11.webp",
  "/attached_assets/Boat_images/Boat_removal_12.webp",
  "/attached_assets/Boat_images/Boat_removal_13.webp",
  "/attached_assets/Boat_images/Boat_removal_14.webp",
  "/attached_assets/Boat_images/Boat_removal_15.webp",
  "/attached_assets/Boat_images/Boat_removal_16.webp",
  "/attached_assets/Boat_images/Boat_removal_17.webp",
  "/attached_assets/Boat_images/Boat_removal_18.webp",
  "/attached_assets/Boat_images/Boat_removal_19.webp",
  "/attached_assets/Boat_images/Boat_removal_20.webp",
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveIndex(index);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
   
   <section className="py-16 bg-secondary">
  <div className="max-w-7xl mx-auto px-4">

    {/* MATCHING FRAME */}
    <div className="text-center bg-white py-12 rounded-2xl border-4 border-primary shadow-lg">

      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        MORE RECENT JOBS
      </h2>

      {/* ORANGE DIVIDER */}
      <div className="mx-auto h-1 w-24 bg-primary rounded-full mb-8"></div>

      {/* SLIDER */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-start rounded-lg overflow-hidden"
          >
            <img
              src={src}
              alt={`Job ${index + 1}`}
              className="w-full h-80 sm:h-96 object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>
 </div>
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                scrollRef.current?.scrollTo({
                  left: index * scrollRef.current.offsetWidth,
                  behavior: "smooth",
                });
                setActiveIndex(index);
              }}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-orange-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
