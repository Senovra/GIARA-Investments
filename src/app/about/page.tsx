import { Metadata } from "next";
import VideoHero from "@/components/layout/VideoHero";
import TeamGrid from "@/components/sections/TeamGrid";
import AdvisorsSlideshow from "@/components/sections/AdvisorsSlideshow";
import SectionHeading from "@/components/ui/SectionHeading";
import { teamMembers } from "@/data/team";
import { advisors } from "@/data/advisors";

export const metadata: Metadata = {
  title: "About",
  description:
    "GIARA is an investment firm specializing in hospitality investments, headquartered in Dubai with projects in Colombo and the Maldives.",
};

export default function AboutPage() {
  return (
    <>
      {/* Now uses the Dubai video (same one previously on the standalone
          Headquarters page) instead of a static image, per request. */}
      <VideoHero videoSrc="https://res.cloudinary.com/v1bpvtww/video/upload/v1787453999/dubai.mp4" />

      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
        <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
          Who We Are
        </span>
        <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
          A Disciplined Investment Firm, Built For The Long Term
        </h1>
        <div className="mx-auto mt-6 max-w-xl space-y-5 text-left text-base leading-relaxed text-foreground-muted md:text-center">
          <p>
            GIARA is headquartered in Dubai, operating at the intersection
            of real estate investment and hospitality. Our conviction is
            simple: durable value is built through discipline, careful
            underwriting, and a willingness to hold a long view across
            market cycles, rather than chasing short-term outcomes.
          </p>
          <p>
            We bring together investment judgment and operational
            experience to identify, structure, and steward hospitality
            assets in markets we believe are positioned for sustained,
            long-term growth.
          </p>
        </div>
      </section>

      <section className="bg-cream-dark py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
            What We Do
          </span>
          <h2 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
            An Investment Firm Specializing In Hospitality
          </h2>
          <div className="mx-auto mt-6 max-w-xl space-y-5 text-left text-base leading-relaxed text-foreground-muted md:text-center">
            <p>
              GIARA invests in and develops hospitality assets, applying
              the same underwriting discipline institutional investors
              bring to any real estate class. We evaluate each
              opportunity on its fundamentals — location, demand
              resilience, and long-term return potential — before
              committing capital.
            </p>
            <p>
              Our current portfolio spans hospitality-led projects in
              Colombo and the Maldives, each selected for its position in
              a market we believe offers durable, long-term demand.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          eyebrow="Meet The Team"
          title="Guided By Experienced Leadership"
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />
        <TeamGrid members={teamMembers} />
      </section>

      <section className="bg-cream-dark py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            eyebrow="Our Advisors & Partners"
            title="Working Alongside Trusted Partners"
            align="center"
            className="mx-auto mb-16 max-w-2xl"
          />
          <AdvisorsSlideshow advisors={advisors} />
        </div>
      </section>
    </>
  );
}