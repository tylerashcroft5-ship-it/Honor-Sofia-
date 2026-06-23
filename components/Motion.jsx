"use client";

import { useEffect, useRef, useState } from "react";
import { instagramDM } from "@/lib/site";

/* ---------- Butterfly: the brand motif, used in nav / footer ---------- */
export function Butterfly({ ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M12 7.5c.9-2 2.6-3.6 4.7-4.1 1.9-.5 3.6.3 4 2 .4 1.8-.7 3.8-2.6 5-1.3.8-3 1.3-4.6 1.4 1.5.4 3 1.3 3.9 2.6 1 1.5 1 3.3-.2 4.3-1.2 1-3 .6-4.1-.8-.5-.6-.9-1.4-1.1-2.3-.2.9-.6 1.7-1.1 2.3-1.1 1.4-2.9 1.8-4.1.8-1.2-1-1.2-2.8-.2-4.3.9-1.3 2.4-2.2 3.9-2.6-1.6-.1-3.3-.6-4.6-1.4C3.6 8.7 2.5 6.7 2.9 4.9c.4-1.7 2.1-2.5 4-2 2.1.5 3.8 2.1 4.7 4.1.1.3.3.6.4.9.1-.3.3-.6.4-.9Z" />
      <circle cx="12" cy="6.5" r="1.05" />
    </svg>
  );
}

/* ---------- Emblem: branded crest used inside portrait frames ---------- */
export function Emblem() {
  return (
    <div className="emblem">
      <Butterfly />
      <span className="emblem__name">HONOR <span className="gold">SOFIA</span></span>
      <span className="emblem__sub">Beauty · Energize · Empower</span>
    </div>
  );
}

/* ---------- Reveal: gentle rise-in when scrolled into view ---------- */
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "reveal--in" : ""} ${className}`}
      style={{ "--d": `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------- Counter: counts up once visible ---------- */
export function Counter({ to, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        if (reduce) { setVal(to); return; }
        const start = performance.now();
        const dur = 1400;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {prefix}{val}{suffix}
    </span>
  );
}

/* ---------- SparkleField: slow ambient shimmer behind the hero ---------- */
const SPARKLES = [
  { top: "14%", left: "8%",  size: 18, dur: 5.5, delay: 0 },
  { top: "68%", left: "12%", size: 12, dur: 6.5, delay: 1.2 },
  { top: "22%", left: "86%", size: 22, dur: 5,   delay: .6 },
  { top: "60%", left: "82%", size: 14, dur: 7,   delay: 2 },
  { top: "40%", left: "50%", size: 10, dur: 6,   delay: 1.6 },
  { top: "82%", left: "55%", size: 16, dur: 5.8, delay: .3 },
  { top: "10%", left: "44%", size: 12, dur: 6.8, delay: 2.4 },
  { top: "48%", left: "22%", size: 14, dur: 6.2, delay: .9 },
];

export function SparkleField() {
  return (
    <div className="sparkle-field" aria-hidden="true">
      {SPARKLES.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            "--dur": `${s.dur}s`,
            "--delay": `${s.delay}s`,
          }}
        >
          <path d="M12 0c.6 5.7 5.7 10.8 12 12-6.3 1.2-11.4 6.3-12 12-.6-5.7-5.7-10.8-12-12C6.3 10.8 11.4 5.7 12 0Z" />
        </svg>
      ))}
    </div>
  );
}

/* ---------- BookButton: every booking action opens an Instagram DM ---------- */
export function BookButton({ children = "Book on Instagram", className = "btn btn--primary" }) {
  return (
    <a href={instagramDM} target="_blank" rel="noreferrer" className={className}>
      {children} <span className="arrow">→</span>
    </a>
  );
}
