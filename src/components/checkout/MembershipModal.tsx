"use client";

import Image from "next/image";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

const Ctx = createContext<{ open: () => void }>({ open: () => {} });

/** "Edit" on the membership line re-opens the offer modal. */
export function EditMembership() {
  const { open } = useContext(Ctx);
  return (
    <button type="button" className="link" onClick={open}>
      Edit
    </button>
  );
}

/**
 * Wraps the cart page and shows the membership modal on arrival,
 * exactly like the original page (closes on ✕, scrim click, Escape or either button).
 */
export default function MembershipModal({ children }: { children: ReactNode }) {
  const [shown, setShown] = useState(true);
  const closeRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setShown(false), []);
  const open = useCallback(() => setShown(true), []);

  useEffect(() => {
    if (!shown) return;
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [shown, close]);

  return (
    <Ctx.Provider value={{ open }}>
      {children}

      <div className={`scrim${shown ? "" : " hidden"}`} onClick={close} />
      <div className={`modal-wrap${shown ? "" : " hidden"}`} onClick={(e) => e.target === e.currentTarget && close()}>
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button ref={closeRef} type="button" className="close" aria-label="Close" onClick={close}>
            <svg viewBox="0 0 24 24">
              <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
            </svg>
          </button>

          <h2 className="modal-h" id="modal-title">
            One year of Kira AI Membership—included with your ring.
          </h2>
          <p className="sub">Buy the Kira AI Ring and your first 12 months of membership are on us.</p>

          <div className="grid">
            <div className="shot">
              <Image src="/images/membership.jpg" alt="Kira AI smart ring with voice recording and transcription" width={900} height={657} sizes="(max-width: 720px) 90vw, 400px" />
            </div>

            <div className="copy">
              <p className="offer">Kira AI Ring + 12 months of Kira AI</p>
              <p className="price">
                <b>$288</b> one-time · membership $0 for the first year
              </p>
              <p className="included">Includes a 1-year Kira AI subscription.</p>

              <ul className="badges">
                <li>
                  <span className="ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z" />
                      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
                    </svg>
                  </span>
                  All features and services unlocked
                </li>
                <li>
                  <span className="ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 5h14M5 10h10M5 15h14M5 20h8" />
                    </svg>
                  </span>
                  Unlimited AI voice transcription
                </li>
                <li>
                  <span className="ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  No monthly bills for 12 months
                </li>
              </ul>

              <div className="actions">
                <button type="button" className="btn btn-ghost" onClick={close}>
                  Skip for Now
                </button>
                <button type="button" className="btn btn-primary" onClick={close}>
                  Checkout
                </button>
              </div>
            </div>
          </div>

          <hr className="divider" />
          <p className="fine">
            1-year Kira AI subscription included with every Kira AI Ring purchase. Membership begins at ring activation and renews at the standard rate after 12 months unless cancelled. Applies to new and existing customers.
          </p>
        </div>
      </div>
    </Ctx.Provider>
  );
}
