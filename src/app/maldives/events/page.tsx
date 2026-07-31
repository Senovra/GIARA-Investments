import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives — Events",
  description: destinationContent.maldives.events.description,
};

export default function MaldivesEventsPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="maldives" />
      <DestinationSection content={destinationContent.maldives.events} />
    </>
  );
}