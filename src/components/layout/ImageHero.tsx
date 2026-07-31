"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imageReveal } from "@/animations/variants";

interface ImageHeroProps {
  image: string;
  imageAlt: string;
}

// Static-image hero used for About and each destination's Overview page —
// keeps video exclusive to the homepage, per the "video is for the main
// hero only" direction.
export default function ImageHero({ image, imageAlt }: ImageHeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-primary">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageReveal}
        className="absolute inset-0"
      >
        <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-primary/20" />
    </section>
  );
}