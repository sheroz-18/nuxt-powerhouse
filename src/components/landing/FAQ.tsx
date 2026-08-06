import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Можно ли отредактировать приглашение после отправки?",
    answer:
      "Да, любые изменения мгновенно отображаются по ссылке. Вам не нужно отправлять новое приглашение — гости увидят актуальную версию при следующем открытии.",
  },
  {
    question: "Подходит ли сервис для русских свадеб?",
    answer:
      "Абсолютно. Все шаблоны поддерживают кириллицу, а календарь, время и форма RSVP адаптированы для российских мероприятий.",
  },
  {
    question: "Как отправить приглашение гостям?",
    answer:
      "После публикации вы получите красивую ссылку и QR-код. Отправляйте через WhatsApp, Telegram, email, соцсети или распечатайте QR-код на карточках.",
  },
  {
    question: "Можно ли сделать приглашение с нуля?",
    answer:
      "Да, в редакторе есть возможность начать с пустого холста и добавить тексты, фото, фигуры, анимации и музыку по своему вкусу.",
  },
  {
    question: "Есть ли бесплатный тариф?",
    answer:
      "Да, вы можете создать и отправить одно приглашение бесплатно. Платные тарифы открывают доступ к премиум-шаблонам, статистике и безлимитным приглашениям.",
  },
];

export function FAQ() {
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
            FAQ
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Часто задаваемые вопросы
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl border-none px-6"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
