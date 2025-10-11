"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ComoLaIATransformaNegocios2025() {
  return (
    <>
      <Header />

      <article className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-gray-100 px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-400 leading-tight">
            Cómo la Inteligencia Artificial está transformando los negocios en 2025
          </h1>

          <p className="text-gray-400 mb-10 text-sm md:text-base">
            📅 Publicado el <strong>9 de octubre de 2025</strong> — Por <span className="text-blue-400">@Juandizl</span>
          </p>

          {/* Imagen principal */}
          <div className="rounded-2xl overflow-hidden mb-10 shadow-xl border border-gray-800">
            <Image
              src="/images/human-ia.webp"
              alt="Transformación empresarial con IA"
              width={1200}
              height={650}
              className="object-cover w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Introducción */}
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            La <strong>Inteligencia Artificial (IA)</strong> ya no es un experimento futurista.
            En <strong>2025</strong>, se ha consolidado como el motor que impulsa la eficiencia,
            el crecimiento sostenible y la innovación en prácticamente todas las industrias.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            Desde <span className="text-blue-400 font-semibold">startups tecnológicas</span> que automatizan sus operaciones,
            hasta <span className="text-blue-400 font-semibold">pymes familiares</span> que optimizan sus ventas con analítica predictiva,
            la IA se ha convertido en un socio estratégico que redefine cómo se crean productos,
            se toman decisiones y se atienden clientes.
          </p>

          <hr className="border-gray-800 my-10" />

          {/* Sección 1 */}
          <section className="text-left">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">
              🚀 La nueva revolución empresarial impulsada por IA
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Las empresas que integran IA no lo hacen por tendencia, sino por supervivencia competitiva.
              La automatización, el análisis de datos y los modelos generativos se están convirtiendo en
              la columna vertebral de las estrategias de negocio modernas.
            </p>

            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-3 mb-10">
              <li>
                🤖 <strong>Asistentes virtuales inteligentes</strong> brindan atención al cliente 24/7 reduciendo los tiempos de espera hasta un 60%.
              </li>
              <li>
                🛒 <strong>Recomendadores personalizados</strong> en e-commerce incrementan las ventas hasta un 30% al analizar el comportamiento real del usuario.
              </li>
              <li>
                📈 <strong>Modelos predictivos</strong> permiten anticipar fluctuaciones de demanda y optimizar inventarios en tiempo real.
              </li>
            </ul>

            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 mb-10">
              “La automatización inteligente no reemplaza a las personas: las libera para enfocarse en tareas de pensamiento crítico y estrategia.”
            </blockquote>
          </section>

          <hr className="border-gray-800 my-10" />

          {/* Sección 2 */}
          <section className="text-left">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">💡 Casos reales de éxito global</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "🍔 Retail y restaurantes",
                  desc: "Marcas como Starbucks utilizan IA para analizar patrones de consumo, ajustar precios dinámicamente y optimizar la cadena de suministro.",
                },
                {
                  title: "🏦 Banca y finanzas",
                  desc: "Entidades como BBVA y JP Morgan aplican IA para detectar fraudes y predecir riesgos crediticios con una precisión superior al 90%.",
                },
                {
                  title: "🚚 Logística y transporte",
                  desc: "Empresas como DHL y Amazon utilizan IA para planificar rutas inteligentes, reduciendo costos logísticos hasta en un 25%.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 hover:scale-[1.03] transition-transform"
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              De acuerdo con <strong>Deloitte (2025)</strong>, el 72% de las empresas que adoptaron IA en los últimos dos años
              reportaron un aumento directo en su productividad y eficiencia operativa.
            </p>
          </section>

          <hr className="border-gray-800 my-10" />

          {/* Sección 3 */}
          <section className="text-left">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">🧭 Cómo empezar con IA sin ser una gran empresa</h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              La adopción de IA ya no es exclusiva de los gigantes tecnológicos.
              Gracias a las plataformas de automatización y modelos preentrenados, cualquier negocio puede
              implementar soluciones inteligentes con una inversión accesible.
            </p>

            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 mb-10">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Pasos prácticos para una pyme:</h3>
              <ol className="list-decimal list-inside text-gray-300 leading-relaxed space-y-3">
                <li>Identifica tareas repetitivas o procesos lentos.</li>
                <li>Explora herramientas como <strong>Zapier, ChatGPT, Midjourney</strong> o <strong>Google Vertex AI</strong>.</li>
                <li>Mide resultados: tiempo ahorrado, satisfacción del cliente y aumento de conversiones.</li>
                <li>Escala gradualmente según tus propios datos y aprendizajes.</li>
              </ol>
            </div>
          </section>

          <hr className="border-gray-800 my-10" />

          {/* Sección 4 */}
          <section className="text-left">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">🔮 Mirando hacia el futuro</h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              En los próximos años veremos una transición hacia un modelo híbrido donde los humanos se apoyan en la IA
              para potenciar sus decisiones. La clave estará en cómo cada empresa logre equilibrar la tecnología con la empatía.
            </p>

            <p className="text-gray-300 leading-relaxed mb-12">
              La ventaja no estará en quién tiene más datos, sino en quién sabe <strong>convertirlos en conocimiento útil</strong>.
              La cultura organizacional será tan importante como los algoritmos que la soportan.
            </p>

            <div className="p-6 bg-blue-900/20 border border-blue-600 rounded-2xl max-w-2xl mx-auto shadow-lg">
              <p className="text-blue-300 text-lg italic text-center">
                “2025 no es el año en que la IA reemplazó a los humanos...  
                es el año en que los humanos aprendieron a potenciarse con ella.”
              </p>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </>
  );
}