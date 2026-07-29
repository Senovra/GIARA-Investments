"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, imageReveal } from "@/animations/variants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[720px] w-full items-end overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageReveal}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400"
          alt="Modern architectural skyline representing GIARA's global real estate portfolio"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-background/85 via-background/35 to-transparent md:h-48" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-24 md:px-10 md:pb-32 md:pt-44">

        <motion.div
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="mb-6 inline-block"
>
  <span className="block text-xs font-medium uppercase tracking-[0.35em] text-[#E2C77A] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
    Global Investment Holding
  </span>

  <motion.div
  initial={{ width: 0, opacity: 0 }}
  animate={{ width: "72%", opacity: 0.75 }}
  transition={{
    duration: 1.1,
    delay: 0.35,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="mt-2 h-px rounded-full bg-gradient-to-r from-transparent via-[#D6BA6A] to-transparent"
/>
</motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl font-display text-5xl font-light leading-[1.15] tracking-wide text-foreground text-balance sm:text-5xl md:text-7xl md:leading-[1.1]"
        >
          Investing in Tomorrow&apos;s{" "}
          <span className="text-accent">Markets</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-foreground-muted md:mt-8 md:text-lg"
        >
          GIARA is a global investment holding company shaping the future of
          real estate and strategic capital across international markets.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3 md:mt-12 md:gap-4"
        >
          <Button
            href="/portfolio"
            variant="primary"
            className="text-xs md:text-sm"
          >
            View Portfolio
          </Button>

          <Button
            href="/about"
            variant="outline"
            className="text-xs md:text-sm"
          >
            Our Philosophy
          </Button>
        </motion.div>
      </div>
    </section>
  );
}