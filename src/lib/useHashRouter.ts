"use client";

import { useState, useEffect, useCallback } from "react";

export type PageHash =
  | "home"
  | "services"
  | "about"
  | "why-us"
  | "areas"
  | "contact";

const VALID_HASHES: PageHash[] = [
  "home",
  "services",
  "about",
  "why-us",
  "areas",
  "contact",
];

const DEFAULT_HASH: PageHash = "home";

function hashToPage(hash: string): PageHash {
  const clean = hash.replace("#", "");
  if ((VALID_HASHES as readonly string[]).includes(clean)) {
    return clean as PageHash;
  }
  return DEFAULT_HASH;
}

export function useHashRouter() {
  const [currentPage, setCurrentPage] = useState<PageHash>(DEFAULT_HASH);

  useEffect(() => {
    const handleHashChange = () => {
      const page = hashToPage(window.location.hash);
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Set initial page from hash
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = useCallback((page: PageHash) => {
    window.location.hash = page;
  }, []);

  return { currentPage, navigate };
}
