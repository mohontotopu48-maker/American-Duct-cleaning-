"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onOpenQuote: () => void;
}

export function CTASection({ onOpenQuote }: CTASectionProps) {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-orange-500" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready for Cleaner Air?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Get your free quote today and breathe easier tomorrow. Our
            certified technicians are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:(714)555-0192"
              className="inline-flex items-center gap-2 bg-white text-brand-orange font-bold px-8 py-3.5 rounded-lg hover:bg-white/90 transition-all text-base shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now: (714) 555-0192
            </a>
            <Button
              onClick={onOpenQuote}
              className="bg-brand-navy hover:bg-brand-navy-light text-white font-semibold px-8 py-3.5 rounded-lg border-2 border-white/30 text-base transition-all"
            >
              Request Free Quote Online
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
