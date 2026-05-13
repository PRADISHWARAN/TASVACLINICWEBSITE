import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

const quick = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Treatments" },
  { href: "#doctor", label: "Doctor" },
  { href: "#faq", label: "FAQ" },
  { href: "#blog", label: "Blog" },
  { href: "#gallery", label: "Gallery" },
  { href: "#appointment", label: "Book" },
  { href: "#contact", label: "Contact" },
];

const treatments = [
  "Acne Treatment", "Hair Fall Treatment", "PRP Therapy",
  "Hydra Facial", "Laser Hair Reduction", "Anti Aging",
];

export function Footer() {
  return (
    <footer className="bg-coffee text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-16">
        {/* Top grid */}
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-12">

          {/* Brand — full width on mobile, half on sm, 4/12 on lg */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full gradient-gold text-coffee font-display text-lg font-semibold shrink-0">T</span>
              <span className="font-display text-2xl">Tasvaa</span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Advanced skin and hair care — clinical results delivered with a
              personal, evidence-based approach.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-display text-base sm:text-lg">Quick Links</h4>
            <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm text-primary-foreground/70">
              {quick.map((q) => (
                <li key={q.href}>
                  <a href={q.href} className="hover:text-primary-foreground transition-colors">
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="font-display text-base sm:text-lg">Treatments</h4>
            <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm text-primary-foreground/70">
              {treatments.map((t) => (
                <li key={t}>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — full width on small, single col on sm */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3">
            <h4 className="font-display text-base sm:text-lg">Contact</h4>
            <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-primary-foreground transition-colors">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary-foreground transition-colors break-all">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Tasvaa Skin &amp; Hair Clinic. All rights reserved.</p>
          <p>Crafted with care for radiant skin &amp; healthy hair.</p>
        </div>
      </div>
    </footer>
  );
}
