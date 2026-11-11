import React from "react";
import { PRICE_DISPLAY } from "../config/site";
import { CheckoutButton } from "./CheckoutButton";

export const FinalCTA: React.FC = () => {
  return (
    <section
      id="cta-final"
      className="border-b border-white/10 bg-gradient-to-b from-[#071226] to-[#0B1D38] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-[clamp(1.625rem,4vw,2.625rem)] font-extrabold leading-tight text-white">
          Deja de empezar desde cero cada vez que necesitas publicar.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-[#B8C7DA] leading-relaxed">
          Empieza con una estructura de contenido que puedas adaptar a tu negocio, a tu estilo y a
          tus clientes.
        </p>

        <div className="mt-7 flex flex-col items-center gap-4">
          <div className="flex items-baseline gap-2.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#F5C542] tabular-nums">
              {PRICE_DISPLAY}
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-white/90 uppercase">
              PAGO ÚNICO
            </span>
          </div>

          <CheckoutButton label="Obtener mi Kit Ahora" fullWidthMobile />
        </div>
      </div>
    </section>
  );
};
