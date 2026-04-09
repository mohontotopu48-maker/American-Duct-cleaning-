"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "@/components/shared/Router";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ChevronRight,
  ArrowRight,
  DollarSign,
  Zap,
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
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

/* ─── Data ─── */
const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    detail: "(714) 555-0123",
    sub: "Available Mon-Sat",
    action: "tel:+17145550123",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@americanductcleaning.com",
    sub: "We reply within 24 hours",
    action: "mailto:info@americanductcleaning.com",
  },
  {
    icon: MapPin,
    title: "Address",
    detail: "Orange County, CA",
    sub: "Serving all of Orange County",
    action: null,
  },
  {
    icon: Clock,
    title: "Hours",
    detail: "Mon-Fri: 8AM-6PM",
    sub: "Saturday: 9AM-4PM | Sunday: Closed",
    action: null,
  },
];

const promiseItems = [
  {
    icon: DollarSign,
    title: "Free Estimates Always",
    desc: "Transparent, no-cost quotes for every service — no hidden fees, no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "No Obligation",
    desc: "Get expert advice and pricing with zero pressure to commit.",
  },
  {
    icon: Clock,
    title: "Response Within 1 Hour",
    desc: "We know your time matters. Expect a reply within 60 minutes during business hours.",
  },
  {
    icon: CheckCircle2,
    title: "100% Satisfaction Guaranteed",
    desc: "Not happy? We'll come back and make it right — that's our promise to you.",
  },
];

