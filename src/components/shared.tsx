"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  badge,
  title,
  description,
  light = false,
  center = true,
}: {
  badge: string;
  title: string;
  description: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      <span
        className={`inline-block mb-4 px-4 py-1.5 text-sm font-semibold rounded-full ${
          light
            ? "bg-white/10 text-white"
            : "bg-brand-orange/10 text-brand-orange"
        }`}
      >
        {badge}
      </span>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-lg md:text-xl leading-relaxed ${
          light ? "text-white/80" : "text-brand-muted"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export function PageHero({
  title,
  subtitle,
  badge,
  backgroundImage = "/hero-bg.png",
}: {
  title: string;
  subtitle: string;
  badge: string;
  backgroundImage?: string;
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/80 to-brand-navy/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold rounded-full bg-brand-orange/20 text-brand-orange">
            {badge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return null;
}
