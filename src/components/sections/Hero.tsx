"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const STATS = [
  { value: 6500, suffix: "+", label: "Google Reviews" },
  { value: 5, suffix: "", label: "Locations" },
  { value: 30, suffix: "min", label: "Avg Repair" },
  { value: 1000, suffix: "+", label: "Repairs / Month" },
];

function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = target / (duration / 16);
      const tick = () => {
        start = Math.min(start + step, target);
        el.textContent = Math.floor(start).toLocaleString();
        if (start < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return ref;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useCountUp(value);
  return (
    <div>
      <div className="flex items-baseline gap-0.5">
        <span ref={ref} className="text-2xl font-black text-zinc-900" style={{ fontFamily: "Plus Jakarta Sans" }}>0</span>
        <span className="text-lg font-bold text-red-700">{suffix}</span>
      </div>
      <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mt-0.5">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden px-6 pt-20 bg-[#f9f9f9]">
      {/* Subtle bg orb */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left */}
        <div className="z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-[#dbe1ff] text-[#00174b] text-[0.75rem] font-bold tracking-widest mb-6 uppercase">
            Premium Mobile Care
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.05] mb-6" style={{ fontFamily: "Plus Jakarta Sans" }}>
            Expert Mobile<br />Repairs in{" "}
            <span className="text-red-700">30–45 Minutes</span>
          </h1>
          <p className="text-lg text-[#603e39] max-w-xl mb-10 leading-relaxed">
            Precision engineering meets rapid service. Our certified technicians use laboratory-grade components to restore your device to factory perfection while you wait.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/book" className="bg-primary-gradient text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:brightness-110 transition-all active:scale-95 text-center">
              Get Instant Quote
            </Link>
            <Link href="/locations" className="bg-white text-zinc-900 font-semibold px-8 py-4 rounded-xl text-lg border border-[#ebbbb4]/30 flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              Find a Store
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-5">
            <div className="flex -space-x-2">
              {["bg-zinc-300", "bg-zinc-400", "bg-zinc-500"].map((c, i) => (
                <div key={i} className={`w-9 h-9 rounded-full border-2 border-white ${c}`} />
              ))}
            </div>
            <div>
              <div className="flex text-red-600 text-sm">{"★★★★★"}</div>
              <p className="text-zinc-500 text-sm">6,500+ repairs completed</p>
            </div>
          </div>
        </div>

        {/* Right — image with glass card */}
        <div className="relative hidden lg:block">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-red-600/5 rounded-full blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl float-anim">
            {/* Placeholder image — replace with real photo */}
            <div className="w-full h-[480px] bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
              <div className="text-center text-zinc-500">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="5" y="2" width="14" height="20" rx="2" strokeWidth={1}/><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={2}/></svg>
                <p className="text-sm font-medium opacity-50">Add repair shop photo here</p>
              </div>
            </div>
            {/* Glass overlay card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg">
              <p className="text-zinc-900 font-bold mb-1" style={{ fontFamily: "Plus Jakarta Sans" }}>Precision Guaranteed</p>
              <p className="text-zinc-600 text-sm">We use genuine parts and advanced micro-soldering tools for all flagship models.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-zinc-100 py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(s => <StatItem key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
