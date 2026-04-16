"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LOCATIONS } from "@/lib/data";

const REVIEWS = [
  { text: "Thought my iPhone was a total loss after it fell in the pool. Talk N Fix revived it in two days. Truly professional and honest service.", name: "Jessica M.", loc: "Google Local Guide · 2 weeks ago" },
  { text: "Best price for screen replacement in Jersey. Called 5 different places and they were the most reasonable and the fastest. 30 mins flat.", name: "Anthony G.", loc: "Verified Customer · 1 month ago" },
  { text: "Great service for my Samsung S22. They had the part in stock. The shop is super clean and the techs are very knowledgeable.", name: "Roberto S.", loc: "Local Business Owner · 3 months ago" },
];

// Google Maps embed URLs for each location
const MAP_EMBEDS: Record<string, string> = {
  "passaic-354": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.5!2d-74.1241!3d40.8568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9b0b0b0b0b0%3A0x0!2s354+Passaic+St%2C+Passaic%2C+NJ+07055!5e0!3m2!1sen!2sus!4v1",
  "passaic-315": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.5!2d-74.1280!3d40.8590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9b0b0b0b0b1%3A0x0!2s315+Monroe+St%2C+Passaic%2C+NJ+07055!5e0!3m2!1sen!2sus!4v1",
  "newark-207": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5!2d-74.1502!3d40.7282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4b0b0b0b0b0%3A0x0!2s207+Ferry+St%2C+Newark%2C+NJ+07105!5e0!3m2!1sen!2sus!4v1",
  "newark-674": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.5!2d-74.1650!3d40.7580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5b0b0b0b0b0%3A0x0!2s674+Mt+Prospect+Ave%2C+Newark%2C+NJ+07104!5e0!3m2!1sen!2sus!4v1",
};

export default function LocationsPage() {
  const [activeId, setActiveId] = useState(LOCATIONS[0].id);
  const activeLoc = LOCATIONS.find(l => l.id === activeId)!;

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-stone-50">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left — store list */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-red-700 font-bold tracking-widest text-xs uppercase bg-red-700/5 px-3 py-1 rounded-full">New Jersey Premier Centers</span>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mt-3 mb-3" style={{ fontFamily: "Plus Jakarta Sans" }}>
                  Find Your Store
                </h1>
                <p className="text-stone-600 text-lg">4 Locations across Newark &amp; Passaic NJ. Walk-ins always welcome — no appointment needed.</p>
              </div>

              <div className="space-y-3">
                {LOCATIONS.map(loc => (
                  <div
                    key={loc.id}
                    id={loc.id}
                    onClick={() => setActiveId(loc.id)}
                    className={`p-5 rounded-2xl bg-white border-2 transition-all cursor-pointer shadow-sm ${
                      activeId === loc.id ? "border-red-700 shadow-red-100" : "border-zinc-100 hover:border-red-700/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider">{loc.city}</span>
                        <h3 className="font-bold text-zinc-900 text-lg" style={{ fontFamily: "Plus Jakarta Sans" }}>{loc.address}</h3>
                        <p className="text-stone-600 text-sm">{loc.cityStateZip}{loc.note ? ` · ${loc.note}` : ""}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> Open
                      </span>
                    </div>
                    <div className="flex items-start gap-3 mb-3 text-sm text-stone-600">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      <div>
                        <p>{loc.hours.weekday}</p>
                        <p>{loc.hours.weekend}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href={`tel:${loc.phone.replace(/-/g,"")}`} className="text-zinc-700 font-semibold text-sm hover:text-red-700 transition-colors">{loc.phone}</a>
                      <div className="flex gap-2">
                        <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer"
                          className="bg-primary-gradient text-white text-xs font-bold px-4 py-2 rounded-lg hover:brightness-110 transition-all">
                          Directions
                        </a>
                        <a href={`tel:${loc.phone.replace(/-/g,"")}`}
                          className="bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-lg hover:brightness-110 transition-all">
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — interactive map */}
            <div className="lg:col-span-7 lg:sticky lg:top-24">
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ height: "580px" }}>
                <iframe
                  key={activeId}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLoc.address + ", " + activeLoc.cityStateZip)}&output=embed&z=16`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map for ${activeLoc.address}`}
                />
              </div>
              {/* Info card below map */}
              <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm border border-zinc-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wider">{activeLoc.city}</p>
                  <p className="font-bold text-zinc-900">{activeLoc.address}, {activeLoc.cityStateZip}</p>
                  <p className="text-xs text-stone-500 mt-0.5">{activeLoc.hours.weekday} · {activeLoc.hours.weekend}</p>
                </div>
                <div className="flex gap-2">
                  <a href={activeLoc.mapsUrl} target="_blank" rel="noopener noreferrer"
                    className="bg-primary-gradient text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:brightness-110 transition-all">
                    Get Directions
                  </a>
                  <a href={`tel:${activeLoc.phone.replace(/-/g,"")}`}
                    className="bg-zinc-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-zinc-700 transition-all">
                    {activeLoc.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <h2 className="text-3xl font-extrabold text-zinc-900 text-center mb-12" style={{ fontFamily: "Plus Jakarta Sans" }}>
            Trusted by the Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-8 bg-zinc-100 rounded-3xl border border-white/40">
                <div className="flex gap-1 text-yellow-500 mb-4 text-sm">
                  {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
                </div>
                <p className="text-zinc-700 italic leading-relaxed text-sm mb-6">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-zinc-300" />
                  <div>
                    <p className="font-bold text-sm text-zinc-900">{r.name}</p>
                    <p className="text-xs text-stone-600">{r.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://www.google.com/search?q=Talk+N+Fix+Wireless" target="_blank" rel="noopener noreferrer"
              className="text-blue-700 font-bold underline underline-offset-4 text-sm hover:text-[#003da9] transition-colors">
              Read all 6,500+ reviews on Google
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 py-10 sm:py-16 bg-zinc-100">
          <div className="max-w-4xl mx-auto bg-primary-gradient rounded-[2.5rem] p-6 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5 relative z-10" style={{ fontFamily: "Plus Jakarta Sans" }}>Walk In Today</h2>
            <p className="text-white/80 mb-8 relative z-10">No appointment needed. Out in 30 minutes.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/book" className="bg-white text-red-700 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform">Get a Quote First</Link>
              <Link href="/services" className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all">View All Services</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
