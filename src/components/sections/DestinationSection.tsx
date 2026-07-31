"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, imageReveal } from "@/animations/variants";
import { DestinationSectionContent } from "@/data/destinationContent";

interface DestinationSectionProps {
  content: DestinationSectionContent;
  isOverview?: boolean;
}

export default function DestinationSection({ content, isOverview }: DestinationSectionProps) {
  return (
    // pt-40/md:pt-44 accounts for the fixed header (80px) + the fixed
    // destination sub-nav row now stacked beneath it, so content never
    // starts hidden behind them — needed since the sub-nav is no longer
    // part of normal document flow.
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-44">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
          {content.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-foreground-muted">
          {content.description}
        </p>
      </motion.div>

      <div className={`grid gap-4 ${content.secondaryImage ? "md:grid-cols-2" : ""}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageReveal}
          className="relative aspect-[4/3] w-full overflow-hidden"
        >
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            className="object-cover"
            sizes={content.secondaryImage ? "(min-width: 768px) 50vw, 100vw" : "100vw"}
            priority={isOverview}
          />
        </motion.div>
        {content.secondaryImage && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageReveal}
            transition={{ delay: 0.15 }}
            className="relative aspect-[4/3] w-full overflow-hidden"
          >
            <Image
              src={content.secondaryImage}
              alt={content.secondaryImageAlt ?? ""}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}