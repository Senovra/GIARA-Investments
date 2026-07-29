"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/animations/variants";
import { insightArticles } from "@/data/insights";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsGrid() {
  const [featured, ...rest] = insightArticles;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
      {/* Featured article */}
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerItem}
        className="group mb-20 grid cursor-pointer gap-8 overflow-hidden rounded-sm md:grid-cols-2"
        data-cursor-hover
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-105"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="mb-3 text-xs uppercase tracking-widest text-accent">
            {featured.category} · {formatDate(featured.date)}
          </span>
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            {featured.title}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground-muted">
            {featured.excerpt}
          </p>
          <span className="mt-6 text-xs uppercase tracking-widest text-foreground-muted">
            {featured.readTime}
          </span>
        </div>
      </motion.article>

      {/* Article grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid gap-10 md:grid-cols-3"
      >
        {rest.map((article) => (
          <motion.article
            key={article.id}
            variants={staggerItem}
            className="group cursor-pointer"
            data-cursor-hover
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <span className="mt-6 block text-xs uppercase tracking-widest text-accent">
              {article.category} · {formatDate(article.date)}
            </span>
            <h3 className="mt-3 font-display text-xl text-foreground transition-colors duration-300 group-hover:text-accent">
              {article.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {article.excerpt}
            </p>
            <span className="mt-4 block text-xs uppercase tracking-widest text-foreground-muted">
              {article.readTime}
            </span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}