import React from "react";
import { FaStar } from "react-icons/fa";
import bgTestimonials from "../assets/testimonials-bg.jpg";

export default function Testimonials() {
  const reviews = [
    {
      name: "Neha Sharma",
      type: "Bride",
      review: "Absolutely loved the bridal mehndi! The design was so detailed and beautiful.",
    },
    {
      name: "Priya Verma",
      type: "Festival Client",
      review: "Very professional and creative work. Got so many compliments at the function!",
    },
    {
      name: "Anjali Singh",
      type: "Party Client",
      review: "Quick and elegant Arabic designs. Perfect for parties and small events.",
    },
    {
      name: "Ritu Kumari",
      type: "Engagement Client",
      review: "Loved the creativity and attention to detail. Highly recommended!",
    },
    {
      name: "Sneha Gupta",
      type: "Regular Client",
      review: "Beautiful mehndi designs and very friendly service. Will book again!",
    },
    {
      name: "Pooja Mishra",
      type: "Wedding Client",
      review: "Amazing experience! The designs were unique and long-lasting.",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-16"
      style={{
        backgroundImage: `url(${bgTestimonials})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl w-full text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((client, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-white 
                         hover:scale-105 transition duration-300"
            >
              <p className="italic">"{client.review}"</p>

              {/* Stars */}
              <div className="flex justify-center mt-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Name */}
              <p className="mt-4 font-semibold">{client.name}</p>

              {/* Type */}
              <p className="text-sm text-gray-300">{client.type}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}