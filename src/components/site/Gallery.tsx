import g1 from "@/assets/Reception.JPG";
import g2 from "@/assets/DSC_9806.JPG";
import g3 from "@/assets/DSC_9800.JPG";
import g4 from "@/assets/Eqp.JPG";

const items = [
  { src: g1, alt: "Tasvaa Clinic reception lounge" },
  { src: g2, alt: "Tasvaa Clinic" },
  { src: g3, alt: "Tasvaa Clinic" },
  { src: g4, alt: "Tasvaa Clinic treatment room" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-shimmer">The Space</span>
          <h2 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
            Step inside Tasvaa.
          </h2>
          <p className="mt-5 text-muted-foreground">
            A calm, considered space designed to make every visit feel restorative.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-card hover-glow ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-[220px] sm:h-[320px] lg:h-[420px] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground/60 italic">
          More photos coming soon.
        </p>
      </div>
    </section>
  );
}
