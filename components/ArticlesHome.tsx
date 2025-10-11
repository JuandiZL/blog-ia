"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

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
    title: "Computación Cuantica",
    date: "12 Oct 2025",
    category: "Tecnología",
    description:
      "Los científicos desarrollan nuevos materiales con nanotecnología.",
    image: "/images/PortadaArticuloComputacionCuantica.webp",
    link: "/articulos/Computacion-Cuantica-Aplicaciones",
  },
  {
    id: 3,
    title: "La IA en la medicina moderna",
    date: "08 Oct 2025",
    category: "Salud",
    description:
      "La inteligencia artificial está revolucionando diagnósticos y tratamientos personalizados.",
    image: "https://images.unsplash.com/photo-1581091870622-1c8f2f3f9c9e",
    link: "/articulos/ia-en-medicina",
  },
  {
    id: 4,
    title: "El big data en el deporte de élite",
    date: "07 Oct 2025",
    category: "Deportes",
    description:
      "Los equipos de élite ahora usan algoritmos para predecir lesiones y optimizar entrenamientos.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    link: "/articulos/deporte-y-tecnologia",
  },
  {
    id: 5,
    title: "Robótica y el empleo del futuro",
    date: "05 Oct 2025",
    category: "Tecnología",
    description:
      "Cómo la automatización reconfigura el trabajo y abre nuevas oportunidades globales.",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe",
    link: "/articulos/robotica-empleo",
  },
  {
    id: 6,
    title: "Rfdfdfdfuturo",
    date: "05 Oct 2025",
    category: "Tecnología",
    description:
      "Cómo la automatización reconfigura el trabajo y abre nuevas oportunidades globales.",
    image: "https://images.unsplash.com/photo-1581091215367-59ab6c1a8c94",
    link: "/articulos/robotica-empleo",
  },
  {
    id: 7,
    title: "Robótica y el empleo del futuro",
    date: "05 Oct 2025",
    category: "Ciencia",
    description:
      "Cómo la automatización reconfigura el trabajo y abre nuevas oportunidades globales.",
    image: "https://images.unsplash.com/photo-1581091215367-59ab6c1a8c94",
    link: "/articulos/robotica-empleo",
  },
];

const getArticlesByCategory = (category: string) =>
  articlesData.filter((a) => a.category === category);

const ArticlesHome = () => {
  const categories = ["Tecnología", "Ciencia", "Salud", "Deportes", "Política"];


  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false, // 🔹 DESACTIVA centerMode para evitar conflictos
    centerPadding: "0px",
    arrows: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false, // 🔹 importante
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false, // 🔹 importante
        },
      },
    ],
  };


  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
      className="min-h-screen py-20 px-6"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileHover={{
          scale: 1.03,
          rotateX: 5,
          transition: { duration: 0.4 },
        }}
      >
        Explora el Conocimiento por Sectores
      </motion.h2>

      {categories.map((category, i) => {
        const filtered = getArticlesByCategory(category);
        if (filtered.length === 0) return null;

        return (
          <motion.div
            key={category}
            className="w-full mb-20 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold border-l-4 border-indigo-500 pl-4 mb-8">
              {category}
            </h3>

            <Slider {...settings}>
              {filtered.map((article) => (
                <div key={article.id} className="w-full px-2 min-w-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg"
                  >
                    <Link href={article.link}>
                      <div className="relative group">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-semibold">
                          {article.category}
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-semibold mb-1">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-300 mb-2">
                          {article.date}
                        </p>
                        <p className="text-gray-200 text-sm mb-3 leading-relaxed">
                          {article.description}
                        </p>
                        <span className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                          Leer más →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        );
      })}

      <style jsx>{`
        .slick-prev:before,
        .slick-next:before {
          color: #818cf8 !important;
          font-size: 30px;
        }
        .slick-slide {
          display: flex !important;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default ArticlesHome;