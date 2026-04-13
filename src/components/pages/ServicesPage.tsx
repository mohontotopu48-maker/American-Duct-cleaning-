"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Wind,
  Flame,
  Wrench,
  Sparkles,
  Shield,
  Fan,
  Thermometer,
  Filter,
  Snowflake,
  Droplets,
  Zap,
  Bath,
  LampCeiling,
  Shirt,
  WrenchIcon,
  RotateCcw,
  ArrowRight,
  DollarSign,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { PageHash } from "@/lib/useHashRouter";

interface ServicesPageProps {
  navigate: (page: PageHash) => void;
}

const serviceCategories = [
  {
    title: "Air Quality Services",
    color: "bg-brand-orange",
    services: [
      {
        icon: Wind,
        title: "Air Duct Cleaning",
        desc: "Reduce allergies & asthma at home by removing dust, debris, dead skin cells, pet hair, pollen, and mold spores from your air duct system. Our professional technicians use true negative air pressure and HEPA filtration for a thorough clean.",
        price: "$$",
      },
      {
        icon: Wrench,
        title: "Air Duct Replacement",
        desc: "Complete HVAC ductwork replacement for air quality upgrades. We replace old, damaged, or inefficient ductwork with new, energy-efficient materials to improve airflow and indoor air quality.",
        price: "$$$",
      },
      {
        icon: Sparkles,
        title: "HVAC System Sanitizing",
        desc: "Complete HVAC sanitization using EPA registered products. We eliminate bacteria, mold, and contaminants from your entire heating and cooling system for a healthier indoor environment.",
        price: "$$",
      },
      {
        icon: Shield,
        title: "Air Duct Sealing",
        desc: "Seal leaky ducts to improve efficiency, reduce energy costs by up to 20%, and enhance indoor air quality. Prevents dust and contaminants from entering through unsealed joints.",
        price: "$$",
      },
      {
        icon: Filter,
        title: "Air Filter Installation",
        desc: "Installation of permanent electro-static air filters that capture dust, pollen, and allergens. These washable filters improve air quality while saving money on disposable replacements.",
        price: "$",
      },
    ],
  },
  {
    title: "Dryer Services",
    color: "bg-red-500",
    services: [
      {
        icon: Flame,
        title: "Dryer Vent Cleaning",
        desc: "Fix inefficient dryers and prevent fire hazards with professional dryer vent cleaning. Lint buildup is a leading cause of house fires — our thorough cleaning restores proper airflow and safety.",
        price: "$",
      },
      {
        icon: WrenchIcon,
        title: "Dryer Vent Repair",
        desc: "Professional repair of damaged, crushed, or disconnected dryer vents. We fix issues that cause poor dryer performance and potential fire hazards.",
        price: "$$",
      },
      {
        icon: RotateCcw,
        title: "Dryer Vent Replacement",
        desc: "Complete dryer vent replacement with code-compliant materials. Upgrade old aluminum foil or vinyl vents to rigid metal ductwork for maximum safety and efficiency.",
        price: "$$",
      },
    ],
  },
  {
    title: "HVAC Services",
    color: "bg-brand-navy",
    services: [
      {
        icon: Fan,
        title: "Air Handling Unit Cleaning",
        desc: "Professional cleaning of your air handling unit including the blower, housing, and coils. Essential for maintaining optimal HVAC performance and air quality.",
        price: "$$",
      },
      {
        icon: Thermometer,
        title: "Furnace Heater Cleaning",
        desc: "Thorough cleaning of your furnace heater components including the heat exchanger, burners, and blower motor. Improves heating efficiency and reduces energy bills.",
        price: "$$",
      },
      {
        icon: Snowflake,
        title: "A/C Condenser Coil Cleaning",
        desc: "Professional cleaning of your outdoor A/C condenser coils to restore cooling efficiency, lower energy costs, and extend the life of your air conditioning system.",
        price: "$",
      },
      {
        icon: Droplets,
        title: "Evaporator Coil Cleaning",
        desc: "Deep cleaning of indoor evaporator coils to remove mold, dirt, and debris that restricts airflow and reduces cooling capacity. Essential for efficient AC operation.",
        price: "$$",
      },
      {
        icon: Zap,
        title: "Air Conditioning Duct Repair",
        desc: "Expert repair of damaged A/C ductwork including reconnections, insulation repair, and structural fixes to restore proper airflow throughout your home.",
        price: "$$",
      },
    ],
  },
  {
    title: "Maintenance Services",
    color: "bg-emerald-500",
    services: [
      {
        icon: Bath,
        title: "Bathroom Exhaust Fan Cleaning",
        desc: "Remove dust, mold, and moisture buildup from bathroom exhaust fans. Essential for preventing mold growth and maintaining proper ventilation in bathrooms.",
        price: "$",
      },
      {
        icon: LampCeiling,
        title: "Ceiling Fan Cleaning",
        desc: "Professional cleaning of ceiling fans including blade cleaning, motor dust removal, and balancing for optimal performance and cleaner air circulation.",
        price: "$",
      },
      {
        icon: Shirt,
        title: "Laundry Exhaust Fan Cleaning",
        desc: "Thorough cleaning of laundry room exhaust systems to remove lint, dust, and debris that can cause poor ventilation and potential fire hazards.",
        price: "$",
      },
    ],
  },
];

