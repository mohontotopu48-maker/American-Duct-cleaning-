"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteDialog } from "@/components/QuoteDialog";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const openQuote = () => setQuoteOpen(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenQuote={openQuote} />
      <main className="flex-1">
        <HeroSection onOpenQuote={openQuote} />
        <ServicesSection />
        <AboutSection />
        <WhyChooseSection />
        <ServiceAreasSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <CTASection onOpenQuote={openQuote} />
      </main>
      <Footer />
      <QuoteDialog
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        defaultService=""
      />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white shadow-lg shadow-brand-orange/25 flex items-center justify-center transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
