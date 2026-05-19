import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Doctor } from "@/components/site/Doctor";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Appointment } from "@/components/site/Appointment";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Blog } from "@/components/site/Blog";
import { FAQ } from "@/components/site/FAQ";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";

export default function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Doctor />
        <Testimonials />
        <Blog />
        <FAQ />
        <Gallery />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
