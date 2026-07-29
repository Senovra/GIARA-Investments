import { Metadata } from "next";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import AboutHero from "@/components/sections/AboutHero";
import Timeline from "@/components/sections/Timeline";
import CoreValues from "@/components/sections/CoreValues";
import LeadershipGrid from "@/components/sections/LeadershipGrid";
import GlobalPresence from "@/components/sections/GlobalPresence";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GIARA's story, mission, vision, and the principles that guide our approach to global real estate and strategic investment.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CoreValues />
      <Timeline />
      <LeadershipGrid members={teamMembers} />
      <GlobalPresence />
      <ConsultationCTA />
    </>
  );
}