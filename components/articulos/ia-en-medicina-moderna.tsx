"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function IaEnMedicinaModerna() {
  return (
    <>
      <Header />

      <article className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-gray-100 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Título principal */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 leading-tight">
              Inteligencia Artificial en la Medicina Moderna:  
              el Renacimiento de la Salud Digital
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
              — Por <span className="text-cyan-400">@Juandizl</span>
            </p>
          </div>

          {/* Imagen principal */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-800">
            <Image
              src="/images/PortadaArticuloIaenMedicinaModerna.webp"
              alt="IA en medicina moderna"
              width={1200}
              height={650}
              className="object-cover w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Introducción */}
          <section className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <p>
              La <strong>inteligencia artificial (IA)</strong> está redefiniendo
              la medicina moderna. Desde diagnósticos automatizados hasta
              terapias personalizadas, los algoritmos están transformando la
              forma en que los médicos entienden, previenen y tratan las
              enfermedades.
            </p>
            <p>
              En 2025, la fusión entre <strong>big data</strong>, sensores
              biomédicos e inteligencia artificial marca el inicio de una nueva
              era en la salud: más predictiva, más preventiva y, sobre todo, más
              humana.
            </p>
          </section>

          {/* Sección 1 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400">
              🧠 Diagnóstico asistido por IA: precisión en milisegundos
            </h2>
            <p className="text-gray-300 leading-relaxed">
              La IA ha demostrado una capacidad impresionante para analizar
              imágenes médicas —como radiografías, tomografías y resonancias—,
              superando incluso la precisión humana en ciertos casos. Modelos
              como <strong>GPT-4 Health</strong> o <strong>Med-PaLM 2</strong>{" "}
              están cambiando la forma en que se interpretan los datos clínicos.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Detección temprana:</strong> algoritmos que detectan
                tumores, microfracturas o anomalías invisibles al ojo humano.
              </li>
              <li>
                <strong>Diagnóstico personalizado:</strong> la IA cruza miles de
                variables clínicas para ofrecer tratamientos ajustados a cada
                paciente.
              </li>
              <li>
                <strong>Reducción de errores:</strong> los sistemas de apoyo a
                la decisión clínica reducen los diagnósticos erróneos hasta en
                un 30%.
              </li>
            </ul>
          </section>

          {/* Sección 2 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400">
              ⚙️ Hospitales inteligentes y automatización clínica
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Los hospitales están adoptando sistemas de IA para optimizar la
              gestión de recursos, predecir demanda de camas, y coordinar
              cirugías y urgencias con mayor eficiencia. Todo esto con soporte
              de redes neuronales y visión computarizada.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Robots quirúrgicos inteligentes",
                  desc: "Asisten en operaciones de alta precisión, aprendiendo de cada procedimiento.",
                },
                {
                  title: "Asistentes virtuales médicos",
                  desc: "Atención 24/7 a pacientes mediante chatbots especializados y monitoreo remoto.",
                },
                {
                  title: "IA administrativa",
                  desc: "Automatiza registros, facturación y gestión de historias clínicas electrónicas.",
                },
                {
                  title: "Sensores biomédicos conectados",
                  desc: "Recolectan datos en tiempo real para decisiones clínicas más rápidas y seguras.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-900/60 p-5 rounded-xl border border-gray-800 hover:scale-[1.02] transition-transform"
                >
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 3 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400">
              💉 Medicina personalizada y genómica predictiva
            </h2>
            <p className="text-gray-300 leading-relaxed">
              La IA está acelerando el análisis del genoma humano, permitiendo
              identificar predisposiciones a enfermedades y personalizar los
              tratamientos. El sueño de la medicina individualizada es ya una
              realidad emergente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Oncología de precisión",
                  desc: "La IA analiza mutaciones genéticas para definir terapias más efectivas y menos invasivas.",
                },
                {
                  title: "Farmacogenética",
                  desc: "Predice cómo un paciente responderá a un medicamento específico.",
                },
                {
                  title: "Modelos predictivos de salud",
                  desc: "Evalúan riesgos de enfermedades antes de que aparezcan los síntomas.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-900/60 p-5 rounded-xl border border-gray-800 hover:scale-[1.02] transition-transform"
                >
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 4 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400">
              🌐 Ética, privacidad y el lado humano de la IA médica
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Privacidad de datos:</strong> proteger la información
                genética y médica es esencial.
              </li>
              <li>
                <strong>Transparencia algorítmica:</strong> los sistemas deben
                explicar cómo llegan a sus conclusiones.
              </li>
              <li>
                <strong>Humanización de la IA:</strong> la tecnología debe
                complementar, no reemplazar, la empatía médica.
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              La medicina impulsada por IA no busca eliminar al médico, sino
              amplificar sus capacidades. La clave estará en el equilibrio entre
              lo digital y lo humano.
            </p>
            <div className="p-6 bg-cyan-900/20 border border-cyan-600 rounded-2xl max-w-2xl mx-auto shadow-lg">
              <p className="text-cyan-300 text-lg italic text-center">
                “El médico del futuro no solo sabrá de biología, también sabrá
                de algoritmos.”
              </p>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </>
  );
}