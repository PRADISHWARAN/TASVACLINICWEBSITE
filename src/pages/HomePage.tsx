import { MessageCircle, ArrowRight, Sparkles, Syringe, Droplets, Star, Zap, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Testimonials } from "@/components/site/Testimonials";
import { useReveal } from "@/hooks/use-reveal";
import { useRouter } from "@/lib/use-router";
import { buildWhatsAppLink } from "@/lib/site";
import { useSEO } from "@/lib/useSEO";
import { trackWhatsAppClick } from "@/lib/analytics";
import acneIcon from "@/assets/icons/Acne.jpeg";
import chemicalPeelIcon from "@/assets/icons/Chemical Peel.jpeg";
import laserIcon from "@/assets/icons/Laser Hair reduction.jpeg";
import mediFacialIcon from "@/assets/icons/Medi facial.jpeg";
import scarIcon from "@/assets/icons/Scar.jpeg";

type FeaturedTreatment = { name: string; tag: string } & (
  | { imgSrc: string; Icon?: never }
  | { Icon: LucideIcon; imgSrc?: never }
);

const featured: FeaturedTreatment[] = [
  { imgSrc: acneIcon,         name: "Acne and acne scars treatment", tag: "Most Requested" },
  { imgSrc: chemicalPeelIcon, name: "Chemical Peel",                 tag: "Instant Radiance" },
  { Icon: Zap,                name: "Fractional CO2 Laser",          tag: "Skin Resurfacing" },
  { imgSrc: laserIcon,        name: "Laser Hair Reduction",          tag: "Long Lasting" },
  { Icon: Syringe,            name: "Microneedling",                 tag: "Collagen Boost" },
  { Icon: Activity,           name: "Microneedling Radiofrequency ( MNRF)", tag: "Skin Tightening" },
  { Icon: Droplets,           name: "PRP/ GFC therapy",              tag: "Regenerative" },
  { imgSrc: mediFacialIcon,   name: "Hydrafacial treatment",         tag: "Deep Hydration" },
];

