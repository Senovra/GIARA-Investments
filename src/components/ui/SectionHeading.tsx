"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 block text-xs uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-foreground-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
}