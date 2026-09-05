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

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground-muted">
        <p className="italic text-foreground-muted/80">
          This is a placeholder policy for development purposes. It
          should be reviewed and replaced with GIARA&apos;s finalized,
          legally-approved privacy policy before the site goes live.
        </p>

        <div>
          <h2 className="mb-2 font-display text-lg text-foreground">
            Information We Collect
          </h2>
          <p>
            When you use our contact form, we collect the information
            you provide directly — your name, email address, and the
            content of your message — solely to respond to your
            enquiry.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-lg text-foreground">
            How We Use Your Information
          </h2>
          <p>
            Information submitted through this website is used only to
            respond to enquiries and is not shared with third parties
            for marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-lg text-foreground">
            Cookies
          </h2>
          <p>
            This website does not currently use tracking or advertising
            cookies. This section will be updated if that changes.
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-display text-lg text-foreground">
            Contact
          </h2>
          <p>
            Please contact{" "}
            <a
              href="mailto:legal@giara.com"
              className="text-foreground underline decoration-accent underline-offset-4 hover:text-accent"
            >
              legal@giara.com
            </a>{" "}
            with any questions regarding this policy.
          </p>
        </div>
      </div>
    </section>
  );
}