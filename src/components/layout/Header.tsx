"use client";

import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "About", href: "about" },
  { label: "Why Us", href: "why-us" },
  { label: "Areas", href: "areas" },
  { label: "Contact", href: "contact" },
];

interface HeaderProps {
  onOpenQuote: () => void;
}

export function Header({ onOpenQuote }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-md shadow-lg"
          : "bg-brand-navy"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <div className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm md:text-base leading-tight group-hover:text-brand-orange transition-colors">
                American Duct
              </span>
              <span className="text-brand-orange text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                Cleaning
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-white/80 hover:text-white text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10 transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="tel:(714)555-0192"
              className="hidden md:flex items-center gap-2 text-white/90 hover:text-white text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(714) 555-0192</span>
            </a>
            <Button
              onClick={onOpenQuote}
              className="hidden sm:block bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm px-5 py-2 rounded-lg transition-all"
            >
              Get Free Quote
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-brand-navy border-white/10 w-80"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full pt-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <span className="text-white font-bold">American Duct</span>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                    {navLinks.map((link) => (
                      <button
                        key={link.href}
                        onClick={() => scrollTo(link.href)}
                        className="text-white/80 hover:text-white hover:bg-white/10 text-base font-medium px-4 py-3 rounded-lg text-left transition-all"
                      >
                        {link.label}
                      </button>
                    ))}
                  </nav>
                  <div className="mt-auto pb-8 space-y-4">
                    <a
                      href="tel:(714)555-0192"
                      className="flex items-center gap-3 text-white/90 px-4"
                    >
                      <Phone className="w-5 h-5 text-brand-orange" />
                      <span className="font-medium">(714) 555-0192</span>
                    </a>
                    <Button
                      onClick={() => {
                        setMobileOpen(false);
                        onOpenQuote();
                      }}
                      className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold py-3 rounded-lg"
                    >
                      Get Free Quote
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
