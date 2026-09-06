import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";

const golos = Golos_Text({
  subsets: ["latin"],
  variable: "--font-golos",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "VYRA — Créez des vidéos virales qui rapportent, automatiquement.",
  description:
    "Collez une URL YouTube ou écrivez un prompt. VYRA génère une vidéo virale prête à être postée.",
  applicationName: "VYRA",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={golos.variable}>
      <body>{children}</body>
    </html>
  );
}
