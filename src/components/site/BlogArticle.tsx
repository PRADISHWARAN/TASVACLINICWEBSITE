import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useRouter } from "@/lib/use-router";
import { SITE } from "@/lib/site";
import { useSEO } from "@/lib/useSEO";
import { ArrowLeft, Clock, User, Calendar, MapPin, Phone, ChevronRight } from "lucide-react";

const BASE_URL = "https://tasvaaskinandhairclinic.com";

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
    title: "Blue Light & Skin Damage: Should You Worry About Screen Time?",
    slug: "/blog/blue-light-skin-damage-screen-time",
    color: "from-sky-100 to-blue-100",
  },
  {
    title: "Why Do Some People Scar Easily After Pimples?",
    slug: "/blog/why-some-people-scar-easily-after-pimples",
    color: "from-emerald-100 to-teal-100",
  },
];

export type BlogArticleMeta = {
  slug: string;
  title: string;
  category: string;
  heroDescription: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  readTime: string;
  date: string;
  datePublished: string;
  nutshell: string;
  /** Tailwind classes for the "In a Nutshell" box border + background */
  nutshellTone: string;
  toc: { id: string; label: string }[];
  sidebarCta: { title: string; body: string };
};

function buildSchema(meta: BlogArticleMeta) {
  const url = `${BASE_URL}${meta.slug}`;
  return JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: meta.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: meta.title,
      description: meta.heroDescription,
      author: { "@type": "Organization", name: "Tasvaa Skin and Hair Clinic" },
      publisher: { "@type": "Organization", name: "Tasvaa Skin and Hair Clinic", url: BASE_URL },
      datePublished: meta.datePublished,
      url,
      mainEntityOfPage: url,
      keywords: meta.keywords,
      articleSection: meta.category,
      inLanguage: "en-IN",
    },
  ]);
}

/* ── Content building blocks ─────────────────────────────────────── */

export function Intro({ children }: { children: ReactNode }) {
  return <div className="mb-10 space-y-4">{children}</div>;
}

export function IntroP({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{children}</p>;
}

export function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee/10 text-coffee font-semibold text-xs flex items-center justify-center">
          {String(number).padStart(2, "0")}
        </span>
        <h2 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-coffee leading-tight">{title}</h2>
      </div>
      <div className="ml-11 space-y-4">{children}</div>
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{children}</p>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-display text-lg text-coffee leading-snug pt-2">{children}</h3>;
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
      {items.map((s) => (
        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.74_0.1_78)] flex-shrink-0" />
          {s}
        </li>
      ))}
    </ul>
  );
}

export function CardGrid({ items }: { items: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 p-3.5 text-xs text-muted-foreground leading-relaxed"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export function SubCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 p-4">
      <p className="text-sm font-medium text-coffee/85 mb-1.5">{title}</p>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export function Callout({ tone = "gold", children }: { tone?: "gold" | "amber"; children: ReactNode }) {
  const cls =
    tone === "amber"
      ? "border-amber-200/70 bg-amber-50/60"
      : "border-[oklch(0.74_0.1_78/0.2)] bg-[oklch(0.97_0.02_78)]";
  return (
    <div className={`rounded-xl border ${cls} p-4`}>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-4 border-[oklch(0.74_0.1_78)] pl-4 py-1">
      <p className="text-sm sm:text-base text-coffee/80 italic leading-relaxed">{children}</p>
    </blockquote>
  );
}

export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2">
      {items.map((s, i) => (
        <li key={s} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
          <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[oklch(0.97_0.02_78)] border border-[oklch(0.74_0.1_78/0.3)] text-[10px] text-coffee/70 flex items-center justify-center">
            {i + 1}
          </span>
          {s}
        </li>
      ))}
    </ol>
  );
}

/* ── Page layout ─────────────────────────────────────────────────── */

