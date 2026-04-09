"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cog,
  ThumbsUp,
  Leaf,
  CalendarCheck,
  Search,
  Sparkles,
  Smile,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: ShieldCheck,
    title: "NADCA Certified",
    description:
      "We are certified by the National Air Duct Cleaners Association, ensuring the highest industry standards for every job we perform.",
  },
  {
    icon: Cog,
    title: "Advanced Equipment",
    description:
      "Our state-of-the-art vacuum systems and rotary brush technology deliver a deep, thorough clean that goes beyond surface level.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right or your money back.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "All our cleaning solutions are EPA-approved, non-toxic, and safe for your family, pets, and the environment.",
  },
];

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Schedule",
    description: "Book your free estimate online or by phone at your convenience.",
  },
  {
    icon: Search,
    step: "02",
    title: "Inspect",
    description: "Our technicians inspect your system and provide a detailed assessment.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Clean",
    description: "We thoroughly clean your entire HVAC system using professional equipment.",
  },
  {
    icon: Smile,
    step: "04",
    title: "Enjoy",
    description: "Breathe easier with cleaner air and a more efficient system.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
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
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Why Choose American Duct Cleaning?
          </h2>
          <p className="text-brand-muted text-lg">
            With over 15 years of experience and thousands of satisfied
            customers, we&apos;re Orange County&apos;s most trusted choice for
            professional duct cleaning.
          </p>
        </motion.div>

        {/* Trust Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-brand-gray/50 border border-gray-100 hover:shadow-lg hover:border-brand-orange/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-orange/20 transition-colors">
                <reason.icon className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">
                {reason.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          className="bg-brand-navy rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
            Our Simple 4-Step Process
          </h3>
          <p className="text-white/60 text-center mb-10 max-w-lg mx-auto">
            Getting cleaner air is easy. Here&apos;s how it works from start to
            finish.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-white/10" />
                )}
                <div className="relative inline-flex items-center justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  {step.title}
                </h4>
                <p className="text-white/60 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
