import { Syringe, Droplets, Sparkles, Zap, Activity, Eraser, Scissors, CircleDot, Target, Hand } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import acneIcon from "@/assets/icons/Acne.jpeg";
import chemicalPeelIcon from "@/assets/icons/Chemical Peel.jpeg";
import laserIcon from "@/assets/icons/Laser Hair reduction.jpeg";
import mediFacialIcon from "@/assets/icons/Medi facial.jpeg";
import scarIcon from "@/assets/icons/Scar.jpeg";
import { useRouter } from "@/lib/use-router";

type Service = { name: string; desc: string } & (
  | { imgSrc: string; Icon?: never }
  | { Icon: LucideIcon; imgSrc?: never }
);

const services: Service[] = [
  { imgSrc: acneIcon,         name: "Acne and acne scars treatment",  desc: "Clinical protocols for clear skin & lasting scar reduction." },
  { imgSrc: chemicalPeelIcon, name: "Chemical Peel",                  desc: "Renewed radiance and texture with targeted exfoliation." },
  { Icon: Zap,                name: "Fractional CO2 Laser",           desc: "Precision resurfacing for scars, texture & fine lines." },
  { imgSrc: laserIcon,        name: "Laser Hair Reduction",           desc: "Smooth, long-lasting results with advanced laser." },
  { Icon: Syringe,            name: "Microneedling",                  desc: "Collagen induction for firmer, refined skin." },
  { Icon: Activity,           name: "Microneedling Radiofrequency ( MNRF)", desc: "Deep RF energy for skin tightening & rejuvenation." },
  { Icon: Eraser,             name: "Laser tattoo removal",           desc: "Safe, effective ink clearance across all skin tones." },
  { Icon: Sparkles,           name: "Laser toning",                   desc: "Even skin tone & a healthy glow with gentle laser." },
  { Icon: Droplets,           name: "PRP/ GFC therapy",               desc: "Growth factors for hair density & skin repair." },
  { imgSrc: scarIcon,         name: "Scar Revision",                  desc: "Smoother, refined skin surface treatment." },
  { Icon: Scissors,           name: "Wart and Skin tag removal",      desc: "Safe, precise removal with minimal downtime." },
  { Icon: CircleDot,          name: "Mole removal",                   desc: "Expert assessment and safe removal." },
  { Icon: Hand,               name: "Nail excision",                  desc: "Specialist nail procedure performed with care." },
  { Icon: Target,             name: "Cyst excision",                  desc: "Clean, precise excision under local anaesthetic." },
  { imgSrc: mediFacialIcon,   name: "Hydrafacial treatment",          desc: "Deep cleanse, exfoliate & hydrate in one session." },
];

export function Services() {
  const { navigate } = useRouter();
  return (
    <section id="services" className="section-alt py-14 lg:py-28 relative">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="section-label text-gold-shimmer">Treatments</span>
          <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
            Curated treatments for skin &amp; hair.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every treatment is doctor-led, evidence-based, and tailored to your
            concern, lifestyle and skin biology.
          </p>
        </div>

        {/* Responsive grid — 2 cols on mobile, 3 on md, 4 on xl */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <article
              key={service.name}
              className="reveal group relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card hover-glow cursor-default"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 gradient-warm pointer-events-none" />

              <div className="relative p-4 sm:p-5 lg:p-6">
                {/* Icon */}
                <div className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-xl gradient-gold text-coffee shadow-soft transition-transform duration-300 group-hover:scale-110">
                  {service.imgSrc
                    ? <img src={service.imgSrc} alt={service.name} className="h-6 w-6 sm:h-7 sm:w-7 object-contain" />
                    : service.Icon && <service.Icon className="h-5 w-5 icon-hover" />
                  }
                </div>

                {/* Name */}
                <h3 className="mt-4 font-display text-base sm:text-lg lg:text-xl text-coffee leading-snug">
                  {service.name}
                </h3>

                {/* Description — hide on very small screens */}
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed hidden xs:block">
                  {service.desc}
                </p>

                {/* CTA */}
                <button
                  onClick={() => navigate("/appointments")}
                  className="mt-4 inline-flex items-center gap-1 text-[10px] sm:text-xs uppercase tracking-widest text-coffee/70 hover:text-coffee transition-colors"
                >
                  Enquire →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
