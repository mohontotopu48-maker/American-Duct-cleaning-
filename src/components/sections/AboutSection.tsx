"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  Leaf,
  Heart,
  Star,
} from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10,000+", label: "Homes Serviced" },
  { value: "50,000+", label: "Ducts Cleaned" },
  { value: "4.9", label: "Star Rating" },
];

const values = [
  {
    icon: Award,
    title: "Professionalism",
    desc: "Trained, certified technicians who respect your home and time.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Work",
    desc: "We stand behind every job with our 100% satisfaction guarantee.",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Your comfort and satisfaction are our top priorities.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    desc: "Safe, non-toxic cleaning products that protect your family.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-brand-gray">
      <div className="container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-hero.png"
                alt="About American Duct Cleaning"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
            {/* Floating team image */}
            <motion.div
              className="absolute -bottom-8 -right-4 md:-right-8 w-40 md:w-48 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/about-team.png"
                alt="Our team"
                width={200}
                height={200}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </motion.div>
            {/* Badge */}
            <motion.div
              className="absolute -top-4 -left-4 bg-brand-orange text-white rounded-xl p-4 shadow-lg hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-3xl font-bold">15+</div>
              <div className="text-xs font-medium opacity-90">Years</div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Trusted Air Duct Cleaning Experts Since 2009
            </h2>
            <p className="text-brand-muted leading-relaxed mb-4">
              Founded in 2009, American Duct Cleaning has been the trusted
              choice for residential and commercial HVAC cleaning services
              throughout Orange County. What started as a small family business
              has grown into one of the region&apos;s most respected air quality
              companies.
            </p>
            <p className="text-brand-muted leading-relaxed mb-4">
              Our NADCA-certified technicians use state-of-the-art equipment
              and eco-friendly cleaning solutions to ensure your home or
              business has the cleanest, healthiest air possible. We take pride
              in our attention to detail and commitment to customer
              satisfaction.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              Every job is backed by our 100% satisfaction guarantee. We don&apos;t
              just clean ducts — we build lasting relationships with our
              customers based on trust, quality, and results.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <val.icon className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy text-sm">
                      {val.title}
                    </h4>
                    <p className="text-brand-muted text-xs mt-0.5">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white rounded-2xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-1">
                {stat.value}
              </div>
              {stat.label.includes("Star") && (
                <div className="flex items-center justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3 h-3 text-brand-orange fill-brand-orange"
                    />
                  ))}
                </div>
              )}
              <div className="text-brand-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
