export default function ArticulosSection() {
  return (
    <section className="pt-24 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-4 text-blue-400">Artículos Generados por IA</h2>
      <p className="text-gray-300 mb-6">
        Aquí encontrarás artículos sobre ciencia, tecnología y sociedad.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-xl p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] hover:shadow-blue-500/20 transition-shadow"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              Artículo de ejemplo {i}
            </h3>
            <p className="text-gray-400 text-sm">
              Breve descripción del artículo. Perfecto para mostrar contenido dinámico.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}