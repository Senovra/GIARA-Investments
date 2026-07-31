import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives — Dining",
  description: destinationContent.maldives.dining.description,
};

export default function MaldivesDiningPage() {
  return (
    <>
      <DestinationSection content={destinationContent.maldives.dining} />
    </>
  );
}