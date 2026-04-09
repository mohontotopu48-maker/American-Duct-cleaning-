"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Phone, Menu } from "lucide-react";
import { useRouter } from "@/components/shared/Router";

const NAV_LINKS = [
  { label: "Home", page: "home" },
  { label: "Services", page: "services" },
  { label: "About Us", page: "about" },
  { label: "Service Areas", page: "areas" },
  { label: "Contact", page: "contact" },
];

interface HeaderProps {
  onOpenQuote: (service?: string) => void;
}

export function Header({ onOpenQuote }: HeaderProps) {
  const { route, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = route.page === "home";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (page: string) => {
    navigate(page);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
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
                  scrolled || !isHome ? "text-brand-navy" : "text-white"
                }`}
              >
                American Duct
              </span>
              <span className="text-[10px] font-medium tracking-widest uppercase text-brand-orange">
                Cleaning
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  route.page === link.page
                    ? "text-brand-orange bg-brand-orange/10"
                    : scrolled || !isHome
                    ? "text-brand-dark hover:text-brand-orange hover:bg-brand-gray"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+17145550123"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled || !isHome
                  ? "text-brand-dark hover:text-brand-orange"
                  : "text-white"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">(714) 555-0123</span>
            </a>
            <Button
              onClick={() => onOpenQuote()}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold px-5"
              size="sm"
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
                    scrolled || !isHome
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
                <div className="flex flex-col gap-2 mt-6">
                  {NAV_LINKS.map((link) => (
                    <button
                      key={link.page}
                      onClick={() => handleNav(link.page)}
                      className={`text-left text-base font-medium px-4 py-3 rounded-lg transition-colors ${
                        route.page === link.page
                          ? "text-brand-orange bg-brand-orange/10"
                          : "text-brand-navy hover:text-brand-orange hover:bg-brand-gray"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <hr className="my-3 border-gray-200" />
                  <a
                    href="tel:+17145550123"
                    className="flex items-center gap-2 px-4 py-3 text-brand-dark font-medium"
                  >
                    <Phone className="h-5 w-5 text-brand-orange" />
                    (714) 555-0123
                  </a>
                  <Button
                    onClick={() => {
                      setMobileOpen(false);
                      onOpenQuote();
                    }}
                    className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold mt-2"
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
