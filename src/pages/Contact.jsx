import React from "react";
import bgContact from "../assets/contact-bg.jpg";

export default function Contact() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage: `url(${bgContact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contact Box */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Contact Us
        </h2>

        {/* Web3Forms Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mt-6 space-y-4"
        >
          {/* Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="d30fc292-d760-4167-8290-dfd1ab5ee5aa"
          />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
