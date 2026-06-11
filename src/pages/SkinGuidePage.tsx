import { SkinGuide } from "@/components/site/SkinGuide";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import { useSEO } from "@/lib/useSEO";

const SKIN_GUIDE_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://tasvaaskinandhairclinic.com/" },
    { "@type": "ListItem", position: 2, name: "Know Your Skin", item: "https://tasvaaskinandhairclinic.com/skin-guide" },
  ],
});

export function SkinGuidePage() {
  useReveal();
  useSEO({
    title: "Skin & Hair Guide | Dermatology Tips | Tasvaa Clinic Bengaluru",
    description:
      "Expert guides on skin and hair conditions — causes, prevention and when to see a dermatologist. From the team at Tasvaa Skin & Hair Clinic, Sarjapur, Bengaluru.",
    path: "/skin-guide",
    schemaJson: SKIN_GUIDE_SCHEMA,
  });
  return (
    <div className="page-enter">
      <PageHero
        title="Know Your Skin"
        subtitle="Expert guides on common skin and hair conditions — what causes them, how to prevent them, and when to see a dermatologist."
      />
      <SkinGuide />
    </div>
  );
}
