import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Doctor } from "@/components/site/Doctor";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import { useSEO } from "@/lib/useSEO";

const ABOUT_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://tasvaaskinandhairclinic.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://tasvaaskinandhairclinic.com/about" },
  ],
});

export function AboutPage() {
  useReveal();
  useSEO({
    title: "About Us | Tasvaa Skin & Hair Clinic | Sarjapur, Bengaluru",
    description:
      "Learn about Tasvaa Skin & Hair Clinic and Dr. Krithi Subhas — a board-certified dermatologist with 8+ years of experience in advanced skin and hair care in Bengaluru.",
    path: "/about",
    schemaJson: ABOUT_SCHEMA,
  });
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
