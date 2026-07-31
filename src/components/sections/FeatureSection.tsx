"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, imageReveal } from "@/animations/variants";

interface FeatureSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export default function FeatureSection({
  eyebrow,
  title,
  description,
  linkLabel,
  linkHref,
  image,
  imageAlt,
  imagePosition = "right",
}: FeatureSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageReveal}
          className={`relative aspect-[4/3] w-full overflow-hidden ${
            imagePosition === "left" ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
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
          className={imagePosition === "left" ? "md:order-2" : "md:order-1"}
        >
          <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
            {eyebrow}
          </span>
          <h3 className="font-display text-2xl font-normal leading-[1.25] text-foreground text-balance md:text-3xl">
            {title}
          </h3>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground-muted">
            {description}
          </p>
          <Link
            href={linkHref}
            className="mt-7 inline-block text-xs uppercase tracking-widest text-foreground underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
          >
            {linkLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}