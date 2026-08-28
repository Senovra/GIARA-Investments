"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { basePath } from "@/lib/basePath";

function WrenchIcon() {
  return (
    <motion.svg
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: [0, -12, 12, -8, 8, 0] }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        repeatDelay: 1.4,
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
        src={`${basePath}/GIARALogo.png`}
        alt="GIARA"
        width={1007}
        height={659}
        priority
        className="mb-12 h-10 w-auto object-contain"
      />

      <div className="mb-8 text-accent">
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