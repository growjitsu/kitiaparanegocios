import React from "react";
import {
  Lightbulb,
  Video,
  MessageSquareCode,
  MessageCircle,
  CalendarDays,
  BookOpenCheck,
} from "lucide-react";

const CONTENTS = [
  {
    icon: Lightbulb,
    title: "30 ideas de publicaciones",
    description:
      "Temas variados para presentar tus productos, responder dudas frecuentes y conectar con tu audiencia.",
  },
  {
    icon: Video,
    title: "30 guiones cortos para Reels",
    description:
      "Estructuras breves de inicio, desarrollo y cierre pensadas para grabar videos rápidos con tu teléfono.",
  },
  {
    icon: MessageSquareCode,
    title: "50 prompts de ChatGPT",
    description:
      "Instrucciones listas para copiar, completar con los datos de tu negocio y generar textos adaptados.",
  },
  {
    icon: MessageCircle,
    title: "20 mensajes comerciales para WhatsApp",
    description:
      "Plantillas claras para responder consultas, dar seguimiento y compartir información de tus ofertas.",
  },
  {
    icon: CalendarDays,
    title: "Calendario de contenido de 30 días",
    description:
      "Una secuencia organizada día por día para que mantengas un ritmo constante durante todo el mes.",
  },
  {
    icon: BookOpenCheck,
    title: "Guía práctica de utilización",
    description:
      "Explicación paso a paso sobre cómo aprovechar cada recurso y personalizarlo según tu giro comercial.",
  },
];

export const ProductContents: React.FC = () => {
  return (
    <section id="contenido" className="border-b border-white/10 bg-[#071226] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.625rem,3.6vw,2.5rem)] font-extrabold leading-tight text-white">
            Todo lo que necesitas para empezar a organizar tu contenido.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#B8C7DA]">
            Todos los recursos son personalizables para que los adaptes a tus productos, servicios y
            estilo de comunicación.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {CONTENTS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="min-w-0 rounded-2xl border border-white/10 bg-[#102849] p-6 transition-colors duration-150 hover:border-[#F5C542]/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#071226] text-[#168BFF] border border-white/10">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-[#B8C7DA] leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
