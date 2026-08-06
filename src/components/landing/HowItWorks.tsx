import { motion } from "motion/react";
import { MousePointer2, Palette, Share2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MousePointer2,
    title: "Выберите шаблон",
    description:
      "Просмотрите сотни отборных дизайнов для свадеб, дней рождения, встреч малышей и многого другого.",
  },
  {
    step: "02",
    icon: Palette,
    title: "Сделайте его своим",
    description:
      "Настраивайте цвета, шрифты, фото, детали мероприятия и параметры RSVP в простом визуальном редакторе.",
  },
  {
    step: "03",
    icon: Share2,
    title: "Поделитесь волшебством",
    description:
      "Получите красивую ссылку или QR-код. Отслеживайте ответы гостей и отправляйте напоминания в одном месте.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-14 max-w-2xl text-center md:mx-auto"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Просто, как любовь
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Три шага до идеального приглашения
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Навыки дизайнера не нужны. Создавайте и делитесь за минуты, а не часы.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-[1.75rem] bg-muted/50 p-8 transition-colors hover:bg-muted"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <span className="absolute top-6 right-6 font-display text-5xl font-bold text-primary/10 transition-colors group-hover:text-primary/20">
                  {item.step}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
