import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  reactStrictMode: true,
  // Allows the dev server's hot-reload / HMR websocket to accept
  // requests from your phone's IP when testing on mobile via
  // `npx next dev -H 0.0.0.0`. Without this, the page loads but live
  // reload and some dev-only resources get silently blocked.
  allowedDevOrigins: ["10.124.98.43"],
};

export default nextConfig;