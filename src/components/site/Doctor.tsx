import doctorImg from "@/assets/Doctor.jpg";
import { GraduationCap, Award, ArrowRight } from "lucide-react";
import { useRouter } from "@/lib/use-router";

export function Doctor() {
  const { navigate } = useRouter();
  return (
    <section id="doctor" className="bg-cream/50 py-12 sm:py-16 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div
        className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.09 78 / 0.3), transparent 65%)", filter: "blur(80px)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-12 items-center">

          {/* Image */}
          <div className="lg:col-span-5 reveal-left">
            <div className="relative">
              <div className="absolute -inset-4 sm:-inset-5 gradient-gold opacity-20 rounded-[2rem] blur-2xl pointer-events-none" />
              <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-border shadow-luxe hover-glow">
                <img
                  src={doctorImg}
                  alt="Dr. Krithi Subhas — Consultant Dermatologist at Tasvaa Skin and Hair Clinic, Bengaluru"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full object-cover object-top"
                  style={{ height: "clamp(260px, 70vw, 420px)" }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 reveal-right">
            <span className="section-label text-gold-shimmer">Meet Your Specialist</span>
            <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
              Dr. Krithi Subhas
            </h2>
            <p className="mt-1.5 text-muted-foreground text-sm sm:text-base">
              Consultant Dermatologist
            </p>
            <div className="hairline my-6 sm:my-8 max-w-xs" />

            {/* Credential cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: GraduationCap, label: "Qualification", value: "MBBS, MD (Derm), DNB" },
                { icon: Award,         label: "Experience",    value: "8+ Years" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="group rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-card hover-glow">
                  <div className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl gradient-gold text-coffee mb-3">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 icon-hover" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="mt-1 text-coffee font-medium text-sm sm:text-base">{value}</p>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["Board Certified Dermatologist", "IADVL Member"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-cream px-3 py-1.5 text-[11px] font-medium text-coffee"
                >
                  <span className="text-gold">✓</span> {badge}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              Dr. Krithi Subhas is known for her precise, science-led approach to
              dermatology. She has helped thousands of patients restore healthy skin
              and hair with bespoke, evidence-based protocols delivered in a warm,
              personal setting.
            </p>

            <button
              onClick={() => navigate("/appointments")}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-coffee px-6 py-3.5 text-sm text-primary-foreground hover:opacity-90 transition shadow-soft"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
