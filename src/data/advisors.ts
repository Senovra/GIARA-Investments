export interface Advisor {
  id: string;
  name: string;
  role: string;
  // Full Cloudinary URLs now, not local paths — matches how the hero
  // videos are hosted. Advisors without a confirmed logo yet (pending
  // contract signature) fall back to an initial-letter placeholder.
  logo?: string;
}

export const advisors: Advisor[] = [
  {
    id: "advisor-ey",
    name: "EY Maldives",
    role: "Auditors — Maldives",
    logo: "https://res.cloudinary.com/v1bpvtww/image/upload/v1788357091/EY.png",
  },
  {
    id: "advisor-mm",
    name: "Mazlan & Murad Law Associates",
    role: "Legal Advisors — Maldives",
    logo: "https://res.cloudinary.com/v1bpvtww/image/upload/v1788149535/MM.jpg",
  },
  {
    id: "advisor-cla",
    name: "CLA & Partners",
    role: "Legal Advisors — Maldives",
    logo: "https://res.cloudinary.com/v1bpvtww/image/upload/v1788149535/CLA.jpg",
  },
  { id: "advisor-4", name: "Partner Placeholder", role: "Architecture Partner" },
  { id: "advisor-5", name: "Partner Placeholder", role: "Development Partner" },
];