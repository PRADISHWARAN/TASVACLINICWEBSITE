import { useState } from "react";
import doctorImg from "@/assets/Doctor.jpg";
import {
  GraduationCap,
  Award,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Users,
  Calendar,
  Phone,
  MapPin,
  ArrowRight,
  Plus,
  Minus,
  ChevronRight,
  Check,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useRouter } from "@/lib/use-router";
import { useSEO } from "@/lib/useSEO";
import { SITE } from "@/lib/site";
import { trackPhoneClick } from "@/lib/analytics";

const CANONICAL_PATH = "/dr-krithi-subhas-chandra-dermatologist-bengaluru";
const CANONICAL_URL = `https://tasvaaskinandhairclinic.com${CANONICAL_PATH}`;

const DR_KRITHI_SCHEMA = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://tasvaaskinandhairclinic.com/" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://tasvaaskinandhairclinic.com/about" },
      { "@type": "ListItem", position: 3, name: "Dr. Krithi Subhas Chandra", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": ["Physician", "Person"],
    "@id": `${CANONICAL_URL}#dr-krithi`,
    name: "Dr. Krithi Subhas Chandra",
    alternateName: [
      "Dr. Krithi Subhas",
      "Dr. Kriti Subhas",
      "Dr. Kriti Subhas Chandra",
      "Dr. Krithi",
      "Dr. Kriti",
    ],
    givenName: "Krithi",
    additionalName: "Subhas",
    familyName: "Chandra",
    honorificPrefix: "Dr.",
    jobTitle: "Consultant Dermatologist & Cosmetologist",
    description:
      "Dr. Krithi Subhas Chandra is a Consultant Dermatologist and Cosmetologist at Tasvaa Skin and Hair Clinic in Bengaluru, Karnataka. She has 8+ years of experience in clinical and aesthetic dermatology, specialising in comprehensive skin, hair, and nail care.",
    image: "https://tasvaaskinandhairclinic.com/og-image.jpg",
    url: CANONICAL_URL,
    gender: "Female",
    nationality: "Indian",
    medicalSpecialty: ["Dermatology", "Cosmetology", "Trichology"],
    knowsLanguage: ["English", "Hindi", "Kannada"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "MD in Dermatology, Venereology & Leprosy",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "DNB (Diplomate of National Board) — Dermatology",
      },
    ],
    memberOf: [
      {
        "@type": "MedicalOrganization",
        name: "Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)",
      },
    ],
    worksFor: { "@id": "https://tasvaaskinandhairclinic.com/#clinic" },
    workLocation: {
      "@type": "MedicalClinic",
      name: "Tasvaa Skin and Hair Clinic",
      url: "https://tasvaaskinandhairclinic.com/",
      telephone: "+91-96114-53707",
      address: {
        "@type": "PostalAddress",
        streetAddress: "First Floor, HEGmel House, 26/A, 1st Cross Rd, KPTCL Layout",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560035",
        addressCountry: "IN",
      },
    },
    availableService: [
      { "@type": "MedicalTherapy", name: "Acne & Acne Scars Treatment" },
      { "@type": "MedicalTherapy", name: "Pigmentation & Melasma Treatment" },
      { "@type": "MedicalTherapy", name: "Hair Fall Treatment" },
      { "@type": "MedicalTherapy", name: "PRP / GFC Therapy" },
      { "@type": "MedicalTherapy", name: "Laser Hair Reduction" },
      { "@type": "MedicalTherapy", name: "Chemical Peels" },
      { "@type": "MedicalTherapy", name: "Hydra Facial" },
      { "@type": "MedicalTherapy", name: "Microneedling & MNRF" },
      { "@type": "MedicalTherapy", name: "Anti-Ageing Treatment" },
      { "@type": "MedicalTherapy", name: "Mole, Wart & Skin Tag Removal" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Dr. Krithi Subhas Chandra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Krithi Subhas Chandra is a Consultant Dermatologist and Cosmetologist at Tasvaa Skin and Hair Clinic in Bengaluru, Karnataka. She holds MBBS, MD (Dermatology) and DNB qualifications and has over 8 years of experience in medical and aesthetic dermatology.",
        },
      },
      {
        "@type": "Question",
        name: "Where does Dr. Krithi Subhas practice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Krithi Subhas practices at Tasvaa Skin and Hair Clinic, First Floor, HEGmel House, 26/A, 1st Cross Rd, KPTCL Layout, Bengaluru, Karnataka 560035 — in the Sarjapur area.",
        },
      },
      {
        "@type": "Question",
        name: "What are Dr. Krithi Subhas's qualifications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Krithi Subhas holds MBBS, MD in Dermatology, Venereology & Leprosy, and DNB (Dermatology). She is a member of the Indian Association of Dermatologists, Venereologists and Leprologists (IADVL).",
        },
      },
      {
        "@type": "Question",
        name: "What conditions does Dr. Krithi Subhas treat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Krithi Subhas treats acne, acne scars, pigmentation, melasma, hair fall, dandruff, eczema, psoriasis, skin infections, moles, warts, and nail conditions. She also performs advanced aesthetic procedures like PRP, laser hair reduction, chemical peels, hydra facials, microneedling and anti-ageing treatments.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book an appointment with Dr. Krithi Subhas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book an appointment with Dr. Krithi Subhas at Tasvaa Skin and Hair Clinic by calling +91-96114-53707, messaging on WhatsApp, or using the appointment form on tasvaaskinandhairclinic.com.",
        },
      },
      {
        "@type": "Question",
        name: "How many years of experience does Dr. Krithi Subhas have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Krithi Subhas has over 8 years of experience in clinical and aesthetic dermatology, treating skin, hair and nail conditions in patients of all age groups.",
        },
      },
    ],
  },
]);

