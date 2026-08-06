import { motion } from "motion/react";
import { Heart, ArrowRight } from "lucide-react";
import templateWedding from "../../assets/template-wedding.png";
import templateBirthday from "../../assets/template-birthday.png";
import templateBaby from "../../assets/template-baby.png";

const templates = [
  {
    title: "Elegant Wedding",
    category: "Wedding",
    image: templateWedding,
    color: "from-primary/20 to-rose-light/20",
    accent: "text-primary",
    price: "From $12",
  },
  {
    title: "Pastel Birthday",
    category: "Birthday",
    image: templateBirthday,
    color: "from-rose-light/20 to-gold/20",
    accent: "text-rose-500",
    price: "From $8",
  },
  {
    title: "Baby Shower",
    category: "Baby shower",
    image: templateBaby,
    color: "from-lavender/20 to-pearl/20",
    accent: "text-violet-500",
    price: "From $10",
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

export function Templates() {
  return (
    <section id="templates" className="section-padding bg-background">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <Heart className="h-4 w-4" />
              Popular templates
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Designs guests fall in love with
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hand-crafted templates for every moment worth celebrating. Pick one
              and make it yours.
            </p>
          </div>
          <a
            href="#categories"
            className="group inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Browse all templates
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {templates.map((template) => (
            <motion.article
              key={template.title}
              variants={itemVariants}
              className="card-hover group glass cursor-pointer overflow-hidden rounded-[1.75rem]"
            >
              <div className={`relative aspect-[3/4] overflow-hidden bg-gradient-to-br ${template.color}`}>
                <img
                  src={template.image}
                  alt={template.title}
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                  {template.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {template.title}
                    </h3>
                    <p className={`mt-1 text-sm font-medium ${template.accent}`}>
                      {template.price}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
