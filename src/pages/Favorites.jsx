import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaCoffee, FaMusic } from "react-icons/fa";

export default function Favorites() {
  const [favoritesData, setFavoritesData] = useState([]);
  const audioRef = useRef(null);       // 🔊 audio reference
  const [isPlaying, setIsPlaying] = useState(false); // ▶⏸ state musik

  useEffect(() => {
    fetch("/data/favorites.json")
      .then((res) => res.json())
      .then((data) => setFavoritesData(data))
      .catch((err) => console.error("Error loading favorites:", err));
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case "utensils":
        return <FaUtensils className="text-3xl text-[#2D2D2B]" />;
      case "coffee":
        return <FaCoffee className="text-3xl text-[#2D2D2B]" />;
      case "music":
        return <FaMusic className="text-3xl text-[#2D2D2B]" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen bg-[#FEF8EF] flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: Vinyl + Music */}
        <div className="relative flex justify-center items-center">
          
          {/* 🔊 audio hidden */}
          <audio ref={audioRef} src="/song/AboutYou.mp3" />

          <motion.img
            src="/img/vinyl2.png"
            alt="Vinyl Record"
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[300px] md:w-[600px] opacity-90 drop-shadow-lg"
          />

          {/* ▶ Button */}
          <button
            onClick={togglePlay}
            className="absolute bottom-10 bg-[#2D2D2B] text-white px-6 py-3 rounded-full shadow-md text-xl font-bold"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
        </div>

        {/* RIGHT: Favorites List */}
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-[#2D2D2B] mb-8"
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
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#B6CAE8]/55 rounded-full">
                  {getIcon(fav.icon)}
                </div>

                {/* Category + Items */}
                <div>
                  <h2 className="text-lg font-bold text-[#2D2D2B]">{fav.category}</h2>
                  <ul className="flex gap-2 text-sm text-gray-600 flex-wrap">
                    {fav.items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#F8F3E7] px-3 py-1 rounded-lg hover:bg-[#B6CAE8] hover:text-[#2D2D2B] transition"
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
