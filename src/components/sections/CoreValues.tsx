"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Mission",
    description:
      "To create enduring value for our partners through disciplined investment in real estate and strategic capital markets worldwide.",
  },
  {
    title: "Vision",
    description:
      "To be recognized as the most trusted global investment holding company for institutions and families seeking long-term capital stewardship.",
  },
  {
    title: "Integrity",
    description:
      "We hold ourselves to the highest standard of transparency and accountability in every transaction and relationship.",
  },
  {
    title: "Excellence",
    description:
      "From architecture to capital structuring, we pursue the highest standard of execution in everything we deliver.",
  },
];

export default function CoreValues() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <SectionHeading
        eyebrow="Our Foundation"
        title={
          <>
            Mission, Vision and the{" "}
            <span className="text-accent">Values That Define Us.</span>
          </>
        }
        className="mb-20"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid gap-x-12 gap-y-14 md:grid-cols-2"
      >
        {values.map((value) => (
          <motion.div key={value.title} variants={staggerItem} className="border-t border-foreground/10 pt-8">
            <h3 className="font-display text-2xl font-light tracking-wide text-foreground">{value.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}