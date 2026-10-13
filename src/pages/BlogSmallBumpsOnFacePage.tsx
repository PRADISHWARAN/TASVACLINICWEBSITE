import {
  BlogArticleLayout,
  Bullets,
  Callout,
  CardGrid,
  H3,
  Intro,
  IntroP,
  LabeledList,
  P,
  Section,
  Steps,
  SubCard,
  TakeawayP,
  type BlogArticleMeta,
} from "@/components/site/BlogArticle";

const meta: BlogArticleMeta = {
  slug: "/blog/small-bumps-on-face-acne-milia-folliculitis",
  title: "Small Bumps on Your Face: Acne, Milia, Folliculitis or Something Else?",
  category: "Acne & Skin Care",
  heroDescription:
    "Tiny bumps on your cheeks, forehead, or around your eyes and not sure what they are? Learn how to tell acne, milia, folliculitis, and other common skin bumps apart, and what to do about each.",
  seoTitle: "Small Bumps on Face: Acne, Milia or Folliculitis? | Tasvaa Clinic Bengaluru",
  seoDescription:
    "Small bumps on your face? Dr. Krithi Subhas at Tasvaa Clinic, Bengaluru explains how to tell acne, milia, folliculitis, closed comedones, syringomas and warts apart — and when to see a dermatologist.",
  keywords:
    "small bumps on face, milia, folliculitis, closed comedones, fungal acne, sebaceous hyperplasia, syringoma, facial bumps treatment Bangalore, dermatologist Bengaluru, Tasvaa Clinic",
  readTime: "9 min",
  date: "October 2026",
  datePublished: "2026-10-13",
  nutshell:
    "Small bumps on the face can be acne, milia, folliculitis, closed comedones, sebaceous hyperplasia, syringomas, warts, or even a reaction to a product. They can look similar but need very different treatments. Acne bumps are linked to clogged pores and oil, milia are tiny hard white cysts, and folliculitis is inflamed or infected hair follicles. Squeezing or guessing with random creams can worsen the problem, so persistent bumps are best diagnosed by a dermatologist.",
  nutshellTone: "border-cyan-200 bg-cyan-50/80",
  toc: [
    { id: "section-1", label: "Why Bumps Form" },
    { id: "section-2", label: "Common Types" },
    { id: "section-3", label: "How to Tell Them Apart" },
    { id: "section-4", label: "Common Mistakes" },
    { id: "section-5", label: "Caring for Bump-Prone Skin" },
    { id: "section-6", label: "See a Dermatologist" },
    { id: "clinic-cta", label: "Treatment at Tasvaa" },
  ],
  sidebarCta: {
    title: "Not Sure What Those Bumps Are?",
    body: "Book a consultation with Dr. Krithi for a clear diagnosis and a safe treatment plan — no guesswork.",
  },
};

const comparison = [
  {
    type: "Acne",
    appearance: "Blackheads, whiteheads, red bumps, pustules",
    location: "Forehead, cheeks, chin, jawline",
    feel: "Often tender",
  },
  {
    type: "Closed comedones",
    appearance: "Flesh-coloured, rough texture",
    location: "Forehead, cheeks",
    feel: "Usually not",
  },
  { type: "Milia", appearance: "Hard, pearly white dots", location: "Around the eyes, cheeks", feel: "No" },
  {
    type: "Folliculitis",
    appearance: "Red or white bumps around hair follicles",
    location: "Beard area, hairline, forehead",
    feel: "Often itchy or sore",
  },
  {
    type: "Sebaceous hyperplasia",
    appearance: "Yellowish, shiny, central dip",
    location: "Forehead, cheeks",
    feel: "No",
  },
  {
    type: "Syringoma",
    appearance: "Firm, skin-coloured bumps",
    location: "Under the eyes, upper cheeks",
    feel: "No",
  },
  {
    type: "Warts / Molluscum",
    appearance: "Flat or dome-shaped, may have a dimple",
    location: "Anywhere on the face",
    feel: "Usually not, can spread",
  },
  {
    type: "Product reaction",
    appearance: "Rough, red, itchy bumps",
    location: "Where the product was applied",
    feel: "Often itchy or burning",
  },
];

