import { Metadata } from "next";
import ImageHero from "@/components/layout/ImageHero";
import VisionSection from "@/components/sections/VisionSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "GIARA is a global investment holding company operating hospitality properties in Dubai, Colombo, and the Maldives.",
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
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground-muted">
          We instil a sense of balance through the composed elegance of
          less and the gentle, authentic rhythms of purposeful
          hospitality — found across Dubai, Colombo, and the Maldives.
        </p>
      </section>
      <VisionSection />
    </>
  );
}