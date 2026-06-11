import { useReveal } from "@/hooks/use-reveal";
import { useRouter } from "@/lib/use-router";
import { SITE } from "@/lib/site";
import { ArrowLeft, Clock, User, Calendar, MapPin, Phone } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const AFFORDABLE_SKINCARE_SCHEMA = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://tasvaaskinandhairclinic.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://tasvaaskinandhairclinic.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Before You Buy Expensive Skincare Products, Read This",
        item: "https://tasvaaskinandhairclinic.com/blog/affordable-skincare-simple-routine",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Before You Buy Expensive Skincare Products, Read This",
    description:
      "Simple skincare habits can often work better than expensive products when they are chosen correctly.",
    author: { "@type": "Organization", name: "Tasvaa Skin and Hair Clinic" },
    publisher: {
      "@type": "Organization",
      name: "Tasvaa Skin and Hair Clinic",
      url: "https://tasvaaskinandhairclinic.com",
    },
    datePublished: "2026-06-01",
    url: "https://tasvaaskinandhairclinic.com/blog/affordable-skincare-simple-routine",
    mainEntityOfPage: "https://tasvaaskinandhairclinic.com/blog/affordable-skincare-simple-routine",
    keywords: "affordable skincare, simple skincare routine, dermatologist skincare tips, sunscreen, moisturiser",
    articleSection: "Skin Care",
    inLanguage: "en-IN",
  },
]);

const tocItems = [
  { id: "section-1", label: "A Simple Routine Is Enough" },
  { id: "section-2", label: "Safe Home Habits" },
  { id: "section-3", label: "Home Remedies to Avoid" },
  { id: "section-4", label: "When to Spend on Skincare" },
  { id: "clinic-cta", label: "About Tasvaa Clinic" },
];

const popularPosts = [
  {
    title: "Acne, Skin Changes & When Should You See a Dermatologist?",
    slug: "/blog/acne-treatment-skin-changes-dermatologist",
    color: "from-rose-100 to-pink-100",
  },
  {
    title: "Hair Fall: Causes, Myths & When to See a Dermatologist",
    slug: "/blog",
    color: "from-amber-100 to-orange-100",
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

const safeHabits = [
  "Drinking enough water",
  "Sleeping well",
  "Keeping pillow covers clean",
  "Washing your face after heavy sweating",
  "Avoiding frequent touching or picking of the face",
  "Eating a balanced diet",
  "Using clean towels",
  "Not sharing personal skincare items",
];

const remediesToAvoid = [
  "Lemon directly on the skin",
  "Toothpaste on pimples",
  "Baking soda scrubs",
  "Harsh physical scrubs",
  "Undiluted essential oils",
  "Random fairness creams",
  "Steroid creams without prescription",
];

export function BlogAffordableSkincarePage() {
  useReveal();
  const { navigate } = useRouter();
  useSEO({
    title: "Affordable Skincare: Simple Routine That Works | Tasvaa Clinic Blog",
    description:
      "Before you spend on expensive skincare products, read this. A dermatologist-backed guide to simple, effective skincare habits that actually work.",
    path: "/blog/affordable-skincare-simple-routine",
    ogTitle: "Before You Buy Expensive Skincare Products, Read This",
    ogDescription:
      "Simple skincare habits can often work better than expensive products. A guide to building an effective, affordable routine from a Bengaluru dermatologist.",
    schemaJson: AFFORDABLE_SKINCARE_SCHEMA,
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
            <span className="text-primary-foreground/80 font-medium">Affordable Skincare</span>
          </nav>

          {/* Category */}
          <span className="inline-block rounded-full border border-[oklch(0.82_0.09_78/0.5)] bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.82_0.09_78)] mb-4">
            Skin Care
          </span>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.8rem] text-primary-foreground leading-tight max-w-3xl">
            Before You Buy Expensive Skincare Products, Read This
          </h1>

          <p className="mt-4 text-primary-foreground/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            Simple skincare habits can often work better than expensive products when they are chosen correctly.
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
                  Good skincare does not always need expensive products. For many people, a simple routine with a
                  gentle cleanser, moisturiser, sunscreen, and safe daily habits is enough to maintain healthy skin.
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Skincare has become confusing. Every day, there is a new cream, serum, face wash, peel, or
                  "must-have" product being promoted online. Many people end up buying products because they are
                  trending, not because their skin actually needs them.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  The truth is, good skincare does not always have to be expensive. For many people, a simple and
                  consistent routine works better than using too many products at once.
                </p>
              </div>

              {/* Section 1 */}
              <section id="section-1" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    01
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    A Simple Routine Is Enough for Most People
                  </h2>
                </div>

                <div className="ml-11 grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Gentle Cleanser",
                      body: "Wash your face with a mild cleanser once or twice a day. Avoid harsh scrubbing, as it can damage the skin barrier and lead to dryness, irritation, or breakouts.",
                    },
                    {
                      title: "Moisturiser",
                      body: "Moisturiser is not only for dry skin. Even oily skin may need hydration. The key is choosing one that suits your skin type.",
                    },
                    {
                      title: "Sunscreen",
                      body: "Sunscreen is one of the most important skincare products. It helps protect the skin from tanning, pigmentation, early ageing, and worsening of dark spots.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 p-4 sm:p-5"
                    >
                      <h3 className="font-semibold text-coffee text-sm mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    02
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    Safe Home Habits
                  </h2>
                </div>

                <div className="ml-11">
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-4">
                    {safeHabits.map((habit) => (
                      <li key={habit} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.74_0.1_78)] flex-shrink-0" />
                        {habit}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-amber-200/70 bg-amber-50/60 p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      These habits can support skin health, but they may not treat concerns like acne, pigmentation,
                      eczema, fungal infection, or severe dandruff.
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
                    Home Remedies to Avoid
                  </h2>
                </div>

                <div className="ml-11">
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-4">
                    {remediesToAvoid.map((remedy) => (
                      <li key={remedy} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        {remedy}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-red-200/70 bg-red-50/60 p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      These may seem like quick fixes, but they can damage the skin and make the problem worse.
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
                    When Does Spending Money on Skincare Make Sense?
                  </h2>
                </div>

                <div className="ml-11 space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Spending money makes sense when it is based on the right diagnosis. Pigmentation, acne marks,
                    rashes, dandruff, repeated breakouts, or hair fall may need proper evaluation instead of random
                    product trials.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Sometimes, consulting a dermatologist early can actually save money by avoiding unnecessary
                    products and preventing the concern from becoming worse.
                  </p>
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
                      , Dr. Krithi provides skincare advice and treatment based on your skin type, concern, and what
                      is genuinely required.
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
                  "Good skincare is not about using more products. It is about using the right ones."
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
