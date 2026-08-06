import { motion } from "motion/react";
import {
  Sparkles,
  Smartphone,
  Zap,
  Shield,
  Palette,
  Heart,
} from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Премиум-дизайны",
    description:
      "Каждый шаблон создан профессиональными дизайнерами, чтобы выглядеть потрясающе на любом экране.",
  },
  {
    icon: Smartphone,
    title: "Создано для мобильных",
    description:
      "Приглашения идеально смотрятся на телефонах, планшетах и компьютерах — без масштабирования и лишней прокрутки.",
  },
  {
    icon: Zap,
    title: "Мгновенная отправка",
    description:
      "Делитесь приглашением через ссылку, WhatsApp, email или QR-код сразу после готовности.",
  },
  {
    icon: Shield,
    title: "Приватность гостей",
    description:
      "Данные мероприятия и список гостей защищены. Никакой рекламы, спама и неприятных сюрпризов.",
  },
  {
    icon: Palette,
    title: "Полная кастомизация",
    description:
      "Меняйте цвета, шрифты, фото, карты и музыку, чтобы точно соответствовало вашей задумке.",
  },
  {
    icon: Heart,
    title: "Эмоциональный эффект",
    description:
      "Красивые анимации и продуманные детали делают каждый ответ гостя особенным.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function Benefits() {
  return (
    <section className="section-padding bg-cream/50">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-14 max-w-2xl"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Почему мы
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Всё, что нужно для праздника
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="glass card-hover rounded-[1.75rem] p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
