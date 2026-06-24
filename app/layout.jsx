import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  // EDIT: swap for the client's real domain once connected in Vercel
  metadataBase: new URL("https://honorsofia.co.uk"),
  title: {
    default: "Honor Sofia — Beauty Aesthetics & IV Therapy",
    template: "%s — Honor Sofia",
  },
  description:
    "Honor Sofia — luxury aesthetics, skin and IV therapy. Anti-wrinkle, dermal fillers, polynucleotides, PRP, microneedling, Hydrafacial, IV drips and vitamin injections. Natural-looking results, glowing skin and feel-good wellness.",
  openGraph: {
    title: "Honor Sofia — Beauty Aesthetics & IV Therapy",
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Marcellus&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
