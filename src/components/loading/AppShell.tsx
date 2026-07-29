"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/loading/LoadingScreen";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while the loading screen is active so the page can't
    // be scrolled underneath the overlay.
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}