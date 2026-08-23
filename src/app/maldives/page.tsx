import { Metadata } from "next";
import DestinationVideoHero from "@/components/layout/DestinationVideoHero";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";
import { basePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Maldives",
  description: destinationContent.maldives.overview.description,
};

export default function MaldivesOverviewPage() {
  return (
    <>
      <DestinationVideoHero videoSrc="https://res.cloudinary.com/v1bpvtww/video/upload/v1787454004/maldives.mp4" />
      <DestinationSection content={destinationContent.maldives.overview} isOverview />
    </>
  );
}