"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { PageHash } from "@/lib/useHashRouter";

interface AreasPageProps {
  navigate: (page: PageHash) => void;
}

const cities = [
  "Anaheim",
  "Irvine",
  "Santa Ana",
  "Huntington Beach",
  "Newport Beach",
  "Laguna Beach",
  "Laguna Hills",
  "Costa Mesa",
  "Mission Viejo",
  "Tustin",
  "Laguna Niguel",
  "Fullerton",
  "Garden Grove",
  "Orange",
  "Westminster",
  "Yorba Linda",
  "Brea",
  "Placentia",
  "Fountain Valley",
  "Aliso Viejo",
  "Rancho Santa Margarita",
  "Lake Forest",
  "San Clemente",
  "Dana Point",
  "San Juan Capistrano",
  "Coto de Caza",
  "Los Angeles",
  "Long Beach",
];

export function AreasPage({ navigate }: AreasPageProps) {
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
            src="/areas-hero.png"
            alt="Service areas in Orange County"
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
            Service Areas
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Proudly serving all of Orange County & Southern California
          </motion.p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Coverage Area
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Cities We Serve
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              We provide professional air duct cleaning and HVAC services
              throughout Orange County and the greater Southern California area.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-3 justify-center"
          >
            {cities.map((city) => (
              <motion.div
                key={city}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-border rounded-full hover:border-brand-orange hover:bg-brand-orange-light transition-colors cursor-default shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span className="text-sm font-medium text-brand-navy">
                  {city}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 px-4 bg-brand-gray">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/service-commercial.png"
              alt="Service coverage map - Southern California"
              width={1200}
              height={500}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Don't see your city CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div variants={fadeInUp}>
            <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-brand-orange" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
              Don&apos;t See Your City?
            </h2>
            <p className="text-brand-muted text-lg mb-8">
              We serve all of Southern California. Even if your city isn&apos;t
              listed, give us a call — we likely service your area too!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-6 font-semibold"
                onClick={() => navigate("contact")}
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href="tel:9494008690">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-6"
                >
                  (949) 400-8690
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
