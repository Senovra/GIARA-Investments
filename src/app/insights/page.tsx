import { Metadata } from "next";
import InsightsHero from "@/components/sections/InsightsHero";
import InsightsGrid from "@/components/sections/InsightsGrid";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives from GIARA on global real estate trends, strategic investment, and the future of urban development.",
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <InsightsGrid />
      <ConsultationCTA />
    </>
  );
}