import type { CSSProperties } from "react";
import { basePath } from "@/lib/basePath";
import { cn } from "@/lib/utils";

// Alpha stencils derived from GIARAnewlogo4.png by generate-logo-masks.js,
// trimmed to the letterforms so a height utility means the height of the
// wordmark.
const WORDMARK_STENCIL = `${basePath}/giara-wordmark-mask.png`;
const PEAK_STENCIL = `${basePath}/giara-wordmark-peak-mask.png`;
const ASPECT = "1200 / 146";

function stencil(src: string): CSSProperties {
  // Unquoted url() keeps the inline style free of escaped quotes; these
  // paths never contain characters that would need them.
  return { "--wordmark-stencil": `url(${src})` } as CSSProperties;
}

interface WordmarkProps {
  /** Height utility, e.g. "h-4". Width follows from the artwork's ratio. */
  className?: string;
  /** Background utility painting the letterforms, e.g. "bg-foreground". */
  letterClassName?: string;
}

/**
 * The GIARA wordmark, painted with CSS colours through two alpha stencils
 * instead of being shipped as a picture.
 *
 * That indirection is the whole point. Samsung Internet's dark mode repaints
 * the finished page, can't be switched off from here (it ignores
 * `color-scheme: only light`), and recolours CSS colours while deliberately
 * leaving <img> content alone so photos don't invert. A picture of the logo
 * therefore stays dark ink on a blackened header and vanishes; a shape filled
 * with a CSS colour gets recoloured along with the nav text, so the wordmark
 * stays legible for free. It's the same reason apple.com's logo survives the
 * same treatment — theirs is an inline SVG with `fill: currentColor`.
 *
 * The second layer keeps the sage "A" its own colour rather than flattening
 * the mark to one tone.
 */
export default function Wordmark({
  className,
  letterClassName = "bg-foreground",
}: WordmarkProps) {
  return (
    <span
      role="img"
      aria-label="GIARA"
      className={cn("relative block", className)}
      style={{ aspectRatio: ASPECT }}
    >
      <span
        className={cn("wordmark-layer absolute inset-0 transition-colors duration-300", letterClassName)}
        style={stencil(WORDMARK_STENCIL)}
      />
      <span
        className="wordmark-layer absolute inset-0 bg-accent"
        style={stencil(PEAK_STENCIL)}
      />
    </span>
  );
}