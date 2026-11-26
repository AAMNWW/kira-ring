import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import "@/styles/compare.css";

const TITLE = "Kira AI Ring vs Aura Fitness Ring — Feature Comparison";
const DESCRIPTION =
  "Kira AI Ring vs Aura Fitness Ring, spec for spec: on-ring voice capture, live translation, Kira Brain memory, heart rate, SpO2, sleep, privacy, materials and battery.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/compare" },
  openGraph: { url: "/compare", title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

/* ── icons (identical paths to the original page) ── */
const I = {
  mic: (
    <>
      <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <path d="M12 19v3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  brain: (
    <>
      <path d="M11 3.4C9 2.6 7 3.6 6.5 5.4 4.6 5.6 3.2 7.2 3.2 9.1c0 1 .4 1.9 1.1 2.6-.7.7-1.1 1.6-1.1 2.6 0 1.9 1.4 3.5 3.3 3.7C7 19.8 9 20.8 11 20V3.4z" />
      <path d="M11 3.4c.9-.4 1.9-.4 2.8 0V20c-.9.4-1.9.4-2.8 0" />
      <circle cx="16.6" cy="4.2" r="1.5" />
      <path d="M13.8 6.6l1.6-1.3" />
      <circle cx="19.6" cy="9.2" r="1.5" />
      <path d="M13.8 9.2h4.3" />
      <circle cx="18.6" cy="14.6" r="1.5" />
      <path d="M13.8 12.6l1.6 1.3h1.7" />
      <circle cx="15.8" cy="19" r="1.5" />
      <path d="M13.8 16.4l1.6 1.3" />
    </>
  ),
  pulse: <path d="M3 12h4l2-6 4 12 2-6h6" />,
  drop: <path d="M12 3c3.5 4.5 6 7.6 6 11a6 6 0 0 1-12 0c0-3.4 2.5-6.5 6-11z" />,
  heart: <path d="M12 21s-7-4.6-9.3-9A5.4 5.4 0 0 1 12 6.4 5.4 5.4 0 0 1 21.3 12C19 16.4 12 21 12 21z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  bolt: <path d="M13 3l-8 11h6l-2 7 8-11h-6l2-7z" />,
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  cloud: <path d="M7 18a5 5 0 0 1 .8-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 19 18H7z" />,
  graph: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M12 7.2L5.8 16M12 7.2L18.2 16M7.2 18h9.6" />
    </>
  ),
  ring: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="8" width="15" height="8" rx="2" />
      <path d="M21 11v2M6.5 10.5v3" />
    </>
  ),
};

type Side = { icon?: ReactNode; v?: string; d: string; plain?: boolean; dash?: boolean };

function Cell({ icon, v, d, plain, dash }: Side) {
  if (dash)
    return (
      <div className="cell">
        <div className="dash" aria-label="Not available">
          —
        </div>
        <div className="d">{d}</div>
      </div>
    );
  return (
    <div className={`cell${plain ? " plain" : ""}`}>
      <div className="ic">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          {icon}
        </svg>
      </div>
      <div className="v">{v}</div>
      <div className="d">{d}</div>
    </div>
  );
}

