import { useState } from "react";
import { z } from "zod";
import { buildWhatsAppLink } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import {
  CalendarDays, Clock, Phone, User, MessageSquare, Sparkles, ChevronDown,
} from "lucide-react";
import * as Popover from "@radix-ui/react-popover";

const timeSlots = [
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  "1:00 PM",  "1:30 PM",
  "2:00 PM",  "2:30 PM",
  "3:00 PM",  "3:30 PM",
  "4:00 PM",  "4:30 PM",
  "5:00 PM",  "5:30 PM",
  "6:00 PM",  "6:30 PM",
  "7:00 PM",  "7:30 PM",
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

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  treatment: z.string().min(1, "Choose a treatment"),
  message: z.string().max(500).optional().or(z.literal("")),
});

/* iOS Safari will auto-zoom if font-size < 16px — use 16px for all inputs */
const inputCls =
  "w-full rounded-xl border border-border bg-background/70 px-4 py-3.5 pl-11 text-base text-coffee placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold/40 transition leading-tight";

export function Appointment() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    trackEvent("appointment_request", {
      treatment: parsed.data.treatment,
      preferred_date: parsed.data.date,
    });
    const msg = `New Appointment Request

Name: ${parsed.data.name}
Phone: ${parsed.data.phone}
Preferred Date: ${parsed.data.date}
Preferred Time: ${parsed.data.time}
Treatment: ${parsed.data.treatment}
Message: ${parsed.data.message || "-"}`;
    window.open(buildWhatsAppLink(msg), "_blank");
  };

  return (
    <section id="appointment" className="py-12 sm:py-16 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-marble" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-12 items-start">

          {/* Left info panel */}
          <div className="lg:col-span-5 reveal">
            <span className="section-label text-gold-shimmer">Book a Visit</span>
            <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
              Request your appointment.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              Share a few details and our team will confirm your slot via
              WhatsApp. Same-day consultations subject to availability.
            </p>

            <div className="mt-6 space-y-4">
              {[
                { icon: Sparkles, text: "Personalised consultation with Dr. Krithi Subhas" },
                { icon: Clock, text: "Mon–Thu & Sat · 11am–8pm\nSun · 10:30am–1:30pm · Fri Closed" },
                { icon: Phone, text: "Instant WhatsApp confirmation" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full gradient-gold text-coffee mt-0.5">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-coffee/90 leading-relaxed whitespace-pre-line">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 reveal rounded-3xl border border-border bg-card/90 backdrop-blur p-5 sm:p-8 shadow-luxe"
          >
            {submitted && (
              <div className="mb-5 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
                ✓ Request sent! We'll confirm your slot via WhatsApp shortly.
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name}>
                <User className="field-icon" />
                <input
                  name="name"
                  placeholder="Your name"
                  className={inputCls}
                  maxLength={80}
                  autoComplete="name"
                />
              </Field>

              <Field label="Phone Number" error={errors.phone}>
                <Phone className="field-icon" />
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={inputCls}
                  maxLength={20}
                  autoComplete="tel"
                  inputMode="tel"
                />
              </Field>

              <Field label="Preferred Date" error={errors.date}>
                <CalendarDays className="field-icon" />
                <input
                  name="date"
                  type="date"
                  className={inputCls}
                  min={new Date().toISOString().split("T")[0]}
                />
              </Field>

              <Field label="Preferred Time" error={errors.time}>
                <input type="hidden" name="time" value={selectedTime} />
                <TimePicker value={selectedTime} onChange={setSelectedTime} />
              </Field>

              <Field label="Treatment Interested In" error={errors.treatment} className="sm:col-span-2">
                <Sparkles className="field-icon" />
                <select name="treatment" className={inputCls} defaultValue="">
                  <option value="" disabled>Select a treatment</option>
                  {treatments.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>

              <Field label="Message (optional)" error={errors.message} className="sm:col-span-2">
                <MessageSquare className="field-icon" />
                <textarea
                  name="message"
                  rows={3}
                  maxLength={500}
                  placeholder="Tell us briefly about your concern..."
                  className={inputCls + " pl-11 pt-3.5 resize-none"}
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-coffee px-7 py-4 text-base font-medium text-primary-foreground shadow-luxe hover:opacity-95 active:scale-[0.98] transition"
            >
              Send Request via WhatsApp
            </button>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              By submitting you agree to be contacted on the number provided.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function TimePicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const amSlots = timeSlots.filter((t) => t.includes("AM"));
  const pmSlots = timeSlots.filter((t) => t.includes("PM"));

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="w-full rounded-xl border border-border bg-background/70 px-4 py-3.5 pl-11 text-base text-left transition focus:outline-none focus:ring-2 focus:ring-gold/40 flex items-center justify-between"
        >
          <Clock className="field-icon" />
          <span className={value ? "text-coffee" : "text-muted-foreground/60"}>
            {value || "Select a time"}
          </span>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          align="start"
          collisionPadding={16}
          className="z-50 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-border bg-card shadow-luxe p-4 animate-in fade-in-0 zoom-in-95"
        >
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Pick a time</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold mb-2 text-center">Morning</p>
              <div className="grid grid-cols-1 gap-1.5">
                {amSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => { onChange(t); setOpen(false); }}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                      value === t
                        ? "bg-coffee text-primary-foreground shadow-sm"
                        : "bg-background hover:bg-gold/10 text-coffee border border-border"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold mb-2 text-center">Afternoon</p>
              <div className="grid grid-cols-1 gap-1.5 max-h-52 overflow-y-auto pr-0.5">
                {pmSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => { onChange(t); setOpen(false); }}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                      value === t
                        ? "bg-coffee text-primary-foreground shadow-sm"
                        : "bg-background hover:bg-gold/10 text-coffee border border-border"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Popover.Arrow className="fill-border" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function Field({
  label, children, error, className = "",
}: { label: string; children: React.ReactNode; error?: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
        {label}
      </span>
      <div className="relative">{children}</div>
      {error && (
        <span className="mt-1.5 block text-xs text-destructive font-medium">{error}</span>
      )}
    </label>
  );
}
