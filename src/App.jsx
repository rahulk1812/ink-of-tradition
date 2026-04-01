import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/916205641625";

  return (
    <div className="font-sans text-gray-900 scroll-smooth">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full bg-[#2b0000]/90 backdrop-blur-md z-50 border-b border-white/10 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10 md:h-12" />
            <span className="text-xl md:text-2xl font-bold text-yellow-400">
              Ink of Traditions
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center text-gray-200">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#Services" className="hover:text-yellow-400 transition">Services</a>
            <a href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>

            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-white font-medium 
                         bg-gradient-to-r from-[#6b0000] to-[#a52a2a] 
                         hover:from-[#8b0000] hover:to-[#c04040]
                         shadow-md hover:shadow-lg transition duration-300"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#2b0000] text-white p-4 space-y-3">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#Services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ================= MAIN ================= */}
      <main className="pt-20">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="Services"><Services /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={26} />
      </a>

    </div>
  );
}