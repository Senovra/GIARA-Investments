/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B1E3D",
          light: "#14295C",
          dark: "#081530",
        },
        secondary: {
          DEFAULT: "#0A0F1F",
        },
        accent: {
          DEFAULT: "#C9A24B",
          light: "#E1C57A",
          dark: "#A9822F",
        },
        background: {
          DEFAULT: "#121212",
          elevated: "#1A1A1A",
        },
        foreground: {
          DEFAULT: "#F5F3EF",
          muted: "#8B8F98",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};