function FeaturedTreatments() {
  const { navigate } = useRouter();
  return (
    <section className="py-10 sm:py-14 lg:py-24 section-alt relative">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-10 reveal">
          <div>
            <span className="section-label text-gold-shimmer">Treatments</span>
            <h2 className="mt-2 sm:mt-3 font-display text-2xl sm:text-3xl text-coffee sm:text-4xl lg:text-5xl">
              Popular treatments.
            </h2>
          </div>
          <button
            onClick={() => navigate("/treatments")}
            className="inline-flex items-center gap-1.5 text-sm text-coffee/80 hover:text-coffee transition-colors self-start sm:self-auto shrink-0 min-h-[44px]"
          >
            View all 15 <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Treatment cards — 2 col mobile, 4 col desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {featured.map((t, i) => (
            <button
              key={t.name}
              onClick={() => navigate("/treatments")}
              className="reveal group relative overflow-hidden text-left rounded-2xl border border-border/70 bg-card p-4 sm:p-5 shadow-card hover-glow transition-all"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 gradient-warm rounded-2xl pointer-events-none" />
              <div className="relative">
                <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl gradient-gold text-coffee shadow-soft mb-3 transition-transform duration-300 group-hover:scale-110">
                  {t.imgSrc
                    ? <img src={t.imgSrc} alt={t.name} width={28} height={28} loading="lazy" className="h-6 w-6 sm:h-7 sm:w-7 object-contain" />
                    : t.Icon && <t.Icon className="h-5 w-5 icon-hover" />
                  }
                </div>
                <span className="inline-block rounded-full bg-gold/10 border border-gold/30 px-2 py-0.5 text-[9px] sm:text-[10px] uppercase tracking-wider text-coffee/70 mb-2">
                  {t.tag}
                </span>
                <p className="font-display text-sm sm:text-base text-coffee leading-snug">
                  {t.name}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-8 text-center reveal">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-card">
            <Sparkles className="h-4 w-4 text-gold shrink-0" />
            <p className="text-sm text-muted-foreground">
              Plus 7 more treatments —
              <button
                onClick={() => navigate("/treatments")}
                className="ml-1 text-coffee font-medium hover:underline"
              >
                explore all 15 →
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProofStrip() {
  const stats = [
    { value: "8+",   label: "Years" },
    { value: "15K+", label: "Patients" },
    { value: "15",   label: "Treatments" },
    { value: "4.9★", label: "Rating" },
  ];
  return (
    <div className="bg-coffee py-7 sm:py-10 relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stat-card text-center px-2 sm:px-4 py-3 sm:py-5 ${
                i < stats.length - 1 ? "border-r border-primary-foreground/10" : ""
              }`}
            >
              <p className="font-display text-xl sm:text-3xl lg:text-4xl text-primary-foreground leading-none">
                {s.value}
              </p>
              <p className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-widest text-primary-foreground/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhyTasvaaStrip() {
  const { navigate } = useRouter();
  const points = [
    "Board-certified dermatologist",
    "FDA-approved equipment",
    "No upselling — honest advice",
    "Personalised treatment plans",
  ];
  return (
    <section className="py-10 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.09 78 / 0.3), transparent 65%)", filter: "blur(80px)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="reveal-left">
            <span className="section-label text-gold-shimmer">Why Choose Us</span>
            <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
              Dermatology done right.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              At Tasvaa, every decision is guided by evidence, every treatment
              personalised to you. No generic plans. No unnecessary procedures.
            </p>
            <ul className="mt-7 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-coffee">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full gradient-gold">
                    <Star className="h-2.5 w-2.5 text-coffee fill-coffee" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2 rounded-full bg-coffee px-6 py-3 text-sm text-primary-foreground hover:opacity-90 transition shadow-soft"
              >
                About the Clinic <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate("/appointments")}
                className="inline-flex items-center gap-2 rounded-full border border-coffee/30 px-6 py-3 text-sm text-coffee hover:bg-cream transition"
              >
                Book Consultation
              </button>
            </div>
          </div>

          {/* Stats card */}
          <div className="reveal-right grid grid-cols-2 gap-4">
            {[
              { num: "8+",   label: "Years of experience",    sub: "Dr. Krithi Subhas" },
              { num: "15K+", label: "Patients treated",       sub: "& counting" },
              { num: "4.9",  label: "Google rating",          sub: "200+ reviews" },
              { num: "15",   label: "Specialist treatments",  sub: "All skin & hair" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-card hover-glow text-center"
              >
                <p className="font-display text-3xl sm:text-4xl text-coffee">{s.num}</p>
                <p className="mt-1.5 text-xs font-medium text-coffee/80 leading-snug">{s.label}</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeCta() {
  const { navigate } = useRouter();
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-coffee relative overflow-hidden">
      <div
        className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.74 0.1 78 / 0.2), transparent 60%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-0 -left-20 h-[350px] w-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.74 0.1 78 / 0.12), transparent 60%)", filter: "blur(70px)" }}
      />
      <div className="absolute inset-0 dots-pattern opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
        <span className="section-label text-primary-foreground/60 mb-4 block">
          Ready to Begin?
        </span>
        <h2 className="font-display text-3xl text-primary-foreground sm:text-4xl lg:text-5xl max-w-2xl mx-auto leading-tight">
          Your skin journey starts here.
        </h2>
        <p className="mt-5 text-primary-foreground/65 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          Book a consultation with Dr. Krithi Subhas and experience personalised
          care in a calm, premium clinic environment.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/appointments")}
            className="animate-pulse-ring inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-sm font-medium text-coffee hover:opacity-90 transition shadow-luxe active:scale-[0.98]"
          >
            Book Appointment
          </button>
          <a
            href={buildWhatsAppLink("Hi Tasvaa, I'd like to book a consultation.")}
            target="_blank"
            rel="noreferrer"
            onClick={trackWhatsAppClick}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-4 text-sm text-primary-foreground hover:bg-primary-foreground/10 transition active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  useReveal();
  useSEO({
    title: "Tasvaa Skin & Hair Clinic | Best Dermatologist in Bengaluru | Sarjapur",
    description:
      "Expert skin & hair treatments in Sarjapur, Bengaluru. Consult Dr. Krithi Subhas — MBBS, MD, DNB Dermatologist. Acne, pigmentation, PRP therapy, laser hair reduction, hair fall treatment & more. Book now.",
    path: "/",
    ogTitle: "Tasvaa Skin & Hair Clinic | Best Dermatologist in Bengaluru",
    ogDescription:
      "Advanced skin & hair treatments in Sarjapur, Bengaluru. Acne, PRP, laser, pigmentation, hydra facials & more — doctor-led, personalised care.",
  });
  return (
    <div className="page-enter">
      <Hero />
      <SocialProofStrip />
      <FeaturedTreatments />
      <WhyTasvaaStrip />
      <Testimonials />
      <HomeCta />
    </div>
  );
}
