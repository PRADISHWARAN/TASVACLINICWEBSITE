import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE, buildWhatsAppLink } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export function Contact() {
  return (
    <section id="contact" className="bg-cream/60 py-14 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-shimmer">Get in Touch</span>
          <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
            Visit our clinic.
          </h2>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-5 lg:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            {[
              { icon: Phone, label: "Call Us", value: SITE.phone, href: `tel:${SITE.phoneRaw}`, event: "click_call" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: buildWhatsAppLink("Hi Tasvaa, I'd like to know more."), event: "click_whatsapp" },
              { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, event: "click_email" },
              { icon: MapPin, label: "Address", value: SITE.address },
              { icon: Clock, label: "Working Hours", value: "Mon–Thu & Sat: 11am–8pm\nSun: 10:30am–1:30pm  ·  Fri: Closed" },
            ].map(({ icon: Icon, label, value, href, event: evName }, i) => {
              const content = (
                <div
                  className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-card hover:shadow-luxe transition reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full gradient-gold text-coffee shrink-0">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="mt-1 text-coffee text-sm sm:text-base break-words whitespace-pre-line">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  onClick={() => evName && trackEvent(evName, { label })}
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="overflow-hidden rounded-3xl border border-border shadow-luxe h-[240px] sm:h-[360px] lg:h-full lg:min-h-[480px]">
              <iframe
                title="Tasvaa Clinic location on Google Maps"
                src={SITE.mapsEmbed}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
