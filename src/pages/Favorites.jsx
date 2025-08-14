import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaCoffee, FaMusic } from "react-icons/fa";

export default function Favorites() {
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    fetch("/data/favorites.json")
      .then((res) => res.json())
      .then((data) => setFavoritesData(data))
      .catch((err) => console.error("Error loading favorites:", err));
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "utensils":
        return <FaUtensils className="text-5xl text-[#024D60]" />;
      case "coffee":
        return <FaCoffee className="text-5xl text-[#024D60]" />;
      case "music":
        return <FaMusic className="text-5xl text-[#024D60]" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative bg-[#F5EFEB] min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Decorative background image with floating animation */}
      <motion.img
        src="/img/as.png"
        alt="Decoration"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[900px] h-[300px] md:w-[900px] md:h-[500px] opacity-20 pointer-events-none object-contain"
      />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-[2.5rem] md:text-[4rem] font-extrabold text-[#024D60] mb-12 drop-shadow-lg"
      >
        My Favorites
      </motion.h1>

      {/* Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {favoritesData.map((fav, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // kartu muncul satu per satu
            }}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-white/60 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-white/50 transition-all duration-300 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="mb-5">{getIcon(fav.icon)}</div>

            {/* Category */}
            <h2 className="text-2xl font-bold text-[#024D60] mb-6">
              {fav.category}
            </h2>

            {/* Items */}
            <ul className="space-y-3 text-[#567C8D] font-medium">
              {fav.items.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{
                    backgroundColor: "#C8D9E6",
                    color: "#024D60",
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#F5EFEB] px-5 py-3 rounded-xl transition-colors duration-200"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
