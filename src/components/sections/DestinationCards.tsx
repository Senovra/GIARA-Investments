"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { staggerContainer, staggerItem } from "@/animations/variants";
import { DESTINATIONS } from "@/constants/nav";
import { destinationContent, DestinationSlug } from "@/data/destinationContent";

const SLIDE_INTERVAL = 6000; // ms between crossfades — slowed from 3.5s
const FADE_DURATION = 2.2; // seconds — slower, more deliberate crossfade

function DestinationCard({ slug, label, href }: { slug: DestinationSlug; label: string; href: string }) {
  const content = destinationContent[slug];
  const images = [
    content.overview.image,
    content.accommodation.image,
    content.dining.image,
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div variants={staggerItem} className="group relative aspect-[3/4] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-primary/25 transition-colors duration-500 group-hover:bg-primary/35" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center">
        <span className="font-display text-2xl text-cream md:text-3xl">{label}</span>
        <Link
          href={href}
          className="border border-cream/60 px-6 py-2.5 text-xs uppercase tracking-widest text-cream transition-colors duration-300 hover:border-cream hover:bg-cream hover:text-primary"
        >
          Discover
        </Link>
      </div>
    </motion.div>
  );
}

export default function DestinationCards() {
  return (
    <section className="border-y border-foreground/10 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <span className="mb-10 block text-center text-xs uppercase tracking-widest text-accent">
          Select a Destination
        </span>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {DESTINATIONS.map((dest) => (
            <DestinationCard
              key={dest.href}
              slug={dest.href.replace("/", "") as DestinationSlug}
              label={dest.label}
              href={dest.href}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}