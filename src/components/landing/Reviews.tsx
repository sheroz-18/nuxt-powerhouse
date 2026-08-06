import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Анна Смирнова",
    role: "Невеста",
    text: "Наши свадебные приглашения выглядели так дорого и нежно. Гости звонили, чтобы спросить, кто делал дизайн!",
    avatar: "AS",
    color: "bg-rose-100 text-rose-600",
  },
  {
    name: "Мария Ковалева",
    role: "Организатор мероприятий",
    text: "Я использую InviteStudio для каждого праздника. Визуальный редактор экономит часы, а результат — всегда на высоте.",
    avatar: "МК",
    color: "bg-violet-100 text-violet-600",
  },
  {
    name: "Елена Волкова",
    role: "Мама в декрете",
    text: "Приглашение на baby shower получилось невероятно милым. Делала с телефона за 10 минут перед сном.",
    avatar: "ЕВ",
    color: "bg-sky-100 text-sky-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

export function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-14 max-w-2xl text-center md:mx-auto"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Star className="h-4 w-4 fill-current" />
            Отзывы
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Истории наших гостей
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Присоединяйтесь к тысячам организаторов, которые сделали свои
            мероприятия незабываемыми.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={itemVariants}
              className="glass relative flex flex-col justify-between rounded-[1.75rem] p-7"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10" />
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground">"{review.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${review.color}`}
                >
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
