"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, instagramDM } from "@/lib/site";
import { Butterfly } from "@/components/Motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay on navigation + lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled || open ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">
          <Link href="/" className="nav__brand" aria-label="Honor Sofia — home">
            <Butterfly />
            <span className="nav__brand-text">
              HONOR <span className="gold">SOFIA</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav__link ${pathname === l.href ? "nav__link--active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <a href={instagramDM} target="_blank" rel="noreferrer" className="btn btn--primary nav__cta">
              Book
            </a>
          </nav>

          <button
            className={`nav__burger ${open ? "nav__burger--open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`nav__overlay ${open ? "nav__overlay--open" : ""}`} aria-hidden={!open}>
        {[{ href: "/", label: "Home" }, ...navLinks].map((l, i) => (
          <Link key={l.href} href={l.href} style={{ transitionDelay: `${0.08 * i + 0.1}s` }}>
            {l.label}
          </Link>
        ))}
        <a
          href={instagramDM}
          target="_blank"
          rel="noreferrer"
          style={{ transitionDelay: `${0.08 * (navLinks.length + 1) + 0.1}s` }}
        >
          Book on Instagram
        </a>
        <p className="nav__overlay-note">Beauty · Energize · Empower</p>
      </div>
    </>
  );
}
