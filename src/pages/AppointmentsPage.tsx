import { Appointment } from "@/components/site/Appointment";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import { useSEO } from "@/lib/useSEO";

const APPOINTMENTS_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://tasvaaskinandhairclinic.com/" },
    { "@type": "ListItem", position: 2, name: "Book Appointment", item: "https://tasvaaskinandhairclinic.com/appointments" },
  ],
});

export function AppointmentsPage() {
  useReveal();
  useSEO({
    title: "Book Appointment | Tasvaa Skin & Hair Clinic | Sarjapur, Bengaluru",
    description:
      "Book a consultation with Dr. Krithi Subhas at Tasvaa Skin & Hair Clinic, Sarjapur, Bengaluru. Call +91 96114 53707 or fill out our appointment form.",
    path: "/appointments",
    schemaJson: APPOINTMENTS_SCHEMA,
  });
  return (
    <div className="page-enter">
      <PageHero
        title="Book Appointment"
        subtitle="Schedule your consultation with Dr. Krithi Subhas. We'll confirm your slot via WhatsApp."
      />
      <Appointment />
    </div>
  );
}
