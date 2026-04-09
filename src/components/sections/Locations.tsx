import { LOCATIONS } from "@/lib/data";

export default function Locations() {
  return (
    <section id="locations" className="py-16 sm:py-24 bg-zinc-100 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left — list */}
          <div className="lg:col-span-5">
            <p className="text-red-700 font-bold tracking-[0.2em] text-xs sm:text-sm mb-3 uppercase">Find Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mb-3" style={{ fontFamily: "Plus Jakarta Sans" }}>
              4 Locations Near You
            </h2>
            <p className="text-stone-600 mb-6 text-sm leading-relaxed">
              Walk-ins always welcome. No appointment needed. Open 7 days a week.
            </p>
            <div className="space-y-3">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} id={loc.id} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-red-200/20 hover:border-red-700/30 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0 pr-2">
                      <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider">{loc.city}</span>
                      <h4 className="font-bold text-zinc-900 text-sm sm:text-base truncate" style={{ fontFamily: "Plus Jakarta Sans" }}>{loc.address}</h4>
                      <p className="text-xs text-stone-600 truncate">{loc.cityStateZip}{loc.note ? ` · ${loc.note}` : ""}</p>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-emerald-600 font-bold flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Open
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <a href={`tel:${loc.phone.replace(/-/g,"")}`} className="text-xs sm:text-sm font-semibold text-zinc-700 hover:text-red-700 transition-colors">
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

          <div className="lg:col-span-7 h-64 sm:h-96 lg:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl relative">
            {/* Google Static Map — Newark & Passaic NJ */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48374.23!2d-74.1241!3d40.8568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f97b3e3b3b3b%3A0x0!2sPassaic%2C%20NJ!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Talk N Fix Wireless locations in Newark and Passaic NJ"
            />
            <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-zinc-100 sm:max-w-xs pointer-events-none">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-500 text-sm font-bold">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span className="font-bold text-sm text-zinc-900">4.9 Star Rating</span>
              </div>
              <p className="text-xs text-zinc-500 italic">&ldquo;Best screen repair in Passaic! Done in 20 minutes.&rdquo; &mdash; Maria R.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
