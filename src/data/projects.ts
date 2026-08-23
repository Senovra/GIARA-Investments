export interface ProjectContent {
  slug: "colombo" | "maldives";
  name: string;
  title: string;
  brief: string;
  description: string;
  keys: string;
  assetType: string;
  status: string;
  image: string;
  imageAlt: string;
  // Additional images for the homepage card slideshow — deliberately
  // excludes any food/dining imagery per request.
  galleryImages: string[];
  videoSrc: string;
}

export const projects: ProjectContent[] = [
  {
    slug: "colombo",
    name: "Colombo",
    title: "GIARA Colombo",
    // Short, distinct from the page body copy below — shown only on
    // the hero card, never repeated verbatim on the page itself.
    brief: "A hospitality investment at the heart of Colombo Port City.",
    description:
      "A hospitality-led investment overlooking the harbour of Colombo Port City — positioned to benefit from Sri Lanka's emergence as a regional gateway for trade, tourism, and capital.",
    keys: "180 Keys",
    assetType: "Hospitality",
    status: "In Development",
    image: "https://images.unsplash.com/photo-1742277712272-aecf17e3accb?q=80&w=2400",
    imageAlt: "Colombo city skyline",
    galleryImages: [
      "https://images.unsplash.com/photo-1742277712272-aecf17e3accb?q=80&w=1600",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600",
    ],
    videoSrc: "https://res.cloudinary.com/v1bpvtww/video/upload/v1787454017/colombo.mp4",
  },
  {
    slug: "maldives",
    name: "Maldives",
    title: "GIARA Maldives",
    brief: "A hospitality investment set across the atolls of the Maldives.",
    description:
      "An overwater hospitality investment in the Maldives, structured to capture sustained demand in one of the world's most resilient luxury tourism markets.",
    keys: "60 Keys",
    assetType: "Hospitality",
    status: "In Development",
    image: "https://images.unsplash.com/photo-1602002418209-55d7a55adf42?q=80&w=2400",
    imageAlt: "Overwater villa in the Maldives",
    galleryImages: [
      "https://images.unsplash.com/photo-1602002418209-55d7a55adf42?q=80&w=1600",
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?q=80&w=1600",
    ],
    videoSrc: "https://res.cloudinary.com/v1bpvtww/video/upload/v1787454004/maldives.mp4",
  },
];

export function getProject(slug: string): ProjectContent | undefined {
  return projects.find((p) => p.slug === slug);
}