const qualifications = [
  {
    icon: GraduationCap,
    title: "MBBS",
    detail: "Bachelor of Medicine, Bachelor of Surgery",
  },
  {
    icon: GraduationCap,
    title: "MD — Dermatology",
    detail: "Dermatology, Venereology & Leprosy",
  },
  {
    icon: Award,
    title: "DNB — Dermatology",
    detail: "Diplomate of National Board",
  },
  {
    icon: ShieldCheck,
    title: "IADVL Member",
    detail: "Indian Association of Dermatologists, Venereologists & Leprologists",
  },
];

const expertise = [
  {
    icon: Sparkles,
    title: "Medical Dermatology",
    points: [
      "Acne & acne scar treatment",
      "Pigmentation, melasma & dark spots",
      "Eczema, psoriasis & rosacea",
      "Skin infections & allergies",
      "Nail disorders & fungal conditions",
    ],
  },
  {
    icon: HeartPulse,
    title: "Hair & Trichology",
    points: [
      "Hair fall & thinning evaluation",
      "PRP & GFC therapy for hair restoration",
      "Dandruff & scalp conditions",
      "Female & male pattern hair loss",
      "Post-illness & post-partum hair loss",
    ],
  },
  {
    icon: Stethoscope,
    title: "Aesthetic & Laser",
    points: [
      "Laser hair reduction",
      "Chemical peels & skin brightening",
      "Hydra facial & medi facials",
      "Microneedling & MNRF",
      "Anti-ageing & rejuvenation",
    ],
  },
  {
    icon: Users,
    title: "Minor Procedures",
    points: [
      "Mole, wart & skin tag removal",
      "Cyst & lipoma excision",
      "Nail excision",
      "Scar revision",
      "Laser tattoo removal",
    ],
  },
];

const approach = [
  "Evidence-based, science-first protocols",
  "Personalised plans tailored to your skin & hair",
  "Realistic expectations — no over-promising",
  "Safe, FDA-approved technology only",
  "Warm, unhurried consultations",
  "Ongoing support after treatment",
];

