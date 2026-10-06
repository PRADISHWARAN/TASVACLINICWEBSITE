import {
  BlogArticleLayout,
  Callout,
  CardGrid,
  Intro,
  IntroP,
  P,
  Quote,
  Section,
  TakeawayP,
  type BlogArticleMeta,
} from "@/components/site/BlogArticle";

const meta: BlogArticleMeta = {
  slug: "/blog/bangalore-weather-skin-barrier-breakouts",
  title: "Bangalore Weather & Your Skin Barrier: How Humidity and Pollution Trigger Breakouts",
  category: "Acne & Skin Care",
  heroDescription:
    "Why does your skin suddenly feel oilier, more congested, or more irritated in Bangalore? Here's how humidity, sweat, pollution, and your skin barrier can interact.",
  seoTitle: "Bangalore Weather, Pollution & Breakouts: Protect Your Skin Barrier | Tasvaa Clinic",
  seoDescription:
    "How Bangalore's humidity, sweat and traffic pollution interact with your skin barrier to worsen acne — and why over-cleansing backfires. From Dr. Krithi Subhas, Tasvaa Clinic, Bengaluru.",
  keywords:
    "Bangalore weather skin, humidity acne, pollution breakouts, skin barrier, over-cleansing, acne treatment Bangalore, dermatologist Bengaluru, Tasvaa Clinic",
  readTime: "6 min",
  date: "October 2026",
  datePublished: "2026-10-06",
  nutshell:
    "Bangalore's environmental conditions can create a difficult combination for acne-prone skin: humidity increases moisture and sweat on the skin surface, while pollution exposes the skin to particulate matter and oxidative stress. When the skin barrier is already irritated, this combination can contribute to inflammation and make existing acne harder to control.",
  nutshellTone: "border-teal-200 bg-teal-50/80",
  toc: [
    { id: "section-1", label: "What Humidity Does" },
    { id: "section-2", label: "The Pollution Problem" },
    { id: "section-3", label: "Your Skin Barrier" },
    { id: "section-4", label: "The Commute Factor" },
    { id: "section-5", label: "Over-Cleansing" },
    { id: "section-6", label: "Is It Really the Weather?" },
    { id: "section-7", label: "Beyond Skincare" },
    { id: "clinic-cta", label: "About Tasvaa Clinic" },
  ],
  sidebarCta: {
    title: "Breakouts That Won't Settle?",
    body: "Book a consultation with Dr. Krithi to find out what's really driving your acne — not trial-and-error skincare.",
  },
};

const dayTimeline = [
  { time: "Morning", detail: "Outdoor traffic + pollution" },
  { time: "Commute", detail: "Sweat + sunscreen + environmental exposure" },
  { time: "Afternoon", detail: "Heat and humidity" },
  { time: "Office", detail: "Air-conditioned environment" },
  { time: "Evening", detail: "More outdoor exposure" },
  { time: "Night", detail: "Accumulated sunscreen, sweat, sebum and particles on the skin" },
];

const barrierCycle = [
  "Environmental exposure",
  "Irritation",
  "Barrier disruption",
  "Increased sensitivity",
  "More irritation",
];

