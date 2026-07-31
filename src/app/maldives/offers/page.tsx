import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives — Offers",
  description: destinationContent.maldives.offers.description,
};

export default function MaldivesOffersPage() {
  return (
    <>
      <DestinationSection content={destinationContent.maldives.offers} />
    </>
  );
}