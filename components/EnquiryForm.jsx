"use client";

import { useState } from "react";
import { site, instagramDM } from "@/lib/site";

const INTERESTS = [
  "Anti-Wrinkle Injections",
  "Dermal Fillers",
  "Skin Boosters / Polynucleotides",
  "PRP / Microneedling",
  "Hydrafacial",
  "Skin Rejuvenation Package",
  "IV Drip",
  "Vitamin Injection (B12 / Biotin)",  "Not sure yet — I'd like advice",
];

export default function EnquiryForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="form__status" role="status">
        Thank you — your enquiry has been received. We&rsquo;ll be in touch as soon as we can. For the
        fastest reply you can also message us on{" "}
        <a href={instagramDM} target="_blank" rel="noreferrer" style={{ color: "var(--gold-deep)", fontWeight: 600 }}>
          Instagram
        </a>.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="interest">I&rsquo;m interested in</label>
          <select id="interest" name="interest" defaultValue={INTERESTS[0]}>
            {INTERESTS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us what you'd like to book or ask about — and a rough idea of when suits you."
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap" }}>
        <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"} <span className="arrow">→</span>
        </button>
        {status === "error" && (
          <span className="form__status form__status--error" role="alert">
            Something went wrong — please message us on{" "}
            <a href={instagramDM} target="_blank" rel="noreferrer">Instagram</a> instead.
          </span>
        )}
      </div>
    </form>
  );
}
