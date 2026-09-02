"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/variants";
import { TeamMember } from "@/data/team";

interface TeamGridProps {
  members: TeamMember[];
}

// Generic "no profile picture" silhouette — the same style used by most
// platforms (LinkedIn, Slack, etc.) as a default avatar when no photo
// has been uploaded, rather than initials or a real placeholder photo.
function NoProfileIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  );
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
          <div className="flex aspect-[3/4] w-full items-center justify-center border border-foreground/10 bg-cream-dark text-foreground-muted">
            <NoProfileIcon />
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