import { Blog } from "@/components/site/Blog";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import { useSEO } from "@/lib/useSEO";

const BLOG_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://tasvaclinicwebsite-1.onrender.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://tasvaclinicwebsite-1.onrender.com/blog" },
  ],
});

export function BlogPage() {
  useReveal();
  useSEO({
    title: "Skin & Hair Care Blog | Expert Dermatology Tips | Tasvaa Clinic",
    description:
      "Read expert tips, treatment insights and skin care advice from the dermatology team at Tasvaa Skin & Hair Clinic, Bengaluru.",
    path: "/blog",
    schemaJson: BLOG_SCHEMA,
  });
  return (
    <div className="page-enter">
      <PageHero
        title="Blog"
        subtitle="Expert tips, treatment insights and skin care advice from our dermatology team."
      />
      <Blog />
    </div>
  );
}
