"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "@/components/shared/Router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  ShieldCheck,
  Heart,
  Users,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  MapPin,
  ThermometerSun,
  Handshake,
  Zap,
  Star,
  ArrowUp,
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── FadeInSection animation helper ─── */
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

/* ─── Data: Values ─── */
const values = [
  {
    icon: Award,
    title: "Quality",
    desc: "We never cut corners. Every job is done to the highest standards with thorough attention to detail.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Transparent pricing, honest assessments, and no upselling. We treat your home like our own.",
  },
  {
    icon: Heart,
    title: "Safety",
    desc: "Your family's health and safety is our top priority. We use EPA-approved products.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We're proud to be a local Orange County business serving our neighbors and community.",
  },
];

/* ─── Data: Stats ─── */
const stats = [
  { number: "12+", label: "Years of Experience" },
  { number: "15+", label: "Certified Technicians" },
  { number: "5,000+", label: "Homes Cleaned" },
  { number: "4.9/5", label: "Customer Rating" },
];

/* ─── Data: Why Orange County ─── */
const whyOC = [
  {
    icon: MapPin,
    title: "Deep Local Knowledge",
    desc: "We know every neighborhood in Orange County — from the coastal communities of Newport Beach to the inland cities of Anaheim and Yorba Linda. Our technicians understand the unique housing styles, duct systems, and construction types found throughout the region.",
  },
  {
    icon: ThermometerSun,
    title: "Coastal Climate Expertise",
    desc: "Orange County's coastal humidity creates the perfect environment for mold and mildew growth inside HVAC ductwork. Our technicians are specially trained to identify and eliminate moisture-related contaminants that plague coastal homes.",
  },
  {
    icon: Handshake,
    title: "Community Relationships",
    desc: "We've built lasting relationships with Orange County homeowners, property managers, real estate agents, and HOAs over the past 12+ years. Our reputation is built on referrals from neighbors who trust us with their homes.",
  },
  {
    icon: Zap,
    title: "Rapid Response Times",
    desc: "Because our team is based right here in Orange County, we can reach any home in the county within 60 minutes for emergency service. No long drives from other counties — we're your neighbors and we're always nearby.",
  },
];

/* ─── Data: Timeline / Milestones ─── */
const milestones = [
  { year: "2012", title: "Founded", desc: "American Duct Cleaning was established by HVAC professionals with a vision for honest, reliable service." },
  { year: "2014", title: "First 500 Homes", desc: "Reached our first major milestone — 500 homes cleaned with a growing list of satisfied customers." },
  { year: "2016", title: "NADCA Certification", desc: "Earned prestigious NADCA certification, joining the elite ranks of certified air duct cleaning professionals." },
  { year: "2018", title: "Full OC Coverage", desc: "Expanded service to cover all of Orange County, from the coast to the inland communities." },
  { year: "2020", title: "3,000th Customer", desc: "Celebrated our 3,000th customer while maintaining our industry-leading satisfaction rate." },
  { year: "2023", title: "Growing Strong", desc: "Expanded to 15+ certified technicians and surpassed 5,000 homes cleaned across the county." },
];

/* ─── Data: Team ─── */
const team = [
  {
    name: "John Anderson",
    role: "Founder & CEO",
    initials: "JA",
    quote: "20+ years in HVAC industry",
  },
  {
    name: "Maria Rodriguez",
    role: "Operations Manager",
    initials: "MR",
    quote: "NADCA Certified Inspector",
  },
  {
    name: "David Chen",
    role: "Lead Technician",
    initials: "DC",
    quote: "10+ years field experience",
  },
  {
    name: "Sarah Williams",
    role: "Customer Relations",
    initials: "SW",
    quote: "Dedicated to your satisfaction",
  },
];

/* ─── Data: Certifications ─── */
const certifications = [
  {
    title: "NADCA Certified",
    desc: "National Air Duct Cleaners Association",
  },
  {
    title: "EPA Compliant",
    desc: "Environmental Protection Agency standards",
  },
  {
    title: "Fully Licensed",
    desc: "State of California licensed contractor",
  },
  {
    title: "Fully Insured",
    desc: "$2M liability coverage for your protection",
  },
];

