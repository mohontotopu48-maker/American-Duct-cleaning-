"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Air Duct Cleaning",
    image: "/service-duct.png",
    description:
      "Comprehensive air duct cleaning that removes dust, debris, allergens, and contaminants from your entire HVAC system for cleaner, healthier air.",
  },
  {
    title: "HVAC System Cleaning",
    image: "/service-hvac.png",
    description:
      "Full HVAC system cleaning including coils, blower motor, drain pan, and all components to maximize efficiency and air quality.",
  },
  {
    title: "Dryer Vent Cleaning",
    image: "/service-dryer.png",
    description:
      "Professional dryer vent cleaning to eliminate lint buildup, reduce fire hazards, and improve drying efficiency for your laundry.",
  },
  {
    title: "Mold Remediation",
    image: "/service-mold.png",
    description:
      "Expert mold removal and remediation services for your ductwork, eliminating mold growth and preventing future contamination.",
  },
  {
    title: "Air Quality Testing",
    image: "/service-airquality.png",
    description:
      "Comprehensive indoor air quality assessments with detailed reports and recommendations for improving your home's air quality.",
  },
  {
    title: "Commercial Cleaning",
    image: "/service-commercial.png",
    description:
      "Large-scale commercial HVAC and duct cleaning services for offices, retail spaces, restaurants, and industrial facilities.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Our Professional Services
          </h2>
          <p className="text-brand-muted text-lg">
            We offer a full range of indoor air quality solutions for
            residential and commercial properties throughout Orange County.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-brand-navy/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="inline-flex items-center gap-1.5 text-brand-orange font-semibold text-sm hover:gap-2.5 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
