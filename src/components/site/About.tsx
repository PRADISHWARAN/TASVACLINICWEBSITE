import aboutImg from "@/assets/Main2.JPG";
import { Check } from "lucide-react";

const points = [
  "Advanced skin & hair treatments",
  "Experienced board-certified specialists",
  "Personalised consultation & care plans",
  "World-class hygiene standards",
  "Modern FDA-approved equipment",
  "Calm, luxury clinic environment",
];

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.09 78 / 0.3), transparent 65%)", filter: "blur(100px)" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">

        {/* Image */}
        <div className="reveal-left relative">
          <div className="absolute -inset-4 gradient-warm rounded-[2rem] opacity-50 blur-2xl pointer-events-none" />
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] shadow-luxe hover-glow">
            <img
              src={aboutImg}
              alt="Skincare products at Tasvaa Skin and Hair Clinic, Bengaluru"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full object-cover"
              style={{ height: "clamp(220px, 65vw, 640px)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/20 via-transparent to-transparent" />
          </div>
          {/* Floating quote card — desktop only */}
          <div className="absolute -right-4 bottom-8 hidden lg:block glass rounded-2xl px-6 py-5 border border-border/60 shadow-soft max-w-[220px]">
            <p className="font-display text-coffee text-xl leading-tight">A sanctuary for your skin.</p>
            <div className="mt-2 h-0.5 w-10 bg-gradient-to-r from-[oklch(0.82_0.09_78)] to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="reveal-right">
          <span className="section-label text-gold-shimmer">About the Clinic</span>
          <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl leading-tight">
            Where dermatology meets quiet luxury.
          </h2>
          <div className="hairline my-5 sm:my-7 max-w-xs" />
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Tasvaa Skin and Hair Clinic offers advanced dermatology and hair
            restoration care. Every detail — from our evidence-based protocols
            to our personalised approach — is designed to deliver visible results
            while making you feel completely at ease.
          </p>

          <ul className="mt-6 sm:mt-8 grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-coffee/90">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full gradient-gold">
                  <Check className="h-3 w-3 text-coffee" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
