import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/landing/Header";
import { Hero } from "../components/landing/Hero";
import { Templates } from "../components/landing/Templates";
import { Categories } from "../components/landing/Categories";
import { HowItWorks } from "../components/landing/HowItWorks";
import { Benefits } from "../components/landing/Benefits";
import { Reviews } from "../components/landing/Reviews";
import { FAQ } from "../components/landing/FAQ";
import { Footer } from "../components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InviteStudio — Цифровые приглашения для любого праздника" },
      {
        name: "description",
        content:
          "Создавайте потрясающие цифровые приглашения: свадьба, день рождения, baby shower, праздники и религиозные события. Настраивайте, отправляйте и отслеживайте RSVP в одном месте.",
      },
      {
        property: "og:title",
        content: "InviteStudio — Цифровые приглашения для любого праздника",
      },
      {
        property: "og:description",
        content:
          "Создавайте, персонализируйте и делитесь красивыми приглашениями. Без навыков дизайна, за минуты.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Templates />
        <Categories />
        <HowItWorks />
        <Benefits />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
