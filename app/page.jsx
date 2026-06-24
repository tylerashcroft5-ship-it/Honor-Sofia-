import Link from "next/link";
import { Reveal, Counter, SparkleField, BookButton, Butterfly, Emblem } from "@/components/Motion";
import { categories } from "@/lib/menu";
import { site, instagramUrl } from "@/lib/site";
import Showcase from "@/components/Showcase";

const STATS = [
  { to: 30, suffix: "+", label: "Treatments offered" },
  { to: 11, suffix: "", label: "Treatment categories" },
  { to: 100, suffix: "%", label: "Bespoke consultations" },
  { to: 5, suffix: "★", label: "Client-focused care" },
];

const VALUES = [
  {
    title: "Natural-looking results",
    body: "Subtle, refined enhancements that leave you looking refreshed — never overdone. Every treatment is tailored to your features.",
  },
  {
    title: "Consultation first",
    body: "Prescription and aesthetic treatments always begin with a consultation, so your plan is safe, suitable and built around your goals.",
  },
  {
    title: "Beauty meets wellness",
    body: "From injectables and skin rejuvenation to IV drips and vitamin boosts — feel good on the inside and glow on the outside.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <SparkleField />
        <div className="wrap hero__inner">
          <Reveal>
            <div className="hero__crest"><Butterfly /></div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="hero__title">
              HONOR <span className="gold">SOFIA</span>
            </h1>
            <div className="hero__script">Beauty Aesthetics &amp; IV Therapy</div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede hero__sub">{site.intro}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="hero__ctas">
              <BookButton>Book on Instagram</BookButton>
              <Link href="/treatments" className="btn btn--ghost">
                View treatments &amp; prices <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero__creds">
              <span><i className="dot" /> Aesthetics</span>
              <span><i className="dot" /> Skin &amp; Rejuvenation</span>
              <span><i className="dot" /> IV Therapy</span>            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- STAT STRIP ---------- */}
      <section className="creds-strip">
        <div className="wrap">
          <div className="creds-strip__grid">
            {STATS.map((s) => (
              <Reveal key={s.label}>
                <div className="cred__num"><Counter to={s.to} suffix={s.suffix} /></div>
                <div className="cred__label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INTRO ---------- */}
      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal><span className="eyebrow">Welcome</span></Reveal>
            <Reveal delay={0.06}>
              <h2>Your destination for <span className="accent-i">beauty &amp; wellness</span></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p style={{ marginTop: "1.3rem", color: "var(--ink-soft)" }}>
                Honor Sofia is a luxury aesthetics, skin and IV therapy clinic. We combine
                advanced treatments with a warm, personal touch — helping you feel confident,
                radiant and energised.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p style={{ marginTop: "1rem", color: "var(--ink-soft)" }}>
                Whether you&rsquo;re after smoother skin, subtle enhancements, a wellness boost or a
                full glow-up, every treatment starts with listening to you.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/about" className="btn btn--ghost">
                  About the clinic <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="portrait">
            <div className="portrait__frame portrait__frame--photo">
              <img
                className="portrait__img"
                src="/media/photo-facial.jpg"
                alt="Honor Sofia practitioner performing a skin treatment"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="section section--blush">
        <div className="wrap section--center">
          <Reveal><span className="eyebrow eyebrow--center">Our treatments</span></Reveal>
          <Reveal delay={0.06}>
            <h2>Everything we <span className="gold">offer</span></h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginInline: "auto" }}>
              A full menu of aesthetics, skin, IV and beauty treatments — explore the highlights,
              then see the complete price list.
            </p>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="feature-grid">
            {categories.map((c, i) => (
              <Reveal key={c.id} delay={0.05 * (i % 3)} className="feature-card" as={Link} href={`/treatments#${c.id}`}>
                <span className="feature-card__kicker">{c.kicker}</span>
                <h3>{c.title}</h3>
                <p>{c.intro}</p>
                <span className="go">View &amp; prices →</span>
              </Reveal>
            ))}
          </div>
          <div className="section--center" style={{ marginTop: "3rem" }}>
            <Link href="/treatments" className="btn btn--primary">
              Full treatment menu <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- SHOWCASE ---------- */}
      <section className="section">
        <div className="wrap section--center">
          <Reveal><span className="eyebrow eyebrow--center">Inside the clinic</span></Reveal>
          <Reveal delay={0.06}>
            <h2>See us <span className="gold">in action</span></h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginInline: "auto" }}>
              A glimpse of real treatments and results at Honor Sofia.
            </p>
          </Reveal>
        </div>
        <div className="wrap">
          <Showcase />
        </div>
      </section>

      {/* ---------- IV HIGHLIGHT ---------- */}
      <section className="section section--ink">
        <div className="wrap split">
          <div>
            <Reveal><span className="eyebrow">IV Therapy</span></Reveal>
            <Reveal delay={0.06}>
              <h2>The &ldquo;Master <span className="gold">Antioxidant</span>&rdquo; &amp; more</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede">
                Vitamins, minerals and antioxidants delivered directly into the bloodstream — for
                energy, immunity, glowing skin and recovery.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="gold-list" style={{ marginTop: "1.6rem" }}>
                <li>Brightens skin &amp; supports a natural glow</li>
                <li>Boosts energy &amp; combats fatigue</li>
                <li>Strengthens the body&rsquo;s natural defences</li>
                <li>Supports detox, recovery &amp; wellbeing</li>
              </ul>
            </Reveal>
            <Reveal delay={0.24}>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/treatments#iv-drips" className="btn btn--ghost">
                  See IV drips &amp; vitamin shots <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="portrait">
            <div className="portrait__frame portrait__frame--photo">
              <img
                className="portrait__img"
                src="/media/photo-syringes.jpg"
                alt="Vitamin and skin booster syringes at the Honor Sofia clinic"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className="section">
        <div className="wrap section--center">
          <Reveal><span className="eyebrow eyebrow--center">Why Honor Sofia</span></Reveal>
          <Reveal delay={0.06}>
            <h2>Refined, safe &amp; <span className="accent-i">personal</span></h2>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="feature-grid" style={{ marginTop: "2.6rem" }}>
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.06 * i} className="feature-card">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BRAND BANNER ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="brand-band">
            <img
              src="/media/brand-iv.jpg"
              alt="Honor Sofia Aesthetics & Wellness"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="cta-banner">
            <div className="cta-banner__orn"><Butterfly /></div>
            <h2>Ready to <span className="gold">glow</span>?</h2>
            <p>
              Booking and consultations are handled through Instagram — send us a message and
              we&rsquo;ll help you choose the perfect treatment.
            </p>
            <BookButton>Message us on Instagram</BookButton>
            <p style={{ marginTop: "1.4rem", fontSize: ".85rem" }}>
              <a href={instagramUrl} target="_blank" rel="noreferrer" style={{ color: "var(--gold-light)" }}>
                @{site.instagram}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
