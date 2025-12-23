import {
  Wrench,
  Wind,
  Snowflake,
  Fan,
  Settings,
  ShieldCheck,
  Phone,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "Air Conditioner Sales",
    desc: "Sales of residential, commercial and industrial air conditioning systems.",
    // Using your 'sales.jpg' image
    img: "./images/sales.jpg",
  },
  {
    icon: Settings,
    title: "Installation Projects",
    desc: "Professional installation with certified technicians and quality assurance.",
    // ADDED: video property (Make sure the file path matches your project structure)
    img: "./images/instalation.jpeg", // Fallback if video fails
  },
  {
    icon: Wind,
    title: "VRF Systems",
    desc: "Energy efficient VRF solutions for modern buildings.",
    // Using your 'vrf.jpg' diagram
    img: "./images/vrf.jpg",
  },
  {
    icon: Fan,
    title: "Chiller Systems",
    desc: "Large-scale commercial chiller installation projects.",
    // Using an industrial chiller plant photo
    img: "./images/chellers.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Air Handling Units",
    desc: "AHU sales & services for effective air quality control.",
    img: "./images/AHU.jpeg",
  },
  {
    icon: Wrench,
    title: "Ventilation Systems",
    desc: "Complete ventilation system design & execution.",
    // Using your 'Ventilation Systems.jpg' image
    img: "./images/ventilation.jpg",
  },
];

export default function ServicesPage() {
  const scrollToServices = () => {
    document
      .getElementById("services-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full font-sans antialiased">
      {/* HERO SECTION */}
      <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/background.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white w-full">
          <div className="animate-fade-in-left">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              OUR <span className="text-cyan-400">SERVICES</span>
            </h1>
            <p className="mt-6 max-w-xl text-gray-200 text-lg md:text-xl font-light">
              Comprehensive HVAC solutions designed to become your most
              preferred service brand.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button
                onClick={scrollToServices}
                className="group bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-full flex items-center gap-3 font-bold transition-all shadow-2xl text-base"
              >
                Explore Services
                <ChevronDown
                  size={20}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>

              <div className="flex items-center gap-4 group">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 group-hover:bg-cyan-500 transition-colors">
                  <Phone size={24} className="text-white" fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                    Call Us Now
                  </span>
                  <span className="text-2xl md:text-3xl font-black tracking-tighter">
                    1800 22 1313
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="py-24 text-center px-6 bg-white">
        <p className="text-xs text-cyan-600 font-black tracking-[0.4em] uppercase mb-4">
          [ OUR VISION ]
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 italic max-w-4xl mx-auto leading-tight">
          #1 Resources of all HVAC work
        </h2>
        <div className="w-24 h-1.5 bg-cyan-500 mx-auto mt-8 mb-8 rounded-full"></div>
        <p className="max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed font-light">
          Our offerings are crafted to deliver excellence in every aspect of
          HVAC services. From sales to installation, maintenance to specialized
          solutions, we ensure your complete satisfaction.
        </p>
      </section>

      {/* SERVICES GRID (LARGE PHOTOS) */}
      <section id="services-grid" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs text-cyan-600 font-black tracking-[0.4em] uppercase mb-3">
              [ CORE SERVICES ]
            </p>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Sales & Installation Solutions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((item, index) => (
              <div
                key={index}
                className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div className="bg-cyan-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-black text-2xl uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                  <div className="mt-4 w-10 h-1 bg-cyan-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
