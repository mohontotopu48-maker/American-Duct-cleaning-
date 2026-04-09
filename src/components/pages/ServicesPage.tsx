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
} from "lucide-react";

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
  },
  {
    slug: "dryer-vent-cleaning",
    icon: Flame,
    title: "Dryer Vent Cleaning",
    desc: "Remove lint buildup from your dryer vent to prevent fires and improve drying efficiency.",
    features: ["Fire prevention", "Faster drying times", "Extended dryer life"],
  },
  {
    slug: "hvac-cleaning",
    icon: HomeIcon,
    title: "HVAC System Cleaning",
    desc: "Complete HVAC cleaning including coils, blower motor, and components for optimal performance.",
    features: ["Coil cleaning", "Blower motor service", "Efficiency boost"],
  },
  {
    slug: "mold-removal",
    icon: Search,
    title: "Mold Inspection & Removal",
    desc: "Professional mold detection and safe removal from your ductwork.",
    features: ["Visual inspection", "Safe mold remediation", "Preventive treatment"],
  },
  {
    slug: "air-quality-testing",
    icon: Sparkles,
    title: "Indoor Air Quality Testing",
    desc: "Comprehensive air quality assessment to identify pollutants and improvement opportunities.",
    features: ["Detailed report", "Pollutant analysis", "Actionable recommendations"],
  },
];

export function ServicesPage() {
  const { navigate } = useRouter();

  return (
    <main className="min-h-screen">
      {/* ─── Hero Banner ─── */}
      <section className="relative bg-brand-navy pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              {/* Breadcrumb */}
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

      {/* ─── Services Grid ─── */}
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

                    {/* Learn More Button */}
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-brand-orange hover:text-brand-orange-hover font-semibold justify-start mt-auto"
                      onClick={() =>
                        navigate({
                          page: "service-detail",
                          slug: service.slug,
                        })
                      }
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 md:py-28 bg-brand-orange relative overflow-hidden">
        {/* Decorative elements */}
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
