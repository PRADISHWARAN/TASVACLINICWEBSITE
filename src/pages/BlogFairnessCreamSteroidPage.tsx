import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useRouter } from "@/lib/use-router";
import { SITE } from "@/lib/site";
import { ArrowLeft, Clock, User, Calendar, MapPin, Phone, Plus, Minus } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const STEROID_BLOG_SCHEMA = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://tasvaaskinandhairclinic.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://tasvaaskinandhairclinic.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Is Your Fairness Cream Secretly Damaging Your Skin?",
        item: "https://tasvaaskinandhairclinic.com/blog/fairness-cream-steroid-skin-awareness",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Is Your Fairness Cream Secretly Damaging Your Skin?",
    description:
      "Learn why using steroid-containing creams without medical supervision can cause redness, thinning, and other long-term skin problems.",
    author: { "@type": "Organization", name: "Tasvaa Skin and Hair Clinic" },
    publisher: {
      "@type": "Organization",
      name: "Tasvaa Skin and Hair Clinic",
      url: "https://tasvaaskinandhairclinic.com",
    },
    datePublished: "2026-07-06",
    url: "https://tasvaaskinandhairclinic.com/blog/fairness-cream-steroid-skin-awareness",
    mainEntityOfPage:
      "https://tasvaaskinandhairclinic.com/blog/fairness-cream-steroid-skin-awareness",
    keywords:
      "steroid cream side effects, fairness cream damage, topical steroid misuse, dermatologist Bengaluru, skin thinning steroid cream, steroid-dependent skin",
    articleSection: "Skin Care & Steroid Awareness",
    inLanguage: "en-IN",
  },
]);

const tocItems = [
  { id: "section-1", label: "Why Are Steroid Creams Misused?" },
  { id: "section-2", label: "Long-Term Use: What Can Happen?" },
  { id: "section-3", label: "How Can You Protect Yourself?" },
  { id: "section-4", label: "Common Questions" },
  { id: "section-5", label: "When to Consult a Dermatologist" },
  { id: "clinic-cta", label: "About Tasvaa Clinic" },
];

