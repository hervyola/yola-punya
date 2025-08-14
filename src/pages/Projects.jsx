import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <section>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className={`${project.bgColor} min-h-screen flex items-center justify-center px-6 py-12`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
            
            {/* Teks besar kiri */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[3rem] font-extrabold text-[#071952] leading-none">
                PROJECT {project.id}
              </h2>
              <p className="font-signature text-3xl text-[#071952]">
                {project.title}
              </p>
            </motion.div>

            {/* Project Images */}
            <motion.div
              className="relative col-span-3 flex gap-6 items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Gambar background dekorasi */}
              <img
                src="/img/efek2.png"
                alt="Background Decor"
                className="absolute top-1/2 left-1/2 w-[900px] h-[450px] -translate-x-1/2 -translate-y-1/2 opacity-40 z-0 pointer-events-none"
              />

              {project.images.slice(0, 3).map((img, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-lg shadow-lg flex-1 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src={img}
                    alt={`Project ${project.id} - ${i + 1}`}
                    className="w-full h-[300px] object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Deskripsi kanan */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-[#071952] leading-relaxed">
                {project.desc}
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
