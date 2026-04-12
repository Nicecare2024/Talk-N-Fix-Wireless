import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyUs from "@/components/sections/WhyUs";
import Locations from "@/components/sections/Locations";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Talk N Fix Wireless | #1 Phone Repair in Newark & Passaic NJ",
  description: "Talk N Fix Wireless — Newark & Passaic NJ's most trusted phone repair shop. iPhone screen repair from $79, Samsung repair from $89. Same-day service in 30-45 Mins. 1-year warranty available. 4 locations. Walk-ins welcome. Call 973-778-5900.",
  alternates: { canonical: "https://www.talknfixwireless.com" },
  openGraph: {
    title: "Talk N Fix Wireless | #1 Phone Repair in Newark & Passaic NJ",
    description: "Same-day iPhone, Samsung & device repair in Newark & Passaic NJ. 30-45 Mins. 1-year warranty available. 4 locations. Walk-ins welcome.",
    url: "https://www.talknfixwireless.com",
    images: [{ url: "/hero.png", width: 1200, height: 630, alt: "Talk N Fix Wireless — Phone Repair Newark NJ" }],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Locations />
        <Reviews />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
