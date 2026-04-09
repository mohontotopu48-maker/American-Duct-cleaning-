"use client";

import { useRouter } from "@/components/shared/Router";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wind,
  Flame,
  Home as HomeIcon,
  Search,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  ChevronRight,
  ShieldCheck,
  ClipboardCheck,
  Camera,
  ThumbsUp,
  DollarSign,
  Leaf,
  AlertTriangle,
  Clock,
  Zap,
  X,
  Star,
  TrendingUp,
  Award,
} from "lucide-react";

/* ─── Data ─── */

const services = [
  {
    slug: "air-duct-cleaning",
    icon: Wind,
    title: "Air Duct Cleaning",
    desc: "Comprehensive cleaning of your entire duct system to remove dust, debris, allergens, and contaminants.",
    features: [
      "Full system cleaning",
      "Sanitization included",
      "Before/after photos",
    ],
    price: "$299",
  },
  {
    slug: "dryer-vent-cleaning",
    icon: Flame,
    title: "Dryer Vent Cleaning",
    desc: "Remove lint buildup from your dryer vent to prevent fires and improve drying efficiency.",
    features: ["Fire prevention", "Faster drying times", "Extended dryer life"],
    price: "$149",
  },
  {
    slug: "hvac-cleaning",
    icon: HomeIcon,
    title: "HVAC System Cleaning",
    desc: "Complete HVAC cleaning including coils, blower motor, and components for optimal performance.",
    features: ["Coil cleaning", "Blower motor service", "Efficiency boost"],
    price: "$349",
  },
  {
    slug: "mold-removal",
    icon: Search,
    title: "Mold Inspection & Removal",
    desc: "Professional mold detection and safe removal from your ductwork.",
    features: [
      "Visual inspection",
      "Safe mold remediation",
      "Preventive treatment",
    ],
    price: "Request Quote",
  },
  {
    slug: "air-quality-testing",
    icon: Sparkles,
    title: "Indoor Air Quality Testing",
    desc: "Comprehensive air quality assessment to identify pollutants and improvement opportunities.",
    features: [
      "Detailed report",
      "Pollutant analysis",
      "Actionable recommendations",
    ],
    price: "Request Quote",
  },
];

const stats = [
  {
    value: "2-5x",
    label: "Indoor air can be more polluted than outdoor air",
    source: "EPA",
    icon: AlertTriangle,
  },
  {
    value: "30%",
    label: "Energy savings from clean HVAC systems",
    source: "DOE",
    icon: TrendingUp,
  },
  {
    value: "2,900",
    label: "Dryer fires reported annually in the US",
    source: "NFPA",
    icon: Flame,
  },
  {
    value: "3-5 yrs",
    label: "Recommended duct cleaning frequency",
    source: "NADCA",
    icon: Clock,
  },
];

const popularServices = [
  {
    slug: "air-duct-cleaning",
    icon: Wind,
    title: "Air Duct Cleaning",
    desc: "Our most requested service. We use powerful truck-mounted vacuum systems and agitation tools to dislodge and extract years of accumulated dust, debris, pet dander, allergens, and microbial growth from every inch of your ductwork.",
    features: [
      "Complete supply & return duct cleaning",
      "Truck-mounted vacuum system (10,000+ CFM)",
      "Rotary brush agitation for stubborn deposits",
      "Antimicrobial sanitization treatment",
      "Before & after photo documentation",
      "Dryer-to-duct connection inspection",
    ],
    price: "Starting at $299",
    rating: 4.9,
    reviews: 320,
  },
  {
    slug: "dryer-vent-cleaning",
    icon: Flame,
    title: "Dryer Vent Cleaning",
    desc: "Clogged dryer vents are one of the leading causes of house fires in the US. Our technicians use specialized rotary brush systems and high-pressure air tools to completely clear your vent line, improving safety and drying performance.",
    features: [
      "Full vent line cleaning (up to 30 ft)",
      "Lint trap & housing cleaning",
      "Vent duct pressure testing",
      "Bird guard / cap inspection",
      "Exhaust airflow verification",
      "Safety compliance report",
    ],
    price: "Starting at $149",
    rating: 4.9,
    reviews: 285,
  },
];

