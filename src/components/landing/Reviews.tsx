import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Elena M.",
    role: "Wedding bride",
    avatar: "EM",
    text: "Our guests kept asking who designed the invitation. It felt like a boutique paper card, but digital and effortless to share.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Birthday host",
    avatar: "DK",
    text: "Created a 30th birthday invite in 10 minutes. The RSVP tracking saved me so much back-and-forth on WhatsApp.",
    rating: 5,
  },
  {
    name: "Sofia & Omar",
    role: "Baby shower hosts",
    avatar: "SO",
    text: "The gender-reveal theme was adorable. We changed the colors in one click and shared the link with family across the world.",
    rating: 5,
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
            Loved by hosts
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Celebrations start with a smile
          </h2>
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
              className="glass card-hover relative rounded-[1.75rem] p-7"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground">
                "{review.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-rose-light font-display text-sm font-bold text-primary-foreground">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
