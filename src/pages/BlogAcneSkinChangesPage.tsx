import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useRouter } from "@/lib/use-router";
import { SITE } from "@/lib/site";
import { ArrowLeft, Clock, User, Calendar, MapPin, Phone, Plus, Minus } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const ACNE_BLOG_SCHEMA = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://tasvaclinicwebsite-1.onrender.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://tasvaclinicwebsite-1.onrender.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Acne, Skin Changes & When Should You See a Dermatologist?",
        item: "https://tasvaclinicwebsite-1.onrender.com/blog/acne-treatment-skin-changes-dermatologist",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Acne, Skin Changes & When Should You See a Dermatologist?",
    description:
      "Understand acne causes, treatment options, skin changes to watch for, and when expert care can make a difference.",
    author: { "@type": "Organization", name: "Tasvaa Skin and Hair Clinic" },
    publisher: {
      "@type": "Organization",
      name: "Tasvaa Skin and Hair Clinic",
      url: "https://tasvaclinicwebsite-1.onrender.com",
    },
    datePublished: "2026-06-01",
    url: "https://tasvaclinicwebsite-1.onrender.com/blog/acne-treatment-skin-changes-dermatologist",
    mainEntityOfPage:
      "https://tasvaclinicwebsite-1.onrender.com/blog/acne-treatment-skin-changes-dermatologist",
    keywords:
      "acne treatment Bengaluru, acne causes, dermatologist Sarjapur, skin changes, acne scars treatment, when to see dermatologist",
    articleSection: "Acne & Skin Health",
    inLanguage: "en-IN",
  },
]);

const tocItems = [
  { id: "section-1", label: "Why Does Acne Happen?" },
  { id: "section-2", label: "Common Questions About Acne" },
  { id: "section-3", label: "Treatment Options" },
  { id: "section-4", label: "When to See a Dermatologist" },
  { id: "section-5", label: "Unusual Skin Changes" },
  { id: "clinic-cta", label: "About Tasvaa Clinic" },
];

const popularPosts = [
  {
    title: "Before You Buy Expensive Skincare Products, Read This",
    slug: "/blog/affordable-skincare-simple-routine",
    color: "from-amber-100 to-orange-100",
  },
  {
    title: "Hair Fall: Causes, Myths & When to See a Dermatologist",
    slug: "/blog",
    color: "from-rose-100 to-pink-100",
  },
  {
    title: "Dandruff: Causes, Treatment & Expert Tips",
    slug: "/blog",
    color: "from-emerald-100 to-teal-100",
  },
  {
    title: "Pigmentation: Types, Causes & Treatment Options",
    slug: "/blog",
    color: "from-violet-100 to-purple-100",
  },
  {
    title: "Sunscreen: Why It's Important Every Day",
    slug: "/blog",
    color: "from-sky-100 to-blue-100",
  },
];

const acneCauses = [
  "Excess oil production that blocks the pores",
  "Clogged pores due to dead skin cells and oil buildup",
  "Hormonal changes during teenage years, periods, pregnancy, or PCOS",
  "Dandruff, which can trigger forehead and back acne",
  "Stress and lack of sleep, which may worsen breakouts",
  "Wrong skincare products, especially oily or pore-clogging products",
  "Frequent touching, picking, or squeezing pimples",
  "Sweat, pollution, helmets, masks, or tight clothing causing friction",
  "Certain medicines or health conditions",
  "Diet triggers in some people, especially high sugar or dairy-heavy foods",
];

const faqs = [
  {
    question: "Will acne go away on its own?",
    answer:
      "Mild acne may settle with time. But if acne is painful, recurring, pus-filled, or leaving marks, it is better to consult a dermatologist early.",
  },
  {
    question: "Is acne only a teenage problem?",
    answer:
      "No. Acne can happen in teenagers as well as adults. Adult acne is also common and may be linked to hormones, stress, skincare habits, PCOS, or other medical reasons.",
  },
  {
    question: "Can acne be cured permanently?",
    answer:
      "Acne can be controlled very well with the right treatment. Some people may need a maintenance skincare routine to reduce future breakouts.",
  },
  {
    question: "Are home remedies safe for acne?",
    answer:
      "Not always. Ingredients like lemon, toothpaste, harsh scrubs, or random creams can irritate the skin and sometimes worsen acne, pigmentation, or acne marks.",
  },
];

