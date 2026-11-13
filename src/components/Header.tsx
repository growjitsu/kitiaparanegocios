import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { KIWIFY_CHECKOUT_URL, PRODUCT_NAME, PRICE_DISPLAY } from "../config/site";
import { trackInitiateCheckout } from "../utils/pixel";

const NAV_LINKS = [
  { href: "#contenido", label: "Contenido" },
  { href: "#bonos", label: "Bonos" },
  { href: "#ejemplos", label: "Ejemplos" },
  { href: "#preguntas", label: "Preguntas" },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleCheckoutClick = () => {
    trackInitiateCheckout();
    setMobileMenuOpen(false);
  };

  const checkoutHref = KIWIFY_CHECKOUT_URL.trim() || "#oferta";

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071226]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:gap-8">
        {/* Zona 1: Marca en una sola línea */}
        <a
          href="#inicio"
          className="text-base sm:text-lg font-extrabold tracking-tight text-white whitespace-nowrap shrink-0"
        >
          {PRODUCT_NAME}
        </a>

        {/* Zona 2: Enlaces de navegación en escritorio */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#B8C7DA] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Acción principal + botón menú móvil */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={checkoutHref}
            onClick={handleCheckoutClick}
            rel={KIWIFY_CHECKOUT_URL.trim() ? "noopener noreferrer" : undefined}
            className="hidden sm:inline-flex items-center justify-center min-h-[40px] rounded-lg bg-[#F5C542] px-4 py-2 text-sm font-bold text-[#071226] hover:bg-[#ffd257] transition-colors whitespace-nowrap shrink-0"
          >
            Obtener por {PRICE_DISPLAY}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex md:hidden items-center justify-center min-h-[44px] min-w-[44px] rounded-lg border border-white/15 bg-[#0B1D38] text-white hover:bg-[#102849] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil accesible */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Menú móvil"
          className="md:hidden border-t border-white/10 bg-[#0B1D38] px-4 py-4"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="flex min-h-[44px] items-center rounded-lg px-3 py-2 text-base font-medium text-[#B8C7DA] hover:bg-[#102849] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-white/10">
            <a
              href={checkoutHref}
              onClick={handleCheckoutClick}
              rel={KIWIFY_CHECKOUT_URL.trim() ? "noopener noreferrer" : undefined}
              className="flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#F5C542] px-5 py-3 text-base font-bold text-[#071226] hover:bg-[#ffd257] transition-colors"
            >
              Quiero mi Kit por {PRICE_DISPLAY}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
