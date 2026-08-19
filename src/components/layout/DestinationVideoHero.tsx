"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface DestinationVideoHeroProps {
  videoSrc: string;
  mobileVideoSrc?: string;
}

// No poster image, ever — the section shows a plain solid background
// (bg-primary) until the video itself is ready to play, then fades the
// video in. This removes the static-image flash entirely, per the
// requirement that nothing but video should ever appear in these heroes.
export default function DestinationVideoHero({
  videoSrc,
  mobileVideoSrc,
}: DestinationVideoHeroProps) {
  const [isReady, setIsReady] = useState(false);

  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden bg-primary [@supports(height:100dvh)]:h-[100dvh]">
      <motion.video
        key={videoSrc}
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setIsReady(true)}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        {mobileVideoSrc && <source src={mobileVideoSrc} media="(max-width: 767px)" type="video/mp4" />}
        <source src={videoSrc} type="video/mp4" />
      </motion.video>
    </section>
  );
}