export function BlogSmallBumpsOnFacePage() {
  return (
    <BlogArticleLayout
      meta={meta}
      clinicCta={
        <>
          <p>
            If you're looking for acne and skin bump treatment in Bangalore, the team at{" "}
            <strong className="text-primary-foreground font-semibold">Tasvaa Skin &amp; Hair Clinic</strong> can help
            you find out exactly what's on your skin. Dr. Krithi takes a careful, patient-first approach: examining
            your skin, understanding your routine and lifestyle, and creating a personalised treatment plan, whether
            it's acne, milia, folliculitis, or another condition.
          </p>
          <p>
            You'll leave with a clear diagnosis, a safe treatment plan, and guidance to help keep your skin clear.
          </p>
          <p>Book a consultation at Tasvaa Skin &amp; Hair Clinic and get answers for your skin.</p>
        </>
      }
      takeaway={
        <TakeawayP lead>
          "Not every bump is acne, and the right treatment starts with knowing exactly what you're treating."
        </TakeawayP>
      }
    >
      <Intro>
        <IntroP>
          You run your fingers across your face and feel it: a rough patch of tiny bumps that weren't there a few weeks
          ago. Some are skin-coloured, some are white, and some are red. They don't look like a typical pimple, and the
          acne products on your shelf aren't helping.
        </IntroP>
        <IntroP>
          Because many facial bumps look alike, it's easy to mistake one for another. And treating the wrong condition
          can make things worse, whether that means irritating your skin, spreading an infection, or leaving behind
          marks.
        </IntroP>
        <IntroP>
          In this article, we explain the most common causes of small facial bumps, how to tell them apart, what not to
          do, and when to see a dermatologist.
        </IntroP>
      </Intro>

      <Section id="section-1" number={1} title="Why Do Small Bumps Form on the Face?">
        <P>
          Most facial bumps form when something disturbs the skin's pores, hair follicles, or oil glands. Common
          reasons include:
        </P>
        <Bullets
          items={[
            "Excess oil (sebum) production, which can block pores",
            "Dead skin cell buildup that traps oil and debris",
            "Bacteria or yeast growing in or around follicles",
            "Hormonal changes, such as those during puberty, periods, PCOS, or stress",
            "Heavy or unsuitable products, including makeup, sunscreens, and hair products",
            "Friction, sweat, and humidity, which are common issues in a city like Bangalore",
            "Genetics, as some people are naturally more prone to certain bumps",
          ]}
        />
        <Callout>
          <p>
            Because so many factors are involved, the appearance and location of the bumps give important clues about
            what they are.
          </p>
        </Callout>
      </Section>

      <Section id="section-2" number={2} title="Common Types of Small Facial Bumps">
        <SubCard title="Acne (Comedones, Papules, and Pustules)">
          <p>
            Acne is the most common cause of facial bumps. It happens when pores get blocked with oil and dead skin
            cells, sometimes with inflammation or bacteria.
          </p>
          <LabeledList
            items={[
              ["Blackheads (open comedones)", "Small dark dots on the nose, chin, or forehead"],
              [
                "Whiteheads (closed comedones)",
                "Small, flesh-coloured or white bumps, often with a rough texture",
              ],
              ["Papules and pustules", "Red, tender bumps, sometimes with a white or yellow tip"],
            ]}
          />
          <p>Usually appear on the forehead, cheeks, nose, chin, and jawline.</p>
        </SubCard>
        <SubCard title="Closed Comedones">
          <p>
            These are small, skin-coloured bumps that give the skin a rough, uneven texture, often on the forehead and
            cheeks. They are not usually red or painful, but they can become inflamed over time.
          </p>
        </SubCard>
        <SubCard title="Milia">
          <p>
            Milia are tiny, hard, pearly white or yellowish bumps that form when keratin gets trapped beneath the
            skin's surface.
          </p>
          <Bullets
            items={[
              "Commonly appear around the eyes, cheeks, and nose",
              "Do not have an opening like a blackhead",
              "Not painful or itchy",
              "Cannot be squeezed out like a pimple",
              "Can occur due to heavy creams, sun damage, or skin trauma",
            ]}
          />
        </SubCard>
        <SubCard title="Folliculitis">
          <p>
            Folliculitis is inflammation or infection of the hair follicles. It can be caused by bacteria, yeast,
            shaving, friction, or occlusive products.
          </p>
          <Bullets
            items={[
              "Small red or white bumps, often centred on a hair follicle",
              "May be itchy, sore, or burning",
              "Common in the beard area, jawline, and hairline",
              "Fungal folliculitis (Malassezia folliculitis) shows up as uniform, itchy bumps, often on the forehead, and does not respond to regular acne treatments",
            ]}
          />
        </SubCard>
        <div className="grid sm:grid-cols-2 gap-3">
          <SubCard title="Sebaceous Hyperplasia">
            <p>
              These are small, yellowish, shiny bumps with a tiny central dip. They are caused by enlarged oil glands
              and are more common in adults with oily skin, especially on the forehead and cheeks. They are harmless
              but can be mistaken for acne.
            </p>
          </SubCard>
          <SubCard title="Syringomas">
            <p>
              These are small, firm, skin-coloured or slightly yellowish bumps that appear most often around the lower
              eyelids and upper cheeks. They arise from sweat glands, are harmless, and don't go away with acne creams.
            </p>
          </SubCard>
          <SubCard title="Warts and Molluscum">
            <p>
              Small, raised, skin-coloured growths caused by viral infections. Flat warts often appear in clusters on
              the face, and molluscum can look like tiny, dome-shaped bumps with a central dimple. Both can spread by
              touch or scratching.
            </p>
          </SubCard>
          <SubCard title="Contact Dermatitis or Product Reaction">
            <p>
              Redness, rough bumps, itching, or burning after using a new skincare, makeup, or hair product may point
              to an irritant or allergic reaction.
            </p>
          </SubCard>
        </div>
      </Section>

      <Section id="section-3" number={3} title="How to Tell Them Apart">
        <P>Look closely at where the bumps are, how they feel, and how they behave:</P>
        <div className="overflow-x-auto rounded-xl border border-[oklch(0.74_0.1_78/0.25)] bg-white">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-[oklch(0.97_0.02_78)] text-coffee">
                <th className="px-4 py-3 text-left font-medium">Type</th>
                <th className="px-4 py-3 text-left font-medium">Appearance</th>
                <th className="px-4 py-3 text-left font-medium">Common Location</th>
                <th className="px-4 py-3 text-left font-medium">Itchy or Painful?</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.type} className="border-t border-[oklch(0.74_0.1_78/0.15)] align-top">
                  <td className="px-4 py-3 text-coffee/85 font-medium">{row.type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.appearance}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.location}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.feel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <H3>Questions to Ask Yourself</H3>
        <CardGrid
          items={[
            "Are the bumps all the same size and uniform, or varied?",
            "Are they itchy, painful, or painless?",
            "Do they have a central opening or dark tip?",
            "Did they start after a new product, shaving, or change in routine?",
            "Are they spreading, or staying the same?",
            "Do you have other symptoms, such as irregular periods, excess facial hair, or oily scalp and dandruff?",
          ]}
        />
        <Callout tone="amber">
          <p>
            Keep in mind that more than one condition can occur together, and several look very similar even to the
            trained eye. Self-diagnosis can be misleading.
          </p>
        </Callout>
      </Section>

      <Section id="section-4" number={4} title="Common Mistakes When Treating Facial Bumps">
        <P>Many people unintentionally make bumps worse. Avoid these mistakes:</P>
        <CardGrid
          items={[
            "Squeezing or picking, which can cause infection, scarring, and dark marks",
            "Using acne creams on every bump, even if it's milia, fungal folliculitis, or a wart",
            "Over-scrubbing or over-exfoliating, which damages the skin barrier",
            "Applying toothpaste, lemon, or home remedies, which can burn or irritate the skin",
            "Layering too many active ingredients at once",
            "Using heavy, oil-rich creams on bump-prone skin",
            "Trying to remove milia or warts at home with needles or blades",
            "Switching products constantly, which makes it hard to know what's working",
          ]}
        />
      </Section>

      <Section id="section-5" number={5} title="How to Care for Bump-Prone Skin">
        <P>While you wait for a proper diagnosis, these simple steps can help:</P>
        <Steps
          items={[
            "Cleanse gently twice a day with a mild, non-stripping cleanser",
            "Moisturise with a lightweight, non-comedogenic product",
            "Use sunscreen daily, choosing a light, non-greasy formula",
            "Wash your face after sweating or wearing makeup",
            "Keep hands, phones, and pillowcases clean",
            "Avoid sharing razors and towels, and shave gently using a clean blade",
            "Introduce one new product at a time",
            "Keep hair products away from your face, especially oils and styling products",
          ]}
        />
        <Callout>
          <p>If bumps haven't improved after a few weeks of gentle care, it's time to get them examined.</p>
        </Callout>
      </Section>

      <Section id="section-6" number={6} title="When Should You See a Dermatologist?">
        <P>You should consult a dermatologist if:</P>
        <CardGrid
          items={[
            "The bumps don't improve after three to four weeks of gentle care",
            "They are spreading, increasing, or returning repeatedly",
            "They are itchy, painful, inflamed, or oozing",
            "Regular acne treatments make them worse or do nothing",
            "You notice dark marks or scarring after the bumps heal",
            "The bumps look unusual, are growing, bleeding, or not healing",
            "You suspect fungal folliculitis, warts, or molluscum",
            "You want safe removal of milia, syringomas, sebaceous hyperplasia, or warts",
          ]}
        />
        <P>
          A dermatologist can often identify the cause just by examining your skin, sometimes with a dermoscope, and
          may suggest further tests when needed. The right diagnosis leads to the right treatment, which saves you
          months of trial and error.
        </P>
      </Section>
    </BlogArticleLayout>
  );
}
