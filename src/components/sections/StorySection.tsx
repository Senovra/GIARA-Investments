"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, imageReveal } from "@/animations/variants";

export default function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageReveal}
          className="relative aspect-[4/5] w-full overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600"
            alt="GIARA architecture and interior detail"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
            Our Story
          </span>
          <h2 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
            The Story of GIARA
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-muted">
            We take our name from the enduring quality of considered
            design — a philosophy carried through every property we
            hold, from our first destination to the ones still ahead.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-xs uppercase tracking-widest text-foreground underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
          >
            Read On
          </Link>
        </motion.div>
      </div>
    </section>
  );
}