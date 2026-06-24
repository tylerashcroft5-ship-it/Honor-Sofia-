import Link from "next/link";
import { Reveal, BookButton, Emblem } from "@/components/Motion";
import { site } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "About Honor Sofia — a luxury aesthetics, skin and IV therapy clinic offering natural-looking enhancements, glowing skin and feel-good wellness.",
};

const PROMISES = [
  {
    title: "Safety &amp; suitability first",
    body: "Every aesthetic and prescription treatment begins with a thorough consultation, so your care is safe and right for you.",
  },
  {
    title: "Tailored to you",
    body: "No two faces are the same. Your treatment plan is designed around your features, your goals and your comfort.",
  },
  {
    title: "Subtle, natural results",
    body: "Refined techniques for enhancements that look like you — refreshed, confident and never overdone.",
  },
  {
    title: "Beauty &amp; wellness together",
    body: "From injectables and skin rejuvenation to IV drips and vitamin boosts, we care for how you look and how you feel.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow eyebrow--center">About the clinic</span></Reveal>
          <Reveal delay={0.06}>
            <h1>Beauty, energy <span className="accent-i">&amp; confidence</span></h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede">
              Honor Sofia is a luxury aesthetics &amp; IV therapy clinic — where advanced
              treatments meet a warm, personal touch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Reveal className="portrait">
            <div className="portrait__frame portrait__frame--photo">
              <video
                className="portrait__img"
                poster="/media/clip-4.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              >
                <source src="/media/clip-4.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
          <div>
            <Reveal><span className="eyebrow">Our story</span></Reveal>
            <Reveal delay={0.06}>
              <h2>A bespoke approach to <span className="gold">looking &amp; feeling well</span></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p style={{ marginTop: "1.3rem", color: "var(--ink-soft)" }}>
                At Honor Sofia we believe great aesthetics are about enhancing your natural beauty —
                never masking it. We offer a full menu of treatments, from anti-wrinkle injections,
                dermal fillers and skin boosters to PRP, microneedling, Hydrafacials, IV drips,
                vitamin injections and advanced body &amp; wellness therapies.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p style={{ marginTop: "1rem", color: "var(--ink-soft)" }}>
                Every visit starts with a friendly consultation so we can understand exactly what
                you&rsquo;re looking for and recommend the right treatment for you — safely and
                with care.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div style={{ marginTop: "2rem" }}>
                <BookButton>Book a consultation</BookButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--blush">
        <div className="wrap section--center">
          <Reveal><span className="eyebrow eyebrow--center">Our promise</span></Reveal>
          <Reveal delay={0.06}><h2>What you can <span className="accent-i">expect</span></h2></Reveal>
        </div>
        <div className="wrap">
          <div className="feature-grid" style={{ marginTop: "2.6rem" }}>
            {PROMISES.map((p, i) => (
              <Reveal key={p.title} delay={0.06 * i} className="feature-card">
                <h3 dangerouslySetInnerHTML={{ __html: p.title }} />
                <p dangerouslySetInnerHTML={{ __html: p.body }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--center">
        <div className="wrap">
          <Reveal><h2>Come and see us</h2></Reveal>
          <Reveal delay={0.08}>
            <p className="lede" style={{ marginInline: "auto", marginTop: "1rem" }}>
              {site.location
                ? site.location
                : "Booking and consultations are handled through Instagram — message us to get started."}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/treatments" className="btn btn--ghost">View treatments <span className="arrow">→</span></Link>
              <BookButton>Message us</BookButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
