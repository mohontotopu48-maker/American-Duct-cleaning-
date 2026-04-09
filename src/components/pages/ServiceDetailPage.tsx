"use client";

import { useRouter } from "@/components/shared/Router";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
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
  Home as HomeIcon,
  Search,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  ChevronRight,
  AlertTriangle,
  Zap,
  ShieldCheck,
  Clock,
  ThumbsUp,
  Star,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  heroImage: string;
  problem: string;
  warnings: string[];
  benefits: string[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
}

const servicesData: ServiceData[] = [
  {
    slug: "air-duct-cleaning",
    icon: Wind,
    title: "Professional Air Duct Cleaning",
    subtitle: "in Orange County",
    heroImage: "/hero-bg.png",
    problem:
      "Over time, your air ducts collect dust, allergens, mold, and debris that circulate throughout your home every time your HVAC system runs. The EPA estimates that indoor air can be 2-5 times more polluted than outdoor air, and dirty ducts are a major contributor to this problem.",
    warnings: [
      "Dust buildup restricts airflow and forces your HVAC system to work harder",
      "Mold spores thrive in damp ductwork and spread through every room",
      "Pet dander and pollen accumulate in ducts, worsening allergy symptoms",
      "Contaminated ducts can produce musty, unpleasant odors throughout your home",
    ],
    benefits: [
      "Cleaner indoor air quality for your entire family",
      "Reduced allergy and asthma symptoms",
      "Better airflow throughout your home",
      "Lower energy bills and improved efficiency",
      "Extended HVAC system lifespan",
    ],
    process: [
      {
        step: "01",
        title: "System Inspection",
        desc: "Our certified technician inspects your entire duct system using advanced cameras to identify problem areas and assess the level of contamination. We document everything before we begin.",
      },
      {
        step: "02",
        title: "High-Powered Vacuum",
        desc: "We connect our truck-mounted high-powered vacuum system to your ductwork to create negative pressure and capture loosened debris, ensuring nothing escapes into your living space.",
      },
      {
        step: "03",
        title: "Agitation & Removal",
        desc: "Rotary brush tools and compressed air whips dislodge stubborn dust, debris, and contaminants from duct walls, pulling them into the vacuum for complete removal.",
      },
      {
        step: "04",
        title: "Sanitization",
        desc: "An EPA-approved antimicrobial treatment is applied throughout your ductwork to kill bacteria, mold spores, and prevent future microbial growth for months to come.",
      },
      {
        step: "05",
        title: "Final Inspection",
        desc: "We perform a thorough airflow test, provide before/after photos, and ensure your system is clean and functioning perfectly. We walk you through the results before we leave.",
      },
    ],
    faqs: [
      {
        q: "How often should air ducts be cleaned?",
        a: "The National Air Duct Cleaners Association (NADCA) recommends cleaning every 3-5 years. However, if you have pets, allergies, or have recently renovated, you may need more frequent cleaning. Homes with smokers or near construction sites should also consider annual cleaning.",
      },
      {
        q: "How long does the cleaning take?",
        a: "A typical residential duct cleaning takes 2-4 hours depending on the size of your home and the level of contamination. Larger homes or severely contaminated systems may take up to 6 hours. We never rush the process to ensure thorough results.",
      },
      {
        q: "Will duct cleaning reduce my energy bills?",
        a: "Yes! Clean ducts allow your HVAC system to operate more efficiently, which can reduce energy consumption by 10-15%. When your system doesn't have to work as hard to push air through clogged ducts, you'll see the savings on your monthly utility bills.",
      },
      {
        q: "Is duct cleaning messy?",
        a: "No. Our process uses a sealed vacuum system that contains all debris. We also lay down protective coverings on floors and furniture, and our technicians clean up thoroughly before leaving. Your home will be as clean or cleaner than when we arrived.",
      },
    ],
  },
  {
    slug: "dryer-vent-cleaning",
    icon: Flame,
    title: "Professional Dryer Vent Cleaning",
    subtitle: "in Orange County",
    heroImage: "/hero-bg.png",
    problem:
      "Lint and debris accumulate in your dryer vent over time, creating a highly flammable buildup that is one of the leading causes of house fires in the United States. According to the U.S. Fire Administration, there are approximately 2,900 dryer fires reported each year, and the leading cause is failure to clean the dryer vent.",
    warnings: [
      "Clogged dryer vents are the #1 cause of dryer-related house fires",
      "Lint buildup reduces drying efficiency, wasting time and energy",
      "Excessive heat buildup can damage your dryer's internal components",
      "Restricted airflow causes your dryer to overheat and shut down prematurely",
    ],
    benefits: [
      "Eliminate fire hazard from lint buildup",
      "Reduce drying times by up to 50%",
      "Extend the life of your dryer",
      "Lower energy consumption and utility bills",
      "Prevent carbon monoxide buildup in gas dryers",
    ],
    process: [
      {
        step: "01",
        title: "Vent Assessment",
        desc: "We inspect your dryer vent from both the dryer connection and the exterior exhaust point to determine the length, routing, and severity of the lint blockage.",
      },
      {
        step: "02",
        title: "Exterior Disconnect",
        desc: "Our technician safely disconnects the dryer and accesses the vent system, ensuring all connections are properly sealed after the cleaning is complete.",
      },
      {
        step: "03",
        title: "Mechanical Cleaning",
        desc: "We use specialized rotary brush systems and high-pressure air tools to break up and remove compacted lint, debris, and obstructions from the entire vent length.",
      },
      {
        step: "04",
        title: "Vacuum Extraction",
        desc: "A powerful vacuum system pulls all dislodged lint and debris out of the vent, leaving the passage completely clear and unobstructed.",
      },
      {
        step: "05",
        title: "Flow Verification",
        desc: "We test the airflow from the exterior exhaust to confirm the vent is fully clear, then reconnect your dryer and verify proper operation before we finish.",
      },
    ],
    faqs: [
      {
        q: "How often should I clean my dryer vent?",
        a: "We recommend cleaning your dryer vent at least once a year. If you have a large family, pets that shed, or use your dryer frequently, you may need cleaning every 6 months. Signs you need immediate cleaning include longer drying times, a burning smell, or excessive heat from the dryer.",
      },
      {
        q: "How do I know if my dryer vent is clogged?",
        a: "Common warning signs include clothes taking longer than one cycle to dry, the dryer feeling excessively hot to the touch, a burning smell during operation, visible lint accumulating around the dryer or vent opening, and the vent hood flap not opening properly when the dryer runs.",
      },
      {
        q: "Can I clean the dryer vent myself?",
        a: "While you can clean the lint trap and the area immediately behind the dryer, a professional cleaning reaches the full length of the vent — including hidden sections inside walls, floors, and ceilings. DIY methods often miss deep blockages that pose serious fire risks.",
      },
      {
        q: "How long does dryer vent cleaning take?",
        a: "Most dryer vent cleanings are completed in 30-60 minutes, depending on the length and complexity of your vent system. Longer or more complex vent runs with multiple bends may take up to 90 minutes.",
      },
    ],
  },
  {
    slug: "hvac-cleaning",
    icon: HomeIcon,
    title: "Professional HVAC System Cleaning",
    subtitle: "in Orange County",
    heroImage: "/hero-bg.png",
    problem:
      "Your HVAC system is the lungs of your home — it circulates air through every room, multiple times per day. When the blower motor, evaporator coils, condenser coils, and drain pans become dirty, your system works harder, costs more to operate, and spreads contaminants throughout your living space. Neglected HVAC systems can lose up to 30% of their efficiency.",
    warnings: [
      "Dirty evaporator coils can reduce cooling efficiency by up to 30%",
      "Clogged blower wheels strain the motor and increase energy consumption",
      "Contaminated drain pans breed bacteria and mold that circulate in your air",
      "Neglected components lead to costly repairs and premature system failure",
    ],
    benefits: [
      "Restore your HVAC system to peak efficiency",
      "Reduce monthly energy bills by up to 20%",
      "Prevent costly breakdowns and extend system life",
      "Improve cooling and heating performance",
      "Eliminate bacteria and mold from system components",
    ],
    process: [
      {
        step: "01",
        title: "Full System Evaluation",
        desc: "We perform a comprehensive assessment of your entire HVAC system, including the air handler, blower motor, evaporator coils, condensate drain, and all accessible ductwork connections.",
      },
      {
        step: "02",
        title: "Blower Motor Cleaning",
        desc: "The blower wheel and housing are carefully cleaned to remove dust buildup that restricts airflow. We also lubricate moving parts and inspect the motor for wear.",
      },
      {
        step: "03",
        title: "Coil Treatment",
        desc: "Evaporator and condenser coils are cleaned using specialized chemical solutions that dissolve grime and oxidation without damaging the delicate fin structure, restoring heat transfer efficiency.",
      },
      {
        step: "04",
        title: "Component Sanitization",
        desc: "The drain pan, plenum, and accessible duct connections are treated with antimicrobial solutions to eliminate bacteria, mold, and biofilm buildup throughout the system.",
      },
      {
        step: "05",
        title: "Performance Testing",
        desc: "We measure airflow, check temperature differentials, and verify that all components are operating at peak performance. You receive a detailed report with before/after comparisons.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between duct cleaning and HVAC cleaning?",
        a: "Air duct cleaning focuses on the ductwork — the passages that carry air through your home. HVAC cleaning goes deeper, addressing the mechanical components like the blower motor, evaporator coils, condenser coils, and drain pans. For best results, we recommend both services together.",
      },
      {
        q: "Will HVAC cleaning improve my cooling/heating?",
        a: "Absolutely. Clean coils transfer heat more efficiently, and an unobstructed blower moves air more effectively. Most homeowners notice improved temperature consistency and faster cooling/heating after a professional HVAC cleaning.",
      },
      {
        q: "How often should my HVAC system be cleaned?",
        a: "We recommend a full HVAC cleaning every 2-3 years. However, if your system is in a dusty environment, you have pets, or you notice reduced performance, annual cleaning is advisable. Regular filter changes every 1-3 months help between professional cleanings.",
      },
      {
        q: "Can a dirty HVAC system cause health problems?",
        a: "Yes. A dirty HVAC system can circulate mold spores, bacteria, dust mites, and other allergens throughout your home. This can worsen respiratory conditions like asthma, trigger allergies, and cause headaches, fatigue, and other symptoms. Regular cleaning helps maintain healthy indoor air.",
      },
    ],
  },
  {
    slug: "mold-removal",
    icon: Search,
    title: "Professional Mold Inspection & Removal",
    subtitle: "in Orange County",
    heroImage: "/hero-bg.png",
    problem:
      "Mold in your air ducts is a serious health hazard that often goes undetected. The dark, humid environment inside ductwork provides ideal conditions for mold growth, and every time your HVAC system runs, mold spores are dispersed throughout your entire home. Orange County's coastal climate makes mold growth particularly common in local homes.",
    warnings: [
      "Mold spores in ducts spread to every room when the HVAC runs",
      "Exposure can cause chronic respiratory issues and allergic reactions",
      "Mold damages duct materials and can lead to costly structural repairs",
      "DIY cleaning often spreads spores instead of eliminating them",
    ],
    benefits: [
      "Eliminate health risks from mold exposure",
      "Stop mold from spreading to other areas of your home",
      "Remove musty odors caused by mold growth",
      "Protect your family from respiratory infections",
      "Prevent mold recurrence with preventive treatments",
    ],
    process: [
      {
        step: "01",
        title: "Visual Inspection",
        desc: "Our certified mold specialist conducts a thorough visual inspection of all accessible ductwork, using borescopes and moisture meters to detect mold growth even in hidden areas.",
      },
      {
        step: "02",
        title: "Containment Setup",
        desc: "Before any remediation begins, we set up containment barriers with negative air pressure to ensure mold spores cannot escape into your living spaces during the removal process.",
      },
      {
        step: "03",
        title: "Mold Remediation",
        desc: "Affected duct sections are treated with professional-grade antimicrobial agents that kill mold at the root level. Heavily contaminated insulation or flex duct is safely removed and replaced.",
      },
      {
        step: "04",
        title: "Source Moisture Control",
        desc: "We identify and address moisture sources that contributed to the mold growth, such as condensation issues, leaks, or poor drainage, to prevent recurrence.",
      },
      {
        step: "05",
        title: "Preventive Sealant",
        desc: "An antimicrobial sealant is applied to cleaned duct surfaces, creating a protective barrier that inhibits future mold growth and provides long-lasting protection.",
      },
    ],
    faqs: [
      {
        q: "How can I tell if there's mold in my air ducts?",
        a: "Common signs include a persistent musty or earthy smell when the HVAC runs, visible dark spots or discoloration around vent covers, increased allergy symptoms, and excessive condensation on ductwork. A professional inspection with specialized cameras is the most reliable way to confirm mold presence.",
      },
      {
        q: "Is mold in ducts dangerous?",
        a: "Yes. Mold spores released from ductwork can cause allergic reactions, asthma attacks, respiratory infections, headaches, and fatigue. Certain mold species like Stachybotrys (black mold) produce mycotoxins that can cause more severe health effects, especially in children, elderly individuals, and those with compromised immune systems.",
      },
      {
        q: "Can I remove mold from ducts myself?",
        a: "We strongly advise against DIY mold removal in ductwork. Improper removal can disturb mold colonies and release massive amounts of spores into your home, making the problem much worse. Professional remediation uses proper containment, specialized equipment, and EPA-approved treatments for safe, effective removal.",
      },
      {
        q: "How long does mold remediation take?",
        a: "Most residential duct mold remediation projects are completed in 4-8 hours depending on the extent of contamination and the size of the duct system. Severely affected systems or those requiring insulation replacement may take longer. We provide a detailed timeline during the initial inspection.",
      },
    ],
  },
  {
    slug: "air-quality-testing",
    icon: Sparkles,
    title: "Indoor Air Quality Testing",
    subtitle: "in Orange County",
    heroImage: "/hero-bg.png",
    problem:
      "Indoor air pollution is one of the top five environmental health risks according to the EPA. Your home's air can contain elevated levels of volatile organic compounds (VOCs), carbon monoxide, mold spores, dust mites, pollen, pet dander, and other pollutants — many of which are invisible and odorless. Without proper testing, you may be breathing harmful air every day without knowing it.",
    warnings: [
      "Indoor air can be 2-5 times more polluted than outdoor air",
      "Common household products release harmful VOCs into the air",
      "Poor ventilation traps pollutants and allows concentrations to build up",
      "Long-term exposure to indoor pollutants can cause chronic health conditions",
    ],
    benefits: [
      "Identify hidden pollutants affecting your family's health",
      "Get a clear picture of your indoor air quality",
      "Receive expert recommendations for improvement",
      "Peace of mind knowing your home is safe",
      "Data-driven decisions for cleaning and filtration upgrades",
    ],
    process: [
      {
        step: "01",
        title: "Consultation",
        desc: "We discuss your concerns, health symptoms, home characteristics, and any known issues to determine the best testing approach for your specific situation.",
      },
      {
        step: "02",
        title: "Multi-Point Sampling",
        desc: "Our technicians place professional-grade air sampling equipment in strategic locations throughout your home — including bedrooms, living areas, and near the HVAC system — to capture a comprehensive air quality profile.",
      },
      {
        step: "03",
        title: "Laboratory Analysis",
        desc: "Collected samples are sent to an accredited laboratory for detailed analysis, measuring levels of particulate matter, VOCs, mold spores, allergens, carbon monoxide, and other key indicators.",
      },
      {
        step: "04",
        title: "Results & Report",
        desc: "You receive a comprehensive written report with easy-to-understand charts showing each pollutant level compared to recommended safety thresholds, along with specific findings and risk assessments.",
      },
      {
        step: "05",
        title: "Action Plan",
        desc: "Based on your results, we provide a prioritized list of recommended actions — from simple changes like upgrading air filters to professional remediation services — to address any issues found.",
      },
    ],
    faqs: [
      {
        q: "What does air quality testing measure?",
        a: "Our comprehensive testing measures particulate matter (PM2.5 and PM10), volatile organic compounds (VOCs), mold spores, allergens (dust mites, pollen, pet dander), carbon monoxide, carbon dioxide, humidity levels, and temperature. We can also test for specific contaminants like formaldehyde or radon upon request.",
      },
      {
        q: "How long does testing take?",
        a: "The actual sampling process takes 1-2 hours at your home. Laboratory analysis typically takes 3-5 business days. We will email your comprehensive report as soon as results are available and schedule a follow-up call to discuss findings and recommendations.",
      },
      {
        q: "Who should get air quality testing?",
        a: "We recommend testing for anyone experiencing unexplained allergies, headaches, or respiratory symptoms; homes with new construction or recent renovations; families with young children, elderly members, or immunocompromised individuals; homes near industrial areas or heavy traffic; and anyone buying or selling a home.",
      },
      {
        q: "What happens if poor air quality is found?",
        a: "Don't worry — most indoor air quality issues have practical solutions. Depending on what we find, recommendations may include professional duct cleaning, HVAC filter upgrades, improved ventilation, humidity control, mold remediation, or source elimination. We provide a clear, prioritized action plan and can handle most recommended services ourselves.",
      },
    ],
  },
];

