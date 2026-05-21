import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What skin conditions do you treat at Tasvaa?",
    answer:
      "We treat a wide range of conditions including acne, pigmentation, melasma, eczema, psoriasis, rosacea, dark circles, and more. Our dermatologist will assess your skin during a consultation and recommend the most suitable treatment plan.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book by calling us, messaging us on WhatsApp, or filling out the appointment request form on this page. We'll confirm your slot within a few hours.",
  },
  {
    question: "Is PRP therapy painful?",
    answer:
      "PRP therapy involves minimal discomfort. We apply a topical numbing cream before the procedure to ensure you are as comfortable as possible. Most patients describe it as a mild pressure sensation.",
  },
  {
    question: "How many sessions does laser hair reduction require?",
    answer:
      "Most patients need 6–8 sessions spaced 4–6 weeks apart for optimal, long-lasting results. The exact number depends on your hair type, skin tone, and the area being treated.",
  },
  {
    question: "Are the treatments safe for all skin types?",
    answer:
      "Yes. All our treatments are performed or supervised by a qualified dermatologist and are tailored to your specific skin type. We use FDA-approved equipment and follow strict safety protocols.",
  },
  {
    question: "What is the cost of a consultation?",
    answer:
      "Please contact our clinic directly for the latest consultation fee details. We provide transparent pricing with no hidden charges.",
  },
  {
    question: "How long does a Hydra Facial session take?",
    answer:
      "A typical Hydra Facial session takes 45–60 minutes. There is no downtime, so you can return to your daily activities immediately after.",
  },
  {
    question: "Do I need to prepare anything before my first visit?",
    answer:
      "No special preparation is needed for a consultation. For specific procedures, our team will share pre-treatment instructions when you book. It helps to come with a clean face and no heavy makeup.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream/50 py-12 sm:py-16 lg:py-28 relative">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
        <div className="text-center reveal">
          <span className="section-label text-gold-shimmer">FAQs</span>
          <h2 className="mt-3 font-display text-3xl text-coffee sm:text-4xl lg:text-5xl">
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Answers to the questions our patients ask most often.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 divide-y divide-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 40}ms` }}>
                <button
                  className="flex w-full items-start justify-between gap-3 py-5 sm:py-5 text-left group min-h-[60px]"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg text-coffee group-hover:text-walnut transition-colors pr-2 leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 mt-0.5 ${
                      isOpen
                        ? "bg-coffee border-coffee rotate-180"
                        : "border-gold/40 bg-cream"
                    }`}
                  >
                    <ChevronDown className={`h-4 w-4 transition-colors ${isOpen ? "text-white" : "text-gold"}`} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
