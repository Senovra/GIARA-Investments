"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";

interface DestinationVideoHeroProps {
  videoSrc: string;
  posterImage?: string;
}

// Muted-only hero for destination pages that have silent video footage —
// no mute/unmute button, unlike the homepage's VideoHero, since there's
// no audio track to toggle. posterImage (the existing destination photo)
// shows immediately while the video loads, avoiding a blank/black flash.
export default function DestinationVideoHero({
  videoSrc,
  posterImage,
}: DestinationVideoHeroProps) {
  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden bg-primary [@supports(height:100dvh)]:h-[100dvh]">
      <motion.video
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        autoPlay
        muted
        loop
        playsInline
        poster={posterImage}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={videoSrc} type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-primary/20" />
    </section>
  );
}