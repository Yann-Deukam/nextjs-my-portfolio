"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollHandler() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [scrollTo]);

  return null;
}
