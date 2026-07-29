"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";

const offices = [
  { city: "Dubai", country: "United Arab Emirates", role: "Global Headquarters" },
  { city: "Singapore", country: "Singapore", role: "Asia-Pacific Office" },
  { city: "London", country: "United Kingdom", role: "European Office" },
  { city: "Malé", country: "Maldives", role: "Regional Office" },
];

export default function GlobalPresence() {
  return (
    <section className="bg-background-elevated py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Global Presence"
          title={
            <>
              Operating Where <span className="text-accent">Opportunity</span>{" "}
              Lives.
            </>
          }
          className="mb-20"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-4"
        >
          {offices.map((office) => (
            <motion.div key={office.city} variants={staggerItem} className="border-t border-foreground/10 pt-6">
              <h3 className="font-display text-xl font-light tracking-wide text-foreground">{office.city}</h3>
              <p className="mt-1 text-sm text-foreground-muted">{office.country}</p>
              <span className="mt-3 block text-xs uppercase tracking-widest text-accent">{office.role}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}