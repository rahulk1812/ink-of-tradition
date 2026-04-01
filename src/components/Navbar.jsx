import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#2b0000]/90 backdrop-blur-md shadow-md">
      
      <div className="container flex items-center justify-between py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Ink of Traditions"
            className="w-12 h-12 object-contain"
          />

          <div>
            <div className="text-lg font-bold text-yellow-400">
              Ink of Traditions
            </div>
            <div className="text-xs text-gray-300">
              Henna by Komal
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          
          <Link
            to="/"
            className="text-gray-200 hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-200 hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/services"
            className="text-gray-200 hover:text-yellow-400 transition duration-300"
          >
            Services
          </Link>

          <Link
            to="/testimonials"
            className="text-gray-200 hover:text-yellow-400 transition duration-300"
          >
            Testimonials
          </Link>

          <Link
            to="/contact"
            className="text-gray-200 hover:text-yellow-400 transition duration-300"
          >
            Contact
          </Link>

          {/* WhatsApp Button (MATCHING HERO BUTTON 🔥) */}
          <a
            href="https://wa.me/916205641625"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-white font-medium 
                       bg-gradient-to-r from-red-700 to-red-500 
                       hover:from-red-800 hover:to-red-600
                       shadow-lg hover:shadow-xl transition duration-300"
          >
            WhatsApp
          </a>

        </nav>
      </div>
    </header>
  );
}