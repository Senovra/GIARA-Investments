import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://senovra.github.io/GIARA-Investments";

  const routes = [
    "",
    "/about",
    "/contact",
    "/development",
    "/careers",
    "/policies",
    "/dubai",
    "/dubai/accommodation",
    "/dubai/dining",
    "/dubai/wellness",
    "/dubai/events",
    "/dubai/experiences",
    "/dubai/offers",
    "/colombo",
    "/colombo/accommodation",
    "/colombo/dining",
    "/colombo/wellness",
    "/colombo/events",
    "/colombo/experiences",
    "/colombo/offers",
    "/maldives",
    "/maldives/accommodation",
    "/maldives/dining",
    "/maldives/wellness",
    "/maldives/events",
    "/maldives/experiences",
    "/maldives/offers",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}