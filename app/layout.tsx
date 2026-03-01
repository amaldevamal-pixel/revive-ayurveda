import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // IMPORTANT: change to your REAL domain
  metadataBase: new URL("https://reviveayurveda.in"),

  // ✅ ADD THIS BLOCK
  verification: {
    google: "0-_1swm-p5IG2XMHVsnLb8DbEqwu1G1jjyT1XoE1Zl8",
  },
  
  title: {
    default: "Revive Ayurveda Munroe Island",
    template: "%s | Revive Ayurveda Munroe Island",
  },

  description:
    "Authentic Ayurvedic treatments in Munroe Island, Kerala. Traditional healing, Panchakarma therapy, and rejuvenation massages in peaceful backwaters.",

  keywords: [
    "Ayurveda Munroe Island",
    "Ayurvedic treatment Kerala",
    "Panchakarma Munroe Island",
    "Ayurvedic massage Kerala",
    "Revive Ayurveda",
  ],

  authors: [{ name: "Revive Ayurveda" }],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "Revive Ayurveda Munroe Island",
    description:
      "Experience authentic Ayurvedic healing and rejuvenation therapies in Munroe Island, Kerala.",
    url: "https://reviveayurveda.in",
    siteName: "Revive Ayurveda",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // add this image inside /public
        width: 1200,
        height: 630,
        alt: "Revive Ayurveda Munroe Island",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Revive Ayurveda Munroe Island",
    description:
      "Authentic Ayurvedic therapies and rejuvenation treatments in Munroe Island, Kerala.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://reviveayurveda.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />

        {/* ✅ GOOGLE ANALYTICS */}
        <GoogleAnalytics gaId="G-T8D66L5SNV" />
      </body>
    </html>
  );
}