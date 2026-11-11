import React from "react";
import { SITE_IMAGES } from "../config/site";
import { BONUS_ITEMS } from "../data/content";
import { ProductCover } from "./ProductCover";

export const BonusGallery: React.FC = () => {
  return (
    <section id="bonos" className="border-b border-white/10 bg-[#0B1D38] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.625rem,3.6vw,2.5rem)] font-extrabold leading-tight text-white">
            Y eso no es todo: recibe 5 bonos exclusivos sin costo adicional.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#B8C7DA]">
            Recursos complementarios para organizar, crear y mejorar tu presencia digital.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BONUS_ITEMS.map((bonus) => {
            const coverImage = SITE_IMAGES.bonuses[bonus.imageIndex];
            return (
              <article
                key={bonus.id}
                className="flex flex-col min-w-0 rounded-2xl border border-white/10 bg-[#102849] p-5 transition-colors duration-150 hover:border-[#F5C542]/40"
              >
                <div className="mb-4 flex items-center justify-between gap-2 text-xs font-bold tracking-wider uppercase">
                  <span className="text-[#B8C7DA]">{bonus.number}</span>
                  <span className="text-[#22C55E]">INCLUIDO GRATIS</span>
                </div>

                <div className="mx-auto w-full max-w-[260px] sm:max-w-none">
                  <ProductCover
                    image={coverImage}
                    title={bonus.title}
                    subtitle={bonus.number}
                    aspectClass="aspect-[4/5]"
                  />
                </div>

                <div className="mt-4 flex-1">
                  <h3 className="text-lg font-bold text-white leading-snug">{bonus.title}</h3>
                  <p className="mt-1.5 text-sm sm:text-base text-[#B8C7DA] leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
