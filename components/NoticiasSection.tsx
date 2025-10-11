export default function NoticiasSection() {
  return (
    <section className="pt-24 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-4 text-blue-400">Noticias Recientes</h2>
      <p className="text-gray-300 mb-6">
        Entérate de las últimas noticias del mundo de la tecnología, inteligencia artificial y startups innovadoras.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-xl p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] hover:shadow-blue-500/20 transition-shadow"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              Noticia destacada {i}
            </h3>
            <p className="text-gray-400 text-sm">
              Resumen breve de una noticia relevante del mundo tecnológico actual.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}