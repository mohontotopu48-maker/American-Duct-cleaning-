"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Award,
  Leaf,
  Zap,
  Heart,
  Users,
  ThumbsUp,
  Star,
} from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

const certifications = [
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    desc: "Fully licensed by the state of California and carry comprehensive insurance for your protection.",
  },
  {
    icon: Award,
    title: "NADCA Guidelines",
    desc: "We follow the National Air Duct Cleaners Association standards for professional duct cleaning.",
  },
  {
    icon: Leaf,
    title: "EPA Registered Products",
    desc: "All cleaning and sanitizing products are EPA registered, ensuring safety for your family and pets.",
  },
  {
    icon: Zap,
    title: "Energy Rated Company",
    desc: "Certified as an energy-rated company, helping you reduce utility costs through cleaner, more efficient systems.",
  },
];

const coreValues = [
  {
    icon: Heart,
    title: "Customer First",
    desc: "Every decision we make puts our customers' needs and satisfaction above all else. Your comfort and health are our top priority.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Workmanship",
    desc: "We take pride in delivering thorough, professional results on every job. No shortcuts, no compromises on quality.",
  },
  {
    icon: Users,
    title: "Family Values",
    desc: "As a family-owned business, we treat every customer like family. Honest pricing, transparent communication, and genuine care.",
  },
  {
    icon: Star,
    title: "Continuous Excellence",
    desc: "We invest in ongoing training and the latest equipment to ensure we deliver the best possible service every time.",
  },
];

export function AboutPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerContainer}
    >
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.png"
            alt="About American Air Duct Cleaning"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 to-brand-navy/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            A family-owned company dedicated to providing quality service and
            solutions for improved indoor air quality in Orange County.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft}>
              <Badge variant="secondary" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Serving Orange County &{" "}
                <span className="text-brand-orange">Southern California</span>
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  American Air Duct Cleaning is a professionally owned and
                  operated company serving both residential and commercial
                  accounts throughout Orange County and Southern California.
                </p>
                <p>
                  We are a family-owned business dedicated to providing quality
                  service and solutions for improved indoor air quality. Our
                  company has highly trained, professional, and courteous
                  employees who take pride in their work.
                </p>
                <p>
                  Led by Dan Marino, our team of professional technicians uses
                  the latest equipment and techniques, including true negative
                  air pressure and HEPA filtration, to deliver exceptional
                  results on every job.
                </p>
                <p>
                  We believe that clean air is essential for a healthy home. Our
                  mission is to help families reduce allergies, asthma, and
                  respiratory issues by providing thorough, professional air
                  duct cleaning and HVAC maintenance services.
                </p>
              </div>
            </motion.div>

            <motion.div variants={slideInRight}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-team.png"
                  alt="American Air Duct Cleaning team"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-brand-gray">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Certifications & Standards
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              We maintain the highest industry standards to ensure your complete
              satisfaction and safety.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications.map((cert) => (
              <motion.div key={cert.title} variants={fadeInUp}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-7 h-7 text-brand-orange" />
                    </div>
                    <h3 className="font-semibold text-brand-navy mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {cert.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {coreValues.map((value) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-brand-orange">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-1">
                        {value.title}
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dan Marino Spotlight */}
      <section className="py-16 px-4 bg-brand-navy text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={fadeInUp}>
            <div className="w-20 h-20 rounded-full bg-brand-orange/20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-brand-orange" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Meet Dan Marino
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              &ldquo;I started this company because I believe every family deserves
              clean, healthy air in their home. We treat every customer like
              family — with honest pricing, thorough work, and genuine care for
              their well-being.&rdquo;
            </p>
            <p className="text-brand-orange font-semibold">— Dan Marino, Owner</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
