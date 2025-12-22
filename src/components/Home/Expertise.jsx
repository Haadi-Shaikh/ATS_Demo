import React from "react";

const Expertise = ({ years }) => {
  return (
    <section className="w-full px-6 py-16">
      <div className="relative max-w-8xl mx-auto rounded-3xl overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/hero1.jpg"
          alt="HVAC Expertise"
          className="absolute inset-0 w-full h-full object-cover"
        />

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
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 text-white">
          <p className="text-cyan-400 tracking-widest font-semibold mb-4">
            [ OUR EXPERTISE ]
          </p>

          {/* Years */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-7xl md:text-8xl font-extrabold text-white/90">
              {years}
            </span>
            <span className="text-6xl md:text-7xl font-bold text-white/50">
              /
            </span>
            <span className="text-7xl md:text-8xl font-extrabold text-white/40">
              YRS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl">
            Professional installation and maintenance services
          </h2>

          <p className="text-white/80 max-w-2xl leading-relaxed">
            Our certified technicians ensure quality installation and reliable
            maintenance. We handle comprehensive service contracts and emergency
            repairs with guaranteed customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
