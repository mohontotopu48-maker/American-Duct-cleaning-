"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
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

const serviceOptions = [
  "Air Duct Cleaning",
  "HVAC System Cleaning",
  "Dryer Vent Cleaning",
  "Mold Remediation",
  "Air Quality Testing",
  "Commercial Cleaning",
  "Other",
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: "(714) 555-0192",
    sub: "Call us anytime during business hours",
    href: "tel:(714)555-0192",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@americanductcleaning.com",
    sub: "We respond within 1 hour",
    href: "mailto:info@americanductcleaning.com",
  },
  {
    icon: MapPin,
    title: "Address",
    detail: "1234 Main Street, Suite 100",
    sub: "Santa Ana, CA 92701",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon-Fri 8am-6pm, Sat 9am-4pm",
    sub: "Sunday: Closed",
    href: "#",
  },
];

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in name and email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "contact" }),
      });
      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-brand-muted text-lg">
            Ready to improve your indoor air quality? Contact us today for a
            free estimate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-brand-gray/50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-brand-navy mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(714) 555-0192"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-service">Service Type</Label>
                    <Select
                      value={form.service}
                      onValueChange={(val) =>
                        setForm({ ...form, service: val })
                      }
                    >
                      <SelectTrigger id="contact-service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-8 py-3 rounded-lg transition-all"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Business Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Office Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/contact-office.png"
                alt="Our office"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="font-bold text-lg">Our Office</div>
                <div className="text-white/80 text-sm">Santa Ana, CA</div>
              </div>
            </div>

            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-brand-gray/50 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy text-sm">
                    {info.title}
                  </h4>
                  {info.href && info.href !== "#" ? (
                    <a
                      href={info.href}
                      className="text-brand-muted text-sm hover:text-brand-orange transition-colors"
                    >
                      {info.detail}
                    </a>
                  ) : (
                    <p className="text-brand-muted text-sm">{info.detail}</p>
                  )}
                  <p className="text-brand-muted/70 text-xs mt-0.5">
                    {info.sub}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
