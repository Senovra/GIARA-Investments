"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { basePath } from "@/lib/basePath";

interface VideoHeroProps {
  videoSrc?: string;
}

const DEFAULT_VIDEO = "https://res.cloudinary.com/v1bpvtww/video/upload/v1787454003/hero.mp4";

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

export default function VideoHero({ videoSrc = DEFAULT_VIDEO }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {
          // Autoplay blocked entirely — remains paused until interaction.
        });
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    // mt-20 pushes the video section down by exactly the header's height
    // (h-20 = 80px) on mobile only, so the shorter aspect-video box starts
    // right below the floating nav instead of partially behind it. The
    // header itself is unaffected — it still floats fixed at the very
    // top in its frosted-glass state, now sitting over the plain page
    // background for that first 80px instead of over the video. Desktop
    // reverts to mt-0 since the full-height hero there is designed to
    // sit behind the nav intentionally.
    <section className="relative mt-20 w-full aspect-video overflow-hidden bg-primary md:mt-0 md:aspect-auto md:h-screen md:min-h-screen [@supports(height:100dvh)]:md:h-[100dvh]">
      <motion.video
        ref={videoRef}
        key={videoSrc}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover object-center"
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
        className="absolute bottom-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cream/50 text-cream backdrop-blur-sm transition-colors duration-300 hover:border-cream hover:bg-cream/10 md:bottom-10 md:right-10 md:h-11 md:w-11"
      >
        {isMuted ? <MuteIcon /> : <UnmuteIcon />}
      </motion.button>
    </section>
  );
}