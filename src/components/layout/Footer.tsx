"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useRouter } from "@/components/shared/Router";

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", page: "home" },
                { label: "Our Services", page: "services" },
                { label: "About Us", page: "about" },
                { label: "Service Areas", page: "areas" },
                { label: "Contact Us", page: "contact" },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-white/60 hover:text-brand-orange text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Air Duct Cleaning", slug: "air-duct-cleaning" },
                { label: "Dryer Vent Cleaning", slug: "dryer-vent-cleaning" },
                { label: "HVAC System Cleaning", slug: "hvac-cleaning" },
                { label: "Mold Removal", slug: "mold-removal" },
                { label: "Air Quality Testing", slug: "air-quality-testing" },
              ].map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => navigate("service-detail", s.slug)}
                    className="text-white/60 hover:text-brand-orange text-sm transition-colors"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact Us</h4>
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
                <div className="text-white/60 text-sm">
                  <div>Mon–Fri: 8AM – 6PM</div>
                  <div>Sat: 9AM – 4PM</div>
                </div>
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
}
