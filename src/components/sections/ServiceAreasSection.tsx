"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const cities = [
  "Anaheim",
  "Irvine",
  "Santa Ana",
  "Huntington Beach",
  "Garden Grove",
  "Fullerton",
  "Orange",
  "Costa Mesa",
  "Mission Viejo",
  "Westminster",
  "Newport Beach",
  "Yorba Linda",
  "Tustin",
  "Lakewood",
  "Cypress",
  "Buena Park",
  "Brea",
  "Placentia",
  "Fountain Valley",
  "Laguna Niguel",
];

export function ServiceAreasSection() {
  return (
    <section id="areas" className="py-16 md:py-24 bg-brand-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-4">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Proudly Serving Orange County
          </h2>
          <p className="text-brand-muted text-lg">
            We provide professional duct cleaning services throughout Orange
            County and surrounding areas. Same-day and next-day appointments
            available.
          </p>
        </motion.div>

        {/* Cities Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          {cities.map((city, index) => (
            <motion.button
              key={city}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-brand-navy font-medium text-sm hover:border-brand-orange hover:bg-brand-orange/5 hover:text-brand-orange transition-all shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5" />
              {city}
            </motion.button>
          ))}
        </motion.div>

        {/* Don't see your city */}
        <motion.div
          className="text-center bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-brand-navy font-semibold text-lg mb-2">
            Don&apos;t see your city?
          </p>
          <p className="text-brand-muted text-sm mb-4">
            We serve all of Orange County and surrounding areas. Give us a call
            and we&apos;ll let you know if we can help!
          </p>
          <a
            href="tel:(714)555-0192"
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-navy-light transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            Call (714) 555-0192
          </a>
        </motion.div>
      </div>
    </section>
  );
}
