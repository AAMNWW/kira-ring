import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Reveal from "@/components/Reveal";
import HeroRings from "@/components/home/HeroRings";
import BuySection from "@/components/home/BuySection";
import JsonLd from "@/components/JsonLd";
import { KIRA_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "@/styles/home.css";

export const metadata: Metadata = {
  title: { absolute: "Kira AI Ring — Talk to your brain. In any language." },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Kira AI Ring — Talk to your brain. In any language.",
    description: SITE_DESCRIPTION,
  },
};

const LANGS = ["한국어", "Português", "Italiano", "हिन्दी", "Русский", "Türkçe", "العربية", "中文", "日本語", "Español", "Deutsch", "Français", "English", "Kiswahili", "ไทย", "Tiếng Việt"];

function Chip({ src, w, h }: { src: string; w: number; h: number }) {
  return (
    <span className="ico-chip">
      <Image src={src} alt="" width={w} height={h} sizes="30px" />
    </span>
  );
}

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  brand: { "@type": "Brand", name: "Kira AI" },
  image: ["ring-black", "ring-silver", "ring-gold", "ring-white"].map((n) => `${SITE_URL}/images/${n}.webp`),
  color: "Midnight Black, Lunar Silver, Champagne Gold, Pearl White",
  material: "Titanium",
  weight: { "@type": "QuantitativeValue", value: 4, unitCode: "GRM" },
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/#buy`,
    priceCurrency: "USD",
    price: "288",
    availability: "https://schema.org/PreOrder",
    itemCondition: "https://schema.org/NewCondition",
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Languages", value: "146 online · 13 offline" },
    { "@type": "PropertyValue", name: "Bluetooth", value: "v5.4" },
    { "@type": "PropertyValue", name: "Standby", value: "7–10 days" },
    { "@type": "PropertyValue", name: "Voice recording", value: "30 min offline" },
    { "@type": "PropertyValue", name: "Sensors", value: "HR · SpO₂ · Motion" },
  ],
};

