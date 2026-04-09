"use client";

import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { useRouter } from "@/components/shared/Router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Navigation,
  Zap,
  Users,
  Search,
  Home,
  Trophy,
  ShieldCheck,
  Send,
  Compass,
  Waves,
  Building2,
  TreePine,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { toast } from "sonner";

/* ─── FadeInSection helper ─── */
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

/* ─── Cities data ─── */
const cities = [
  "Anaheim",
  "Brea",
  "Buena Park",
  "Costa Mesa",
  "Cypress",
  "Fountain Valley",
  "Fullerton",
  "Garden Grove",
  "Huntington Beach",
  "Irvine",
  "La Habra",
  "Los Alamitos",
  "Midway City",
  "Newport Beach",
  "Orange",
  "Placentia",
  "Santa Ana",
  "Seal Beach",
  "Stanton",
  "Sunset Beach",
  "Tustin",
  "Villa Park",
  "Westminster",
  "Yorba Linda",
];

/* ─── Geographic regions ─── */
const regions = [
  {
    name: "North OC",
    subtitle: "Inland communities & business hubs",
    icon: Building2,
    color: "bg-brand-navy",
    accent: "border-brand-navy/20",
    cities: ["Anaheim", "Fullerton", "Brea", "Placentia", "Yorba Linda", "La Habra"],
  },
  {
    name: "Central OC",
    subtitle: "Heart of Orange County",
    icon: Compass,
    color: "bg-brand-orange",
    accent: "border-brand-orange/20",
    cities: ["Santa Ana", "Orange", "Garden Grove", "Westminster", "Stanton", "Midway City"],
  },
  {
    name: "South OC",
    subtitle: "Coastal & tech corridor",
    icon: TreePine,
    color: "bg-emerald-600",
    accent: "border-emerald-200",
    cities: ["Irvine", "Costa Mesa", "Newport Beach", "Fountain Valley", "Tustin", "Huntington Beach"],
  },
  {
    name: "Coastal",
    subtitle: "Beach communities",
    icon: Waves,
    color: "bg-sky-600",
    accent: "border-sky-200",
    cities: ["Huntington Beach", "Newport Beach", "Seal Beach", "Sunset Beach", "Los Alamitos"],
  },
];

/* ─── Feature cards (#1 section) ─── */
const features = [
  {
    icon: Home,
    title: "Local Knowledge",
    description:
      "We know OC homes inside and out — from vintage Anaheim bungalows to modern Irvine estates. Our technicians understand the unique HVAC systems in every neighborhood.",
  },
  {
    icon: Zap,
    title: "Fast Response Times",
    description:
      "Average response time under 1 hour. When you need duct cleaning fast, our local teams are already in your area and ready to help.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Transparent, no-hidden-fees pricing. Get a clear quote upfront with no surprise charges. We match or beat any legitimate competitor.",
  },
  {
    icon: ShieldCheck,
    title: "Full Coverage",
    description:
      "24+ cities served across Orange County. Whether you're on the coast or inland, our certified technicians come to you.",
  },
];

/* ─── Coverage highlights ─── */
const coverageHighlights = [
  { icon: MapPin, label: "Orange County Cities", value: "24+" },
  { icon: Navigation, label: "Surrounding Counties", value: "3" },
  { icon: Clock, label: "Average Response", value: "< 1 Hour" },
  { icon: Users, label: "Technicians Ready", value: "15+" },
  { icon: Zap, label: "Same-Day Service", value: "Available" },
  { icon: CheckCircle2, label: "Free Estimates", value: "Always" },
];

/* ─── Marquee items ─── */
const marqueeCities = [
  "Anaheim", "Irvine", "Santa Ana", "Huntington Beach", "Garden Grove",
  "Fullerton", "Orange", "Costa Mesa", "Newport Beach", "Fountain Valley",
  "Westminster", "Tustin", "Yorba Linda", "Brea", "Placentia",
  "Villa Park", "Cypress", "Buena Park", "La Habra", "Stanton",
  "Los Alamitos", "Seal Beach", "Midway City", "Sunset Beach",
];

