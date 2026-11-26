"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";

type Finish = "black" | "silver" | "gold" | "white";

const FINISHES: Record<Finish, { src: string; name: string; price: number; w: number; h: number }> = {
  black: { src: "/images/ring-black.webp", name: "Midnight Black", price: 288, w: 544, h: 680 },
  silver: { src: "/images/ring-silver.webp", name: "Lunar Silver", price: 288, w: 542, h: 680 },
  gold: { src: "/images/ring-gold.webp", name: "Champagne Gold", price: 288, w: 541, h: 669 },
  white: { src: "/images/ring-white.webp", name: "Pearl White", price: 288, w: 551, h: 680 },
};
const ORDER: Finish[] = ["black", "silver", "gold", "white"];
const SIZES = [6, 7, 8, 9, 10, 11, 12, 13];

type Line = { c: Finish; name: string; price: number; size: number | null; qty: number };

const fmt = (n: number) => "$" + n.toLocaleString("en-US");

export default function BuySection() {
  const [cur, setCur] = useState<Finish>("white");
  const [shown, setShown] = useState<Finish>("white");
  const [fading, setFading] = useState(false);
  const [size, setSize] = useState<number | null>(null);
  const [kit, setKit] = useState(true);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState<Line[]>([]);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [done, setDone] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

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

  const addToCart = () => {
    const f = FINISHES[cur];
    setCart((prev) => {
      const i = prev.findIndex((it) => it.c === cur && it.size === size);
      if (i >= 0) return prev.map((it, j) => (j === i ? { ...it, qty: Math.min(9, it.qty + qty) } : it));
      return [...prev, { c: cur, name: f.name, price: f.price, size, qty }];
    });
    setDone(false);
    requestAnimationFrame(() => cartRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
  };

  const remove = (i: number) => setCart((prev) => prev.filter((_, j) => j !== i));

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setCheckoutOpen(false);
    setCart([]);
    setDone(true);
  };

  const sub = cart.reduce((s, it) => s + it.price * it.qty, 0);
  const cartOpen = cart.length > 0 || done;

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

          <button type="button" className="btn btn-primary btn-block" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className={`cart-wrap${cartOpen ? " open" : ""}`} ref={cartRef}>
        <div className="cart-panel">
          <h4>Your cart</h4>
          <div>
            {cart.map((it, i) => (
              <div className="cart-line" key={`${it.c}-${it.size}`}>
                <Image src={FINISHES[it.c].src} alt="" width={54} height={54} />
                <div className="cl-info">
                  <b>Kira AI Ring — {it.name}</b>
                  <span>
                    {it.size ? "Size " + it.size : "Free sizing kit"} · Qty {it.qty} · 1-yr Kira AI included
                  </span>
                </div>
                <span className="cl-price">{fmt(it.price * it.qty)}</span>
                <button type="button" className="cl-rm" aria-label="Remove" onClick={() => remove(i)}>
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="cart-totals">
            <div className="t-row">
              <span>Subtotal</span>
              <span>{fmt(sub)}</span>
            </div>
            <div className="t-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="t-row grand">
              <span>Total</span>
              <span>{fmt(sub)}</span>
            </div>
          </div>
          <div style={{ marginTop: 22 }}>
            <button type="button" className="btn btn-primary btn-block" onClick={() => cart.length && setCheckoutOpen(true)}>
              Checkout
            </button>
          </div>

          <form className={`checkout-form${checkoutOpen ? " open" : ""}`} noValidate onSubmit={submit}>
            <div className="cf-grid">
              <input type="text" placeholder="Full name" aria-label="Full name" autoComplete="name" required />
              <input type="email" placeholder="Email" aria-label="Email" autoComplete="email" required />
              <input type="text" className="full" placeholder="Address" aria-label="Address" autoComplete="street-address" required />
              <input type="text" placeholder="City" aria-label="City" autoComplete="address-level2" required />
              <input type="text" placeholder="Country" aria-label="Country" autoComplete="country-name" required />
              <input type="text" className="full" placeholder="Card number" aria-label="Card number" inputMode="numeric" autoComplete="off" required />
              <input type="text" placeholder="MM / YY" aria-label="Expiry date" autoComplete="off" required />
              <input type="text" placeholder="CVC" aria-label="CVC" inputMode="numeric" autoComplete="off" required />
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Pay securely
            </button>
            <p className="pay-note">Demo checkout — no payment is processed. Payments integration is wired at launch.</p>
          </form>

          <div className={`order-done${done ? " open" : ""}`}>
            <div className="od-ico">✓</div>
            <h4>Order placed</h4>
            <p>Thank you — your Kira AI Ring is on its way. A confirmation email will follow.</p>
          </div>
        </div>
      </div>
    </>
  );
}
