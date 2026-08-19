import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at GIARA.",
};

export default function CareersPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 pt-32 text-center md:px-10 md:py-32 md:pt-40">
      <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
        Careers
      </span>
      <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
        Join a team built on quiet ambition.
      </h1>
      <div className="mx-auto mt-6 max-w-xl space-y-5 text-base leading-relaxed text-foreground-muted">
        <p>
          GIARA is a small, deliberate organization — we hire slowly, and
          we hire for people who share our approach to considered,
          long-term work over quick wins. Whether in investment, design,
          or hospitality operations, we look for people who take pride
          in getting the details right.
        </p>
        <p>
          We don&apos;t always have open positions listed here, but we
          are always glad to hear from people who feel aligned with how
          GIARA works. If that sounds like you, reach out — we review
          every enquiry personally.
        </p>
      </div>
      <a
        href="mailto:careers@giara.com"
        className="mt-8 inline-block text-xs uppercase tracking-widest text-foreground underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
      >
        careers@giara.com
      </a>
    </section>
  );
}