import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Colombo — Dining",
  description: destinationContent.colombo.dining.description,
};

export default function ColomboDiningPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="colombo" />
      <DestinationSection content={destinationContent.colombo.dining} />
    </>
  );
}