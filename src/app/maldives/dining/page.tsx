import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives — Dining",
  description: destinationContent.maldives.dining.description,
};

export default function MaldivesDiningPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="maldives" />
      <DestinationSection content={destinationContent.maldives.dining} />
    </>
  );
}