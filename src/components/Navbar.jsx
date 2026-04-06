import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/919279974594";

  return (
    <header className="fixed top-0 w-full z-50 bg-[#2b0000]/90 backdrop-blur-md shadow-md">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 md:h-12" />
          <div>
            <div className="text-yellow-400 font-bold text-lg">
              Ink of Traditions
            </div>
            <div className="text-xs text-gray-300">
              Henna by Komal
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center text-gray-200">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#Services" className="hover:text-yellow-400">Services</a>
          <a href="#testimonials" className="hover:text-yellow-400">Testimonials</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-white font-medium 
                       bg-gradient-to-r from-[#6b0000] to-[#a52a2a] 
                       hover:from-[#8b0000] hover:to-[#c04040]"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#3a0000] px-6 py-6 text-center space-y-4">

          <a href="#home" onClick={() => setMenuOpen(false)} className="block text-white text-lg">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block text-white text-lg">About</a>
          <a href="#Services" onClick={() => setMenuOpen(false)} className="block text-white text-lg">Services</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block text-white text-lg">Testimonials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-white text-lg">Contact</a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-4 px-6 py-3 rounded-full text-white font-medium bg-green-500 hover:bg-green-600"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}