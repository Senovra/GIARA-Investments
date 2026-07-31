import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Development",
  description: "GIARA's approach to real estate and hospitality development.",
};

export default function DevelopmentPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 pt-32 text-center md:px-10 md:py-32 md:pt-40">
      <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
        Development
      </span>
      <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
        Considered growth, one holding at a time.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground-muted">
        GIARA develops real estate and hospitality properties with the same
        restraint that defines our portfolio — measured, deliberate, and
        built to endure. We welcome enquiries from landowners, partners,
        and institutions aligned with this approach.
      </p>
      <div className="relative mx-auto mt-14 aspect-[16/9] w-full max-w-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600"
          alt="GIARA development site"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 768px, 100vw"
        />
      </div>
    </section>
  );
}