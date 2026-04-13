"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ShieldCheck, Clock, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/60" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-brand-orange/10 blur-3xl hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl hidden lg:block" />

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4" />
                NADCA Certified &amp; Licensed
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Breathe{" "}
              <span className="text-brand-orange">Cleaner</span> Air
              <br />
              in Your Home
            </motion.h1>

            <motion.p
              className="text-white/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Professional air duct and HVAC cleaning services in Orange County.
              Remove allergens, improve efficiency, and enjoy fresher, healthier
              air.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button
                onClick={onOpenQuote}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-8 py-3 rounded-lg text-base transition-all shadow-lg shadow-brand-orange/25"
              >
                Get Free Quote
              </Button>
              <Button
                onClick={() => scrollTo("services")}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 rounded-lg text-base transition-all"
              >
                Our Services
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {[
                { icon: ShieldCheck, text: "Licensed & Insured" },
                { icon: Clock, text: "15+ Years Experience" },
                { icon: Star, text: "5-Star Rated" },
                { icon: ShieldCheck, text: "Free Estimates" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  <badge.icon className="w-4 h-4 text-brand-orange" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Phone Number */}
            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <a
                href="tel:(714)555-0192"
                className="flex items-center gap-3 text-white text-lg md:text-xl font-semibold hover:text-brand-orange transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                (714) 555-0192
              </a>
            </motion.div>
          </div>

          {/* Right Side Image */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange/20 rounded-3xl blur-2xl" />
              <Image
                src="/hero-tech.png"
                alt="Professional duct cleaning technician"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-2xl object-cover"
                unoptimized
              />
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-brand-orange fill-brand-orange" />
                </div>
                <div>
                  <div className="text-lg font-bold text-brand-navy">4.9/5</div>
                  <div className="text-xs text-brand-muted">500+ Reviews</div>
                </div>
              </motion.div>
              {/* Second Floating Card */}
              <motion.div
                className="absolute -top-4 -right-4 bg-brand-navy rounded-xl shadow-xl p-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="text-white text-sm font-semibold">
                  15+ Years
                </div>
                <div className="text-brand-orange text-xs">Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
