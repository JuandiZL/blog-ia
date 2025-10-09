// app/page.tsx
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default async function Home() {
  const allPosts = (getSortedPostsData() ?? []) as any[]; // forzamos any para evitar errores de tipo
  const latestPost = allPosts[0];

  if (!latestPost) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-400 bg-[#0d0d0d]">
        <p>No hay artículos disponibles aún.</p>
      </main>
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
    <main className="min-h-screen bg-[#0d0d0d] text-gray-100 px-6 py-16">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-white tracking-tight">
          Blog IA — <span className="text-blue-500">Ideas que Transforman</span>
        </h1>

        <div className="border border-gray-800 rounded-2xl p-6 bg-gradient-to-b from-[#161616] to-[#0d0d0d] shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300">
          <Link href={`/posts/${latestPost.id}`}>
            <h2 className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-2">
              {latestPost.title ?? "Artículo sin título"}
            </h2>
          </Link>

          <p className="text-gray-500 text-sm mb-4">📅 {formattedDate}</p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {latestPost.description ?? "Sin descripción disponible."}
          </p>

          <Link
            href={`/posts/${latestPost.id}`}
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-transform hover:scale-105"
          >
            Leer artículo completo →
          </Link>
        </div>

        <footer className="mt-16 text-gray-500 text-sm">
          © {new Date().getFullYear()} Blog IA — Creado por @JuandiZL
        </footer>
      </section>
    </main>
  );
}