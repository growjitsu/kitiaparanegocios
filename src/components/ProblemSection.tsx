import React from "react";
import { HelpCircle, Clock, CalendarX } from "lucide-react";

const PROBLEMS = [
  {
    icon: HelpCircle,
    title: "Te quedas sin ideas para publicar.",
    description: "Cada semana vuelve la misma pregunta: ¿qué puedo compartir hoy?",
  },
  {
    icon: Clock,
    title: "Pierdes tiempo escribiendo desde cero.",
    description:
      "Crear títulos, textos y guiones puede ocupar horas que necesitas dedicar a tu negocio.",
  },
  {
    icon: CalendarX,
    title: "Publicas sin una planificación clara.",
    description: "Sin una estructura, mantener la constancia se vuelve más complicado.",
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="border-b border-white/10 bg-[#0B1D38] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.625rem,3.6vw,2.5rem)] font-extrabold leading-tight text-white">
            Crear contenido para tu negocio no debería consumir todo tu día.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {PROBLEMS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="min-w-0 rounded-2xl border border-white/10 bg-[#102849] p-6 transition-colors duration-150 hover:border-[#168BFF]/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#071226] text-[#F5C542] border border-white/10">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-[#B8C7DA] leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-base sm:text-lg font-semibold text-[#F5C542]">
          No necesitas hacerlo todo desde cero. Necesitas una forma más sencilla de organizar tus
          ideas.
        </p>
      </div>
    </section>
  );
};
