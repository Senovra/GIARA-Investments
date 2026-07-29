// Central color tokens — the single source of truth for the palette.
// Update here to rebrand the entire site.

export const colors = {
  primary: "#0B1E3D",
  primaryLight: "#14295C",
  primaryDark: "#081530",
  secondary: "#0A0F1F",
  accent: "#C9A24B",
  accentLight: "#E1C57A",
  accentDark: "#A9822F",
  background: "#121212",
  backgroundElevated: "#1A1A1A",
  foreground: "#F5F3EF",
  foregroundMuted: "#8B8F98",
} as const;

export type ColorToken = keyof typeof colors;