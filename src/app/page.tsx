"use client";

import { useState, useCallback } from "react";
import { RouterProvider, useRouter } from "@/components/shared/Router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteDialog } from "@/components/layout/QuoteDialog";
import { HomePage } from "@/components/pages/HomePage";
import { AboutPage } from "@/components/pages/AboutPage";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import { AreasPage } from "@/components/pages/AreasPage";
import { ContactPage } from "@/components/pages/ContactPage";

function PageRouter() {
  const { route } = useRouter();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("");

  const openQuote = useCallback((service?: string) => {
    setQuoteService(service || "");
    setQuoteOpen(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenQuote={openQuote} />
      <main className="flex-1">
        {route.page === "home" && <HomePage onOpenQuote={openQuote} />}
        {route.page === "about" && <AboutPage />}
        {route.page === "services" && <ServicesPage />}
        {route.page === "service-detail" && (
          <ServiceDetailPage slug={route.slug} />
        )}
        {route.page === "areas" && <AreasPage />}
        {route.page === "contact" && <ContactPage />}
      </main>
      <Footer />
      <QuoteDialog
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        defaultService={quoteService}
      />
    </div>
  );
}

export default function Root() {
  return (
    <RouterProvider>
      <PageRouter />
    </RouterProvider>
  );
}
