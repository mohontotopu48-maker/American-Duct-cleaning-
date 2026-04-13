"use client";

import { Phone, Mail, Clock, MapPin, Shield } from "lucide-react";
import type { PageHash } from "@/lib/useHashRouter";

interface FooterProps {
  navigate: (page: PageHash) => void;
}

const quickLinks = [
  { label: "Home", hash: "home" as PageHash },
  { label: "Services", hash: "services" as PageHash },
  { label: "About Us", hash: "about" as PageHash },
  { label: "Why Choose Us", hash: "why-us" as PageHash },
  { label: "Service Areas", hash: "areas" as PageHash },
  { label: "Contact", hash: "contact" as PageHash },
];

const serviceLinks = [
  "Air Duct Cleaning",
  "Dryer Vent Cleaning",
  "HVAC Sanitizing",
  "Air Duct Replacement",
  "Coil Cleaning",
  "Air Duct Sealing",
];

export function Footer({ navigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center">
                <img
                  src="/logo-icon.png"
                  alt=""
                  className="w-7 h-7"
                />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">
                  American Air Duct
                </p>
                <p className="text-brand-orange text-xs font-medium">
                  Cleaning
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professionally owned company dedicated to providing quality
              service and solutions for improved indoor air quality in Orange
              County and Southern California.
            </p>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-orange" />
              <span className="text-xs text-gray-400">
                Licensed & Fully Insured
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.hash}>
                  <button
                    onClick={() => navigate(link.hash)}
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => navigate("services")}
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:9494008690"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-brand-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                (949) 400-8690
              </a>
              <a
                href="mailto:americanductsOC@gmail.com"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-brand-orange transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span className="break-all">americanductsOC@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon – Fri: 9 AM – 6 PM</p>
                  <p>Sat – Sun: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <p>Orange County, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} American Air Duct Cleaning. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Links */}
            <a
              href="https://www.yelp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-orange transition-colors"
              aria-label="Yelp"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.14 2.16c.13-.57.76-.84 1.25-.55l3.18 1.86c.5.29.54.97.07 1.3l-2.96 2.07c-.47.33-1.12.12-1.3-.42l-.24-.69a6.02 6.02 0 0 0-3.05-3.36c-.51-.26-.52-.99.02-1.21h3.03zm-5.03 3.84c.49.32.51 1.02.04 1.36l-2.82 2.11c-.47.35-1.14.13-1.32-.43l-.21-.64A6.03 6.03 0 0 0 .65 5.22c-.32-.52-.02-1.2.58-1.28l3.79-.5c.56-.08.99.47.86 1.02l-.77 1.54zM5.22 12c0-.59.49-1.07 1.08-1.04l3.53.18c.58.03.92.66.67 1.18l-.3.62a6.01 6.01 0 0 0 0 4.56l.3.62c.25.52-.09 1.15-.67 1.18l-3.53.18c-.59.03-1.08-.45-1.08-1.04V12zm2.43 6.9c-.47.34-1.14.13-1.32-.43l-1.13-3.4c-.18-.56.22-1.12.8-1.11h.68c1.22 0 2.38.37 3.35 1.04.48.33.49 1.03.03 1.37l-2.41 1.53zm4.07 3.16c-.13.57-.76.84-1.25.55l-3.18-1.86c-.5-.29-.54-.97-.07-1.3l2.96-2.07c.47-.33 1.12-.12 1.3.42l.24.69c.57 1.5 1.52 2.8 2.76 3.77.45.35.35 1.06-.19 1.24l-2.57.56zm3.15-4.13c.5-.29.54-.97.07-1.3l-2.96-2.07c-.47-.33-1.12-.12-1.3.42l-.24.69a6.02 6.02 0 0 0 3.05 3.36c.51.26.52.99-.02 1.21l-3.03.12c-.13-.57.76-.84 1.25-.55l3.18 1.86c-.47.34-1.14.13-1.32-.43z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-orange transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-orange transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-orange transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