const ROWS: { label: string; rows: [Side, Side][] }[] = [
  {
    label: "AI and voice",
    rows: [
      [{ icon: I.mic, v: "On‑ring voice capture", d: "Tap to record. Transcribed and filed automatically." }, { dash: true, d: "No microphone" }],
      [{ icon: I.globe, v: "Live translation", d: "40+ languages, in real time." }, { dash: true, d: "Not available" }],
      [{ icon: I.brain, v: "Kira Brain memory", d: "A private, encrypted graph of your life that Kira acts on." }, { dash: true, d: "No assistant or memory" }],
    ],
  },
  {
    label: "Health and fitness",
    rows: [
      [{ icon: I.pulse, v: "Heart rate + HRV", d: "24/7 continuous." }, { icon: I.pulse, v: "Heart rate + HRV", d: "24/7 continuous.", plain: true }],
      [{ icon: I.drop, v: "SpO2 + temperature", d: "Continuous monitoring." }, { icon: I.drop, v: "SpO2 + temperature", d: "Continuous monitoring.", plain: true }],
      [{ icon: I.heart, v: "Sleep + recovery", d: "Full staging, with AI coaching that reshapes your day." }, { icon: I.heart, v: "Sleep + recovery", d: "Tracking with in‑app insights.", plain: true }],
      [{ icon: I.clock, v: "Stress, in context", d: "Correlated with your calendar and conversations." }, { icon: I.clock, v: "Daily stress score", d: "General insights in‑app.", plain: true }],
      [{ icon: I.bolt, v: "Auto activity detection", d: "With calorie tracking." }, { icon: I.bolt, v: "Auto activity detection", d: "With calorie tracking.", plain: true }],
    ],
  },
  {
    label: "Privacy and ecosystem",
    rows: [
      [{ icon: I.lock, v: "Local‑first, encrypted", d: "Sync is a pipe, not a warehouse." }, { icon: I.cloud, v: "Cloud companion app", d: "Free, no subscription.", plain: true }],
      [{ icon: I.graph, v: "Full Kira ecosystem", d: "Mail, Voice, unified inbox, agents, and more." }, { dash: true, d: "Standalone app only" }],
    ],
  },
  {
    label: "Hardware",
    rows: [
      [{ icon: I.ring, v: "Titanium", d: "Aerospace‑grade, hypoallergenic. Swim‑and‑shower ready." }, { icon: I.ring, v: "Stainless steel", d: "PVD coating. Everyday wear rated.", plain: true }],
      [{ icon: I.battery, v: "10‑day battery standby", d: "Fast wireless charging." }, { icon: I.battery, v: "Up to 7 days", d: "Included charger.", plain: true }],
    ],
  },
];

const pageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}/compare`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE_URL}/compare` },
    ],
  },
};

