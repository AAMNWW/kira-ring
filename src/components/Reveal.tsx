"use client";

import { useEffect } from "react";

const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

function runCounts(root: Element) {
  root.querySelectorAll<HTMLElement>(".count").forEach((el) => {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    const to = parseFloat(el.dataset.to || "0");
    const dec = parseInt(el.dataset.dec || "0", 10);
    if (reduced()) {
      el.textContent = to.toFixed(dec);
      return;
    }
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = (to * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/**
 * Adds the `in` class to every element matching `selector` once it scrolls
 * into view (same behaviour as the original pages) and runs count-ups inside.
 */
export default function Reveal({ selector, threshold = 0.15 }: { selector: string; threshold?: number }) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => {
        el.classList.add("in");
        runCounts(el);
      });
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            runCounts(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, threshold]);

  return null;
}
