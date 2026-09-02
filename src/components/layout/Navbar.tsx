"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, NAV_LINKS } from "@/constants/nav";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { scrolled } = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);
  const [isProjOpen, setIsProjOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isProjectActive = PROJECTS.some((p) => pathname === p.href);

  const linkClasses = (isActive: boolean, size: "sm" | "lg" = "sm") =>
    cn(
      size === "sm" ? "text-xs uppercase tracking-widest" : "font-display text-2xl",
      "text-foreground transition-colors duration-300",
      isActive && "text-accent-light underline underline-offset-4 decoration-1"
    );

  return (
    <>
      {/* Always solid — same cream-dark beige used on the homepage
          Projects section. No transparent/glass state, no sub-nav row
          (that was leftover from the old multi-section project pages,
          which no longer exist). */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-cream-dark transition-shadow duration-500 ease-premium",
          scrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="relative z-50 flex shrink-0 items-center" aria-label="GIARA — Home">
            <Image
              src="https://res.cloudinary.com/v1bpvtww/image/upload/v1788331486/GIARAnewlogo2.png"
              alt="GIARA"
              width={1007}
              height={659}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            <div
              className="relative"
              onMouseEnter={() => setIsProjOpen(true)}
              onMouseLeave={() => setIsProjOpen(false)}
            >
              <button className={linkClasses(isProjectActive)}>
                <span className="flex items-center gap-1.5">
                  Projects
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className="mt-px">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {isProjOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4"
                  >
                    <div className="min-w-[180px] border border-foreground/10 bg-cream-dark py-3 shadow-lg">
                      {PROJECTS.map((project) => {
                        const isActive = pathname === project.href;
                        return (
                          <Link
                            key={project.href}
                            href={project.href}
                            className={cn(
                              "block px-5 py-2.5 text-xs uppercase tracking-widest text-foreground transition-colors duration-200 hover:text-accent",
                              isActive && "text-accent-light underline underline-offset-4 decoration-1"
                            )}
                          >
                            {project.label}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className={linkClasses(isActive)}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden border border-foreground/30 px-5 py-2.5 text-xs uppercase tracking-widest text-foreground transition-colors duration-300 hover:border-accent hover:text-accent md:block"
          >
            Enquire
          </Link>

          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-50 flex h-5 w-6 items-center justify-center md:hidden"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-px w-6 bg-foreground"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-px w-6 bg-foreground"
            />
          </button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-start gap-6 overflow-y-auto bg-cream-dark px-6 pb-16 pt-28"
          >
            <span className="text-xs uppercase tracking-widest text-accent">Projects</span>
            {PROJECTS.map((project) => {
              const isActive = pathname === project.href;
              return (
                <Link key={project.href} href={project.href} className={linkClasses(isActive, "lg")}>
                  {project.label}
                </Link>
              );
            })}

            <div className="my-2 h-px w-16 bg-foreground/10" />
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className={linkClasses(isActive, "lg")}>
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-4 border border-foreground/30 px-6 py-3 text-xs uppercase tracking-widest text-foreground"
            >
              Enquire
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}