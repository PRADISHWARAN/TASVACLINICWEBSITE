import g1 from "@/assets/Reception.JPG";
import g2 from "@/assets/DSC_9806.JPG";
import g3 from "@/assets/DSC_9800.JPG";
import g4 from "@/assets/Eqp.JPG";
import g5 from "@/assets/Pic1.JPG";
import g6 from "@/assets/Pic2.JPG";
import g7 from "@/assets/Pic3.JPG";

const items = [
  { src: g1, alt: "Tasvaa Clinic reception lounge", span: "lg:col-span-2", h: "h-[240px] sm:h-[300px] lg:h-[380px]" },
  { src: g2, alt: "Tasvaa Clinic interior",          span: "lg:col-span-1", h: "h-[240px] sm:h-[300px] lg:h-[380px]" },
  { src: g3, alt: "Tasvaa Clinic corridor",          span: "lg:col-span-1", h: "h-[220px] sm:h-[280px] lg:h-[320px]" },
  { src: g4, alt: "Tasvaa Clinic treatment room",    span: "lg:col-span-2", h: "h-[220px] sm:h-[280px] lg:h-[320px]" },
  { src: g5, alt: "Tasvaa Clinic",                   span: "lg:col-span-1", h: "h-[200px] sm:h-[260px] lg:h-[300px]" },
  { src: g6, alt: "Tasvaa Clinic",                   span: "lg:col-span-2", h: "h-[200px] sm:h-[260px] lg:h-[300px]" },
  { src: g7, alt: "Tasvaa Clinic",                   span: "lg:col-span-3", h: "h-[220px] sm:h-[300px] lg:h-[340px]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-14 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="section-label text-gold-shimmer">The Space</span>
          <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
            Step inside Tasvaa.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A calm, considered space designed to make every visit feel restorative.
          </p>
        </div>

        {/* Editorial grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-card ${it.span} ${
                i % 2 === 0 ? "reveal-left" : "reveal-right"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className={`${it.h} w-full object-cover img-reveal-overlay`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/60 via-coffee/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Caption */}
              <figcaption className="absolute bottom-0 left-0 right-0 px-5 py-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-primary-foreground/90 text-xs uppercase tracking-widest font-medium">
                  {it.alt}
                </p>
              </figcaption>
              {/* Gold corner accent */}
              <div className="absolute top-3 right-3 h-5 w-5 rounded-full border border-gold/40 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground/50 italic">
          More photos coming soon — follow us on Instagram for the latest.
        </p>
      </div>
    </section>
  );
}
