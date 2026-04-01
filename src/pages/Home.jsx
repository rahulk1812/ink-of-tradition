import React from "react";
import bgHome from "../assets/home-bg.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${bgHome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark luxury overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">

        {/* Gold Divider */}
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold gold-text drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ink of Traditions
        </motion.h1>

        {/* ✅ NEW SUBHEADING */}
        <motion.h3
          className="mt-2 text-lg md:text-xl text-yellow-300 font-medium tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Henna by Komal
        </motion.h3>

        {/* Description */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Elegant Mehndi Designs for Weddings, Festivals & Special Moments.  
          <br />
          Blending Tradition with Modern Artistry.
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full text-white font-medium 
                       bg-gradient-to-r from-[#6b0000] to-[#a52a2a] 
                       hover:from-[#8b0000] hover:to-[#c04040]
                       shadow-lg hover:shadow-xl transition duration-300"
          >
            Book Your Design
          </a>
        </motion.div>

      </div>
    </section>
  );
}