const faqs = [
  {
    q: "Who is Dr. Krithi Subhas Chandra?",
    a: "Dr. Krithi Subhas Chandra is a Consultant Dermatologist and Cosmetologist at Tasvaa Skin and Hair Clinic, Bengaluru. She holds MBBS, MD (Dermatology) and DNB qualifications, with 8+ years of experience across medical and aesthetic dermatology.",
  },
  {
    q: "Where does Dr. Krithi Subhas practice?",
    a: "Dr. Krithi consults at Tasvaa Skin and Hair Clinic — First Floor, HEGmel House, 26/A, 1st Cross Rd, KPTCL Layout, Bengaluru, Karnataka 560035, in the Sarjapur area of South-East Bengaluru.",
  },
  {
    q: "What skin & hair conditions does Dr. Krithi treat?",
    a: "Dr. Krithi treats acne and acne scars, pigmentation, melasma, hair fall, dandruff, eczema, psoriasis, skin infections, moles, warts, and nail disorders. She also performs PRP, laser hair reduction, chemical peels, hydra facials, microneedling and anti-ageing treatments.",
  },
  {
    q: "How do I book an appointment with Dr. Krithi Subhas?",
    a: "You can book by calling +91-96114-53707, messaging on WhatsApp, or using the appointment form on this website. The clinic team will confirm your slot within a few hours.",
  },
  {
    q: "What are Dr. Krithi's consultation hours?",
    a: "Consultations are available Monday–Thursday and Saturday from 11 am to 8 pm, and Sunday from 10:30 am to 1:30 pm. The clinic is closed on Fridays.",
  },
  {
    q: "Does Dr. Krithi treat both medical and cosmetic concerns?",
    a: "Yes. Dr. Krithi combines medical dermatology (acne, pigmentation, hair fall, skin diseases) with aesthetic dermatology (PRP, lasers, peels, hydra facials) so patients get comprehensive skin and hair care in one place.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[oklch(0.74_0.1_78/0.15)] last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full py-4 text-left gap-4 group"
      >
        <span className="text-sm sm:text-base font-medium text-coffee group-hover:text-coffee/80 transition-colors">
          {q}
        </span>
        {open ? (
          <Minus className="h-4 w-4 text-coffee/50 flex-shrink-0" />
        ) : (
          <Plus className="h-4 w-4 text-coffee/50 flex-shrink-0" />
        )}
      </button>
      {open && (
        <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export function DrKrithiPage() {
  useReveal();
  const { navigate } = useRouter();
  useSEO({
    title:
      "Dr. Krithi Subhas Chandra — Dermatologist in Bengaluru | Tasvaa Skin & Hair Clinic",
    description:
      "Meet Dr. Krithi Subhas Chandra — Consultant Dermatologist & Cosmetologist at Tasvaa Skin and Hair Clinic, Sarjapur, Bengaluru. MBBS, MD (Dermatology), DNB. 8+ years of expertise in acne, pigmentation, hair fall, PRP, laser & aesthetic dermatology.",
    path: CANONICAL_PATH,
    ogTitle: "Dr. Krithi Subhas Chandra | Dermatologist in Bengaluru",
    ogDescription:
      "Consultant Dermatologist & Cosmetologist at Tasvaa Skin and Hair Clinic. 8+ years of experience in skin, hair and aesthetic dermatology in Bengaluru.",
    schemaJson: DR_KRITHI_SCHEMA,
  });

  return (
    <div className="page-enter">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-coffee pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 0% 100%, oklch(0.55 0.07 55), transparent 55%), radial-gradient(ellipse at 100% 0%, oklch(0.28 0.04 40), transparent 55%)",
          }}
        />
        <div className="absolute inset-0 dots-pattern opacity-20" />
        <div
          className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.74 0.1 78 / 0.18), transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav
            className="mb-4 sm:mb-5 flex flex-wrap items-center gap-1.5 text-xs text-primary-foreground/50"
            aria-label="Breadcrumb"
          >
            <button
              onClick={() => navigate("/")}
              className="hover:text-primary-foreground/80 transition-colors min-h-[32px] flex items-center"
            >
              Home
            </button>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <button
              onClick={() => navigate("/about")}
              className="hover:text-primary-foreground/80 transition-colors min-h-[32px] flex items-center"
            >
              About
            </button>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-primary-foreground/80 font-medium">
              Dr. Krithi Subhas Chandra
            </span>
          </nav>

          <div className="grid gap-8 lg:gap-14 lg:grid-cols-12 items-center">
            {/* Text */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <span className="section-label text-gold-shimmer">
                Meet Your Dermatologist
              </span>
              <h1 className="mt-3 font-display text-[2rem] sm:text-4xl lg:text-[3.5rem] text-primary-foreground leading-tight">
                Dr. Krithi Subhas Chandra
              </h1>
              <p className="mt-2 text-primary-foreground/70 text-sm sm:text-base">
                Consultant Dermatologist &amp; Cosmetologist · Bengaluru
              </p>

              <p className="mt-5 text-primary-foreground/60 max-w-2xl text-sm sm:text-base leading-relaxed">
                Dr. Krithi Subhas Chandra is a Consultant Dermatologist and
                Cosmetologist practicing at Tasvaa Skin and Hair Clinic in
                Bengaluru, Karnataka. With 8+ years of experience in clinical
                and aesthetic dermatology, she specialises in comprehensive
                skin, hair, and nail care — combining evidence-based medicine
                with a warm, personal approach.
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "MBBS · MD (Derm) · DNB",
                  "8+ Years Experience",
                  "IADVL Member",
                ].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.82_0.09_78/0.5)] bg-white/10 px-3 py-1.5 text-[11px] font-medium text-primary-foreground/90"
                  >
                    <span className="text-[oklch(0.82_0.09_78)]">✓</span> {b}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/appointments")}
                  className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-coffee px-6 py-3.5 text-sm font-medium hover:bg-primary-foreground/90 transition shadow-soft"
                >
                  Book a Consultation <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  onClick={() => trackPhoneClick(SITE.phone)}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-white/10 px-6 py-3.5 text-sm text-primary-foreground hover:bg-white/20 transition"
                >
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </div>

              {/* Gold accent */}
              <div className="mt-7 flex items-center gap-2">
                <div className="h-0.5 w-12 sm:w-14 bg-gradient-to-r from-[oklch(0.82_0.09_78)] to-[oklch(0.65_0.08_65)]" />
                <div className="h-0.5 w-3 sm:w-4 bg-[oklch(0.82_0.09_78)]/30 rounded-full" />
                <div className="h-0.5 w-2 bg-[oklch(0.82_0.09_78)]/15 rounded-full" />
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 sm:-inset-5 gradient-gold opacity-20 rounded-[2rem] blur-2xl pointer-events-none" />
                <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/10 shadow-luxe">
                  <img
                    src={doctorImg}
                    alt="Dr. Krithi Subhas Chandra — Consultant Dermatologist and Cosmetologist at Tasvaa Skin and Hair Clinic, Bengaluru"
                    width={1024}
                    height={1024}
                    className="w-full object-cover object-top"
                    style={{ height: "clamp(280px, 60vw, 480px)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Bio ─────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="section-label text-gold-shimmer">About Dr. Krithi</span>
            <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-[2.75rem] leading-tight">
              A dermatologist who listens first, then treats.
            </h2>
            <div className="hairline my-6 sm:my-8 max-w-xs mx-auto" />
          </div>

          <div className="space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto reveal">
            <p>
              Dr. Krithi Subhas Chandra is a Consultant Dermatologist and
              Cosmetologist based in Bengaluru, Karnataka. She practices at{" "}
              <strong className="text-coffee/85">
                Tasvaa Skin and Hair Clinic
              </strong>{" "}
              in Sarjapur, where she leads a science-first, patient-centred
              approach to skin, hair and nail care.
            </p>
            <p>
              After completing her MBBS, MD in Dermatology, Venereology &amp;
              Leprosy, and DNB, Dr. Krithi has spent 8+ years treating patients
              across a wide range of concerns — from persistent acne, stubborn
              pigmentation and hair loss, to advanced aesthetic and laser
              procedures. She is a member of the{" "}
              <strong className="text-coffee/85">
                Indian Association of Dermatologists, Venereologists and
                Leprologists (IADVL)
              </strong>
              , and continues to stay updated with the latest advances in
              dermatology.
            </p>
            <p>
              Patients often describe her consultations as unhurried and
              thorough. Dr. Krithi believes that great skin and hair outcomes
              begin with an accurate diagnosis — not one-size-fits-all
              protocols. Every treatment plan at Tasvaa Clinic is customised
              based on the patient's skin type, medical history, lifestyle and
              long-term goals.
            </p>
          </div>
        </div>
      </section>

      {/* ── Qualifications ──────────────────────────────────────────── */}
      <section className="bg-cream/50 py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 hairline" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="section-label text-gold-shimmer">Credentials</span>
            <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl leading-tight">
              Qualifications &amp; Memberships
            </h2>
            <div className="hairline my-6 max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {qualifications.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-card hover-glow"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-gold text-coffee mb-4">
                  <Icon className="h-5 w-5 icon-hover" />
                </div>
                <p className="font-display text-coffee text-lg leading-tight">
                  {title}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise ───────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none opacity-15"
          style={{
            background:
              "radial-gradient(circle, oklch(0.82 0.09 78 / 0.3), transparent 65%)",
            filter: "blur(100px)",
          }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="section-label text-gold-shimmer">Areas of Expertise</span>
            <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl leading-tight">
              What Dr. Krithi treats
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              From medical dermatology to advanced aesthetic procedures — all
              under one roof at Tasvaa Skin and Hair Clinic.
            </p>
            <div className="hairline my-6 max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {expertise.map(({ icon: Icon, title, points }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-card hover-glow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl gradient-gold text-coffee">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl text-coffee">{title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.74_0.1_78)] flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy / Approach ───────────────────────────────────── */}
      <section className="bg-marble py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:gap-14 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 reveal-left">
              <span className="section-label text-gold-shimmer">
                Care Philosophy
              </span>
              <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl leading-tight">
                Precise. Personal.<br className="hidden sm:block" /> Always
                evidence-led.
              </h2>
              <div className="hairline my-6 max-w-xs" />
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Dr. Krithi's approach blends the best of medical dermatology
                and modern aesthetic care. Every plan is grounded in clinical
                evidence, tailored to the individual, and delivered in a calm,
                unhurried setting — because good skin decisions are best made
                without pressure.
              </p>
            </div>

            <div className="lg:col-span-6 reveal-right">
              <ul className="grid gap-3 sm:grid-cols-2">
                {approach.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-coffee/90 shadow-card"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full gradient-gold">
                      <Check className="h-3 w-3 text-coffee" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="section-label text-gold-shimmer">FAQs</span>
            <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl leading-tight">
              About Dr. Krithi Subhas
            </h2>
            <div className="hairline my-6 max-w-xs mx-auto" />
          </div>

          <div className="rounded-2xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 px-5 sm:px-7">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Book CTA ──────────────────────────────────────── */}
      <section className="bg-coffee py-14 sm:py-18 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-15" />
        <div
          className="absolute -top-24 left-0 h-[400px] w-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.74 0.1 78 / 0.15), transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 text-center">
          <span className="section-label text-gold-shimmer">Book a Consultation</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.5rem] text-primary-foreground leading-tight">
            Consult Dr. Krithi Subhas today
          </h2>
          <p className="mt-4 text-primary-foreground/60 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether it's persistent acne, hair fall, pigmentation, or an
            aesthetic concern — begin with an accurate diagnosis and a plan
            built for your skin.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => navigate("/appointments")}
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-coffee px-7 py-3.5 text-sm font-medium hover:bg-primary-foreground/90 transition shadow-soft"
            >
              <Calendar className="h-4 w-4" /> Book Appointment
            </button>
            <a
              href={`tel:${SITE.phoneRaw}`}
              onClick={() => trackPhoneClick(SITE.phone)}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-white/10 px-7 py-3.5 text-sm text-primary-foreground hover:bg-white/20 transition"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>

          <div className="mt-8 inline-flex items-start gap-2 text-xs text-primary-foreground/50 max-w-md text-left">
            <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[oklch(0.82_0.09_78)]" />
            <span className="leading-relaxed">{SITE.address}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
