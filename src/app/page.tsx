import Hero from "@/components/sections/Hero";
import CompanyIntro from "@/components/sections/CompanyIntro";
import InvestmentPhilosophy from "@/components/sections/InvestmentPhilosophy";
import FeaturedPortfolio from "@/components/sections/FeaturedPortfolio";
import Statistics from "@/components/sections/Statistics";
import WhyGiara from "@/components/sections/WhyGiara";
import FeaturedInsights from "@/components/sections/FeaturedInsights";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <InvestmentPhilosophy />
      <FeaturedPortfolio />
      <Statistics />
      <WhyGiara />
      <FeaturedInsights />
      <ConsultationCTA />
    </>
  );
}