const treatmentOptions = [
  "Medical creams or gels",
  "Oral medicines, if required",
  "Anti-acne skincare routine",
  "Dandruff control, if it is triggering acne",
  "Hormonal evaluation, if needed",
  "Chemical peels for acne marks and oil control",
  "Laser or light-based treatments",
  "Microneedling or scar treatments for acne scars",
];

const whenToVisit = [
  "Acne is painful or recurring",
  "Pimples are leaving dark spots, acne marks, or scars",
  "Over-the-counter products are not helping",
  "Breakouts are sudden or severe",
  "Acne is affecting your confidence",
  "You are unsure which skincare products are suitable for your skin",
];

const skinChanges = [
  { label: "A mole changing in size, shape, or colour" },
  { label: "A wound that is not healing" },
  { label: "A new or unusual growth on the skin" },
  { label: "A spot that bleeds or crusts repeatedly" },
  { label: "Sudden pigmentation or unexplained patches" },
  { label: "Long-standing skin problems that are not improving" },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[oklch(0.74_0.1_78/0.15)] last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full py-3.5 text-left gap-4 group"
      >
        <span className="text-sm font-medium text-coffee group-hover:text-coffee/80 transition-colors">
          {question}
        </span>
        {open ? (
          <Minus className="h-4 w-4 text-coffee/50 flex-shrink-0" />
        ) : (
          <Plus className="h-4 w-4 text-coffee/50 flex-shrink-0" />
        )}
      </button>
      {open && (
        <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export function BlogAcneSkinChangesPage() {
  useReveal();
  const { navigate } = useRouter();
  useSEO({
    title: "Acne, Skin Changes & When to See a Dermatologist | Tasvaa Clinic Blog",
    description:
      "Understand acne causes, treatment options, and unusual skin changes to watch for. Expert advice from Dr. Krithi Subhas, Dermatologist at Tasvaa Clinic, Bengaluru.",
    path: "/blog/acne-treatment-skin-changes-dermatologist",
    ogTitle: "Acne, Skin Changes & When Should You See a Dermatologist?",
    ogDescription:
      "Understand acne causes, treatment options, skin changes to watch for, and when expert care can make a difference. Tasvaa Clinic, Bengaluru.",
    schemaJson: ACNE_BLOG_SCHEMA,
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page-enter">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-coffee pt-20 pb-10 sm:pt-28 sm:pb-14 lg:pt-36 lg:pb-20">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 0% 100%, oklch(0.55 0.07 55), transparent 55%), radial-gradient(ellipse at 100% 0%, oklch(0.28 0.04 40), transparent 55%)",
          }}
        />
        <div className="absolute inset-0 dots-pattern opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-primary-foreground/50">
            <button onClick={() => navigate("/")} className="hover:text-primary-foreground/80 transition-colors">
              Home
            </button>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <button onClick={() => navigate("/blog")} className="hover:text-primary-foreground/80 transition-colors">
              Blog
            </button>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-primary-foreground/80 font-medium">Acne &amp; Skin Health</span>
          </nav>

          {/* Category */}
          <span className="inline-block rounded-full border border-[oklch(0.82_0.09_78/0.5)] bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.82_0.09_78)] mb-4">
            Acne &amp; Skin Health
          </span>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.8rem] text-primary-foreground leading-tight max-w-3xl">
            Acne, Skin Changes &amp; When Should You See a Dermatologist?
          </h1>

          <p className="mt-4 text-primary-foreground/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            Understand acne causes, treatment options, skin changes to watch for, and when expert care can make a
            difference.
          </p>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-primary-foreground/50">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> Dr. Tasvaa Team
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> 7 min read
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> June 2026
            </span>
          </div>

          {/* Gold accent */}
          <div className="mt-6 flex items-center gap-2">
            <div className="h-0.5 w-12 bg-gradient-to-r from-[oklch(0.82_0.09_78)] to-[oklch(0.65_0.08_65)]" />
            <div className="h-0.5 w-3 bg-[oklch(0.82_0.09_78)]/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── Content Layout ───────────────────────────────────────────── */}
      <div className="bg-marble">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10 lg:py-14">
          <div className="lg:grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] lg:gap-12 xl:gap-16">

            {/* ── Main Content ─────────────────────────────────────── */}
            <main className="min-w-0">

              {/* In a Nutshell */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6 mb-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/50 font-semibold mb-2">
                  In a Nutshell
                </p>
                <p className="text-sm sm:text-base text-coffee/80 leading-relaxed">
                  Acne can happen due to oil, clogged pores, hormones, dandruff, stress, wrong skincare products,
                  and other triggers. If acne is recurring, painful, or leaving marks, it is better to consult a
                  dermatologist early.
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Acne is one of the most common skin concerns, but it should not always be ignored. Many people try
                  face washes, home remedies, online suggestions, or over-the-counter creams before visiting a
                  dermatologist. Sometimes these may help temporarily, but in many cases, they can delay the right
                  acne treatment and lead to repeated breakouts, dark spots, acne marks, or scars.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  At <strong className="text-coffee/80">Tasvaa Skin &amp; Hair Clinic</strong>, Dr. Krithi evaluates
                  acne and other skin concerns based on the patient's skin type, severity, and long-term skin health.
                </p>
              </div>

              {/* Section 1 */}
              <section id="section-1" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    01
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    Why Does Acne Happen?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    Acne is not just about poor hygiene. Several internal and external factors can trigger breakouts.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-4">
                    {acneCauses.map((cause) => (
                      <li key={cause} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.74_0.1_78)] flex-shrink-0" />
                        {cause}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-amber-200/70 bg-amber-50/60 p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Acne is usually caused by a combination of factors. That is why the same cream, face wash, or
                      home remedy may not work for everyone.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 — FAQ */}
              <section id="section-2" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    02
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    Common Questions About Acne
                  </h2>
                </div>

                <div className="ml-11 rounded-2xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 px-5 divide-y divide-transparent">
                  {faqs.map((faq) => (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    03
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    Treatment Options for Acne
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    Depending on the condition, a dermatologist may suggest:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-5">
                    {treatmentOptions.map((opt) => (
                      <li key={opt} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.74_0.1_78)] flex-shrink-0" />
                        {opt}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-[oklch(0.97_0.02_78)] p-4 space-y-2">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Advanced acne treatments like{" "}
                      <strong className="text-coffee/80">
                        chemical peels, lasers, light therapy, microneedling, and scar revision procedures
                      </strong>{" "}
                      may be recommended in selected cases. Acne scars are usually treated after active acne is
                      under control.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Most acne-related procedures are usually quick and may take around{" "}
                      <strong className="text-coffee/80">20–45 minutes</strong>, depending on the treatment. Some
                      treatments may require multiple sessions, spaced a few weeks apart.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    04
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    When Should You See a Dermatologist?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    You should consider visiting a dermatologist if:
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {whenToVisit.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 p-3.5 text-xs text-muted-foreground leading-relaxed"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    05
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    What About Unusual Skin Changes?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    Apart from acne, some skin changes should not be ignored. A mole that changes in size, shape, or
                    colour, a wound that does not heal, a new growth, or a spot that bleeds, itches, or crusts
                    repeatedly should be checked by a dermatologist.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">Watch out for:</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                    {skinChanges.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 p-3.5 text-xs text-muted-foreground leading-relaxed"
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-amber-200/70 bg-amber-50/60 p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Not every skin change is serious, but early evaluation helps in identifying problems at the
                      right time.
                    </p>
                  </div>
                </div>
              </section>

              {/* Clinic CTA */}
              <section id="clinic-cta" className="mb-10">
                <div className="rounded-2xl bg-gradient-to-br from-coffee to-[oklch(0.25_0.04_45)] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50 mb-2">
                      Tasvaa Skin &amp; Hair Clinic
                    </p>
                    <p className="text-primary-foreground/90 text-sm sm:text-base leading-relaxed">
                      At{" "}
                      <strong className="text-primary-foreground font-semibold">Tasvaa Skin &amp; Hair Clinic</strong>
                      , Dr. Krithi provides skin and hair consultation with treatment plans based on the patient's
                      concern, skin type, and long-term skin health.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/appointments")}
                    className="flex-shrink-0 rounded-full border border-white/25 bg-white/10 text-primary-foreground text-[10px] uppercase tracking-widest px-6 py-3 hover:bg-white/20 transition-colors"
                  >
                    Book an Appointment
                  </button>
                </div>
              </section>

              {/* Final Takeaway */}
              <blockquote className="border-l-4 border-[oklch(0.74_0.1_78)] pl-5 py-1 mb-10">
                <p className="font-display text-lg sm:text-xl text-coffee italic leading-snug">
                  "Healthy skin starts with the right diagnosis — not random trial and error."
                </p>
              </blockquote>

              {/* Back to Blog */}
              <button
                onClick={() => navigate("/blog")}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-coffee transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </button>
            </main>

            {/* ── Sidebar ──────────────────────────────────────────── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">

                {/* Table of Contents */}
                <div className="rounded-2xl border border-[oklch(0.74_0.1_78/0.25)] bg-white shadow-card p-5">
                  <h3 className="font-display text-sm text-coffee mb-4">Table of Contents</h3>
                  <ol className="space-y-2.5">
                    {tocItems.map((item, i) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollTo(item.id)}
                          className="flex items-center gap-2.5 w-full text-left text-sm text-muted-foreground hover:text-coffee transition-colors group"
                        >
                          <span className="text-[10px] text-coffee/40 font-medium w-5 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="group-hover:underline underline-offset-2">{item.label}</span>
                        </button>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Book Consultation CTA */}
                <div className="rounded-2xl border border-[oklch(0.74_0.1_78/0.25)] bg-[oklch(0.97_0.02_78)] p-5 text-center">
                  <div className="w-10 h-10 rounded-xl bg-coffee/10 flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-5 w-5 text-coffee" />
                  </div>
                  <p className="font-display text-sm text-coffee mb-1 leading-snug">
                    Not Sure About Your Skin Concern?
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Book a consultation with Dr. Krithi and get expert advice for your skin.
                  </p>
                  <button
                    onClick={() => navigate("/appointments")}
                    className="w-full rounded-full bg-coffee text-primary-foreground text-[10px] uppercase tracking-widest py-2.5 hover:bg-coffee/90 transition-colors"
                  >
                    Book Consultation
                  </button>
                </div>

                {/* Popular Blog Topics */}
                <div className="rounded-2xl border border-[oklch(0.74_0.1_78/0.25)] bg-white shadow-card p-5">
                  <h3 className="font-display text-sm text-coffee mb-4">Popular Blog Topics</h3>
                  <div className="space-y-3">
                    {popularPosts.map((post) => (
                      <button
                        key={post.title}
                        onClick={() => navigate(post.slug)}
                        className="flex items-center gap-3 w-full text-left group"
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.color} flex-shrink-0`}
                        />
                        <p className="text-xs text-coffee/80 leading-snug group-hover:text-coffee transition-colors">
                          {post.title}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clinic Info */}
                <div className="rounded-2xl bg-coffee p-5 text-primary-foreground">
                  <p className="font-display text-base mb-0.5">Tasvaa Skin &amp; Hair Clinic</p>
                  <p className="text-xs text-primary-foreground/50 mb-4">
                    Expert care. Healthy skin. Confident you.
                  </p>
                  <div className="space-y-2 text-xs text-primary-foreground/70">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                      <span>Bengaluru, Karnataka</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 shrink-0" />
                      <span>{SITE.phone}</span>
                    </div>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}
