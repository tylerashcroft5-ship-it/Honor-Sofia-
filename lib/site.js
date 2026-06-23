// ============================================================
// SITE SETTINGS — the one file to edit for contact details
// Everything here flows through the nav, footer, booking and
// enquiry pages automatically.
// ============================================================
export const site = {
  name: "Honor Sofia",
  fullName: "Honor Sofia Beauty Aesthetics & IV Therapy",
  tagline: "Beauty · Energize · Empower.",
  intro:
    "A luxury aesthetics, skin and IV therapy clinic — natural-looking enhancements, glowing skin and feel-good wellness, delivered with care.",

  // Instagram is the clinic's main booking & contact channel
  instagram: "honorsofiaaesthetics",

  // EDIT: replace with the client's real details before launch.
  // Leave a value as "" and it will be hidden automatically.
  email: "", // e.g. "hello@honorsofia.co.uk"
  phone: "", // e.g. "+44 7000 000000"
  location: "", // e.g. "Town / area — or 'Mobile service across …'"
  hours: "", // e.g. "Mon–Sat, by appointment"
};

export const navLinks = [
  { href: "/treatments", label: "Treatments & Prices" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book" },
];

// Instagram helpers
export const instagramUrl = `https://instagram.com/${site.instagram}`;
export const instagramDM = `https://ig.me/m/${site.instagram}`;
