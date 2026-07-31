import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Colombo — Experiences",
  description: destinationContent.colombo.experiences.description,
};

export default function ColomboExperiencesPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="colombo" />
      <DestinationSection content={destinationContent.colombo.experiences} />
    </>
  );
}