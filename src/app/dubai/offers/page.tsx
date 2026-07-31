import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Dubai — Offers",
  description: destinationContent.dubai.offers.description,
};

export default function DubaiOffersPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="dubai" />
      <DestinationSection content={destinationContent.dubai.offers} />
    </>
  );
}