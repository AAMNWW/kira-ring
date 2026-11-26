import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MembershipModal, { EditMembership } from "@/components/checkout/MembershipModal";
import { KIRA_URL } from "@/lib/site";
import "@/styles/checkout.css";

export const metadata: Metadata = {
  title: "Review Cart",
  description: "Review your Kira AI Ring order — 1-year Kira AI membership included, 30-day returns, 1-year warranty and charger in the box.",
  alternates: { canonical: "/checkout" },
  // Cart pages shouldn't appear in search results.
  robots: { index: false, follow: true },
};

export default function CheckoutPage() {
  return (
    <div className="pg-checkout">
      <MembershipModal>
        {/* ============ REVIEW CART PAGE ============ */}
        <div className="wrap">
          <Link className="back" href="/">
            &larr; Continue Shopping
          </Link>

          <div className="cols">
            {/* LEFT */}
            <section>
              <h1 className="page">Review Cart</h1>

              <div className="panel perks">
                <div className="perk">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="13" r="8" />
                    <path d="M12 9v4l2.5 2.5M9 2h6" />
                  </svg>
                  30-day returns
                </div>
                <div className="perk">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3l7 3v5c0 5-3.1 8.4-7 10-3.9-1.6-7-5-7-10V6z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  1-year warranty
                </div>
                <div className="perk">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M13 7l-4 6h3l-1 4 4-6h-3z" />
                  </svg>
                  Charger included
                </div>
              </div>

              <div className="panel item">
                <div className="item-row">
                  <Image className="thumb" src="/images/cart-thumb.jpg" alt="Kira AI Ring" width={160} height={137} sizes="88px" />
                  <div className="item-main">
                    <div>
                      <p className="item-name">Kira AI Ring</p>
                      <p className="item-meta">
                        Pearl White
                        <br />
                        Size: Free Sizing Kit
                      </p>
                    </div>
                    <div>
                      <div className="item-price">$288</div>
                      <span className="link">Remove</span>
                    </div>
                  </div>
                </div>

                <div className="sub-item">
                  <div className="sub-left">
                    <span className="chip">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z" />
                        <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
                      </svg>
                    </span>
                    <div>
                      <p className="sub-name">1-Year Kira AI Membership</p>
                      <p className="sub-note">Included with your ring — all features and services</p>
                    </div>
                  </div>
                  <div className="sub-price">
                    <span className="free">Included</span>
                    <s>$96/yr value</s>
                    <EditMembership />
                  </div>
                </div>
              </div>

              <h2 className="addons">Add-Ons</h2>
              <div className="panel addon">
                <Image src="/images/addon-dock.jpg" alt="Kira charging dock" width={300} height={300} sizes="120px" />
                <div className="addon-body">
                  <p className="addon-title">Add a spare charging dock</p>
                  <p className="addon-sub">
                    Keep one at your desk and one at home. <a href="#">Learn More</a>
                  </p>
                </div>
                <a className="btn-add" href={KIRA_URL}>
                  Add
                </a>
              </div>

              <div className="panel addon" style={{ marginTop: 14 }}>
                <Image src="/images/addon-calling.svg" alt="500 minutes AI calling plan" width={300} height={300} unoptimized />
                <div className="addon-body">
                  <p className="addon-title">500 Minutes Calling Plan</p>
                  <p className="addon-sub">
                    Make and receive calls right with Kira AI — 500 minutes/month. <a href="#">Learn More</a>
                  </p>
                </div>
                <a className="btn-add" href={KIRA_URL}>
                  Add
                </a>
              </div>
            </section>

            {/* RIGHT */}
            <aside>
              <h2 className="summary-title">Order Summary</h2>

              <label className="panel gift">
                <input type="checkbox" />
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="8" width="18" height="4" />
                  <path d="M5 12v8h14v-8M12 8v12M12 8s-2.5-5-5-3.5S9.5 8 12 8zm0 0s2.5-5 5-3.5S14.5 8 12 8z" />
                </svg>
                This is a gift
              </label>

              <div className="panel subtotal">
                <div className="subtotal-row">
                  <span>Subtotal</span>
                  <span>$288</span>
                </div>
                <p>Please note that additional taxes and fees may be applied by your local government or carrier upon delivery.</p>
              </div>

              <a className="btn-checkout" href={KIRA_URL}>
                Checkout
              </a>
              <a className="gpay" href={KIRA_URL}>
                <b>G</b> Pay&nbsp;|&nbsp;••••
              </a>
              <div className="paylogos">
                <div className="paylogo" role="img" aria-label="Mastercard">
                  <svg viewBox="0 0 48 30">
                    <circle cx="19" cy="15" r="12" fill="#EB001B" />
                    <circle cx="29" cy="15" r="12" fill="#F79E1B" />
                    <path d="M24 5.5a12 12 0 0 1 0 19 12 12 0 0 1 0-19z" fill="#FF5F00" />
                  </svg>
                </div>
                <div className="paylogo" role="img" aria-label="Visa">
                  <svg viewBox="0 0 60 20">
                    <text x="30" y="16" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="18" fontWeight="900" fontStyle="italic" fill="#1434CB" letterSpacing="1">
                      VISA
                    </text>
                  </svg>
                </div>
                <div className="paylogo" role="img" aria-label="Apple Pay">
                  <svg viewBox="0 0 62 26">
                    <g fill="var(--pay-ink)">
                      <path
                        d="M14.6 6.8c.8-1 1.4-2.4 1.2-3.8-1.2.05-2.6.8-3.5 1.8-.75.87-1.45 2.3-1.27 3.65 1.35.1 2.72-.68 3.57-1.65zm1.2 1.9c-1.97-.12-3.64 1.12-4.58 1.12-.94 0-2.37-1.06-3.92-1.03-2 .03-3.87 1.17-4.9 2.98-2.1 3.63-.55 9 1.5 11.95 1 1.44 2.18 3.06 3.74 3 1.5-.06 2.06-.97 3.87-.97 1.8 0 2.32.97 3.9.94 1.6-.03 2.63-1.47 3.62-2.92 1.14-1.67 1.6-3.28 1.63-3.37-.04-.01-3.12-1.2-3.15-4.74-.03-2.96 2.42-4.38 2.53-4.45-1.38-2.04-3.54-2.27-4.24-2.31z"
                        transform="scale(.72) translate(2,2)"
                      />
                      <text x="26" y="19" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="600">
                        Pay
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="paylogo" role="img" aria-label="Google Pay">
                  <svg viewBox="0 0 64 26">
                    <g transform="translate(1,1)">
                      <path fill="#EA4335" d="M12 5.04c1.62 0 3.06.56 4.2 1.66l3.13-3.13C17.45 1.8 14.97.75 12 .75 7.31.75 3.26 3.44 1.28 7.35l3.66 2.84C5.87 7.31 8.69 5.04 12 5.04z" />
                      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.72 2.89c2.19-2.02 3.7-5 3.7-8.71z" />
                      <path fill="#FBBC05" d="M4.94 14.09c-.25-.72-.39-1.49-.39-2.29s.14-1.57.38-2.29L1.27 6.67C.46 8.28 0 10.09 0 12s.46 3.72 1.28 5.33l3.66-3.24z" />
                      <path fill="#34A853" d="M12 23.25c3.24 0 5.95-1.07 7.93-2.91l-3.72-2.89c-1.03.69-2.35 1.1-4.21 1.1-3.31 0-6.13-2.23-7.14-5.23l-3.66 2.84c1.97 3.91 6.02 7.09 10.8 7.09z" />
                    </g>
                    <text x="28" y="19" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="600" fill="var(--gpay-ink)">
                      Pay
                    </text>
                  </svg>
                </div>
              </div>
            </aside>
          </div>

          <div className="legal">
            <p>
              By placing an order, you agree to the Kira AI <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>. Your Kira AI Membership is included free for 12 months with every Kira AI Ring purchase and begins at ring activation. After the included year, your membership will automatically renew at the applicable standard rate until you cancel. You may cancel at any time; cancellation takes effect at the end of your current term. Please note that all purchases are non-refundable after 30 days.
            </p>
            <p>
              This site is protected by hCaptcha and its <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
            </p>
          </div>
        </div>
      </MembershipModal>
    </div>
  );
}
