import { ArrowRight, Clock, User } from "lucide-react";
import { useRouter } from "@/lib/use-router";

const posts = [
  {
    category: "Skin Care",
    title: "5 Signs You Need a Dermatologist (Not a Home Remedy)",
    excerpt:
      "DIY face packs and pharmacy creams can soothe minor irritation, but some skin conditions worsen with delay. Here's when to book a professional consultation.",
    author: "Dr. Tasvaa Team",
    readTime: "4 min",
    date: "May 2026",
    color: "from-amber-50 to-orange-50",
    border: "border-amber-200/60",
  },
  {
    category: "Hair Care",
    title: "PRP Therapy for Hair Loss: What to Expect at Your First Session",
    excerpt:
      "Platelet-Rich Plasma therapy is one of the most effective non-surgical treatments for hair thinning. We walk you through the full process — from blood draw to visible results.",
    author: "Dr. Tasvaa Team",
    readTime: "5 min",
    date: "April 2026",
    color: "from-rose-50 to-pink-50",
    border: "border-rose-200/60",
  },
  {
    category: "Skin Tips",
    title: "Building a Skincare Routine for Bangalore's Climate",
    excerpt:
      "Bengaluru's mix of humidity, pollution, and temperature swings makes generic skincare routines fall short. Our dermatologists share what actually works.",
    author: "Dr. Tasvaa Team",
    readTime: "6 min",
    date: "March 2026",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-200/60",
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
                onClick={() => navigate("/appointments")}
                className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-coffee/70 hover:text-coffee transition-colors"
              >
                Book a Consult <ArrowRight className="h-3 w-3" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
