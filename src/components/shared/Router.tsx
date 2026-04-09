"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface Route {
  page: string;
  slug?: string;
  hash?: string;
}

type NavigateArg = string | { page: string; slug?: string };

interface RouterContextType {
  route: Route;
  navigate: (arg: NavigateArg, slug?: string) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextType>({
  route: { page: "home" },
  navigate: () => {},
  goBack: () => {},
});

function parseHash(): Route {
  if (typeof window === "undefined") return { page: "home" };
  const hash = window.location.hash.replace("#", "") || "home";
  const parts = hash.split("/");
  return {
    page: parts[0] || "home",
    slug: parts[1] || undefined,
    hash,
  };
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const handleHashChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = useCallback((arg: NavigateArg, slug?: string) => {
    let page: string;
    let s: string | undefined;
    if (typeof arg === "string") {
      page = arg;
      s = slug;
    } else {
      page = arg.page;
      s = arg.slug;
    }
    const hash = s ? `#${page}/${s}` : `#${page}`;
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goBack = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = "#home";
    }
  }, []);

  return (
    <RouterContext.Provider value={{ route, navigate, goBack }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
