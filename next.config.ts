import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // basePath/assetPrefix only apply to the production build (which is
  // what GitHub Actions runs to deploy) — local dev now serves at the
  // plain root, so http://localhost:3000/ works directly again.
  basePath: isProd ? "/GIARA-Investments" : "",
  assetPrefix: isProd ? "/GIARA-Investments/" : "",
  trailingSlash: false,
  // Next blocks cross-origin requests to /_next/* dev resources, which kills
  // hot reload when the dev server is opened from a phone on the LAN by IP.
  // Patterns match per dot-segment, so a single "*" covers a changing DHCP
  // address. Development only — production is a static export.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;