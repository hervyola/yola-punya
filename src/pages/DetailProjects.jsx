import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DetailProjects() {
  const { categoryId, projectId } = useParams();
  const [category, setCategory] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/data/projects.json")
      .then(res => res.json())
      .then(data => {
        const foundCategory = data.find(cat => String(cat.id) === String(categoryId));
        setCategory(foundCategory || null);

        if (foundCategory) {
          const foundProject = foundCategory.projects?.find(
            p => String(p.id) === String(projectId)
          );
          setProject(foundProject || null);
        }
      });
  }, [categoryId, projectId]);

  if (!project || !category)
    return (
      <p className="text-center mt-20 text-[#071952] font-semibold text-xl">
        Project tidak ditemukan.
      </p>
    );

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#F5EFEB" }} // background page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Teks kiri */}
        <motion.div
          className="p-10 rounded-3xl flex flex-col justify-center shadow-2xl border border-white/20"
          style={{ backgroundColor: "#E1EBF0" }} // background deskripsi
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${category.textColor}`}>
            {project.title}
          </h1>
          <p className={`text-lg leading-relaxed ${category.textColor}`}>
            {project.fullDesc}
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-block px-8 py-3 bg-[#3B6A91] text-white font-semibold rounded-2xl hover:bg-[#2b4f6c] transition-all duration-300 shadow-md"
          >
            ← Back to Projects
          </Link>
        </motion.div>

        {/* Gambar kanan */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="rounded-3xl shadow-2xl max-h-[450px] object-cover border border-white/20 transition-transform duration-500 hover:scale-105 hover:shadow-3xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
