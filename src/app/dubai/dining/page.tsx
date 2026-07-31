import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Dubai — Dining",
  description: destinationContent.dubai.dining.description,
};

export default function DubaiDiningPage() {
  return (
    <>
      <DestinationSection content={destinationContent.dubai.dining} />
    </>
  );
}