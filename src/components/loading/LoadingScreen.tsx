"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const LETTERS = ["G", "I", "A", "R", "A"];
const PROGRESS_DURATION = 2900; // ms — matches the "hold" phase start below

type Phase = "outline" | "filling" | "subtitle" | "hold" | "exit";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<Phase>("outline");
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);
  const startRef = useRef<number | undefined>(undefined);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setPhase("filling"), 1300));
    timers.push(setTimeout(() => setPhase("subtitle"), 2000));
    timers.push(setTimeout(() => setPhase("hold"), 2900));
    timers.push(setTimeout(() => setPhase("exit"), 3400));
    timers.push(setTimeout(() => onComplete(), 4000));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Drives the percentage counter and fill bar in sync with real elapsed
  // time via requestAnimationFrame, reaching 100% right as the "hold"
  // phase begins.
  useEffect(() => {
    function tick(timestamp: number) {
      if (startRef.current === undefined) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const pct = Math.min(100, Math.round((elapsed / PROGRESS_DURATION) * 100));
      setProgress(pct);
      if (elapsed < PROGRESS_DURATION) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const subtitleActive = phase === "subtitle" || phase === "hold";
  const lineTargetWidth = isDesktop ? 48 : 32;

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#050B17" }}
        >
          {/* Subtle radial glow behind the wordmark for depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute h-[600px] w-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,125,196,0.25) 0%, rgba(5,11,23,0) 70%)",
            }}
          />

          {/* GIARA wordmark — letters appear one by one as outline, then
              the whole word fills with solid blue */}
          <div className="relative flex" aria-label="GIARA" role="img">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display text-6xl md:text-8xl"
                style={{
                  WebkitTextStroke:
                    phase === "outline" ? "1.5px #3B7DC4" : "1.5px transparent",
                  color:
                    phase === "outline" ? "transparent" : "#3B7DC4",
                  transition: "color 1.1s ease, -webkit-text-stroke 1.1s ease",
                  letterSpacing: "0.02em",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* INVESTMENTS subtitle — always mounted with a fixed-height
              wrapper (h-4) so its arrival never shifts the wordmark above
              it. Each of the three pieces gets its own distinct motion:
              the left line draws inward from the left, the text fades
              and lifts, and the right line draws inward from the right —
              a small asymmetry that reads as more deliberate than a
              mirrored animation. */}
          <div className="mt-5 flex h-4 items-center gap-4 md:mt-6 md:gap-6">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: subtitleActive ? 1 : 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0, width: lineTargetWidth, maxWidth: 48 }}
              className="h-px bg-accent"
            />
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={
                subtitleActive
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 6 }
              }
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs uppercase tracking-[0.35em] text-foreground-muted md:text-sm"
            >
              Investments
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: subtitleActive ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 1, width: lineTargetWidth, maxWidth: 48 }}
              className="h-px bg-accent"
            />
          </div>

          {/* Percentage progress bar — centered under the logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "hold" ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-14 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
          >
            <span className="font-body text-[11px] font-light tracking-[0.2em] text-foreground-muted">
              {progress}%
            </span>
            <div className="h-px w-40 overflow-hidden bg-foreground/10 md:w-48">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="h-full bg-accent"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}