import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Zap, Volume2, Shield } from "lucide-react";

// Import fan images
import skyroImg from "../assets/fan1.webp";
import inaraImg from "../assets/fan2.webp";
import evaaraImg from "../assets/fan3.webp";
import fanRotatingGif from "../assets/fan-rotating.gif";
import pedestalImg from "../assets/pedestal.webp";

const fanData = {
  skyro: {
    name: "SKYRO",
    image: skyroImg,
    price: "₹3,999",
    rating: 4.8,
    description: "The SKYRO ceiling fan combines cutting-edge BLDC motor technology with elegant design. Perfect for modern homes seeking efficiency and style.",
    features: [
      "BLDC Motor - Ultra energy efficient",
      "Remote Control with 6 speed settings",
      "Anti-dust coating for easy maintenance",
      "Aerodynamic blade design for maximum airflow",
      "Whisper-quiet operation below 35dB"
    ],
    specifications: {
      "Motor Type": "BLDC (Brushless DC)",
      "Power Consumption": "28W",
      "Air Delivery": "230 CMM",
      "Speed": "300 RPM",
      "Sweep": "1200mm",
      "Warranty": "2 Years"
    }
  },
  inara: {
    name: "INARA",
    image: inaraImg,
    price: "₹4,499",
    rating: 4.9,
    description: "INARA represents the pinnacle of ceiling fan engineering with premium materials and smart features for the discerning homeowner.",
    features: [
      "Premium BLDC Motor technology",
      "Smart home integration ready",
      "LED light with dimmer control",
      "Rust-proof aluminum body",
      "Energy Star certified"
    ],
    specifications: {
      "Motor Type": "BLDC Premium",
      "Power Consumption": "32W",
      "Air Delivery": "250 CMM",
      "Speed": "320 RPM",
      "Sweep": "1200mm",
      "Warranty": "3 Years"
    }
  },
  evaara: {
    name: "eVAARA",
    image: evaaraImg,
    price: "₹3,699",
    rating: 4.7,
    description: "eVAARA offers exceptional value with reliable performance and modern aesthetics. The perfect choice for everyday comfort.",
    features: [
      "Efficient BLDC motor",
      "Decorative LED lighting",
      "Multiple finish options",
      "Easy installation design",
      "Low maintenance operation"
    ],
    specifications: {
      "Motor Type": "BLDC Standard",
      "Power Consumption": "25W",
      "Air Delivery": "220 CMM",
      "Speed": "280 RPM",
      "Sweep": "1200mm",
      "Warranty": "2 Years"
    }
  },
  spinz: {
    name: "SPINZ",
    image: fanRotatingGif,
    price: "₹4,999",
    rating: 4.9,
    description: "SPINZ is our premium rotating fan that showcases advanced engineering with dynamic movement and superior airflow distribution.",
    features: [
      "Revolutionary rotating design",
      "360-degree airflow coverage",
      "Advanced BLDC motor",
      "Smart oscillation control",
      "Premium finish materials"
    ],
    specifications: {
      "Motor Type": "BLDC Advanced",
      "Power Consumption": "35W",
      "Air Delivery": "280 CMM",
      "Speed": "350 RPM",
      "Sweep": "1200mm",
      "Warranty": "3 Years"
    }
  },
  pedestalpro: {
    name: "PEDESTAL PRO",
    image: pedestalImg,
    price: "₹2,999",
    rating: 4.6,
    description: "PEDESTAL PRO delivers powerful airflow with adjustable height and tilt features. Perfect for versatile cooling solutions.",
    features: [
      "Adjustable height mechanism",
      "90-degree tilt adjustment",
      "Powerful motor for maximum airflow",
      "Stable base design",
      "Easy mobility with wheels"
    ],
    specifications: {
      "Motor Type": "Induction Motor",
      "Power Consumption": "75W",
      "Air Delivery": "180 CMM",
      "Speed": "1350 RPM",
      "Height": "Adjustable 48-52 inches",
      "Warranty": "2 Years"
    }
  }
};

const FanDetail = () => {
  const { fanId } = useParams();
  const fan = fanData[fanId];

  if (!fan) {
    return (
      <div className="bg-[#1c1c1c] text-white min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#ba6a5a] mb-4">Fan not found</h2>
          <Link to="/products" className="text-[#e49385] hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-[#e49385] hover:text-[#ba6a5a] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Fan Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#2f2f2f] rounded-xl p-8 text-center"
          >
            <img
              src={fan.image}
              alt={fan.name}
              className="w-full max-w-md mx-auto h-80 object-contain"
            />
          </motion.div>

          {/* Fan Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-[#ba6a5a] mb-2">
                Anthem {fan.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-[#e49385]">{fan.price}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-300">{fan.rating}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{fan.description}</p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold text-[#e49385] mb-4">Key Features</h3>
              <ul className="space-y-2">
                {fan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-[#ba6a5a] mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Icons */}
            <div className="flex gap-6 py-4">
              <div className="text-center">
                <Zap className="w-8 h-8 text-[#e49385] mx-auto mb-1" />
                <span className="text-xs text-gray-400">Energy Efficient</span>
              </div>
              <div className="text-center">
                <Volume2 className="w-8 h-8 text-[#e49385] mx-auto mb-1" />
                <span className="text-xs text-gray-400">Quiet Operation</span>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-[#e49385] mx-auto mb-1" />
                <span className="text-xs text-gray-400">2-3 Year Warranty</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#ba6a5a] hover:bg-[#e49385] text-white px-6 py-3 rounded-lg font-semibold transition flex-1">
                Buy Now
              </button>
              <button className="border border-[#ba6a5a] text-[#ba6a5a] hover:bg-[#ba6a5a] hover:text-white px-6 py-3 rounded-lg font-semibold transition flex-1">
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>

        {/* Specifications Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-[#2f2f2f] rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-[#e49385] mb-6">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(fan.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b border-[#444] pb-2">
                <span className="text-gray-400">{key}</span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FanDetail;
