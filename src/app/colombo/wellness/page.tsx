import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Colombo — Wellness",
  description: destinationContent.colombo.wellness.description,
};

export default function ColomboWellnessPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="colombo" />
      <DestinationSection content={destinationContent.colombo.wellness} />
    </>
  );
}