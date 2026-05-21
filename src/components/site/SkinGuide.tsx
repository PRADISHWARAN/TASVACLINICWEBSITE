import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { useRouter } from "@/lib/use-router";

type Section = {
  heading: string;
  items?: string[];
  body?: string;
};

type Condition = {
  category: string;
  title: string;
  excerpt: string;
  color: string;
  border: string;
  dot: string;
  sections: Section[];
};

const conditions: Condition[] = [
  {
    category: "Skin Condition",
    title: "Acne",
    excerpt:
      "Acne or pimples is a common skin issue beginning at puberty, affecting people across all age groups. Hormonal changes stimulate the sebaceous glands, resulting in excess sebum production and clogged pores — creating the perfect environment for bacterial overgrowth and inflammation.",
    color: "from-amber-50 to-orange-50",
    border: "border-amber-200/60",
    dot: "bg-amber-400",
    sections: [
      {
        heading: "How Do Pimples Happen?",
        body: "Hormonal changes stimulate the sebaceous (oil) glands, resulting in excess sebum production. Dead skin cells stick together and clog the pores, trapping oil and debris within the hair follicles. This creates the perfect environment for the overgrowth of Cutibacterium acnes bacteria, leading to inflammation and the formation of acne lesions such as papules, pustules, painful nodules, and cysts.",
      },
      {
        heading: "Common Triggers",
        items: [
          "High glycemic index foods — sugary snacks, processed foods, and excessive dairy intake",
          "Obesity and sedentary lifestyle",
          "Cosmetics that block pores and increase whiteheads and blackheads",
          "Heat and humidity, which worsen truncal acne by increasing sweating and oil production",
          "Stress",
          "Hormonal issues like Polyendocrine Metabolic Ovarian Syndrome (formerly PCOS)",
        ],
      },
      {
        heading: "Prevention Tips",
        items: [
          "Use oil-free skincare products",
          "Maintain adequate sleep, manage stress, exercise regularly, and eat a balanced diet",
          "Don't pick or squeeze pimples — it raises the risk of scars and dark marks significantly",
          "Avoid harsh scrubs and frequent washing, which can damage the skin barrier",
          "Don't self-medicate with OTC creams or steroid-containing products",
          "Always remove makeup before sleeping",
          "Shower after workouts to keep pores clean",
          "Follow your prescribed treatment consistently — acne treatments take time to work",
        ],
      },
    ],
  },
  {
    category: "Hair Care",
    title: "Hair Fall",
    excerpt:
      "Hair fall can stem from nutritional deficiencies, stress, hormonal imbalances, or medical conditions. Understanding the root cause is the first step toward effective treatment and restoring healthy hair growth.",
    color: "from-rose-50 to-pink-50",
    border: "border-rose-200/60",
    dot: "bg-rose-400",
    sections: [
      {
        heading: "Common Causes",
        items: [
          "Nutritional deficiencies — low iron, vitamin D, protein, or B12 levels",
          "Physical or emotional stress, illness, rapid weight loss, or poor sleep",
          "Hormonal imbalances including thyroid disorders or PCOS",
          "Harsh hair treatments, excessive heat styling, tight hairstyles, or certain medications",
          "Medical conditions such as anaemia, hypothyroidism, and connective tissue diseases",
        ],
      },
      {
        heading: "Myths About Hair Fall",
        items: [
          "Oiling increases hair growth — False. Oil acts like a conditioner, making hair shiny and reducing frizziness, but does not stimulate growth.",
          "Hard water causes hair loss — False. Hard water makes hair dry and brittle but does not affect the hair roots or cause baldness.",
          "Helmets cause hair loss — False. Wearing a helmet does not cause hair loss.",
          "Shaving the head increases hair growth — False. Cutting or shaving hair does not affect its growth rate.",
          "Shampoos reduce hair fall — False. Shampoos only cleanse the scalp and do not treat hair fall.",
        ],
      },
    ],
  },
  {
    category: "Hair Care",
    title: "Baldness (Androgenetic Alopecia)",
    excerpt:
      "Commonly called male or female pattern hair loss, androgenetic alopecia is driven by genetics and hormones. Hair follicles gradually shrink, producing finer strands until hair is eventually lost — but early treatment can make a significant difference.",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-200/60",
    dot: "bg-violet-400",
    sections: [
      {
        heading: "What Happens?",
        body: "Genetics and hormones cause hair follicles to shrink over time, producing progressively finer hair strands and eventually leading to baldness. In males, it typically starts with a receding hairline or thinning over the crown. In women, thinning is seen over the crown and parting line while the frontal hairline is usually preserved.",
      },
      {
        heading: "Treatment Options",
        items: [
          "Topical medications to slow hair loss and improve density",
          "Oral therapy as prescribed by a dermatologist",
          "PRP (Platelet-Rich Plasma) therapy",
          "GFC (Growth Factor Concentrate) treatments",
          "Lifestyle modifications based on individual needs",
          "Hair transplantation — the only option once follicles are fully miniaturised and lost",
        ],
      },
      {
        heading: "Why Early Diagnosis Matters",
        body: "Although androgenetic alopecia is progressive, early diagnosis and treatment can significantly slow hair loss and improve density. Once hairs have fully miniaturised and are lost, no treatment can restore them — only hair transplantation is possible at that stage. Seeking timely dermatological care makes a real difference.",
      },
    ],
  },
  {
    category: "Skin Infection",
    title: "Fungal Infections",
    excerpt:
      "Fungal infections appear as itchy, red, scaly patches that gradually spread outward to form ring-shaped lesions — commonly called ringworm. They thrive in warm, moist areas of the body and are highly preventable with good hygiene habits.",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-200/60",
    dot: "bg-emerald-400",
    sections: [
      {
        heading: "About Fungal Infections",
        body: "Fungal infections are caused by fungi that grow in warm and moist areas of the body. They commonly present as itchy, red, scaly patches that may gradually spread outward to form ring-shaped lesions — hence the common name 'ringworm', though no actual worm is involved.",
      },
      {
        heading: "Prevention Tips",
        items: [
          "Keep body folds such as the groin, underarms, and spaces between toes clean and dry",
          "Avoid walking barefoot in damp public areas like bathrooms, locker rooms, and swimming pools",
          "Do not share towels, combs, hairbrushes, socks, or clothing — wash and disinfect items that contact affected skin",
          "Wear loose-fitting cotton clothes and avoid tight synthetic fabrics that trap sweat",
          "Maintain a healthy lifestyle with a balanced diet, regular exercise, and adequate sleep to support immunity",
        ],
      },
    ],
  },
  {
    category: "Skin Condition",
    title: "Warts",
    excerpt:
      "Warts are benign skin growths caused by the Human Papillomavirus (HPV). They are contagious and can spread through direct skin contact or shared surfaces, but they are not cancerous and respond well to dermatological treatment.",
    color: "from-sky-50 to-blue-50",
    border: "border-sky-200/60",
    dot: "bg-sky-400",
    sections: [
      {
        heading: "What Are Warts?",
        body: "Warts are caused by different strains of HPV, which enter the skin through small cuts or breaks and cause cells to grow rapidly, forming a raised growth. They spread through direct skin contact, shared surfaces (swimming pools, gym floors), and autoinoculation — spreading from one part of your body to another through touching or shaving.",
      },
      {
        heading: "Types of Warts",
        items: [
          "Common warts — rough, raised bumps on the hands, fingers, and knees",
          "Plantar warts — on the soles of the feet; can be painful while walking and may be confused with corns",
          "Flat warts — smaller, smoother lesions in clusters on the face, neck, hands, or legs",
          "Filiform warts — thin, finger-like growths around the eyes, nose, and mouth; spread quickly",
          "Periungual warts — around the nails, can affect normal nail growth",
          "Genital warts — caused by specific HPV strains; sexually transmitted and require separate medical management",
        ],
      },
      {
        heading: "Treatment Options",
        items: [
          "Topical medications",
          "Cryotherapy — freezing the wart with liquid nitrogen",
          "Electrocautery",
          "Radiofrequency ablation",
          "Laser treatments",
          "Stubborn or recurrent warts may require multiple sessions or combination therapies",
        ],
      },
    ],
  },
  {
    category: "Skin Condition",
    title: "Skin Tags",
    excerpt:
      "Skin tags (acrochordons) are small, soft, harmless skin-coloured growths commonly found in body folds like the neck, underarms, and groin. They are benign but can be removed safely by a dermatologist for cosmetic comfort.",
    color: "from-yellow-50 to-amber-50",
    border: "border-yellow-200/60",
    dot: "bg-yellow-400",
    sections: [
      {
        heading: "What Causes Skin Tags?",
        items: [
          "Genetic predisposition — they can run in families",
          "Aging — skin tags become more common with age",
          "Hormonal changes — may increase during pregnancy",
          "Excess weight, insulin resistance, and diabetes increase the likelihood of developing them",
        ],
      },
      {
        heading: "How to Identify Skin Tags",
        body: "Skin tags appear as small, soft, skin-coloured or slightly darker growths, commonly seen in body folds such as the neck, underarms, and groin. They are usually painless but may become irritated due to friction from jewellery or clothing. They vary in size from a few millimetres to over a centimetre.",
      },
      {
        heading: "Treatment & Aftercare",
        items: [
          "Electrocautery is the most commonly used removal method — electrical current burns off the skin tag while controlling bleeding and promoting healing",
          "Keep the area clean and dry after removal",
          "Follow your dermatologist's instructions on wound care and dressing changes",
          "Avoid picking or scratching the treated area to prevent infection or scarring",
        ],
      },
    ],
  },
  {
    category: "Pigmentation",
    title: "Melasma",
    excerpt:
      "Melasma is a common pigmentation condition causing brown or grey-brown patches, primarily on the face. It is triggered by sun exposure, hormonal changes, and genetics — but it is absolutely manageable with the right care and professional guidance.",
    color: "from-fuchsia-50 to-purple-50",
    border: "border-fuchsia-200/60",
    dot: "bg-fuchsia-400",
    sections: [
      {
        heading: "What Causes Melasma?",
        items: [
          "Sun exposure — UV rays trigger excess melanin production, worsening pigmentation",
          "Hormonal changes — pregnancy or oral contraceptive pills contribute to development",
          "Genetic predisposition — a family history increases the likelihood",
          "Thyroid disorders — hormonal imbalances may also play a role",
        ],
      },
      {
        heading: "Prevention",
        items: [
          "Use a broad-spectrum sunscreen every single day, even when indoors — tinted sunscreens provide better protection",
          "Wear hats and sunglasses whenever stepping outdoors",
        ],
      },
      {
        heading: "Treatment Options",
        items: [
          "Topical creams — prescription formulas with hydroquinone, azelaic acid, tranexamic acid, or kojic acid",
          "Chemical peels — exfoliate the skin and gradually reduce pigmentation",
          "Laser therapy — breaks down melanin safely and improves deeper pigmentation",
          "Oral medications — antioxidant supplements or oral tranexamic acid in certain cases",
          "Customised treatment plans — since skin types differ, a personalised approach ensures safer and more effective results",
        ],
      },
    ],
  },
];

