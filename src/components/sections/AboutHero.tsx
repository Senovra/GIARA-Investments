"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, imageReveal } from "@/animations/variants";

export default function AboutHero() {
  return (
    <section className="relative flex h-[70vh] min-h-[520px] w-full items-end overflow-hidden pt-32">
      <motion.div initial="hidden" animate="visible" variants={imageReveal} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2400"
          alt="GIARA corporate headquarters exterior architecture"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background/80 via-background/30 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 block text-xs uppercase tracking-widest text-accent"
        >
          About GIARA
        </motion.span>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="max-w-3xl font-display text-5xl font-light leading-[1.15] tracking-wide text-foreground text-balance md:text-6xl"
        >
          A Story Built on Discipline,{" "}
          <span className="text-accent">Vision and Enduring
          Partnerships.</span>
        </motion.h1>
      </div>
    </section>
  );
}