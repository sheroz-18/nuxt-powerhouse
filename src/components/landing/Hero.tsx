import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import heroInvitation from "../../assets/hero-invitation.png";

export function Hero() {
  return (
    <section
      id="create"
      className="hero-gradient relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32"
    >
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-lavender/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-rose-light/15 blur-3xl" />
      </div>

      <div className="container-landing relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-primary shadow-soft backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Более 10 000 приглашений отправлено этим месяцем
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-6xl lg:text-7xl"
            >
              Цифровые приглашения,{" "}
              <span className="text-gradient">которые волнуют</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Создавайте потрясающие персонализированные приглашения для любого
              праздника. Выберите шаблон, настройте детали и поделитесь
              красивой ссылкой с гостями за минуты.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#templates"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold"
              >
                Создать приглашение
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft backdrop-blur-md transition-all hover:bg-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                Смотреть, как это работает
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary to-rose-light text-[10px] font-bold text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p>Нас выбрали 50 000+ организаторов по всему миру</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 to-lavender/30 blur-2xl" />
              <div className="glass relative animate-float rounded-[2rem] p-3 shadow-card">
                <img
                  src={heroInvitation}
                  alt="Красивое цифровое приглашение"
                  width={560}
                  height={560}
                  className="relative z-10 rounded-[1.5rem]"
                  loading="eager"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -top-6 -right-6 rounded-2xl px-4 py-3 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 16.5c-1.5 1.26-2 2-2 2.5 0 .5.5 1 1.5 1s2-.5 3.5-2 2.5-2.5 2.5-3-.5-1.5-1.5-1.5a3 3 0 0 0-3 1.5Z" />
                      <path d="M12 8c-2.5-2.5-5-2.5-7 0s-2 5.5 0 7 5 2.5 7 0 2.5-5.5 0-7Z" />
                      <path d="M16 12c2.5-2.5 5-2.5 7 0s2 5.5 0 7-5 2.5-7 0-2.5-5.5 0-7Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Получен RSVP</p>
                    <p className="text-[10px] text-muted-foreground">Только что</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="glass absolute -bottom-4 -left-8 rounded-2xl px-4 py-3 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-amber-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Тема подобрана</p>
                    <p className="text-[10px] text-muted-foreground">Свадьба · розовое золото</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
