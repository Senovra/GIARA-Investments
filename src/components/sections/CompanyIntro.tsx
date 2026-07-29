"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, imageReveal } from "@/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CompanyIntro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title={
              <>
                A Global Holding Company Built on{" "}
                <span className="text-accent">Discipline and Vision.</span> 
              </>
            }
            description="For over a decade, GIARA has partnered with institutions, families, and governments to develop real estate and capital strategies that endure well beyond a single market cycle."
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-foreground-muted"
          >
            Our approach combines architectural ambition with rigorous
            financial discipline — every asset we hold is selected for its
            capacity to compound value over decades, not quarters.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageReveal}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
        >
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600"
            alt="Executive boardroom meeting representing GIARA's leadership and governance"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}