function ConditionCard({ condition }: { condition: Condition }) {
  const [expanded, setExpanded] = useState(false);
  const { navigate } = useRouter();

  return (
    <article
      className={`reveal rounded-2xl sm:rounded-3xl border ${condition.border} bg-gradient-to-br ${condition.color} shadow-card overflow-hidden`}
    >
      {/* Always-visible header */}
      <div className="p-5 sm:p-7">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${condition.dot}`} />
          <span className="text-[10px] uppercase tracking-[0.25em] text-coffee/60">
            {condition.category}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl sm:text-2xl text-coffee leading-snug">
          {condition.title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {condition.excerpt}
        </p>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-coffee/70 hover:text-coffee transition-colors font-medium"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              Read Less <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-black/5 px-5 sm:px-7 py-5 sm:py-6 space-y-5">
          {condition.sections.map((section) => (
            <div key={section.heading}>
              <h4 className="font-display text-base sm:text-lg text-coffee mb-2">
                {section.heading}
              </h4>
              {section.body && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              )}
              {section.items && (
                <ul className="space-y-1.5 mt-1">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${condition.dot} shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <button
            onClick={() => navigate("/appointments")}
            className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-coffee px-5 py-2.5 text-xs uppercase tracking-widest text-primary-foreground hover:opacity-90 transition shadow-soft"
          >
            Book a Consultation <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </article>
  );
}

export function SkinGuide() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-marble relative">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="section-label text-gold-shimmer">Patient Education</span>
          <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
            Know your skin &amp; hair.
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Simple, expert-written guides on the conditions we treat most — what causes them,
            how to prevent them, and when to seek care.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition) => (
            <ConditionCard key={condition.title} condition={condition} />
          ))}
        </div>
      </div>
    </section>
  );
}
