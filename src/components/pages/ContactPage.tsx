"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { toast } from "sonner";

const serviceOptions = [
  "Air Duct Cleaning",
  "Dryer Vent Cleaning",
  "Air Duct Replacement",
  "HVAC System Sanitizing",
  "Air Handling Unit Cleaning",
  "Furnace Heater Cleaning",
  "Air Filter Installation",
  "A/C Condenser Coil Cleaning",
  "Evaporator Coil Cleaning",
  "Air Conditioning Duct Repair",
  "Air Duct Sealing",
  "Bathroom Exhaust Fan Cleaning",
  "Ceiling Fan Cleaning",
  "Laundry Exhaust Fan Cleaning",
  "Dryer Vent Repair",
  "Dryer Vent Replacement",
  "Other",
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "contact" }),
      });

      if (res.ok) {
        setSubmitted(true);
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            src="/contact-hero.png"
            alt="Contact American Air Duct Cleaning"
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
            Contact Us
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Get a free estimate or schedule your air duct cleaning service.
            We&apos;re here to help!
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div variants={slideInLeft}>
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-brand-navy mb-6">
                    Request a Free Estimate
                  </h2>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <p className="text-emerald-700 text-sm">
                        Thank you! Your message has been sent. We&apos;ll
                        contact you shortly.
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-11"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(949) 555-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(val) =>
                          setFormData({ ...formData, service: val })
                        }
                      >
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your needs..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-base"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={slideInRight} className="space-y-6">
              {/* Phone */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">Phone</h3>
                    <a
                      href="tel:9494008690"
                      className="text-brand-orange font-medium hover:underline"
                    >
                      (949) 400-8690
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">Email</h3>
                    <a
                      href="mailto:americanductsOC@gmail.com"
                      className="text-brand-orange font-medium hover:underline text-sm"
                    >
                      americanductsOC@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">
                      Business Hours
                    </h3>
                    <p className="text-brand-muted text-sm">
                      Monday – Friday: 9:00 AM – 6:00 PM
                    </p>
                    <p className="text-brand-muted text-sm">
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">Location</h3>
                    <p className="text-brand-muted text-sm">
                      Serving all of Orange County
                    </p>
                    <p className="text-brand-muted text-sm">
                      & Southern California
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Office Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/contact-office.png"
                  alt="American Air Duct Cleaning office"
                  width={600}
                  height={300}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 px-4 bg-brand-gray">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-200 h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-brand-muted mx-auto mb-3" />
              <p className="text-brand-muted text-lg font-medium">
                Orange County, California
              </p>
              <p className="text-brand-muted text-sm">
                Serving all OC & Southern California
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