const businessHours = [
  { day: "Monday", time: "8:00 AM - 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
  { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
  { day: "Thursday", time: "8:00 AM - 6:00 PM" },
  { day: "Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const socialPlatforms = [
  {
    name: "Facebook",
    tagline: "Like us for tips & updates",
    initials: "f",
    color: "bg-[#1877F2]",
    link: "#",
  },
  {
    name: "Instagram",
    tagline: "Follow our before & afters",
    initials: "IG",
    color: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    link: "#",
  },
  {
    name: "Google Business",
    tagline: "Read 500+ verified reviews",
    initials: "G",
    color: "bg-[#4285F4]",
    link: "#",
  },
  {
    name: "Yelp",
    tagline: "See our 4.9-star rating",
    initials: "Y!",
    color: "bg-[#FF1A1A]",
    link: "#",
  },
  {
    name: "Nextdoor",
    tagline: "Neighborhood recommendations",
    initials: "Nd",
    color: "bg-[#00B551]",
    link: "#",
  },
  {
    name: "BBB",
    tagline: "A+ accredited business",
    initials: "BBB",
    color: "bg-[#0E5EA2]",
    link: "#",
  },
];

const whyChooseUs = [
  {
    icon: DollarSign,
    title: "Free Estimates",
    desc: "No-obligation quotes with transparent pricing.",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    desc: "Need it done today? We've got you covered.",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    desc: "NADCA-certified professionals you can trust.",
  },
  {
    icon: ShieldCheck,
    title: "100% Guarantee",
    desc: "Not satisfied? We'll make it right.",
  },
];

const faqs = [
  {
    question: "How quickly can you schedule a service?",
    answer:
      "We offer same-day and next-day service for most requests. For urgent needs, calling us directly is the fastest way to get scheduled.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, all estimates are free with no obligation. You can request one through our contact form or by calling us directly.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We serve all of Orange County and surrounding areas, including Anaheim, Irvine, Santa Ana, Huntington Beach, and 20+ more cities.",
  },
  {
    question: "Are your technicians certified?",
    answer:
      "Yes, all technicians are NADCA-certified and fully insured. They undergo regular training to stay current with industry best practices.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, check, and all major credit cards including Visa, Mastercard, American Express, and Discover.",
  },
  {
    question: "Do you offer a satisfaction guarantee?",
    answer:
      "Yes, 100% satisfaction guarantee on all services. If you're not happy with our work, we'll come back and re-clean at no additional cost.",
  },
];

/* ─── Open/Closed helper ─── */
function useBusinessStatus() {
  const [status, setStatus] = useState<"open" | "closed">("closed");

  useEffect(() => {
    function checkStatus() {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeInMinutes = hours * 60 + minutes;

      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        // Mon-Fri: 8AM-6PM (480-1080)
        setStatus(timeInMinutes >= 480 && timeInMinutes < 1080 ? "open" : "closed");
      } else if (dayOfWeek === 6) {
        // Sat: 9AM-4PM (540-960)
        setStatus(timeInMinutes >= 540 && timeInMinutes < 960 ? "open" : "closed");
      } else {
        // Sunday: Closed
        setStatus("closed");
      }
    }

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
}

export function ContactPage() {
  const { navigate } = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
    referral: "",
  });
  const businessStatus = useBusinessStatus();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success("Message sent successfully! We'll get back to you shortly.");
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: "",
          referral: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {/* ═══════════════════════════════════════════
          1. PAGE HERO
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-navy pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl" />

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
              <span className="text-white font-medium">Contact Us</span>
            </nav>

            <Badge className="mb-6 bg-brand-orange/20 text-brand-orange border-0 px-4 py-1.5 text-sm font-medium">
              Contact Us
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Get In Touch
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Have questions or ready to schedule? We&apos;re here to help 7 days
              a week.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. OUR PROMISE
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-16 border-b border-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {promiseItems.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-brand-orange" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-brand-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. CONTACT GRID
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* ── Left Column: Contact Form ── */}
            <FadeInSection>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-brand-muted mb-8">
                    Fill out the form below and we&apos;ll get back to you as soon
                    as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="(714) 555-0123"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        required
                      />
                    </div>

                    {/* Service Interest */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-service">Service Interest</Label>
                      <Select
                        value={form.service}
                        onValueChange={(val) =>
                          setForm({ ...form, service: val })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Air Duct Cleaning">
                            Air Duct Cleaning
                          </SelectItem>
                          <SelectItem value="Dryer Vent Cleaning">
                            Dryer Vent Cleaning
                          </SelectItem>
                          <SelectItem value="HVAC System Cleaning">
                            HVAC System Cleaning
                          </SelectItem>
                          <SelectItem value="Mold Inspection & Removal">
                            Mold Inspection &amp; Removal
                          </SelectItem>
                          <SelectItem value="Indoor Air Quality Testing">
                            Indoor Air Quality Testing
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-date">Preferred Date</Label>
                      <Input
                        id="contact-date"
                        type="date"
                        value={form.date}
                        onChange={(e) =>
                          setForm({ ...form, date: e.target.value })
                        }
                      />
                    </div>

                    {/* How did you hear about us? */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-referral">
                        How did you hear about us?
                      </Label>
                      <Select
                        value={form.referral}
                        onValueChange={(val) =>
                          setForm({ ...form, referral: val })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Google Search">
                            Google Search
                          </SelectItem>
                          <SelectItem value="Yelp">Yelp</SelectItem>
                          <SelectItem value="Referral">
                            Referral
                          </SelectItem>
                          <SelectItem value="Social Media">
                            Social Media
                          </SelectItem>
                          <SelectItem value="Flyer/Mailer">
                            Flyer/Mailer
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell us about your needs or questions..."
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold py-3 text-base rounded-lg"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeInSection>

            {/* ── Right Column: Contact Info ── */}
            <div className="space-y-4">
              {contactCards.map((info, i) => (
                <FadeInSection key={info.title} delay={i * 0.1}>
                  {info.action ? (
                    <a href={info.action} className="block">
                      <div className="bg-brand-gray rounded-xl p-6 flex items-start gap-4 group hover:bg-brand-gray/80 transition-colors">
                        <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors p-3 rounded-xl shrink-0">
                          <info.icon className="h-6 w-6 text-brand-orange" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-brand-muted uppercase tracking-wide mb-1">
                            {info.title}
                          </div>
                          <div className="text-brand-navy font-bold text-base mb-0.5">
                            {info.detail}
                          </div>
                          <div className="text-sm text-brand-muted">
                            {info.sub}
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="bg-brand-gray rounded-xl p-6 flex items-start gap-4">
                      <div className="bg-brand-orange/10 p-3 rounded-xl shrink-0">
                        <info.icon className="h-6 w-6 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-brand-muted uppercase tracking-wide mb-1">
                          {info.title}
                        </div>
                        <div className="text-brand-navy font-bold text-base mb-0.5">
                          {info.detail}
                        </div>
                        <div className="text-sm text-brand-muted">
                          {info.sub}
                        </div>
                      </div>
                    </div>
                  )}
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. BUSINESS HOURS TABLE
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-gray py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Business Hours
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                We keep convenient hours to serve you better.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="text-left py-4 px-6 font-semibold text-sm uppercase tracking-wide">
                      Day
                    </th>
                    <th className="text-right py-4 px-6 font-semibold text-sm uppercase tracking-wide">
                      Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {businessHours.map((row, i) => {
                    const isAlt = i % 2 === 1;
                    return (
                      <tr
                        key={row.day}
                        className={
                          isAlt
                            ? "bg-brand-gray/50"
                            : "bg-white"
                        }
                      >
                        <td className="py-4 px-6 font-medium text-brand-navy">
                          {row.day}
                        </td>
                        <td className="py-4 px-6 text-right text-brand-muted">
                          {row.time}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Open/Closed Badge */}
              <div className="px-6 py-4 border-t border-brand-gray flex items-center justify-between">
                <span className="text-sm font-medium text-brand-muted">
                  Current Status
                </span>
                <Badge
                  className={
                    businessStatus === "open"
                      ? "bg-emerald-100 text-emerald-700 border-0 px-4 py-1.5 text-sm font-semibold"
                      : "bg-red-100 text-red-700 border-0 px-4 py-1.5 text-sm font-semibold"
                  }
                >
                  {businessStatus === "open" ? "Open Now" : "Closed"}
                </Badge>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. SOCIAL MEDIA LINKS
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-1.5 text-sm font-medium bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20 border-0"
              >
                Connect With Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Follow Us
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
                Stay connected for tips, promotions, and behind-the-scenes looks at our work.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialPlatforms.map((platform, i) => (
              <FadeInSection key={platform.name} delay={i * 0.08}>
                <a
                  href={platform.link}
                  className="block group"
                  aria-label={`Follow us on ${platform.name}`}
                >
                  <div className="bg-brand-gray hover:bg-brand-navy rounded-xl p-5 text-center transition-all duration-300 hover:shadow-lg h-full">
                    <div
                      className={`${platform.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg transition-transform group-hover:scale-110`}
                    >
                      {platform.initials}
                    </div>
                    <h3 className="text-sm font-bold text-brand-navy group-hover:text-white transition-colors mb-1">
                      {platform.name}
                    </h3>
                    <p className="text-xs text-brand-muted group-hover:text-white/70 transition-colors">
                      {platform.tagline}
                    </p>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. MAP VISUAL
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-gray py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-brand-navy/5 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230A2540' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0zM20 0h1v1h-1zM40 0h1v1h-1zM0 20h1v1H0zM20 20h1v1h-1zM40 20h1v1h-1zM0 40h1v1H0zM20 40h1v1h-1zM40 40h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E\")",
              }} />

              <div className="relative">
                <div className="bg-brand-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-10 w-10 text-brand-orange" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3 leading-tight">
                  Orange County, CA
                </h2>
                <p className="text-lg text-brand-muted mb-8 max-w-xl mx-auto leading-relaxed">
                  Serving all of Orange County — from Anaheim to Irvine, Huntington Beach to Newport Beach.
                </p>

                <Button
                  size="lg"
                  className="bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold px-8 py-3 rounded-lg shadow-md"
                  asChild
                >
                  <a
                    href="https://maps.google.com/?q=Orange+County+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. WHY CHOOSE US
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Why Choose American Duct Cleaning?
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                We combine expertise, transparency, and genuine care to deliver
                the best air duct cleaning experience.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.1}>
                <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow h-full bg-white group">
                  <CardContent className="p-6 md:p-8 flex items-start gap-4">
                    <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors p-3 rounded-xl shrink-0">
                      <item.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. FAQ SECTION
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-gray py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-14">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-1.5 text-sm font-medium bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20 border-0"
              >
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-brand-muted">
                Everything you need to know about our services.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-white"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-brand-navy hover:text-brand-orange hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-muted leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. EMERGENCY CTA
          ═══════════════════════════════════════════ */}
      <section className="bg-brand-navy py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <div className="bg-brand-navy-dark rounded-2xl p-8 md:p-12 border border-white/10">
              <Phone className="h-10 w-10 text-brand-orange mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Need Emergency Service?
              </h2>
              <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
                Call us now for urgent duct cleaning or mold remediation needs.
              </p>
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-10 py-6 text-lg rounded-lg shadow-lg"
                asChild
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
    </div>
  );
}
