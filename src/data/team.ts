export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  portfolio: string;
  image: string;
}

// Placeholder entries — client to confirm real names, designations,
// portfolios, and photos before launch. Images are watermarked on
// display (see TeamGrid.tsx) to make clear these are stand-ins, not
// real staff photos.
export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Name Placeholder",
    designation: "Chief Executive Officer",
    portfolio:
      "Oversees GIARA's overall investment strategy and capital allocation, with a background spanning real estate investment and hospitality operations across multiple markets.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
  },
  {
    id: "member-2",
    name: "Name Placeholder",
    designation: "Chief Investment Officer",
    portfolio:
      "Leads sourcing, underwriting, and structuring of GIARA's investment portfolio, with particular focus on hospitality assets across South Asia and the Indian Ocean region.",
    image: "https://images.unsplash.com/photo-1627161684458-a62da52b51c3?q=80&w=800",
  },
  {
    id: "member-3",
    name: "Name Placeholder",
    designation: "Chief Operating Officer",
    portfolio:
      "Responsible for operational execution across GIARA's project pipeline, from development through to asset stabilization.",
    image: "https://images.unsplash.com/photo-1642257859842-c95f9fa8121d?q=80&w=800",
  },
  {
    id: "member-4",
    name: "Name Placeholder",
    designation: "Head of Development",
    portfolio:
      "Manages GIARA's development pipeline end to end, coordinating architecture, construction, and delivery timelines across active projects in Colombo and the Maldives.",
    image: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?q=80&w=800",
  },
  {
    id: "member-5",
    name: "Name Placeholder",
    designation: "Head of Hospitality Operations",
    portfolio:
      "Oversees operational standards across GIARA's hospitality assets, working closely with operating partners to maintain a consistent, considered guest experience.",
    image: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=800",
  },
  {
    id: "member-6",
    name: "Name Placeholder",
    designation: "General Counsel",
    portfolio:
      "Leads legal and regulatory matters across GIARA's investment structures, ensuring compliance and clarity across every market the firm operates in.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=801",
  },
];