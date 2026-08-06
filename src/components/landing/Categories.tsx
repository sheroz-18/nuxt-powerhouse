import { motion } from "motion/react";
import {
  Heart,
  PartyPopper,
  Baby,
  Snowflake,
  Moon,
  Smile,
} from "lucide-react";

const categories = [
  {
    label: "Свадьба",
    icon: Heart,
    colors: "bg-rose-50 text-rose-500 border-rose-100",
    gradient: "from-rose-100/60 to-white/80",
    description: "Романтика, элегантность, вечные воспоминания",
  },
  {
    label: "День рождения",
    icon: PartyPopper,
    colors: "bg-amber-50 text-amber-500 border-amber-100",
    gradient: "from-amber-100/60 to-white/80",
    description: "Яркие пастели и радостное конфетти",
  },
  {
    label: "Гендер-пати",
    icon: Baby,
    colors: "bg-sky-50 text-sky-500 border-sky-100",
    gradient: "from-sky-100/60 to-white/80",
    description: "Голубой, розовый и милые сюрпризы",
  },
  {
    label: "Новый год",
    icon: Snowflake,
    colors: "bg-red-50 text-red-500 border-red-100",
    gradient: "from-red-100/60 to-white/80",
    description: "Красный, золотой и сияющее настроение",
  },
  {
    label: "Рамадан",
    icon: Moon,
    colors: "bg-emerald-50 text-emerald-600 border-emerald-100",
    gradient: "from-emerald-100/60 to-white/80",
    description: "Изумрудный зелёный с золотыми акцентами",
  },
  {
    label: "Детский праздник",
    icon: Smile,
    colors: "bg-violet-50 text-violet-500 border-violet-100",
    gradient: "from-violet-100/60 to-white/80",
    description: "Весёлые, яркие и полные чуда",
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

export function Categories() {
  return (
    <section id="categories" className="section-padding bg-cream/50">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-14 max-w-2xl"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <PartyPopper className="h-4 w-4" />
            Для любого случая
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Выберите свой праздник
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Каждая тема автоматически адаптирует цвета, типографику и
            иллюстрации под ваш особенный день.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.a
                key={category.label}
                href="#templates"
                variants={itemVariants}
                className={`group card-hover relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-gradient-to-br ${category.gradient} p-6 backdrop-blur-sm transition-all hover:border-white`}
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border ${category.colors} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {category.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
