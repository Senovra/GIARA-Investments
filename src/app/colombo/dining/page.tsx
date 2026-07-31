import { Metadata } from "next";

import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Colombo — Dining",
  description: destinationContent.colombo.dining.description,
};

export default function ColomboDiningPage() {
  return (
    <>
      <DestinationSection content={destinationContent.colombo.dining} />
    </>
  );
}