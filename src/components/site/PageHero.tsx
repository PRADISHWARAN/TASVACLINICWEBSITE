import { useRouter } from "@/lib/use-router";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  const { navigate } = useRouter();
  return (
    <section className="relative overflow-hidden bg-coffee pt-20 pb-10 sm:pt-28 sm:pb-14 lg:pt-40 lg:pb-24">
      {/* Layered background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 0% 100%, oklch(0.55 0.07 55), transparent 55%), radial-gradient(ellipse at 100% 0%, oklch(0.28 0.04 40), transparent 55%)",
        }}
      />
      <div className="absolute inset-0 dots-pattern opacity-20" />
      <div
        className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.74 0.1 78 / 0.18), transparent 65%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.74 0.1 78 / 0.12), transparent 65%)", filter: "blur(60px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav className="mb-4 sm:mb-5 flex items-center gap-1.5 text-xs text-primary-foreground/50">
          <button
            onClick={() => navigate("/")}
            className="hover:text-primary-foreground/80 transition-colors min-h-[32px] flex items-center"
          >
            Home
          </button>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <span className="text-primary-foreground/80 font-medium">{title}</span>
        </nav>

        {/* Overline */}
        <span className="section-label text-gold-shimmer mb-3 block">
          Tasvaa Skin &amp; Hair Clinic
        </span>

        {/* Title */}
        <h1 className="font-display text-[2rem] sm:text-4xl lg:text-[3.75rem] text-primary-foreground leading-tight max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 sm:mt-5 text-primary-foreground/60 max-w-2xl leading-relaxed text-sm sm:text-base lg:text-lg">
            {subtitle}
          </p>
        )}

        {/* Gold accent */}
        <div className="mt-5 sm:mt-7 flex items-center gap-2">
          <div className="h-0.5 w-12 sm:w-14 bg-gradient-to-r from-[oklch(0.82_0.09_78)] to-[oklch(0.65_0.08_65)]" />
          <div className="h-0.5 w-3 sm:w-4 bg-[oklch(0.82_0.09_78)]/30 rounded-full" />
          <div className="h-0.5 w-2 bg-[oklch(0.82_0.09_78)]/15 rounded-full" />
        </div>
      </div>
    </section>
  );
}
