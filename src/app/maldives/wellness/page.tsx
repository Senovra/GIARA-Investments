import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives — Wellness",
  description: destinationContent.maldives.wellness.description,
};

export default function MaldivesWellnessPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="maldives" />
      <DestinationSection content={destinationContent.maldives.wellness} />
    </>
  );
}