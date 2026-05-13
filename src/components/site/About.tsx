import aboutImg from "@/assets/3.webp";
import { Check } from "lucide-react";

const points = [
  "Advanced skin & hair treatments",
  "Experienced board-certified specialists",
  "Personalized consultation & care plans",
  "World-class hygiene standards",
  "Modern FDA-approved equipment",
  "Calm, luxury clinic environment",
];

export function About() {
  return (
    <section id="about" className="py-14 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div className="reveal-left relative">
          <div className="absolute -inset-4 gradient-warm rounded-[2rem] opacity-60 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-luxe hover-glow">
            <img
              src={aboutImg}
              alt="Skincare products at Tasvaa Skin and Hair Clinic, Bengaluru"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-[240px] sm:h-[380px] w-full object-cover lg:h-[620px]"
            />
          </div>
          <div className="absolute -right-4 bottom-8 hidden lg:block glass rounded-2xl px-6 py-5 border border-border/60 shadow-soft max-w-[220px]">
            <p className="font-display text-coffee text-2xl leading-tight">A sanctuary for your skin.</p>
          </div>
        </div>

        <div className="reveal-right">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-shimmer">About the Clinic</span>
          <h2 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
            Where dermatology meets quiet luxury.
          </h2>
          <div className="hairline my-8 max-w-xs" />
          <p className="text-muted-foreground leading-relaxed">
            Tasvaa Skin and Hair Clinic offers advanced dermatology and hair
            restoration care. Every detail — from our evidence-based protocols
            to our personalised approach — is designed to deliver visible results
            while making you feel completely at ease.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-coffee/90">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full gradient-gold shrink-0">
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
