import heroImage from "@assets/Main photo_1760537559542.jpeg";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-secondary">
      {/* Background image */}
      <div className="absolute inset-0 h-[50vh] sm:h-[60vh] md:h-screen">
        <img
          src={heroImage}
          alt="Abandoned boat on trailer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center justify-center h-[50vh] sm:h-[60vh] md:h-screen pt-16 sm:pt-20 md:pt-32 px-4 sm:px-6 md:px-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          BOAT REMOVAL, DISMANTLE, DISPOSAL SERVICES IN FLORIDA
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          754-224-8555
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl">
          Professional removal of unwanted boats, yachts, catamarans from land, water, dock. Same-day service available!
        </p>
      </div>
    </section>
  );
}
