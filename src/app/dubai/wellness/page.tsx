import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Dubai — Wellness",
  description: destinationContent.dubai.wellness.description,
};

export default function DubaiWellnessPage() {
  return (
    <>
      <DestinationSection content={destinationContent.dubai.wellness} />
    </>
  );
}