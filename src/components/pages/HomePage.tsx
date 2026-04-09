"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRouter } from "@/components/shared/Router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wind,
  ShieldCheck,
  Award,
  Clock,
  Phone,
  MapPin,
  Star,
  CheckCircle2,
  ArrowRight,
  X,
  Flame,
  Droplets,
  Sparkles,
  Search,
  Home as HomeIcon,
  Zap,
  ThumbsUp,
  ChevronRight,
  ChevronDown,
  Quote,
  ArrowUp,
  Eye,
  Wrench,
  CloudRain,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

/* ────────────────────────────────────────────────
   Local animation helper
   ──────────────────────────────────────────────── */
function FadeInSection({
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

/* ────────────────────────────────────────────────
   Local section-heading component
   ──────────────────────────────────────────────── */
function SectionHeading({
  badge,
  title,
  description,
  light = false,
}: {
  badge: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <Badge
        variant="secondary"
        className={`mb-4 px-4 py-1.5 text-sm font-medium border-0 ${
          light
            ? "bg-white/10 text-white hover:bg-white/20"
            : "bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20"
        }`}
      >
        {badge}
      </Badge>
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

/* ────────────────────────────────────────────────
   Trust Ticker Marquee
   ──────────────────────────────────────────────── */
const tickerItems = [
  "NADCA Certified",
  "EPA Compliant",
  "5,000+ Homes Cleaned",
  "4.9 Star Rating",
  "Licensed & Insured",
  "Same-Day Service",
  "Free Estimates",
  "Orange County's #1",
];

function TrustTicker() {
  return (
    <section className="relative bg-brand-navy-dark py-4 overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-navy-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-navy-dark to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
          (item, i) => (
            <span
              key={i}
              className="mx-8 text-sm md:text-base font-medium text-white/70 flex items-center gap-3 shrink-0"
            >
              <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" />
              {item}
            </span>
          )
        )}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* ────────────────────────────────────────────────
   Scroll Down Indicator
   ──────────────────────────────────────────────── */
function ScrollDownIndicator() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("problem-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToContent}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer group"
      aria-label="Scroll down"
    >
      <span className="text-xs uppercase tracking-widest font-medium">
        Scroll Down
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </button>
  );
}

/* ────────────────────────────────────────────────
   Back to Top Button
   ──────────────────────────────────────────────── */
function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-brand-orange hover:bg-brand-orange-hover text-white p-3 rounded-full shadow-lg shadow-brand-orange/25 transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ────────────────────────────────────────────────
   Recent Projects Data
   ──────────────────────────────────────────────── */
const recentProjects = [
  {
    icon: Wind,
    type: "Air Duct Cleaning",
    location: "Irvine, CA",
    description:
      "Full system cleaning for a 3,200 sq ft home. Removed 15 years of dust buildup and restored airflow efficiency by 40%.",
    slug: "air-duct-cleaning",
    gradient: "from-brand-navy/80 to-brand-navy-light/80",
    accentColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Flame,
    type: "Dryer Vent Cleaning",
    location: "Anaheim, CA",
    description:
      "Emergency vent cleaning after homeowner noticed burning smell. Removed 8 feet of compacted lint from a blocked vent.",
    slug: "dryer-vent-cleaning",
    gradient: "from-red-900/80 to-orange-800/80",
    accentColor: "bg-red-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: Search,
    type: "Mold Remediation",
    location: "Huntington Beach, CA",
    description:
      "Complete mold removal from ductwork affected by coastal humidity. Applied antimicrobial sealant for lasting protection.",
    slug: "mold-removal",
    gradient: "from-emerald-900/80 to-teal-800/80",
    accentColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: HomeIcon,
    type: "HVAC System Cleaning",
    location: "Santa Ana, CA",
    description:
      "Deep HVAC cleaning including evaporator coils and blower motor. Reduced energy bills by 18% in the first month.",
    slug: "hvac-cleaning",
    gradient: "from-violet-900/80 to-purple-800/80",
    accentColor: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Sparkles,
    type: "Air Quality Testing",
    location: "Newport Beach, CA",
    description:
      "Comprehensive air quality audit for a family with allergy concerns. Identified elevated VOCs and provided action plan.",
    slug: "air-quality-testing",
    gradient: "from-cyan-900/80 to-sky-800/80",
    accentColor: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Wrench,
    type: "Air Duct Repair & Seal",
    location: "Yorba Linda, CA",
    description:
      "Duct sealing and repair for a 20-year-old system. Fixed 4 leaks and sealed all connections for maximum efficiency.",
    slug: "air-duct-cleaning",
    gradient: "from-amber-900/80 to-yellow-800/80",
    accentColor: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
];

/* ────────────────────────────────────────────────
   HomePage
   ──────────────────────────────────────────────── */
export function HomePage({
  onOpenQuote,
}: {
  onOpenQuote?: (service?: string) => void;
}) {
  const { navigate } = useRouter();

  /* ── data ── */

  const benefits = [
    {
      icon: Wind,
      title: "Reduce Allergies",
      desc: "Remove dust, pollen, and allergens from your air ducts to help your family breathe easier and reduce asthma triggers.",
    },
    {
      icon: ShieldCheck,
      title: "Eliminate Bacteria",
      desc: "Our deep cleaning removes harmful bacteria, mold spores, and volatile organic compounds trapped in your ductwork.",
    },
    {
      icon: Zap,
      title: "Improve HVAC Efficiency",
      desc: "Clean ducts allow your HVAC system to run more efficiently, lowering energy bills and extending equipment life.",
    },
    {
      icon: Sparkles,
      title: "Remove Odors",
      desc: "Say goodbye to musty, stale smells. Our cleaning process eliminates odor-causing particles from your system.",
    },
  ];

  const services = [
    {
      icon: Wind,
      title: "Air Duct Cleaning",
      desc: "Comprehensive cleaning of your entire duct system to remove dust, debris, allergens, and contaminants for healthier indoor air.",
      features: ["Full system cleaning", "Sanitization included", "Before/after photos"],
      slug: "air-duct-cleaning",
    },
    {
      icon: Flame,
      title: "Dryer Vent Cleaning",
      desc: "Remove lint buildup and obstructions from your dryer vent to prevent fires and improve drying efficiency.",
      features: ["Fire prevention", "Faster drying times", "Extended dryer life"],
      slug: "dryer-vent-cleaning",
    },
    {
      icon: HomeIcon,
      title: "HVAC System Cleaning",
      desc: "Complete HVAC cleaning including coils, blower motor, and components for optimal system performance.",
      features: ["Coil cleaning", "Blower motor service", "Efficiency boost"],
      slug: "hvac-cleaning",
    },
    {
      icon: Search,
      title: "Mold Inspection & Removal",
      desc: "Professional mold detection and safe removal from your ductwork to protect your family's health.",
      features: ["Visual inspection", "Safe mold remediation", "Preventive treatment"],
      slug: "mold-removal",
    },
    {
      icon: Sparkles,
      title: "Indoor Air Quality Testing",
      desc: "Comprehensive air quality assessment to identify pollutants, humidity levels, and improvement opportunities.",
      features: ["Detailed report", "Pollutant analysis", "Actionable recommendations"],
      slug: "air-quality-testing",
    },
  ];

  const steps = [
    { num: "01", title: "Inspection", desc: "Our certified technician inspects your entire duct system using advanced cameras to identify problem areas." },
    { num: "02", title: "Deep Cleaning", desc: "We use high-powered vacuum and rotary brush systems to dislodge and remove debris, dust, and contaminants." },
    { num: "03", title: "Sanitization", desc: "An EPA-approved antimicrobial treatment is applied to kill bacteria, mold, and prevent future growth." },
    { num: "04", title: "Final Check", desc: "We perform a thorough airflow test and quality inspection to ensure everything is clean and functioning perfectly." },
  ];

  const trustPoints = [
    { icon: MapPin, title: "Locally Trusted", desc: "Proudly serving Orange County homeowners for over 10 years." },
    { icon: Award, title: "Certified Professionals", desc: "Our technicians are NADCA-certified and fully insured." },
    { icon: Wind, title: "Advanced Equipment", desc: "State-of-the-art vacuum and brush systems for deep cleaning." },
    { icon: ThumbsUp, title: "Transparent Pricing", desc: "No hidden fees. Get a clear, upfront quote every time." },
    { icon: ShieldCheck, title: "Satisfaction Guarantee", desc: "If you're not happy, we'll come back and re-clean for free." },
    { icon: Clock, title: "Same-Day Service", desc: "Need it done today? We offer same-day and emergency service." },
  ];

  const testimonials = [
    { name: "Sarah M.", location: "Irvine", text: "The air in our home feels completely different. Super professional and quick service! Our allergies have improved dramatically since the cleaning." },
    { name: "David R.", location: "Anaheim", text: "Best duct cleaning service in Orange County. They showed up on time, explained everything, and the price was exactly what they quoted. Highly recommend!" },
    { name: "Jennifer L.", location: "Huntington Beach", text: "We had mold in our ductwork and they handled it professionally. The before and after photos were impressive. Will definitely use them again." },
    { name: "Michael K.", location: "Santa Ana", text: "Our energy bills dropped noticeably after the cleaning. The technician was knowledgeable and took the time to explain what he was doing. Great experience." },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════
          1. HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* background image + overlay */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.png"
            alt="Air duct cleaning service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* left column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge className="mb-6 bg-brand-orange/20 text-brand-orange border-0 px-4 py-1.5 text-sm font-medium">
                Trusted in Orange County
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Breathe Cleaner Air in Your Home
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                We provide expert air duct, HVAC, and dryer vent cleaning services designed to improve your indoor air quality, reduce allergens, and boost system efficiency.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  size="lg"
                  onClick={() => onOpenQuote?.()}
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-brand-orange/25"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onOpenQuote?.("Inspection")}
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base rounded-lg"
                >
                  Book Inspection Today
                </Button>
              </div>

              {/* trust checkmarks */}
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Locally Trusted
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Certified
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Same-Day Service
                </span>
              </div>
            </motion.div>

            {/* right column – hidden on mobile / tablet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <img
                  src="/hero-tech.png"
                  alt="Professional HVAC technician"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover h-[500px]"
                />

                {/* floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                  <div className="bg-brand-orange/10 p-2.5 rounded-lg">
                    <ThumbsUp className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-navy">500+</div>
                    <div className="text-sm text-brand-muted">Happy Customers</div>
                  </div>
                </div>

                {/* floating rating card */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-brand-navy">4.9</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <ScrollDownIndicator />
      </section>

      {/* ═══════════════════════════════════════════
          TRUST TICKER MARQUEE
          ═══════════════════════════════════════════ */}
      <TrustTicker />

      {/* ═══════════════════════════════════════════
          2. PROBLEM SECTION
          ═══════════════════════════════════════════ */}
      <section id="problem-section" className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left – 2×2 hazard grid */}
            <FadeInSection>
              <div className="bg-brand-navy/5 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Wind, label: "Dust & Debris", desc: "Circulating in your air" },
                    { icon: Droplets, label: "Mold Spores", desc: "Growing in ductwork" },
                    { icon: ShieldCheck, label: "Allergens", desc: "Triggering reactions" },
                    { icon: Flame, label: "Fire Hazards", desc: "Clogged dryer vents" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-5 shadow-sm">
                      <div className="bg-red-50 p-2.5 rounded-lg w-fit mb-3">
                        <item.icon className="h-5 w-5 text-red-500" />
                      </div>
                      <h4 className="font-semibold text-brand-navy mb-1">
                        {item.label}
                      </h4>
                      <p className="text-sm text-brand-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* right – copy + CTA */}
            <FadeInSection delay={0.2}>
              <Badge
                variant="secondary"
                className="mb-4 bg-red-50 text-red-600 hover:bg-red-50 border-0 px-4 py-1.5"
              >
                Warning Signs
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
                Is Your Air Making You Sick?
              </h2>

              <p className="text-brand-muted text-lg mb-6 leading-relaxed">
                Dirty air ducts can harbor dust, mold, bacteria, and allergens that
                circulate every time your HVAC system runs.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Visible dust blowing from vents",
                  "Musty or stale odors",
                  "Increasing allergy symptoms",
                  "Higher energy bills",
                  "Uneven airflow",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                    <span className="text-brand-dark">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => onOpenQuote?.("Inspection")}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold"
              >
                Schedule an Inspection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. BENEFITS SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading
              badge="Benefits"
              title="Why Clean Air Matters"
              description="Clean air ducts don't just improve air quality — they transform your entire living environment."
            />
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <FadeInSection key={b.title} delay={i * 0.1}>
                <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full group">
                  <CardContent className="p-6 md:p-8">
                    <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 p-3 rounded-xl w-fit mb-5 transition-colors">
                      <b.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-3">
                      {b.title}
                    </h3>
                    <p className="text-brand-muted leading-relaxed text-sm">
                      {b.desc}
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. SERVICES PREVIEW SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading
              badge="Our Services"
              title="Professional Cleaning Solutions"
              description="From air ducts to dryer vents, we offer a full range of professional cleaning services."
            />
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeInSection key={s.slug} delay={i * 0.1}>
                <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full group overflow-hidden bg-white">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <div className="bg-brand-navy/5 group-hover:bg-brand-orange/10 p-3 rounded-xl w-fit mb-5 transition-colors">
                      <s.icon className="h-6 w-6 text-brand-navy group-hover:text-brand-orange transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                      {s.title}
                    </h3>
                    <p className="text-brand-muted leading-relaxed text-sm mb-5 flex-grow">
                      {s.desc}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-brand-dark"
                        >
                          <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-brand-orange hover:text-brand-orange-hover font-semibold transition-colors self-start"
                      onClick={() => navigate("service-detail", s.slug)}
                    >
                      Learn More
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. PROCESS SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading
              badge="How It Works"
              title="Our 4-Step Cleaning Process"
              description="A proven, thorough process that delivers exceptional results every time."
            />
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <FadeInSection key={s.num} delay={i * 0.15}>
                <div className="relative text-center group">
                  {/* connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-orange/40 to-brand-orange/10" />
                  )}

                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors mb-5">
                    <span className="text-2xl font-bold text-brand-orange">
                      {s.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {s.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed text-sm">
                    {s.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. WHY CHOOSE US SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-brand-navy text-white relative overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading
              badge="Why Choose Us"
              title="Why Homeowners Trust Us"
              description="We combine expertise, transparency, and genuine care to deliver the best air duct cleaning experience."
              light
            />
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((tp, i) => (
              <FadeInSection key={tp.title} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="bg-brand-orange/20 p-2.5 rounded-lg w-fit mb-4">
                    <tp.icon className="h-6 w-6 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{tp.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {tp.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. TESTIMONIALS SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading
              badge="Testimonials"
              title="What Our Customers Say"
              description="Don't just take our word for it — hear from real Orange County homeowners."
            />
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <FadeInSection key={t.name} delay={i * 0.1}>
                <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow h-full bg-white">
                  <CardContent className="p-6 md:p-8">
                    <Quote className="h-8 w-8 text-brand-orange/20 mb-4" />

                    <p className="text-brand-dark leading-relaxed mb-6 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-brand-navy">
                          {t.name}
                        </div>
                        <div className="text-sm text-brand-muted">
                          {t.location}
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. RECENT PROJECTS SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading
              badge="Recent Projects"
              title="Our Latest Work"
              description="See the quality of our work through our recent projects across Orange County."
            />
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProjects.map((project, i) => (
              <FadeInSection key={`${project.type}-${project.location}`} delay={i * 0.08}>
                <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full group overflow-hidden bg-white">
                  {/* Gradient placeholder with icon */}
                  <div
                    className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-24 h-24 border border-white/30 rounded-full" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full" />
                    </div>
                    <div className={`p-4 rounded-2xl ${project.accentColor}`}>
                      <project.icon className={`h-10 w-10 ${project.iconColor}`} />
                    </div>
                    {/* Location badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      {project.type}
                    </h3>
                    <p className="text-brand-muted leading-relaxed text-sm mb-5 flex-grow">
                      {project.description}
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-brand-orange hover:text-brand-orange-hover font-semibold transition-colors self-start"
                      onClick={() => navigate("service-detail", project.slug)}
                    >
                      <Eye className="h-4 w-4" />
                      View Details
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. CTA BANNER
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-brand-orange relative overflow-hidden">
        {/* decorative circles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Improve Your Air Quality?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book your inspection today and experience the difference that clean,
              fresh air can make in your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onOpenQuote?.()}
                className="bg-white text-brand-orange hover:bg-gray-100 font-bold px-10 py-6 text-base rounded-lg shadow-lg"
              >
                Book Your Free Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/40 text-white hover:bg-white/10 px-10 py-6 text-base rounded-lg"
              >
                <a href="tel:+17145550123">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (714) 555-0123
                </a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BACK TO TOP BUTTON
          ═══════════════════════════════════════════ */}
      <BackToTopButton />
    </>
  );
}
