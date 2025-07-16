import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Import assets
import skyroImg from "../assets/fan1.webp";
import inaraImg from "../assets/fan2.webp";
import evaaraImg from "../assets/fan3.webp";
import pedestalImg from "../assets/pedestal.webp";
import anthemLogo from "../assets/Anthem-logo.png"; // ✅ Logo

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    { to: "#home", label: "Home", section: "home" },
    { to: "#products", label: "Products", section: "products" },
    { to: "#about", label: "About Us", section: "about" },
    { to: "#dealer", label: "Dealers", section: "dealer" },
    { to: "#store-locator", label: "Store Locator", section: "store-locator" },
    { to: "/support", label: "Support" },
    { to: "#contact", label: "Contact", section: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", "products", "about", "dealer", "contact"];
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, to) => {
    if (to.startsWith("#")) {
      e.preventDefault();
      const id = to.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 64,
          behavior: "smooth",
        });
      }
      setMobileMenuOpen(false);
    }
  };

  const ceilingFans = [
    { name: "SKYRO", image: skyroImg },
    { name: "INARA", image: inaraImg },
    { name: "eVAARA", image: evaaraImg },
  ];
  const pedestalFans = [{ name: "PEDESTAL PRO", image: pedestalImg }];

  useEffect(() => {
    if (!showProductsDropdown) return;
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowProductsDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showProductsDropdown]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="mt-3 mb-3 rounded-2xl shadow-md bg-white/80 backdrop-blur-md border border-blue-100 flex justify-between items-center px-4 py-2 md:py-3 transition-all duration-300">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 text-3xl font-extrabold text-blue-700 tracking-tight"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <img
              src={anthemLogo}
              alt="Anthem Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-2 relative items-center h-12">
            {navLinks.map((link) =>
              link.label === "Products" ? (
                <div
                  key={link.to}
                  className="relative flex items-center h-full"
                  onMouseEnter={() => setShowProductsDropdown(true)}
                  onMouseLeave={() => setShowProductsDropdown(false)}
                  ref={dropdownRef}
                >
                  <a
                    href={link.to}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className={`group flex items-center h-full px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${
                      activeSection === link.section
                        ? "text-blue-600"
                        : "text-gray-800"
                    } hover:text-blue-600 hover:bg-blue-50 relative`}
                    style={{ height: "48px" }}
                  >
                    {link.label}
                    <span className="ml-1 text-xs">&#9662;</span>
                    <span
                      className={`absolute left-4 right-4 bottom-1 h-0.5 rounded bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                        activeSection === link.section
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      } group-hover:opacity-100 group-hover:scale-x-100`}
                    />
                  </a>

                  {/* Dropdown */}
                  {showProductsDropdown && (
                    <div
                      className="absolute left-0 top-full mt-3 w-[600px] bg-white/95 border border-blue-100 rounded-2xl shadow-2xl p-6 z-50 animate-fade-in"
                      onMouseEnter={() => setShowProductsDropdown(true)}
                      onMouseLeave={() => setShowProductsDropdown(false)}
                    >
                      <div>
                        <div className="mb-2 text-lg font-bold text-blue-700">Ceiling Fans</div>
                        <div className="flex gap-4 mb-4">
                          {ceilingFans.map((fan) => (
                            <div
                              key={fan.name}
                              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-3 text-center w-1/3 shadow hover:shadow-lg transition"
                            >
                              <img src={fan.image} alt={fan.name} className="h-20 mx-auto mb-2" />
                              <div className="font-semibold text-blue-700">{fan.name}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mb-2 text-lg font-bold text-blue-700">Pedestal Fans</div>
                        <div className="flex gap-4">
                          {pedestalFans.map((fan) => (
                            <div
                              key={fan.name}
                              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-3 text-center w-1/4 shadow hover:shadow-lg transition"
                            >
                              <img src={fan.image} alt={fan.name} className="h-20 mx-auto mb-2" />
                              <div className="font-semibold text-blue-700">{fan.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : link.to.startsWith("#") ? (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className={`group flex items-center h-full px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${
                    activeSection === link.section
                      ? "text-blue-600"
                      : "text-gray-800"
                  } hover:text-blue-600 hover:bg-blue-50 relative`}
                  style={{ height: "48px" }}
                >
                  {link.label}
                  <span
                    className={`absolute left-4 right-4 bottom-1 h-0.5 rounded bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                      activeSection === link.section
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    } group-hover:opacity-100 group-hover:scale-x-100`}
                  />
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`group flex items-center h-full px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${
                    location.pathname === link.to
                      ? "text-blue-600"
                      : "text-gray-800"
                  } hover:text-blue-600 hover:bg-blue-50 relative`}
                  style={{ height: "48px" }}
                >
                  {link.label}
                  <span
                    className={`absolute left-4 right-4 bottom-1 h-0.5 rounded bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                      location.pathname === link.to
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    } group-hover:opacity-100 group-hover:scale-x-100`}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-700 bg-blue-100/90 rounded-full p-2 shadow hover:bg-blue-200 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed left-0 right-0 top-[70px] bg-white/95 border-b border-blue-100 shadow-xl rounded-b-2xl px-6 pb-4 pt-2 space-y-4 z-40 transition-all duration-300 ${
          mobileMenuOpen ? "block animate-slide-down" : "hidden"
        }`}
        style={{ backdropFilter: "blur(12px)" }}
      >
        {navLinks.map((link) =>
          link.to.startsWith("#") ? (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => handleNavClick(e, link.to)}
              className={`block px-3 py-2 rounded-lg font-semibold text-base ${
                activeSection === link.section
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-800"
              } hover:text-blue-600 hover:bg-blue-50 transition`}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-3 py-2 rounded-lg font-semibold text-base ${
                location.pathname === link.to
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-800"
              } hover:text-blue-600 hover:bg-blue-50 transition`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.25s ease; }

        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slide-down 0.25s ease; }
      `}</style>
    </header>
  );
};

export default Header;
