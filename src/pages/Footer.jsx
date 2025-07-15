import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-slate-950 text-white backdrop-blur-md border-t border-white/10 w-full"
    >
      <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10 w-full px-4 md:px-12 max-w-7xl mx-auto">

        {/* Logo & Tagline */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-2">
            Anthem<span className="text-blue-400">Fans</span>
          </h2>
          <p className="text-gray-400">Just Play Your Anthem.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-blue-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-blue-300 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-300 transition">Products</Link></li>
            <li><Link to="/about" className="hover:text-blue-300 transition">About</Link></li>
            <li><Link to="/support" className="hover:text-blue-300 transition">Support</Link></li>
            <li><Link to="/dealer" className="hover:text-blue-300 transition">Dealers</Link></li>
            <li><Link to="/store-locator" className="hover:text-blue-300 transition">Store Locator</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-blue-400">Contact</h3>
          <p className="text-gray-300 mb-2">
            📧{" "}
            <a
              href="mailto:support@anthemfans.com"
              className="underline hover:text-blue-300"
            >
              support@anthemfans.com
            </a>
          </p>
          <p className="text-gray-300 mb-2">
            📞{" "}
            <a href="tel:+919930101710" className="underline hover:text-blue-300">
              +91 9930101710
            </a>
          </p>
          <p className="text-gray-300 mb-2">
            📍{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Plot+No.72,+GDIC,+Bethora+Industrial+Estate,+Bethora,+Ponda,+Goa+-+403409"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              Plot No.72, GDIC, Bethora Industrial Estate, Bethora, Ponda, Goa - 403409
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-3">
            <a
              href="https://www.facebook.com/anthemfans"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 text-xl"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/anthemfans"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 text-xl"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 inline">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.981.981-1.264 2.093-1.323 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 pb-6">
        © {new Date().getFullYear()} <span className="text-white">Anthem Fans</span>. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
