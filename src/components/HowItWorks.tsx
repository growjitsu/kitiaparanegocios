import React from "react";
import { Briefcase, Wand2, Send } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Briefcase,
    title: "Elige tu tipo de negocio.",
    description:
      "Selecciona las ideas que mejor se adapten a tus productos, servicios y clientes.",
  },
  {
    number: "02",
    icon: Wand2,
    title: "Adapta el contenido con IA.",
    description: "Utiliza los prompts como punto de partida y personaliza los resultados.",
  },
  {
    number: "03",
    icon: Send,
    title: "Revisa y publica.",
    description: "Ajusta el mensaje a tu marca y compártelo en tus redes sociales.",
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="border-b border-white/10 bg-[#0B1D38] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.625rem,3.6vw,2.5rem)] font-extrabold leading-tight text-white">
            De la idea a la publicación en 3 pasos.
          </h2>
        </div>

        <div className="relative mt-10 sm:mt-12">
          {/* Línea visual de progreso en escritorio */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-11 left-[16%] right-[16%] h-px bg-gradient-to-r from-[#168BFF]/30 via-[#F5C542]/50 to-[#168BFF]/30"
          />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-start md:items-center md:text-center min-w-0 rounded-2xl border border-white/10 bg-[#102849] p-6"
                >
                  {/* Conector vertical en móvil */}
                  {index < STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="md:hidden absolute -bottom-6 left-11 h-6 w-px bg-[#F5C542]/40"
                    />
                  )}

                  <div className="flex items-center gap-3 md:flex-col md:gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F5C542]/40 bg-[#071226] text-[#F5C542]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-[#168BFF] uppercase tabular-nums">
                      Paso {step.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg sm:text-xl font-bold text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#B8C7DA] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
