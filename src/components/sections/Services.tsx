import Link from "next/link";
import { SERVICES } from "@/lib/data";

const PRICING: Record<string, string> = {
  "iphone-screen-repair": "FROM $79",
  "samsung-screen-repair": "FROM $89",
  "ipad-screen-repair": "FROM $119",
  "battery-replacement": "FROM $49",
  "charging-port-repair": "FROM $59",
  "back-glass-repair": "FROM $79",
  "game-console-hdmi-repair": "FROM $89",
  "water-damage-repair": "ESTIMATE",
  "diagnostic-no-power": "FREE",
  "laptop-repair": "FROM $99",
  "computer-repair": "FROM $59",
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-zinc-100 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4">
          <div>
            <p className="text-red-700 font-bold tracking-[0.2em] text-xs sm:text-sm mb-2 uppercase">Our Specialties</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900" style={{ fontFamily: "Plus Jakarta Sans" }}>
              Most Common Repairs
            </h2>
          </div>
          <p className="text-stone-600 max-w-md text-sm leading-relaxed">
            Transparent pricing and instant diagnostics for the world&apos;s most popular devices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`}
              className="group bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 block card-hover">
              <div className="flex justify-between items-start mb-6 sm:mb-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-zinc-700 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <span className="text-stone-600 text-xs tracking-widest font-bold">{PRICING[service.id] ?? "CALL"}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2" style={{ fontFamily: "Plus Jakarta Sans" }}>{service.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4 sm:mb-6">{service.description}</p>
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm group-hover:translate-x-1 transition-transform">
                View Details
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-red-700 font-bold border-b-2 border-red-700 pb-0.5 hover:text-red-800 transition-colors text-sm sm:text-base">
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
