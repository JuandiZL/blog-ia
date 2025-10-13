"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function DeporteInteligente() {
  return (
    <>
      <Header />

      <article className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-gray-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Título principal */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-400 leading-tight">
              El Futuro del Deporte Inteligente:  
              Tecnología, Rendimiento y Conexión Humana
            </h1>
            <p className="text-gray-400 mt-4 text-sm md:text-base">
              📅 Publicado el{" "}
              <strong>
                {new Date().toLocaleDateString("es-CO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </strong>{" "}
              — Por <span className="text-indigo-400">@Juandizl</span>
            </p>
          </div>

          {/* Imagen principal */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-800">
            <Image
              src="/images/PortadaElFuturoDelDeporteInteligente.webp"
              alt="Futuro del deporte inteligente"
              width={1200}
              height={650}
              className="object-cover w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Introducción */}
          <section className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <p>
              El <strong>deporte inteligente</strong> marca una nueva era donde la tecnología y la ciencia del rendimiento humano convergen. Desde sensores biométricos hasta inteligencia artificial en la estrategia de juego, los avances tecnológicos están redefiniendo cómo los atletas entrenan, compiten y se recuperan.
            </p>
            <p>
              En 2025, el deporte se transforma en un ecosistema hiperconectado donde cada movimiento genera datos y cada dato impulsa la excelencia.  
              La innovación ya no está solo en los músculos, sino en los algoritmos.
            </p>
          </section>

          {/* Sección 1 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-indigo-400">
              🏃‍♂️ Sensores biométricos y datos en tiempo real
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Los <strong>wearables deportivos</strong> recopilan información vital: ritmo cardíaco, oxigenación, movimiento y niveles de fatiga.  
              Equipos profesionales ya utilizan estos datos para prevenir lesiones y optimizar cada sesión de entrenamiento.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Monitoreo continuo:</strong> los dispositivos analizan el rendimiento segundo a segundo.
              </li>
              <li>
                <strong>Prevención de lesiones:</strong> los algoritmos detectan patrones de fatiga antes de que aparezcan los síntomas.
              </li>
              <li>
                <strong>Entrenamiento adaptativo:</strong> la IA ajusta la carga de trabajo según la respuesta fisiológica del atleta.
              </li>
            </ul>
          </section>

          {/* Sección 2 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-indigo-400">
              ⚙️ IA, análisis predictivo y estrategias de juego
            </h2>
            <p className="text-gray-300 leading-relaxed">
              La <strong>inteligencia artificial</strong> está revolucionando el análisis táctico. Plataformas como <em>Hudl AI</em> o <em>Stats Perform</em> procesan miles de horas de video para descubrir patrones invisibles al ojo humano.  
              Los entrenadores ahora cuentan con asistentes digitales que predicen el rendimiento o el comportamiento del rival.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Análisis de movimiento",
                  desc: "Los algoritmos reconstruyen trayectorias en 3D para mejorar técnica y postura.",
                },
                {
                  title: "Predicción de rendimiento",
                  desc: "Modelos predictivos estiman la condición óptima antes de una competencia.",
                },
                {
                  title: "Estrategia inteligente",
                  desc: "Simulaciones IA proyectan escenarios tácticos y recomiendan decisiones óptimas.",
                },
                {
                  title: "Videoanálisis automatizado",
                  desc: "Los sistemas identifican jugadores, jugadas clave y zonas de impacto en segundos.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-900/60 p-5 rounded-xl border border-gray-800 hover:scale-[1.02] transition-transform"
                >
                  <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 3 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-indigo-400">
              🧠 Neurotecnología y concentración aumentada
            </h2>
            <p className="text-gray-300 leading-relaxed">
              El futuro del alto rendimiento se medirá también desde el cerebro.  
              Los cascos EEG y sistemas de neurofeedback ya permiten entrenar la atención, la calma y la toma de decisiones bajo presión.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Entrenamiento mental inteligente",
                  desc: "Simuladores VR conectados a sensores cerebrales ajustan la dificultad en tiempo real.",
                },
                {
                  title: "Gestión emocional",
                  desc: "La IA detecta estrés o ansiedad para mejorar la resiliencia psicológica del atleta.",
                },
                {
                  title: "Optimización cognitiva",
                  desc: "Análisis de ondas cerebrales para medir concentración, fatiga y toma de decisiones.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-900/60 p-5 rounded-xl border border-gray-800 hover:scale-[1.02] transition-transform"
                >
                  <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 4 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-indigo-400">
              🌐 Deporte sostenible y tecnología conectada
            </h2>
            <p className="text-gray-300 leading-relaxed">
              La innovación también impulsa la sostenibilidad. Equipos, estadios y entrenamientos inteligentes reducen el impacto ambiental sin sacrificar rendimiento.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Ropa deportiva fabricada con materiales reciclados y sensores integrados.</li>
              <li>Estadios autosostenibles con control energético automatizado.</li>
              <li>Plataformas de datos que miden huella de carbono por evento deportivo.</li>
            </ul>
            <div className="p-6 bg-indigo-900/20 border border-indigo-600 rounded-2xl max-w-2xl mx-auto shadow-lg">
              <p className="text-indigo-300 text-lg italic text-center">
                “El atleta del futuro no solo será fuerte, será inteligente, conectado y consciente.”
              </p>
            </div>
          </section>

        </div>
      </article>

      <Footer />
    </>
  );
}