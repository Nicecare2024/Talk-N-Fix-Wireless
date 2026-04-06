import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 px-6 bg-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-gradient rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: "Plus Jakarta Sans" }}>
              Ready to fix your device?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Get an instant price estimate for your repair and walk in at your nearest location today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link href="/book" className="bg-white text-red-700 font-bold px-10 py-5 rounded-2xl text-lg shadow-2xl hover:scale-105 transition-transform">
                Get My Instant Quote
              </Link>
              <Link href="/locations" className="bg-transparent border-2 border-white/40 text-white font-bold px-10 py-5 rounded-2xl text-lg hover:bg-white/10 transition-all">
                Find a Store Near Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
