"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/animations/variants";
import { portfolioItems } from "@/data/portfolio";
import { PortfolioItem } from "@/types";

const categories = [
  "All",
  "Commercial",
  "Residential",
  "Mixed Use",
  "Strategic Investments",
] as const;

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Reset any expanded card whenever the filter changes, so we never
  // end up with a stale expanded card that no longer matches the filter.
  useEffect(() => {
    setExpandedId(null);
  }, [activeCategory]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-14 flex flex-wrap gap-3"
        role="tablist"
        aria-label="Filter portfolio by category"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            data-cursor-hover
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-colors duration-300 ${
              activeCategory === cat
                ? "border-accent bg-accent text-primary"
                : "border-foreground/20 text-foreground-muted hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Keying by activeCategory forces a clean remount of the grid on
          every filter change, so the enter animation reliably fires
          every time instead of only on first scroll-into-view. */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              isExpanded={expandedId === item.id}
              onToggle={() => toggleExpand(item.id)}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function PortfolioCard({
  item,
  isExpanded,
  onToggle,
}: {
  item: PortfolioItem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={`group cursor-pointer overflow-hidden rounded-sm ${
        isExpanded ? "md:col-span-2 lg:col-span-3" : ""
      }`}
      onClick={onToggle}
      data-cursor-hover
    >
      <motion.div
        layout
        className={`relative overflow-hidden ${
          isExpanded ? "aspect-[21/9]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={item.image}
          alt={`${item.title} — ${item.category} project in ${item.location}`}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <span className="mb-1 block text-xs uppercase tracking-widest text-accent">
            {item.category} — {item.year}
          </span>
          <h3 className="font-display text-xl text-foreground md:text-2xl">
            {item.title}
          </h3>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-background-elevated"
          >
            <div className="grid gap-6 p-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <p className="text-sm leading-relaxed text-foreground-muted">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-accent">Location</span>
                  <span className="text-foreground-muted">{item.location}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-accent">Year</span>
                  <span className="text-foreground-muted">{item.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}