"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often should air ducts be cleaned?",
    answer:
      "The National Air Duct Cleaners Association (NADCA) recommends having your air ducts cleaned every 3 to 5 years. However, you may need more frequent cleaning if you have pets, allergies, have recently renovated, or notice visible mold growth, excessive dust, or musty odors coming from your vents.",
  },
  {
    question: "How long does duct cleaning take?",
    answer:
      "A typical residential duct cleaning takes between 2 to 4 hours, depending on the size of your home, the number of vents, and the condition of your ductwork. Larger homes or systems with significant buildup may take longer. Our team will provide an estimated timeframe during the initial inspection.",
  },
  {
    question: "Is duct cleaning worth it?",
    answer:
      "Absolutely. Professional duct cleaning improves indoor air quality by removing dust, allergens, mold, and other contaminants. It can also increase HVAC system efficiency by 20-30%, reduce energy bills, extend the life of your system, and help alleviate allergy and asthma symptoms. Most customers notice a significant improvement in air quality immediately.",
  },
  {
    question: "What does duct cleaning involve?",
    answer:
      "Our professional duct cleaning process includes: connecting a powerful vacuum system to your ductwork, agitating and dislodging debris with rotary brushes, vacuuming all contaminants from the system, sanitizing the ducts with EPA-approved products, cleaning the blower motor and coils, and documenting the entire process with before/after photos.",
  },
  {
    question: "How much does duct cleaning cost?",
    answer:
      "Our air duct cleaning services start at $199 for a standard residential system. The final price depends on factors like the number of vents, size of the system, level of contamination, and any additional services needed. We provide free, no-obligation estimates so you know exactly what to expect before we begin.",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Yes! We offer same-day and next-day service whenever our schedule allows. For emergency situations or urgent air quality concerns, call us directly at (714) 555-0192 and we'll do our best to accommodate you as quickly as possible.",
  },
  {
    question: "Are your cleaning products safe?",
    answer:
      "Yes, all of our cleaning products are EPA-approved, non-toxic, and safe for children, pets, and those with sensitivities. We use environmentally friendly solutions that effectively eliminate mold, bacteria, and odors without introducing harmful chemicals into your home.",
  },
  {
    question: "Do you provide before/after photos?",
    answer:
      "Yes, we document every job with before and after photos of your ductwork using our camera inspection system. This allows you to see exactly what was removed and verify the quality of our work. Photos are provided to you digitally upon completion of the service.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-muted text-lg">
              Find answers to common questions about our duct cleaning services.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-gray-100 px-6 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-left text-brand-navy font-semibold hover:no-underline py-5 text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-muted text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
