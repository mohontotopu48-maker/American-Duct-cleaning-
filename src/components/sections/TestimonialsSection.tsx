"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Irvine, CA",
    rating: 5,
    text: "American Duct Cleaning did an amazing job on our home. The technicians were professional, thorough, and explained everything. Our allergies have improved dramatically since the cleaning!",
  },
  {
    name: "David K.",
    location: "Anaheim, CA",
    rating: 5,
    text: "I was shocked at how dirty our ducts were after 10 years. The team was fast, clean, and the before/after photos were incredible. Highly recommend their services to everyone.",
  },
  {
    name: "Jennifer L.",
    location: "Huntington Beach, CA",
    rating: 5,
    text: "We noticed an immediate improvement in air quality after the cleaning. The price was fair, scheduling was easy, and the crew was incredibly respectful of our home.",
  },
  {
    name: "Michael R.",
    location: "Santa Ana, CA",
    rating: 5,
    text: "Best duct cleaning service in Orange County, hands down. They arrived on time, completed the job efficiently, and even pointed out a small issue with our dryer vent. Excellent value!",
  },
  {
    name: "Amanda T.",
    location: "Fullerton, CA",
    rating: 5,
    text: "I got quotes from several companies and American Duct was the most transparent about pricing. No hidden fees, no upselling. Just honest, quality work. We'll be customers for life.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-brand-orange fill-brand-orange"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <Image
          src="/testimonials.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-brand-muted text-lg">
            Don&apos;t just take our word for it — hear from our satisfied
            customers across Orange County.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-gray/50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-brand-orange/20 mb-4" />
              <p className="text-brand-dark text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-brand-navy text-sm">
                    {t.name}
                  </div>
                  <div className="text-brand-muted text-xs">{t.location}</div>
                </div>
                <StarRating rating={t.rating} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
