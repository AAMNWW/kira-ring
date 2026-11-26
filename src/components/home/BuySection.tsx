"use client";

import Image from "next/image";
import { useState } from "react";
import { KIRA_URL } from "@/lib/site";

type Finish = "black" | "silver" | "gold" | "white";

const FINISHES: Record<Finish, { src: string; name: string; price: number; w: number; h: number }> = {
  black: { src: "/images/ring-black.webp", name: "Midnight Black", price: 288, w: 544, h: 680 },
  silver: { src: "/images/ring-silver.webp", name: "Lunar Silver", price: 288, w: 542, h: 680 },
  gold: { src: "/images/ring-gold.webp", name: "Champagne Gold", price: 288, w: 541, h: 669 },
  white: { src: "/images/ring-white.webp", name: "Pearl White", price: 288, w: 551, h: 680 },
};
const ORDER: Finish[] = ["black", "silver", "gold", "white"];
const SIZES = [6, 7, 8, 9, 10, 11, 12, 13];

const fmt = (n: number) => "$" + n.toLocaleString("en-US");

export default function BuySection() {
  const [cur, setCur] = useState<Finish>("white");
  const [shown, setShown] = useState<Finish>("white");
  const [fading, setFading] = useState(false);
  const [size, setSize] = useState<number | null>(null);
  const [kit, setKit] = useState(true);
  const [qty, setQty] = useState(1);

  const pick = (c: Finish) => {
    setCur(c);
    setFading(true);
    setTimeout(() => {
      setShown(c);
      setFading(false);
    }, 180);
  };

  const toggleKit = () => {
    const next = !kit;
    setKit(next);
    if (next) setSize(null);
  };

  return (
    <>
      <div className="buy-grid reveal">
        <div className="buy-stage">
          <Image
            id="buyImg"
            src={FINISHES[shown].src}
            alt={"Kira AI Ring in " + FINISHES[shown].name}
            width={FINISHES[shown].w}
            height={FINISHES[shown].h}
            sizes="(max-width: 860px) 80vw, 430px"
            style={{ opacity: fading ? 0 : 1 }}
          />
        </div>
        <div className="buy-card">
          <h3>Kira AI Ring</h3>
          <p className="buy-sub">The AI wearable smart intelligent ring.</p>
          <div className="buy-swatches" id="buySwatches">
            {ORDER.map((c) => (
              <button
                key={c}
                type="button"
                className={`swatch sw-${c}`}
                aria-pressed={cur === c}
                aria-label={FINISHES[c].name}
                onClick={() => pick(c)}
              />
            ))}
          </div>
          <p className="buy-price">
            <span id="buyName">{FINISHES[cur].name}</span> — <b id="buyPrice">{fmt(FINISHES[cur].price)}</b>
          </p>
          <p className="buy-incl">Includes a 1-year Kira AI subscription.</p>

          <span className="buy-label">Size</span>
          <p className="buy-note">Not sure? Choose the free sizing kit and we&apos;ll ship it first.</p>
          <div
            className={`opt-row${kit ? " sel" : ""}`}
            id="kitRow"
            role="checkbox"
            aria-checked={kit}
            tabIndex={0}
            onClick={toggleKit}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                toggleKit();
              }
            }}
          >
            <span>Free Sizing Kit</span>
            <span className="tick">✓</span>
          </div>
          <div className="size-grid" id="sizeGrid">
            {SIZES.map((s) => (
              <button key={s} type="button" className={`size-btn${size === s ? " sel" : ""}`} onClick={() => {
                  setSize(s);
                  setKit(false);
                }}>
                {s}
              </button>
            ))}
          </div>

          <div className="qty-row">
            <b>Quantity</b>
            <div className="qty-ctl">
              <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span>{qty}</span>
              <button type="button" aria-label="Increase quantity" onClick={() => setQty((q) => Math.min(9, q + 1))}>
                +
              </button>
            </div>
          </div>

          <a className="btn btn-primary btn-block" href={KIRA_URL}>
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
}
