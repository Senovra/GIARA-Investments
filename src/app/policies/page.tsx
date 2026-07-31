import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies",
  description: "GIARA privacy and cookie policies.",
};

export default function PoliciesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 pt-32 md:px-10 md:py-32 md:pt-40">
      <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
        Policies
      </span>
      <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
        Privacy Policy
      </h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground-muted">
        <p>
          This is placeholder policy text. GIARA is committed to protecting
          the privacy of visitors to this website. This section should be
          replaced with your finalized privacy policy, cookie policy, and
          any relevant terms of use once legal review is complete.
        </p>
        <p>
          Please contact{" "}
          <a href="mailto:info@giara.com" className="text-foreground underline decoration-accent underline-offset-4 hover:text-accent">
            info@giara.com
          </a>{" "}
          with any questions regarding this policy.
        </p>
      </div>
    </section>
  );
}