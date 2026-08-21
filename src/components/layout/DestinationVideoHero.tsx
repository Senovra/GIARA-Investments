"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface DestinationVideoHeroProps {
  videoSrc: string;
}

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

export default function DestinationVideoHero({ videoSrc }: DestinationVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
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
    <section className="relative mt-20 w-full aspect-video overflow-hidden bg-primary md:mt-0 md:aspect-auto md:h-screen md:min-h-screen [@supports(height:100dvh)]:md:h-[100dvh]">
      <motion.video
        ref={videoRef}
        key={videoSrc}
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setIsReady(true)}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={videoSrc} type="video/mp4" />
      </motion.video>

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