import React from "react";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Kontak from "./Kontak";

export default function Portofolio() {
  return (
    <section className="bg-[#FFFCF5] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 relative overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-20 w-[360px] h-[260px] bg-[#B6CAE8] rounded-[48%] opacity-80 pointer-events-none"
        animate={{ x: [0, 28, -12, 0], y: [0, 16, -8, 0], rotate: [0, 7, -4, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-10 -right-16 w-[420px] h-[260px] bg-[#9AAA65] rounded-[42%] opacity-90 pointer-events-none"
        animate={{ x: [0, -30, 10, 0], y: [0, 18, -10, 0], rotate: [0, -8, 5, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 left-0 w-[320px] h-[220px] bg-[#F7D66E] rounded-[18%_48%_44%_18%] opacity-90 pointer-events-none"
        animate={{ x: [0, 22, -18, 0], y: [0, -18, 10, 0], rotate: [0, -5, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -left-16 w-[430px] h-[120px] bg-[#FFB2DD] rounded-full opacity-80 pointer-events-none"
        animate={{ x: [0, 34, -20, 0], scaleX: [1, 1.12, 0.96, 1], rotate: [0, 4, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <img
        src="/img/bungasa.png"
        alt=""
        aria-hidden="true"
        className="absolute -right-20 top-2 w-[230px] sm:w-[340px] md:w-[460px] lg:w-[560px] opacity-95 pointer-events-none z-0"
      />
      <img
        src="/img/bunga.png"
        alt=""
        aria-hidden="true"
        className="absolute -left-10 bottom-8 w-[130px] sm:w-[190px] md:w-[240px] opacity-85 pointer-events-none z-0"
      />
      <div className="max-w-6xl w-full relative">

        {/* Small Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:justify-between text-[10px] sm:text-xs uppercase tracking-widest text-[#2D2D2B] mb-4 gap-1 sm:gap-0 text-center sm:text-left"
        >
          <span>(Let’s Get to Know Me)</span>
          <span>(Hello Everyone)</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.72, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ letterSpacing: "0.04em", scale: 1.02 }}
          className="text-center text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] font-extrabold text-[#BDA6CE] leading-none relative z-0 drop-shadow-[0_5px_0_rgba(45,45,43,0.14)]"
        >
          MY PORTFOLIO
        </motion.h1>

        {/* Profile Image + Text */}
        <div className="relative w-full flex flex-col sm:flex-row justify-center items-center mt-[-2rem] sm:mt-[-4rem] z-10 gap-4 sm:gap-0">

          {/* Image */}
          <motion.img
            src="/img/yolaini.jpg"
            alt="Profile"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [0, -14, 0], rotate: [0, 1.2, -1.2, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 0.8, rotate: 1.5 }}
            className="h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover relative z-10 scale-75"
          />

          {/* Right bottom text & smokey */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-4 right-2 sm:right-4 text-right z-20 max-w-[clamp(150px,40vw,300px)]"
          >
            <div className="relative z-30">
              <p className="text-[#462C7D] font-medium text-[clamp(0.75rem,1.5vw,1.125rem)]">
                25 | 02 | 2005
              </p>
              <p className="font-signature text-[#462C7D] text-[clamp(1.25rem,2.5vw,1.875rem)]">
                Hervyola Verin Febriani
              </p>
            </div>
          </motion.div>

          {/* Left bottom short description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-4 left-2 sm:left-4 text-left z-20 max-w-[clamp(160px,35vw,280px)]"
          >
            <p className="text-[#462C7D] font-bold leading-relaxed text-[clamp(0.7rem,1.4vw,0.875rem)]">
              Hi, I’m Hervyola Verin Febriani — a Frontend Developer Enthusiast, UI/UX Design Lover, and Web Designer</p>
          </motion.div>
        </div>
      </div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 sm:mt-20 w-full"
      >
        <AboutMe />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 sm:mt-20 w-full"
      >
        <Skills />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 sm:mt-20 w-full"
      >
        <Kontak />
      </motion.div>
    </section>
  );
}
