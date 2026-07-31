import { Metadata } from "next";
import ImageHero from "@/components/layout/ImageHero";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Dubai",
  description: destinationContent.dubai.overview.description,
};

export default function DubaiOverviewPage() {
  return (
    <>
      <ImageHero
        image={destinationContent.dubai.overview.image}
        imageAlt={destinationContent.dubai.overview.imageAlt}
      />
      <DestinationSection content={destinationContent.dubai.overview} isOverview />
    </>
  );
}