const benefitIcons: LucideIcon[] = [
  Wind,
  ShieldCheck,
  Zap,
  ThumbsUp,
  Clock,
];

export function ServiceDetailPage({ slug }: { slug: string }) {
  const { navigate } = useRouter();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-brand-gray">
        <div className="text-center px-4">
          <div className="bg-brand-orange/10 p-4 rounded-2xl w-fit mx-auto mb-6">
            <Search className="h-10 w-10 text-brand-orange" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Service Not Found
          </h1>
          <p className="text-brand-muted text-lg mb-8 max-w-md mx-auto">
            We couldn&apos;t find the service you&apos;re looking for. Please browse
            our available services below.
          </p>
          <Button
            onClick={() => navigate({ page: "services" })}
            className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-8"
          >
            Back to Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    );
  }

  const IconComponent = service.icon;

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
                <button
                  onClick={() => navigate({ page: "services" })}
                  className="hover:text-brand-orange transition-colors"
                >
                  Services
                </button>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-white">{service.title.replace("Professional ", "")}</span>
              </nav>

              {/* Icon */}
              <div className="bg-brand-orange/20 p-4 rounded-2xl w-fit mx-auto mb-6">
                <IconComponent className="h-10 w-10 text-brand-orange" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {service.title}
              </h1>

              <p className="text-xl text-white/70 mb-8">
                {service.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => navigate({ page: "contact" })}
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-brand-orange/25"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base rounded-lg"
                >
                  <a href="tel:+17145550123">
                    <Phone className="mr-2 h-5 w-5" />
                    (714) 555-0123
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Problem Section ─── */}
      <section className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 bg-red-50 text-red-600 hover:bg-red-50 border-0 px-4 py-1.5"
                >
                  The Problem
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
                  Why This Service Matters
                </h2>
                <p className="text-brand-muted text-lg leading-relaxed mb-8">
                  {service.problem}
                </p>
                <Button
                  onClick={() => navigate({ page: "contact" })}
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold"
                >
                  Schedule Your Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-brand-navy mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Warning Signs
                </h3>
                {service.warnings.map((warning, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4"
                  >
                    <div className="bg-red-50 p-2 rounded-lg shrink-0 mt-0.5">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    </div>
                    <p className="text-sm text-brand-dark leading-relaxed">
                      {warning}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Benefits Section ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              badge="Benefits"
              title="What You'll Gain"
              description="Investing in professional service delivers real, measurable improvements to your home and health."
            />
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => {
              const BIcon = benefitIcons[i % benefitIcons.length];
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full group">
                    <CardContent className="p-6 md:p-8">
                      <div className="bg-brand-orange/10 group-hover:bg-brand-orange/20 p-3 rounded-xl w-fit mb-5 transition-colors">
                        <BIcon className="h-6 w-6 text-brand-orange" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2">
                        {benefit}
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed">
                        Our professional approach ensures you experience this
                        benefit with lasting results.
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Process Section ─── */}
      <section className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              badge="Our Process"
              title="How We Work"
              description="A proven, thorough process that delivers exceptional results every time."
            />
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {service.process.map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.12}>
                <div className="relative text-center group">
                  {/* Connector line */}
                  {i < service.process.length - 1 && (
                    <div className="hidden xl:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-orange/40 to-brand-orange/10" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors mb-5">
                    <span className="text-2xl font-bold text-brand-orange">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-3">
                    {p.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed text-sm">
                    {p.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              badge="FAQ"
              title="Frequently Asked Questions"
              description="Everything you need to know about this service."
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-brand-navy hover:text-brand-orange transition-colors px-0">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-muted leading-relaxed text-sm">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free consultation and quote. Our certified
              technicians are ready to help you breathe easier in your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate({ page: "contact" })}
                className="bg-white text-brand-orange hover:bg-gray-100 font-bold px-10 py-6 text-base rounded-lg shadow-lg"
              >
                Get Your Free Quote
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
