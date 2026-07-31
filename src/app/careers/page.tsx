import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at GIARA.",
};

export default function CareersPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 pt-32 text-center md:px-10 md:py-32 md:pt-40">
      <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
        Careers
      </span>
      <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
        Join a team built on quiet ambition.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground-muted">
        We are always glad to hear from people who share our approach to
        considered growth. If you&apos;re interested in future
        opportunities at GIARA, please reach out directly.
      </p>
      <a
        href="mailto:careers@giara.com"
        className="mt-8 inline-block text-xs uppercase tracking-widest text-foreground underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
      >
        careers@giara.com
      </a>
    </section>
  );
}