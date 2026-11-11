import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { HowItWorks } from "./components/HowItWorks";
import { ProductContents } from "./components/ProductContents";
import { BonusGallery } from "./components/BonusGallery";
import { RealExamples } from "./components/RealExamples";
import { AudienceSection } from "./components/AudienceSection";
import { OfferSection } from "./components/OfferSection";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { CANONICAL_URL } from "./config/site";
import { initMetaPixel, trackViewContent } from "./utils/pixel";

export function App() {
  useEffect(() => {
    initMetaPixel();
    trackViewContent();

    if (CANONICAL_URL && CANONICAL_URL.trim().length > 0) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", CANONICAL_URL.trim());
    }
  }, []);

  return (
    <div className="min-h-dvh bg-[#071226] text-white flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <ProductContents />
        <BonusGallery />
        <RealExamples />
        <AudienceSection />
        <OfferSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
