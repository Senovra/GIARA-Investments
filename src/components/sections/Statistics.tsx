"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/variants";
import { StatItem } from "@/types";

const stats: StatItem[] = [
  { id: "aum", label: "Assets Under Management", value: "4.2", suffix: "B+" },
  { id: "projects", label: "Completed Projects", value: "60", suffix: "+" },
  { id: "countries", label: "Countries of Operation", value: "12", suffix: "+" },
  { id: "years", label: "Years of Track Record", value: "15", suffix: "+" },
];

export default function Statistics() {
  return (
    <section className="border-y border-foreground/10 bg-background-elevated py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-10 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={staggerItem} className="text-center md:text-left">
              <div className="font-display text-4xl text-accent md:text-5xl">
                {stat.value}
                <span className="text-2xl md:text-3xl">{stat.suffix}</span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-widest text-foreground-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}