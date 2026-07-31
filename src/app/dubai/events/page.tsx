import { Metadata } from "next";
import DestinationSubNav from "@/components/sections/DestinationSubNav";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Dubai — Events",
  description: destinationContent.dubai.events.description,
};

export default function DubaiEventsPage() {
  return (
    <>
      <DestinationSubNav destinationSlug="dubai" />
      <DestinationSection content={destinationContent.dubai.events} />
    </>
  );
}