import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives — Accommodation",
  description: destinationContent.maldives.accommodation.description,
};

export default function MaldivesAccommodationPage() {
  return (
    <>
      <DestinationSection content={destinationContent.maldives.accommodation} />
    </>
  );
}