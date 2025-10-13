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
    image: "https://images.unsplash.com/photo-1581091870622-1c8f2f3f9c9e",
    link: "/articulos/ia-en-medicina",
  },
  {
    id: 4,
    title: "El futuro del deporte inteligente",
    date: "10 Oct 2025",
    category: "Tecnología",
    description:
      "Tecnología y rendimiento: cómo los wearables cambian el entrenamiento profesional.",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    link: "/articulos/deporte-inteligente",
  },
  {
    id: 5,
    title: "El big data en el deporte de élite",
    date: "07 Oct 2025",
    category: "Deportes",
    description:
      "Los equipos de élite usan algoritmos para predecir lesiones y optimizar entrenamientos.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    link: "/articulos/deporte-y-tecnologia",
  },
  {
    id: 6,
    title: "Robótica y el empleo del futuro",
    date: "05 Oct 2025",
    category: "Ciencia",
    description:
      "Cómo la automatización reconfigura el trabajo y abre nuevas oportunidades globales.",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe",
    link: "/articulos/robotica-empleo",
  },
  {
    id: 7,
    title: "Nanotecnología y salud",
    date: "09 Oct 2025",
    category: "Ciencia",
    description:
      "Los avances en nanotecnología prometen tratamientos más eficaces y personalizados.",
    image: "https://images.unsplash.com/photo-1624705002806-5e96a5b65c0b",
    link: "/articulos/nanotecnologia-salud",
  },
];

const getArticlesByCategory = (category: string) =>
  articlesData.filter((a) => a.category === category);

const ArticlesHome = () => {
  const categories = ["Tecnología", "Ciencia", "Deportes"];
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (category: string) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div
      className="min-h-screen py-20 px-4 md:px-12 text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explora el Conocimiento por Sectores
      </motion.h2>

      {categories.map((category, i) => {
        const filtered = getArticlesByCategory(category);
        if (filtered.length === 0) return null;

        const visible = expanded[category]
          ? filtered
          : filtered.slice(0, 3);

        return (
          <motion.div
            key={category}
            className="w-full max-w-7xl mx-auto mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold border-l-4 border-indigo-500 pl-4 mb-10">
              {category}
            </h3>

            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {visible.map((article) => (
                  <motion.div
                    key={article.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-shadow"
                  >
                    <Link href={article.link}>
                      <div className="relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
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
              <button
                onClick={() => toggleCategory(category)}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all"
              >
                {expanded[category] ? "Ver menos ↑" : "Ver más ↓"}
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ArticlesHome;