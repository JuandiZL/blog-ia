"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import React from "react";

interface ViralNews {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
}

const viralData: ViralNews[] = [
  {
    id: 1,
    title: "IA descubre nuevo biomarcador en el cerebro",
    date: "15 Oct 2025",
    image: "/images/viral1.webp",
    link: "/articulos/ia-biomarcador",
  },
  {
    id: 2,
    title: "Avances en neurofeedback deportivo con IA",
    date: "14 Oct 2025",
    image: "/images/viral2.webp",
    link: "/articulos/neurofeedback-deporte",
  },
  {
    id: 3,
    title: "Algoritmos mejoran predicción de lesiones",
    date: "13 Oct 2025",
    image: "/images/viral3.webp",
    link: "/articulos/prediccion-lesiones",
  },
];

const ViralSection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#050505] via-[#0a0f1c] to-[#0b1a2d] text-white">
      {/* DEGRADADO SUPERIOR EN DIAGONAL */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-br from-[#001a33] to-transparent rotate-180 skew-y-3 opacity-60"></div>

      {/* TÍTULO */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 mb-16">
        <motion.h2
          className="relative text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide inline-flex items-center gap-3"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TrendingUp className="w-9 h-9 text-cyan-400 drop-shadow-lg" />
          <span className="animate-text-glow">Noticias más virales</span>
        </motion.h2>
      </div>

      {/* GRID DE CARDS */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {viralData.map((item, index) => (
          <motion.div
            key={item.id}
            className="rounded-xl overflow-hidden bg-gradient-to-b from-[#111827]/60 to-[#0b1323]/50 border border-white/10 shadow-md hover:shadow-cyan-400/20 transition-all duration-300 backdrop-blur-lg"
            whileHover={{ scale: 1.03, y: -3 }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
          >
            <Link href={item.link}>
              <div className="relative w-full h-32 md:h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">{item.date}</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-cyan-400/30 w-fit"
                >
                  Ver noticia
                  <TrendingUp size={16} className="text-white" />
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* DEGRADADO INFERIOR EN DIAGONAL */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-tr from-[#001a33] to-transparent skew-y-3 opacity-60"></div>

      {/* ANIMACIÓN DE BRILLO DEL TÍTULO */}
      <style jsx>{`
        @keyframes glow {
          0% {
            text-shadow: 0 0 10px #00ffff, 0 0 20px #0077ff;
          }
          50% {
            text-shadow: 0 0 25px #00ffff, 0 0 40px #0077ff;
          }
          100% {
            text-shadow: 0 0 10px #00ffff, 0 0 20px #0077ff;
          }
        }
        .animate-text-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ViralSection;