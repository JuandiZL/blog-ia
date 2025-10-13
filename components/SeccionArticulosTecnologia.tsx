"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const articlesData = [
  {
    id: 1,
    title: "Como la IA transforma el futuro",
    date: "8 Oct 2025",
    category: "Tecnología",
    description:
      "Explora cómo la inteligencia artificial impulsa la automatización y la innovación.",
    image: "/images/portadaArticuloIA2025.webp",
    link: "/articulos/como-la-ia-transforma-negocios-2025",
  },
  {
    id: 2,
    title: "Computación Cuántica",
    date: "12 Oct 2025",
    category: "Tecnología",
    description:
      "Los científicos desarrollan nuevos materiales con base en nanotecnología.",
    image: "/images/PortadaArticuloComputacionCuantica.webp",
    link: "/articulos/Computacion-Cuantica-Aplicaciones",
  },
  {
    id: 3,
    title: "La IA en la medicina moderna",
    date: "08 Oct 2025",
    category: "Tecnología",
    description:
      "La inteligencia artificial está revolucionando diagnósticos y tratamientos personalizados.",
    image: "/images/PortadaArticuloIaenMedicinaModerna.webp",
    link: "/articulos/ia-en-medicina-moderna",
  },
  {
    id: 4,
    title: "El futuro del deporte inteligente",
    date: "13 Oct 2025",
    category: "Tecnología",
    description:
      "Tecnología y rendimiento: cómo los wearables cambian el entrenamiento profesional.",
    image: "/images/PortadaElFuturoDelDeporteInteligente.webp",
    link: "/articulos/El-futuro-del-deporte-inteligente",
  },
];

const getArticlesByCategory = (category: string) =>
  articlesData.filter((a) => a.category === category);

const categoryStyles: Record<string, string> = {
  Tecnología: "border-cyan-400 text-cyan-400",
  Ciencia: "border-green-400 text-green-400",
  Deportes: "border-yellow-400 text-yellow-400",
};

const ArticulosTecnologiaHome = () => {
  const categories = ["Tecnología"];
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (category: string) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div
      className="min-h-screen py-20 px-4 md:px-12 text-white relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(10, 30, 53, 0.25), transparent 60%),
          radial-gradient(circle at bottom right, rgba(0, 30, 80, 0.35), transparent 70%),
          linear-gradient(to bottom, rgba(5,10,25,0.95), rgba(0,0,0,0.98))
        `,
      }}
    >
      <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none"></div>

      {categories.map((category, i) => {
        const filtered = getArticlesByCategory(category);
        if (filtered.length === 0) return null;
        const visible = expanded[category] ? filtered : filtered.slice(0, 3);

        return (
          <motion.div
            key={category}
            className="w-full max-w-7xl mx-auto mb-20 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <h3
              className={`text-2xl md:text-3xl font-semibold border-l-4 pl-4 mb-10 ${
                categoryStyles[category] || "border-indigo-400 text-indigo-400"
              }`}
            >
              {category}
            </h3>

            <motion.div
              layout
              transition={{
                layout: { duration: 0.25, ease: "easeInOut" },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {visible.map((article) => (
                  <motion.div
                    key={article.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-shadow"
                  >
                    <Link href={article.link}>
                      <div className="relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-semibold">
                          {article.category}
                        </div>
                      </div>
                      <div className="p-5 flex flex-col justify-between">
                        <div>
                          <h4 className="text-lg font-semibold mb-1 line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-sm text-gray-300 mb-2">
                            {article.date}
                          </p>
                          <p className="text-gray-200 text-sm mb-3 leading-relaxed line-clamp-3">
                            {article.description}
                          </p>
                        </div>
                        <span className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                          Leer más →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="flex justify-center mt-10">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => toggleCategory(category)}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium rounded-full transition-all"
              >
                {expanded[category] ? "Ver menos ↑" : "Ver más ↓"}
              </motion.button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ArticulosTecnologiaHome;