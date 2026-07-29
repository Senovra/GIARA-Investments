"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants/nav";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { navUnderline } from "@/animations/variants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { scrolled } = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500 ease-premium md:py-8",
          scrolled && "md:py-4"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <nav
            className={cn(
              "glass flex h-16 items-center justify-between rounded-full px-5 transition-all duration-500 ease-premium md:h-[70px] md:px-8",
              !scrolled && "bg-transparent backdrop-blur-none border-transparent"
            )}
          >
            <Link
              href="/"
              className="-mt-1 flex shrink-0 items-center"
              data-cursor-hover
              aria-label="GIARA Investments — Home"
            >
              <Image
                src="/GIARALogo.png"
                alt="GIARA Investments"
                width={1007}
                height={659}
                priority
                className="block h-9 w-auto object-contain md:h-12"
              />
            </Link>

            <ul className="hidden items-center gap-10 md:flex">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      data-cursor-hover
                      className={cn(
                        "text-xs uppercase tracking-widest transition-colors duration-300",
                        isActive
                          ? "text-accent"
                          : "text-foreground/80 hover:text-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          key="underline"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={navUnderline}
                          style={{ originX: 0.5 }}
                          className="absolute -bottom-2 left-0 h-px w-full bg-accent"
                        />
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              data-cursor-hover
              className="hidden rounded-full border border-accent/40 px-5 py-2 text-xs uppercase tracking-widest text-accent transition-colors duration-300 hover:bg-accent hover:text-primary md:block"
            >
              Consult
            </Link>

            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex flex-col gap-1.5 md:hidden"
              data-cursor-hover
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-px w-6 bg-foreground"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-px w-6 bg-foreground"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-px w-6 bg-foreground"
              />
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-background/98 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "font-display text-3xl transition-colors duration-300",
                      isActive
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                  {isActive && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0.5 }}
                      className="absolute -bottom-2 left-0 h-px w-full bg-accent"
                    />
                  )}
                </motion.div>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-full border border-accent px-6 py-3 text-xs uppercase tracking-widest text-accent"
            >
              Consult
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}