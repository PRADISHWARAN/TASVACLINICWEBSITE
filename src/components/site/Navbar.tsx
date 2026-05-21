import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { useRouter } from "@/lib/use-router";
import logoImg from "@/assets/Logo.jpeg";

const links = [
  { href: "/about",       label: "About" },
  { href: "/treatments",  label: "Treatments" },
  { href: "/skin-guide",  label: "Skin Guide" },
  { href: "/gallery",     label: "Gallery" },
  { href: "/blog",        label: "Blog" },
  { href: "/contact",     label: "Contact" },
];

export function Navbar() {
  const { path, navigate } = useRouter();
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

  useEffect(() => { setOpen(false); }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href: string) => { navigate(href); setOpen(false); };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "border-stone-200/80 shadow-[0_1px_16px_0_rgba(0,0,0,0.08)]" : "border-transparent"
        }`}
        style={{ backgroundColor: "#faf7f2" }}
      >
        {/* Scroll progress bar */}
        <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 lg:py-4 lg:px-10">

          {/* Logo */}
          <button onClick={() => go("/")} className="flex items-center shrink-0 min-h-[44px]" aria-label="Home">
            <img src={logoImg} alt="Tasvaa Skin & Hair Clinic" className="h-9 sm:h-11 w-auto object-contain" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className={`relative px-3.5 py-2 text-sm rounded-lg transition-colors ${
                  path === l.href
                    ? "text-coffee font-medium bg-cream"
                    : "text-coffee/70 hover:text-coffee hover:bg-cream/60"
                }`}
              >
                {l.label}
                {path === l.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-3 rounded-full bg-gold" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-coffee/70 hover:text-coffee transition-colors"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <button
              onClick={() => go("/appointments")}
              className="animate-pulse-ring rounded-full bg-coffee px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition shadow-soft"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile: call icon + hamburger */}
          <div className="flex lg:hidden items-center gap-1">
            <a
              href={`tel:${SITE.phoneRaw}`}
              aria-label="Call us"
              className="grid h-11 w-11 place-items-center rounded-xl text-coffee hover:bg-cream transition"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              className="grid h-11 w-11 place-items-center rounded-xl text-coffee hover:bg-cream transition"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ backgroundColor: "#faf7f2" }}
        >
          {/* Top bar matches header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
            <button onClick={() => go("/")} aria-label="Home">
              <img src={logoImg} alt="Tasvaa" className="h-9 w-auto object-contain" />
            </button>
            <button
              className="grid h-11 w-11 place-items-center rounded-xl text-coffee hover:bg-cream transition"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="px-4 pt-4 pb-6 space-y-1 animate-slide-down">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 text-base font-medium transition-colors ${
                  path === l.href
                    ? "bg-cream text-coffee"
                    : "text-coffee/75 hover:bg-cream/50 hover:text-coffee"
                }`}
              >
                <span>{l.label}</span>
                {path === l.href
                  ? <span className="h-2 w-2 rounded-full bg-gold" />
                  : <ChevronRight className="h-4 w-4 text-coffee/30" />
                }
              </button>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 pt-4 border-t border-border/40 bg-gradient-to-t from-[#faf7f2] to-transparent space-y-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full rounded-2xl border border-border py-4 text-sm font-medium text-coffee hover:bg-cream transition"
            >
              <Phone className="h-4 w-4 text-gold" /> {SITE.phone}
            </a>
            <button
              onClick={() => go("/appointments")}
              className="w-full rounded-full bg-coffee py-4 text-base font-medium text-primary-foreground shadow-luxe hover:opacity-90 transition"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </>
  );
}
