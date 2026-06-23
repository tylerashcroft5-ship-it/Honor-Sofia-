import Link from "next/link";
import { site, navLinks, instagramUrl, instagramDM } from "@/lib/site";
import { Butterfly } from "@/components/Motion";

export default function Footer() {
  const year = new Date().getFullYear();
  const tel = site.phone ? site.phone.replace(/\s/g, "") : "";

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <Link href="/" className="footer__brand">
              <Butterfly />
              <span>HONOR <span className="gold">SOFIA</span></span>
            </Link>
            <p className="footer__tag">{site.tagline}</p>
            <p className="footer__small">Beauty Aesthetics &amp; IV Therapy</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
              <li><Link href="/treatments">Full price list</Link></li>
            </ul>
          </div>

          <div>
            <h4>Popular</h4>
            <ul>
              <li><Link href="/treatments#anti-wrinkle">Anti-wrinkle</Link></li>
              <li><Link href="/treatments#fillers">Dermal fillers</Link></li>
              <li><Link href="/treatments#iv-drips">IV drips</Link></li>
              <li><Link href="/treatments#lashes-brows">Lashes &amp; brows</Link></li>
            </ul>
          </div>

          <div>
            <h4>Book &amp; contact</h4>
            <p>
              <a href={instagramDM} target="_blank" rel="noreferrer">
                Message us on Instagram
              </a>
              <br />
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                @{site.instagram}
              </a>
            </p>
            {(site.email || site.phone) && (
              <p style={{ marginTop: "1rem" }}>
                {site.email && (<><a href={`mailto:${site.email}`}>{site.email}</a><br /></>)}
                {site.phone && <a href={`tel:${tel}`}>{site.phone}</a>}
              </p>
            )}
            {(site.location || site.hours) && (
              <p style={{ marginTop: "1rem" }}>
                {site.location}{site.location && site.hours && <br />}{site.hours}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="footer__disclaimer">
        <div className="wrap">
          Aesthetic and IV treatments require a consultation and are only suitable for those aged 18
          and over. Prices are a guide and may vary following your personal consultation. Prescription
          treatments are subject to suitability.
        </div>
      </div>

      <div className="footer__legal">
        <div className="wrap footer__legal-inner">
          <span>© {year} {site.fullName}</span>
          <span>Beauty · Energize · Empower</span>
        </div>
      </div>
    </footer>
  );
}
