
import type { Metadata } from "next";

import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import DoctorConsultation from "@/components/DoctorConsultation";
import WhyUsSection from "@/components/WhyUsSection";
import AboutExperience from "@/components/AboutExperience";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import ManagerContactSection from "@/components/ManagerContactSection";


/* ================= SEO METADATA ================= */

export const metadata: Metadata = {
  title:
    "Revive Ayurveda Munroe Island | Authentic Kerala Ayurvedic Treatments",

  description:
    "Revive Ayurveda offers authentic Kerala Ayurvedic treatments in Munroe Island including Panchakarma, Shirodhara, Abhyanga, and rejuvenation therapies guided by certified Ayurvedic practitioners.",

  keywords: [
    "Ayurveda Munroe Island",
    "Ayurvedic treatment Kerala",
    "Panchakarma Kerala",
    "Ayurvedic massage Munroe Island",
    "Shirodhara Kerala",
    "Ayurvedic clinic Kollam",
    "Kerala Ayurveda therapy",
  ],

  alternates: {
    canonical: "https://reviveayurveda.in", // change to your domain
  },

  openGraph: {
    title:
      "Revive Ayurveda Munroe Island | Authentic Kerala Ayurvedic Healing",
    description:
      "Experience traditional Ayurvedic healing in the peaceful backwaters of Munroe Island, Kerala.",
    url: "https://reviveayurveda.in",
    siteName: "Revive Ayurveda",
    images: [
      {
        url: "/og-image.jpg", // create later (important)
        width: 1200,
        height: 630,
        alt: "Revive Ayurveda Munroe Island",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Revive Ayurveda Munroe Island",
    description:
      "Authentic Kerala Ayurvedic treatments and wellness therapies.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function Home() {
  return (
    <>
      <HeroSection />

      <DoctorConsultation />

      <PackagesSection />

      <WhyUsSection />

      <AboutExperience />
      <ReviewsSection />
      <ManagerContactSection />

      <LocationSection />
    </>
  );
}