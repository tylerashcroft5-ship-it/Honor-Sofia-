// ============================================================
// TREATMENT MENU — single source of truth for every service & price
// Pulled from the clinic's Instagram price posts.
//
// Shape:
//   { id, kicker, title, intro, note?, consult?,
//     groups: [ { label?, rows: [ { name, price, desc? } ] } ] }
//
// Prices marked "TBC" still need confirming with the clinic
// (search this file for "TBC").
// ============================================================
export const menu = [
  {
    id: "anti-wrinkle",
    kicker: "Injectables",
    title: "Anti-Wrinkle Injections",
    intro:
      "Smooths facial wrinkles and fine lines by relaxing the underlying muscles for a refreshed, natural look. Botulinum toxin is a prescription-only medicine — your exact price is confirmed at consultation.",
    consult: true,
    groups: [
      {
        rows: [
          { name: "2 Areas", price: "from £90" },
          { name: "3 Areas", price: "from £150" },
          { name: "Lip Flip", price: "from £90" },
          { name: "Masseter (jaw / teeth grinding)", price: "from £110" },
        ],
      },
    ],
  },
  {
    id: "fillers",
    kicker: "Injectables",
    title: "Dermal Fillers",
    intro:
      "Hyaluronic acid-based filler used to add volume, shape and definition to targeted areas. A consultation is required so your treatment can be tailored to you.",
    consult: true,
    groups: [
      {
        label: "Enhancements",
        rows: [
          { name: "Lip Enhancement", price: "£100" },
          { name: "Chin Enhancement", price: "£90" },
          { name: "Cheek Enhancement", price: "£120" },
          { name: "Jaw Enhancement", price: "£150" },
          { name: "Liquid Rhinoplasty", price: "£100" },
          { name: "Nasolabial Folds", price: "£100" },
          { name: "Marionette Lines", price: "£100" },
        ],
      },
      {
        label: "Volume Packages",
        labelNote: "Spread across multiple areas to restore volume & enhance definition.",
        rows: [
          { name: "2ml", price: "£180" },
          { name: "3ml", price: "£270" },
          { name: "4ml", price: "£360" },
          { name: "5ml", price: "£450" },
          { name: "6ml", price: "£540" },
        ],
      },
    ],
  },
  {
    id: "skin-boosters",
    kicker: "Skin",
    title: "Skin Boosters & Polynucleotides",
    intro:
      "Bio-stimulating injectables that improve skin quality, texture, hydration and elasticity by activating fibroblast cells to build collagen and elastin — ideal for delicate areas like the under-eyes and neck.",
    groups: [
      {
        label: "Skin Boosters",
        rows: [
          { name: "Skin Boosters", price: "£120 – £200" },
          { name: "Lumi Lip Booster", price: "£100" },
        ],
      },
      {
        label: "Polynucleotides",
        rows: [
          { name: "Under Eye", price: "£120 – £150" },
          { name: "Neck", price: "£180" },
        ],
      },
    ],
  },
  {
    id: "prp-microneedling",
    kicker: "Skin",
    title: "PRP & Microneedling",
    intro:
      "Collagen-stimulating skin rejuvenation. Microneedling creates tiny channels to kick-start renewal, while PRP uses growth factors from your own blood to boost collagen, elastin and even hair growth.",
    groups: [
      {
        label: "PRP",
        rows: [
          { name: "PRP Vampire Facial", price: "£100" },
          { name: "PRP Scalp (hair growth)", price: "£100" },
          { name: "PRP Facial & Scalp", price: "£160" },
        ],
      },
      {
        label: "Microneedling",
        rows: [
          { name: "Microneedling", price: "£55" },
          { name: "Microneedling with Exosomes", price: "£85" },
        ],
      },
    ],
  },
  {
    id: "facials",
    kicker: "Skin",
    title: "Hydrafacial",
    intro:
      "A non-invasive, one-of-a-kind facial that deeply cleanses, exfoliates, extracts impurities and infuses the skin with hydrating serums — revealing clear, radiant, glowing skin instantly.",
    groups: [
      {
        rows: [
          { name: "Hydrafacial", price: "TBC", desc: "Deep cleanse, hydrate & glow" },
        ],
      },
    ],
  },
  {
    id: "packages",
    kicker: "Best value",
    title: "Skin Rejuvenation Packages",
    intro:
      "Combination packages that pair our most-loved treatments for complete, head-turning results.",
    consult: true,
    groups: [
      {
        rows: [
          {
            name: "Anti-Wrinkle · PRP Vampire Facial · Polynucleotides",
            price: "£280",
          },
          {
            name: "Anti-Wrinkle · PRP Vampire Facial · Polynucleotides · Skin Boosters",
            price: "£350",
          },
        ],
      },
    ],
  },
  {
    id: "iv-drips",
    kicker: "IV Therapy",
    title: "IV Drips",
    intro:
      "Vitamins, minerals, electrolytes and antioxidants delivered directly into the bloodstream to support energy, hydration, immunity and overall wellbeing. Prices from:",
    groups: [
      {
        rows: [
          { name: "B12", price: "£70" },
          { name: "B Complex", price: "£70" },
          { name: "Vitamin C", price: "£70" },
          { name: "Reset Drip (B12 boost)", price: "£80" },
          { name: "Skin Elixir", price: "£120" },
          { name: "Methylene Blue", price: "£120" },
          { name: "Iron", price: "£120" },
          { name: "Menopause", price: "£120" },
          { name: "Sports Performance", price: "£120" },
          { name: "Skinny Drip", price: "£120" },
          { name: "Immune Booster", price: "£120" },
          { name: "Post Pregnancy", price: "£120" },
          { name: "Myers Cocktail", price: "£140" },
          { name: "Glutathione (Master Antioxidant)", price: "TBC" },
          { name: "NAD+", price: "£180 – £260" },
        ],
      },
    ],
  },
  {
    id: "vitamin-shots",
    kicker: "IV Therapy",
    title: "Vitamin Injections",
    intro:
      "Fast-acting vitamin boosters delivered straight into the bloodstream to support energy, metabolism, hair, skin and nails.",
    groups: [
      {
        rows: [
          { name: "B12 Injection", price: "£30", desc: "Energy, mood & metabolism" },
          { name: "Biotin Injection", price: "£35", desc: "Hair, skin & nails" },
        ],
      },
    ],
    note: "Packages available — message us for details.",
  },
  {
    id: "lashes-brows",
    kicker: "Beauty",
    title: "Lashes & Brows",
    intro:
      "Finishing touches to frame your face — lash sets, lifts and brow shaping for an effortless, polished look.",
    groups: [
      {
        label: "Lash Full Sets",
        rows: [
          { name: "Classic", price: "£35" },
          { name: "Angel", price: "£40" },
          { name: "Hybrid", price: "£40" },
          { name: "Russian", price: "£45" },
        ],
      },
      {
        label: "Lash Infills",
        rows: [
          { name: "Classic", price: "£25" },
          { name: "Angel", price: "£30" },
          { name: "Hybrid", price: "£30" },
          { name: "Russian", price: "£35" },
        ],
      },
      {
        label: "Lash Lifts & Tints",
        rows: [
          { name: "Lash Lift + Tint", price: "£30" },
          { name: "Korean Lash Lift + Tint", price: "£35" },
        ],
      },
      {
        label: "Brows",
        rows: [
          { name: "Brow Wax", price: "£10" },
          { name: "Brow Tint", price: "£10" },
          { name: "Brow Wax + Tint", price: "£15" },
          { name: "Brow Lamination", price: "£30" },
        ],
      },
    ],
  },
];

// Compact list for the homepage "what we offer" grid
export const categories = menu.map(({ id, kicker, title, intro }) => ({
  id,
  kicker,
  title,
  intro,
}));
