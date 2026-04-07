import Link from "next/link";
import { LOCATIONS, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200/50 pt-12 sm:pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <Link href="/" className="text-base sm:text-lg font-black text-zinc-900 mb-3 block" style={{ fontFamily: "Plus Jakarta Sans" }}>
              Talk N&apos; Fix Wireless
            </Link>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-4">
              Premium precision mobile repair. We treat every device like our own.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {["F", "I", "Y", "X"].map((s, i) => (
                <a key={i} href="#" aria-label="Social" className="w-8 h-8 sm:w-9 sm:h-9 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:bg-red-700 hover:text-white transition-all text-xs font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-4">Popular Repairs</h5>
            <ul className="space-y-2 sm:space-y-3">
              {SERVICES.slice(0, 6).map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="text-zinc-500 hover:text-zinc-900 text-xs sm:text-sm transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h5 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-4">Locations</h5>
            <ul className="space-y-2 sm:space-y-3">
              {LOCATIONS.map(loc => (
                <li key={loc.id}>
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 text-xs sm:text-sm transition-colors">
                    {loc.address}, {loc.city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-zinc-900 font-bold text-xs uppercase tracking-widest mb-4">Company</h5>
            <ul className="space-y-2 sm:space-y-3 mb-5">
              {[["About Us", "/about"], ["Blog", "/blog"], ["Contact", "/contact"], ["Privacy Policy", "/privacy-policy"], ["Terms", "/terms-and-conditions"]].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-zinc-500 hover:text-zinc-900 text-xs sm:text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Support Line</p>
              <a href="tel:9737785900" className="text-base sm:text-lg font-bold text-red-700 hover:text-red-800 transition-colors">
                973-778-5900
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-500">
          <span className="text-center sm:text-left">© 2026 Talk N Fix Wireless. All rights reserved.</span>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-xs font-bold text-zinc-600">
            <svg className="w-3 h-3 text-red-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
            Certified Technicians Only
          </div>
        </div>
      </div>
    </footer>
  );
}
