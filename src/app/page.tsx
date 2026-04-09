"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Wind,
  ShieldCheck,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Flame,
  Droplets,
  Sparkles,
  Search,
  Home as HomeIcon,
  Bug,
  Zap,
  ThumbsUp,
  ChevronRight,
  Quote,
} from "lucide-react";
import { toast } from "sonner";

/* ─── Animated section wrapper ─── */
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

/* ─── Section heading component ─── */
function SectionHeading({
  badge,
  title,
  description,
  light = false,
}: {
  badge: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <Badge
        variant="secondary"
        className="mb-4 px-4 py-1.5 text-sm font-medium bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20 border-0"
      >
        {badge}
      </Badge>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-lg md:text-xl leading-relaxed ${
          light ? "text-white/80" : "text-brand-muted"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

/* ─── Quote Dialog ─── */
function QuoteDialog({
  open,
  onOpenChange,
  defaultService,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService || "",
    message: "",
  });

  useEffect(() => {
    if (defaultService) setForm((f) => ({ ...f, service: defaultService }));
  }, [defaultService]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      toast.error("Please fill in your name, phone, and select a service.");
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
        toast.success("Quote request submitted! We'll contact you shortly.");
        setForm({ name: "", phone: "", email: "", service: "", message: "" });
        onOpenChange(false);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-navy">
            Get Your Free Quote
          </DialogTitle>
          <DialogDescription className="text-brand-muted">
            Fill in the details below and we&apos;ll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="quote-name">Full Name *</Label>
            <Input
              id="quote-name"
              placeholder="John Smith"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quote-phone">Phone Number *</Label>
            <Input
              id="quote-phone"
              type="tel"
              placeholder="(714) 555-0123"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quote-email">Email</Label>
            <Input
              id="quote-email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quote-service">Service Needed *</Label>
            <Select
              value={form.service}
              onValueChange={(val) => setForm({ ...form, service: val })}
            >
              <SelectTrigger>
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
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quote-message">Additional Details</Label>
            <Textarea
              id="quote-message"
              placeholder="Tell us about your needs..."
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold py-3 text-base"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Request Free Quote"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════ */
export default function AmericanDuctCleaning() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function openQuote(service?: string) {
    setQuoteService(service || "");
    setQuoteOpen(true);
  }

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Areas", href: "#service-areas" },
  ];

  /* ─── 1. STICKY HEADER ─── */
  const Header = (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/logo-icon.png"
              alt="American Duct Cleaning"
              className="h-9 w-9 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span
                className={`text-lg font-bold leading-tight transition-colors ${
                  scrolled ? "text-brand-navy" : "text-white"
                }`}
              >
                American Duct
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
                  scrolled ? "text-brand-orange" : "text-brand-orange"
                }`}
              >
                Cleaning
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  scrolled ? "text-brand-dark" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+17145550123"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? "text-brand-dark" : "text-white"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>(714) 555-0123</span>
            </a>
            <Button
              onClick={() => openQuote()}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-5"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className={`p-2 rounded-lg transition-colors ${
                    scrolled
                      ? "text-brand-navy hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-6">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium text-brand-navy hover:text-brand-orange transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Separator />
                  <a
                    href="tel:+17145550123"
                    className="flex items-center gap-2 text-brand-dark"
                  >
                    <Phone className="h-5 w-5 text-brand-orange" />
                    (714) 555-0123
                  </a>
                  <Button
                    onClick={() => {
                      setMobileOpen(false);
                      openQuote();
                    }}
                    className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold"
                  >
                    Get Free Quote
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );

  /* ─── 2. HERO SECTION ─── */
  const HeroSection = (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Air duct cleaning service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge className="mb-6 bg-brand-orange/20 text-brand-orange border-0 px-4 py-1.5 text-sm font-medium">
                Trusted in Orange County
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Breathe Cleaner Air in Your Home
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                We provide expert air duct, HVAC, and dryer vent cleaning
                services designed to improve your indoor air quality, reduce
                allergens, and boost system efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  size="lg"
                  onClick={() => openQuote()}
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-brand-orange/25"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openQuote("Inspection")}
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base rounded-lg"
                >
                  Book Inspection Today
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Locally Trusted in Orange County
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Certified &amp; Experienced Technicians
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Same-Day Service Available
                </span>
              </div>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img
                src="/hero-tech.png"
                alt="Professional HVAC technician"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover h-[500px]"
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="bg-brand-orange/10 p-2.5 rounded-lg">
                  <ThumbsUp className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-navy">500+</div>
                  <div className="text-sm text-brand-muted">
                    Happy Customers
                  </div>
                </div>
              </div>
              {/* Floating rating card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-brand-navy">4.9</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  /* ─── 3. PROBLEM SECTION ─── */
  const ProblemSection = (
    <section className="py-20 md:py-28 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div className="relative">
              <div className="bg-brand-navy/5 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Wind, label: "Dust & Debris", desc: "Circulating in your air" },
                    { icon: Droplets, label: "Mold Spores", desc: "Growing in ductwork" },
                    { icon: Bug, label: "Allergens", desc: "Triggering reactions" },
                    { icon: Flame, label: "Fire Hazards", desc: "Clogged dryer vents" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white rounded-xl p-5 shadow-sm"
                    >
                      <div className="bg-red-50 p-2.5 rounded-lg w-fit mb-3">
                        <item.icon className="h-5 w-5 text-red-500" />
                      </div>
                      <h4 className="font-semibold text-brand-navy mb-1">
                        {item.label}
                      </h4>
                      <p className="text-sm text-brand-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <Badge
              variant="secondary"
              className="mb-4 bg-red-50 text-red-600 hover:bg-red-50 border-0 px-4 py-1.5"
            >
              Warning Signs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
              Is Your Air Making You Sick?
            </h2>
            <p className="text-brand-muted text-lg mb-6 leading-relaxed">
              Dirty air ducts can harbor dust, mold, bacteria, and allergens that
              circulate every time your HVAC system runs. If your family
              experiences frequent allergies, headaches, or unexplained
              respiratory issues, your ductwork might be the culprit.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Visible dust blowing from vents",
                "Musty or stale odors in your home",
                "Increasing allergy symptoms",
                "Higher than normal energy bills",
                "Uneven airflow in different rooms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span className="text-brand-dark">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => openQuote("Inspection")}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold"
            >
              Schedule an Inspection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeInSection>
        </div>
      </div>
    </section>
  );

  /* ─── 4. BENEFITS SECTION ─── */
  const benefits = [
    {
      icon: Wind,
      title: "Reduce Allergies & Respiratory Issues",
      desc: "Remove dust, pollen, and allergens from your air ducts to help your family breathe easier and reduce asthma triggers.",
    },
    {
      icon: ShieldCheck,
      title: "Eliminate Bacteria & Pollutants",
      desc: "Our deep cleaning removes harmful bacteria, mold spores, and volatile organic compounds trapped in your ductwork.",
    },
    {
      icon: Zap,
      title: "Improve HVAC Efficiency",
      desc: "Clean ducts allow your HVAC system to run more efficiently, lowering energy bills and extending equipment life.",
    },
    {
      icon: Sparkles,
      title: "Remove Unpleasant Odors",
      desc: "Say goodbye to musty, stale smells. Our cleaning process eliminates odor-causing particles from your system.",
    },
  ];

  const BenefitsSection = (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionHeading
            badge="Benefits"
            title="Why Clean Air Matters"
            description="Clean air ducts don't just improve air quality — they transform your entire living environment."
          />
        </FadeInSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <FadeInSection key={b.title} delay={i * 0.1}>
              <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full group">
                <CardContent className="p-6 md:p-8">
                  <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 p-3 rounded-xl w-fit mb-5 transition-colors">
                    <b.icon className="h-6 w-6 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-3">
                    {b.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed text-sm">
                    {b.desc}
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );

  /* ─── 5. SERVICES SECTION ─── */
  const services = [
    {
      icon: Wind,
      title: "Air Duct Cleaning",
      desc: "Comprehensive cleaning of your entire duct system to remove dust, debris, allergens, and contaminants for healthier indoor air.",
      features: ["Full system cleaning", "Sanitization included", "Before/after photos"],
    },
    {
      icon: Flame,
      title: "Dryer Vent Cleaning",
      desc: "Remove lint buildup and obstructions from your dryer vent to prevent fires and improve drying efficiency.",
      features: ["Fire prevention", "Faster drying times", "Extended dryer life"],
    },
    {
      icon: HomeIcon,
      title: "HVAC System Cleaning",
      desc: "Complete HVAC cleaning including coils, blower motor, and components for optimal system performance.",
      features: ["Coil cleaning", "Blower motor service", "Efficiency boost"],
    },
    {
      icon: Search,
      title: "Mold Inspection & Removal",
      desc: "Professional mold detection and safe removal from your ductwork to protect your family's health.",
      features: ["Visual inspection", "Safe mold remediation", "Preventive treatment"],
    },
    {
      icon: Sparkles,
      title: "Indoor Air Quality Testing",
      desc: "Comprehensive air quality assessment to identify pollutants, humidity levels, and improvement opportunities.",
      features: ["Detailed report", "Pollutant analysis", "Actionable recommendations"],
    },
  ];

  const ServicesSection = (
    <section id="services" className="py-20 md:py-28 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionHeading
            badge="Our Services"
            title="Professional Cleaning Solutions"
            description="From air ducts to dryer vents, we offer a full range of services to keep your home's air clean and systems running efficiently."
          />
        </FadeInSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeInSection key={s.title} delay={i * 0.1}>
              <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full group overflow-hidden bg-white">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="bg-brand-navy/5 group-hover:bg-brand-orange/10 p-3 rounded-xl w-fit mb-5 transition-colors">
                    <s.icon className="h-6 w-6 text-brand-navy group-hover:text-brand-orange transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {s.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed text-sm mb-5 flex-grow">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-brand-dark"
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-brand-orange hover:text-brand-orange-hover font-semibold justify-start"
                    onClick={() => openQuote(s.title)}
                  >
                    Get Quote
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );

  /* ─── 6. PROCESS SECTION ─── */
  const steps = [
    {
      num: "01",
      title: "Inspection",
      desc: "Our certified technician inspects your entire duct system using advanced cameras to identify problem areas.",
    },
    {
      num: "02",
      title: "Deep Cleaning",
      desc: "We use high-powered vacuum and rotary brush systems to dislodge and remove debris, dust, and contaminants.",
    },
    {
      num: "03",
      title: "Sanitization",
      desc: "An EPA-approved antimicrobial treatment is applied to kill bacteria, mold, and prevent future growth.",
    },
    {
      num: "04",
      title: "Final Check",
      desc: "We perform a thorough airflow test and quality inspection to ensure everything is clean and functioning perfectly.",
    },
  ];

  const ProcessSection = (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionHeading
            badge="How It Works"
            title="Our 4-Step Cleaning Process"
            description="A proven, thorough process that delivers exceptional results every time."
          />
        </FadeInSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <FadeInSection key={s.num} delay={i * 0.15}>
              <div className="relative text-center group">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-orange/40 to-brand-orange/10" />
                )}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors mb-5">
                  <span className="text-2xl font-bold text-brand-orange">
                    {s.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {s.title}
                </h3>
                <p className="text-brand-muted leading-relaxed text-sm">
                  {s.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );

  /* ─── 7. WHY CHOOSE US ─── */
  const trustPoints = [
    { icon: MapPin, title: "Locally Trusted", desc: "Proudly serving Orange County homeowners for over 10 years." },
    { icon: Award, title: "Certified Professionals", desc: "Our technicians are NADCA-certified and fully insured." },
    { icon: Wind, title: "Advanced Equipment", desc: "State-of-the-art vacuum and brush systems for deep cleaning." },
    { icon: ThumbsUp, title: "Transparent Pricing", desc: "No hidden fees. Get a clear, upfront quote every time." },
    { icon: ShieldCheck, title: "100% Satisfaction Guarantee", desc: "If you're not happy, we'll come back and re-clean for free." },
    { icon: Clock, title: "Same-Day Service", desc: "Need it done today? We offer same-day and emergency service." },
  ];

  const WhyUsSection = (
    <section id="why-us" className="py-20 md:py-28 bg-brand-navy text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionHeading
            badge="Why Choose Us"
            title="Why Homeowners Trust Us"
            description="We combine expertise, transparency, and genuine care to deliver the best air duct cleaning experience."
            light
          />
        </FadeInSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((tp, i) => (
            <FadeInSection key={tp.title} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="bg-brand-orange/20 p-2.5 rounded-lg w-fit mb-4">
                  <tp.icon className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="text-lg font-bold mb-2">{tp.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {tp.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );

  /* ─── 8. TESTIMONIALS ─── */
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Irvine, CA",
      text: "The air in our home feels completely different. Super professional and quick service! Our allergies have improved dramatically since the cleaning.",
      rating: 5,
    },
    {
      name: "David R.",
      location: "Anaheim, CA",
      text: "Best duct cleaning service in Orange County. They showed up on time, explained everything, and the price was exactly what they quoted. Highly recommend!",
      rating: 5,
    },
    {
      name: "Jennifer L.",
      location: "Huntington Beach, CA",
      text: "We had mold in our ductwork and they handled it professionally. The before and after photos were impressive. Will definitely use them again.",
      rating: 5,
    },
    {
      name: "Michael K.",
      location: "Santa Ana, CA",
      text: "Our energy bills dropped noticeably after the cleaning. The technician was knowledgeable and took the time to explain what he was doing. Great experience.",
      rating: 5,
    },
  ];

  const TestimonialsSection = (
    <section id="testimonials" className="py-20 md:py-28 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <SectionHeading
            badge="Testimonials"
            title="What Our Customers Say"
            description="Don't just take our word for it — hear from real Orange County homeowners."
          />
        </FadeInSection>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeInSection key={t.name} delay={i * 0.1}>
              <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow h-full bg-white">
                <CardContent className="p-6 md:p-8">
                  <Quote className="h-8 w-8 text-brand-orange/20 mb-4" />
                  <p className="text-brand-dark leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-brand-navy">
                        {t.name}
                      </div>
                      <div className="text-sm text-brand-muted">
                        {t.location}
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );

  /* ─── 9. SERVICE AREAS ─── */
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
  ];

  const ServiceAreasSection = (
    <section id="service-areas" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <Badge
              variant="secondary"
              className="mb-4 bg-brand-navy/5 text-brand-navy hover:bg-brand-navy/10 border-0 px-4 py-1.5"
            >
              Service Areas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
              Proudly Serving Orange County
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              We provide professional duct cleaning services throughout Orange
              County and surrounding areas. If you don&apos;t see your city, give us a
              call — we probably service your area too!
            </p>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => openQuote()}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold"
              >
                Get Free Quote
              </Button>
              <a
                href="tel:+17145550123"
                className="flex items-center gap-2 text-brand-navy font-medium hover:text-brand-orange transition-colors"
              >
                <Phone className="h-5 w-5" />
                (714) 555-0123
              </a>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="bg-brand-gray rounded-2xl p-8">
              <h3 className="font-semibold text-brand-navy mb-6 text-lg">
                Cities We Serve
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cities.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 text-sm text-brand-dark bg-white rounded-lg px-3 py-2.5"
                  >
                    <MapPin className="h-3.5 w-3.5 text-brand-orange shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );

  /* ─── 10. FINAL CTA ─── */
  const CTASection = (
    <section className="py-20 md:py-28 bg-brand-orange relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Improve Your Air Quality?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your inspection today and experience the difference that clean,
            fresh air can make in your home. Your family&apos;s health is worth it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => openQuote()}
              className="bg-white text-brand-orange hover:bg-gray-100 font-bold px-10 py-6 text-base rounded-lg shadow-lg"
            >
              Book Your Free Inspection
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
  );

  /* ─── 11. FOOTER ─── */
  const Footer = (
    <footer className="bg-brand-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo-icon.png"
                alt="American Duct Cleaning"
                className="h-9 w-9 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  American Duct
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-brand-orange">
                  Cleaning
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional air duct and HVAC cleaning services in Orange County.
              Breathe cleaner, live healthier.
            </p>
            <div className="flex gap-3">
              {["Facebook", "Google", "Yelp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="bg-white/10 hover:bg-brand-orange/30 p-2 rounded-lg transition-colors text-xs font-medium"
                  aria-label={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Air Duct Cleaning",
                "Dryer Vent Cleaning",
                "HVAC System Cleaning",
                "Mold Removal",
                "Air Quality Testing",
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => openQuote(s)}
                    className="text-white/60 hover:text-brand-orange text-sm transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "#why-us" },
                { label: "Our Process", href: "#process" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Service Areas", href: "#service-areas" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-orange text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-brand-orange mt-0.5 shrink-0" />
                <a
                  href="tel:+17145550123"
                  className="text-white/60 hover:text-brand-orange text-sm transition-colors"
                >
                  (714) 555-0123
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-brand-orange mt-0.5 shrink-0" />
                <a
                  href="mailto:info@americanductcleaning.com"
                  className="text-white/60 hover:text-brand-orange text-sm transition-colors"
                >
                  info@americanductcleaning.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-orange mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  Orange County, CA
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-brand-orange mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  Mon–Sat: 8AM – 6PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} American Duct Cleaning. All rights reserved.</p>
          <p>Licensed &amp; Insured | NADCA Certified</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {Header}
      <main className="flex-1">
        {HeroSection}
        {ProblemSection}
        {BenefitsSection}
        {ServicesSection}
        {ProcessSection}
        {WhyUsSection}
        {TestimonialsSection}
        {ServiceAreasSection}
        {CTASection}
      </main>
      {Footer}

      <QuoteDialog
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        defaultService={quoteService}
      />
    </div>
  );
}
