import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Dubai — Experiences",
  description: destinationContent.dubai.experiences.description,
};

export default function DubaiExperiencesPage() {
  return (
    <>
      <DestinationSection content={destinationContent.dubai.experiences} />
    </>
  );
}