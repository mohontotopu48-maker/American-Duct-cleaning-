"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Phone, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Air Duct Cleaning", href: "#service/air-duct-cleaning" },
      { label: "Dryer Vent Cleaning", href: "#service/dryer-vent-cleaning" },
      { label: "HVAC System Cleaning", href: "#service/hvac-cleaning" },
      { label: "Mold Removal", href: "#service/mold-removal" },
      { label: "Air Quality Testing", href: "#service/air-quality-testing" },
    ],
  },
  { label: "About Us", href: "#about" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export function Header({ onOpenQuote }: { onOpenQuote: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useCallback((href: string) => {
    window.location.hash = href;
    setMobileOpen(false);
    setServicesOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-brand-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigate("#home");
            }}
            className="flex items-center gap-2.5 shrink-0"
          >
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
              <span className="text-[10px] font-medium tracking-widest uppercase text-brand-orange">
                Cleaning
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <button
                    onClick={() => navigate(link.href)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-orange ${
                      scrolled ? "text-brand-dark" : "text-white/90"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(child.href);
                          }}
                          className="block px-4 py-2.5 text-sm text-brand-dark hover:bg-brand-orange/5 hover:text-brand-orange transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.href);
                  }}
                  className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                    scrolled ? "text-brand-dark" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
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
              onClick={onOpenQuote}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-5"
            >
              Free Quote
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
              <SheetContent side="right" className="w-80 p-6 overflow-y-auto">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-1 mt-6">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(link.href);
                        }}
                        className="block py-3 px-2 text-base font-medium text-brand-navy hover:text-brand-orange transition-colors"
                      >
                        {link.label}
                      </a>
                      {link.children && (
                        <div className="ml-4 flex flex-col gap-0.5">
                          {link.children.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(child.href);
                              }}
                              className="block py-2 px-2 text-sm text-brand-muted hover:text-brand-orange transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t space-y-4">
                  <a
                    href="tel:+17145550123"
                    className="flex items-center gap-2 text-brand-dark font-medium"
                  >
                    <Phone className="h-5 w-5 text-brand-orange" />
                    (714) 555-0123
                  </a>
                  <Button
                    onClick={() => {
                      setMobileOpen(false);
                      onOpenQuote();
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
}
