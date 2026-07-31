import { Metadata } from "next";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives — Events",
  description: destinationContent.maldives.events.description,
};

export default function MaldivesEventsPage() {
  return (
    <>
      <DestinationSection content={destinationContent.maldives.events} />
    </>
  );
}