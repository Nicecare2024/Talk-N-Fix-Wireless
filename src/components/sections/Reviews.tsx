import { REVIEWS } from "@/lib/data";

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-zinc-900 text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center text-red-500 mb-4 gap-1">
            {"★★★★★".split("").map((s, i) => <span key={i} className="text-2xl sm:text-3xl">{s}</span>)}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3" style={{ fontFamily: "Plus Jakarta Sans" }}>
            Loved by 6,500+ Customers
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">Read what people say about our precision repair service.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-zinc-800/60 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-zinc-700/50">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0`}>
                  {r.initial}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-sm sm:text-base truncate">{r.name}</h4>
                  <p className="text-zinc-500 text-xs sm:text-sm truncate">{r.service}</p>
                </div>
              </div>
              <div className="flex text-red-500 mb-3 text-xs sm:text-sm">{"★★★★★"}</div>
              <p className="text-zinc-300 italic leading-relaxed text-xs sm:text-sm">&ldquo;{r.text}&rdquo;</p>
              <p className="text-zinc-600 text-xs mt-3">{r.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
