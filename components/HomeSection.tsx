import Link from "next/link";

export default function HomeSection() {
  const latestPost = {
    id: "como-la-ia-transforma-negocios-2025",
    title: "Cómo la Inteligencia Artificial está transformando los negocios en 2025",
    date: "2025-10-09",
    description:
      "Descubre los cambios más impactantes que la IA está generando en las empresas este 2025, con ejemplos reales y estrategias prácticas para aplicarla hoy.",
    image: "/images/human-ia.webp",
  };

  const formattedDate = new Date(latestPost.date).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="relative w-full min-h-[100vh] bg-[#0d0d0d] text-gray-100 overflow-hidden flex items-center">
      {/* Fondo principal */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/fondoHome.webp')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 text-center py-20 md:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
          Novedades — <span className="text-blue-400">Ideas que Transforman</span>
        </h1>

        <div className="w-full max-w-3xl border border-gray-800 rounded-2xl p-6 sm:p-8 bg-black/50 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
          <Link href={`/articulos/como-la-ia-transforma-negocios-2025`}>
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-2">
              {latestPost.title}
            </h2>
          </Link>

          <p className="text-gray-400 text-sm mb-4">📅 {formattedDate}</p>

          <p className="text-gray-200 text-sm sm:text-base mb-6 leading-relaxed">
            {latestPost.description}
          </p>

          <Link
            href={`/articulos/como-la-ia-transforma-negocios-2025`}
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-transform hover:scale-105"
          >
            Leer artículo completo →
          </Link>
        </div>
      </div>
    </section>
  );
}