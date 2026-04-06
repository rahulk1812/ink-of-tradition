import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        
        {/* Left: Brand */}
        <div>
          <div className="font-bold text-lg">Ink of traditions</div>
          <div className="text-sm text-gray-400">
            Professional Mehndi Artist • Ranchi, Jharkhand
          </div>
          <div className="mt-3 text-sm text-gray-500">
            © {new Date().getFullYear()} Ink of Traditions
          </div>
        </div>

        {/* Middle: Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="text-sm">📞 +91 9279974594</p>
          <p className="text-sm">✉ komalkumari09a28@gmail.com</p>
        </div>

        {/* Right: Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/share" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="https://wa.me/919279974594" target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-green-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-3 text-center text-sm text-gray-400">
        Made by{" "}
        <a
          href="https://www.linkedin.com/company/ulexsys"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 font-semibold hover:underline"
        >
          Ulexsys
        </a>
      </div>
    </footer>
  );
}
