"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Advisor } from "@/data/advisors";

interface AdvisorsSlideshowProps {
  advisors: Advisor[];
}

const CARDS_VISIBLE_DESKTOP = 3;
const SLIDE_INTERVAL = 4500;

export default function AdvisorsSlideshow({ advisors }: AdvisorsSlideshowProps) {
  const [start, setStart] = useState(0);

  useEffect(() => {
    if (advisors.length <= CARDS_VISIBLE_DESKTOP) return;
    const timer = setInterval(() => {
      setStart((prev) => (prev + 1) % advisors.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [advisors.length]);

  const visible = Array.from({ length: Math.min(CARDS_VISIBLE_DESKTOP, advisors.length) }, (_, i) => {
    return advisors[(start + i) % advisors.length];
  });

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {visible.map((advisor) => (
          <motion.div
            key={advisor.id + start}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="border border-foreground/10 bg-cream px-8 py-12 text-center shadow-sm transition-shadow duration-400 hover:shadow-lg"
          >
            <div className="mx-auto mb-6 flex h-24 w-full max-w-[180px] items-center justify-center">
              {advisor.logo ? (
                <div className="relative h-full w-full">
                  <Image
                    src={advisor.logo}
                    alt={advisor.name}
                    fill
                    className="object-contain"
                    sizes="180px"
                  />
                </div>
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-foreground/10 bg-cream-dark">
                  <span className="font-display text-2xl text-foreground-muted">
                    {advisor.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <h3 className="font-display text-lg text-foreground">{advisor.name}</h3>
            <span className="mt-1 block text-xs uppercase tracking-widest text-accent">
              {advisor.role}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}