export function BlogBangaloreWeatherSkinPage() {
  return (
    <BlogArticleLayout
      meta={meta}
      clinicCta={
        <>
          <p>
            At <strong className="text-primary-foreground font-semibold">Tasvaa Skin &amp; Hair Clinic</strong>, Dr.
            Krithi can evaluate your acne, skin barrier, pigmentation, and environmental or hormonal factors that may be
            contributing to recurring breakouts.
          </p>
          <p>
            For acne treatment in Bangalore, a dermatology consultation can help identify what is actually driving your
            acne rather than relying on trial-and-error skincare.
          </p>
        </>
      }
      takeaway={
        <>
          <TakeawayP lead>
            "Bangalore's humidity and pollution don't directly cause every breakout. But they can add sweat, oil,
            environmental stress, and irritation to skin that is already acne-prone."
          </TakeawayP>
          <TakeawayP>Understanding that difference is important.</TakeawayP>
          <TakeawayP>
            Instead of constantly adding stronger products, focus on identifying why your skin is breaking out in the
            first place and whether your skin barrier is being irritated along the way.
          </TakeawayP>
        </>
      }
    >
      <Intro>
        <IntroP>You may notice that your skin behaves differently depending on where you spend your day.</IntroP>
        <IntroP>
          A morning commute through Bangalore traffic, hours outdoors, and a humid afternoon can leave your face feeling
          very different from how it felt when you woke up.
        </IntroP>
        <IntroP>
          But the problem isn't simply that Bangalore is "polluted" or "humid." It is the{" "}
          <strong className="text-coffee/80">interaction</strong> between sweat, sebum, environmental particles, and
          the skin barrier that matters.
        </IntroP>
        <IntroP>And this is why simply washing your face more often isn't necessarily the answer.</IntroP>
      </Intro>

      <Section id="section-1" number={1} title="What Humidity Actually Does to Acne-Prone Skin">
        <P>
          Humidity increases the amount of water in the air, which can reduce the evaporation of sweat from your skin.
        </P>
        <P>
          That matters because sweat doesn't exist on the skin by itself. It mixes with sebum, skincare products, and
          environmental particles. For someone already prone to clogged pores, this can create a more congested skin
          environment.
        </P>
        <Callout tone="amber">
          <p>
            This doesn't mean humidity causes acne by itself. Instead, it can{" "}
            <strong className="text-coffee/80">amplify</strong> conditions that already contribute to breakouts.
          </p>
        </Callout>
      </Section>

      <Section id="section-2" number={2} title={`The Pollution Problem Isn't Just "Dirt"`}>
        <P>
          Traffic-related air pollution contains tiny particulate matter and other pollutants. These particles can
          interact with the skin and contribute to oxidative stress and inflammation.
        </P>
        <P>This is different from saying:</P>
        <Quote>"Pollution gets into your pores and causes pimples."</Quote>
        <P>Acne is much more complicated than that.</P>
        <Callout>
          <p>
            The concern is that repeated environmental exposure may add another inflammatory stressor to skin that is
            already acne-prone or has a compromised barrier.
          </p>
        </Callout>
      </Section>

      <Section id="section-3" number={3} title="Why Your Skin Barrier Changes the Equation">
        <P>
          Your skin barrier is made up of lipids, proteins, and skin cells that help regulate water loss and protect
          against external irritants. When this barrier is disrupted, the skin can become more reactive.
        </P>
        <P>This creates an important cycle:</P>
        <div className="flex flex-wrap items-center gap-2">
          {barrierCycle.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-[oklch(0.74_0.1_78/0.3)] bg-white/80 px-3 py-1.5 text-xs text-coffee/85">
                {step}
              </span>
              {i < barrierCycle.length - 1 && <span className="text-coffee/40 text-sm">→</span>}
            </div>
          ))}
        </div>
        <P>
          If you are simultaneously using strong exfoliating acids, retinoids, acne treatments, scrubs, or harsh
          cleansers, the problem can become worse.
        </P>
        <P>
          This is why some people experience an unusual combination of oiliness and irritation at the same time.
        </P>
      </Section>

      <Section id="section-4" number={4} title="The Bangalore Commute Factor">
        <P>Your skin may experience several different environments in a single day.</P>
        <ol className="relative border-l-2 border-[oklch(0.74_0.1_78/0.3)] ml-2 space-y-4">
          {dayTimeline.map((t) => (
            <li key={t.time} className="pl-5 relative">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[oklch(0.74_0.1_78)]" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-coffee/50 font-semibold">{t.time}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
            </li>
          ))}
        </ol>
        <P>Your skin doesn't necessarily need a completely different routine for every environment.</P>
        <P>
          But this explains why a routine that feels comfortable at home may not feel the same after a full day
          outside.
        </P>
      </Section>

      <Section id="section-5" number={5} title="Why Over-Cleansing Can Backfire">
        <P>This is where many acne-prone people get stuck.</P>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            "Their skin feels oily, so they use a stronger cleanser.",
            "It still feels oily, so they wash again.",
            "Then they add a scrub or another exfoliating product.",
          ].map((s) => (
            <div
              key={s}
              className="rounded-xl border border-[oklch(0.74_0.1_78/0.2)] bg-white/70 p-3.5 text-xs text-muted-foreground leading-relaxed"
            >
              {s}
            </div>
          ))}
        </div>
        <P>
          The result can be a damaged or irritated barrier without actually addressing the underlying acne.
        </P>
        <Callout>
          <p>
            <strong className="text-coffee/80">More cleansing does not automatically mean fewer breakouts.</strong> The
            goal is to remove accumulated sweat, sunscreen, sebum, and environmental residue without unnecessarily
            irritating the skin.
          </p>
        </Callout>
      </Section>

      <Section id="section-6" number={6} title="Is Your Skin Actually Breaking Out Because of the Weather?">
        <P>Not every Bangalore breakout is a "weather breakout."</P>
        <P>
          If acne is persistent, painful, concentrated around the jawline, or leaving pigmentation and scars,
          environmental factors may only be one part of the picture.
        </P>
        <P>
          Hormonal acne, follicular occlusion, skincare products, medications, and genetics can all contribute.
        </P>
        <Callout tone="amber">
          <p>
            This distinction matters because changing your skincare routine cannot correct every underlying cause of
            acne.
          </p>
        </Callout>
      </Section>

      <Section id="section-7" number={7} title="When Your Skin Needs More Than Skincare">
        <P>Consider seeing a dermatologist if you have:</P>
        <CardGrid
          items={[
            "Persistent acne despite a consistent routine",
            "Painful or deep pimples",
            "Frequent breakouts after previously clear skin",
            "Dark marks that keep appearing after acne",
            "Depressed or raised acne scars",
            "Significant irritation alongside breakouts",
            "Sudden changes in facial acne or hair growth",
          ]}
        />
        <P>
          The treatment should address the type and severity of acne rather than simply treating the environmental
          trigger.
        </P>
      </Section>
    </BlogArticleLayout>
  );
}
