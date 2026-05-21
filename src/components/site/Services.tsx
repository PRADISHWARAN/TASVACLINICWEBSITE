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
import { useRouter } from "@/lib/use-router";

type Service = { name: string; desc: string } & (
  | { imgSrc: string; Icon?: never }
  | { Icon: LucideIcon; imgSrc?: never }
);

const services: Service[] = [
  { imgSrc: acneIcon,         name: "Acne Treatment",           desc: "Clinical protocols for clear, balanced skin." },
  { imgSrc: pigmentationIcon, name: "Pigmentation Treatment",   desc: "Even, luminous tone with targeted therapy." },
  { imgSrc: hairFallIcon,     name: "Hair Fall Treatment",      desc: "Root-cause analysis & restorative care." },
  { Icon: Syringe,            name: "PRP Therapy",              desc: "Regenerative therapy for hair & skin." },
  { Icon: Droplets,           name: "Hydra Facial",             desc: "Deep hydration with instant glow." },
  { imgSrc: chemicalPeelIcon, name: "Chemical Peel",            desc: "Renewed, radiant skin texture." },
  { imgSrc: laserIcon,        name: "Laser Hair Reduction",     desc: "Smooth, lasting hair-free skin." },
  { Icon: Sparkles,           name: "Skin Rejuvenation",        desc: "Refresh tone, texture & radiance." },
  { imgSrc: antiAgingIcon,    name: "Anti Aging Treatment",     desc: "Lift, firm and restore youthful skin." },
  { imgSrc: dandruffIcon,     name: "Dandruff Treatment",       desc: "Healthy, flake-free, balanced scalp." },
  { imgSrc: mediFacialIcon,   name: "Medi Facials",             desc: "Doctor-led facials for visible results." },
  { imgSrc: scarIcon,         name: "Scar Treatment",           desc: "Smoother, refined skin surface." },
  { imgSrc: dermatologyIcon,  name: "Dermatology Consultation", desc: "Personalised expert assessment." },
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
