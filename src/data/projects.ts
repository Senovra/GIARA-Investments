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
  galleryImages: string[];
  videoSrc: string;
}

export const projects: ProjectContent[] = [
  {
    slug: "colombo",
    name: "Colombo",
    title: "GIARA Colombo",
    brief: "A hospitality investment at the heart of Colombo Port City.",
    description:
      "GIARA Colombo is a hospitality-led investment situated within Colombo Port City, a purpose-built special economic zone rising on reclaimed land beside Sri Lanka's historic Galle Face. Designed as a new financial and lifestyle district for South Asia, Port City brings together a marina, a financial precinct, and waterfront leisure development within a single master-planned city. GIARA's position within this district reflects our conviction in Colombo's emergence as a regional hub connecting South Asia, the Middle East, and Southeast Asia.",
    keys: "180 Keys",
    assetType: "Hospitality",
    status: "In Development",
    image: "https://images.unsplash.com/photo-1742277712272-aecf17e3accb?q=80&w=2400",
    imageAlt: "Colombo city skyline",
    galleryImages: [
      "https://images.unsplash.com/photo-1742277712272-aecf17e3accb?q=80&w=1600",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600",
    ],
    videoSrc: "https://res.cloudinary.com/v1bpvtww/video/upload/v1787589198/colombo.mp4",
  },
  {
    slug: "maldives",
    name: "Maldives",
    title: "GIARA Maldives",
    brief: "A hospitality investment set across the atolls of the Maldives.",
    description:
      "GIARA Maldives is an overwater hospitality investment set within the North Malé Atoll, a short speedboat transfer from Velana International Airport. The surrounding waters are defined by turquoise lagoons and coral reef, the setting that has long made the Maldives one of the world's most resilient luxury tourism destinations. GIARA's investment here is structured around this enduring demand — a market where overwater accommodation, natural seclusion, and proximity to the reef continue to command sustained guest interest year after year.",
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