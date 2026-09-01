"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/animations/variants";
import { TeamMember } from "@/data/team";

interface TeamGridProps {
  members: TeamMember[];
}

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="grid gap-8 md:grid-cols-3"
    >
      {members.map((member) => (
        <motion.div
          key={member.id}
          variants={staggerItem}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="group border border-foreground/10 bg-cream p-4 shadow-sm transition-shadow duration-400 hover:shadow-lg"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
            {/* Diagonal watermark band — makes clear this is a stand-in
                photo, not a real staff portrait, until the client
                supplies actual team photography. */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
              <span className="w-[160%] -rotate-[32deg] bg-primary/70 py-1.5 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-cream">
                Placeholder — For Display Purposes Only
              </span>
            </div>
          </div>
          <h3 className="mt-5 font-display text-xl font-light tracking-wide text-foreground">
            {member.name}
          </h3>
          <span className="text-xs uppercase tracking-widest text-accent">
            {member.designation}
          </span>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            {member.portfolio}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}