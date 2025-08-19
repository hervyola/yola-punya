import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="bg-[#F5F8FB] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="relative">
          {/* Floating background effect */}
          <motion.img
            src="/img/as.png"
            alt="Background Effect"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-[550px] opacity-10 pointer-events-none"
          />

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[2.5rem] md:text-[3rem] font-extrabold text-[#024D60] uppercase mb-6 relative z-10 border-l-8 border-[#024D60] pl-4"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-[#024D60] leading-relaxed mb-6 relative z-10"
          >
            Hi! I’m <strong>Hervyola Verin Febriani</strong>, born in Rengat on February 25, 2005.
            I am a passionate developer with a strong interest in technology,
            especially in creating beautiful and functional web interfaces.
            Currently, I’m studying at <strong>Politeknik Caltex Riau</strong>,
            majoring in <strong>Informatics Engineering</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base text-[#567C8D] leading-relaxed relative z-10 italic"
          >
            With a high level of curiosity and eagerness to learn, I believe every
            project is an opportunity to grow and deliver my very best.
          </motion.p>
        </div>

        {/* Photo + Introduction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex flex-col items-center"
        >
          <div className="rounded-3xl overflow-hidden border-4 border-[#C8D9E6] shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src="/img/gy.jpg"
              alt="About Me"
              className="object-cover h-[300px] w-[340px] md:h-[280px] md:w-[500px]"
            />
          </div>

          {/* Background Image behind "Introduction" */}
          <div className="relative mt-6">
            <motion.img
              src="/img/kupu.png"
              alt="Intro Background"
              animate={{ rotate: [0, 4, -4, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-[300px] md:w-[420px] pointer-events-none"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-6xl font-signature text-[#071952] relative z-10 tracking-wide"
            >
              Introduction
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
