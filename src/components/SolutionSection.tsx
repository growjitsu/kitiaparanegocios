import React from "react";
import { Compass, Sparkles, Store, Layers } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Compass,
    title: "Más claridad para planificar.",
    detail: "Sabes qué publicar cada día sin improvisar a último momento.",
  },
  {
    icon: Sparkles,
    title: "Ideas listas para adaptar.",
    detail: "Partes de estructuras probadas y las ajustas al tono de tu marca.",
  },
  {
    icon: Store,
    title: "Recursos para diferentes negocios.",
    detail: "Útil para comercios locales, servicios y proyectos independientes.",
  },
  {
    icon: Layers,
    title: "Un método sencillo de aplicar.",
    detail: "Pensado para usarse paso a paso, sin conocimientos técnicos.",
  },
];

export const SolutionSection: React.FC = () => {
  return (
    <section className="border-b border-white/10 bg-[#071226] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="min-w-0 lg:col-span-5">
            <h2 className="text-[clamp(1.625rem,3.6vw,2.5rem)] font-extrabold leading-tight text-white">
              Tu contenido, más organizado. Tu tiempo, mejor aprovechado.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#B8C7DA] leading-relaxed">
              Kit IA para Negocios reúne recursos prácticos para ayudarte a planificar
              publicaciones, crear guiones y adaptar mensajes comerciales con apoyo de la
              inteligencia artificial.
            </p>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="min-w-0 rounded-2xl border border-white/10 bg-[#102849] p-5 sm:p-6"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#168BFF]/15 text-[#168BFF]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#B8C7DA] leading-relaxed">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
