import { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GIARA to explore investment opportunities, partnerships, or media inquiries.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-40 md:px-10 md:pb-40">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Begin a <span className="text-accent">Conversation</span> With
            Our <span className="text-accent">Team.</span>
          </>
        }
        description="Whether you represent an institution, a family office, or a strategic partner, we welcome the opportunity to explore how GIARA can support your objectives."
        className="mb-16"
      />

      <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}