import React from "react";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        {/* Image Section */}
        <div className="relative">
          {/* Gradient Shadow Box */}
          <div
            className="absolute -inset-4 rounded-3xl 
            bg-gradient-to-tr from-sky-200 via-blue-100 to-transparent 
            blur-xl"
          ></div>

          {/* Image Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1621905252472-943afaa20e20"
              alt="HVAC System"
              className="w-full h-150 object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div>
          <p className="text-blue-600 font-semibold tracking-widest mb-2">
            [ WHY CHOOSE US ]
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive HVAC Solutions
          </h2>

          <p className="text-gray-600 mb-6">
            All your needs under a single roof
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            We offer comprehensive services that encompass sales, planning,
            installation and maintenance of HVAC systems for homeowners and
            commercial property owners. Your total satisfaction is guaranteed by
            us.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Our Key Advantages
          </h3>

          <ul className="space-y-3 mb-8">
            {[
              "Authorized sales & service for leading brands",
              "15+ years of industry expertise",
              "Commitment to emerging technologies",
              "Customer-first mindset",
              "150+ satisfied clients",
              "Big enough for any job, detailed attention",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-blue-500 w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Get Service 🔧
            </button>

            <button className="border border-gray-300 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
