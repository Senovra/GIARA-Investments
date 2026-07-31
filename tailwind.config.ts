import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2B2B28",
          light: "#3D3D38",
        },
        cream: {
          DEFAULT: "#F5F2EC",
          dark: "#EAE5DA",
        },
        accent: {
          DEFAULT: "#5C6B5A",
          // See colors.ts note — this is now a distinct warm sand tone
          // used specifically for active-state nav highlighting, not a
          // subtle variant of the default sage accent.
          light: "#C7B896",
        },
        foreground: {
          DEFAULT: "#2B2B28",
          muted: "#78766E",
          inverse: "#F5F2EC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;