import React from "react";

const About = () => {
  return (
    <div>
      <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* <!-- LEFT CONTENT --> */}
          <div>
            {/* <!-- Section Tag --> */}
            <span class="text-sky-500 font-semibold tracking-wide">
              [ ABOUT US ]
            </span>

            {/* <!-- Heading --> */}
            <h2 class="mt-4 text-4xl font-bold text-slate-900 leading-tight">
              15 years of expertise in
              <span class="text-sky-500"> professional HVAC solutions</span>
            </h2>

            {/* <!-- Description --> */}
            <p class="mt-6 text-slate-600 leading-relaxed max-w-xl">
              We enjoy the reputation of being synonymous with the highest
              quality and dependability for supply, installation, repair, and
              maintenance of air-conditioning systems. Our partnership with
              leading equipment manufacturers brings you the best possible
              products and services.
            </p>

            {/* <!-- Team Info --> */}
            <div class="mt-8 flex items-center gap-4">
              {/* <!-- Avatars --> */}
              <div class="flex -space-x-3">
                <img
                  class="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/40?img=1"
                />
                <img
                  class="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/40?img=2"
                />
                <img
                  class="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/40?img=3"
                />
              </div>

              {/* <!-- Text --> */}
              <div>
                <p class="font-semibold text-slate-900">Expert Team</p>
                <p class="text-sm text-slate-500">
                  Qualified professionals ready to serve
                </p>
              </div>
            </div>
          </div>

          {/* <!-- RIGHT IMAGE --> */}
          <div class="relative">
            {/* <!-- Gradient shadow --> */}
            <div
              class="absolute -inset-4 rounded-3xl bg-gradient-to-tr
        from-sky-200 via-blue-100 to-transparent blur-xl"
            ></div>

            <img
              src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1"
              alt="HVAC Technician"
              class="relative rounded-3xl shadow-xl w-full object-cover h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
