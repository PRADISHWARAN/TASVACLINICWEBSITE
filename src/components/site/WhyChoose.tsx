import { Cpu, UserCheck, Award, Building2, ShieldCheck, HeartHandshake } from "lucide-react";

const items = [
  { icon: Cpu, title: "Advanced Technology", desc: "FDA-approved equipment and the latest dermatology innovations." },
  { icon: UserCheck, title: "Personalized Care", desc: "Treatments crafted around your skin biology and goals." },
  { icon: Award, title: "Experienced Specialists", desc: "Board-certified doctors with proven aesthetic expertise." },
  { icon: Building2, title: "Premium Environment", desc: "A calm, thoughtfully designed space built around your comfort." },
  { icon: ShieldCheck, title: "Safe Procedures", desc: "Strict hygiene and global safety protocols, every visit." },
  { icon: HeartHandshake, title: "Trusted Care", desc: "Honest advice, transparent pricing and long-term support." },
];

export function WhyChoose() {
  return (
    <section id="why" className="py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 reveal-left">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-shimmer">Why Tasvaa</span>
            <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
              A standard of care you can feel.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              By combining evidence-based treatments with a patient-first approach,
              we create a skincare experience that is deeply personalised.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="reveal group rounded-2xl border border-border bg-card p-4 sm:p-7 shadow-card hover-glow relative overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="absolute -right-1 -top-3 font-display text-6xl sm:text-7xl text-coffee/5 select-none pointer-events-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="grid h-11 w-11 place-items-center rounded-full gradient-gold text-coffee shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 icon-hover" />
                </div>
                <h3 className="mt-4 font-display text-lg sm:text-xl text-coffee">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
