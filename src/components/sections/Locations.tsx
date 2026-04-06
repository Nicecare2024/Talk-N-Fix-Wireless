import { LOCATIONS } from "@/lib/data";

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-[#f3f3f3] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left — list */}
          <div className="lg:col-span-5">
            <p className="text-red-700 font-bold tracking-[0.2em] text-sm mb-3 uppercase">Find Us</p>
            <h2 className="text-4xl font-extrabold text-zinc-900 mb-4" style={{ fontFamily: "Plus Jakarta Sans" }}>
              5 Locations Near You
            </h2>
            <p className="text-[#603e39] mb-8 text-sm leading-relaxed">
              Walk-ins always welcome. No appointment needed. Open 7 days a week across Newark & Passaic, NJ.
            </p>

            <div className="space-y-3">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} id={loc.id} className="p-5 rounded-2xl bg-white border border-[#ebbbb4]/20 hover:border-red-700/30 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider">{loc.city}</span>
                      <h4 className="font-bold text-zinc-900 text-base" style={{ fontFamily: "Plus Jakarta Sans" }}>{loc.address}</h4>
                      <p className="text-xs text-[#603e39]">{loc.cityStateZip}{loc.note ? ` · ${loc.note}` : ""}</p>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-emerald-600 font-bold flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Open
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <a href={`tel:${loc.phone.replace(/-/g,"")}`} className="text-sm font-semibold text-zinc-700 hover:text-red-700 transition-colors">
                      {loc.phone}
                    </a>
                    <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-bold text-red-700 hover:underline flex items-center gap-1">
                      Directions
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — map placeholder */}
          <div className="lg:col-span-7 h-[600px] rounded-3xl overflow-hidden shadow-xl bg-zinc-200 relative">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-300">
              <div className="text-center text-zinc-500">
                <svg className="w-16 h-16 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3" strokeWidth={1}/></svg>
                <p className="text-sm font-medium opacity-50">Google Maps embed goes here</p>
                <p className="text-xs opacity-40 mt-1">Newark & Passaic, NJ</p>
              </div>
            </div>
            {/* Floating review card */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-5 py-4 rounded-2xl shadow-lg border border-white/50 max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-red-600 text-sm">★★★★★</span>
                <span className="font-bold text-sm text-zinc-900">4.9 Rating</span>
              </div>
              <p className="text-xs text-zinc-500 italic">&ldquo;Best screen repair in Passaic! Done in 20 minutes.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
