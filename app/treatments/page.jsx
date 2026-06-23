import Link from "next/link";
import { Reveal, BookButton, SparkleField } from "@/components/Motion";
import { menu } from "@/lib/menu";
import { instagramUrl, site } from "@/lib/site";

export const metadata = {
  title: "Treatments & Prices",
  description:
    "The full Honor Sofia treatment menu and price list — anti-wrinkle injections, dermal fillers, skin boosters, polynucleotides, PRP, microneedling, Hydrafacial, IV drips, vitamin injections, lashes and brows.",
};

function PriceRow({ row }) {
  const isTbc = row.price === "TBC";
  return (
    <div className="price-row">
      <span className="price-row__name">
        {row.name}
        {row.desc && <span className="price-row__desc">{row.desc}</span>}
      </span>
      <span className="price-row__dots" aria-hidden="true" />
      <span className={`price-row__price ${isTbc ? "is-tbc" : ""}`}>
        {isTbc ? "Enquire" : row.price}
      </span>
    </div>
  );
}

export default function Treatments() {
  return (
    <>
      <section className="page-hero">
        <SparkleField />
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <Reveal><span className="eyebrow eyebrow--center">Treatments &amp; Prices</span></Reveal>
          <Reveal delay={0.06}>
            <h1>The full <span className="gold">menu</span></h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede">
              Prices are a guide — your exact treatment and price are confirmed at consultation.
              To book, simply message us on Instagram.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="pills" style={{ justifyContent: "center" }}>
              {menu.map((c) => (
                <a key={c.id} href={`#${c.id}`} className="pill">{c.title}</a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)" }}>
        <div className="wrap">
          {menu.map((cat) => (
            <Reveal as="article" key={cat.id} id={cat.id} className="menu-cat">
              <div>
                <span className="menu-cat__kicker">{cat.kicker}</span>
                <h2 className="menu-cat__title">{cat.title}</h2>
                <p className="menu-cat__intro">{cat.intro}</p>
                {cat.consult && <span className="menu-cat__consult">Consultation required</span>}
                {cat.note && <p className="note">{cat.note}</p>}
              </div>

              <div className="menu-card">
                {cat.groups.map((g, gi) => (
                  <div className="menu-group" key={gi}>
                    {g.label && <div className="menu-group__label">{g.label}</div>}
                    {g.labelNote && <p className="menu-group__note">{g.labelNote}</p>}
                    {g.rows.map((row) => (
                      <PriceRow key={row.name} row={row} />
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section section--blush section--center">
        <div className="wrap">
          <Reveal>
            <h2>Found something you <span className="accent-i">love?</span></h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede" style={{ marginInline: "auto", marginTop: "1rem" }}>
              Message us on Instagram to book your consultation or appointment.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <BookButton>Book on Instagram</BookButton>
              <Link href="/book" className="btn btn--ghost">Other ways to reach us <span className="arrow">→</span></Link>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <p style={{ marginTop: "1.4rem", fontSize: ".85rem", color: "var(--ink-soft)" }}>
              <a href={instagramUrl} target="_blank" rel="noreferrer" style={{ color: "var(--gold-deep)", fontWeight: 500 }}>
                @{site.instagram}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
