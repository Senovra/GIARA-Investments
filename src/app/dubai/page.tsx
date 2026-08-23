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
      <DestinationVideoHero videoSrc="https://res.cloudinary.com/v1bpvtww/video/upload/v1787453999/dubai.mp4" />
      <section className="mx-auto max-w-2xl px-6 py-24 text-center md:px-10 md:py-32">
        <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
          Headquarters
        </span>
        <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
          Dubai
        </h1>
        <div className="mx-auto mt-6 max-w-xl space-y-5 text-left text-base leading-relaxed text-foreground-muted md:text-center">
          <p>
            GIARA is headquartered in Dubai, a city that has become one of
            the world&apos;s leading centres for international investment
            and hospitality. From here, GIARA oversees its portfolio of
            real estate holdings and hospitality destinations, including
            its properties in Colombo and the Maldives.
          </p>
          <p>
            Dubai&apos;s position at the crossroads of global markets
            reflects GIARA&apos;s own outlook — a business built to
            operate across borders, while holding every property it
            develops to the same standard of quiet, considered
            excellence.
          </p>
        </div>
      </section>
    </>
  );
}