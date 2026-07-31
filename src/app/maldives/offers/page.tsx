import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives — Offers",
  description: destinationContent.maldives.offers.description,
};

export default function MaldivesOffersPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="maldives" />
      <DestinationSection content={destinationContent.maldives.offers} />
    </>
  );
}