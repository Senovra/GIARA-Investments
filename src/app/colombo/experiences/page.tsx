import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Colombo — Experiences",
  description: destinationContent.colombo.experiences.description,
};

export default function ColomboExperiencesPage() {
  return (
    <>
      <DestinationSection content={destinationContent.colombo.experiences} />
    </>
  );
}