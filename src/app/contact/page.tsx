import { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with GIARA to enquire about our destinations or investment opportunities.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
          Enquire
        </span>
        <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
          Begin a conversation with our team.
        </h1>
      </div>

      <div className="grid gap-16 md:grid-cols-[1.3fr_1fr]">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}