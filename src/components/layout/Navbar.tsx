"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HEADQUARTERS, NAV_LINKS, DESTINATION_SUBNAV } from "@/constants/nav";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { basePath } from "@/lib/basePath";
import { cn } from "@/lib/utils";

const lightScheme: React.CSSProperties = { colorScheme: "light" };

// Hardcoded directly in this file — bypasses src/constants/nav.ts
// entirely for the mobile menu, to rule out any possibility of that
// file being stale/out of sync as the cause of the missing-destination
// bug. If this fixes it, the constants file was the culprit; if not,
// it points conclusively at a duplicate Navbar file being loaded
// instead of this one.
const MOBILE_DESTINATIONS = [
  { label: "Colombo", href: "/colombo" },
  { label: "Maldives", href: "/maldives" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrolled } = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);
  const [isDestOpen, setIsDestOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const heroRoutes = ["/", "/about", "/dubai", "/colombo", "/maldives"];
  const hasHeroBackground = heroRoutes.includes(pathname);
  const navIsSolid = scrolled || !hasHeroBackground || isOpen;

  const activeDestination = MOBILE_DESTINATIONS.find((d) => pathname.startsWith(d.href));
  const isDestinationActive = Boolean(activeDestination);
  const currentDestSlug = activeDestination?.href.replace("/", "");
  const isHeadquartersActive = pathname === HEADQUARTERS.href;

  const headerBg = navIsSolid
    ? "bg-cream/90 backdrop-blur-md shadow-sm"
    : "bg-primary/35 backdrop-blur-md";

  // Single shared active-state style used EVERYWHERE — desktop top-level
  // links, the Destinations dropdown trigger, items inside that
  // dropdown, the sub-nav row, and every item in the mobile menu. This
  // is what fixes the "PC destination highlight doesn't match the rest"
  // complaint — previously the dropdown's individual links used a
  // different color (`text-accent`) than every other active link
  // (`text-accent-light` + underline). Now there is exactly one active
  // style, applied via this single function everywhere.
  const linkClasses = (isActive: boolean, size: "sm" | "lg" = "sm") =>
    cn(
      size === "sm" ? "text-xs uppercase tracking-widest" : "font-display text-2xl",
      "transition-colors duration-300",
      navIsSolid || size === "lg" ? "text-foreground" : "text-cream",
      isActive && "text-accent-light underline underline-offset-4 decoration-1"
    );

  return (
    <>
      <header
        style={lightScheme}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium",
          headerBg
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="relative z-50 flex shrink-0 items-center" aria-label="GIARA — Home">
            <Image
              src={`${basePath}/GIARALogo.png`}
              alt="GIARA"
              width={1007}
              height={659}
              priority
              style={lightScheme}
              className={cn(
                "h-9 w-auto object-contain transition-all duration-500",
                !navIsSolid && "brightness-0 invert"
              )}
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            <div
              className="relative"
              onMouseEnter={() => setIsDestOpen(true)}
              onMouseLeave={() => setIsDestOpen(false)}
            >
              <button className={linkClasses(isDestinationActive)}>
                <span className="flex items-center gap-1.5">
                  Destinations
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className="mt-px">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {isDestOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    style={lightScheme}
                    className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4"
                  >
                    <div className="min-w-[180px] border border-foreground/10 bg-cream py-3 shadow-lg">
                      {MOBILE_DESTINATIONS.map((dest) => {
                        const isActive = pathname === dest.href;
                        return (
                          <Link
                            key={dest.href}
                            href={dest.href}
                            className={cn(
                              "block px-5 py-2.5 text-xs uppercase tracking-widest text-foreground transition-colors duration-200 hover:text-accent",
                              isActive && "text-accent-light underline underline-offset-4 decoration-1"
                            )}
                          >
                            {dest.label}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href={HEADQUARTERS.href} className={linkClasses(isHeadquartersActive)}>
              Headquarters
            </Link>

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
            className={cn(
              "hidden border px-5 py-2.5 text-xs uppercase tracking-widest transition-colors duration-300 md:block",
              navIsSolid
                ? "border-foreground/30 text-foreground hover:border-accent hover:text-accent"
                : "border-cream/50 text-cream hover:border-cream hover:bg-cream hover:text-primary"
            )}
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
              className={cn("absolute h-px w-6", navIsSolid ? "bg-foreground" : "bg-cream")}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={cn("absolute h-px w-6", navIsSolid ? "bg-foreground" : "bg-cream")}
            />
          </button>
        </div>

        {isDestinationActive && currentDestSlug && (
          <div
            style={lightScheme}
            className={cn(
              "hidden border-t transition-all duration-500 ease-premium md:block",
              navIsSolid ? "border-foreground/10 bg-cream/90 backdrop-blur-md" : "border-cream/10 bg-primary/35 backdrop-blur-md"
            )}
          >
            <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-2 overflow-x-auto px-6 py-3 md:px-10">
              {DESTINATION_SUBNAV.map((item) => {
                const href = item.segment
                  ? `/${currentDestSlug}/${item.segment}`
                  : `/${currentDestSlug}`;
                const isActive = pathname === href;
                return (
                  <Link
                    key={item.label}
                    href={href}
                    className={cn(
                      "whitespace-nowrap text-xs uppercase tracking-widest transition-colors duration-300",
                      navIsSolid ? "text-foreground-muted hover:text-foreground" : "text-cream/80 hover:text-cream",
                      isActive && "text-accent-light underline underline-offset-4 decoration-1"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={lightScheme}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 overflow-y-auto bg-cream py-24 md:hidden"
          >
            <span className="text-xs uppercase tracking-widest text-accent">Destinations</span>
            <Link href="/colombo" className={linkClasses(pathname === "/colombo", "lg")}>
              Colombo
            </Link>
            <Link href="/maldives" className={linkClasses(pathname === "/maldives", "lg")}>
              Maldives
            </Link>

            {isDestinationActive && currentDestSlug && (
              <div className="mt-2 flex flex-col items-center gap-4 border-t border-foreground/10 pt-6">
                {DESTINATION_SUBNAV.map((item) => {
                  const href = item.segment
                    ? `/${currentDestSlug}/${item.segment}`
                    : `/${currentDestSlug}`;
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={item.label}
                      href={href}
                      className={cn(
                        "text-sm uppercase tracking-widest text-foreground-muted",
                        isActive && "text-accent-light underline underline-offset-4 decoration-1"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}

            <div className="my-2 h-px w-16 bg-foreground/10" />

            <span className="text-xs uppercase tracking-widest text-accent">Headquarters</span>
            <Link href={HEADQUARTERS.href} className={linkClasses(isHeadquartersActive, "lg")}>
              {HEADQUARTERS.label}
            </Link>

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