const faqs = [
  {
    q: "How often should I have my air ducts cleaned?",
    a: "The National Air Duct Cleaners Association (NADCA) recommends having your air ducts cleaned every 3 to 5 years. However, if you have pets, allergies, have recently renovated, or notice excessive dust, you may benefit from more frequent cleaning.",
  },
  {
    q: "How long does air duct cleaning take?",
    a: "A typical residential air duct cleaning takes 2 to 4 hours depending on the size of your home, the number of vents, and the condition of your ductwork. Our technicians work efficiently while ensuring a thorough clean.",
  },
  {
    q: "What is true negative air pressure cleaning?",
    a: "True negative air pressure cleaning is the professional standard for duct cleaning. We connect a powerful HEPA-filtered vacuum system to your ductwork, creating negative pressure that pulls contaminants out while our agitation tools loosen debris from duct walls.",
  },
  {
    q: "Do you use chemical cleaners?",
    a: "We use EPA registered products for sanitization when requested or needed. Our standard cleaning process uses mechanical agitation and HEPA filtration without harsh chemicals. If sanitization is desired, we use only EPA registered, safe products.",
  },
  {
    q: "How much does air duct cleaning cost?",
    a: "Pricing varies based on home size, number of vents, and condition of ductwork. We provide free estimates with no hidden fees or high-pressure sales. Call us at (949) 400-8690 for an honest, upfront quote.",
  },
  {
    q: "Can dirty air ducts affect my health?",
    a: "Yes. Dirty air ducts can circulate dust, pollen, mold spores, pet dander, and bacteria throughout your home. This can worsen allergies, asthma, and respiratory issues. Children, elderly, and pregnant women are especially susceptible.",
  },
  {
    q: "Do you offer commercial duct cleaning?",
    a: "Yes! We serve both residential and commercial accounts throughout Orange County and Southern California. Contact us for a free commercial assessment.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, American Air Duct Cleaning is fully licensed and insured. We follow NADCA guidelines, use EPA registered products, employ HEPA filtration, and are an Energy Rated Company with a 100% satisfaction guarantee.",
  },
];

export function ServicesPage({ navigate }: ServicesPageProps) {
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
            src="/service-duct.png"
            alt="Air duct cleaning services"
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
            Our Services
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Comprehensive air quality solutions for your home and business.
            Professional service backed by NADCA guidelines and a 100%
            satisfaction guarantee.
          </motion.p>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {serviceCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerContainer}
              className="mb-16 last:mb-0"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                <div className={`w-1.5 h-8 rounded-full ${category.color}`} />
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
                  {category.title}
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <motion.div key={service.title} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                            <service.icon className="w-6 h-6 text-brand-orange" />
                          </div>
                          <div className="flex items-center gap-1 text-brand-muted">
                            <DollarSign className="w-3.5 h-3.5" />
                            <span className="text-xs font-medium">
                              {service.price}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-brand-navy mb-2">
                          {service.title}
                        </h3>
                        <p className="text-brand-muted text-sm leading-relaxed mb-4">
                          {service.desc}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-brand-orange/30 text-brand-orange hover:bg-brand-orange hover:text-white text-xs"
                          onClick={() => navigate("contact")}
                        >
                          Get a Quote
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-brand-gray">
        <div className="container mx-auto max-w-3xl">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-muted text-lg">
              Common questions about our air duct cleaning services
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-brand-navy font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-muted leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            Ready to Improve Your Indoor Air Quality?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 mb-8"
          >
            Call us today for a free estimate or schedule your service online.
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
