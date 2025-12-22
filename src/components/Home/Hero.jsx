import { useEffect, useState } from "react";

const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex justify-center mt-2">
      {/* HERO CONTAINER */}
      <div className="relative w-[99%] h-[83vh] rounded-3xl overflow-hidden">
        {/* Background Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Gradient Overlay */}

        <>
          <div
            className="absolute inset-0 bg-gradient-to-r
          from-blue-950/85
          via-blue-900/65
          to-blue-900/30"
          />

          <div
            className="absolute inset-0 bg-gradient-to-b
          from-black/30
            via-transparent
          to-black/60"
          />
        </>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-3xl text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              #1 Resource for all
              <span className="inline-block mx-2 text-[#0BA6DF] animate-pulse">
                HVAC
              </span>
              Work
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80">
              Reliable air conditioning services designed for comfort,
              efficiency, and long-term performance.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 rounded-full bg-[#0BA6DF] hover:bg-[#3396D3] transition font-medium">
                Get Quote
              </button>
              <button className="px-8 py-3 rounded-full border border-white/40 hover:bg-white/10 transition font-medium">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
