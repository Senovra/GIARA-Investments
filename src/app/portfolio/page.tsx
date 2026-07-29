import { Metadata } from "next";
import PortfolioHero from "@/components/sections/PortfolioHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore GIARA's global portfolio spanning commercial, residential, mixed-use, and strategic investment developments.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <ConsultationCTA />
    </>
  );
}