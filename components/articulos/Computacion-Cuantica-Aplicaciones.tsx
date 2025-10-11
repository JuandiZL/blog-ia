"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ComputacionCuanticaAplicaciones2025() {
  return (
    <>
      <Header />

      <article className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-gray-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Título principal */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-green-400 leading-tight">
              Computación Cuántica: el salto cuántico hacia aplicaciones prácticas en 2025-2026
            </h1>
            <p className="text-gray-400 mt-4 text-sm md:text-base">
              📅 Publicado el <strong>{new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}</strong> — Por <span className="text-green-400">@Juandizl</span>
            </p>
          </div>

          {/* Imagen principal */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-800">
            <Image
              src="/images/portadaComputacionCuantica.webp"
              alt="Visualización de computación cuántica"
              width={1200}
              height={650}
              className="object-cover w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Secciones del artículo */}
          <section className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <p>
              Durante años, la <strong>computación cuántica</strong> ha sido una promesa dominada por la teoría, los laboratorios y la ciencia básica. Pero ahora, en 2025 y lo que viene para 2026, estamos viendo una transición: aplicaciones prácticas, hardware más accesible, y ecosistemas listos para resolver problemas reales.
            </p>
            <p>
              Desde optimizar cadenas de suministro, descubrir nuevos materiales, hasta mejorar la seguridad digital a niveles hasta ahora imposibles, la computación cuántica está dejando de ser futurista para volverse un componente estratégico en sectores como salud, energía, finanzas y más.
            </p>
          </section>

          {/* Sección 1 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">⚛️ ¿Qué es la computación cuántica y qué la hace diferente?</h2>
            <p className="text-gray-300 leading-relaxed">
              La computación cuántica aprovecha principios de la mecánica cuántica como la superposición y el entrelazamiento para procesar información de formas que los computadores clásicos no pueden...
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Superposición:</strong> un qubit puede estar al mismo tiempo en los estados 0 y 1.</li>
              <li><strong>Entrelazamiento:</strong> dos o más qubits pueden correlacionarse instantáneamente.</li>
              <li><strong>Interferencia cuántica:</strong> permite amplificar soluciones correctas y cancelar las incorrectas.</li>
              <li><strong>Decoherencia y error cuántico:</strong> desafíos técnicos aún presentes.</li>
            </ul>
          </section>

          {/* Sección 2 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">🛠️ Estado del hardware cuántico en 2025</h2>
            <p className="text-gray-300 leading-relaxed">
              Los laboratorios y empresas punteras están lanzando prototipos y versiones comerciales con decenas o cientos de qubits...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Qubits superconductores", desc: "Usados por IBM y Google. Funcionan a temperaturas extremas, requieren criogenia." },
                { title: "Trampas de iones", desc: "Alta fidelidad, manipulan átomos individuales. Limitaciones en velocidad y escalabilidad." },
                { title: "Qubits fotónicos", desc: "Basados en luz. Compatible con fibra óptica y ambientes menos extremos." },
                { title: "Computación cuántica topológica", desc: "Mayor robustez contra errores. Microsoft investiga activamente esta tecnología." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-900/60 p-5 rounded-xl border border-gray-800 hover:scale-[1.02] transition-transform">
                  <h3 className="text-xl font-semibold text-green-400 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 3 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">🌍 Aplicaciones reales con impacto en 2025-2026</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Medicina y descubrimiento de fármacos", desc: "Simulaciones cuánticas para diseñar moléculas y estructuras complejas." },
                { title: "Optimización de logística", desc: "Resolver rutas, recursos e inventarios con mayor eficiencia." },
                { title: "Seguridad y criptografía cuántica", desc: "Comunicación segura y protección ante futuras amenazas cuánticas." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-900/60 p-5 rounded-xl border border-gray-800 hover:scale-[1.02] transition-transform">
                  <h3 className="text-xl font-semibold text-green-400 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 4 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">📈 Cómo prepararte para adoptar computación cuántica</h2>
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Pasos prácticos:</h3>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 leading-relaxed">
                <li>Educar al equipo sobre fundamentos cuánticos.</li>
                <li>Explorar plataformas híbridas como IBM Quantum o Amazon Braket.</li>
                <li>Definir casos de uso específicos (logística, química, finanzas).</li>
                <li>Seguir la evolución regulatoria y de seguridad.</li>
                <li>Colaborar con universidades o centros de investigación.</li>
              </ol>
            </div>
          </section>

          {/* Sección 5 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">🔮 Retos, ética y el futuro cuántico</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Corrección de errores:</strong> mantener la fidelidad de los qubits es crítico.</li>
              <li><strong>Escalabilidad:</strong> pasar de cientos a miles de qubits sin pérdida.</li>
              <li><strong>Infraestructura:</strong> costos energéticos y tecnológicos aún altos.</li>
              <li><strong>Estándares y equidad:</strong> evitar concentración de poder tecnológico.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              A pesar de los desafíos, la promesa cuántica está cerca: desde nuevos medicamentos hasta IA cuántica. Estamos en el inicio de un cambio de paradigma.
            </p>
            <div className="p-6 bg-green-900/20 border border-green-600 rounded-2xl max-w-2xl mx-auto shadow-lg">
              <p className="text-green-300 text-lg italic text-center">
                “El qubit domina la incertidumbre, pero el valor está en lo que logra hacer con ella.”
              </p>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </>
  );
}