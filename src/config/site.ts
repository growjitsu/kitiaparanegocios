export const PRODUCT_NAME = "Kit IA para Negocios";
export const PRODUCT_SUBTITLE = "30 Días de Contenido Inteligente";
export const PRODUCT_PRICE = 9;
export const CURRENCY = "USD";
export const PRICE_DISPLAY = "US$ 9";

// Configura aquí tu enlace real de checkout de Kiwify cuando esté listo.
export const KIWIFY_CHECKOUT_URL: string = "";

// Configura aquí tu correo de soporte y enlaces legales.
export const SUPPORT_EMAIL: string = "";
export const PRIVACY_POLICY_URL: string = "";
export const TERMS_URL: string = "";
export const REFUND_POLICY_URL: string = "";

// Configura aquí tu ID de Meta Pixel (opcional).
export const META_PIXEL_ID: string = "";

// URL canónica del sitio para SEO y Open Graph.
export const CANONICAL_URL: string = "";

export interface ImageSlotConfig {
  src: string;
  alt: string;
  slotLabel: string;
}

export const SITE_IMAGES = {
  mainCover: {
    src: "/images/kit-ia-portada-principal.webp",
    alt: "Portada oficial de Kit IA para Negocios - 30 Días de Contenido Inteligente",
    slotLabel: "Portada principal del Kit (kit-ia-portada-principal.webp)",
  } satisfies ImageSlotConfig,
  bonuses: [
    {
      src: "/images/bono-1-plantillas.webp",
      alt: "Portada del Bono 1: 20 Plantillas de Publicaciones",
      slotLabel: "Portada Bono 1 (bono-1-plantillas.webp)",
    },
    {
      src: "/images/bono-2-calendario.webp",
      alt: "Portada del Bono 2: Calendario de Fechas Comerciales",
      slotLabel: "Portada Bono 2 (bono-2-calendario.webp)",
    },
    {
      src: "/images/bono-3-checklist.webp",
      alt: "Portada del Bono 3: Checklist de Perfil Profesional",
      slotLabel: "Portada Bono 3 (bono-3-checklist.webp)",
    },
    {
      src: "/images/bono-4-frases.webp",
      alt: "Portada del Bono 4: 50 Frases para Captar Atención",
      slotLabel: "Portada Bono 4 (bono-4-frases.webp)",
    },
    {
      src: "/images/bono-5-control.webp",
      alt: "Portada del Bono 5: Control de Resultados",
      slotLabel: "Portada Bono 5 (bono-5-control.webp)",
    },
  ] satisfies ImageSlotConfig[],
  demos: {
    restaurantes: {
      src: "/images/demo-restaurantes.webp",
      alt: "Ejemplo demostrativo de contenido para restaurantes",
      slotLabel: "Imagen demostrativa Restaurantes (demo-restaurantes.webp)",
    },
    belleza: {
      src: "/images/demo-belleza.webp",
      alt: "Ejemplo demostrativo de contenido para salones de belleza",
      slotLabel: "Imagen demostrativa Salones de Belleza (demo-belleza.webp)",
    },
    tiendas: {
      src: "/images/demo-tiendas.webp",
      alt: "Ejemplo demostrativo de contenido para tiendas y comercios",
      slotLabel: "Imagen demostrativa Tiendas (demo-tiendas.webp)",
    },
    servicios: {
      src: "/images/demo-servicios.webp",
      alt: "Ejemplo demostrativo de contenido para servicios profesionales",
      slotLabel: "Imagen demostrativa Servicios Profesionales (demo-servicios.webp)",
    },
    emprendedores: {
      src: "/images/demo-emprendedores.webp",
      alt: "Ejemplo demostrativo de contenido para emprendedores",
      slotLabel: "Imagen demostrativa Emprendedores (demo-emprendedores.webp)",
    },
  },
};

export const SITE_CONFIG = {
  productName: PRODUCT_NAME,
  productSubtitle: PRODUCT_SUBTITLE,
  price: PRODUCT_PRICE,
  currency: CURRENCY,
  priceDisplay: PRICE_DISPLAY,
  checkoutUrl: KIWIFY_CHECKOUT_URL,
  supportEmail: SUPPORT_EMAIL,
  legal: {
    privacyUrl: PRIVACY_POLICY_URL,
    termsUrl: TERMS_URL,
    refundUrl: REFUND_POLICY_URL,
  },
  tracking: {
    metaPixelId: META_PIXEL_ID,
  },
  canonicalUrl: CANONICAL_URL,
};
