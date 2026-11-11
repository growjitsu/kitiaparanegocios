import React, { useState } from "react";
import { Copy, Check, Lightbulb, Terminal, FileText, LayoutTemplate } from "lucide-react";
import { INDUSTRY_EXAMPLES, type IndustryExample } from "../data/content";

export const RealExamples: React.FC = () => {
  const [activeId, setActiveId] = useState<IndustryExample["id"]>("restaurantes");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeExample =
    INDUSTRY_EXAMPLES.find((item) => item.id === activeId) ?? INDUSTRY_EXAMPLES[0];

  const handleCopyPrompt = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 2200);
    } catch {
      // Fallback silencioso si el navegador bloquea el portapapeles
    }
  };

  return (
    <section id="ejemplos" className="border-b border-white/10 bg-[#071226] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.625rem,3.6vw,2.5rem)] font-extrabold leading-tight text-white">
            Descubre cómo adaptar el contenido a tu negocio.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#B8C7DA]">
            Ejemplos ilustrativos que puedes adaptar a tu negocio.
          </p>
        </div>

        {/* Pestañas interactivas accesibles */}
        <div
          role="tablist"
          aria-label="Categorías de negocio"
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {INDUSTRY_EXAMPLES.map((tab) => {
            const isSelected = tab.id === activeExample.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className={`min-h-[44px] rounded-xl px-4 py-2 text-sm font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-[#F5C542] text-[#071226]"
                    : "border border-white/15 bg-[#102849] text-[#B8C7DA] hover:border-[#168BFF]/50 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Panel de ejemplo activo */}
        <div
          role="tabpanel"
          id={`panel-${activeExample.id}`}
          aria-labelledby={`tab-${activeExample.id}`}
          className="mt-6 rounded-2xl border border-white/10 bg-[#102849] p-5 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Columna izquierda: Idea + Prompt */}
            <div className="flex flex-col gap-5 min-w-0">
              <div className="rounded-xl border border-white/10 bg-[#0B1D38] p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#F5C542] uppercase">
                  <Lightbulb className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>1. Idea de publicación</span>
                </div>
                <p className="mt-2 text-base sm:text-lg font-semibold text-white leading-snug">
                  {activeExample.idea}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0B1D38] p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#168BFF] uppercase">
                    <Terminal className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>2. Prompt de IA</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyPrompt(activeExample.prompt, activeExample.id)}
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-white/15 bg-[#102849] px-3 py-1.5 text-xs font-semibold text-white hover:border-[#168BFF] transition-colors cursor-pointer"
                  >
                    {copiedId === activeExample.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#22C55E]" aria-hidden="true" />
                        <span className="text-[#22C55E]">Prompt copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copiar prompt</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-3 text-sm sm:text-base text-[#E5EDF7] leading-relaxed">
                  &ldquo;{activeExample.prompt}&rdquo;
                </p>
              </div>
            </div>

            {/* Columna derecha: Ejemplo de texto + Formato */}
            <div className="flex flex-col gap-5 min-w-0">
              <div className="rounded-xl border border-white/10 bg-[#0B1D38] p-4 sm:p-5 flex-1">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#F5C542] uppercase">
                  <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>3. Ejemplo de texto generado</span>
                </div>
                <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                  &ldquo;{activeExample.exampleText}&rdquo;
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0B1D38] p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#168BFF] uppercase">
                  <LayoutTemplate className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>4. Sugerencia de formato</span>
                </div>
                <p className="mt-2 text-sm sm:text-base text-[#B8C7DA] leading-relaxed">
                  {activeExample.format}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
