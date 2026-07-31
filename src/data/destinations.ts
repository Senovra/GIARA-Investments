export interface Destination {
  slug: "dubai" | "colombo" | "maldives";
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
}

export const destinations: Destination[] = [
  {
    slug: "dubai",
    name: "GIARA Dubai",
    tagline: "Where the city's ambition meets quiet composure.",
    description:
      "Set within Dubai's most considered address, GIARA Dubai brings a sense of stillness to a city defined by momentum.",
    heroImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400",
  },
  {
    slug: "colombo",
    name: "GIARA Colombo",
    tagline: "A coastal calm, composed with quiet intention.",
    description:
      "Overlooking the harbour of Colombo Port City, GIARA Colombo brings an unhurried elegance to Sri Lanka's evolving skyline.",
    heroImage:
      "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=2400",
  },
  {
    slug: "maldives",
    name: "GIARA Maldives",
    tagline: "Where the ocean sets the pace.",
    description:
      "An overwater sanctuary in the Maldives, GIARA Maldives is defined by restraint, space, and the rhythm of the tide.",
    heroImage:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2400",
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}