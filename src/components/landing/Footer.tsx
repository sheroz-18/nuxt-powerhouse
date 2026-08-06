import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Instagram, Twitter } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = {
  Продукт: ["Шаблоны", "Конструктор", "Тарифы", "Категории"],
  Ресурсы: ["Помощь", "Блог", "Советы по дизайну", "Идеи для праздников"],
  Компания: ["О нас", "Карьера", "Контакты", "Партнёрам"],
  Правовое: ["Политика конфиденциальности", "Условия использования"],
};

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="glass mb-12 rounded-[2rem] p-8 text-center md:p-12"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Готовы создать приглашение своей мечты?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Первое приглашение можно создать бесплатно. Без регистрации, без
            кредитной карты.
          </p>
          <a
            href="#create"
            className="btn-primary mx-auto mt-6 inline-flex items-center gap-2 px-8 py-4 text-base font-semibold"
          >
            Начать бесплатно
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid gap-10 border-t border-border py-12 md:grid-cols-6">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                InviteStudio
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Создавайте цифровые приглашения, которые выглядят как произведения
              искусства, и делитесь ими с людьми, которые вам дороги.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="mb-4 text-sm font-semibold text-foreground">{group}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 InviteStudio. Все права защищены.</p>
          <p>Сделано с любовью для ваших особенных моментов.</p>
        </div>
      </div>
    </footer>
  );
}
