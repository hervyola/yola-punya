import React from "react";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Kontak from "./Kontak";

export default function Portofolio() {
  return (
    <section className="bg-[#F5F8FB] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 relative overflow-hidden">
      <div className="max-w-6xl w-full relative">

        {/* Small Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:justify-between text-[10px] sm:text-xs uppercase tracking-widest text-[#567C8D] mb-4 gap-1 sm:gap-0 text-center sm:text-left"
        >
          <span>(Let’s Get to Know Me)</span>
          <span>(Hello Everyone)</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] font-extrabold text-[#024D60] leading-none relative z-0"
        >
          MY PORTFOLIO
        </motion.h1>

        {/* Profile Image + Text */}
        <div className="relative w-full flex flex-col sm:flex-row justify-center items-center mt-[-2rem] sm:mt-[-4rem] z-10 gap-4 sm:gap-0">

          {/* Image */}
          <motion.img
            src="/img/alex.png"
            alt="Profile"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover relative z-10"
          />

          {/* Right bottom text & smokey */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-4 right-2 sm:right-4 text-right z-20 max-w-[clamp(150px,40vw,300px)]"
          >
            <img
              src="/img/alext.png"
              alt="Smokey Effect"
              className="absolute bottom-0 right-0 w-[clamp(80px,20vw,220px)] opacity-30 pointer-events-none"
            />
            <div className="relative z-30">
              <p className="text-[#024D60] font-medium text-[clamp(0.75rem,1.5vw,1.125rem)]">
                25 | 02 | 2005
              </p>
              <p className="font-signature text-[#024D60] text-[clamp(1.25rem,2.5vw,1.875rem)]">
                Hervyola Verin Febriani
              </p>
            </div>
          </motion.div>

          {/* Left bottom short description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-4 left-2 sm:left-4 text-left z-20 max-w-[clamp(160px,35vw,250px)]"
          >
            <p className="text-[#024D60] font-bold leading-relaxed text-[clamp(0.7rem,1.4vw,0.875rem)]">
              Hi, I’m Hervyola Verin Febriani — a Frontend Developer Enthusiast.
            </p>
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
