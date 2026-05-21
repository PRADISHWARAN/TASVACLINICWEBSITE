import { Cpu, UserCheck, Award, Building2, ShieldCheck, HeartHandshake } from "lucide-react";

const items = [
  { icon: Cpu,          title: "Advanced Technology",  desc: "FDA-approved equipment and the latest dermatology innovations." },
  { icon: UserCheck,    title: "Personalised Care",    desc: "Treatments crafted around your skin biology and goals." },
  { icon: Award,        title: "Expert Specialists",   desc: "Board-certified doctors with proven aesthetic expertise." },
  { icon: Building2,    title: "Premium Environment",  desc: "A calm, thoughtfully designed space built for your comfort." },
  { icon: ShieldCheck,  title: "Safe Procedures",      desc: "Strict hygiene and global safety protocols, every visit." },
  { icon: HeartHandshake, title: "Trusted Care",       desc: "Honest advice, transparent pricing and long-term support." },
];

export function WhyChoose() {
  return (
    <section id="why" className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.09 78 / 0.3), transparent 65%)", filter: "blur(100px)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">

          {/* Left copy */}
          <div className="lg:col-span-4 reveal-left">
            <span className="section-label text-gold-shimmer">Why Tasvaa</span>
            <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
              A standard of care you can feel.
            </h2>
            <div className="hairline my-5 sm:my-6 max-w-xs" />
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              By combining evidence-based treatments with a patient-first approach,
              we create a skincare experience that is deeply personalised.
            </p>
          </div>

          {/* Cards — 2 col on mobile, 2 col on sm, 2 col on lg */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="reveal group rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-card hover-glow relative overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Number watermark */}
                <span className="absolute -right-1 -top-2 font-display text-5xl sm:text-6xl text-coffee/5 select-none pointer-events-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl gradient-gold text-coffee shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 icon-hover" />
                </div>

                <h3 className="mt-3 sm:mt-4 font-display text-base sm:text-lg text-coffee leading-snug">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