export function BlogArticleLayout({
  meta,
  clinicCta,
  takeaway,
  children,
}: {
  meta: BlogArticleMeta;
  clinicCta: ReactNode;
  takeaway: ReactNode;
  children: ReactNode;
}) {
  useReveal();
  const { navigate } = useRouter();
  useSEO({
    title: meta.seoTitle,
    description: meta.seoDescription,
    path: meta.slug,
    ogTitle: meta.title,
    ogDescription: meta.heroDescription,
    schemaJson: buildSchema(meta),
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
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-primary-foreground/50">
            <button onClick={() => navigate("/")} className="hover:text-primary-foreground/80 transition-colors">
              Home
            </button>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <button onClick={() => navigate("/blog")} className="hover:text-primary-foreground/80 transition-colors">
              Blog
            </button>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-primary-foreground/80 font-medium">{meta.category}</span>
          </nav>

          <span className="inline-block rounded-full border border-[oklch(0.82_0.09_78/0.5)] bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[oklch(0.82_0.09_78)] mb-4">
            {meta.category}
          </span>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.8rem] text-primary-foreground leading-tight max-w-3xl">
            {meta.title}
          </h1>

          <p className="mt-4 text-primary-foreground/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            {meta.heroDescription}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-primary-foreground/50">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> Dr. Krithi Subhas
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {meta.readTime} read
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {meta.date}
            </span>
          </div>

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
            <main className="min-w-0">
              {/* In a Nutshell */}
              <div className={`rounded-2xl border ${meta.nutshellTone} p-5 sm:p-6 mb-8`}>
                <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/50 font-semibold mb-2">
                  In a Nutshell
                </p>
                <p className="text-sm sm:text-base text-coffee/80 leading-relaxed">{meta.nutshell}</p>
              </div>

              {children}

              {/* Clinic CTA */}
              <section id="clinic-cta" className="mb-10">
                <div className="rounded-2xl bg-gradient-to-br from-coffee to-[oklch(0.25_0.04_45)] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50 mb-2">
                      Tasvaa Skin &amp; Hair Clinic
                    </p>
                    <div className="text-primary-foreground/90 text-sm sm:text-base leading-relaxed space-y-3">
                      {clinicCta}
                    </div>
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
              <section id="final-takeaway" className="mb-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/50 font-semibold mb-3">
                  Final Takeaway
                </p>
                <blockquote className="border-l-4 border-[oklch(0.74_0.1_78)] pl-5 py-1 space-y-3">
                  {takeaway}
                </blockquote>
              </section>

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
                <div className="rounded-2xl border border-[oklch(0.74_0.1_78/0.25)] bg-white shadow-card p-5">
                  <h3 className="font-display text-sm text-coffee mb-4">Table of Contents</h3>
                  <ol className="space-y-2.5">
                    {meta.toc.map((item, i) => (
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

                <div className="rounded-2xl border border-[oklch(0.74_0.1_78/0.25)] bg-[oklch(0.97_0.02_78)] p-5 text-center">
                  <div className="w-10 h-10 rounded-xl bg-coffee/10 flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-5 w-5 text-coffee" />
                  </div>
                  <p className="font-display text-sm text-coffee mb-1 leading-snug">{meta.sidebarCta.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{meta.sidebarCta.body}</p>
                  <button
                    onClick={() => navigate("/appointments")}
                    className="w-full rounded-full bg-coffee text-primary-foreground text-[10px] uppercase tracking-widest py-2.5 hover:bg-coffee/90 transition-colors"
                  >
                    Book Consultation
                  </button>
                </div>

                <div className="rounded-2xl border border-[oklch(0.74_0.1_78/0.25)] bg-white shadow-card p-5">
                  <h3 className="font-display text-sm text-coffee mb-4">Popular Blog Topics</h3>
                  <div className="space-y-3">
                    {popularPosts
                      .filter((post) => post.slug !== meta.slug)
                      .slice(0, 4)
                      .map((post) => (
                        <button
                          key={post.title}
                          onClick={() => navigate(post.slug)}
                          className="flex items-center gap-3 w-full text-left group"
                        >
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.color} flex-shrink-0`} />
                          <p className="text-xs text-coffee/80 leading-snug group-hover:text-coffee transition-colors">
                            {post.title}
                          </p>
                        </button>
                      ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-coffee p-5 text-primary-foreground">
                  <p className="font-display text-base mb-0.5">Tasvaa Skin &amp; Hair Clinic</p>
                  <p className="text-xs text-primary-foreground/50 mb-4">Expert care. Healthy skin. Confident you.</p>
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

export function TakeawayP({ children, lead = false }: { children: ReactNode; lead?: boolean }) {
  return lead ? (
    <p className="font-display text-lg sm:text-xl text-coffee italic leading-snug">{children}</p>
  ) : (
    <p className="text-sm sm:text-base text-coffee/80 leading-relaxed">{children}</p>
  );
}
