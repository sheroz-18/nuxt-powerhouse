import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Instagram, Twitter, Mail } from "lucide-react";

const footerLinks = {
  Product: ["Templates", "Categories", "Pricing", "How it works"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Help center", "Contact us", "Privacy", "Terms"],
};

export function Footer() {
  return (
    <footer className="bg-background pb-8 pt-20">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="glass relative overflow-hidden rounded-[2rem] p-8 md:p-12"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-lavender/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Ready to celebrate?
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Create your first invitation today and share the joy with everyone
                you love.
              </p>
            </div>
            <a
              href="#create"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold"
            >
              Create invitation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                InviteStudio
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Beautiful digital invitations for every moment worth celebrating.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-bold text-foreground">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} InviteStudio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
