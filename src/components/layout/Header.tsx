"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Phone, X, ArrowRight } from "lucide-react";
import type { PageHash } from "@/lib/useHashRouter";

interface HeaderProps {
  currentPage: PageHash;
  navigate: (page: PageHash) => void;
}

const navLinks: { label: string; hash: PageHash }[] = [
  { label: "Home", hash: "home" },
  { label: "Services", hash: "services" },
  { label: "About", hash: "about" },
  { label: "Why Us", hash: "why-us" },
  { label: "Service Areas", hash: "areas" },
  { label: "Contact", hash: "contact" },
];

export function Header({ currentPage, navigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (hash: PageHash) => {
    navigate(hash);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo-icon.png"
                alt="American Air Duct Cleaning"
                width={28}
                height={28}
                className="w-7 h-7"
                unoptimized
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={`font-bold text-sm md:text-base leading-tight transition-colors ${
                  scrolled ? "text-brand-navy" : "text-white"
                }`}
              >
                American Air Duct
              </p>
              <p
                className={`text-xs font-medium transition-colors ${
                  scrolled ? "text-brand-orange" : "text-brand-orange"
                }`}
              >
                Cleaning
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.hash}
                onClick={() => handleNav(link.hash)}
                className={`px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === link.hash
                    ? scrolled
                      ? "text-brand-orange bg-brand-orange/10"
                      : "text-brand-orange"
                    : scrolled
                    ? "text-brand-navy hover:text-brand-orange hover:bg-brand-orange/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9494008690"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-brand-navy" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              (949) 400-8690
            </a>
            <Button
              size="sm"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5"
              onClick={() => handleNav("contact")}
            >
              Free Estimate
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile: Phone + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:9494008690"
              className={`flex items-center transition-colors ${
                scrolled ? "text-brand-navy" : "text-white"
              }`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className={`p-2 rounded-md transition-colors ${
                    scrolled
                      ? "text-brand-navy hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile header */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center">
                        <Image
                          src="/logo-icon.png"
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5"
                          unoptimized
                        />
                      </div>
                      <span className="font-bold text-sm text-brand-navy">
                        American Air Duct
                      </span>
                    </div>
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="p-1 rounded-md hover:bg-gray-100"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Nav links */}
                  <nav className="flex-1 p-4 space-y-1">
                    {navLinks.map((link) => (
                      <button
                        key={link.hash}
                        onClick={() => handleNav(link.hash)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          currentPage === link.hash
                            ? "bg-brand-orange/10 text-brand-orange"
                            : "text-brand-navy hover:bg-gray-50"
                        }`}
                      >
                        {link.label}
                      </button>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-4 border-t space-y-3">
                    <a
                      href="tel:9494008690"
                      className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-brand-navy hover:bg-gray-50 rounded-lg"
                    >
                      <Phone className="w-4 h-4 text-brand-orange" />
                      (949) 400-8690
                    </a>
                    <Button
                      className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white h-12"
                      onClick={() => handleNav("contact")}
                    >
                      Get Free Estimate
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
