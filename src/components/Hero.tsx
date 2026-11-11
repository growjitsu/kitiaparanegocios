import React from "react";
import { Check } from "lucide-react";
import {
  PRICE_DISPLAY,
  PRODUCT_NAME,
  PRODUCT_SUBTITLE,
  SITE_IMAGES,
} from "../config/site";
import { CheckoutButton } from "./CheckoutButton";
import { ProductCover } from "./ProductCover";

const QUICK_BENEFITS = [
  "30 días de ideas",
  "50 prompts de IA",
  "30 guiones para Reels",
  "5 bonos incluidos",
];

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-x-clip border-b border-white/10 bg-gradient-to-b from-[#071226] via-[#091832] to-[#0B1D38] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:py-20"
    >
      {/* Brillo azul moderado de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-full max-w-3xl -translate-x-1/2 rounded-full bg-[#168BFF]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Columna de texto: prioridad visual en móvil */}
          <div className="min-w-0 lg:col-span-7">
            <p className="text-xs sm:text-sm font-bold tracking-[0.12em] text-[#F5C542] uppercase">
              CONTENIDO INTELIGENTE PARA EMPRENDEDORES
            </p>

            <h1 className="mt-3 text-[clamp(2rem,5.2vw,3.35rem)] font-extrabold leading-[1.12] text-white">
              ¿No sabes qué publicar en las redes de tu negocio?
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl font-medium text-[#E5EDF7] leading-relaxed max-w-2xl">
              Organiza 30 días de contenido con ayuda de la inteligencia artificial, incluso si no
              tienes experiencia en marketing.
            </p>

            <p className="mt-3 text-sm sm:text-base text-[#B8C7DA] leading-relaxed max-w-2xl">
              Ideas de publicaciones, guiones para Reels, prompts de IA y mensajes para WhatsApp,
              reunidos en un kit práctico y fácil de adaptar a tu negocio.
            </p>

            {/* Beneficios rápidos */}
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:max-w-lg">
              {QUICK_BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-sm sm:text-base font-medium text-white min-w-0"
                >
                  <Check className="h-4 w-4 text-[#22C55E] shrink-0" aria-hidden="true" />
                  <span className="truncate">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Portada en móvil (visible entre beneficios y precio para flujo natural) */}
            <div className="mt-7 lg:hidden">
              <div className="mx-auto max-w-[280px] sm:max-w-[320px]">
                <ProductCover
                  image={SITE_IMAGES.mainCover}
                  title={PRODUCT_NAME}
                  subtitle={PRODUCT_SUBTITLE}
                  priority
                />
              </div>
            </div>

            {/* Bloque de precio y CTA */}
            <div className="mt-7 sm:mt-8 rounded-2xl border border-white/10 bg-[#102849]/70 p-4 sm:p-6 max-w-xl">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#F5C542] tabular-nums">
                    {PRICE_DISPLAY}
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-white/90 uppercase">
                    PAGO ÚNICO
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-[#B8C7DA]">
                  Kit principal + 5 bonos
                </span>
              </div>

              <div className="mt-4">
                <CheckoutButton label={`Quiero mi Kit por ${PRICE_DISPLAY}`} />
              </div>

              <p className="mt-3 text-xs sm:text-sm text-[#B8C7DA] leading-relaxed">
                Compra segura · Producto digital · Entrega después de confirmar el pago
              </p>
            </div>
          </div>

          {/* Columna de portada en escritorio */}
          <div className="hidden lg:block lg:col-span-5 min-w-0">
            <div className="mx-auto max-w-[400px] rounded-3xl border border-[#F5C542]/20 bg-[#0B1D38]/80 p-4 shadow-2xl">
              <ProductCover
                image={SITE_IMAGES.mainCover}
                title={PRODUCT_NAME}
                subtitle={PRODUCT_SUBTITLE}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
