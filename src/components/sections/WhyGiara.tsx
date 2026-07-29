"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, imageReveal, staggerContainer, staggerItem } from "@/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Proven Track Record",
    description: "Over 15 years delivering consistent, risk-adjusted returns across market cycles.",
  },
  {
    title: "International Reach",
    description: "Active operations across the Middle East, Asia, and Europe with local market expertise.",
  },
  {
    title: "Uncompromising Quality",
    description: "Every development held to institutional-grade standards of design and execution.",
  },
];

export default function WhyGiara() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageReveal}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-sm md:order-1"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600"
            alt="Luxury interior architecture representing GIARA's design standards"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Why GIARA"
            title={
              <>
                Trusted by Institutions.{" "}
                <span className="text-accent">Chosen by Visionaries.</span> 
              </>
            }
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mt-10 space-y-8"
          >
            {reasons.map((reason) => (
              <motion.div key={reason.title} variants={staggerItem} className="border-l border-accent/40 pl-6">
                <h3 className="font-display text-xl font-light tracking-wide text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}