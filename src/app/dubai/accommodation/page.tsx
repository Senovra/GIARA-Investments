import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Dubai — Accommodation",
  description: destinationContent.dubai.accommodation.description,
};

export default function DubaiAccommodationPage() {
  return (
    <>
      <DestinationSection content={destinationContent.dubai.accommodation} />
    </>
  );
}