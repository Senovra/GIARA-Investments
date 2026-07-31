import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Colombo — Accommodation",
  description: destinationContent.colombo.accommodation.description,
};

export default function ColomboAccommodationPage() {
  return (
    <>
      <DestinationSection content={destinationContent.colombo.accommodation} />
    </>
  );
}