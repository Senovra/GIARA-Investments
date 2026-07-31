// Central color tokens — the single source of truth for the palette.
// Update here to rebrand the entire site. Mirrors tailwind.config.ts.

export const colors = {
  primary: "#2B2B28",
  primaryLight: "#3D3D38",
  cream: "#F5F2EC",
  creamDark: "#EAE5DA",
  accent: "#5C6B5A",
  // Brightened from a near-identical sage variant to a distinct warm
  // sand tone — needed as a genuinely visible "active" highlight against
  // both dark hero video/images and the light cream background, since
  // the previous accent-light was too close to the muted grey-green
  // accent to read as a highlight.
  accentLight: "#C7B896",
  foreground: "#2B2B28",
  foregroundMuted: "#78766E",
  foregroundInverse: "#F5F2EC",
} as const;

export type ColorToken = keyof typeof colors;