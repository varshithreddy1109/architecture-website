import type { Metadata } from "next";
import AboutHeader from "@/components/sections/about/AboutHeader";
import Story from "@/components/sections/about/Story";
import VisionMission from "@/components/sections/about/VisionMission";
import Process from "@/components/sections/about/Process";
import Team from "@/components/sections/about/Team";
import ContactCTA from "@/components/sections/home/ContactCTA";

export const metadata: Metadata = {
  title: "About | Aravind & Larsen Architecture Studio",
  description:
    "Learn about Aravind & Larsen's story, vision, mission, design process, and team.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <Story />
      <VisionMission />
      <Process />
      <Team />
      <ContactCTA />
    </>
  );
}
