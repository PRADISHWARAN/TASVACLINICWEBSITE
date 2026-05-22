import { ArrowRight } from "lucide-react";
import { Services } from "@/components/site/Services";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import { useRouter } from "@/lib/use-router";

function TreatmentsCtaBanner() {
  const { navigate } = useRouter();
  return (
    <section className="py-14 lg:py-20 bg-cream/60 relative">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center reveal">
        <h2 className="font-display text-3xl text-coffee sm:text-4xl">
          Not sure which treatment is right for you?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
          Book a personalised consultation with Dr. Krithi Subhas. She'll assess your skin
          and recommend the best treatment plan for your goals.
        </p>
        <button
          onClick={() => navigate("/appointments")}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-coffee px-8 py-4 text-sm text-primary-foreground hover:opacity-90 transition shadow-soft animate-pulse-ring"
        >
          Book a Consultation <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

export function TreatmentsPage() {
  useReveal();
  return (
    <div className="page-enter">
      <PageHero
        title="Our Treatments"
        subtitle="15 doctor-led, evidence-based treatments for every skin and hair concern."
      />
      <Services />
      <TreatmentsCtaBanner />
    </div>
  );
}
