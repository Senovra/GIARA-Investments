import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Colombo — Events",
  description: destinationContent.colombo.events.description,
};

export default function ColomboEventsPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="colombo" />
      <DestinationSection content={destinationContent.colombo.events} />
    </>
  );
}