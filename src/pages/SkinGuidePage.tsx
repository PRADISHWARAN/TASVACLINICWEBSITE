import { SkinGuide } from "@/components/site/SkinGuide";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export function SkinGuidePage() {
  useReveal();
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
