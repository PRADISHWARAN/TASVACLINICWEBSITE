import { ArrowRight, Clock, User } from "lucide-react";
import { useRouter } from "@/lib/use-router";

const posts = [
  {
    category: "Skin Care",
    title: "Before You Buy Expensive Skincare Products, Read This",
    excerpt:
      "Good skincare does not always need expensive products. A simple routine with a gentle cleanser, moisturiser, and sunscreen — along with safe daily habits — is often enough.",
    author: "Dr. Tasvaa Team",
    readTime: "5 min",
    date: "June 2026",
    color: "from-amber-50 to-orange-50",
    border: "border-amber-200/60",
    slug: "/blog/affordable-skincare-simple-routine",
  },
  {
    category: "Acne & Skin Health",
    title: "Acne, Skin Changes & When Should You See a Dermatologist?",
    excerpt:
      "Acne can happen due to oil, hormones, dandruff, stress, and more. If it is recurring, painful, or leaving marks, early consultation can prevent long-term skin damage.",
    author: "Dr. Tasvaa Team",
    readTime: "7 min",
    date: "June 2026",
    color: "from-rose-50 to-pink-50",
    border: "border-rose-200/60",
    slug: "/blog/acne-treatment-skin-changes-dermatologist",
  },
  {
    category: "Skin Care & Steroid Awareness",
    title: "Is Your Fairness Cream Secretly Damaging Your Skin?",
    excerpt:
      "A cream that gives quick results isn't always the right one. Learn why using steroid creams without medical supervision can do more harm than good.",
    author: "Dr. Tasvaa Team",
    readTime: "5 min",
    date: "July 2026",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-200/60",
    slug: "/blog/fairness-cream-steroid-skin-awareness",
  },
];

export function Blog() {
  const { navigate } = useRouter();
  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-28 bg-marble relative">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="section-label text-gold-shimmer">Expert Insights</span>
          <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
            Skin &amp; hair knowledge, simplified.
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Practical advice from our clinic — evidence-based, jargon-free, and
            tailored to the questions our patients ask most.
          </p>
        </div>

        {/* 1 column mobile → 3 column desktop */}
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className={`reveal group rounded-2xl sm:rounded-3xl border ${post.border} bg-gradient-to-br ${post.color} p-5 sm:p-7 shadow-card hover-glow flex flex-col`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div>
                <span className="inline-block rounded-full border border-gold/40 bg-white/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-coffee">
                  {post.category}
                </span>
              </div>

              <h3 className="mt-3 sm:mt-4 font-display text-lg sm:text-xl text-coffee leading-snug">
                {post.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" /> {post.author}
                  </span>
                  <span className="text-border">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground/70">{post.date}</span>
              </div>

              <button
                onClick={() => navigate(post.slug)}
                className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-coffee/70 hover:text-coffee transition-colors"
              >
                Read Article <ArrowRight className="h-3 w-3" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
