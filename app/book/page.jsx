import { Reveal, BookButton, Butterfly } from "@/components/Motion";
import EnquiryForm from "@/components/EnquiryForm";
import { site, instagramUrl } from "@/lib/site";

export const metadata = {
  title: "Book",
  description:
    "Book your treatment at Honor Sofia. Message us on Instagram for the fastest reply, or send an enquiry and we'll be in touch.",
};

export default function Book() {
  const tel = site.phone ? site.phone.replace(/\s/g, "") : "";

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal><span className="eyebrow eyebrow--center">Book</span></Reveal>
          <Reveal delay={0.06}>
            <h1>Let&rsquo;s get you <span className="gold">booked in</span></h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede">
              The quickest way to book or ask a question is a direct message on Instagram. Prefer
              email? Send an enquiry below and we&rsquo;ll get back to you.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div style={{ marginTop: "2rem" }}>
              <BookButton>Message us on Instagram</BookButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- WAYS TO REACH US ---------- */}
      <section className="section" style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)" }}>
        <div className="wrap">
          <div className="feature-grid">
            <Reveal className="contact-card">
              <span className="meta">Fastest</span>
              <h3>Instagram DM</h3>
              <p>Message us on Instagram to book or ask anything — it&rsquo;s the best way to reach us.</p>
              <div style={{ marginTop: ".8rem" }}>
                <BookButton className="btn btn--primary">@{site.instagram}</BookButton>
              </div>
            </Reveal>

            <Reveal delay={0.07} className="contact-card">
              <span className="meta">Browse first</span>
              <h3>Instagram page</h3>
              <p>See our latest work, offers and treatment information over on our profile.</p>
              <div style={{ marginTop: ".8rem" }}>
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="btn btn--ghost">
                  View profile <span className="arrow">→</span>
                </a>
              </div>
            </Reveal>

            {(site.email || site.phone) && (
              <Reveal delay={0.14} className="contact-card">
                <span className="meta">Direct</span>
                <h3>Email &amp; phone</h3>
                <p>
                  {site.email && (
                    <>
                      <a href={`mailto:${site.email}`} style={{ color: "var(--gold-deep)", fontWeight: 500 }}>{site.email}</a>
                      <br />
                    </>
                  )}
                  {site.phone && (
                    <a href={`tel:${tel}`} style={{ color: "var(--gold-deep)", fontWeight: 500 }}>{site.phone}</a>
                  )}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ---------- ENQUIRY FORM ---------- */}
      <section className="section section--sand" id="enquire" style={{ scrollMarginTop: "90px" }}>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <Reveal><span className="eyebrow">Send an enquiry</span></Reveal>
            <Reveal delay={0.06}>
              <h2>Tell us what you&rsquo;d <span className="accent-i">like to book</span></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p style={{ marginTop: "1.3rem", color: "var(--ink-soft)" }}>
                Share a few details and we&rsquo;ll be in touch to arrange your consultation or
                appointment. Not sure what you need? No problem — just tell us your goals and
                we&rsquo;ll guide you.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="note" style={{ marginTop: "1.6rem" }}>
                A consultation is required before aesthetic and prescription treatments, and all
                treatments are for clients aged 18 and over.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div style={{ marginTop: "1.6rem", color: "var(--mauve)" }}>
                <Butterfly style={{ width: 26, height: 26 }} />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="menu-card">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
