import React from "react";
import { Store, UserCheck, ShoppingBag, Briefcase, Smartphone } from "lucide-react";

const AUDIENCES = [
  {
    icon: Store,
    title: "Dueños de pequeños negocios.",
    description: "Que desean mantener sus redes activas sin descuidar la atención a sus clientes.",
  },
  {
    icon: UserCheck,
    title: "Profesionales independientes.",
    description: "Que buscan explicar sus servicios con claridad y constancia.",
  },
  {
    icon: ShoppingBag,
    title: "Tiendas y comercios.",
    description: "Que necesitan presentar productos, novedades y promociones de forma ordenada.",
  },
  {
    icon: Briefcase,
    title: "Prestadores de servicios.",
    description: "Que quieren responder dudas frecuentes y mostrar el valor de su trabajo.",
  },
  {
    icon: Smartphone,
    title: "Emprendedores que gestionan sus propias redes.",
    description: "Que prefieren tener una guía práctica en lugar de empezar en blanco cada semana.",
  },
];

export const AudienceSection: React.FC = () => {
  return (
    <section className="border-b border-white/10 bg-[#0B1D38] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.625rem,3.6vw,2.5rem)] font-extrabold leading-tight text-white">
            Creado para emprendedores que quieren comunicar mejor.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {AUDIENCES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 min-w-0 rounded-2xl border border-white/10 bg-[#102849] p-5 sm:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071226] text-[#F5C542] border border-white/10">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#B8C7DA] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
