"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectContent } from "@/data/projects";

interface ProjectHeroProps {
  project: ProjectContent;
}

type Phase = "card" | "video";

const CARD_FADE_IN = 800; // ms
const CARD_HOLD = 10000; // ms — ~30s total sequence
const CARD_FADE_OUT = 1500; // ms
const CARD_TOTAL = CARD_FADE_IN + CARD_HOLD + CARD_FADE_OUT;

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

export default function ProjectHero({ project }: ProjectHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("card");
  const [cardVisible, setCardVisible] = useState(false);
  // Controls the video's own opacity, independent of the card — this is
  // what guarantees the video is never visible even for a single frame
  // before the card sequence finishes, regardless of any timing gap in
  // the card's own fade animation.
  const [videoVisible, setVideoVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setCardVisible(true), 50);
    const fadeOutTimer = setTimeout(
      () => setCardVisible(false),
      CARD_FADE_IN + CARD_HOLD
    );
    const videoTimer = setTimeout(() => {
      setPhase("video");
      const video = videoRef.current;
      if (!video) return;
      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoVisible(true))
          .catch(() => {
            video.muted = true;
            setIsMuted(true);
            video
              .play()
              .then(() => setVideoVisible(true))
              .catch(() => setVideoVisible(true));
          });
      } else {
        setVideoVisible(true);
      }
    }, CARD_TOTAL);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(videoTimer);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative mt-20 w-full aspect-video overflow-hidden bg-primary md:mt-0 md:aspect-auto md:h-screen md:min-h-screen [@supports(height:100dvh)]:md:h-[100dvh]">
      <video
        ref={videoRef}
        preload="auto"
        loop
        playsInline
        style={{ opacity: videoVisible ? 1 : 0, transition: "opacity 0.8s ease" }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={project.videoSrc} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-primary/20"
        style={{ opacity: videoVisible ? 1 : 0, transition: "opacity 0.8s ease" }}
      />

      {/* Solid backdrop — always covers the full hero for as long as the
          card phase is active, guaranteeing the video underneath is
          never visible regardless of the card's own smaller size. */}
      <AnimatePresence>
        {phase === "card" && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-primary p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: cardVisible ? 1 : 0, scale: cardVisible ? 1 : 0.98 }}
              transition={{ duration: CARD_FADE_IN / 1000, ease: [0.22, 1, 0.36, 1] }}
              // A modestly-sized card, not the full hero footprint —
              // sits centered within the solid backdrop above.
              className="w-full max-w-md border border-cream/20 bg-cream/95 p-8 text-center shadow-xl backdrop-blur-md md:max-w-lg md:p-10"
            >
              <span className="mb-3 block text-xs uppercase tracking-widest text-accent">
                {project.assetType} — {project.status}
              </span>
              <h1 className="font-display text-2xl font-normal leading-[1.25] text-foreground text-balance md:text-3xl">
                {project.title}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                {project.brief}
              </p>
              <div className="mt-6 flex justify-center gap-8 border-t border-foreground/10 pt-6">
                <div>
                  <span className="block font-display text-xl text-accent">{project.keys}</span>
                  <span className="text-xs uppercase tracking-widest text-foreground-muted">
                    Keys
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {phase === "video" && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute bottom-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cream/50 text-cream backdrop-blur-sm transition-colors duration-300 hover:border-cream hover:bg-cream/10 md:bottom-10 md:right-10 md:h-11 md:w-11"
        >
          {isMuted ? <MuteIcon /> : <UnmuteIcon />}
        </motion.button>
      )}
    </section>
  );
}