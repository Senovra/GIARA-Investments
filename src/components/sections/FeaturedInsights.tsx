"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem } from "@/animations/variants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { insightArticles } from "@/data/insights";

export default function FeaturedInsights() {
  const featured = insightArticles.slice(0, 3);

  return (
    <section className="bg-background-elevated py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights"
            title={
              <>
                Perspectives Shaping{" "}
                <span className="text-accent">Our Industry.</span>
              </>
            }
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Button href="/insights" variant="outline">
              All Insights
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-3"
        >
          {featured.map((article) => (
            <motion.div key={article.id} variants={staggerItem}>
              <Link href={`/insights`} data-cursor-hover className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-110"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <span className="mt-6 block text-xs uppercase tracking-widest text-accent">
                  {article.category}
                </span>
                <h3 className="mt-3 font-display text-xl font-light tracking-wide text-foreground group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {article.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}