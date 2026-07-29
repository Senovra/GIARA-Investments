"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import Button from "@/components/ui/Button";

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <span className="mb-6 block text-xs uppercase tracking-widest text-accent">
            Start a Conversation
          </span>
          <h2 className="font-display text-4xl font-light leading-tight tracking-wide text-foreground text-balance md:text-6xl">
            Let&apos;s Discuss Your Next{" "}
            <span className="text-accent">Strategic Opportunity</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">
            Our team welcomes qualified investors, partners, and institutions
            seeking to explore opportunities with GIARA.
          </p>
          <div className="mt-12">
            <Button href="/contact" variant="primary">
              Request a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}