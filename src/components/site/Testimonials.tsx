import { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

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

function ReviewCard({
  r,
  size = "lg",
}: {
  r: (typeof reviews)[0];
  size?: "sm" | "lg";
}) {
  return (
    <div
      className={`relative rounded-3xl border border-border bg-card shadow-card hover-glow flex flex-col h-full overflow-hidden group ${
        size === "sm" ? "p-5" : "p-6 sm:p-8"
      }`}
    >
      {/* Subtle warm gradient on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: "linear-gradient(135deg, oklch(0.96 0.018 85 / 0.6), transparent)" }} />

      {/* Large quote mark */}
      <Quote
        className={`relative shrink-0 text-gold/20 mb-3 ${size === "sm" ? "h-6 w-6" : "h-8 w-8"}`}
      />

      <p
        className={`relative font-display text-coffee leading-relaxed flex-1 ${
          size === "sm" ? "text-base" : "text-lg sm:text-xl"
        }`}
      >
        "{r.text}"
      </p>

      {/* Stars */}
      <div className="relative mt-5 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, k) => (
          <Star key={k} className={`fill-gold text-gold ${size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"}`} />
        ))}
      </div>

      {/* Author */}
      <div className="relative mt-4 flex items-center gap-3">
        <div
          className={`rounded-full bg-gradient-to-br ${r.gradient} flex items-center justify-center text-white font-semibold shadow-soft shrink-0 ${
            size === "sm" ? "h-9 w-9 text-xs" : "h-11 w-11 text-sm"
          }`}
        >
          {r.initials}
        </div>
        <div>
          <p className={`text-coffee font-semibold leading-none ${size === "sm" ? "text-sm" : "text-sm"}`}>
            {r.name}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{r.treatment}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((v) => (v + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIdx((v) => (v - 1 + reviews.length) % reviews.length);
  const next = () => setIdx((v) => (v + 1) % reviews.length);

  return (
    <section className="py-16 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-marble opacity-70" />
      <div
        className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.09 78 / 0.4), transparent 60%)", filter: "blur(80px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal-scale inline-flex items-center gap-3 rounded-full border border-border bg-white/80 px-5 py-2.5 shadow-soft backdrop-blur-sm mb-6">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-xs font-semibold text-coffee">4.9 on Google</span>
            <span className="h-3 w-px bg-border" />
            <span className="text-xs text-muted-foreground">200+ Reviews</span>
          </div>

          <span className="reveal block section-label text-gold-shimmer">Patient Stories</span>
          <h2 className="reveal mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
            Loved by those we care for.
          </h2>
        </div>

        {/* ── Desktop grid (lg+) ── */}
        <div className="hidden lg:grid grid-cols-3 gap-5 reveal">
          {reviews.slice(0, 3).map((r) => (
            <ReviewCard key={r.name} r={r} size="lg" />
          ))}
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-5 mt-5 max-w-2xl mx-auto reveal">
          {reviews.slice(3).map((r) => (
            <ReviewCard key={r.name} r={r} size="lg" />
          ))}
        </div>

        {/* ── Mobile carousel (< lg) ── */}
        <div className="lg:hidden">
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === idx
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-95 pointer-events-none"
                }`}
              >
                <ReviewCard r={r} size="sm" />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              onClick={prev}
              aria-label="Previous"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card hover:bg-cream transition shadow-card"
            >
              <ChevronLeft className="h-4 w-4 text-coffee" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === idx ? "w-8 bg-coffee" : "w-2 bg-coffee/25 hover:bg-coffee/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card hover:bg-cream transition shadow-card"
            >
              <ChevronRight className="h-4 w-4 text-coffee" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
