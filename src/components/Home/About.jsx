import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-sky-500 font-semibold tracking-wide">
            [ ABOUT US ]
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 leading-tight">
            15 years of expertise in
            <span className="text-sky-500"> professional HVAC solutions</span>
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed max-w-xl">
            We enjoy the reputation of being synonymous with the highest quality
            and dependability for supply, installation, repair, and maintenance
            of air-conditioning systems. Our partnership with leading equipment
            manufacturers brings you the best possible products and services.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/40?img=1"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/40?img=2"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/40?img=3"
                alt=""
              />
            </div>

            <div>
              <p className="font-semibold text-slate-900">Expert Team</p>
              <p className="text-sm text-slate-500">
                Qualified professionals ready to serve
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full">
          {/* Gradient Shadow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-sky-200 via-blue-100 to-transparent blur-xl"></div>

          {/* Image Frame */}
          <div className="relative h-120 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="./images/about1.jpeg"
              alt="HVAC Technician"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
