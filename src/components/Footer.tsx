import React, { useState } from "react";
import { X } from "lucide-react";
import {
  PRIVACY_POLICY_URL,
  PRODUCT_NAME,
  REFUND_POLICY_URL,
  SUPPORT_EMAIL,
  TERMS_URL,
} from "../config/site";

interface LegalModalInfo {
  title: string;
  body: string;
}

export const Footer: React.FC = () => {
  const [modalInfo, setModalInfo] = useState<LegalModalInfo | null>(null);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string,
    title: string,
    fallbackBody: string
  ) => {
    if (!url || url.trim().length === 0) {
      e.preventDefault();
      setModalInfo({ title, body: fallbackBody });
    }
  };

  return (
    <footer className="bg-[#071226] pt-10 pb-24 md:pb-12 text-sm text-[#B8C7DA]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-extrabold text-white">{PRODUCT_NAME}</p>
            <p className="mt-1 text-xs text-[#B8C7DA]/80">
              30 Días de Contenido Inteligente
            </p>
          </div>

          <nav aria-label="Enlaces legales y soporte" className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href={TERMS_URL || "#terminos"}
              target={TERMS_URL ? "_blank" : undefined}
              rel={TERMS_URL ? "noopener noreferrer" : undefined}
              onClick={(e) =>
                handleLinkClick(
                  e,
                  TERMS_URL,
                  "Términos y Condiciones",
                  "Configura la URL real de Términos y Condiciones en src/config/site.ts (TERMS_URL)."
                )
              }
              className="min-h-[44px] inline-flex items-center hover:text-white transition-colors"
            >
              Términos y Condiciones
            </a>

            <a
              href={PRIVACY_POLICY_URL || "#privacidad"}
              target={PRIVACY_POLICY_URL ? "_blank" : undefined}
              rel={PRIVACY_POLICY_URL ? "noopener noreferrer" : undefined}
              onClick={(e) =>
                handleLinkClick(
                  e,
                  PRIVACY_POLICY_URL,
                  "Política de Privacidad",
                  "Configura la URL real de Política de Privacidad en src/config/site.ts (PRIVACY_POLICY_URL)."
                )
              }
              className="min-h-[44px] inline-flex items-center hover:text-white transition-colors"
            >
              Política de Privacidad
            </a>

            <a
              href={REFUND_POLICY_URL || "#reembolso"}
              target={REFUND_POLICY_URL ? "_blank" : undefined}
              rel={REFUND_POLICY_URL ? "noopener noreferrer" : undefined}
              onClick={(e) =>
                handleLinkClick(
                  e,
                  REFUND_POLICY_URL,
                  "Política de Reembolso",
                  "Configura la URL real de Política de Reembolso en src/config/site.ts (REFUND_POLICY_URL)."
                )
              }
              className="min-h-[44px] inline-flex items-center hover:text-white transition-colors"
            >
              Política de Reembolso
            </a>

            <a
              href={SUPPORT_EMAIL ? `mailto:${SUPPORT_EMAIL}` : "#soporte"}
              onClick={(e) =>
                handleLinkClick(
                  e,
                  SUPPORT_EMAIL,
                  "Soporte",
                  "Configura el correo de soporte en src/config/site.ts (SUPPORT_EMAIL)."
                )
              }
              className="min-h-[44px] inline-flex items-center hover:text-white transition-colors"
            >
              Soporte
            </a>
          </nav>
        </div>

        <p className="mt-6 text-xs sm:text-sm leading-relaxed text-[#B8C7DA]/85 max-w-3xl">
          Este producto ofrece recursos educativos y herramientas de planificación. Los resultados
          dependen de la aplicación, el contexto y las características de cada negocio.
        </p>
      </div>

      {modalInfo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        >
          <div className="w-full max-w-md rounded-2xl border border-white/15 bg-[#102849] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <h3 id="legal-modal-title" className="text-lg font-bold text-white">
                {modalInfo.title}
              </h3>
              <button
                type="button"
                onClick={() => setModalInfo(null)}
                aria-label="Cerrar ventana"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-[#B8C7DA] hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-3 text-sm text-[#B8C7DA] leading-relaxed">{modalInfo.body}</p>
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setModalInfo(null)}
                className="min-h-[40px] rounded-lg bg-[#F5C542] px-4 py-2 text-sm font-bold text-[#071226] hover:bg-[#ffd257] cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
