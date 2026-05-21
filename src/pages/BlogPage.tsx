import { Blog } from "@/components/site/Blog";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export function BlogPage() {
  useReveal();
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
