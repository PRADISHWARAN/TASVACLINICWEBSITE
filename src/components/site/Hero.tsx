import heroImg from "@/assets/Main.JPG";
import { buildWhatsAppLink } from "@/lib/site";
import { ArrowRight, MessageCircle, Sparkles, Star } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { useRouter } from "@/lib/use-router";

export function Hero() {
  const { navigate } = useRouter();
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-x-hidden pt-16 sm:pt-20 pb-10 lg:pt-28 lg:pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-marble" />
      <div
        className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.09 78), transparent)" }}
      />
      <div
        className="absolute bottom-0 -left-20 h-[350px] w-[350px] rounded-full opacity-15 blur-[90px] pointer-events-none animate-blob-delay"
        style={{ background: "radial-gradient(circle, oklch(0.74 0.1 78), transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10">

          {/* ── Right column (image) — shows FIRST on mobile ── */}
          <div className="order-first lg:order-last lg:col-span-6 relative reveal-right">

            {/* Floating treatment tags — desktop only */}
            <div className="absolute top-[8%] -left-2 z-10 hidden lg:flex animate-float items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium text-coffee border border-gold/30 shadow-soft">
              <span>✨</span> Hydra Facial
            </div>
            <div className="absolute bottom-[28%] -right-2 z-10 hidden lg:flex animate-float [animation-delay:1s] items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium text-coffee border border-gold/30 shadow-soft">
              <span>💆</span> PRP Therapy
            </div>
            <div className="absolute top-[50%] -left-5 z-10 hidden lg:flex animate-float [animation-delay:1.8s] items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium text-coffee border border-gold/30 shadow-soft">
              <span>🌿</span> Laser Glow
            </div>

            {/* Gold glow aura */}
            <div className="absolute -inset-4 gradient-gold opacity-20 blur-3xl rounded-[3rem] pointer-events-none" />

            {/* Hero image */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] shadow-luxe border border-gold/20">
              <img
                src={heroImg}
                alt="Tasvaa Skin and Hair Clinic — Advanced Dermatology in Bengaluru"
                width={1600}
                height={1024}
                className="w-full object-cover"
                style={{ height: "clamp(200px, 56vw, 600px)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 via-transparent to-transparent" />

              {/* "Consultations Open" badge — overlaid on image bottom on mobile */}
              <div className="absolute bottom-3 left-3 right-3 sm:hidden">
                <div className="glass rounded-xl px-3 py-2.5 border border-gold/30 shadow-soft inline-flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-muted-foreground leading-none">Today</p>
                    <p className="font-display text-sm text-coffee mt-0.5 leading-none">Consultations Open</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop "Consultations Open" badge */}
            <div className="mt-4 hidden sm:inline-flex lg:absolute lg:mt-0 lg:-bottom-6 lg:-left-4 glass rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-luxe border border-gold/30">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground leading-none">Today</p>
                  <p className="font-display text-base sm:text-lg text-coffee mt-0.5">Consultations Open</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Left column (text) — shows SECOND on mobile ── */}
          <div className="order-last lg:order-first lg:col-span-6 reveal-left">

            {/* Overline badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gradient-to-r from-cream to-sand/60 px-3 py-1.5 text-[10px] sm:text-xs tracking-[0.18em] uppercase text-coffee shadow-soft">
              <Sparkles className="h-3 w-3 text-gold shrink-0" />
              <span className="text-gold-shimmer">Advanced Dermatology · Bengaluru</span>
            </div>

            {/* Headline */}
            <h1 className="mt-3 sm:mt-4 font-display leading-[1.08] text-coffee text-[1.75rem] xs:text-[2rem] sm:text-5xl lg:text-[4.25rem]">
              Advanced Skin &amp; Hair Care
              <span className="block italic text-walnut/90">with personalised treatment.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
              At Tasvaa, science meets serenity. Experience world-class dermatology
              in a calm, luxurious setting designed around your unique skin journey.
            </p>

            {/* Google rating */}
            <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-2 shadow-soft backdrop-blur-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-[11px] font-medium text-coffee">4.9 · 15,000+ Patients</span>
            </div>

            {/* CTAs */}
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href={buildWhatsAppLink("Hi Tasvaa, I'd like to book a consultation.")}
                target="_blank"
                rel="noreferrer"
                className="animate-pulse-ring inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-coffee px-6 py-4 sm:py-3.5 text-sm font-medium text-primary-foreground shadow-luxe active:scale-[0.98] transition-transform"
              >
                <MessageCircle className="h-4 w-4 shrink-0" /> Book via WhatsApp
              </a>
              <button
                onClick={() => navigate("/appointments")}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-coffee/30 bg-white/50 px-6 py-4 sm:py-3.5 text-sm text-coffee hover:bg-cream hover:border-coffee/50 transition backdrop-blur-sm active:scale-[0.98]"
              >
                Request Appointment <ArrowRight className="h-4 w-4 shrink-0" />
              </button>
            </div>

            {/* Stats */}
            <dl className="mt-5 sm:mt-8 grid grid-cols-3 w-full overflow-hidden rounded-2xl border border-border bg-white/60 shadow-card backdrop-blur-sm">
              {[
                { end: 8,  suffix: "+",  label: "Years" },
                { end: 15, suffix: "K+", label: "Patients" },
                { end: 20, suffix: "+",  label: "Treatments" },
              ].map(({ end, suffix, label }, i) => (
                <div
                  key={label}
                  className={`px-2 py-3 sm:px-5 sm:py-4 text-center ${i > 0 ? "border-l border-border" : ""}`}
                >
                  <dt className="font-display text-[1.35rem] sm:text-2xl lg:text-3xl text-coffee">
                    <CountUp end={end} suffix={suffix} />
                  </dt>
                  <dd className="mt-0.5 text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
}
