import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import type { ImageSlotConfig } from "../config/site";

interface ProductCoverProps {
  image: ImageSlotConfig;
  title: string;
  subtitle?: string;
  priority?: boolean;
  aspectClass?: string;
  className?: string;
}

export const ProductCover: React.FC<ProductCoverProps> = ({
  image,
  title,
  subtitle,
  priority = false,
  aspectClass = "aspect-[4/5]",
  className = "",
}) => {
  const [hasError, setHasError] = useState(false);

  const showImage = Boolean(image.src) && !hasError;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B1D38] ${aspectClass} ${className}`}
    >
      {showImage ? (
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding={priority ? "sync" : "async"}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-full object-contain p-2 sm:p-3"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center p-5 text-center bg-gradient-to-b from-[#102849] to-[#071226]">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F5C542]/25 bg-[#071226]/70 text-[#F5C542]">
            <ImageIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="text-sm sm:text-base font-bold text-white leading-snug">{title}</p>
          {subtitle && (
            <p className="mt-1 text-xs sm:text-sm text-[#B8C7DA] leading-snug">{subtitle}</p>
          )}
          <p className="mt-3 text-xs text-[#B8C7DA]/75 max-w-[24ch]">
            Espacio preparado para imagen oficial:{" "}
            <span className="text-[#F5C542]/90 font-medium">{image.slotLabel}</span>
          </p>
        </div>
      )}
    </div>
  );
};
