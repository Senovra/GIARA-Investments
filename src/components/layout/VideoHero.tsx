"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { basePath } from "@/lib/basePath";

interface VideoHeroProps {
  videoSrc?: string;
  posterImage?: string;
}

// Homepage-only hero. To use the real GIARA video: download it from
// wherever it's hosted (e.g. the Pexels clip you picked) and save it to
// `public/videos/hero.mp4` — this default path picks it up automatically,
// no code change needed. Falls back to a placeholder if that file
// doesn't exist yet.
const DEFAULT_VIDEO = `${basePath}/videos/hero.mp4`;
const FALLBACK_VIDEO = "https://assets.mixkit.co/videos/28602/28602-360.mp4";

export default function VideoHero({
  videoSrc = DEFAULT_VIDEO,
  posterImage,
}: VideoHeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-primary">
      <motion.video
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        autoPlay
        muted
        loop
        playsInline
        poster={posterImage}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          // Falls back automatically if public/videos/hero.mp4 hasn't
          // been added yet, so the site never shows a broken video.
          const video = e.currentTarget;
          if (video.src !== FALLBACK_VIDEO) {
            video.src = FALLBACK_VIDEO;
          }
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-primary/20" />
    </section>
  );
}