import { CURRENCY, META_PIXEL_ID, PRODUCT_NAME, PRODUCT_PRICE } from "../config/site";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    __kitIaPixelInitialized?: boolean;
    __kitIaViewContentSent?: boolean;
  }
}

export function isPixelConfigured(): boolean {
  return Boolean(META_PIXEL_ID && META_PIXEL_ID.trim().length > 0);
}

export function initMetaPixel(): void {
  if (typeof window === "undefined" || !isPixelConfigured() || window.__kitIaPixelInitialized) {
    return;
  }

  const pixelId = META_PIXEL_ID.trim();

  interface FbqFn {
    (...args: unknown[]): void;
    callMethod?: (...args: unknown[]) => void;
    push: (...args: unknown[]) => void;
    loaded: boolean;
    version: string;
    queue: unknown[];
  }

  if (!window.fbq) {
    const n: FbqFn = Object.assign(
      (...args: unknown[]) => {
        if (n.callMethod) {
          n.callMethod(...args);
        } else {
          n.queue.push(args);
        }
      },
      {
        push: (...args: unknown[]) => {
          n.queue.push(args);
        },
        loaded: true,
        version: "2.0",
        queue: [] as unknown[],
      }
    );
    window.fbq = n;
    window._fbq = n;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
  window.__kitIaPixelInitialized = true;
}

export function trackViewContent(): void {
  if (typeof window === "undefined" || !isPixelConfigured() || !window.fbq || window.__kitIaViewContentSent) {
    return;
  }

  window.fbq("track", "ViewContent", {
    content_name: PRODUCT_NAME,
    content_type: "product",
    value: PRODUCT_PRICE,
    currency: CURRENCY,
  });
  window.__kitIaViewContentSent = true;
}

export function trackInitiateCheckout(): void {
  if (typeof window === "undefined" || !isPixelConfigured() || !window.fbq) {
    return;
  }

  window.fbq("track", "InitiateCheckout", {
    content_name: PRODUCT_NAME,
    content_type: "product",
    value: PRODUCT_PRICE,
    currency: CURRENCY,
    num_items: 1,
  });
}
