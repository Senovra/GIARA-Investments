import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Dubai — Dining",
  description: destinationContent.dubai.dining.description,
};

export default function DubaiDiningPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="dubai" />
      <DestinationSection content={destinationContent.dubai.dining} />
    </>
  );
}