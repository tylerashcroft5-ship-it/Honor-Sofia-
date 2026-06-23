# Honor Sofia — Beauty Aesthetics & IV Therapy

Custom Next.js website for Honor Sofia. Static-rendered, no database, one serverless
function (the enquiry form). Booking runs through Instagram DM.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel
1. Push this repo to GitHub (already done).
2. vercel.com → Add New Project → import the repo. No settings needed — Vercel detects Next.js.
3. Every push to `main` auto-deploys.

## Before launch — the checklist

### 1. Contact details — `lib/site.js`
The clinic's main channel is **Instagram** (`@honorsofiaaesthetics`) — every "Book" button opens
an Instagram DM, so the site can launch as-is. When you have them, fill in the optional fields and
they'll appear automatically (footer, book page, enquiry form):
- `email`, `phone` — leave `""` to hide.
- `location`, `hours` — leave `""` to hide.

If the Instagram handle ever changes, update `instagram` in the same file.

### 2. Prices to confirm — `lib/menu.js`
Everything is taken from the clinic's Instagram price posts. Two prices were **not shown** and are
marked `"TBC"` (they display as "Enquire" until set):
- **Hydrafacial**
- **Glutathione (Master Antioxidant) IV drip**

Also worth confirming: the standalone **B12 IV drip** shows as **£70** while the "Reset Drip (B12
boost)" flyer says **£80** — both are currently listed. Adjust if they should be the same thing.

To add, edit or remove a treatment, just edit the `menu` array in `lib/menu.js` — the homepage grid,
the treatments page and the footer all read from it.

### 3. Enquiry form — `app/api/contact/route.js`
Currently logs submissions to the Vercel function logs and returns success (the form also points
people to Instagram). To receive enquiries by email, wire up Resend — the full snippet is in the
file's header comment (~5 minutes). Add `RESEND_API_KEY` in Vercel → Settings → Environment
Variables.

### 4. Photos & logo
The site is intentionally **image-light** and uses the brand's gold/blush palette, so it looks
polished with no photos at all. Placeholder "photo coming soon" frames are on the home and about
pages — drop in the client's own professional photos when available (clinic, treatments, headshot).
A clean transparent-PNG/SVG logo can replace the butterfly wordmark in `components/Nav.jsx` /
`Footer.jsx` if the client supplies one.

## Where things live
| What | Where |
|---|---|
| Colours, type, all styling | `app/globals.css` (design tokens at the top) |
| Contact details & Instagram handle | `lib/site.js` |
| Every treatment & price | `lib/menu.js` |
| Nav links | `lib/site.js` (`navLinks`) |
| Enquiry form options | `components/EnquiryForm.jsx` |

## Design notes
- Palette: blush `#F4E7E9`, rose `#D9AEB4`, mauve `#BE909A`, deep plum-brown ink `#4A383C`, with a
  champagne-gold gradient (`#E7D3A1 → #C8A45D → #A07C36`) for accents and CTAs.
- Type: Marcellus (display) · Cormorant Garamond italic (accents) · Jost (body). Loaded from Google
  Fonts at runtime.
- Butterfly motif from the brand's flyers is used as the logo mark and favicon.
- All animation respects `prefers-reduced-motion`.
- Footer carries a standard aesthetics disclaimer (consultation required, 18+, prices are a guide).
