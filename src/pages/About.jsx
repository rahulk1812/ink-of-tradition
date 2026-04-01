import React from "react";
import bgAbout from "../assets/about-bg.jpg";

export default function About() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: `url(${bgAbout})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Henna by Komal
        </h2>
        <p className="mt-4 text-lg text-gray-800">
          Henna by Komal is dedicated to creating beautiful and intricate mehndi 
          <br />designs that celebrate tradition and elegance. <br /><br />

         We specialize in bridal, festive, and custom henna designs, <br />
          crafted with precision and creativity to match every occasion.<br /> 
         Each design reflects a blend of cultural heritage and modern artistry.<br /><br />

         Our goal is to make every moment special by adding a touch of beauty and <br />tradition to your celebrations. <br />
         With passion, patience, and attention to detail, <br />
        we ensure that every client leaves with a smile and a design they love.
        </p>
      </div>
    </section>
  );
}
