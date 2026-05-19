import { Syringe, Droplets, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import acneIcon from "@/assets/icons/Acne.jpeg";
import pigmentationIcon from "@/assets/icons/Pigmentation.jpeg";
import hairFallIcon from "@/assets/icons/HairFall.jpeg";
import chemicalPeelIcon from "@/assets/icons/Chemical Peel.jpeg";
import laserIcon from "@/assets/icons/Laser Hair reduction.jpeg";
import antiAgingIcon from "@/assets/icons/Anti aging.jpeg";
import dandruffIcon from "@/assets/icons/dandruff.jpeg";
import mediFacialIcon from "@/assets/icons/Medi facial.jpeg";
import scarIcon from "@/assets/icons/Scar.jpeg";
import dermatologyIcon from "@/assets/icons/Dermotology Consultation.jpeg";

type Service = { name: string; desc: string } & (
  | { imgSrc: string; Icon?: never }
  | { Icon: LucideIcon; imgSrc?: never }
);

const services: Service[] = [
  { imgSrc: acneIcon,         name: "Acne Treatment",            desc: "Clinical protocols for clear, balanced skin." },
  { imgSrc: pigmentationIcon, name: "Pigmentation Treatment",    desc: "Even, luminous tone with targeted therapy." },
  { imgSrc: hairFallIcon,     name: "Hair Fall Treatment",       desc: "Root-cause analysis & restorative care." },
  { Icon: Syringe,            name: "PRP Therapy",               desc: "Regenerative therapy for hair & skin." },
  { Icon: Droplets,           name: "Hydra Facial",              desc: "Deep hydration with instant glow." },
  { imgSrc: chemicalPeelIcon, name: "Chemical Peel",             desc: "Renewed, radiant skin texture." },
  { imgSrc: laserIcon,        name: "Laser Hair Reduction",      desc: "Smooth, lasting hair-free skin." },
  { Icon: Sparkles,           name: "Skin Rejuvenation",         desc: "Refresh tone, texture & radiance." },
  { imgSrc: antiAgingIcon,    name: "Anti Aging Treatment",      desc: "Lift, firm and restore youthful skin." },
  { imgSrc: dandruffIcon,     name: "Dandruff Treatment",        desc: "Healthy, flake-free, balanced scalp." },
  { imgSrc: mediFacialIcon,   name: "Medi Facials",              desc: "Doctor-led facials for visible results." },
  { imgSrc: scarIcon,         name: "Scar Treatment",            desc: "Smoother, refined skin surface." },
  { imgSrc: dermatologyIcon,  name: "Dermatology Consultation",  desc: "Personalized expert assessment." },
];

export function Services() {
  return (
    <section id="services" className="bg-cream/60 py-14 lg:py-28 relative">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-shimmer">Treatments</span>
          <h2 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
            Curated treatments for skin &amp; hair.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every treatment is doctor-led, evidence-based, and tailored to
            your concern, lifestyle and skin biology.
          </p>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground/70 sm:hidden">Swipe to explore →</p>
        <div className="mt-3 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 sm:mt-10 sm:grid sm:gap-5 sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <article
              key={service.name}
              className="reveal group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 sm:p-7 shadow-card hover-glow flex-none w-[240px] snap-start sm:w-auto cursor-default"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 gradient-warm" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-gold text-coffee shadow-soft transition-transform duration-300 group-hover:scale-110">
                  {service.imgSrc
                    ? <img src={service.imgSrc} alt={service.name} className="h-7 w-7 object-contain" />
                    : service.Icon && <service.Icon className="h-5 w-5 icon-hover" />
                  }
                </div>
                <h3 className="mt-5 font-display text-xl text-coffee">{service.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <a
                  href="#appointment"
                  className="mt-5 inline-flex text-xs uppercase tracking-widest text-coffee/80 hover:text-coffee"
                >
                  Enquire →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
