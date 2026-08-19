import { Metadata } from "next";
import DestinationVideoHero from "@/components/layout/DestinationVideoHero";
import { destinationContent } from "@/data/destinationContent";
import { basePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Dubai — Headquarters",
  description: destinationContent.dubai.overview.description,
};

export default function DubaiPage() {
  return (
    <>
      <DestinationVideoHero
        videoSrc={`${basePath}/videos/dubai.mp4`}
        posterImage={destinationContent.dubai.overview.image}
      />
      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
        <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
          Headquarters
        </span>
        <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
          Dubai
        </h1>
        <div className="mx-auto mt-6 max-w-xl space-y-5 text-left text-base leading-relaxed text-foreground-muted">
          <p>
            GIARA is headquartered in Dubai, a city that has become one of
            the world&apos;s most significant hubs for international
            investment and hospitality. Operating from the heart of the
            UAE gives GIARA direct access to a fast-moving global market
            while remaining grounded in a region defined by ambition,
            connectivity, and long-term vision.
          </p>
          <p>
            From Dubai, GIARA oversees its portfolio of real estate
            holdings and hospitality destinations, including its
            properties in Colombo and the Maldives. The Dubai office is
            where strategy, investment decisions, and day-to-day
            operations across the group are coordinated.
          </p>
          <p>
            Dubai&apos;s position at the crossroads of Europe, Asia, and
            Africa reflects GIARA&apos;s own outlook — a business built to
            operate across borders, cultures, and markets, while holding
            every property it develops to the same standard of quiet,
            considered excellence.
          </p>
        </div>
      </section>
    </>
  );
}