import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../data/content";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="preguntas" className="border-b border-white/10 bg-[#0B1D38] py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-[clamp(1.625rem,3.6vw,2.5rem)] font-extrabold leading-tight text-white">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#B8C7DA]">
            Resolvemos las dudas más comunes antes de adquirir el kit.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `panel-${item.id}`;
            const buttonId = `button-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-[#102849] overflow-hidden"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => handleToggle(item.id)}
                    className="flex w-full min-h-[56px] items-center justify-between gap-4 px-5 py-4 text-left text-base sm:text-lg font-bold text-white hover:bg-white/[0.03] transition-colors cursor-pointer"
                  >
                    <span className="min-w-0 leading-snug">{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#F5C542] shrink-0 transition-transform duration-150 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t border-white/10 px-5 py-4 text-sm sm:text-base text-[#B8C7DA] leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
