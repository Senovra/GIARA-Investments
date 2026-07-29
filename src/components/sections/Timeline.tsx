"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  { year: "2011", title: "Foundation", description: "GIARA established with a focus on regional real estate investment." },
  { year: "2015", title: "Regional Expansion", description: "Expanded operations into Southeast Asia and the Indian Ocean region." },
  { year: "2018", title: "Strategic Diversification", description: "Launched dedicated strategic investments division beyond real estate." },
  { year: "2022", title: "Global Presence", description: "Opened offices across three continents, reaching institutional scale." },
  { year: "2026", title: "Next Chapter", description: "Continuing to expand our portfolio with a renewed focus on sustainable development." },
];

export default function Timeline() {
  return (
    <section className="bg-background-elevated py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Our Journey"
          title={
            <>
              Our <span className="text-accent">Milestones</span>.
            </>
          }
          className="mb-20"
          align="center"
        />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-foreground/10 md:left-1/2" />
          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className={`relative flex flex-col gap-2 pl-12 md:w-1/2 md:pl-0 md:pr-16 ${
                  i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:pl-16 md:pr-0"
                }`}
              >
                <span className="absolute left-2.5 top-1 h-2.5 w-2.5 rounded-full bg-accent md:left-auto md:right-[-5px] md:top-1" />
                <span className="font-display text-2xl text-accent">{m.year}</span>
                <h3 className="font-display text-xl font-light tracking-wide text-foreground">{m.title}</h3>
                <p className="text-sm leading-relaxed text-foreground-muted">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}