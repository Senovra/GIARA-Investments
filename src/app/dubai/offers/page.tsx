import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Dubai — Offers",
  description: destinationContent.dubai.offers.description,
};

export default function DubaiOffersPage() {
  return (
    <>
      <DestinationSection content={destinationContent.dubai.offers} />
    </>
  );
}