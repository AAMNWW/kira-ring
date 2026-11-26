"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { KIRA_URL } from "@/lib/site";

const RING_PRICE = 288;

type CartState = { inCart: boolean; remove: () => void; restore: () => void };
const Ctx = createContext<CartState>({ inCart: true, remove: () => {}, restore: () => {} });

/** Holds whether the ring is still in the cart; shared by the item panel and the order summary. */
export function CartProvider({ children }: { children: ReactNode }) {
  const [inCart, setInCart] = useState(true);
  return <Ctx.Provider value={{ inCart, remove: () => setInCart(false), restore: () => setInCart(true) }}>{children}</Ctx.Provider>;
}

/** "Remove" link on the ring line item. */
export function RemoveButton() {
  const { remove } = useContext(Ctx);
  return (
    <button type="button" className="link" onClick={remove} aria-label="Remove Kira AI Ring from cart">
      Remove
    </button>
  );
}

/** Shows the line item while the ring is in the cart, or an empty-cart panel with Undo once removed. */
export function CartItem({ children }: { children: ReactNode }) {
  const { inCart, restore } = useContext(Ctx);
  if (inCart) return <>{children}</>;
  return (
    <div className="panel item empty-cart" role="status">
      <p className="item-name">Your cart is empty</p>
      <p className="item-meta">
        Kira AI Ring was removed.{" "}
        <button type="button" className="link" onClick={restore}>
          Undo
        </button>{" "}
        · <a className="link" href={KIRA_URL}>Shop Kira AI Ring</a>
      </p>
    </div>
  );
}

/** Order-summary subtotal that follows the cart. */
export function Subtotal() {
  const { inCart } = useContext(Ctx);
  return <span>${inCart ? RING_PRICE : 0}</span>;
}
