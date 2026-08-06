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
      { title: "InviteStudio — Digital Invitations That Feel Magical" },
      {
        name: "description",
        content:
          "Create beautiful digital invitations for weddings, birthdays, baby showers, and any celebration. Choose a template, customize every detail, and share via link in minutes.",
      },
      {
        property: "og:title",
        content: "InviteStudio — Digital Invitations That Feel Magical",
      },
      {
        property: "og:description",
        content:
          "Create beautiful digital invitations for weddings, birthdays, baby showers, and any celebration. Share via link in seconds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "InviteStudio — Digital Invitations That Feel Magical",
      },
      {
        name: "twitter:description",
        content:
          "Create beautiful digital invitations for weddings, birthdays, baby showers, and any celebration. Share via link in seconds.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
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
