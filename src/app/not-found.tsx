"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <span className="mb-6 block text-xs uppercase tracking-widest text-accent">
          404
        </span>
        <h1 className="font-display text-5xl text-foreground md:text-7xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-foreground-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-12">
          <Button href="/" variant="primary">
            Return Home
          </Button>
        </div>
      </motion.div>
    </section>
  );
}