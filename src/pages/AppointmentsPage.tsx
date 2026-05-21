import { Appointment } from "@/components/site/Appointment";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";

export function AppointmentsPage() {
  useReveal();
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
