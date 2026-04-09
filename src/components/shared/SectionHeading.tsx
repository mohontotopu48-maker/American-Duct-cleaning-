"use client";

import { Badge } from "@/components/ui/badge";

export function SectionHeading({
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
