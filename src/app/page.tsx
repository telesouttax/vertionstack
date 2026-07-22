import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { BusinessMarquee } from "@/components/sections/BusinessMarquee";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SpeedHighlight } from "@/components/sections/SpeedHighlight";
import { Trust } from "@/components/sections/Trust";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductShowcase />
        <BusinessMarquee />
        <BeforeAfter />
        <ServicesGrid />
        <HowItWorks />
        <SpeedHighlight />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
