import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
  const [categories, setCategories] = useState([]);
  const sectionVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.16 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32, rotate: -2 },
    show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  };

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat data projects");
        return res.json();
      })
      .then((data) => setCategories(data || []))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  if (!categories.length) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-[#2D2D2B] text-lg font-medium">
          Tidak ada data project yang tersedia.
        </p>
      </section>
    );
  }

  return (
    <section>
      {categories.map((category, index) => (
        <motion.div
          key={category.id || index}
          className={`${category.bgColor || "bg-[#FFFCF5]"} min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden`}
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.28 }}
        >
          <motion.div
            className="absolute inset-x-0 bottom-0 h-[18vh] min-h-[110px] bg-[#B6CAE8] pointer-events-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
          />
          <motion.img
            src="/img/floral-projects.svg"
            alt=""
            aria-hidden="true"
            className="absolute right-[-88px] top-0 h-full max-h-[760px] w-auto opacity-95 pointer-events-none z-0 hidden sm:block"
            initial={{ opacity: 0, x: 90, rotate: 8 }}
            whileInView={{ opacity: 0.95, x: 0, rotate: [0, -2, 2, 0] }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.15 },
              x: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute -left-20 top-16 w-64 h-64 rounded-full bg-[#FFB2DD]/55 pointer-events-none z-0"
            animate={{ x: [0, 30, -14, 0], y: [0, -18, 12, 0], scale: [1, 1.08, 0.96, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
          />
          <motion.div
            className="absolute left-8 bottom-20 w-56 h-40 rounded-[42%] bg-[#F7D66E]/65 pointer-events-none z-0"
            animate={{ x: [0, -18, 22, 0], rotate: [0, -6, 4, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
          />

          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-5 gap-6 items-center relative z-10">

            {/* Teks kiri */}
            <motion.div
              className="flex flex-col justify-center"
              variants={itemVariants}
            >
              <h2 className="text-[3rem] font-extrabold text-[#2D2D2B] leading-none">
                PROJECT {category.id}
              </h2>
              <p className="font-signature text-3xl text-[#2D2D2B]">
                {category.title}
              </p>
            </motion.div>

            {/* Project Images */}
            <motion.div
              className="relative col-span-3 flex gap-6 items-center justify-center"
              variants={itemVariants}
            >
              {/* Background efek */}
              <img
                src="/img/efek2.png"
                alt="Background effect"
                className="absolute top-1/2 left-1/2 w-[900px] h-[450px] -translate-x-1/2 -translate-y-1/2 opacity-20 z-0 pointer-events-none"
              />

              {category.projects?.slice(0, 3).map((subProject, i) => (
                <motion.div
                  key={`${category.id}-img-${i}`}
                  className="overflow-hidden rounded-lg shadow-lg flex-1 relative z-10 bg-[#FEF8EF]"
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -12, rotate: i % 2 === 0 ? -2 : 2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <Link to={`/projects/${category.id}/${subProject.id}`}>
                    <motion.img
                      src={subProject.image}
                      alt={subProject.title}
                      className="w-full h-[300px] object-cover"
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Deskripsi kanan */}
            <motion.div
              className="flex flex-col justify-center"
              variants={itemVariants}
            >
              <p className="text-sm text-[#2D2D2B] leading-relaxed">
                {category.desc}
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
