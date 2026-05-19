import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import logoImg from "@/assets/Logo.jpeg";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Treatments" },
  { href: "#why", label: "Why Tasvaa" },
  { href: "#doctor", label: "Doctor" },
  { href: "#blog", label: "Blog" },
  { href: "#faq", label: "FAQ" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ backgroundColor: "#faf7f2", boxShadow: scrolled ? "0 1px 8px 0 rgba(0,0,0,0.07)" : "none" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 transition-shadow duration-300"
    >
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center">
          <img src={logoImg} alt="Tasvaa Skin & Hair Clinic" className="h-10 sm:h-12 w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-coffee/80 hover:text-coffee transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 text-sm text-coffee/80 hover:text-coffee"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <a
            href="#appointment"
            className="animate-pulse-ring rounded-full bg-coffee px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition shadow-soft"
          >
            Book Appointment
          </a>
        </div>

        <button
          className="lg:hidden text-coffee p-3 -mr-1 rounded-xl hover:bg-cream transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-coffee/90 py-3 text-base border-b border-border/40 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="rounded-full bg-coffee text-primary-foreground text-center py-3 mt-2"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
