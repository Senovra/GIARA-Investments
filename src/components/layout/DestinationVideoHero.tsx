"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";

interface DestinationVideoHeroProps {
  videoSrc: string;
  posterImage?: string;
}

export default function DestinationVideoHero({
  videoSrc,
  posterImage,
}: DestinationVideoHeroProps) {
  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden bg-primary [@supports(height:100dvh)]:h-[100dvh]">
      <motion.video
        // key={videoSrc} forces React to unmount/remount a fresh <video>
        // element whenever the source changes (i.e. on every navigation
        // between destination pages), instead of reusing the same DOM
        // node and just swapping its src — which was causing the
        // previous page's last video frame to remain visible for a
        // couple of seconds while the new one loaded.
        key={videoSrc}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterImage}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={videoSrc} type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-primary/20" />
    </section>
  );
}