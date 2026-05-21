import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Doctor } from "@/components/site/Doctor";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export function AboutPage() {
  useReveal();
  return (
    <div className="page-enter">
      <PageHero
        title="About Us"
        subtitle="Where dermatology meets quiet luxury. Advanced skin and hair care delivered with a personal, evidence-based approach."
      />
      <About />
      <WhyChoose />
      <Doctor />
    </div>
  );
}
