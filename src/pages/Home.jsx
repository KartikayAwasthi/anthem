import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Images
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.webp";
import fan1 from "../assets/fan1.webp";
import fan2 from "../assets/fan2.webp";
import fan3 from "../assets/fan3.webp";

const Home = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-slate-950 text-white">
      {/* ✅ Hero Carousel */}
      <section className="min-h-screen w-full flex items-center justify-center snap-start bg-slate-950">
        <div className="fixed inset-0 z-0">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            interval={3000}
            animation="fade"
            transitionTime={1000}
            className="w-full h-screen"
            renderIndicator={(_, isSelected) =>
              <span
                className={`inline-block mx-1 w-3 h-3 rounded-full ${isSelected ? "bg-blue-400" : "bg-gray-600"}`}
              />
            }
          >
            {[banner1, banner2, banner3, banner4].map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  alt={`Banner ${i + 1}`}
                  className="object-cover w-full h-screen"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </Carousel>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90 pointer-events-none" />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-screen">
          {/* Optionally add overlay text or CTA here */}
        </div>
      </section>

      {/* ✅ Top Picks */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-slate-900 snap-start w-full px-4 md:px-12 py-16 rounded-3xl shadow-xl my-12">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Our Top Picks
        </motion.h2>

        
        <p className="text-gray-300 mb-10">Engineered for power, style & silence.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          {[{ image: fan1, name: "SKYRO" }, { image: fan2, name: "INARA" }, { image: fan3, name: "eVAARA" }].map((fan, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-2xl transition border border-white/10"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={fan.image} alt={fan.name} className="h-44 w-full object-contain mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Anthem {fan.name}</h3>
              <p className="text-gray-300 text-sm">Silent operation, smart control, superior airflow.</p>
              <Link to="/products" className="inline-block mt-4 text-blue-400 hover:underline">
                View Details →
              </Link>
            </motion.div>
          ))}
          {/* Add Dealers card */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-2xl transition border border-white/10 flex flex-col items-center justify-center"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="h-44 w-full flex items-center justify-center mb-4">
              <span className="text-6xl">🏪</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Dealers</h3>
            <p className="text-gray-300 text-sm">Find certified Anthem dealers near you.</p>
            <Link to="#dealer" className="inline-block mt-4 text-blue-400 hover:underline">
              Find Dealers →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ✅ Why Choose Anthem */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-slate-950 snap-start w-full px-4 md:px-12 py-16 rounded-3xl shadow-xl my-12">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Anthem?
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-400 mb-12">
          Our fans are engineered with precision to deliver unmatched efficiency, durability, and design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-full max-w-5xl">
          {[
            { emoji: "⚡️", title: "BLDC Motor", desc: "Only 3W–35W power usage. Saves ₹1500/year." },
            { emoji: "🌀", title: "Aerodynamic Blades", desc: "High airflow. Low noise." },
            { emoji: "🧲", title: "100% Copper Wiring", desc: "Long-lasting, safe & efficient." },
            { emoji: "🧼", title: "Anti-Dust Coating", desc: "Reduces cleaning frequency." },
            { emoji: "🎨", title: "Elegant Design", desc: "Perfectly blends with interiors." },
            { emoji: "🛡️", title: "Rust-Proof Body", desc: "Weatherproof durability." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-left border border-white/10 shadow hover:shadow-lg transition"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-3">{feature.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
