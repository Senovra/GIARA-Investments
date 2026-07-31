"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, imageReveal } from "@/animations/variants";

export default function VisionSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
          The Vision
        </span>
        <h2 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
          GIARA has always worked with a clear vision as its guide.
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageReveal}
          className="relative aspect-[4/3] w-full overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600"
            alt="GIARA residential development"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageReveal}
          transition={{ delay: 0.15 }}
          className="relative aspect-[4/3] w-full overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600"
            alt="GIARA commercial development"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mx-auto mt-16 max-w-2xl text-center"
      >
        <p className="font-display text-xl italic leading-relaxed text-foreground md:text-2xl">
          &ldquo;We want to redefine considered growth — not through scale
          or spectacle, but through restraint, authenticity, and calm.
          Our vision is to build holdings that endure because they are
          composed with clarity and purpose.&rdquo;
        </p>
        <span className="mt-6 block text-xs uppercase tracking-widest text-foreground-muted">
          Leadership, GIARA
        </span>
      </motion.div>
    </section>
  );
}