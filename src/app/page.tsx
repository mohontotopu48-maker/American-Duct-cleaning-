"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { HomePage } from "@/components/pages/HomePage";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { AboutPage } from "@/components/pages/AboutPage";
import { WhyUsPage } from "@/components/pages/WhyUsPage";
import { AreasPage } from "@/components/pages/AreasPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { useHashRouter, type PageHash } from "@/lib/useHashRouter";
import { pageTransition } from "@/lib/animations";
import { useState, useEffect } from "react";

export default function Home() {
  const { currentPage, navigate } = useHashRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigate={navigate} />;
      case "services":
        return <ServicesPage navigate={navigate} />;
      case "about":
        return <AboutPage />;
      case "why-us":
        return <WhyUsPage navigate={navigate} />;
      case "areas":
        return <AreasPage navigate={navigate} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} navigate={navigate} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer navigate={navigate} />

      <ChatWidget navigate={navigate} />

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-20 z-50 w-11 h-11 rounded-full bg-brand-navy hover:bg-brand-navy-light text-white shadow-lg flex items-center justify-center transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
