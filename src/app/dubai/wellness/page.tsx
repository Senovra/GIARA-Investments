import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Dubai — Wellness",
  description: destinationContent.dubai.wellness.description,
};

export default function DubaiWellnessPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="dubai" />
      <DestinationSection content={destinationContent.dubai.wellness} />
    </>
  );
}