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
  CalendarCheck,
  ClipboardCheck,
  Heart,
  Clock,
  Users,
  ThumbsUp,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
  fadeIn,
} from "@/lib/animations";
import type { PageHash } from "@/lib/useHashRouter";

interface HomePageProps {
  navigate: (page: PageHash) => void;
}

/* ──────────────────────────── data ──────────────────────────── */

const services = [
  {
    icon: Wind,
    title: "Air Duct Cleaning",
    desc: "Reduce allergies & asthma by removing dust, debris, pet hair, pollen & mold spores from your ductwork.",
    color: "bg-brand-orange/10 text-brand-orange",
    hover: "group-hover:bg-brand-orange/20",
  },
  {
    icon: Flame,
    title: "Dryer Vent Cleaning",
    desc: "Fix inefficient dryers, prevent fire hazards, and improve dryer performance with professional vent cleaning.",
    color: "bg-red-50 text-red-500",
    hover: "group-hover:bg-red-100",
  },
  {
    icon: Wrench,
    title: "Air Duct Replacement",
    desc: "Complete HVAC ductwork replacement for improved air quality and system efficiency.",
    color: "bg-slate-100 text-brand-navy",
    hover: "group-hover:bg-slate-200",
  },
  {
    icon: Sparkles,
    title: "HVAC Sanitizing",
    desc: "Complete HVAC system sanitization for a cleaner, healthier indoor environment.",
    color: "bg-emerald-50 text-emerald-600",
    hover: "group-hover:bg-emerald-100",
  },
  {
    icon: Wind,
    title: "Coil Cleaning",
    desc: "Professional A/C condenser and evaporator coil cleaning for optimal system performance.",
    color: "bg-cyan-50 text-cyan-600",
    hover: "group-hover:bg-cyan-100",
  },
  {
    icon: Shield,
    title: "Air Duct Sealing",
    desc: "Seal leaky ducts to improve efficiency, reduce energy costs, and enhance air quality.",
    color: "bg-amber-50 text-amber-600",
    hover: "group-hover:bg-amber-100",
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
  { icon: Star, label: "4.4\u2605 Yelp Rated" },
  { icon: CheckCircle2, label: "100% Satisfaction" },
];

const stats = [
  { number: "15+", label: "Years Experience", icon: Clock },
  { number: "10,000+", label: "Homes Cleaned", icon: Users },
  { number: "4.4\u2605", label: "Average Rating", icon: Star },
  { number: "100%", label: "Satisfaction", icon: ThumbsUp },
];

const reasons = [
  {
    icon: Award,
    title: "NADCA Certified",
    desc: "Following the highest industry standards for air duct cleaning and HVAC maintenance.",
  },
  {
    icon: Shield,
    title: "EPA Registered Products",
    desc: "Safe, non-toxic cleaning solutions that protect your family and the environment.",
  },
  {
    icon: Wind,
    title: "True Negative Air Pressure",
    desc: "Professional-grade equipment that ensures thorough debris removal from every duct.",
  },
  {
    icon: CheckCircle2,
    title: "100% Satisfaction Guarantee",
    desc: "If you're not completely satisfied with our work, we'll make it right or your money back.",
  },
];

const steps = [
  {
    num: "01",
    icon: CalendarCheck,
    title: "Call or Book Online",
    desc: "Schedule your appointment at your convenience — we offer flexible time slots.",
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "Free Inspection",
    desc: "Our technician inspects your system and provides a detailed, honest assessment.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Professional Cleaning",
    desc: "Using NADCA-approved methods and professional equipment for a deep clean.",
  },
  {
    num: "04",
    icon: Heart,
    title: "Enjoy Clean Air",
    desc: "Breathe easier knowing your home has cleaner, healthier air for your family.",
  },
];

/* ──────────────────────────── component ──────────────────────────── */

export function HomePage({ navigate }: HomePageProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerContainer}
    >
      {/* ================================================================
          SECTION 1 — HERO (full viewport, split layout)
          ================================================================ */}
      <section className="relative min-h-screen flex items-stretch overflow-hidden">
        {/* background image (right on desktop, top on mobile) */}
        <div className="absolute inset-0 lg:relative lg:w-1/2 lg:flex-shrink-0">
          <Image
            src="/hero-tech.png"
            alt="Professional air duct cleaning technician"
            fill
            className="object-cover"
            unoptimized
            priority
          />
          {/* subtle gradient on image edge for blending */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent to-brand-navy/20" />
          <div className="lg:hidden absolute inset-0 bg-brand-navy/60" />
        </div>

        {/* gradient overlay on the left text area */}
        <div className="absolute inset-0 lg:relative lg:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/90 lg:bg-gradient-to-br lg:from-brand-navy lg:via-brand-navy lg:to-brand-navy/95" />
          {/* subtle radial decoration */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
        </div>

        {/* content */}
        <div className="relative z-10 flex items-center w-full lg:w-1/2">
          <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              {/* Badge */}
              <motion.div variants={slideInLeft}>
                <Badge className="mb-6 bg-brand-orange/15 text-brand-orange border-brand-orange/25 px-4 py-1.5 text-sm font-medium inline-flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" />
                  Orange County&apos;s #1 Air Duct Cleaning Service
                </Badge>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={slideInLeft}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
              >
                Breathe{" "}
                <span className="text-brand-orange">Cleaner</span>,{" "}
                <span className="text-brand-orange">Healthier</span>{" "}
                Air in Your Home
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                variants={slideInLeft}
                className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-lg"
              >
                Poor indoor air quality can cause allergies, asthma, and other
                respiratory issues. Our professional duct cleaning removes dust,
                mold, pet dander, and contaminants so your family can breathe
                easier.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={slideInLeft}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Button
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-brand-orange/30 rounded-lg transition-all duration-200"
                  onClick={() => navigate("contact")}
                >
                  Get Your Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg"
                  onClick={() => navigate("services")}
                >
                  View Our Services
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                variants={slideInLeft}
                className="flex flex-wrap gap-x-6 gap-y-3"
              >
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <badge.icon className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span className="text-sm whitespace-nowrap">{badge.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* phone number bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-brand-navy/90 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-6 py-3 flex items-center justify-center gap-2 text-white">
            <Phone className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-medium text-gray-300">Call Now:</span>
            <a
              href="tel:9494008690"
              className="text-lg font-bold tracking-wide hover:text-brand-orange transition-colors"
            >
              (949) 400-8690
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — STATS BAR
          ================================================================ */}
      <section className="bg-brand-navy py-8 lg:py-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-6"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center px-4 ${
                  i < stats.length - 1
                    ? "lg:border-r lg:border-white/15"
                    : ""
                }`}
              >
                <stat.icon className="w-5 h-5 text-brand-orange mb-2" />
                <span className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  {stat.number}
                </span>
                <span className="text-xs lg:text-sm text-gray-400 mt-1 uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================================================================
          SECTION 3 — SERVICES GRID
          ================================================================ */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14"
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20 font-medium"
            >
              What We Do
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/40 group cursor-pointer">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${service.color} ${service.hover}`}
                    >
                      <service.icon className="w-6 h-6" />
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

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white rounded-lg"
              onClick={() => navigate("services")}
            >
              View All 16 Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — WHY CHOOSE US
          ================================================================ */}
      <section className="py-20 lg:py-28 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* left — text */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Badge
                variant="secondary"
                className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20 font-medium"
              >
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Why Orange County Trusts Us
              </h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                With over 15 years of experience and thousands of satisfied
                customers, we&apos;re the trusted choice for air duct cleaning
                in Orange County.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {reasons.map((reason) => (
                  <motion.div
                    key={reason.title}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <reason.icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy text-sm mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-brand-muted text-xs leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* right — image */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/process-steps.png"
                  alt="Our professional cleaning process"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
              {/* floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:flex items-center gap-3 border border-border/50">
                <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm">100% Guaranteed</p>
                  <p className="text-brand-muted text-xs">Satisfaction or money back</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5 — HOW IT WORKS
          ================================================================ */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20 font-medium"
            >
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-brand-muted text-lg max-w-xl mx-auto">
              Getting your air ducts cleaned is easy. Here&apos;s how it works.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {/* dotted connector lines (desktop only) */}
            <div className="hidden lg:block absolute top-14 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0 border-t-2 border-dashed border-brand-orange/25" />

            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeInUp}
                className="relative flex flex-col items-center text-center"
              >
                {/* step number + icon */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-brand-navy flex items-center justify-center mb-5 shadow-lg shadow-brand-navy/20">
                  <step.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <span className="text-3xl font-extrabold text-brand-orange/20 mb-2">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6 — TESTIMONIALS
          ================================================================ */}
      <section className="py-20 lg:py-28 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14"
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20 font-medium"
            >
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {reviews.map((review) => (
              <motion.div key={review.name} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/40">
                  <CardContent className="p-6">
                    {/* stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-brand-orange text-brand-orange"
                        />
                      ))}
                    </div>

                    {/* quote */}
                    <div className="relative mb-5">
                      <Quote className="w-7 h-7 text-brand-orange/15 absolute -top-1 -left-1" />
                      <p className="text-brand-dark text-sm leading-relaxed italic pl-7">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>

                    {/* divider + author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                      <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white font-semibold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy text-sm">
                          {review.name}
                        </p>
                        <p className="text-brand-muted text-xs">{review.city}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 7 — SCAM WARNING
          ================================================================ */}
      <section className="py-14 px-6 bg-amber-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex items-start gap-4 p-6 md:p-8 bg-white rounded-2xl border border-amber-200 shadow-sm"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                Beware of Air Duct Cleaning Scams
              </h3>
              <p className="text-amber-800 leading-relaxed text-sm">
                Many companies advertise extremely low prices ($49&ndash;$99) but
                then use high-pressure sales tactics to upsell unnecessary
                services. At American Air Duct Cleaning, we provide{" "}
                <strong>honest, upfront pricing</strong> with no hidden fees. Our
                technicians are professionally trained, licensed, and fully
                insured. We follow NADCA guidelines and use EPA registered
                products. Get a real quote from a company you can trust.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8 — FINAL CTA
          ================================================================ */}
      <section className="py-20 lg:py-28 px-6 bg-brand-navy text-white relative overflow-hidden">
        {/* background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
          >
            Ready to Breathe{" "}
            <span className="text-brand-orange">Cleaner Air</span>?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Schedule your free estimate today and take the first step toward a
            healthier home. Serving all of Orange County and Southern California.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-brand-orange/30 rounded-lg"
              onClick={() => navigate("contact")}
            >
              Schedule Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="tel:9494008690">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg"
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
