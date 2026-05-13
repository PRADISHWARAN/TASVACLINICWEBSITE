import heroImg from "@/assets/2.webp";
import { buildWhatsAppLink } from "@/lib/site";
import { ArrowRight, MessageCircle, Sparkles, Star } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-24 pb-16 lg:pt-28">
      {/* Background */}
      <div className="absolute inset-0 bg-marble" />
      {/* Gold bokeh blobs — animated drift */}
      <div
        className="absolute -top-20 right-0 h-[600px] w-[600px] rounded-full opacity-25 blur-[120px] pointer-events-none animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.09 78), transparent)" }}
      />
      <div
        className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px] pointer-events-none animate-blob-delay"
        style={{ background: "radial-gradient(circle, oklch(0.74 0.1 78), transparent)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        {/* ── Left Column ── */}
        <div className="lg:col-span-6 reveal-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gradient-to-r from-cream to-sand/60 px-4 py-2 text-xs tracking-[0.2em] uppercase text-coffee shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-gold-shimmer">Advanced Dermatology · Bengaluru</span>
          </div>

          <h1 className="mt-5 font-display text-[2.1rem] leading-[1.08] text-coffee sm:text-5xl lg:text-7xl">
            Advanced Skin &amp; Hair Care
            <span className="block italic text-walnut/90">with personalized treatment.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            At Tasvaa, science meets serenity. Experience world-class dermatology in a calm,
            luxurious setting designed around your unique skin and hair journey.
          </p>

          {/* Google rating */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-2 sm:px-4 shadow-soft backdrop-blur-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-coffee">4.9 · 15,000+ Patients</span>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <a
              href={buildWhatsAppLink("Hi Tasvaa, I'd like to book a consultation.")}
              target="_blank"
              rel="noreferrer"
              className="animate-pulse-ring inline-flex items-center justify-center gap-2 rounded-full bg-coffee px-7 py-4 text-sm text-primary-foreground shadow-luxe hover:-translate-y-0.5 transition-transform"
            >
              <MessageCircle className="h-4 w-4" /> Book via WhatsApp
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-coffee/30 bg-white/50 px-7 py-4 text-sm text-coffee hover:bg-cream hover:border-coffee/50 transition backdrop-blur-sm"
            >
              Request Appointment <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Stats — count-up animation */}
          <dl className="mt-10 grid grid-cols-3 w-full max-w-[300px] sm:w-auto sm:max-w-none overflow-hidden rounded-2xl border border-border bg-white/60 shadow-card backdrop-blur-sm">
            {[
              { end: 8, suffix: "+", label: "Years" },
              { end: 15, suffix: "K+", label: "Patients" },
              { end: 20, suffix: "+", label: "Treatments" },
            ].map(({ end, suffix, label }, i) => (
              <div
                key={label}
                className={`px-3 py-3 sm:px-5 sm:py-4 text-center ${i > 0 ? "border-l border-border" : ""}`}
              >
                <dt className="font-display text-xl text-coffee sm:text-2xl lg:text-3xl">
                  <CountUp end={end} suffix={suffix} />
                </dt>
                <dd className="mt-0.5 text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Right Column ── */}
        <div className="lg:col-span-6 relative mt-4 lg:mt-0 reveal-right">
          {/* Floating treatment tags */}
          <div className="absolute top-[8%] -left-3 z-10 hidden sm:flex animate-float items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium text-coffee border border-gold/30 shadow-soft">
            <span>✨</span> Hydra Facial
          </div>
          <div className="absolute bottom-[30%] -right-3 z-10 hidden sm:flex animate-float [animation-delay:1s] items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium text-coffee border border-gold/30 shadow-soft">
            <span>💆</span> PRP Therapy
          </div>
          <div className="absolute top-[52%] -left-6 z-10 hidden lg:flex animate-float [animation-delay:1.8s] items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium text-coffee border border-gold/30 shadow-soft">
            <span>🌿</span> Laser Glow
          </div>

          {/* Gold glow aura */}
          <div className="absolute -inset-6 gradient-gold opacity-20 blur-3xl rounded-[3rem] pointer-events-none" />

          {/* Hero image */}
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxe border border-gold/20 hover-glow">
            <img
              src={heroImg}
              alt="Tasvaa Skin and Hair Clinic — Advanced Dermatology in Bengaluru"
              width={1600}
              height={1024}
              className="h-[360px] w-full object-cover sm:h-[500px] lg:h-[640px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/25 via-transparent to-transparent" />
          </div>

          {/* Consultations open badge */}
          <div className="absolute -bottom-5 left-4 sm:-bottom-6 sm:-left-4 glass rounded-2xl px-5 py-4 shadow-luxe border border-gold/30">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Today</p>
            </div>
            <p className="font-display text-lg text-coffee mt-0.5">Consultations Open</p>
          </div>
        </div>
      </div>
    </section>
  );
}
