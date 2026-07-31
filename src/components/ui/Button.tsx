"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3 text-xs tracking-widest uppercase transition-colors duration-300 ease-premium";

  const variants = {
    primary: "bg-primary text-cream hover:bg-primary-light",
    outline:
      "border border-foreground/30 text-foreground hover:border-accent hover:text-accent",
    ghost: "text-foreground hover:text-accent",
  };

  const classes = cn(base, variants[variant], className);

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}