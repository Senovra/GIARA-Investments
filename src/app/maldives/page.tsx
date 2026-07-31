import { Metadata } from "next";
import ImageHero from "@/components/layout/ImageHero";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Maldives",
  description: destinationContent.maldives.overview.description,
};

export default function MaldivesOverviewPage() {
  return (
    <>
      <ImageHero
        image={destinationContent.maldives.overview.image}
        imageAlt={destinationContent.maldives.overview.imageAlt}
      />
      <DestinationSection content={destinationContent.maldives.overview} isOverview />
    </>
  );
}