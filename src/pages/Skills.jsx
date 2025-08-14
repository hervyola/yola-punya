// src/pages/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaVideo,
  FaDatabase,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { icon: <FaCode />, title: "Web Development", desc: "HTML5, CSS3, Node.js JavaScript, React.js, PHP" },
    { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Figma, Adobe XD, Tailwind CSS, Canva" },
    { icon: <FaVideo />, title: "Video Editing", desc: "CapCut, Adobe Premiere Pro, Canva" },
    { icon: <FaDatabase />, title: "Database Management", desc: "Supabase, MySQL" },
    { icon: <FaLaptopCode />, title: "Programming", desc: "Python, Java, C#, JavaScript, PHP" },
    { icon: <FaTools />, title: "Software Tools", desc: "Figma, Excel, MS Project, StartUML, Laragon, Vercel, github" },
  ];

  return (
    <section className="bg-[#F5EFEB] min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#024D60] mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>
      <motion.p
        className="text-[#567C8D] text-lg max-w-xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Here are my skills in technology and creativity.      </motion.p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#E0D8D1] flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{
              y: -8,
              boxShadow: "0px 8px 20px rgba(2, 77, 96, 0.2)",
            }}
          >
            <div className="text-[#024D60] text-5xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-[#024D60] mb-2">{skill.title}</h3>
            <p className="text-[#567C8D]">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
