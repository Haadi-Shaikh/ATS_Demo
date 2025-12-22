import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  const links = ["Home", "Our Services", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-[98%] m-4 rounded-3xl z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#132440] shadow-md rounded-none mt-0 w-full ml-0"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <h1
          className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
            scrolled ? "text-[#0BA6DF]" : "text-[#0BA6DF]"
          }`}
        >
          ATS Aircon
        </h1>

        {/* Center: Links */}
        <ul
          className={`hidden md:flex flex-1 justify-center space-x-10 font-medium transition-colors duration-300 ${
            scrolled ? "text-white" : "text-white"
          }`}
        >
          {links.map((link) => (
            <li key={link} className="relative cursor-pointer group">
              <span className="transition-colors duration-300 group-hover:text-[#0BA6DF]">
                {link}
              </span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#0BA6DF] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right: Follow Us */}
        <div className="relative hidden md:block ml-auto">
          <button
            onClick={() => setSocialOpen(!socialOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0BA6DF] text-white font-medium hover:bg-[#3396D3] transition"
          >
            Follow Us <ChevronDown size={18} />
          </button>

          <div
            className={`absolute right-0 mt-3 w-48 rounded-xl bg-white shadow-lg border transition-all duration-300 ${
              socialOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <ul className="py-2 text-gray-700">
              <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Instagram size={18} /> Instagram
              </li>
              <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Facebook size={18} /> Facebook
              </li>
              <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Twitter size={18} /> Twitter
              </li>
              <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Linkedin size={18} /> LinkedIn
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto text-gray-700"
        >
          {open ? (
            <X size={28} color="white" />
          ) : (
            <Menu size={28} color="white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-4 top-[90px] rounded-3xl bg-[#132440] shadow-2xl overflow-hidden transition-all duration-500 ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col divide-y divide-white/10">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => {
                setTimeout(() => setOpen(false), 200);
              }}
              className="
    group
    px-6 py-4
    text-center
    text-white text-lg font-medium tracking-wide
    transition-all duration-300 ease-out
    hover:bg-white/10
    active:bg-white/20
  "
            >
              <span
                className="
      inline-block
      transition-transform duration-300
      group-hover:translate-x-1
      active:translate-x-1
    "
              >
                {link}
              </span>
            </li>
          ))}

          {/* Mobile Follow Us */}
          <li className="px-6 py-5">
            <p className="text-sm uppercase tracking-wider text-white/60 text-center mb-4">
              Follow Us
            </p>
            <div className="flex justify-center gap-6 text-white">
              <Instagram className="hover:text-[#0BA6DF] transition" />
              <Facebook className="hover:text-[#0BA6DF] transition" />
              <Twitter className="hover:text-[#0BA6DF] transition" />
              <Linkedin className="hover:text-[#0BA6DF] transition" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
