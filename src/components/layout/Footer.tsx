import Link from "next/link";
import { LOCATIONS, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200/50 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-black text-zinc-900 mb-4 block" style={{ fontFamily: "Plus Jakarta Sans" }}>
              Talk N&apos; Fix Wireless
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-5">
              Premium precision mobile repair. We treat every device like our own, ensuring the highest standards in the industry.
            </p>
            <div className="flex gap-3">
              {["F", "I", "Y", "X"].map((s, i) => (
                <a key={i} href="#" aria-label="Social" className="w-9 h-9 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:bg-red-700 hover:text-white transition-all text-xs font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-5">Popular Repairs</h5>
            <ul className="space-y-3">
              {SERVICES.slice(0, 7).map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="text-zinc-500 hover:text-zinc-900 text-sm underline decoration-red-700 decoration-0 hover:decoration-2 underline-offset-4 transition-all">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h5 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-5">Locations</h5>
            <ul className="space-y-3">
              {LOCATIONS.map(loc => (
                <li key={loc.id}>
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 text-sm underline decoration-red-700 decoration-0 hover:decoration-2 underline-offset-4 transition-all">
                    {loc.address}, {loc.city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-5">Company</h5>
            <ul className="space-y-3 mb-6">
              {[["About Us", "/about"], ["Blog", "/blog"], ["Contact", "/contact"], ["Privacy Policy", "/privacy-policy"], ["Terms", "/terms-and-conditions"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-zinc-500 hover:text-zinc-900 text-sm underline decoration-red-700 decoration-0 hover:decoration-2 underline-offset-4 transition-all">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Support Line</p>
              <a href="tel:9737785900" className="text-lg font-bold text-red-700 hover:text-red-800 transition-colors">
                973-778-5900
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-zinc-500">
          <span>© 2026 Talk N Fix Wireless. All rights reserved. Newark & Passaic, NJ.</span>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 text-xs font-bold text-zinc-600">
            <svg className="w-3 h-3 text-red-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
            Certified Technicians Only
          </div>
        </div>
      </div>
    </footer>
  );
}
