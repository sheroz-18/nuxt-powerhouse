import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Can I customize colors and fonts?",
    answer:
      "Absolutely. Every template lets you change colors, fonts, wording, photos, and event details to match your celebration perfectly.",
  },
  {
    question: "How do guests RSVP?",
    answer:
      "Guests open your invitation link, see the event details, and tap RSVP. You track responses in real time from your dashboard.",
  },
  {
    question: "Can I share via WhatsApp, email, or social media?",
    answer:
      "Yes. Your invitation gets a unique link and a QR code that works anywhere — WhatsApp, Instagram, email, SMS, or printed cards.",
  },
  {
    question: "Is it mobile-friendly?",
    answer:
      "Every invitation is fully responsive and looks stunning on phones, tablets, and desktops.",
  },
  {
    question: "Do you offer designs for my culture or language?",
    answer:
      "We are continuously adding themes and language support. You can already write your invitation text in any language.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-cream/50">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-14 max-w-2xl text-center md:mx-auto"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <HelpCircle className="h-4 w-4" />
            Questions
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mx-auto max-w-3xl space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[1.25rem] border transition-colors ${
                  isOpen ? "bg-white border-primary/20 shadow-soft" : "bg-white/60 border-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <span
                    className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    >
                      <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