export default function Home() {
  return (
    <div className="pg-home">
      <JsonLd data={productLd} />
      <Reveal selector=".pg-home .reveal" />

      {/* HERO */}
      <header className="hero">
        <div className="hero-glow" />
        <p className="eyebrow reveal">Introducing Kira AI Ring · Intelligence Redefined</p>
        <h1 className="reveal">
          Talk to your brain.
          <br />
          In any language.
        </h1>
        <p className="hero-sub reveal">
          Kira <b>AI-powered</b> transcriber, voice recorder, translator, and health lab — engineered into <b>4 grams of titanium</b> on your finger. All connected to your <b>second brain</b>.
        </p>
        <div className="hero-actions reveal">
          <a className="btn btn-primary" href={KIRA_URL}>
            Pre-order now
          </a>
          <a className="btn btn-ghost" href={KIRA_URL}>
            Watch the film
          </a>
        </div>
        <HeroRings />
      </header>

      {/* STATS */}
      <div className="stats">
        <div className="stats-inner">
          <div className="stat reveal">
            <b>146</b>
            <span>languages translated</span>
          </div>
          <div className="stat reveal">
            <b>13</b>
            <span>languages fully offline</span>
          </div>
          <div className="stat reveal">
            <b>24/7</b>
            <span>health monitoring</span>
          </div>
          <div className="stat reveal">
            <b>
              10<span style={{ fontSize: ".5em" }}>-day</span>
            </b>
            <span>battery on standby</span>
          </div>
        </div>
      </div>

      {/* INTELLIGENCE */}
      <section id="intelligence" className="ai">
        <div className="wrap">
          <div className="ai-hero">
            <div>
              <p className="kicker green reveal">Kira Intelligence</p>
              <h2 className="reveal">
                AI at the core.
                <br />
                <span className="dim">Syncing continuously.</span>
              </h2>
              <p className="lede reveal">
                Every feature on this ring runs through Kira&apos;s neural engine — translation, transcription, health insights. Not a feature bolted onto a wearable. Intelligence built into the band, connected to your second mind.
              </p>
            </div>
            <div className="core-stage reveal" aria-hidden="true">
              <div className="core">
                <div className="brain-wrap">
                  <span className="orbit-ring" />
                  <Image className="core-brain" src="/images/brain.webp" alt="" width={460} height={460} sizes="235px" />
                </div>
                <b className="core-label">Your Second Brain</b>
              </div>
              <span className="orbit-tag ot1">
                <i>●</i>Speaker &amp; language recognition
              </span>
              <span className="orbit-tag ot2">
                <i>●</i>146-language translation
              </span>
              <span className="orbit-tag ot3">
                <i>●</i>Voice → structured notes
              </span>
              <span className="orbit-tag ot4">
                <i>●</i>Health pattern analysis
              </span>
            </div>
          </div>
          <div className="grid" style={{ marginTop: 0 }}>
            <div className="card reveal">
              <Chip src="/images/icon-on-device.webp" w={115} h={120} />
              <h3 className="h4">On-device AI</h3>
              <p>13 languages translate with no connection at all — the models live on the ring, so it works on a plane and your words never have to leave your hand.</p>
            </div>
            <div className="card reveal">
              <Chip src="/images/icon-speaker.webp" w={120} h={100} />
              <h3 className="h4">It knows who&apos;s talking</h3>
              <p>AI speaker recognition separates voices in a live room and translates each side — the difference between a dictionary and an interpreter.</p>
            </div>
            <div className="card reveal">
              <Chip src="/images/icon-insights.webp" w={110} h={120} />
              <h3 className="h4">Insights, not just data</h3>
              <p>The AI studies your sleep, heart rate, and movement patterns over time and tells you what changed — and what to do about it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSLATION */}
      <section id="translate">
        <div className="wrap">
          <p className="kicker gold reveal">Simultaneous interpretation</p>
          <h2 className="reveal">
            Two languages.
            <br />
            <span className="dim">One conversation.</span>
          </h2>
          <p className="lede reveal">AI listens, recognizes who&apos;s speaking, and translates both sides in real time. Face-to-face deals, foreign classrooms, family dinners — everyone just talks.</p>

          <div className="translate-demo reveal">
            <div className="translate-copy">
              <h3>It hears the room, not just you.</h3>
              <p>Automatic speaker recognition separates voices in a live conversation and translates each one — no passing a phone back and forth, no awkward pauses.</p>
              <div className="chat" aria-label="Live translation example">
                <div className="bubble">
                  <span className="mic">●</span>
                  <span className="wave">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <div>
                    <p>Option one is feasible.</p>
                    <small>English → 中文</small>
                  </div>
                </div>
                <div className="bubble right">
                  <span className="mic">●</span>
                  <span className="wave">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <div>
                    <p lang="zh">是的，我也觉得</p>
                    <small>中文 → English · “Yes, I think so too”</small>
                  </div>
                </div>
                <div className="bubble">
                  <span className="mic">●</span>
                  <span className="wave">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <div>
                    <p>Then let&apos;s implement option one.</p>
                    <small>English → 中文</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="photo translate-photo">
              <Image src="/images/desert.jpg" alt="Kira AI Ring in Midnight Black standing in desert dunes at sunset" width={1100} height={992} sizes="(max-width: 900px) 92vw, 520px" />
            </div>
          </div>

          <div className="grid">
            <div className="card reveal">
              <Chip src="/images/icon-offline.webp" w={140} h={70} />
              <h3 className="h4">Offline mode</h3>
              <p>13 languages translate entirely on-device. Mountain villages, airplanes, dead zones — the ring doesn&apos;t care.</p>
            </div>
            <div className="card reveal">
              <Chip src="/images/icon-call.webp" w={140} h={131} />
              <h3 className="h4">Call translation</h3>
              <p>Voice and video calls converted live in both directions. International calls feel like local ones.</p>
            </div>
            <div className="card reveal">
              <Chip src="/images/icon-photo.webp" w={140} h={140} />
              <h3 className="h4">Photo translation</h3>
              <p>Point your camera at a menu, sign, or contract. The companion app reads and translates it instantly.</p>
            </div>
          </div>

          <div className="babel reveal" aria-label="The same question shown in English, Japanese, and Arabic around the ring">
            <div className="bub bub-1">
              <span className="lang">EN</span>
              <p>“Where&apos;s the nearest coffee?”</p>
            </div>
            <div className="bub bub-2">
              <span className="lang">JA</span>
              <p lang="ja">「一番近いカフェはどこですか?」</p>
            </div>
            <div className="bub bub-3">
              <span className="lang">AR</span>
              <p lang="ar" dir="rtl">
                «أين أقرب مقهى؟»
              </p>
            </div>
            <Image className="babel-ring" src="/images/ring-black.webp" alt="Kira AI Ring in Midnight Black floating between the translated phrases" width={544} height={680} sizes="(max-width: 600px) 68vw, 400px" />
          </div>

          <div className="section-cta reveal">
            <a className="btn btn-primary" href={KIRA_URL}>
              Shop now
            </a>
          </div>
        </div>
      </section>

      {/* VOICE */}
      <section id="voice" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="voice-head">
            <div>
              <p className="kicker blue reveal">Voice memory</p>
              <h2 className="reveal">
                Ideas strike anywhere.
                <br />
                <span className="dim">Now they&apos;re kept.</span>
              </h2>
              <p className="lede reveal">Tap the ring and speak. Thirty minutes of offline recording — Kira Intelligence transcribes and summarizes it into clean, searchable notes, linking everything back to your brain.</p>
            </div>
            <div className="brain-float reveal" aria-hidden="true">
              <Image src="/images/brain.webp" alt="" width={460} height={460} sizes="300px" />
            </div>
          </div>

          <div className="grid">
            <div className="card wide reveal">
              <div>
                <h3 className="h4" style={{ fontSize: 24, marginBottom: 14 }}>
                  Idea shorthand
                </h3>
                <p style={{ fontSize: 16, color: "var(--grey-2)", marginBottom: 26 }}>
                  Rambling thoughts in, structured notes out. Transcription runs through AI summarization so a two-minute voice memo becomes three bullet points — titled, timestamped, and synced to your brain.
                </p>
                <div className="chat">
                  <div className="bubble" style={{ opacity: 1, transform: "none", animation: "none" }}>
                    <span className="mic">✦</span>
                    <div>
                      <p>&quot;…remind the team the launch shifts to Thursday…&quot;</p>
                      <small>Recorded 00:42 · offline</small>
                    </div>
                  </div>
                  <div className="bubble right" style={{ opacity: 1, transform: "none", animation: "none", borderColor: "rgba(41,151,255,.4)" }}>
                    <div>
                      <p>
                        <b style={{ color: "var(--blue)" }}>Note:</b> Launch moved to Thursday — notify team.
                      </p>
                      <small>Auto-transcribed &amp; summarized</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="photo voice-photo">
                <Image
                  src="/images/voice-cards.jpg"
                  alt="Kira AI Ring in Midnight Black standing upright among glass feature cards listing voice recording, AI transcription, and waterproof specs"
                  width={1200}
                  height={909}
                  sizes="(max-width: 900px) 92vw, 500px"
                />
              </div>
            </div>
            <div className="card reveal">
              <Chip src="/images/icon-speech.webp" w={103} h={120} />
              <h3 className="h4">Speech practice</h3>
              <p>Rehearse a talk into your ring and review the transcript for filler words and pacing.</p>
            </div>
            <div className="card reveal">
              <Chip src="/images/icon-private.webp" w={106} h={120} />
              <h3 className="h4">Yours alone</h3>
              <p>Built for personal self-recording. Recordings stay on your devices — always follow local recording laws.</p>
            </div>
            <div className="card reveal">
              <span className="ico">🔄</span>
              <h3 className="h4">Cross-platform</h3>
              <p>One tap syncs everything to the companion app on iPhone or Android.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE BAND */}
      <div className="band-section">
        <div className="band-inner reveal">
          <Image src="/images/lifestyle-hand.jpg" alt="A hand wearing the Kira AI Ring in Midnight Black, resting naturally on a wooden ledge in sunlight" width={1100} height={1119} sizes="(max-width: 1148px) 96vw, 1100px" />
          <div className="band-overlay">
            <h3>Forget you&apos;re wearing it.</h3>
            <p>Aerospace-grade shell, 4-gram weight, all-week battery. It disappears on your hand — until you need it.</p>
          </div>
        </div>
      </div>

      {/* DAILY TRACKING */}
      <section id="tracking" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="kicker blue reveal">Daily tracking</p>
          <h2 className="reveal">
            Track your body
            <br />
            <span className="dim">and activity, daily.</span>
          </h2>

          <div className="holo reveal">
            <div className="holo-chips">
              <div className="hchip">
                <svg viewBox="0 0 24 24">
                  <path d="M12 20s-7-4.6-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.4-9 9-9 9z" />
                </svg>
                <span>Heart rate</span>
              </div>
              <div className="hchip">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
                </svg>
                <span>Blood oxygen</span>
              </div>
              <div className="hchip">
                <svg viewBox="0 0 24 24">
                  <path d="M20 13.5A8 8 0 0 1 10.5 4 8 8 0 1 0 20 13.5z" />
                </svg>
                <span>Sleep tracking</span>
              </div>
              <div className="hchip">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-6-5.4-6-10a6 6 0 1 1 12 0c0 4.6-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2.2" />
                </svg>
                <span>Distance &amp; duration</span>
              </div>
              <div className="hchip">
                <svg viewBox="0 0 24 24">
                  <path d="M3 12h4l2.5-6 4 12L16 12h5" />
                </svg>
                <span>Activity record</span>
              </div>
            </div>

            <div className="holo-body">
              <Image className="holo-ring" src="/images/ring-black.webp" alt="Kira AI Ring in Midnight Black projecting its health dashboard" width={544} height={680} sizes="(max-width: 860px) 70vw, 340px" />
              <div className="holo-cards">
                <div className="hcardx">
                  <h4 className="h5">Heart rate</h4>
                  <div className="val">
                    <span className="count" data-to="72">
                      0
                    </span>
                    <i>bpm resting</i>
                  </div>
                  <svg className="holo-ekg" viewBox="0 0 300 44" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 26 h40 l8-8 8 8 h20 l6-20 8 34 8-22 4 8 h50 l8-8 8 8 h20 l6-20 8 34 8-22 4 8 h80" />
                  </svg>
                </div>
                <div className="hcardx">
                  <h4 className="h5">Activity</h4>
                  <div className="donut-wrap">
                    <svg className="donut" viewBox="0 0 72 72" aria-hidden="true">
                      <circle className="tr" cx="36" cy="36" r="30" fill="none" strokeWidth="7" />
                      <circle className="fg" cx="36" cy="36" r="30" fill="none" strokeWidth="7" strokeLinecap="round" />
                    </svg>
                    <div className="val">
                      <span className="count" data-to="9847">
                        0
                      </span>
                      <i>steps</i>
                    </div>
                  </div>
                </div>
                <div className="hcardx">
                  <h4 className="h5">Calories</h4>
                  <div className="val">
                    <span className="count" data-to="612">
                      0
                    </span>
                    <i>kcal active</i>
                  </div>
                  <div className="hbars" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="hcardx">
                  <h4 className="h5">Sleep</h4>
                  <div className="val">
                    7<i>h</i> 42<i>m</i>
                  </div>
                  <svg className="sleepline" viewBox="0 0 300 44" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 12 C40 12 40 32 80 32 S130 8 160 14 210 36 240 30 280 10 300 14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH */}
      <section id="health" className="health" style={{ marginTop: 120 }}>
        <div className="wrap">
          <p className="kicker green reveal">Health, all day</p>
          <h2 className="reveal">
            An AI lab
            <br />
            <span className="dim">on your finger.</span>
          </h2>
          <p className="lede reveal">Finger arteries give cleaner signals than the wrist. The ring reads heart rate, blood oxygen, sleep, and movement around the clock — and its AI turns raw numbers into advice you can act on.</p>

          <div className="hcards">
            <article className="hcard reveal">
              <div className="hgrid">
                <div className="hinfo">
                  <h3>24-hour heart rate.</h3>
                  <p className="sub">Around-the-clock tracking flags rhythms that run irregular, too fast, or too slow — so you can check in with your body before it has to shout.</p>
                  <div className="metric-row">
                    <div className="metric-label">Average today</div>
                    <div className="big-metric">
                      <span className="count" data-to="123">
                        0
                      </span>
                      <span className="unit">BPM</span>
                    </div>
                    <svg className="ekg" viewBox="0 0 300 44" preserveAspectRatio="none" aria-hidden="true" style={{ width: "min(320px,100%)", height: 52, marginTop: 16 }}>
                      <path d="M0 26 h40 l8-8 8 8 h20 l6-20 8 34 8-22 4 8 h50 l8-8 8 8 h20 l6-20 8 34 8-22 4 8 h80" />
                    </svg>
                  </div>
                </div>
                <div className="hr-widget" role="img" aria-label="Heart rate card: average 123 BPM, range 78 to 156 BPM, hourly bar chart with a 124 BPM average line">
                  <div className="hrw">
                    <div className="hrw-head">
                      <span className="hrw-ico">♥</span>
                      <span>
                        <b>Heart rate</b>
                        <small>Wed, 16 Mar 2025</small>
                      </span>
                    </div>
                    <div className="hrw-stats">
                      <span>
                        <small>AVG</small>
                        <b>
                          <span className="count" data-to="123">
                            0
                          </span>
                          <i>BPM</i>
                        </b>
                      </span>
                      <span>
                        <small>RANGE</small>
                        <b>
                          78–156<i>BPM</i>
                        </b>
                      </span>
                    </div>
                    <div className="hrw-chart">
                      <div className="hrw-plot">
                        <span className="hrw-grid" style={{ top: "12%" }} />
                        <span className="hrw-grid" style={{ top: "41%" }} />
                        <span className="hrw-grid" style={{ top: "70%" }} />
                        <span className="hrw-grid" style={{ top: "99%" }} />
                        <div className="hrw-bars" aria-hidden="true">
                          {[58, 72, 100, 45, 66, 57].map((h, i) => (
                            <i key={i} style={{ height: `${h}%` }} />
                          ))}
                        </div>
                        <span className="hrw-avg" />
                      </div>
                      <div className="hrw-y">
                        <span>150 BPM</span>
                        <span className="g">124 BPM</span>
                        <span>100 BPM</span>
                        <span>50 BPM</span>
                        <span>0 BPM</span>
                      </div>
                    </div>
                    <div className="hrw-x">
                      <span>12 AM</span>
                      <span>4 AM</span>
                      <span>8 AM</span>
                      <span>12 PM</span>
                      <span>4 PM</span>
                      <span>8 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="hcard reveal flip">
              <div className="hgrid">
                <div className="hinfo">
                  <h3>Sleep, staged.</h3>
                  <p className="sub">Full-night monitoring from the moment you drift off to the moment you wake — every stage recorded, scored, and explained.</p>
                  <div className="stages">
                    <div className="stage">
                      <b>
                        Deep sleep <span>3 h 10 m</span>
                      </b>
                      <span className="track">
                        <span className="fill f-deep" />
                      </span>
                    </div>
                    <div className="stage">
                      <b>
                        Light sleep <span>4 h 05 m</span>
                      </b>
                      <span className="track">
                        <span className="fill f-light" />
                      </span>
                    </div>
                    <div className="stage">
                      <b>
                        Awake <span>1 h 15 m</span>
                      </b>
                      <span className="track">
                        <span className="fill f-awake" />
                      </span>
                    </div>
                  </div>
                  <div className="metric-row" style={{ display: "flex", alignItems: "center", gap: 22 }}>
                    <div className="gauge" style={{ margin: 0 }}>
                      <svg viewBox="0 0 200 92">
                        <defs>
                          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0" stopColor="#2997ff" />
                            <stop offset="1" stopColor="#30d158" />
                          </linearGradient>
                        </defs>
                        <path className="arc-bg" d="M12 84 A88 64 0 0 1 188 84" fill="none" strokeWidth="11" strokeLinecap="round" />
                        <path className="arc-fg" d="M12 84 A88 64 0 0 1 188 84" fill="none" strokeWidth="11" strokeLinecap="round" />
                      </svg>
                      <div className="gauge-num">
                        <b className="count" data-to="90">
                          0
                        </b>
                        <span>Excellent</span>
                      </div>
                    </div>
                    <div className="gauge-times" style={{ flexDirection: "column", gap: 4, marginTop: 0 }}>
                      <span>23:30</span>
                      <span style={{ color: "var(--grey)" }}>→</span>
                      <span>8:30</span>
                    </div>
                  </div>
                </div>
                <Image className="hside" src="/images/sleep.jpg" alt="A woman sleeping deeply in cool blue night light, an alarm clock in the foreground" width={1400} height={954} sizes="(max-width: 820px) 92vw, 480px" />
              </div>
              <div className="hypno-wrap" style={{ paddingTop: 26, borderTop: "1px solid var(--line)" }}>
                <div className="hypno" role="img" aria-label="Hypnogram showing the night's movement between awake, light, and deep sleep">
                  <div className="hyp-labels">
                    <span>Awake</span>
                    <span>Light</span>
                    <span>Deep</span>
                  </div>
                  <div>
                    <svg className="hyp-svg" viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id="hypGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0" stopColor="#4da3ff" />
                          <stop offset=".55" stopColor="#9a7bff" />
                          <stop offset="1" stopColor="#ff9f5e" />
                        </linearGradient>
                      </defs>
                      <line className="hyp-grid" x1="0" y1="14" x2="600" y2="14" />
                      <line className="hyp-grid" x1="0" y1="60" x2="600" y2="60" />
                      <line className="hyp-grid" x1="0" y1="106" x2="600" y2="106" />
                      <path className="hyp-line" d="M0 14 H18 V60 H64 V106 H148 V60 H198 V106 H262 V60 H328 V14 H348 V60 H428 V106 H468 V60 H556 V14 H600" />
                    </svg>
                    <div className="hyp-times">
                      <span>23:30</span>
                      <span>1:45</span>
                      <span>4:00</span>
                      <span>6:15</span>
                      <span>8:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="hcard reveal">
              <div className="hgrid">
                <div className="hinfo">
                  <h3>Every move counts, and we count them all.</h3>
                  <p className="sub">Steps. Runs. Rides. Hikes. Automatically logged, beautifully surfaced — your daily life, finally legible.</p>
                  <div className="rstats metric-row">
                    <div className="rstat">
                      <span className="ico">📍</span>
                      <small>Mileage</small>
                      <b>
                        <span className="count" data-to="10.5" data-dec="1">
                          0
                        </span>
                        <i>km</i>
                      </b>
                    </div>
                    <div className="rstat">
                      <span className="ico">🔥</span>
                      <small>Calories</small>
                      <b>
                        <span className="count" data-to="3562">
                          0
                        </span>
                        <i>kcal</i>
                      </b>
                    </div>
                    <div className="rstat">
                      <span className="ico">❤️</span>
                      <small>Heart rate</small>
                      <b>
                        <span className="count" data-to="138">
                          0
                        </span>
                        <i>bpm</i>
                      </b>
                    </div>
                  </div>
                </div>
                <Image className="hside" src="/images/jogging.jpg" alt="A smiling couple jogging together through a sunlit park, both wearing fitness trackers" width={871} height={641} sizes="(max-width: 820px) 92vw, 480px" />
              </div>
            </article>

            <article className="hcard reveal flip">
              <div className="hgrid">
                <div className="hinfo">
                  <h3>Blood oxygen. Any environment.</h3>
                  <p className="sub">The ring&apos;s finger-fit sensor enables all-day SpO₂ monitoring with accuracy the wrist can&apos;t match — understand your body and adjust in time.</p>
                  <div className="metric-row">
                    <div className="metric-label">Blood oxygen</div>
                    <div className="big-metric">
                      <span className="count" data-to="98">
                        0
                      </span>
                      <span className="unit">%</span>
                    </div>
                  </div>
                </div>
                <div className="hside hside-fit oxwrap" role="img" aria-label="Pulse oximeter display showing SpO2 at 98 percent and pulse rate 60 bpm">
                  <Image src="/images/oximeter.jpg" alt="" width={877} height={448} sizes="(max-width: 820px) 92vw, 480px" />
                  <span className="ox-sweep" aria-hidden="true" />
                </div>
              </div>
            </article>
          </div>

          <div className="section-cta reveal">
            <a className="btn btn-primary" href={KIRA_URL}>
              Shop now
            </a>
          </div>
        </div>
      </section>

      {/* BUY */}
      <section id="buy">
        <div className="wrap">
          <p className="kicker gold reveal">Order</p>
          <h2 className="reveal">
            Kira AI Ring.
            <br />
            <span className="dim">Yours in four finishes.</span>
          </h2>
          <BuySection />
        </div>
      </section>

      {/* ALL-IN-ONE */}
      <section className="allinone">
        <div className="wrap">
          <p className="kicker gold reveal">All-in-one</p>
          <h2 className="reveal" style={{ margin: "0 auto" }}>
            Kira AI wearable
            <br />
            <span className="dim">smart intelligent ring.</span>
          </h2>
          <div className="aio-grid reveal">
            <div className="aio-col left">
              <div className="pillcap">
                <b>30 min offline voice record</b>
                <span>Capture ideas with no phone nearby</span>
              </div>
              <div className="pillcap">
                <b>AI voice transcription</b>
                <span>Speech to structured notes &amp; idea shorthand</span>
              </div>
              <div className="pillcap">
                <b>Smart recording ring</b>
                <span>One tap on the band starts a session</span>
              </div>
              <div className="pillcap">
                <b>IP68 waterproof &amp; dustproof</b>
                <span>Rated for showers, rain, and desert dust</span>
              </div>
            </div>
            <Image className="aio-ring" src="/images/ring-silver.webp" alt="Kira AI Ring in Lunar Silver with its microphone display active" width={542} height={680} sizes="(max-width: 860px) 58vw, 340px" />
            <div className="aio-col right">
              <div className="pillcap">
                <b>Wearable fitness tracker</b>
                <span>Heart rate, SpO₂, sleep &amp; movement</span>
              </div>
              <div className="pillcap">
                <b>146-language translation</b>
                <span>Live interpretation, 13 languages offline</span>
              </div>
              <div className="pillcap">
                <b>Solid stainless steel</b>
                <span>Aerospace-grade shell at 4 grams</span>
              </div>
              <div className="pillcap">
                <b>iOS &amp; Android app control</b>
                <span>Full companion app on both platforms — Kira AI syncs audio and notes effortlessly to your second brain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker gold reveal">Product parameters</p>
          <h2 className="reveal">
            The fine print,
            <br />
            <span className="dim">in large type.</span>
          </h2>
          <dl className="specs-grid reveal">
            {[
              ["Languages", "146 online · 13 offline"],
              ["Bluetooth", "v5.4"],
              ["Standby", "7–10 days"],
              ["Ring charge time", "≈ 1 hour"],
              ["Case charge time", "≤ 1.5 hours"],
              ["Case battery", "300 mAh Li-polymer"],
              ["Voice recording", "30 min offline"],
              ["Sensors", "HR · SpO₂ · Motion"],
              ["Intelligence", "On-ring neural engine"],
              ["Compatibility", "iOS & Android"],
            ].map(([dt, dd]) => (
              <div className="spec" key={dt}>
                <dt>{dt}</dt>
                <dd>{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <p className="kicker blue reveal">Translate</p>
        <h2 className="cta-blue reveal">
          The world speaks
          <br />
          7,000 languages.
          <br />
          <span className="cta-dark">Kira AI speaks 146 of them.</span>
        </h2>
        <p className="lede reveal">On-device AI translates 146 languages in real time. Whisper it, hear it back.</p>
        <div className="marquee reveal" aria-hidden="true">
          <div className="marquee-track">
            {[...LANGS, ...LANGS].map((l, i) => (
              <Fragment key={i}>
                <span>{l}</span>
                <i />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="hero-actions reveal">
          <a className="btn btn-primary" href={KIRA_URL}>
            Pre-order now
          </a>
          <a className="btn btn-ghost" href={KIRA_URL}>
            Compare models
          </a>
        </div>
      </section>

      <footer>
        <div className="foot-inner">
          <span>© 2026 Kira AI Ltd. All rights reserved.</span>
          <nav className="foot-links" aria-label="Footer">
            <Link href="/compare">Compare</Link>
            <Link href="/checkout">Checkout</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
        <p className="foot-note">Recording features are for personal use — comply with local audio-recording laws and obtain consent from participants.</p>
      </footer>
    </div>
  );
}
