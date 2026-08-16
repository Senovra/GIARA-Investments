"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { basePath } from "@/lib/basePath";

interface VideoHeroProps {
  desktopVideoSrc?: string;
  mobileVideoSrc?: string;
  posterImage?: string;
}

const DEFAULT_DESKTOP_VIDEO = `${basePath}/videos/hero.mp4`;
const DEFAULT_MOBILE_VIDEO = `${basePath}/videos/hero2.mp4`;
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
  desktopVideoSrc = DEFAULT_DESKTOP_VIDEO,
  mobileVideoSrc = DEFAULT_MOBILE_VIDEO,
  posterImage,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    // Back to full-viewport-height on every breakpoint — now that
    // hero2.mp4 is actually shot in portrait for mobile, there's no need
    // for the shorter 65vh workaround that was compensating for a
    // landscape-only video. 100dvh (dynamic viewport height) is used
    // instead of 100vh specifically for mobile browsers, since their
    // address bar shrinking/expanding on scroll makes plain vh jumpy —
    // dvh accounts for that automatically. Falls back to min-h-screen
    // for any browser that doesn't support dvh.
    <section className="relative h-screen min-h-screen w-full overflow-hidden bg-primary [@supports(height:100dvh)]:h-[100dvh]">
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
        className="absolute inset-0 h-full w-full object-cover object-center"
        onError={(e) => {
          const video = e.currentTarget;
          if (video.src !== FALLBACK_VIDEO) {
            video.src = FALLBACK_VIDEO;
          }
        }}
      >
        <source src={mobileVideoSrc} media="(max-width: 767px)" type="video/mp4" />
        <source src={desktopVideoSrc} type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-primary/20" />

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute bottom-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cream/50 text-cream backdrop-blur-sm transition-colors duration-300 hover:border-cream hover:bg-cream/10 md:bottom-10 md:right-10 md:h-11 md:w-11"
      >
        {isMuted ? <MuteIcon /> : <UnmuteIcon />}
      </motion.button>
    </section>
  );
}