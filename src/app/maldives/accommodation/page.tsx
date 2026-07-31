import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives — Accommodation",
  description: destinationContent.maldives.accommodation.description,
};

export default function MaldivesAccommodationPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="maldives" />
      <DestinationSection content={destinationContent.maldives.accommodation} />
    </>
  );
}