"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";

export default function InsightsHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-28">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-6 block text-xs uppercase tracking-widest text-accent"
      >
        Insights
      </motion.span>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.15 }}
        className="max-w-3xl font-display text-5xl font-light leading-[1.15] tracking-wide text-foreground text-balance md:text-6xl"
      >
        Perspectives on Real Estate, Capital and {" "}
        <span className="text-accent">Long-Term Value.</span> 
      </motion.h1>
    </section>
  );
}