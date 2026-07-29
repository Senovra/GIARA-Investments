"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem } from "@/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { portfolioItems } from "@/data/portfolio";

export default function FeaturedPortfolio() {
  const featured = portfolioItems.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Featured Portfolio"
          title={
            <>
              A Portfolio Defined by{" "}
              <span className="text-accent">Ambition and Precision.</span> 
            </>
          }
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Button href="/portfolio" variant="outline">
            View All Projects
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid gap-6 md:grid-cols-2"
      >
        {featured.map((item, index) => (
          <motion.div
            key={item.id}
            variants={staggerItem}
            className={`group relative overflow-hidden rounded-sm ${
              index === 0 ? "md:col-span-2 md:aspect-[21/9]" : "aspect-[4/3]"
            }`}
          >
            <Link href="/portfolio" data-cursor-hover>
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.category} project in ${item.location}`}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-110"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="mb-2 block text-xs uppercase tracking-widest text-accent">
                  {item.category} — {item.location}
                </span>
                <h3 className="font-display text-2xl font-light tracking-wide text-foreground md:text-3xl">
                  {item.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}