export default function ComparePage() {
  return (
    <div className="pg-compare">
      <JsonLd data={pageLd} />
      <Reveal selector=".pg-compare .rv" threshold={0.12} />

      <div className="pnav">
        <div className="pnav-in">
          <span className="pname">Compare</span>
          <div className="pright">
            <a href="#compare">Specs</a>
            <a className="hide-xs" href="#difference">
              The difference
            </a>
            <a className="btn" href="#buy">
              Buy
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <header className="hero" style={{ background: "var(--bg)" }}>
        <div className="narrow">
          <span className="eyebrow rv">Kira AI Ring vs Aura Fitness Ring</span>
          <h1 className="hero-h rv">
            Which ring
            <br />
            will you choose?
          </h1>
          <p className="sub rv">One tracks your body. The other understands your life. See how they compare, feature for feature.</p>
          <div className="links-row rv">
            <a className="arrow" href="#compare">
              Compare specs
            </a>
            <a className="arrow" href="#buy">
              Buy Kira Ring
            </a>
          </div>
        </div>
        <div className="hero-rings rv">
          <div className="hr-item">
            <Image className="ring-img" src="/images/compare-kira.webp" alt="Kira AI Ring in polished silver with voice display" width={431} height={530} sizes="(max-width: 600px) 40vw, 230px" preload />
            <div className="cap">
              Kira AI Ring<small>The AI ring</small>
            </div>
          </div>
          <div className="hero-vs">vs</div>
          <div className="hr-item">
            <Image className="ring-img" src="/images/compare-aura.webp" alt="Aura Fitness Ring in gold" width={530} height={600} sizes="(max-width: 600px) 40vw, 230px" preload />
            <div className="cap">
              Aura Fitness Ring<small>The fitness tracker</small>
            </div>
          </div>
        </div>
      </header>

      {/* BENTO VERDICT */}
      <section className="alt" id="difference">
        <div className="inner">
          <h2 className="sec-h rv">Get the big picture.</h2>
          <p className="sub rv">Sensors are just the start. What happens after the measurement is everything.</p>
          <div className="bento">
            <div className="tile big rv">
              <span className="kicker">Intelligence</span>
              <h3>An AI that remembers, so you don&apos;t have to.</h3>
              <p>Every heartbeat, voice note, and moment flows into your private Kira Brain — a neural graph that connects your health, people, and plans, then acts on them. Aura shows you charts. Kira shows up for you.</p>
            </div>
            <div className="tile big rv">
              <span className="kicker">Voice</span>
              <h3>A microphone on your finger.</h3>
              <p>Tap to capture meetings, lectures, and ideas. Kira transcribes, summarizes, and translates live across 40+ languages. The Aura ring has no microphone at all.</p>
            </div>
            <div className="tile wide rv" style={{ textAlign: "center" }}>
              <span className="kicker">Privacy</span>
              <h3>Local‑first. Encrypted. Yours.</h3>
              <p style={{ maxWidth: 560, margin: "0 auto" }}>Kira keeps your data encrypted on your device — sync is a pipe, not a warehouse. Aura follows the standard cloud model.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section id="compare">
        <div className="inner">
          <h2 className="sec-h rv">Compare, spec for spec.</h2>
          <p className="sub rv">Aura details come from the manufacturer&apos;s published specifications.</p>

          <div className="compare rv">
            <div className="col">
              <div className="col-head">
                <div className="nm">Kira AI Ring</div>
                <div className="pr">Titanium · Multiple finishes</div>
                <a className="btn" href="#buy">
                  Buy
                </a>
              </div>
            </div>
            <div className="col">
              <div className="col-head">
                <div className="nm">Aura Fitness Ring</div>
                <div className="pr">Stainless steel · PVD coating</div>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            {ROWS.map((group) => (
              <div key={group.label}>
                <h3 className="row-label rv">{group.label}</h3>
                <div className="cgrid rv">
                  {group.rows.map(([k, a], i) => (
                    <Fragment key={i}>
                      <Cell {...k} />
                      <Cell {...a} />
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE DIVE */}
      <section className="alt">
        <div className="inner">
          <h2 className="sec-h rv">
            Where the gap
            <br />
            really opens up.
          </h2>
          <p className="sub rv">Three moments in a normal day, on each ring.</p>

          <div className="feature-split">
            <div className="fcard k rv">
              <div className="who">Kira AI Ring</div>
              <h3 className="h4">Your data gets a destination.</h3>
              <p>The heart‑rate spike in a tense call, the idea you voiced on a walk, the short sleep before a big pitch — Kira connects them, then acts: rescheduling around low‑recovery days, resurfacing the note when the topic returns, nudging you before stress compounds.</p>
            </div>
            <div className="fcard a rv">
              <div className="who">Aura Fitness Ring</div>
              <h3 className="h4">Your data gets a dashboard.</h3>
              <p>Heart rate, HRV, SpO2, temperature, and stress presented clearly in a free app. What you do with the numbers is up to you — there&apos;s no assistant, no memory, and no connection to the rest of your life.</p>
            </div>
            <div className="fcard k rv">
              <div className="who">Kira AI Ring</div>
              <h3 className="h4">Every conversation, kept.</h3>
              <p>Tap the ring in a meeting or abroad. Kira transcribes, summarizes, translates live in 40+ languages, and files it all into your Brain — searchable forever, linked to the people it belongs to.</p>
            </div>
            <div className="fcard a rv">
              <div className="who">Aura Fitness Ring</div>
              <h3 className="h4">Silence, by design.</h3>
              <p>No microphone, no transcription, no translation. If your day includes words worth keeping, you&apos;ll need a second device and a third app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="narrow">
          <h2 className="rv">
            Don&apos;t just track your life.
            <br />
            Give it a memory.
          </h2>
        </div>
      </section>

      {/* BUY */}
      <section className="alt" id="buy">
        <div className="narrow">
          <h2 className="sec-h rv">Kira AI Ring</h2>
          <p className="sub rv">The first ring that listens, remembers, translates, and acts — with your data staying yours.</p>
          <div className="links-row rv" style={{ gap: 18 }}>
            <Link className="btn lg" href="/#buy">
              Shop now
            </Link>
            <Link className="btn lg outline" href="/">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="inner">
          <p>© 2026 Kira ASI Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
