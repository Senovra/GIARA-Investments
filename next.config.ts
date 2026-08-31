import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/GIARA-Investments",
  assetPrefix: "/GIARA-Investments/",
  trailingSlash: false,
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