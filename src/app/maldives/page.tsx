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
      <DestinationVideoHero
        videoSrc={`${basePath}/videos/maldives.mp4`}
        posterImage={destinationContent.maldives.overview.image}
      />
      <DestinationSection content={destinationContent.maldives.overview} isOverview />
    </>
  );
}