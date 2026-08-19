import { Metadata } from "next";
import ImageHero from "@/components/layout/ImageHero";
import VisionSection from "@/components/sections/VisionSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "GIARA is a global investment holding company operating hospitality properties in Colombo and the Maldives, headquartered in Dubai.",
};

export default function AboutPage() {
  return (
    <>
      <ImageHero
        image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2400"
        imageAlt="GIARA headquarters architecture"
      />
      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
        <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
          About GIARA
        </span>
        <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
          Cities need pockets of calm.
        </h1>
        <div className="mx-auto mt-6 max-w-xl space-y-5 text-left text-base leading-relaxed text-foreground-muted md:text-center">
          <p>
            GIARA is a global investment holding company built on a single
            conviction: that real value is created slowly, through
            discipline, restraint, and an unwavering attention to detail.
            Headquartered in Dubai, GIARA holds a portfolio spanning real
            estate investment and hospitality, with destinations in
            Colombo and the Maldives.
          </p>
          <p>
            Our approach is intentionally understated. We are not
            interested in scale for its own sake. Every property we hold,
            every space we develop, is shaped by a preference for quiet
            confidence over spectacle — architecture and hospitality that
            reward attention rather than demand it.
          </p>
          <p>
            This philosophy extends from how we select investments to how
            our destinations are run day to day. We work with partners
            who share our patience, and we measure success across
            decades rather than quarters. It is a simple idea, applied
            with discipline — and it is the reason GIARA has grown the
            way it has.
          </p>
        </div>
      </section>
      <VisionSection />
    </>
  );
}