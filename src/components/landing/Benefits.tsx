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
    title: "Premium designs",
    description:
      "Every template is crafted by professional designers to look stunning on any screen.",
  },
  {
    icon: Smartphone,
    title: "Made for mobile",
    description:
      "Invites look beautiful on phones, tablets, and desktops — no zooming or scrolling issues.",
  },
  {
    icon: Zap,
    title: "Instant delivery",
    description:
      "Share your invitation via link, WhatsApp, email, or QR code the moment it is ready.",
  },
  {
    icon: Shield,
    title: "Guest privacy",
    description:
      "Your event details and guest list are protected. No ads, no spam, no surprises.",
  },
  {
    icon: Palette,
    title: "Total customization",
    description:
      "Change colors, fonts, photos, maps, and music to match your exact vision.",
  },
  {
    icon: Heart,
    title: "Emotional impact",
    description:
      "Beautiful animations and thoughtful details make every RSVP feel special.",
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
            Why choose us
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything you need to celebrate
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
