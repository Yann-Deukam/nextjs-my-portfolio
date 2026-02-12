"use client";

import { ReactNode } from "react";

interface HeadingProps {
  id: string;
  title: string;
  legend?: string;
  children: ReactNode;
}

export default function Heading({ id, title, legend, children }: HeadingProps) {
  return (
    <section id={id} className="scroll-mt-30 mt-40">
      <div className="space-y-6">
        {/* Small blue legend */}
        {legend && (
          <p className="text-sm font-medium text-cyan-400 uppercase tracking-[0.2em]">
            {legend}
          </p>
        )}

        {/* Main title */}
        <h1 className="text-6xl font-bold tracking-tight">{title}</h1>

        {/* Section content */}
        <div className="pt-4">{children}</div>
      </div>
    </section>
  );
}
