import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useRouter } from "@/lib/use-router";
import { SITE } from "@/lib/site";
import { ArrowLeft, Clock, User, Calendar, MapPin, Phone, Plus, Minus } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const BLUE_LIGHT_SCHEMA = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://tasvaaskinandhairclinic.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://tasvaaskinandhairclinic.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Blue Light & Skin Damage: Should You Worry About Screen Time?",
        item: "https://tasvaaskinandhairclinic.com/blog/blue-light-skin-damage-screen-time",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Blue Light & Skin Damage: Should You Worry About Screen Time?",
    description:
      "Does blue light from your phone and laptop actually damage your skin? Here's what science says about pigmentation, wrinkles and blue-light skincare.",
    author: { "@type": "Organization", name: "Tasvaa Skin and Hair Clinic" },
    publisher: {
      "@type": "Organization",
      name: "Tasvaa Skin and Hair Clinic",
      url: "https://tasvaaskinandhairclinic.com",
    },
    datePublished: "2026-09-22",
    url: "https://tasvaaskinandhairclinic.com/blog/blue-light-skin-damage-screen-time",
    mainEntityOfPage:
      "https://tasvaaskinandhairclinic.com/blog/blue-light-skin-damage-screen-time",
    keywords:
      "blue light skin damage, screen time skin, blue light pigmentation, blue light wrinkles, tinted sunscreen, melasma, dermatologist Bengaluru, Tasvaa Clinic",
    articleSection: "Skin Health & Digital Lifestyle",
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does blue light from my phone cause pigmentation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maybe. Blue light can worsen pigmentation in sensitive individuals, particularly those with melasma, but phone exposure is minimal compared to sunlight.",
        },
      },
      {
        "@type": "Question",
        name: "Is blue light worse than UV rays?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. UV rays are far more harmful and remain the leading cause of premature ageing, sunburn, pigmentation, and skin cancer.",
        },
      },
      {
        "@type": "Question",
        name: "Does blue light cause acne?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Acne is driven by hormones, genetics, stress, and skincare habits — not everyday screen exposure.",
        },
      },
      {
        "@type": "Question",
        name: "Should I wear sunscreen while working from home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends. Yes if you're near windows or step outside regularly. If you have melasma or pigmentation concerns, use a tinted iron-oxide sunscreen.",
        },
      },
      {
        "@type": "Question",
        name: "Do blue-light glasses protect my skin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Blue-light glasses reduce eye strain and improve visual comfort, but they do nothing for your skin.",
        },
      },
    ],
  },
]);

const tocItems = [
  { id: "section-1", label: "What Is Blue Light?" },
  { id: "section-2", label: "Can It Damage the Skin?" },
  { id: "section-3", label: "Sun vs. Screens" },
  { id: "section-4", label: "Who Should Be Careful?" },
  { id: "section-5", label: "Does It Cause Wrinkles?" },
  { id: "section-6", label: "Sunscreen Indoors?" },
  { id: "section-7", label: "Skincare Ingredients" },
  { id: "section-8", label: "Common Questions" },
  { id: "section-9", label: "See a Dermatologist" },
  { id: "clinic-cta", label: "About Tasvaa Clinic" },
];

const popularPosts = [
  {
    title: "Acne, Skin Changes & When Should You See a Dermatologist?",
    slug: "/blog/acne-treatment-skin-changes-dermatologist",
    color: "from-rose-100 to-pink-100",
  },
  {
    title: "Before You Buy Expensive Skincare Products, Read This",
    slug: "/blog/affordable-skincare-simple-routine",
    color: "from-amber-100 to-orange-100",
  },
  {
    title: "Is Your Fairness Cream Secretly Damaging Your Skin?",
    slug: "/blog/fairness-cream-steroid-skin-awareness",
    color: "from-violet-100 to-purple-100",
  },
  {
    title: "Dandruff: Causes, Treatment & Expert Tips",
    slug: "/blog",
    color: "from-emerald-100 to-teal-100",
  },
  {
    title: "Sunscreen: Why It's Important Every Day",
    slug: "/blog",
    color: "from-sky-100 to-blue-100",
  },
];

const blueLightSources = [
  "Sunlight (by far the largest source)",
  "Smartphones",
  "Laptops and computers",
  "Television screens",
  "LED lighting",
];

const sunVsScreens = [
  { source: "Sunlight", amount: "Very High", tone: "high" },
  { source: "Laptop", amount: "Low", tone: "low" },
  { source: "Smartphone", amount: "Very Low", tone: "verylow" },
  { source: "LED Lights", amount: "Low", tone: "low" },
];

const sensitiveGroups = [
  "Melasma",
  "Post-inflammatory hyperpigmentation (PIH)",
  "Medium to darker skin tones",
  "Persistent pigmentation disorders",
];

const ageingDrivers = [
  "Excessive sun exposure",
  "Smoking",
  "Air pollution",
  "Poor sleep",
  "Chronic stress",
  "Natural ageing",
];

const wearSunscreenIf = [
  "You sit near large windows",
  "You frequently move between indoors and outdoors",
  "You have melasma or pigmentation concerns",
  "You use retinoids or exfoliating treatments",
];

