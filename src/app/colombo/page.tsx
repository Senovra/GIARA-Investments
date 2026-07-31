import { Metadata } from "next";
import ImageHero from "@/components/layout/ImageHero";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Colombo",
  description: destinationContent.colombo.overview.description,
};

export default function ColomboOverviewPage() {
  return (
    <>
      <ImageHero
        image={destinationContent.colombo.overview.image}
        imageAlt={destinationContent.colombo.overview.imageAlt}
      />
      <DestinationSection content={destinationContent.colombo.overview} isOverview />
    </>
  );
}