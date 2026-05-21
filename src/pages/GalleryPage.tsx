import { Gallery } from "@/components/site/Gallery";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export function GalleryPage() {
  useReveal();
  return (
    <div className="page-enter">
      <PageHero
        title="Gallery"
        subtitle="A glimpse inside Tasvaa — our clinic, our team, and our results."
      />
      <Gallery />
    </div>
  );
}
