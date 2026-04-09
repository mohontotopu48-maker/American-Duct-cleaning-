"use client";

import { useRef } from "react";
import { useRouter } from "@/components/shared/Router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  "Irvine",
  "Santa Ana",
  "Huntington Beach",
  "Garden Grove",
  "Fullerton",
  "Orange",
  "Costa Mesa",
  "Newport Beach",
  "Fountain Valley",
  "Westminster",
  "Tustin",
  "Yorba Linda",
  "Brea",
  "Placentia",
  "Villa Park",
  "Cypress",
  "Buena Park",
  "La Habra",
  "Stanton",
  "Los Alamitos",
  "Seal Beach",
  "Midway City",
  "Sunset Beach",
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

export function AreasPage() {
  const { navigate } = useRouter();

  function handleCityClick(city: string) {
    toast.success(`We service ${city}! Call (714) 555-0123 or request a quote.`, {
      duration: 5000,
      action: {
        label: "Get Quote",
        onClick: () => navigate({ page: "contact" }),
      },
    });
  }

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
          2. COVERAGE OVERVIEW
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20">
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
                { number: "16+", label: "Cities", desc: "Major Orange County cities served daily" },
                { number: "Same-Day", label: "Service", desc: "Available for urgent requests" },
                { number: "Free", label: "Estimates", desc: "No-obligation quotes for every job" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-brand-gray rounded-xl p-8"
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
          3. CITIES GRID
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Cities We Serve
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                Click on your city to learn more about our services in your area.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cities.map((city, i) => (
              <FadeInSection key={city} delay={Math.min(i * 0.04, 0.4)}>
                <button
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
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. SURROUNDING AREAS
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
                County and the Inland Empire. Contact us to check availability.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="border-2 border-brand-orange/20 rounded-2xl p-8 md:p-12 text-center bg-white">
              <div className="bg-brand-orange/10 p-4 rounded-2xl w-fit mx-auto mb-6">
                <MapPin className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                Don&apos;t See Your Area?
              </h3>
              <p className="text-lg text-brand-muted max-w-xl mx-auto mb-8 leading-relaxed">
                We may still service your location. Give us a call and
                we&apos;ll let you know!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. SERVICE MAP SECTION
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
          6. CTA SECTION
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
