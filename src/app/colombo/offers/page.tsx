import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Colombo — Offers",
  description: destinationContent.colombo.offers.description,
};

export default function ColomboOffersPage() {
  return (
    <>
      <DestinationSection content={destinationContent.colombo.offers} />
    </>
  );
}