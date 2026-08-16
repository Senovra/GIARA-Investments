import { Metadata } from "next";
import ImageHero from "@/components/layout/ImageHero";
import { destinationContent } from "@/data/destinationContent";

export const metadata: Metadata = {
  title: "Dubai — Headquarters",
  description: destinationContent.dubai.overview.description,
};

// Structured identically to the About page — single static hero, single
// intro section — rather than the Overview+sub-nav pattern used by
// Colombo/Maldives, since Dubai is GIARA's headquarters, not a
// hospitality destination with multiple sections.
export default function DubaiPage() {
  const content = destinationContent.dubai.overview;

  return (
    <>
      <ImageHero image={content.image} imageAlt={content.imageAlt} />
      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
        <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
          Headquarters
        </span>
        <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
          {content.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground-muted">
          {content.description}
        </p>
      </section>
    </>
  );
}

