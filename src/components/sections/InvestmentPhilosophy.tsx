"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    number: "01",
    title: "Long-Term Vision",
    description:
      "We assess every opportunity through a multi-decade lens, prioritizing durability of value over short-term yield.",
  },
  {
    number: "02",
    title: "Architectural Excellence",
    description:
      "Design integrity shapes long-term asset performance — we hold ourselves to the highest architectural standard on every development.",
  },
  {
    number: "03",
    title: "Disciplined Capital",
    description:
      "Rigorous underwriting and conservative structuring protect our partners' capital through every market cycle.",
  },
  {
    number: "04",
    title: "Global Perspective",
    description:
      "Our international presence allows us to identify and act on opportunity wherever it emerges.",
  },
];

export default function InvestmentPhilosophy() {
  return (
    <section className="bg-background-elevated py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Our Philosophy"
          title={
            <>
              Principles That Guide{" "}
              <span className="text-accent">Every Decision We Make.</span> 
            </>
          }
          align="left"
          className="mb-20"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-x-12 gap-y-16 md:grid-cols-2"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={staggerItem}
              className="border-t border-foreground/10 pt-8"
            >
              <span className="font-display text-3xl text-accent">
                {pillar.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-light tracking-wide text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}