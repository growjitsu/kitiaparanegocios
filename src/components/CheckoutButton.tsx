import React, { useState } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "../config/site";
import { trackInitiateCheckout } from "../utils/pixel";

interface CheckoutButtonProps {
  label: string;
  className?: string;
  fullWidthMobile?: boolean;
  size?: "md" | "lg";
  variant?: "gold" | "blue";
  showIcon?: boolean;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  label,
  className = "",
  fullWidthMobile = true,
  size = "lg",
  variant = "gold",
  showIcon = true,
}) => {
  const [showDevNotice, setShowDevNotice] = useState(false);

  const hasCheckoutUrl = Boolean(KIWIFY_CHECKOUT_URL && KIWIFY_CHECKOUT_URL.trim().length > 0);
  const isDev = import.meta.env.DEV;

  const sizeClasses =
    size === "lg"
      ? "min-h-[52px] px-6 py-3.5 text-base sm:text-lg"
      : "min-h-[48px] px-5 py-2.5 text-sm sm:text-base";

  const widthClasses = fullWidthMobile ? "w-full sm:w-auto" : "";

  const variantClasses =
    variant === "gold"
      ? "bg-[#F5C542] text-[#071226] hover:bg-[#ffd257] active:bg-[#e5b32e] shadow-lg shadow-[#F5C542]/15"
      : "bg-[#168BFF] text-white hover:bg-[#3199ff] active:bg-[#0f77e0] shadow-lg shadow-[#168BFF]/20";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    trackInitiateCheckout();

    if (!hasCheckoutUrl) {
      e.preventDefault();
      setShowDevNotice(true);
    }
  };

  return (
    <div className={fullWidthMobile ? "w-full sm:w-auto" : "inline-block"}>
      {hasCheckoutUrl ? (
        <a
          href={KIWIFY_CHECKOUT_URL}
          onClick={handleClick}
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2.5 rounded-xl font-bold tracking-tight transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${sizeClasses} ${widthClasses} ${variantClasses} ${className}`}
        >
          <span>{label}</span>
          {showIcon && <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />}
        </a>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className={`inline-flex items-center justify-center gap-2.5 rounded-xl font-bold tracking-tight transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${sizeClasses} ${widthClasses} ${variantClasses} ${className}`}
        >
          <span>{label}</span>
          {showIcon && <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />}
        </button>
      )}

      {showDevNotice && isDev && (
        <div
          role="status"
          className="mt-2.5 flex items-start gap-2 rounded-lg border border-[#F5C542]/35 bg-[#0B1D38] px-3.5 py-2.5 text-left text-xs text-[#B8C7DA]"
        >
          <AlertCircle className="w-4 h-4 text-[#F5C542] shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Aviso de desarrollo: configura{" "}
            <code className="text-white font-semibold">KIWIFY_CHECKOUT_URL</code> en{" "}
            <code className="text-white font-semibold">src/config/site.ts</code> para activar el
            checkout real de Kiwify.
          </span>
        </div>
      )}

      {showDevNotice && !isDev && (
        <div
          role="status"
          className="mt-2.5 rounded-lg border border-white/15 bg-[#0B1D38] px-3.5 py-2.5 text-left text-xs text-[#B8C7DA]"
        >
          El enlace de compra estará disponible en breve.
        </div>
      )}
    </div>
  );
};
