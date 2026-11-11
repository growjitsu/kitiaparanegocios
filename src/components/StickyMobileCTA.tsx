import React, { useEffect, useState } from "react";
import { PRICE_DISPLAY } from "../config/site";
import { CheckoutButton } from "./CheckoutButton";

export const StickyMobileCTA: React.FC = () => {
  const [pastHero, setPastHero] = useState(false);
  const [mainCtaVisible, setMainCtaVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("inicio");
    const offerEl = document.getElementById("oferta");
    const finalCtaEl = document.getElementById("cta-final");

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
    };

    const heroObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      }
    }, observerOptions);

    const ctaVisibilityMap = new Map<Element, boolean>();
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        ctaVisibilityMap.set(entry.target, entry.isIntersecting);
      });
      const anyVisible = Array.from(ctaVisibilityMap.values()).some(Boolean);
      setMainCtaVisible(anyVisible);
    }, observerOptions);

    if (heroEl) heroObserver.observe(heroEl);
    if (offerEl) ctaObserver.observe(offerEl);
    if (finalCtaEl) ctaObserver.observe(finalCtaEl);

    return () => {
      heroObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  const isVisible = pastHero && !mainCtaVisible;

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Acceso rápido de compra"
      className="fixed inset-x-0 bottom-0 z-30 md:hidden border-t border-white/15 bg-[#071226]/95 backdrop-blur-md px-4 pt-2.5 safe-bottom shadow-[0_-8px_24px_rgba(0,0,0,0.45)]"
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-bold tracking-wider text-[#B8C7DA] uppercase">
            Pago único
          </p>
          <p className="text-xl font-extrabold text-[#F5C542] tabular-nums leading-tight">
            {PRICE_DISPLAY}
          </p>
        </div>

        <CheckoutButton
          label="Obtener mi Kit"
          size="md"
          fullWidthMobile={false}
          showIcon={false}
          className="px-5"
        />
      </div>
    </div>
  );
};
