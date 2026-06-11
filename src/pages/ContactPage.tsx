import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import { useSEO } from "@/lib/useSEO";

const CONTACT_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://tasvaclinicwebsite-1.onrender.com/" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://tasvaclinicwebsite-1.onrender.com/contact" },
  ],
});

export function ContactPage() {
  useReveal();
  useSEO({
    title: "Contact Us | Tasvaa Skin & Hair Clinic | Sarjapur, Bengaluru",
    description:
      "Get in touch with Tasvaa Skin & Hair Clinic. Visit us at KPTCL Layout, Sarjapur, Bengaluru, call +91 96114 53707, or reach us on WhatsApp.",
    path: "/contact",
    schemaJson: CONTACT_SCHEMA,
  });
  return (
    <div className="page-enter">
      <PageHero
        title="Contact Us"
        subtitle="Visit our clinic, call us, or reach us on WhatsApp — we're here to help."
      />
      <Contact />
      <FAQ />
    </div>
  );
}
