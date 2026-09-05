"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function WrenchIcon() {
  return (
    <motion.svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: [-14, 14, -14] }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6l-6.4 6.4a1.5 1.5 0 0 0 2.1 2.1l6.4-6.4a4 4 0 0 0 5.6-5.6l-2.8 2.8-2.1-2.1 2.8-2.8Z" />
    </motion.svg>
  );
}

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <Image
        src="https://res.cloudinary.com/v1bpvtww/image/upload/v1788628021/GIARA_DARK_FAVICON_703X171_SVG.svg"
        alt="GIARA"
        width={1007}
        height={659}
        priority
        className="mb-14 h-10 w-auto object-contain"
      />

      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-foreground/15 text-accent">
        <WrenchIcon />
      </div>

      <span className="mb-4 block text-xs uppercase tracking-widest text-accent">
        Site Under Maintenance
      </span>
      <h1 className="font-display text-3xl font-normal leading-[1.25] text-foreground text-balance md:text-4xl">
        We&apos;ll Be Back Shortly
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-foreground-muted">
        GIARA is currently undergoing scheduled maintenance to improve
        your experience. Please check back again soon.
      </p>
      <p className="mt-10 text-xs uppercase tracking-widest text-foreground-muted">
        For urgent enquiries, contact{" "}
        <a href="mailto:info@giara.global" className="text-foreground underline decoration-accent underline-offset-4 hover:text-accent">
          info@giara.global
        </a>
      </p>
    </div>
  );
}