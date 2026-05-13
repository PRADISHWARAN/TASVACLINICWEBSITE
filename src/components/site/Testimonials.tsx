import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    initials: "PS",
    gradient: "from-rose-300 to-pink-400",
    treatment: "Hydra Facial",
    text: "The clinic feels like a luxury spa, but the results are clinical-grade. My skin has never looked better.",
  },
  {
    name: "Ankit R.",
    initials: "AR",
    gradient: "from-amber-300 to-yellow-400",
    treatment: "PRP Therapy",
    text: "Genuine consultation, no upselling. Visible regrowth after 3 sessions. Highly recommend Dr. Krithi.",
  },
  {
    name: "Sneha K.",
    initials: "SK",
    gradient: "from-teal-300 to-emerald-400",
    treatment: "Pigmentation Treatment",
    text: "Tasvaa transformed my skin tone. The team is warm, professional and incredibly skilled.",
  },
  {
    name: "Rahul M.",
    initials: "RM",
    gradient: "from-blue-300 to-indigo-400",
    treatment: "Laser Hair Reduction",
    text: "Painless sessions, beautiful clinic, and real results. Worth every rupee.",
  },
  {
    name: "Meera T.",
    initials: "MT",
    gradient: "from-purple-300 to-violet-400",
    treatment: "Anti Aging",
    text: "I feel ten years younger. The personalised plan really works — natural, not overdone.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-14 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-marble opacity-70" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        {/* Google rating badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-border bg-white/80 px-5 py-2.5 shadow-soft backdrop-blur-sm mb-6">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-3.5 w-3.5 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-xs font-semibold text-coffee">4.9 on Google</span>
          <span className="h-3 w-px bg-border" />
          <span className="text-xs text-muted-foreground">200+ Reviews</span>
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-gold">Patient Stories</span>
        <h2 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
          Loved by those we care for.
        </h2>

        {/* Testimonial cards */}
        <div className="mt-10 relative h-[430px] sm:h-[290px]">
          {reviews.map((r, idx) => (
            <article
              key={r.name}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95 pointer-events-none"
              }`}
            >
              <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-luxe">
                {/* Avatar + quote icon */}
                <div className="flex items-center justify-center gap-4 mb-5">
                  <div
                    className={`h-12 w-12 rounded-full bg-gradient-to-br ${r.gradient} flex items-center justify-center text-white font-semibold text-sm shadow-soft`}
                  >
                    {r.initials}
                  </div>
                  <Quote className="h-7 w-7 text-gold" />
                </div>

                <p className="font-display text-xl sm:text-2xl text-coffee leading-relaxed">
                  "{r.text}"
                </p>

                <div className="mt-5 flex items-center justify-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="mt-3 text-sm text-coffee font-semibold">
                  {r.name}{" "}
                  <span className="font-normal text-muted-foreground">· {r.treatment}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Review ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === i ? "w-8 bg-coffee" : "w-2 bg-coffee/25 hover:bg-coffee/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
