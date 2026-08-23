import { Metadata } from "next";
import DestinationVideoHero from "@/components/layout/DestinationVideoHero";
import DestinationSection from "@/components/sections/DestinationSection";
import { destinationContent } from "@/data/destinationContent";
import { basePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Colombo",
  description: destinationContent.colombo.overview.description,
};

export default function ColomboOverviewPage() {
  return (
    <>
      <DestinationVideoHero videoSrc="https://res.cloudinary.com/v1bpvtww/video/upload/v1787454017/colombo.mp4" />
      <DestinationSection content={destinationContent.colombo.overview} isOverview />
    </>
  );
}