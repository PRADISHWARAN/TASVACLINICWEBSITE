import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export function ContactPage() {
  useReveal();
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
