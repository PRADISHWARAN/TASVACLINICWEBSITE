import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { useRouter } from "@/lib/use-router";
import logoImg from "@/assets/Logo.jpeg";
import { trackPhoneClick } from "@/lib/analytics";

const quick = [
  { href: "/about",        label: "About Us" },
  { href: "/treatments",   label: "Treatments" },
  { href: "/gallery",      label: "Gallery" },
  { href: "/blog",         label: "Blog" },
  { href: "/appointments", label: "Book Appointment" },
  { href: "/contact",      label: "Contact" },
];

const treatments = [
  "Acne and acne scars treatment",
  "Chemical Peel",
  "Fractional CO2 Laser",
  "Laser Hair Reduction",
  "Microneedling",
  "Microneedling Radiofrequency ( MNRF)",
  "Laser tattoo removal",
  "Laser toning",
  "PRP/ GFC therapy",
  "Scar Revision",
  "Wart and Skin tag removal",
  "Mole removal",
  "Nail excision",
  "Cyst excision",
  "Hydrafacial treatment",
];

const treatmentColumns = [
  treatments.slice(0, 8),
  treatments.slice(8),
];

export function Footer() {
  const { navigate } = useRouter();
  return (
    <footer className="bg-coffee text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">

        {/* Mobile: stacked. Desktop: 4-column grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">

          {/* Brand — full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-3">
            <button onClick={() => navigate("/")} className="flex items-center">
              <img
                src={logoImg}
                alt="Tasvaa Skin & Hair Clinic"
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </button>
            <p className="mt-4 text-sm text-primary-foreground/65 leading-relaxed max-w-sm">
              Advanced skin and hair care — clinical results delivered with a
              personal, evidence-based approach.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook,  label: "Facebook" },
                { Icon: Youtube,   label: "YouTube" },
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
          <div className="lg:col-span-2">
            <h4 className="font-display text-base sm:text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quick.map((q) => (
                <li key={q.href}>
                  <button
                    onClick={() => navigate(q.href)}
                    className="text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors text-left min-h-[32px] flex items-center"
                  >
                    {q.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-base sm:text-lg mb-4">Treatments</h4>
            <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {treatmentColumns.map((column, index) => (
                <ul key={index} className="space-y-3">
                  {column.map((t) => (
                    <li key={t}>
                      <button
                        onClick={() => navigate("/treatments")}
                        className="text-left text-sm leading-snug text-primary-foreground/65 hover:text-primary-foreground transition-colors"
                      >
                        {t}
                      </button>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Contact — full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="font-display text-base sm:text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  onClick={() => trackPhoneClick(SITE.phone)}
                  className="flex items-center gap-3 text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors group"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/10">
                    <Phone className="h-3.5 w-3.5 text-gold" />
                  </div>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/10 mt-0.5">
                    <Mail className="h-3.5 w-3.5 text-gold" />
                  </div>
                  <span className="break-all">{SITE.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/65">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/10 mt-0.5">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                </div>
                <span className="leading-relaxed">{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Tasvaa Skin &amp; Hair Clinic. All rights reserved.</p>
          <p className="hidden sm:block">Crafted with care for radiant skin &amp; healthy hair.</p>
        </div>
      </div>
    </footer>
  );
}
