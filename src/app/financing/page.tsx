import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Financing Available | Talk N Fix Wireless Newark & Passaic NJ",
  description: "Can't pay upfront? Apply for financing through American First Finance. Get your phone repaired today and pay over time. Available at all Talk N Fix Wireless locations.",
  alternates: { canonical: "https://www.talknfixwireless.com/financing" },
};

const BENEFITS = [
  { icon: "M5 13l4 4L19 7", title: "No Credit Needed", desc: "Everyone qualifies. No hard credit check required to apply." },
  { icon: "M12 6v6l4 2M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Z", title: "Fast Approval", desc: "Get approved in minutes. Walk out with your repaired device same day." },
  { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Flexible Payments", desc: "Pay over time in manageable installments that fit your budget." },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Secure & Trusted", desc: "Powered by American First Finance — a trusted national lender." },
];

const STEPS = [
  { num: "1", title: "Click Apply Now", desc: "Hit the button below to open the secure application form." },
  { num: "2", title: "Fill Out the Form", desc: "Enter your basic info. Takes less than 2 minutes." },
  { num: "3", title: "Get Approved", desc: "Receive your decision instantly. No waiting." },
  { num: "4", title: "Get Your Repair", desc: "Visit any of our 4 locations and get your device fixed today." },
];

export default function FinancingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-stone-50">

        {/* Hero */}
        <section className="bg-zinc-900 text-white px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-red-700/20 text-red-400 text-xs font-bold rounded-full tracking-widest uppercase mb-6">
              Financing Available
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-5 leading-tight" style={{ fontFamily: "Plus Jakarta Sans" }}>
              Fix Now. <span className="text-red-500">Pay Later.</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
              Don&apos;t let cost stop you from getting your device repaired. Apply for financing in minutes and walk out with your phone fixed today.
            </p>
            <a
              href="https://sv1.americanfirstfinance.com/kwik/13897/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-xl hover:shadow-red-700/30 active:scale-95"
            >
              Apply for Financing Now →
            </a>
            <p className="text-zinc-500 text-sm mt-4">No hard credit check · Fast approval · Secure application</p>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-4 sm:px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 text-center mb-12" style={{ fontFamily: "Plus Jakarta Sans" }}>
            Why Finance With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map(b => (
              <div key={b.title} className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 text-center">
                <div className="w-12 h-12 rounded-full bg-red-700/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-zinc-900 mb-2" style={{ fontFamily: "Plus Jakarta Sans" }}>{b.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 sm:px-6 py-16 bg-zinc-900 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12" style={{ fontFamily: "Plus Jakarta Sans" }}>
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-8 left-0 w-full h-px bg-white/10" />
              {STEPS.map((s, i) => (
                <div key={i} className="relative z-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-red-700 text-white flex items-center justify-center font-black text-xl mx-auto mb-5 border-4 border-zinc-900 shadow-lg" style={{ fontFamily: "Plus Jakarta Sans" }}>
                    {s.num}
                  </div>
                  <h4 className="font-bold text-lg mb-2" style={{ fontFamily: "Plus Jakarta Sans" }}>{s.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 py-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mb-4" style={{ fontFamily: "Plus Jakarta Sans" }}>
            Ready to Get Started?
          </h2>
          <p className="text-stone-500 mb-8 max-w-xl mx-auto">
            Click below to open the secure American First Finance application. Takes less than 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://sv1.americanfirstfinance.com/kwik/13897/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-gradient text-white font-bold px-10 py-4 rounded-xl hover:brightness-110 transition-all shadow-lg text-lg"
            >
              Apply Now →
            </a>
            <Link href="/locations" className="border-2 border-zinc-200 text-zinc-700 font-bold px-10 py-4 rounded-xl hover:bg-zinc-50 transition-all text-lg">
              Find a Location
            </Link>
          </div>
          <p className="text-xs text-stone-400 mt-6">
            Financing provided by American First Finance. Subject to approval. Talk N Fix Wireless is not a lender.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}
