import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default async function HomeSection() {
  const allPosts = (getSortedPostsData() ?? []) as any[];
  const latestPost = allPosts[0];

  if (!latestPost) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-400">
        <p className="mt-20">No hay artículos disponibles aún.</p>
      </section>
    );
  }

  const formattedDate = latestPost.date
    ? (() => {
        try {
          return new Date(latestPost.date).toLocaleDateString("es-CO", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
        } catch {
          return String(latestPost.date);
        }
      })()
    : "Fecha no disponible";

  return (
    <section className="relative min-h-screen bg-[#0d0d0d] text-gray-100 overflow-hidden">
      {/* Fondo con capa oscura */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/fondoHome.webp')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
          Blog IA — <span className="text-blue-400">Ideas que Transforman</span>
        </h1>

        <div className="max-w-3xl border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-300">
          <Link href={`/posts/${latestPost.id}`}>
            <h2 className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-2">
              {latestPost.title ?? "Artículo sin título"}
            </h2>
          </Link>

          <p className="text-gray-400 text-sm mb-4">📅 {formattedDate}</p>

          <p className="text-gray-200 mb-6 leading-relaxed">
            {latestPost.description ?? "Sin descripción disponible."}
          </p>

          <Link
            href={`/posts/${latestPost.id}`}
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-transform hover:scale-105"
          >
            Leer artículo completo →
          </Link>
        </div>
      </div>
    </section>
  );
}