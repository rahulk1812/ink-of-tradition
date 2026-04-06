import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {

  const whatsappLink = "https://wa.me/919279974594";

  return (
    <div className="font-sans text-gray-900 scroll-smooth">

      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Sections */}
      <main className="pt-20">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="Services"><Services /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* ✅ Footer */}
      <Footer />

      {/* ✅ Floating WhatsApp */}
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