const antioxidantIngredients = [
  "Vitamin C",
  "Niacinamide (Vitamin B3)",
  "Vitamin E",
  "Ferulic Acid",
];

const whenToVisit = [
  "Your pigmentation is becoming darker or more widespread",
  "You have melasma or stubborn dark patches",
  "Over-the-counter skincare isn't helping",
  "You're unsure whether concerns are sun-related or something else",
  "You want a personalised routine instead of viral skincare trends",
];

const faqs = [
  {
    question: "Does blue light from my phone cause pigmentation?",
    answer:
      "Maybe. Blue light can worsen pigmentation in sensitive individuals, particularly those with melasma, but phone exposure is minimal compared to sunlight.",
  },
  {
    question: "Is blue light worse than UV rays?",
    answer:
      "No. UV rays are far more harmful and remain the leading cause of premature ageing, sunburn, pigmentation, and skin cancer.",
  },
  {
    question: "Does blue light cause acne?",
    answer:
      "No. Acne is driven by hormones, genetics, stress, and skincare habits — not everyday screen exposure.",
  },
  {
    question: "Should I wear sunscreen while working from home?",
    answer:
      "It depends. Yes if you're near windows or step outside regularly. If you have melasma or pigmentation concerns, use a tinted, iron-oxide sunscreen.",
  },
  {
    question: "Do blue-light glasses protect my skin?",
    answer:
      "No. Blue-light glasses reduce eye strain and improve visual comfort, but they do nothing for your skin.",
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

export function BlogBlueLightScreenTimePage() {
  useReveal();
  const { navigate } = useRouter();
  useSEO({
    title:
      "Blue Light & Skin Damage: Should You Worry About Screen Time? | Tasvaa Clinic",
    description:
      "Does blue light from phones and laptops really damage your skin? Dr. Krithi Subhas at Tasvaa Clinic, Bengaluru breaks down the science on pigmentation, wrinkles and blue-light skincare.",
    path: "/blog/blue-light-skin-damage-screen-time",
    ogTitle: "Blue Light & Skin Damage: Should You Worry About Screen Time?",
    ogDescription:
      "The science behind blue light, pigmentation and screen time — from the dermatology team at Tasvaa Skin & Hair Clinic, Bengaluru.",
    schemaJson: BLUE_LIGHT_SCHEMA,
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
            <span className="text-primary-foreground/80 font-medium">Skin Health &amp; Digital Lifestyle</span>
          </nav>

          {/* Category */}
          <span className="inline-block rounded-full border border-[oklch(0.82_0.09_78/0.5)] bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.82_0.09_78)] mb-4">
            Skin Health &amp; Digital Lifestyle
          </span>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.8rem] text-primary-foreground leading-tight max-w-3xl">
            Blue Light &amp; Skin Damage: Should You Worry About Screen Time?
          </h1>

          <p className="mt-4 text-primary-foreground/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            We spend hours every day on our phones, laptops, and tablets — but can all that screen time actually
            damage your skin? Here's what science really says about blue light, pigmentation, wrinkles, and whether
            you need "blue light" skincare.
          </p>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-primary-foreground/50">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> Dr. Tasvaa Team
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> 6 min read
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> September 2026
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
              <div className="rounded-2xl border border-sky-200 bg-sky-50/80 p-5 sm:p-6 mb-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/50 font-semibold mb-2">
                  In a Nutshell
                </p>
                <p className="text-sm sm:text-base text-coffee/80 leading-relaxed">
                  Blue light from digital screens does not appear to cause significant skin damage during normal
                  everyday use. Laboratory studies suggest it can contribute to oxidative stress and pigmentation
                  under certain conditions, but the amount emitted by phones and laptops is far lower than what you
                  get from the sun. For most people, UV rays remain the biggest threat to skin health.
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Your day probably starts with checking your phone. Then come hours on a laptop, scrolling during
                  breaks, watching videos, and one last look at your screen before bed.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  With screen time now a permanent part of modern life, many people are asking:{" "}
                  <em className="text-coffee/80">"Doctor, can blue light from my phone or laptop damage my skin?"</em>
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  At <strong className="text-coffee/80">Tasvaa Skin &amp; Hair Clinic</strong>, Dr. Krithi often
                  hears concerns about blue light causing pigmentation, wrinkles, and premature ageing. The truth?
                  Blue light has become one of the most talked-about skincare topics online — but not everything
                  you see on social media is backed by science.
                </p>
              </div>

              {/* Section 1 */}
              <section id="section-1" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    01
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    What Exactly Is Blue Light?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    Blue light is a type of visible light with a short wavelength and relatively high energy. It
                    comes from several sources, including:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-4">
                    {blueLightSources.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.74_0.1_78)] flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-amber-200/70 bg-amber-50/60 p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Digital devices do emit blue light, but as you'll see in Section 3, they're a minor
                      contributor compared to sunlight — which is why most dermatology guidance still centres on
                      sun protection rather than screen time.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    02
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    Can Blue Light Damage the Skin?
                  </h2>
                </div>

                <div className="ml-11 space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Research is still ongoing, but current evidence suggests blue light can affect skin cells
                    under certain conditions. Laboratory studies show it may increase the production of free
                    radicals, triggering oxidative stress — a chemical imbalance that can break down collagen,
                    increase inflammation, and contribute to uneven skin tone or pigmentation.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Here's the catch: most of these studies expose skin to doses of blue light far higher than
                    what you'd absorb from everyday screen use. In real-world conditions, your smartphone alone
                    is unlikely to cause noticeable skin damage.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    03
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    Blue Light from the Sun vs. Digital Screens
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    This is where many online myths begin. People often assume phones and laptops are the biggest
                    source of blue light exposure. In reality, it's the opposite:
                  </p>

                  <div className="overflow-hidden rounded-xl border border-[oklch(0.74_0.1_78/0.25)] bg-white mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[oklch(0.97_0.02_78)] text-coffee">
                          <th className="px-4 py-3 text-left font-medium">Source</th>
                          <th className="px-4 py-3 text-left font-medium">Amount of Blue Light</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sunVsScreens.map((row) => (
                          <tr key={row.source} className="border-t border-[oklch(0.74_0.1_78/0.15)]">
                            <td className="px-4 py-3 text-coffee/85">{row.source}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-block rounded-full px-2.5 py-0.5 text-xs ${
                                  row.tone === "high"
                                    ? "bg-rose-100 text-rose-800"
                                    : row.tone === "low"
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-emerald-100 text-emerald-800"
                                }`}
                              >
                                {row.amount}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-[oklch(0.97_0.02_78)] p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This is exactly why dermatologists keep circling back to sun protection:{" "}
                      <strong className="text-coffee/80">UV rays remain the leading cause of premature ageing,
                      pigmentation, and skin cancer.</strong>{" "}
                      Your screen simply isn't in the same league.
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
                    Who Should Be More Careful?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    For most people, normal screen time isn't something to worry about. But certain individuals
                    are more sensitive to visible light in general, including those with:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {sensitiveGroups.map((s) => (
                      <div
                        key={s}
                        className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 p-3.5 text-xs text-muted-foreground leading-relaxed"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-amber-200/70 bg-amber-50/60 p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      In these cases, blue light may add to existing pigmentation concerns — though sunlight still
                      plays the much bigger role. If you fall into one of these groups, the practical takeaway is
                      in Section 6: <strong className="text-coffee/80">tinted sunscreen.</strong>
                    </p>
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
                    Does Blue Light Cause Wrinkles?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    This is one of the biggest skincare myths online. There's currently no strong evidence that
                    normal screen use causes noticeable wrinkles or premature ageing. The real drivers of skin
                    ageing are:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-4">
                    {ageingDrivers.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.74_0.1_78)] flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="border-l-4 border-[oklch(0.74_0.1_78)] pl-4 py-1">
                    <p className="text-sm sm:text-base text-coffee/80 italic leading-relaxed">
                      Your sleep schedule is probably ageing your skin more than your smartphone is.
                    </p>
                  </blockquote>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    06
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    Should You Wear Sunscreen Indoors?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    It depends on your environment. Daily sunscreen is still worth it if:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {wearSunscreenIf.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 p-3.5 text-xs text-muted-foreground leading-relaxed"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-[oklch(0.97_0.02_78)] p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For people with pigmentation disorders, dermatologists often recommend{" "}
                      <strong className="text-coffee/80">tinted sunscreens</strong> which help shield skin from
                      visible light — including blue light — in a way regular sunscreen doesn't.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    07
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    Can Skincare Protect Against Blue Light?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    No skincare product can fully block blue light. But antioxidant-rich ingredients help the
                    skin defend itself against the oxidative stress it can trigger. Look for:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {antioxidantIngredients.map((i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-[oklch(0.74_0.1_78/0.25)] bg-white/80 p-3.5 text-center"
                      >
                        <p className="text-sm font-medium text-coffee/85">{i}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Rather than chasing products marketed solely as "blue light protection," focus on a
                    consistent routine suited to your skin type — antioxidants plus daily sunscreen cover you
                    against light exposure of all kinds.
                  </p>
                </div>
              </section>

              {/* Section 8 — FAQ */}
              <section id="section-8" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    08
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    Common Questions Patients Ask
                  </h2>
                </div>

                <div className="ml-11 rounded-2xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 px-5 divide-y divide-transparent">
                  {faqs.map((faq) => (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
                    09
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">
                    When Should You See a Dermatologist?
                  </h2>
                </div>

                <div className="ml-11">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    Consider booking a consultation if:
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
                      , Dr. Krithi believes in evidence-based skincare — not internet myths. Whether you're dealing
                      with pigmentation, melasma, acne, or signs of premature ageing, your skin is assessed based
                      on your skin type, lifestyle, medical history, and individual concerns to build a treatment
                      plan that's right for you.
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
                  "Blue light from your phone isn't something most people need to fear — everyday screen use
                  contributes far less to skin damage than sunlight does."
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
                    Worried About Your Skin?
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Book a consultation with Dr. Krithi and get an evidence-based plan for your skin — not viral trends.
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
