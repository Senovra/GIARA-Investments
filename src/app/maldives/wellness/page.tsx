import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives — Wellness",
  description: destinationContent.maldives.wellness.description,
};

export default function MaldivesWellnessPage() {
  return (
    <>
      <DestinationSection content={destinationContent.maldives.wellness} />
    </>
  );
}