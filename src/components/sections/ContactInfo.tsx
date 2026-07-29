"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import GlassCard from "@/components/ui/GlassCard";

const offices = [
  { city: "Dubai (HQ)", detail: "DIFC, Dubai, United Arab Emirates" },
  { city: "Singapore", detail: "Marina Bay Financial Centre, Singapore" },
  { city: "London", detail: "Canary Wharf, London, United Kingdom" },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="space-y-6"
    >
      <GlassCard>
        <h3 className="mb-6 font-display text-xl text-foreground">Our Offices</h3>
        <div className="space-y-5">
          {offices.map((office) => (
            <div key={office.city}>
              <span className="block text-sm text-foreground">{office.city}</span>
              <span className="block text-sm text-foreground-muted">{office.detail}</span>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="mb-4 font-display text-xl text-foreground">Direct Contact</h3>
        <a
          href="mailto:inquiries@giara.com"
          data-cursor-hover
          className="block text-sm text-foreground-muted transition-colors hover:text-accent"
        >
          inquiries@giara.com
        </a>
        <a
          href="tel:+97140000000"
          data-cursor-hover
          className="mt-2 block text-sm text-foreground-muted transition-colors hover:text-accent"
        >
          +971 4 000 0000
        </a>
      </GlassCard>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-foreground/10 bg-background-elevated">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-xs uppercase tracking-widest text-foreground-muted">
            Map Placeholder — Dubai HQ
          </span>
        </div>
      </div>
    </motion.div>
  );
}