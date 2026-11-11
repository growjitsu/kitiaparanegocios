import React from "react";
import { Check, ShieldCheck } from "lucide-react";
import {
  PRICE_DISPLAY,
  PRODUCT_NAME,
  PRODUCT_SUBTITLE,
  SITE_IMAGES,
} from "../config/site";
import { CheckoutButton } from "./CheckoutButton";
import { ProductCover } from "./ProductCover";

const INCLUDED_LIST = [
  "30 ideas de publicaciones",
  "30 guiones cortos para Reels",
  "50 prompts de ChatGPT",
  "20 mensajes comerciales para WhatsApp",
  "Calendario de contenido de 30 días",
  "Guía práctica de utilización",
  "Los 5 bonos exclusivos incluidos sin costo adicional",
];

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="border-b border-white/10 bg-[#071226] py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border-2 border-[#F5C542] bg-[#102849] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            {/* Portada oficial */}
            <div className="md:col-span-5 min-w-0">
              <div className="mx-auto max-w-[260px] md:max-w-none">
                <ProductCover
                  image={SITE_IMAGES.mainCover}
                  title={PRODUCT_NAME}
                  subtitle={PRODUCT_SUBTITLE}
                />
              </div>
            </div>

            {/* Detalles de la oferta */}
            <div className="md:col-span-7 min-w-0">
              <p className="text-xs sm:text-sm font-bold tracking-wider text-[#F5C542] uppercase">
                Kit principal + 5 bonos exclusivos
              </p>

              <h2 className="mt-2 text-[clamp(1.625rem,3.4vw,2.25rem)] font-extrabold text-white leading-tight">
                {PRODUCT_NAME}
              </h2>
              <p className="mt-1 text-base sm:text-lg font-medium text-[#B8C7DA]">
                {PRODUCT_SUBTITLE}
              </p>

              <ul className="mt-5 space-y-2.5">
                {INCLUDED_LIST.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-white"
                  >
                    <Check
                      className="mt-1 h-4 w-4 text-[#22C55E] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-baseline gap-3 border-t border-white/10 pt-5">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#F5C542] tabular-nums">
                  {PRICE_DISPLAY}
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                  PAGO ÚNICO
                </span>
              </div>

              <div className="mt-5">
                <CheckoutButton
                  label={`Sí, quiero comenzar por ${PRICE_DISPLAY}`}
                  fullWidthMobile
                />
              </div>

              <div className="mt-4 flex items-start gap-2 text-xs sm:text-sm text-[#B8C7DA]">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 text-[#22C55E] shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Producto digital en español. Acceso después de la confirmación del pago.
                </span>
              </div>

              <p className="mt-3 text-xs text-[#B8C7DA]/85 leading-relaxed">
                Los complementos opcionales se ofrecen por separado durante el proceso de compra.
                No necesitas adquirirlos para recibir el kit principal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