const includedItems = [
  {
    icon: ClipboardCheck,
    title: "Free inspection & assessment",
    desc: "Every service begins with a thorough evaluation of your system.",
  },
  {
    icon: Award,
    title: "Certified technicians",
    desc: "All team members are NADCA-certified with ongoing training.",
  },
  {
    icon: Camera,
    title: "Before & after documentation",
    desc: "Photo and video proof of the work performed.",
  },
  {
    icon: ThumbsUp,
    title: "100% satisfaction guarantee",
    desc: "If you're not satisfied, we'll re-clean at no extra cost.",
  },
  {
    icon: DollarSign,
    title: "No hidden fees",
    desc: "Transparent pricing with no surprise charges or upsells.",
  },
  {
    icon: Leaf,
    title: "EPA-approved cleaning products",
    desc: "Safe, eco-friendly products safe for your family and pets.",
  },
];

const comparisonData = [
  {
    criteria: "Equipment",
    diy: "Basic household vacuum & brush",
    pro: "Truck-mounted vacuum (10,000+ CFM), rotary brushes, air whips",
  },
  {
    criteria: "Cleaning Depth",
    diy: "Surface-level only (first few feet)",
    pro: "Full system including trunk lines, branch runs & plenums",
  },
  {
    criteria: "Contaminant Removal",
    diy: "~30% of loose debris",
    pro: "~99% of dust, allergens, mold & microbial growth",
  },
  {
    criteria: "Time Required",
    diy: "4-8 hours for an average home",
    pro: "2-4 hours with professional-grade efficiency",
  },
  {
    criteria: "System Protection",
    diy: "Risk of damaging ductwork or connections",
    pro: "Trained technicians protect seals & insulation",
  },
  {
    criteria: "Sanitization",
    diy: "Not available to homeowners",
    pro: "Antimicrobial treatment kills 99.9% of bacteria",
  },
  {
    criteria: "Documentation",
    diy: "None",
    pro: "Before/after photos & inspection report included",
  },
  {
    criteria: "Guarantee",
    diy: "None — if something goes wrong, you're on your own",
    pro: "100% satisfaction guarantee with free re-clean",
  },
];

/* ─── Component ─── */