const popularPosts = [
  {
    title: "Before You Buy Expensive Skincare Products, Read This",
    slug: "/blog/affordable-skincare-simple-routine",
    color: "from-amber-100 to-orange-100",
  },
  {
    title: "Acne, Skin Changes & When Should You See a Dermatologist?",
    slug: "/blog/acne-treatment-skin-changes-dermatologist",
    color: "from-rose-100 to-pink-100",
  },
  {
    title: "Hair Fall: Causes, Myths & When to See a Dermatologist",
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

const sideEffects = [
  "Persistent facial redness",
  "Increased facial hair growth",
  "Burning or stinging sensation",
  "Increased skin sensitivity",
  "Acne-like eruptions",
  "Thinning of the skin",
  "Flare-ups when the cream is stopped",
  "Dependence on the cream for temporary relief",
];

const protectionTips = [
  "Read the label and understand what it contains.",
  "Avoid using prescription creams based solely on recommendations from friends or family.",
  "Do not continue using a cream simply because it gave quick results.",
  "Follow the duration advised by your doctor.",
  "Consult a qualified dermatologist if you are unsure about a product.",
];

const whenToVisit = [
  "Your face becomes red or burns after stopping a cream.",
  "You have been using the same cream continuously for several weeks or months.",
  "You develop persistent acne-like bumps after using a fairness or skin-lightening cream.",
  "Your skin has become unusually thin or sensitive.",
  "You are unsure whether a cream is safe for long-term use.",
];

const faqs = [
  {
    question: "Is every steroid cream harmful?",
    answer:
      "No. Steroid creams are valuable medicines and are widely used by dermatologists to treat many skin conditions safely and effectively when prescribed correctly.",
  },
  {
    question: "Should I stop using my cream immediately if I think it contains a steroid?",
    answer:
      "Not necessarily. Some steroid creams should be stopped gradually under medical supervision. If you are unsure, consult your dermatologist before making changes.",
  },
  {
    question: "Can steroid creams permanently damage the skin?",
    answer:
      "Misuse over long periods may cause side effects, but early recognition and appropriate treatment can often improve many of these problems.",
  },
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

export function BlogFairnessCreamSteroidPage() {
  useReveal();
  const { navigate } = useRouter();
  useSEO({
    title: "Is Your Fairness Cream Secretly Damaging Your Skin? | Tasvaa Clinic Blog",
    description:
      "Learn how unsupervised use of steroid-containing fairness creams can cause redness, skin thinning, and dependence. Expert advice from Dr. Krithi Subhas at Tasvaa Clinic, Bengaluru.",
    path: "/blog/fairness-cream-steroid-skin-awareness",
    ogTitle: "Is Your Fairness Cream Secretly Damaging Your Skin?",
    ogDescription:
      "A cream that gives quick results isn't always the right one. Learn why using steroid creams without medical supervision can do more harm than good. Tasvaa Clinic, Bengaluru.",
    schemaJson: STEROID_BLOG_SCHEMA,
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
            <span className="text-primary-foreground/80 font-medium">Skin Care &amp; Steroid Awareness</span>
          </nav>

          {/* Category */}
          <span className="inline-block rounded-full border border-[oklch(0.82_0.09_78/0.5)] bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.82_0.09_78)] mb-4">
            Skin Care &amp; Steroid Awareness
          </span>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.8rem] text-primary-foreground leading-tight max-w-3xl">
            Is Your Fairness Cream Secretly Damaging Your Skin?
          </h1>

          <p className="mt-4 text-primary-foreground/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            A cream that gives quick results isn't always the right one. Learn why using steroid creams without
            medical supervision can do more harm than good.
          </p>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-primary-foreground/50">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> Dr. Tasvaa Team
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> 5 min read
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> July 2026
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
                  Topical steroid creams can be highly effective when prescribed by a dermatologist for the right
                  condition and duration. However, prolonged or unsupervised use — especially on the face — can lead
                  to redness, irritation, acne-like breakouts, skin thinning, and even dependence on the cream.
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Many people assume that if a cream works quickly, it must be safe to use regularly. Unfortunately,
                  that isn't always true.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  At <strong className="text-coffee/80">Tasvaa Skin &amp; Hair Clinic</strong>, Dr. Krithi often sees
                  patients who have unknowingly used steroid-containing creams for months after receiving
                  recommendations from friends, family members, or social media. These creams may provide temporary
                  improvement, but continued use without proper guidance can create new skin problems that are often
                  more difficult to treat.
                </p>
              </div>

              {/* Section 1 */}
              <section id="section-1" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    01
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    Why Are Steroid Creams Misused?
                  </h2>
                </div>

                <div className="ml-11 space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Steroid creams can reduce redness and inflammation quickly, making the skin appear better within a
                    short time. Because of these fast results, many people continue using them without understanding
                    what the medicine contains or whether it is appropriate for their condition.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Sometimes these creams are recommended by well-meaning friends or purchased over the counter
                    without a proper diagnosis.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    02
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    What Can Happen With Long-Term Use?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    Using steroid creams incorrectly or for prolonged periods, especially on the face, may lead to:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-5">
                    {sideEffects.map((effect) => (
                      <li key={effect} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.74_0.1_78)] flex-shrink-0" />
                        {effect}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-amber-200/70 bg-amber-50/60 p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The treatment that initially seemed to help can gradually become the cause of the problem.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    03
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    How Can You Protect Yourself?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    Before using any cream regularly:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-5">
                    {protectionTips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.74_0.1_78)] flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-[oklch(0.97_0.02_78)] p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We've all heard <strong className="text-coffee/80">"Label Padhega India"</strong> when it comes
                      to food. The same principle should apply to skincare. Before putting any cream or medicine on
                      your face, take a moment to read what's inside and understand why you're using it.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 — FAQ */}
              <section id="section-4" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    04
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    Common Questions
                  </h2>
                </div>

                <div className="ml-11 rounded-2xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 px-5 divide-y divide-transparent">
                  {faqs.map((faq) => (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    05
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    When Should You Consult a Dermatologist?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    Seek professional advice if:
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
                      , Dr. Krithi helps patients identify the underlying cause of their skin concerns and recommends
                      treatments that are safe, evidence-based, and tailored to their individual needs.
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
                  "Healthy skin is not about chasing instant results — it's about using the right treatment, for the
                  right condition, at the right time."
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
