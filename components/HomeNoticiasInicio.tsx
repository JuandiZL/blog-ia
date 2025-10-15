"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const HomeNewsHero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const visible = useRef(true);

  // Efecto de partículas optimizado
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const devicePixelRatio = Math.min(window.devicePixelRatio, 1.5);
    const numParticles = window.innerWidth < 768 ? 20 : 40;
    let particles: { x: number; y: number; r: number; dx: number; dy: number }[] = [];

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth / devicePixelRatio;
      canvas.height = innerHeight / devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);

      particles = Array.from({ length: numParticles }, () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        r: Math.random() * 1.8 + 0.6,
        dx: (Math.random() - 0.5) * 0.45,
        dy: (Math.random() - 0.5) * 0.45,
      }));
    };

    const animate = () => {
      if (!ctx || !visible.current) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.8;

      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,180,255,0.25)";
        ctx.fill();
      }

      animationRef.current = window.setTimeout(() => {
        requestAnimationFrame(animate);
      }, 20);
    };

    const handleVisibility = () => {
      visible.current = !document.hidden;
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Fondo principal */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/FondoHomeNoticias.webp')",
          transform: "scale(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      ></canvas>

      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Explora el Futuro de las Noticias
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tecnología, ciencia y avances que transforman el mundo.  
          Mantente al día con lo más reciente e innovador.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link href="/articulos">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-400/40 transition-all duration-300">
              Explorar Noticias →
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HomeNewsHero;