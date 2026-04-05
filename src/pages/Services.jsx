// src/pages/Services.jsx
import React from "react";
import bgServices from "../assets/services-bg.jpg";

export default function Services() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-16"
      style={{
        backgroundImage: `url(${bgServices})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl w-full text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-10">
          Our Mehndi Services
        </h2>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Bridal Mehndi */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg 
                          transform transition duration-300 hover:scale-105 hover:bg-white/30">
            <h3 className="text-xl font-bold mb-4 text-white">
              Bridal Mehndi
            </h3>
            <ul className="text-white text-left space-y-2">
              <li>• Full Hand Bridal Design</li>
              <li>• Full Leg Bridal Design</li>
              <li>• Customized Wedding Themes</li>
              <li>• Portrait Mehndi Design</li>
              <li>• Royal Traditional Designs</li>
            </ul>
          </div>

          {/* Arabic Mehndi */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg 
                          transform transition duration-300 hover:scale-105 hover:bg-white/30">
            <h3 className="text-xl font-bold mb-4 text-white">
              Arabic Mehndi
            </h3>
            <ul className="text-white text-left space-y-2">
              <li>• Stylish Arabic Patterns</li>
              <li>• Minimal & Elegant Designs</li>
              <li>• Modern Fusion Mehndi</li>
              <li>• Quick Application Designs</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg 
                          transform transition duration-300 hover:scale-105 hover:bg-white/30">
            <h3 className="text-xl font-bold mb-4 text-white">
              Other Services
            </h3>
            <ul className="text-white text-left space-y-2">
              <li>• Festival Mehndi (Karwa Chauth, Diwali)</li>
              <li>• Party Mehndi</li>
              <li>• Kids Mehndi</li>
              <li>• Engagement Mehndi</li>
              <li>• Group Booking Available</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}