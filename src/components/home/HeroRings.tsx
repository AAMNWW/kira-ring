"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const RINGS = [
  { src: "/images/ring-black.webp", w: 544, h: 680, alt: "Kira AI Ring in Midnight Black, floating, its microphone display active" },
  { src: "/images/ring-silver.webp", w: 542, h: 680, alt: "Kira AI Ring in Lunar Silver, floating" },
  { src: "/images/ring-gold.webp", w: 541, h: 669, alt: "Kira AI Ring in Champagne Gold, floating" },
  { src: "/images/ring-white.webp", w: 551, h: 680, alt: "Kira AI Ring in Pearl White, floating" },
];

/** The four floating hero rings, with the original gentle scroll parallax. */
export default function HeroRings() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const y = Math.min(scrollY, 700);
      el.style.transform = `translateY(${y * 0.1}px) scale(${1 - y * 0.00015})`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hero-rings reveal" id="heroRings" ref={ref}>
      {RINGS.map((r) => (
        <Image key={r.src} src={r.src} alt={r.alt} width={r.w} height={r.h} sizes="(max-width: 1040px) 23vw, 235px" preload />
      ))}
    </div>
  );
}
