"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";

export default function HomeIntro() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="font-display text-4xl font-normal leading-[1.2] text-foreground text-balance md:text-5xl"
      >
        The Discipline of Simplicity
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ delay: 0.1 }}
        className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground-muted"
      >
        We are the stillness behind ambition. Every property, every
        decision, is composed with clarity and restraint — richness
        found not in scale, but in what is left unsaid.
      </motion.p>
    </section>
  );
}