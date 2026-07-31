import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Colombo — Offers",
  description: destinationContent.colombo.offers.description,
};

export default function ColomboOffersPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="colombo" />
      <DestinationSection content={destinationContent.colombo.offers} />
    </>
  );
}