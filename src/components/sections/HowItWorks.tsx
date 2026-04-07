const STEPS = [
  { num: "1", title: "Book Online", desc: "Select your device and issue. Get an instant preliminary quote and walk in at your convenience." },
  { num: "2", title: "Drop Off", desc: "Visit any of our 5 NJ locations. Our team will check your device in within 5 minutes." },
  { num: "3", title: "Expert Repair", desc: "Certified technicians perform the repair using OEM-grade parts in our clean workspace." },
  { num: "4", title: "Quality Check", desc: "Every device undergoes a 20-point functionality test before handoff with your new warranty." },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-zinc-900 text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-red-500 font-bold tracking-[0.2em] text-xs sm:text-sm mb-3 uppercase">The Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "Plus Jakarta Sans" }}>
            Fixed in 4 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/10" />
          {STEPS.map((step, i) => (
            <div key={i} className="relative z-10 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-700 text-white flex items-center justify-center font-black text-lg sm:text-xl mb-5 sm:mb-8 border-4 border-zinc-900 shadow-lg group-hover:scale-110 transition-transform" style={{ fontFamily: "Plus Jakarta Sans" }}>
                {step.num}
              </div>
              <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "Plus Jakarta Sans" }}>{step.title}</h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
