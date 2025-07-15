import React from "react";
import { motion } from "framer-motion";

// Images
import skyroImg from "../assets/fan1.webp";
import inaraImg from "../assets/fan2.webp";
import evaaraImg from "../assets/fan3.webp";
import pedestalImg from "../assets/pedestal.webp"; // Add your pedestal fan image here

const Product = () => {
  const ceilingFans = [
    { name: "SKYRO", image: skyroImg },
    { name: "INARA", image: inaraImg },
    { name: "eVAARA", image: evaaraImg },
  ];

  const pedestalFans = [
    { name: "PEDESTAL PRO", image: pedestalImg },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 w-full">
      {/* Ceiling Fans Section */}
      <section className="max-w-7xl mx-auto mb-20 px-4 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Ceiling Fans
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ceilingFans.map((fan, index) => (
            <motion.div
              key={index}
              className="bg-white/10 border border-white/10 backdrop-blur-md p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={fan.image}
                alt={fan.name}
                className="h-48 mx-auto object-contain mb-4"
              />
              <h3 className="text-xl font-semibold">{fan.name}</h3>
              <p className="text-gray-300 text-sm mt-2">
                Stylish, energy-efficient & whisper quiet.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pedestal Fans Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Pedestal Fans
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
          {pedestalFans.map((fan, index) => (
            <motion.div
              key={index}
              className="bg-white/10 border border-white/10 backdrop-blur-md p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={fan.image}
                alt={fan.name}
                className="h-48 mx-auto object-contain mb-4"
              />
              <h3 className="text-xl font-semibold">{fan.name}</h3>
              <p className="text-gray-300 text-sm mt-2">
                Adjustable height. Maximum airflow.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
