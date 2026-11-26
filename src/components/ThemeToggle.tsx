"use client";

import { useEffect } from "react";
import { THEME_KEY } from "@/lib/theme";

type Theme = "light" | "dark";

function apply(t: Theme) {
  const root = document.documentElement;
  root.dataset.theme = t;
  root.style.colorScheme = t;
}

/**
 * Light / dark toggle. Follows the OS setting until the visitor picks one,
 * then remembers the choice. The icon is swapped purely in CSS from
 * html[data-theme], so server and client markup always match.
 */
export default function ThemeToggle() {
  useEffect(() => {
    const mq = matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(THEME_KEY);
      } catch {}
      if (saved !== "light" && saved !== "dark") apply(e.matches ? "light" : "dark");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label="Toggle light / dark mode" title="Toggle light / dark">
      <span className="tt-sun" aria-hidden="true">☀︎</span>
      <span className="tt-moon" aria-hidden="true">☾</span>
    </button>
  );
}
