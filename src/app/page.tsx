import VideoHero from "@/components/layout/VideoHero";
import HomeIntro from "@/components/sections/HomeIntro";
import ProjectCards from "@/components/sections/ProjectCards";
import StorySection from "@/components/sections/StorySection";
import FeatureSection from "@/components/sections/FeatureSection";

export default function Home() {
  return (
    <>
      <VideoHero />
      <HomeIntro />
      <ProjectCards />
      <StorySection />
      <FeatureSection
        eyebrow="Portfolio"
        title="Composed With Clarity and Purpose"
        description="Each holding reflects a singular standard — real estate and hospitality shaped by restraint, not spectacle."
        linkLabel="Discover More"
        linkHref="/about"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600"
        imageAlt="GIARA property interior"
        imagePosition="right"
      />
      <FeatureSection
        eyebrow="Philosophy"
        title="Long-Term Vision, Quietly Held"
        description="We measure success across decades, not cycles — every decision made with the patience that enduring value requires."
        linkLabel="Discover More"
        linkHref="/about"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600"
        imageAlt="City skyline representing GIARA's markets"
        imagePosition="left"
      />
    </>
  );
}