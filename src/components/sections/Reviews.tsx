import { REVIEWS } from "@/lib/data";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-zinc-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center text-red-500 mb-5 gap-1">
            {"★★★★★".split("").map((s, i) => <span key={i} className="text-3xl">{s}</span>)}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3" style={{ fontFamily: "Plus Jakarta Sans" }}>
            Loved by 6,500+ Customers
          </h2>
          <p className="text-zinc-400">Read what people say about our precision repair service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-zinc-800/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${r.color} flex items-center justify-center text-white font-bold`}>
                  {r.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white">{r.name}</h4>
                  <p className="text-zinc-500 text-sm">{r.service}</p>
                </div>
              </div>
              <div className="flex text-red-500 mb-4 text-sm">{"★★★★★"}</div>
              <p className="text-zinc-300 italic leading-relaxed text-sm">&ldquo;{r.text}&rdquo;</p>
              <p className="text-zinc-600 text-xs mt-4">{r.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
