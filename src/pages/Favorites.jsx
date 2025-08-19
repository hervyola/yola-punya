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
        return <FaUtensils className="text-3xl text-[#024D60]" />;
      case "coffee":
        return <FaCoffee className="text-3xl text-[#024D60]" />;
      case "music":
        return <FaMusic className="text-3xl text-[#024D60]" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen bg-[#F5F8FB] flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: Vinyl Decoration */}
        <div className="relative flex justify-center items-center">
          <motion.img
            src="/img/vinyl.png" // tambahin vinyl.png di /public/img/
            alt="Vinyl Record"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[300px] md:w-[600px] opacity-90 drop-shadow-lg"
          />
          {/* Tombol play/pause di atas vinyl */}
          <button className="absolute bottom-10 bg-[#024D60] text-white px-4 py-2 rounded-full shadow-md">
            ▶
          </button>
        </div>

        {/* RIGHT: Favorites List */}
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-[#024D60] mb-8"
          >
            My Favorites
          </motion.h1>

          <div className="space-y-6">
            {favoritesData.map((fav, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#E4EEF5] rounded-full">
                  {getIcon(fav.icon)}
                </div>

                {/* Category + Items */}
                <div>
                  <h2 className="text-lg font-bold text-[#024D60]">{fav.category}</h2>
                  <ul className="flex gap-2 text-sm text-gray-600 flex-wrap">
                    {fav.items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#F5F8FB] px-3 py-1 rounded-lg hover:bg-[#C8D9E6] hover:text-[#024D60] transition"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