/* ─── Data: Trusted By ─── */
const trustedBy = [
  { name: "Yelp", rating: "4.9", reviews: "850+" },
  { name: "Google", rating: "4.9", reviews: "1,200+" },
  { name: "BBB", rating: "A+", reviews: "12 yrs" },
  { name: "HomeAdvisor", rating: "4.8", reviews: "600+" },
  { name: "Angi", rating: "5.0", reviews: "400+" },
];

/* ═══════════════════════════════════════════
    AboutPage Component
    ═══════════════════════════════════════════ */
export function AboutPage() {
  const { navigate } = useRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      {/* ═══════════════════════════════════════════
          1. PAGE HERO
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-navy pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
              <button
                onClick={() => navigate({ page: "home" })}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white font-medium">About Us</span>
            </nav>

            <Badge className="mb-6 bg-brand-orange/20 text-brand-orange border-0 px-4 py-1.5 text-sm font-medium">
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Trusted Air Duct Cleaning Experts Since 2012
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              We&apos;ve been protecting Orange County families with professional
              air duct and HVAC cleaning services for over a decade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. OUR STORY
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column: text */}
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
                Our Story
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  Founded in 2012 by HVAC professionals who saw a need for
                  reliable, honest duct cleaning in Orange County, American Duct
                  Cleaning set out to raise the standard for indoor air quality
                  services in the region.
                </p>
                <p>
                  What started as a small family-owned business with one truck
                  quickly earned a reputation for thorough, dependable work.
                  Homeowners spread the word, and within a few years we grew
                  from a one-person operation to a full team serving the entire
                  county.
                </p>
                <p>
                  Today we&apos;ve grown to a team of 15+ certified technicians
                  serving the entire county, equipped with truck-mounted vacuum
                  systems and the latest inspection technology. Every team member
                  shares our founding commitment to doing the job right the
                  first time.
                </p>
                <p>
                  We remain committed to using the latest equipment and
                  techniques, following NADCA and EPA guidelines to deliver the
                  safest, most effective cleaning possible for every home we
                  serve.
                </p>
              </div>
            </FadeInSection>

            {/* Right column: image card */}
            <FadeInSection delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/about-team.png"
                    alt="HVAC technician performing duct cleaning service"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
                {/* Floating experience badge */}
                <div className="absolute -bottom-6 -right-4 md:-right-6 bg-brand-orange rounded-xl shadow-xl p-5 text-white">
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-sm opacity-90">Years of Trust</div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. WHY ORANGE COUNTY
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-gray py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-0 px-4 py-1.5 text-sm font-medium">
                Our Home
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight">
                Why Orange County?
              </h2>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
                Orange County isn&apos;t just where we work — it&apos;s where we live,
                raise our families, and build our community. Here&apos;s why we&apos;re
                passionate about serving this area.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {whyOC.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.1}>
                <Card className="border-0 shadow-sm hover:shadow-lg transition-all h-full bg-white group">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 p-3 rounded-xl shrink-0 transition-colors">
                        <item.icon className="h-6 w-6 text-brand-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brand-navy mb-2">
                          {item.title}
                        </h3>
                        <p className="text-brand-muted leading-relaxed text-sm">
                          {item.desc}
                        </p>
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
          4. MISSION & VALUES
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight">
                Our Mission &amp; Values
              </h2>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
                Everything we do is guided by our commitment to excellence and
                customer satisfaction.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeInSection key={v.title} delay={i * 0.1}>
                <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow h-full group bg-white">
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 p-3 rounded-xl w-fit mx-auto mb-5 transition-colors">
                      <v.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-3">
                      {v.title}
                    </h3>
                    <p className="text-brand-muted leading-relaxed text-sm">
                      {v.desc}
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. STATS / NUMBERS
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-navy text-white py-16 md:py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. TIMELINE / MILESTONES
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-gray py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-0 px-4 py-1.5 text-sm font-medium">
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight">
                Milestones That Define Us
              </h2>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
                From a single truck to a county-wide team — here&apos;s how we&apos;ve grown.
              </p>
            </div>
          </FadeInSection>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Horizontal line */}
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-brand-orange/30" />

              <div className="grid grid-cols-6 gap-4">
                {milestones.map((m, i) => (
                  <FadeInSection key={m.year} delay={i * 0.1}>
                    <div className="relative text-center">
                      {/* Dot */}
                      <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                        <span className="text-xs font-bold">{m.year}</span>
                      </div>
                      <h3 className="text-sm font-bold text-brand-navy mb-2">
                        {m.title}
                      </h3>
                      <p className="text-xs text-brand-muted leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical alternating timeline */}
          <div className="md:hidden relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-orange/30" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <FadeInSection key={m.year} delay={i * 0.1}>
                  <div className="relative flex gap-4">
                    {/* Dot on the line */}
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 relative z-10 shadow-md">
                      <span className="text-xs font-bold">{m.year}</span>
                    </div>
                    {/* Content card - alternating sides */}
                    <div className={`flex-1 ${i % 2 === 0 ? "text-left" : "text-left"}`}>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-brand-orange/10">
                        <h3 className="text-sm font-bold text-brand-navy mb-1">
                          {m.title}
                        </h3>
                        <p className="text-xs text-brand-muted leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. TRUSTED BY / SOCIAL PROOF
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Trusted by Thousands
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                Recognized and top-rated across the platforms that matter most to homeowners.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {trustedBy.map((platform, i) => (
              <FadeInSection key={platform.name} delay={i * 0.08}>
                <div className="flex flex-col items-center bg-brand-gray rounded-2xl p-6 hover:shadow-lg transition-all group hover:bg-white hover:border hover:border-brand-orange/20">
                  {/* Platform logo placeholder */}
                  <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-brand-orange/10 flex items-center justify-center mb-4 shadow-sm transition-colors">
                    <span className="text-lg font-extrabold text-brand-navy group-hover:text-brand-orange transition-colors">
                      {platform.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  {/* Platform name */}
                  <span className="text-sm font-bold text-brand-navy mb-1">
                    {platform.name}
                  </span>
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="h-3.5 w-3.5 fill-brand-orange text-brand-orange" />
                    <span className="text-sm font-semibold text-brand-navy">
                      {platform.rating}
                    </span>
                  </div>
                  {/* Reviews count */}
                  <span className="text-xs text-brand-muted">
                    {platform.reviews} {platform.name === "BBB" ? "member" : "reviews"}
                  </span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. TEAM
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-gray py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight">
                Meet Our Team
              </h2>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
                Our certified professionals are the heart of American Duct
                Cleaning.
              </p>
            </div>
          </FadeInSection>

          {/* Team intro paragraph */}
          <FadeInSection>
            <p className="text-center text-brand-muted max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
              Together, our team brings over 75 years of combined HVAC and air
              quality experience. Every technician is NADCA-certified, background-checked,
              and committed to delivering the same level of care we&apos;d want in
              our own homes. From the first phone call to the final walk-through,
              you&apos;ll work with friendly professionals who truly care about your
              indoor air quality.
            </p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <FadeInSection key={member.name} delay={i * 0.1}>
                <Card className="border border-transparent shadow-sm hover:shadow-lg hover:border-brand-orange/20 transition-all h-full bg-white group duration-300">
                  <CardContent className="p-6 md:p-8 text-center">
                    {/* Avatar circle with initials */}
                    <div className="w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-orange transition-colors duration-300">
                      <span className="text-2xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-brand-orange font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-brand-muted text-sm italic">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. CERTIFICATIONS & AFFILIATIONS
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight">
                Certifications &amp; Affiliations
              </h2>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
                We maintain the highest industry standards and certifications.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <FadeInSection key={cert.title} delay={i * 0.1}>
                <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow h-full bg-white">
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="bg-green-50 p-3 rounded-xl w-fit mx-auto mb-5">
                      <CheckCircle2 className="h-7 w-7 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {cert.desc}
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. CTA SECTION
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-orange py-20 md:py-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 border border-white rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied Orange County homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate({ page: "contact" })}
                className="bg-white text-brand-orange hover:bg-gray-100 font-bold px-10 py-6 text-base rounded-lg shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ page: "contact" })}
                className="border-white/40 text-white hover:bg-white/10 px-10 py-6 text-base rounded-lg"
              >
                Contact Us
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FLOATING BACK TO TOP BUTTON
          ═══════════════════════════════════════════ */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-brand-navy text-white shadow-lg hover:bg-brand-navy-dark hover:shadow-xl transition-all flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
