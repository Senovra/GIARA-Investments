import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Colombo — Wellness",
  description: destinationContent.colombo.wellness.description,
};

export default function ColomboWellnessPage() {
  return (
    <>
      <DestinationSection content={destinationContent.colombo.wellness} />
    </>
  );
}