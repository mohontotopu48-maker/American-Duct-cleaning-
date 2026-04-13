"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Shield,
  Award,
  Star,
  Wind,
  Flame,
  Wrench,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/animations";
import type { PageHash } from "@/lib/useHashRouter";

interface HomePageProps {
  navigate: (page: PageHash) => void;
}

const services = [
  {
    icon: Wind,
    title: "Air Duct Cleaning",
    desc: "Reduce allergies & asthma by removing dust, debris, pet hair, pollen & mold spores from your ductwork.",
    color: "text-brand-orange",
  },
  {
    icon: Flame,
    title: "Dryer Vent Cleaning",
    desc: "Fix inefficient dryers, prevent fire hazards, and improve dryer performance with professional vent cleaning.",
    color: "text-red-500",
  },
  {
    icon: Wrench,
    title: "Air Duct Replacement",
    desc: "Complete HVAC ductwork replacement for improved air quality and system efficiency.",
    color: "text-brand-navy",
  },
  {
    icon: Sparkles,
    title: "HVAC Sanitizing",
    desc: "Complete HVAC system sanitization for a cleaner, healthier indoor environment.",
    color: "text-emerald-500",
  },
  {
    icon: Wind,
    title: "Coil Cleaning",
    desc: "Professional A/C condenser and evaporator coil cleaning for optimal system performance.",
    color: "text-cyan-600",
  },
  {
    icon: Shield,
    title: "Air Duct Sealing",
    desc: "Seal leaky ducts to improve efficiency, reduce energy costs, and enhance air quality.",
    color: "text-amber-600",
  },
];

const reviews = [
  {
    name: "Nancy C.",
    city: "Irvine, CA",
    text: "Fantastic customer service! The team was so professional and Dan took time and explained every step to us. They showed up on time, and took care to cover furniture and also wore booties over their shoes.",
    rating: 5,
  },
  {
    name: "Christopher R.",
    city: "Costa Mesa, CA",
    text: "I have really bad allergies. They came out and noticed my AC unit was banged up, fixed it for free. Great job, now I'm breathing clean air.",
    rating: 5,
  },
  {
    name: "Miriam V.",
    city: "Irvine, CA",
    text: "My kids' allergies kept acting up. Thanks to American Air Duct Cleaning, my two daughters' allergies have since stopped acting up and that old rusty odor around my house is gone!",
    rating: 5,
  },
  {
    name: "David B.",
    city: "Newport Beach, CA",
    text: "Nice, pleasant company to deal with. Dan came out and walked me around and explained what he was going to do. He showed me the inside of my ductwork before and after the job.",
    rating: 5,
  },
];

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "NADCA Certified" },
  { icon: Star, label: "4.4★ Yelp Rated" },
  { icon: CheckCircle2, label: "EPA Registered" },
];

export function HomePage({ navigate }: HomePageProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="Professional air duct cleaning"
            fill
            className="object-cover"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-brand-orange/20 text-brand-orange border-brand-orange/30 px-4 py-1.5 text-sm">
                <Phone className="w-3.5 h-3.5 mr-2" />
                Call (949) 400-8690 — Free Estimates
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Reduce Allergies & Asthma{" "}
              <span className="text-brand-orange">at Home</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let us help you reduce the amount of dust in your home and improve
              the air you breathe. Those most susceptible are children, pregnant
              women and the elderly.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-brand-orange/25"
                onClick={() => navigate("contact")}
              >
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() => navigate("services")}
              >
                Our Services
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 md:gap-10"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <badge.icon className="w-5 h-5 text-brand-orange" />
                  <span className="text-sm">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Comprehensive Air Quality Solutions
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              From duct cleaning to HVAC sanitizing, we provide a full range of
              professional services to keep your indoor air clean and safe.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50 group cursor-pointer">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors`}
                    >
                      <service.icon
                        className={`w-6 h-6 ${service.color}`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
              onClick={() => navigate("services")}
            >
              View All 16 Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Beware of Scams */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            variants={fadeInUp}
            className="flex items-start gap-4 p-6 md:p-8 bg-white rounded-xl border border-amber-200 shadow-sm"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Beware of Air Duct Cleaning Scams
              </h3>
              <p className="text-amber-700 leading-relaxed">
                Many companies advertise extremely low prices ($49–$99) but then
                use high-pressure sales tactics to upsell unnecessary services.
                At American Air Duct Cleaning, we provide{" "}
                <strong>honest, upfront pricing</strong> with no hidden fees.
                Our technicians are professionally trained, licensed, and fully
                insured. We follow NADCA guidelines and use EPA registered
                products. Get a real quote from a company you can trust.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-brand-gray">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Customer Reviews
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-brand-muted text-lg">
              Rated 4.4 out of 5 stars on Yelp with 32+ verified reviews
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {reviews.map((review) => (
              <motion.div key={review.name} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-brand-orange text-brand-orange"
                        />
                      ))}
                    </div>
                    <div className="relative mb-4">
                      <Quote className="w-8 h-8 text-brand-orange/20 absolute -top-1 -left-1" />
                      <p className="text-brand-dark text-sm leading-relaxed italic pl-6">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                      <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white font-semibold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy text-sm">
                          {review.name}
                        </p>
                        <p className="text-brand-muted text-xs">
                          {review.city}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Breathe Cleaner Air Today
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg mb-8"
          >
            Don&apos;t wait until allergies act up. Schedule your professional
            air duct cleaning and start breathing easier. Serving all of Orange
            County and Southern California.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-6 text-lg font-semibold"
              onClick={() => navigate("contact")}
            >
              Schedule Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="tel:9494008690">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (949) 400-8690
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