export function AreasPage() {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactCity, setContactCity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCityClick = useCallback(
    (city: string) => {
      toast.success(`We service ${city}! Call (714) 555-0123 or request a quote.`, {
        duration: 5000,
        action: {
          label: "Get Quote",
          onClick: () => navigate({ page: "contact" }),
        },
      });
    },
    [navigate]
  );

  /* ── Group cities by first letter ── */
  const groupedCities = useMemo(() => {
    const filtered = cities.filter((c) =>
      c.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const groups: Record<string, string[]> = {};
    filtered.forEach((city) => {
      const letter = city[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(city);
    });
    /* Sort letters alphabetically */
    return Object.keys(groups)
      .sort()
      .map((letter) => ({ letter, cities: groups[letter] }));
  }, [searchQuery]);

  /* ── Marquee animation ── */
  const [marqueeOffset, setMarqueeOffset] = useState(0);

  useEffect(() => {
    const speed = 0.5; // pixels per frame
    let animationId: number;
    let lastTime = 0;

    function animate(time: number) {
      if (lastTime) {
        const delta = time - lastTime;
        setMarqueeOffset((prev) => {
          const next = prev + speed * (delta / 16);
          /* Reset after showing two full sets */
          if (next > 50 * 160) return 0;
          return next;
        });
      }
      lastTime = time;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleContactSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!contactName.trim() || !contactPhone.trim() || !contactCity.trim()) {
        toast.error("Please fill in all fields.");
        return;
      }
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: contactName.trim(),
            phone: contactPhone.trim(),
            email: "",
            service: "Service Area Inquiry",
            message: `Area inquiry from ${contactCity.trim()}`,
          }),
        });
        if (res.ok) {
          toast.success("Thank you! We'll check if we service your area and get back to you shortly.");
          setContactName("");
          setContactPhone("");
          setContactCity("");
        } else {
          toast.error("Something went wrong. Please try calling us directly.");
        }
      } catch {
        toast.error("Network error. Please try again or call us.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [contactName, contactPhone, contactCity]
  );

  return (
    <main>
      {/* ═══════════════════════════════════════════
          1. PAGE HERO
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-navy pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <button
                onClick={() => navigate({ page: "home" })}
                className="hover:text-brand-orange transition-colors"
              >
                Home
              </button>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white font-medium">Service Areas</span>
            </nav>

            <Badge className="mb-6 bg-brand-orange/20 text-brand-orange border-0 px-4 py-1.5 text-sm font-medium">
              Service Areas
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Proudly Serving Orange County
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Professional air duct cleaning services available throughout Orange
              County and surrounding areas.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. WHAT MAKES US #1 IN ORANGE COUNTY
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Trophy className="h-6 w-6 text-brand-orange" />
                <Badge className="bg-brand-orange/10 text-brand-orange border-0 px-3 py-1 text-sm font-medium">
                  Why Choose Us
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                What Makes Us #1 in Orange County
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                For over 12 years, homeowners across Orange County have trusted us
                for cleaner air and healthier homes. Here&apos;s why.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <FadeInSection key={feature.title} delay={i * 0.1}>
                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full group">
                  <CardContent className="p-6">
                    <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors p-3 rounded-xl w-fit mb-5">
                      <feature.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. COVERAGE OVERVIEW
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Our Service Coverage
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                We provide comprehensive air duct cleaning coverage across Orange
                County. From the coast to the inland communities, our certified
                technicians are ready to serve your home or business with
                professional-grade equipment and guaranteed results.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { number: "24+", label: "Cities", desc: "Major Orange County cities served daily" },
                { number: "Same-Day", label: "Service", desc: "Available for urgent requests" },
                { number: "Free", label: "Estimates", desc: "No-obligation quotes for every job" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white rounded-xl p-8 shadow-sm"
                >
                  <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-brand-navy mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-brand-muted">{stat.desc}</div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. ORANGE COUNTY MAP / REGIONAL VISUAL
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-brand-orange" />
                <Badge className="bg-brand-navy/10 text-brand-navy border-0 px-3 py-1 text-sm font-medium">
                  Regional Coverage
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Explore Our Service Regions
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                Orange County is divided into distinct regions, each with its own
                unique character. We serve them all.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region, i) => (
              <FadeInSection key={region.name} delay={i * 0.1}>
                <Card
                  className={`border-2 ${region.accent} shadow-sm hover:shadow-lg transition-all duration-300 h-full group`}
                >
                  <CardContent className="p-6">
                    {/* Region header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`${region.color} p-2.5 rounded-xl group-hover:scale-110 transition-transform`}
                      >
                        <region.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brand-navy">
                          {region.name}
                        </h3>
                        <p className="text-sm text-brand-muted">{region.subtitle}</p>
                      </div>
                    </div>

                    {/* City links */}
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city) => (
                        <button
                          key={city}
                          onClick={() => handleCityClick(city)}
                          className="inline-flex items-center gap-1.5 bg-brand-gray hover:bg-brand-orange/10 text-sm font-medium text-brand-navy hover:text-brand-orange px-3 py-1.5 rounded-full transition-colors"
                        >
                          <MapPin className="h-3 w-3 shrink-0" />
                          {city}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. SCROLLING MARQUEE - PROUDLY SERVING
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-navy py-5 overflow-hidden">
        <div className="flex items-center gap-6">
          {/* Static label */}
          <div className="shrink-0 flex items-center gap-2 pl-6 lg:pl-8">
            <CheckCircle2 className="h-5 w-5 text-brand-orange" />
            <span className="text-sm font-bold text-white tracking-wider uppercase whitespace-nowrap">
              Proudly Serving
            </span>
          </div>

          {/* Scrolling cities */}
          <div className="relative overflow-hidden flex-1">
            <div
              className="flex gap-6 whitespace-nowrap"
              style={{ transform: `translateX(-${marqueeOffset}px)` }}
            >
              {/* Duplicate the list for seamless loop */}
              {[...marqueeCities, ...marqueeCities, ...marqueeCities, ...marqueeCities].map(
                (city, idx) => (
                  <span
                    key={`${city}-${idx}`}
                    className="text-sm text-white/60 font-medium flex items-center gap-2"
                  >
                    {city}
                    <span className="w-1 h-1 rounded-full bg-brand-orange/60" />
                  </span>
                )
              )}
            </div>
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-navy to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-navy to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. CITIES GRID (Alphabetical + Search)
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Cities We Serve
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                Click on your city to learn more about our services in your area.
              </p>
            </div>
          </FadeInSection>

          {/* Search input */}
          <FadeInSection delay={0.1}>
            <div className="max-w-md mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
                <Input
                  placeholder="Search for your city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white border-gray-200 focus:border-brand-orange focus:ring-brand-orange/20 h-11 rounded-lg"
                />
              </div>
              {searchQuery && (
                <p className="text-sm text-brand-muted mt-2 text-center">
                  {groupedCities.reduce((sum, g) => sum + g.cities.length, 0)}{" "}
                  {groupedCities.reduce((sum, g) => sum + g.cities.length, 0) === 1
                    ? "city"
                    : "cities"}{" "}
                  found for &quot;{searchQuery}&quot;
                </p>
              )}
            </div>
          </FadeInSection>

          {/* Alphabetical grouped grid */}
          {groupedCities.length === 0 ? (
            <FadeInSection>
              <div className="text-center py-16">
                <MapPin className="h-12 w-12 text-brand-muted/40 mx-auto mb-4" />
                <p className="text-lg text-brand-muted">
                  No cities found matching &quot;{searchQuery}&quot;. We may still
                  service your area — use the form below to ask!
                </p>
              </div>
            </FadeInSection>
          ) : (
            <div className="space-y-8">
              {groupedCities.map((group) => (
                <FadeInSection key={group.letter}>
                  {/* Letter header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-brand-navy text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                      {group.letter}
                    </div>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>

                  {/* Cities cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {group.cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => handleCityClick(city)}
                        className="w-full text-left"
                      >
                        <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-200 group cursor-pointer bg-white h-full">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors p-2 rounded-lg shrink-0">
                                <MapPin className="h-4 w-4 text-brand-orange" />
                              </div>
                              <div className="min-w-0">
                                <span className="text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors block truncate">
                                  {city}
                                </span>
                                <Badge className="mt-1 bg-green-100 text-green-700 border-0 text-[10px] px-1.5 py-0 h-4">
                                  Service Available
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </button>
                    ))}
                  </div>
                </FadeInSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. DON'T SEE YOUR AREA? (with inline form)
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Also Serving Surrounding Areas
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                Don&apos;t see your city? We also service parts of Los Angeles
                County and the Inland Empire. Let us check for you.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="border-2 border-brand-orange/20 rounded-2xl p-8 md:p-12 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left: Info */}
                <div className="flex flex-col justify-center">
                  <div className="bg-brand-orange/10 p-4 rounded-2xl w-fit mb-6">
                    <MapPin className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                    Don&apos;t See Your Area?
                  </h3>
                  <p className="text-base text-brand-muted mb-6 leading-relaxed">
                    Fill out the form or give us a call — we&apos;ll let you know
                    right away if we can service your location. We&apos;re always
                    expanding our coverage!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-8 py-6 text-base rounded-lg"
                      asChild
                    >
                      <a href="tel:+17145550123">
                        <Phone className="mr-2 h-5 w-5" />
                        Call (714) 555-0123
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold px-8 py-6 text-base rounded-lg transition-colors"
                      onClick={() => navigate({ page: "contact" })}
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Right: Contact form */}
                <div className="bg-brand-gray rounded-xl p-6 md:p-8">
                  <h4 className="text-lg font-bold text-brand-navy mb-1">
                    Quick Area Check
                  </h4>
                  <p className="text-sm text-brand-muted mb-6">
                    Tell us where you are and we&apos;ll get back to you fast.
                  </p>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="area-name" className="text-sm font-medium text-brand-navy mb-1.5 block">
                        Your Name
                      </Label>
                      <Input
                        id="area-name"
                        placeholder="John Smith"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="h-10 bg-white border-gray-200 focus:border-brand-orange focus:ring-brand-orange/20 rounded-lg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="area-phone" className="text-sm font-medium text-brand-navy mb-1.5 block">
                        Phone Number
                      </Label>
                      <Input
                        id="area-phone"
                        type="tel"
                        placeholder="(714) 555-0000"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="h-10 bg-white border-gray-200 focus:border-brand-orange focus:ring-brand-orange/20 rounded-lg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="area-city" className="text-sm font-medium text-brand-navy mb-1.5 block">
                        Your City
                      </Label>
                      <Input
                        id="area-city"
                        placeholder="e.g. Long Beach"
                        value={contactCity}
                        onChange={(e) => setContactCity(e.target.value)}
                        className="h-10 bg-white border-gray-200 focus:border-brand-orange focus:ring-brand-orange/20 rounded-lg"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold h-11 rounded-lg transition-colors mt-2"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="h-4 w-4" />
                          Check My Area
                        </span>
                      )}
                    </Button>
                  </form>
                  <p className="text-xs text-brand-muted mt-4 text-center">
                    We&apos;ll respond within 1 business hour during operating hours.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. SERVICE MAP SECTION
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Our Coverage Area
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="bg-brand-navy/[0.03] rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="bg-brand-orange/10 p-4 rounded-2xl w-fit mx-auto mb-5">
                  <Navigation className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">
                  Orange County &amp; Surrounding Areas
                </h3>
                <p className="text-brand-muted">
                  Comprehensive coverage across the greater Orange County region
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {coverageHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm"
                  >
                    <div className="bg-brand-orange/10 p-2.5 rounded-lg shrink-0">
                      <item.icon className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-brand-navy">
                        {item.value}
                      </div>
                      <div className="text-sm text-brand-muted">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. CTA SECTION
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-orange py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule your cleaning service today.
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
    </main>
  );
}
