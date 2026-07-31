import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives — Experiences",
  description: destinationContent.maldives.experiences.description,
};

export default function MaldivesExperiencesPage() {
  return (
    <>
      <DestinationSection content={destinationContent.maldives.experiences} />
    </>
  );
}