"use client";
import { useState } from "react";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-700 font-bold tracking-[0.2em] text-sm mb-3 uppercase">FAQ</p>
          <h2 className="text-4xl font-extrabold text-zinc-900" style={{ fontFamily: "Plus Jakarta Sans" }}>
            Got Questions?
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-[#f3f3f3] rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-[#eeeeee] transition-colors"
              >
                <span className="text-zinc-900 font-semibold text-sm" style={{ fontFamily: "Plus Jakarta Sans" }}>{faq.q}</span>
                <span className={`text-red-700 text-xl flex-shrink-0 font-bold transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[#603e39] text-sm leading-relaxed border-t border-zinc-200 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
