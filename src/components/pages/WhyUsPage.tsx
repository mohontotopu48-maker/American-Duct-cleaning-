"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Award,
  Leaf,
  Wind,
  Gauge,
  CheckCircle2,
  PhoneCall,
  Search,
  Sparkles,
  Heart,
  ArrowRight,
  Home,
  Users,
  Star,
} from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import type { PageHash } from "@/lib/useHashRouter";

interface WhyUsPageProps {
  navigate: (page: PageHash) => void;
}

const reasons = [
  {
    icon: Award,
    title: "NADCA Certified",
    desc: "We follow the National Air Duct Cleaners Association standards, the gold standard for professional duct cleaning procedures and equipment.",
  },
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    desc: "State of California licensed and fully insured. Complete peace of mind for every job we perform in your home or business.",
  },
  {
    icon: Leaf,
    title: "EPA Registered Products",
    desc: "All sanitizing and cleaning products are EPA registered, ensuring safety for your family, pets, and the environment.",
  },
  {
    icon: Wind,
    title: "HEPA Filtration",
    desc: "Our industrial HEPA-filtered vacuum systems capture 99.97% of particles as small as 0.3 microns, ensuring thorough contaminant removal.",
  },
  {
    icon: Gauge,
    title: "True Negative Air Pressure",
    desc: "We use true negative air pressure — the professional standard — to pull contaminants out of your ductwork while preventing cross-contamination.",
  },
  {
    icon: CheckCircle2,
    title: "100% Satisfaction Guarantee",
    desc: "We stand behind every job. If you're not completely satisfied with our work, we'll make it right. Your satisfaction is our promise.",
  },
];

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Call or Book Online",
    desc: "Contact us by phone at (949) 400-8690 or fill out our online form to request a free estimate.",
  },
  {
    icon: Search,
    step: "02",
    title: "Inspection & Quote",
    desc: "Our technician arrives on time, inspects your system, and provides an honest, upfront quote with no hidden fees.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Professional Cleaning",
    desc: "Using true negative air pressure and HEPA filtration, we thoroughly clean your ductwork and HVAC system.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Enjoy Clean Air",
    desc: "Breathe easier knowing your air is clean. We clean up after ourselves and leave your home spotless.",
  },
];

const stats = [
  { icon: Home, value: "5,000+", label: "Homes Served" },
  { icon: Star, value: "4.4★", label: "Yelp Rating" },
  { icon: Users, value: "32+", label: "Verified Reviews" },
  { icon: Shield, value: "100%", label: "Satisfaction Guaranteed" },
];

export function WhyUsPage({ navigate }: WhyUsPageProps) {
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
            src="/service-hvac.png"
            alt="Why choose American Air Duct Cleaning"
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
            Why Choose Us
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Discover why thousands of Orange County homeowners trust American
            Air Duct Cleaning for their indoor air quality needs.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4 bg-brand-orange">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-white/80 mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6 Reasons */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Our Advantages
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              6 Reasons to Choose American Air Duct Cleaning
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reasons.map((reason) => (
              <motion.div key={reason.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                      <reason.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {reason.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-brand-gray">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              How It Works
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              Simple, straightforward, and stress-free. Here&apos;s what to expect.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, i) => (
              <motion.div key={step.title} variants={fadeInUp} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-brand-orange/20 -translate-x-6 z-0" />
                )}
                <Card className="h-full relative z-10">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-brand-orange/20 mb-3">
                      {step.step}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-brand-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/process-steps.png"
                alt="Our professional cleaning process"
                width={1200}
                height={400}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-navy text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Ready to Experience the Difference?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 mb-8">
            Join thousands of satisfied Orange County homeowners. Get your free
            estimate today.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-6 font-semibold"
              onClick={() => navigate("contact")}
            >
              Get Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="tel:9494008690">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6"
              >
                (949) 400-8690
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
