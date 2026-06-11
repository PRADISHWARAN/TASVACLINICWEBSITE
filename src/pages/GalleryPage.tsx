import { Gallery } from "@/components/site/Gallery";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import { useSEO } from "@/lib/useSEO";

const GALLERY_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://tasvaaskinandhairclinic.com/" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://tasvaaskinandhairclinic.com/gallery" },
  ],
});

export function GalleryPage() {
  useReveal();
  useSEO({
    title: "Clinic Gallery | Inside Tasvaa Skin & Hair Clinic | Bengaluru",
    description:
      "Take a look inside Tasvaa Skin & Hair Clinic — our reception, treatment rooms, equipment and more. Located in Sarjapur, Bengaluru.",
    path: "/gallery",
    schemaJson: GALLERY_SCHEMA,
  });
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
