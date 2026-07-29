"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";
import { TeamMember } from "@/types";

interface LeadershipGridProps {
  members: TeamMember[];
}

export default function LeadershipGrid({ members }: LeadershipGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <SectionHeading
        eyebrow="Leadership"
        title={
          <>
            Guided by <span className="text-accent">Experienced</span>{" "}
            Stewardship.
          </>
        }
        className="mb-20"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid gap-10 md:grid-cols-3"
      >
        {members.map((member) => (
          <motion.div key={member.id} variants={staggerItem}>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm grayscale">
              <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
            </div>
            <h3 className="mt-6 font-display text-xl font-light tracking-wide text-foreground">{member.name}</h3>
            <span className="text-xs uppercase tracking-widest text-accent">{member.role}</span>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{member.bio}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}