"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { basePath } from "@/lib/basePath";

interface VideoHeroProps {
  videoSrc?: string;
  posterImage?: string;
}

const DEFAULT_VIDEO = `${basePath}/videos/hero.mp4`;
const FALLBACK_VIDEO = "https://assets.mixkit.co/videos/28602/28602-360.mp4";

function MuteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <line x1="16" y1="9" x2="22" y2="15" />
      <line x1="22" y1="9" x2="16" y2="15" />
    </svg>
  );
}

function UnmuteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18 6a9 9 0 0 1 0 12" />
    </svg>
  );
}

export default function VideoHero({
  videoSrc = DEFAULT_VIDEO,
  posterImage,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Starts muted — required for autoplay to reliably work across
  // browsers without a prior user gesture. Clicking the toggle below IS
  // a direct user gesture, so unmuting on click is allowed by browser
  // autoplay policies (unlike unmuting automatically on load, which
  // would get blocked or silently ignored).
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-primary">
      <motion.video
        ref={videoRef}
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
          const video = e.currentTarget;
          if (video.src !== FALLBACK_VIDEO) {
            video.src = FALLBACK_VIDEO;
          }
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-primary/20" />

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute bottom-8 right-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/50 text-cream backdrop-blur-sm transition-colors duration-300 hover:border-cream hover:bg-cream/10 md:bottom-10 md:right-10"
      >
        {isMuted ? <MuteIcon /> : <UnmuteIcon />}
      </motion.button>
    </section>
  );
}