export function ServicesPage() {
  const { navigate } = useRouter();

  return (
    <main className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — Hero Banner
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-brand-navy pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
                <button
                  onClick={() => navigate({ page: "home" })}
                  className="hover:text-brand-orange transition-colors"
                >
                  Home
                </button>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-white">Services</span>
              </nav>

              <Badge className="mb-6 bg-brand-orange/20 text-brand-orange border-0 px-4 py-1.5 text-sm font-medium">
                What We Offer
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Our Professional Services
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                From air duct and HVAC cleaning to mold remediation and air quality
                testing, we provide comprehensive solutions to keep your home&apos;s air
                fresh, clean, and safe for your family.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — Why Professional Cleaning Matters (Stats)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-0 px-3 py-1 text-sm font-medium">
                Did You Know?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Why Professional Cleaning Matters
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                The air inside your home could be affecting your health more than you
                realize. Here are the facts that drive our mission.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={stat.value} delay={i * 0.1}>
                <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white h-full">
                  <CardContent className="p-6 md:p-8 text-center flex flex-col items-center h-full">
                    <div className="bg-brand-orange/10 p-3 rounded-xl w-fit mb-4">
                      <stat.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <p className="text-4xl md:text-5xl font-extrabold text-brand-orange mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-brand-dark leading-relaxed mb-2">
                      {stat.label}
                    </p>
                    <Badge
                      variant="secondary"
                      className="mt-auto bg-brand-navy/5 text-brand-navy border-0 text-xs"
                    >
                      Source: {stat.source}
                    </Badge>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — Services Grid (Enhanced)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight">
                Comprehensive Cleaning Solutions
              </h2>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
                Every service is backed by certified technicians, state-of-the-art
                equipment, and our 100% satisfaction guarantee.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.1}>
                <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full group overflow-hidden bg-white">
                  {/* Brand-orange top border */}
                  <div className="h-1.5 w-full bg-brand-orange" />
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    {/* Icon */}
                    <div className="bg-brand-navy/5 group-hover:bg-brand-orange/10 p-3 rounded-xl w-fit mb-5 transition-colors">
                      <service.icon className="h-6 w-6 text-brand-navy group-hover:text-brand-orange transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-brand-navy mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-brand-muted leading-relaxed text-sm mb-5 flex-grow">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 text-sm text-brand-dark"
                        >
                          <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Price hint / CTA */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      {service.price !== "Request Quote" ? (
                        <div>
                          <span className="text-xs text-brand-muted">Starting at</span>
                          <p className="text-xl font-bold text-brand-navy">
                            {service.price}
                          </p>
                        </div>
                      ) : (
                        <p className="text-sm font-semibold text-brand-orange">
                          {service.price}
                        </p>
                      )}
                      <Button
                        size="sm"
                        onClick={() =>
                          navigate({
                            page: "service-detail",
                            slug: service.slug,
                          })
                        }
                        className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-lg px-5"
                      >
                        Learn More
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — Popular Services Highlight
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-brand-navy relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full translate-y-1/3 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <Badge className="mb-4 bg-brand-orange/20 text-brand-orange border-0 px-3 py-1 text-sm font-medium">
                Most Requested
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Popular Services
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Our two most-booked services trusted by thousands of Orange County
                homeowners.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {popularServices.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.15}>
                <Card className="border border-white/10 bg-white/5 backdrop-blur-sm h-full overflow-hidden group">
                  <CardContent className="p-0">
                    {/* Most Popular badge + top accent */}
                    <div className="relative h-2 bg-gradient-to-r from-brand-orange to-brand-orange/60" />
                    <div className="absolute top-4 left-6">
                      <Badge className="bg-brand-orange text-white border-0 px-3 py-1 text-xs font-bold shadow-lg">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        Most Popular
                      </Badge>
                    </div>

                    <div className="p-6 md:p-8 pt-14">
                      {/* Icon + title row */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className="bg-brand-orange/20 p-3 rounded-xl shrink-0">
                          <service.icon className="h-7 w-7 text-brand-orange" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {service.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="flex items-center gap-1 text-brand-orange font-semibold">
                              <Star className="h-4 w-4 fill-brand-orange text-brand-orange" />
                              {service.rating}
                            </span>
                            <span className="text-white/50">
                              ({service.reviews} reviews)
                            </span>
                            <span className="text-white/50">|</span>
                            <span className="text-brand-orange font-bold">
                              {service.price}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/70 text-sm leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      {/* Features grid */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((f) => (
                          <div
                            key={f}
                            className="flex items-center gap-2 text-sm text-white/80"
                          >
                            <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>

                      {/* CTA buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          onClick={() =>
                            navigate({
                              page: "service-detail",
                              slug: service.slug,
                            })
                          }
                          className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-6 py-5 rounded-lg shadow-lg flex-1"
                        >
                          Get Free Quote
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                          className="border-white/20 text-white hover:bg-white/10 px-6 py-5 rounded-lg flex-1"
                        >
                          <a href="tel:+17145550123">
                            <Phone className="mr-2 h-5 w-5" />
                            Call Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — What's Included in Every Service
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-0 px-3 py-1 text-sm font-medium">
                Our Promise
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                What&apos;s Included in Every Service
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                No matter which service you choose, you can count on these
                standards with every single visit.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex gap-4 p-5 rounded-xl bg-brand-gray/60 hover:bg-brand-gray transition-colors duration-200 group h-full">
                  <div className="bg-white shadow-sm group-hover:shadow-md p-2.5 rounded-lg shrink-0 transition-shadow">
                    <item.icon className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — DIY vs Professional Comparison
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-0 px-3 py-1 text-sm font-medium">
                The Truth About DIY Cleaning
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                DIY vs Professional Air Duct Cleaning
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                While DIY cleaning kits exist, they simply can&apos;t match the power
                and precision of professional-grade equipment. Here&apos;s why.
              </p>
            </div>
          </FadeIn>

          {/* Comparison table — desktop */}
          <FadeIn>
            <div className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-3 bg-brand-navy">
                <div className="p-5 text-white font-bold text-left">
                  Criteria
                </div>
                <div className="p-5 text-center">
                  <span className="inline-flex items-center gap-2 text-white/80 font-semibold">
                    <X className="h-5 w-5 text-red-400" />
                    DIY Cleaning
                  </span>
                </div>
                <div className="p-5 text-center">
                  <span className="inline-flex items-center gap-2 text-brand-orange font-bold">
                    <ShieldCheck className="h-5 w-5" />
                    Professional (Us)
                  </span>
                </div>
              </div>
              {comparisonData.map((row, i) => (
                <div
                  key={row.criteria}
                  className={`grid grid-cols-3 ${
                    i % 2 === 0 ? "bg-white" : "bg-brand-gray/40"
                  }`}
                >
                  <div className="p-5 font-semibold text-brand-navy text-sm border-l-4 border-brand-orange/30">
                    {row.criteria}
                  </div>
                  <div className="p-5 text-sm text-brand-muted text-center flex items-center justify-center">
                    {row.diy}
                  </div>
                  <div className="p-5 text-sm text-brand-dark text-center flex items-center justify-center font-medium bg-brand-orange/[0.03]">
                    {row.pro}
                  </div>
                </div>
              ))}
              {/* CTA row */}
              <div className="grid grid-cols-3 bg-brand-navy">
                <div className="p-5" />
                <div className="p-5 text-center">
                  <span className="text-white/50 text-sm">
                    Risk of incomplete cleaning &amp; system damage
                  </span>
                </div>
                <div className="p-5 text-center">
                  <Button
                    onClick={() => navigate({ page: "contact" })}
                    className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-6 py-5 rounded-lg shadow-lg w-full sm:w-auto"
                  >
                    Get Professional Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Comparison cards — mobile / tablet */}
          <div className="lg:hidden space-y-4">
            {comparisonData.map((row, i) => (
              <FadeIn key={row.criteria} delay={i * 0.05}>
                <Card className="border-0 shadow-sm bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-brand-navy px-5 py-3">
                      <h4 className="font-bold text-white text-sm">
                        {row.criteria}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <X className="h-4 w-4 text-red-400" />
                          <span className="text-xs font-semibold text-brand-muted uppercase tracking-wide">
                            DIY
                          </span>
                        </div>
                        <p className="text-sm text-brand-muted">{row.diy}</p>
                      </div>
                      <div className="p-4 bg-brand-orange/[0.03]">
                        <div className="flex items-center gap-2 mb-2">
                          <ShieldCheck className="h-4 w-4 text-brand-orange" />
                          <span className="text-xs font-semibold text-brand-orange uppercase tracking-wide">
                            Professional
                          </span>
                        </div>
                        <p className="text-sm text-brand-dark font-medium">
                          {row.pro}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}

            {/* Mobile CTA */}
            <FadeIn delay={0.4}>
              <div className="bg-brand-navy rounded-2xl p-6 text-center">
                <p className="text-white/70 text-sm mb-4">
                  Don&apos;t risk incomplete cleaning — go with the pros.
                </p>
                <Button
                  onClick={() => navigate({ page: "contact" })}
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-6 py-5 rounded-lg shadow-lg w-full"
                >
                  Get Professional Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — CTA Banner
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our experts are happy to help you determine the best solution for
              your home. Get a free consultation and personalized recommendation
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate({ page: "contact" })}
                className="bg-white text-brand-orange hover:bg-gray-100 font-bold px-10 py-6 text-base rounded-lg shadow-lg"
              >
                Get a Free Quote
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
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
